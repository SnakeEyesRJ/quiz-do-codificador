import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PlayerAvatar } from "@/components/PlayerAvatar";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/perfil")({
  head: () => ({
    meta: [
      { title: "QUIZ DO CODIFICADOR" },
      { name: "description", content: "Altere seu avatar e veja suas estatísticas." },
      { property: "og:title", content: "QUIZ DO CODIFICADOR" },
      { property: "og:description", content: "Avatar e estatísticas do jogador." },
    ],
  }),
  component: Perfil,
});

const TYPES = ["image/jpeg", "image/png", "image/webp"];

function Perfil() {
  const { user, profile, signInWithGoogle, refreshProfile } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (!user)
    return (
      <main className="mx-auto max-w-md px-4 py-16 text-center">
        <h1 className="text-4xl font-bold">Perfil</h1>
        <Button className="mt-6" onClick={() => signInWithGoogle()}>
          Entrar com Google
        </Button>
      </main>
    );

  const pick = (f: File | undefined) => {
    if (!f) return;
    if (!TYPES.includes(f.type)) return toast.error("Use JPG, JPEG, PNG ou WEBP.");
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const save = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const path = `${user.id}/avatar-${Date.now()}.${file.name.split(".").pop()}`;
      const up = await supabase.storage.from("avatars").upload(path, file, { upsert: true });
      if (up.error) throw up.error;
      const signed = await supabase.storage
        .from("avatars")
        .createSignedUrl(path, 60 * 60 * 24 * 365 * 5);
      if (signed.error) throw signed.error;
      const { error } = await supabase
        .from("profiles")
        .update({ avatar_url: signed.data.signedUrl })
        .eq("id", user.id);
      if (error) throw error;
      await refreshProfile();
      setFile(null);
      setPreview(null);
      toast.success("Avatar atualizado!");
    } catch {
      toast.error("Não foi possível salvar o avatar.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="mx-auto max-w-md px-4 py-12 text-center">
      <PlayerAvatar url={preview ?? profile?.avatar_url} size={120} className="mx-auto" />
      <h1 className="mt-4 text-4xl font-bold">{profile?.display_name ?? "Jogador"}</h1>
      <label className="mt-6 block cursor-pointer rounded-xl border-2 border-dashed bg-card p-4 text-sm">
        Escolher nova imagem (JPG, PNG, WEBP)
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.webp"
          className="hidden"
          onChange={(e) => pick(e.target.files?.[0])}
        />
      </label>
      {preview && (
        <div className="mt-4 flex justify-center gap-3">
          <Button variant="hero" onClick={save} disabled={busy}>
            Confirmar avatar
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setFile(null);
              setPreview(null);
            }}
          >
            Cancelar
          </Button>
        </div>
      )}
    </main>
  );
}
