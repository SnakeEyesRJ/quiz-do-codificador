import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Camera,
  CheckCircle2,
  FileText,
  History,
  Loader2,
  RefreshCw,
  Swords,
  Trophy,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlayerAvatar } from "@/components/PlayerAvatar";
import { useAuth, setLocalProfile } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/perfil")({
  head: () => ({
    meta: [
      { title: "QUIZ DO CODIFICADOR" },
      { name: "description", content: "Personalize seu nome de usuário, avatar e bio de jogador." },
      { property: "og:title", content: "QUIZ DO CODIFICADOR" },
      { property: "og:description", content: "Perfil do jogador no Quiz do Codificador." },
    ],
  }),
  component: Perfil,
});

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

async function compressImage(file: File, maxDim = 320): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = (e) => {
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas não suportado"));
        ctx.drawImage(img, 0, 0, width, height);
        try {
          const webp = canvas.toDataURL("image/webp", 0.85);
          if (webp.startsWith("data:image/webp")) return resolve(webp);
        } catch {}
        resolve(canvas.toDataURL("image/jpeg", 0.85));
      };
      img.onerror = () => reject(new Error("Falha ao processar imagem"));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error("Falha ao ler arquivo"));
    reader.readAsDataURL(file);
  });
}

function Perfil() {
  const { user, profile, loading, signInWithGoogle, refreshProfile } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [stats, setStats] = useState<{ total: number; wins: number; rounds: number } | null>(null);

  // Sincroniza estado inicial com o perfil carregado
  useEffect(() => {
    if (profile) {
      setDisplayName(profile.display_name ?? "");
      setBio(profile.bio ?? "");
    }
  }, [profile]);

  // Carrega estatísticas do jogador
  useEffect(() => {
    if (!user) return;
    async function loadStats() {
      const { data } = await supabase
        .from("matches")
        .select("id, status, winner, player_rounds")
        .eq("user_id", user!.id);
      if (data) {
        const total = data.length;
        const wins = data.filter((m) => m.winner === "player").length;
        const rounds = data.reduce((acc, m) => acc + (m.player_rounds || 0), 0);
        setStats({ total, wins, rounds });
      }
    }
    void loadStats();
  }, [user]);

  if (loading) {
    return (
      <main className="mx-auto flex max-w-md flex-col items-center justify-center px-4 py-20 text-center">
        <Loader2 className="h-8 w-8 animate-spin text-ink/70" />
        <p className="mt-3 text-sm text-muted-foreground">Carregando perfil...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="mx-auto max-w-md px-4 py-16 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-peach p-3 text-ink shadow-soft">
          <User className="h-8 w-8" />
        </div>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
          Perfil do Jogador
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Entre com sua conta Google para personalizar seu nome, bio e foto no placar e salvar seu
          histórico.
        </p>
        <Button
          variant="hero"
          size="lg"
          className="mt-6"
          onClick={() =>
            signInWithGoogle().catch(() => toast.error("Não foi possível entrar com o Google."))
          }
        >
          Entrar com Google
        </Button>
      </main>
    );
  }

  const googleAvatar =
    (user.user_metadata?.["avatar_url"] as string | undefined) ??
    (user.user_metadata?.["picture"] as string | undefined) ??
    null;

  const handlePickFile = (f: File | undefined) => {
    if (!f) return;
    if (!ALLOWED_TYPES.includes(f.type)) {
      toast.error("Formato inválido. Use JPG, PNG ou WEBP.");
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      toast.error("A imagem deve ter no máximo 5 MB.");
      return;
    }
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleRestoreGoogleAvatar = () => {
    if (!googleAvatar) {
      toast.info("Foto da conta Google não encontrada.");
      return;
    }
    setFile(null);
    setPreview(googleAvatar);
    toast.success("Foto do Google selecionada para o avatar.");
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = displayName.trim();
    if (!cleanName) {
      toast.error("Por favor, digite um nome de usuário.");
      return;
    }

    setBusy(true);
    try {
      let finalAvatarUrl: string | null = profile?.avatar_url ?? null;

      // Se um novo arquivo de imagem foi escolhido pelo usuário
      if (file) {
        try {
          finalAvatarUrl = await compressImage(file, 320);
        } catch {
          const reader = new FileReader();
          finalAvatarUrl = await new Promise<string>((resolve) => {
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(file);
          });
        }
      } else if (preview !== null) {
        finalAvatarUrl = preview;
      }

      const cleanBio = bio.trim();

      // 1. Salva localmente de forma imediata
      setLocalProfile(user.id, {
        id: user.id,
        display_name: cleanName,
        avatar_url: finalAvatarUrl,
        bio: cleanBio,
      });

      // 2. Salva nos metadados da conta do usuário no Supabase Auth (sem dependência de schema SQL)
      try {
        await supabase.auth.updateUser({
          data: {
            display_name: cleanName,
            name: cleanName,
            full_name: cleanName,
            avatar_url: finalAvatarUrl,
            bio: cleanBio,
          },
        });
      } catch (authErr) {
        console.warn("Aviso ao atualizar metadados de autenticação:", authErr);
      }

      // 3. Upsert no banco public.profiles para manter sincronizado
      try {
        const { error: pErr } = await supabase.from("profiles").upsert({
          id: user.id,
          display_name: cleanName,
          avatar_url: finalAvatarUrl,
          bio: cleanBio,
          updated_at: new Date().toISOString(),
        });
        if (pErr) {
          // Fallback caso a tabela no banco não tenha a coluna bio
          await supabase.from("profiles").upsert({
            id: user.id,
            display_name: cleanName,
            avatar_url: finalAvatarUrl,
            updated_at: new Date().toISOString(),
          });
        }
      } catch (dbErr) {
        console.warn("Aviso ao sincronizar profiles:", dbErr);
      }

      await refreshProfile();
      setFile(null);
      setPreview(null);
      toast.success("Perfil atualizado! Nome, foto e bio foram salvos com sucesso.");
    } catch (err) {
      console.error("Erro ao salvar perfil:", err);
      toast.error(err instanceof Error ? err.message : "Não foi possível salvar o perfil.");
    } finally {
      setBusy(false);
    }
  };

  const currentAvatarToDisplay = preview ?? profile?.avatar_url ?? googleAvatar;

  return (
    <main className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
      {/* Cabeçalho do Perfil */}
      <div className="rounded-2xl border-2 border-border bg-card p-6 shadow-soft sm:p-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
          {/* Avatar com ação de troca */}
          <div className="flex flex-col items-center">
            <div className="relative group">
              <PlayerAvatar
                url={currentAvatarToDisplay}
                size={110}
                className="shadow-md ring-4 ring-peach/60"
              />
              <label
                className="absolute bottom-0 right-0 grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-ink text-cream shadow-md transition-transform hover:scale-110"
                title="Trocar avatar"
              >
                <Camera className="h-4 w-4" />
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  className="hidden"
                  onChange={(e) => handlePickFile(e.target.files?.[0])}
                />
              </label>
            </div>
            {googleAvatar && (
              <button
                type="button"
                onClick={handleRestoreGoogleAvatar}
                className="mt-2 text-[11px] font-semibold text-muted-foreground hover:text-ink underline flex items-center gap-1"
              >
                <RefreshCw className="h-3 w-3" /> Usar foto do Google
              </button>
            )}
          </div>

          {/* Dados do usuário */}
          <div className="flex-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-peach/70 px-2.5 py-0.5 text-[11px] font-bold text-ink border border-border/80">
              <CheckCircle2 className="h-3.5 w-3.5 text-forest" />
              Conta Google Verificada
            </div>
            <h1 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
              {profile?.display_name || displayName || "Jogador"}
            </h1>
            <p className="text-xs text-muted-foreground">{user.email}</p>
            {profile?.bio && (
              <p className="mt-3 text-sm italic leading-relaxed text-ink/80 bg-peach/20 p-2.5 rounded-xl border border-border/60">
                "{profile.bio}"
              </p>
            )}
          </div>
        </div>

        {/* Estatísticas do Jogador */}
        {stats && (
          <div className="mt-6 grid grid-cols-3 gap-2.5 border-t border-border/80 pt-5 text-center">
            <div className="rounded-xl bg-cream/70 p-2.5 border border-border/60">
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <Swords className="h-3.5 w-3.5" />
                <span className="text-[10px] uppercase font-bold tracking-wider">Partidas</span>
              </div>
              <p className="font-display text-xl font-bold text-ink mt-0.5">{stats.total}</p>
            </div>
            <div className="rounded-xl bg-cream/70 p-2.5 border border-border/60">
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <Trophy className="h-3.5 w-3.5" />
                <span className="text-[10px] uppercase font-bold tracking-wider">Vitórias</span>
              </div>
              <p className="font-display text-xl font-bold text-forest mt-0.5">{stats.wins}</p>
            </div>
            <div className="rounded-xl bg-cream/70 p-2.5 border border-border/60">
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <History className="h-3.5 w-3.5" />
                <span className="text-[10px] uppercase font-bold tracking-wider">Rodadas</span>
              </div>
              <p className="font-display text-xl font-bold text-ink mt-0.5">{stats.rounds}</p>
            </div>
          </div>
        )}
      </div>

      {/* Formulário de Edição do Perfil */}
      <form
        onSubmit={handleSave}
        className="mt-6 rounded-2xl border-2 border-border bg-card p-6 shadow-soft sm:p-8 space-y-5"
      >
        <div className="border-b border-border/80 pb-3">
          <h2 className="font-display text-xl font-bold text-ink">Editar Dados do Perfil</h2>
          <p className="text-xs text-muted-foreground">
            As alterações de nome e avatar serão exibidas imediatamente no placar das suas partidas.
          </p>
        </div>

        {/* Campo: Nome de Usuário */}
        <div>
          <label
            htmlFor="displayName"
            className="block text-xs font-bold uppercase tracking-wider text-ink/80"
          >
            Nome de Usuário / Jogador
          </label>
          <Input
            id="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Ex: Kardecista, Maria Silva, etc."
            maxLength={50}
            className="mt-1.5 bg-cream/50 text-ink font-semibold"
            required
          />
          <p className="mt-1 text-[11px] text-muted-foreground">
            Este nome aparecerá no topo do placar contra o Codificador em todas as rodadas.
          </p>
        </div>

        {/* Campo: Bio do Usuário */}
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="bio"
              className="block text-xs font-bold uppercase tracking-wider text-ink/80"
            >
              Bio / Sobre você
            </label>
            <span className="text-[10px] text-muted-foreground">{bio.length}/300 caracteres</span>
          </div>
          <Textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Conte brevemente sobre seus estudos da Doutrina Espírita, suas leituras ou sua jornada..."
            rows={4}
            maxLength={300}
            className="mt-1.5 bg-cream/50 text-ink resize-none text-sm leading-relaxed"
          />
          <p className="mt-1 text-[11px] text-muted-foreground">
            Uma breve descrição opcional sobre seus estudos ou mensagem de fé e caridade.
          </p>
        </div>

        {/* Campo: Foto do Avatar */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink/80">
            Foto do Avatar
          </label>
          <div className="mt-1.5 flex flex-wrap items-center gap-3">
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-cream/80 px-4 py-2 text-xs font-semibold text-ink shadow-xs transition-colors hover:bg-peach">
              <Camera className="h-4 w-4" />
              <span>Escolher nova foto (JPG, PNG, WEBP)</span>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                className="hidden"
                onChange={(e) => handlePickFile(e.target.files?.[0])}
              />
            </label>
            {preview && (
              <span className="text-xs font-medium text-forest">
                Nova imagem selecionada (não salva)
              </span>
            )}
          </div>
        </div>

        {/* Botão de Salvar */}
        <div className="grid grid-cols-1 gap-3 border-t border-border/80 pt-4 sm:grid-cols-2">
          <Button type="submit" variant="hero" size="lg" className="w-full px-4" disabled={busy}>
            {busy ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <CheckCircle2 className="h-4 w-4" />
            )}
            Salvar alterações no perfil
          </Button>

          <Button asChild variant="secondary" size="lg" className="w-full px-4">
            <Link to="/jogar">
              <Swords className="h-4 w-4" /> Jogar partida com seu perfil
            </Link>
          </Button>
        </div>
      </form>
    </main>
  );
}
