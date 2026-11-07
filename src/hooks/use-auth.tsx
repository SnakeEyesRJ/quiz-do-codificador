import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

export interface Profile {
  id: string;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
}

interface AuthCtx {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const LOCAL_PROFILE_KEY = "quiz_profile_override_";

export function getLocalProfile(userId: string): Partial<Profile> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(LOCAL_PROFILE_KEY + userId);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setLocalProfile(userId: string, data: Partial<Profile>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_PROFILE_KEY + userId, JSON.stringify(data));
  } catch {}
}

const Ctx = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const loadProfile = useCallback(async (u: User | null) => {
    if (!u) {
      setProfile(null);
      return;
    }

    const local = getLocalProfile(u.id);
    const meta = (u.user_metadata ?? {}) as Record<string, any>;

    // Consulta somente colunas garantidas no banco remoto (evita erro se a coluna bio não existir)
    let dbRow: { id: string; display_name: string | null; avatar_url: string | null } | null = null;
    try {
      const { data } = await supabase
        .from("profiles")
        .select("id, display_name, avatar_url")
        .eq("id", u.id)
        .maybeSingle();
      if (data) dbRow = data;
    } catch (e) {
      console.warn("Não foi possível carregar tabela profiles:", e);
    }

    const identityData =
      ((u.identities?.find((i) => i.provider === "google")?.identity_data ??
        u.identities?.[0]?.identity_data ??
        {}) as Record<string, any>);

    const googleAvatar =
      identityData["picture"] ||
      identityData["avatar_url"] ||
      meta["picture"] ||
      meta["avatar_url"] ||
      null;

    // Prioridade de dados: banco > local storage > auth user_metadata > dados padrão da conta Google
    const displayName =
      dbRow?.display_name ||
      local?.display_name ||
      meta["display_name"] ||
      meta["name"] ||
      meta["full_name"] ||
      identityData["full_name"] ||
      identityData["name"] ||
      u.email?.split("@")[0] ||
      "Jogador";

    // Sempre prioriza a foto da conta Google utilizada para entrar no site
    const avatarUrl = googleAvatar || dbRow?.avatar_url || local?.avatar_url || null;

    const bio = (meta["bio"] as string | undefined) ?? local?.bio ?? null;

    const resolved: Profile = {
      id: u.id,
      display_name: displayName,
      avatar_url: avatarUrl,
      bio: bio,
    };

    setProfile(resolved);
    setLocalProfile(u.id, resolved);

    // Sincroniza registro no banco para garantir que a foto da conta Google esteja salva no perfil
    if (!dbRow || (googleAvatar && dbRow.avatar_url !== googleAvatar)) {
      try {
        await supabase.from("profiles").upsert({
          id: u.id,
          display_name: displayName,
          avatar_url: avatarUrl,
        });
      } catch (err) {
        console.warn("Upsert inicial de perfil ignorado:", err);
      }
    }
  }, []);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "TOKEN_REFRESHED") return;
      const u = session?.user ?? null;
      setUser(u);
      setTimeout(() => void loadProfile(u), 0);
    });
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      void loadProfile(data.user).finally(() => setLoading(false));
    });
    return () => sub.subscription.unsubscribe();
  }, [loadProfile]);

  const value: AuthCtx = {
    user,
    profile,
    loading,
    signInWithGoogle: async () => {
      const r = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: window.location.origin,
      });
      if (r.error) {
        const { error: sbErr } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: { redirectTo: window.location.origin },
        });
        if (sbErr) throw r.error;
        return;
      }
      if (!r.redirected) {
        const { data } = await supabase.auth.getUser();
        if (data.user) {
          setUser(data.user);
          await loadProfile(data.user);
        }
      }
    },
    signOut: async () => {
      await supabase.auth.signOut();
    },
    refreshProfile: async () => {
      try {
        const { data } = await supabase.auth.getUser();
        const freshUser = data.user ?? user;
        if (freshUser) setUser(freshUser);
        await loadProfile(freshUser);
      } catch {
        await loadProfile(user);
      }
    },
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth must be used inside AuthProvider");
  return c;
}
