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

const Ctx = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const loadProfile = useCallback(async (u: User | null) => {
    if (!u) return setProfile(null);
    const { data } = await supabase
      .from("profiles")
      .select("id, display_name, avatar_url, bio")
      .eq("id", u.id)
      .maybeSingle();
    if (data) return setProfile(data as Profile);
    // Fallback if the signup trigger has not created it yet.
    const meta = (u.user_metadata ?? {}) as Record<string, string | undefined>;
    const fresh: Profile = {
      id: u.id,
      display_name: meta["full_name"] ?? meta["name"] ?? u.email?.split("@")[0] ?? "Jogador",
      avatar_url: meta["avatar_url"] ?? meta["picture"] ?? null,
      bio: null,
    };
    await supabase.from("profiles").upsert(fresh);
    setProfile(fresh);
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
      if (r.error) throw r.error;
    },
    signOut: async () => {
      await supabase.auth.signOut();
    },
    refreshProfile: () => loadProfile(user),
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth must be used inside AuthProvider");
  return c;
}
