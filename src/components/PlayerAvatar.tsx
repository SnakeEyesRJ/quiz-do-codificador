import { useRef } from "react";
import { Camera, Trash2, UserRound } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import chico from "@/assets/chico.png.asset.json";

const CUSTOM_AVATAR_KEY = "quiz_custom_player_avatar";
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export function getStoredCustomAvatar(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(CUSTOM_AVATAR_KEY);
  } catch {
    return null;
  }
}

export function setStoredCustomAvatar(dataUrl: string | null) {
  if (typeof window === "undefined") return;
  try {
    if (dataUrl) {
      localStorage.setItem(CUSTOM_AVATAR_KEY, dataUrl);
    } else {
      localStorage.removeItem(CUSTOM_AVATAR_KEY);
    }
  } catch {}
}

/**
 * Recorta a imagem centralizada na proporção 1:1 (quadrada) e redimensiona para `targetSize × targetSize`.
 */
export async function cropImageToSquare1x1(file: File, targetSize = 320): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = (e) => {
      img.onload = () => {
        const minSide = Math.min(img.width, img.height);
        const sx = Math.floor((img.width - minSide) / 2);
        const sy = Math.floor((img.height - minSide) / 2);

        const canvas = document.createElement("canvas");
        canvas.width = targetSize;
        canvas.height = targetSize;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas não suportado"));

        ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, targetSize, targetSize);
        try {
          const webp = canvas.toDataURL("image/webp", 0.86);
          if (webp.startsWith("data:image/webp")) return resolve(webp);
        } catch {}
        resolve(canvas.toDataURL("image/jpeg", 0.86));
      };
      img.onerror = () => reject(new Error("Falha ao processar imagem"));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error("Falha ao ler arquivo"));
    reader.readAsDataURL(file);
  });
}

export function PlayerAvatar({
  url,
  size = 56,
  className,
}: {
  url?: string | null | undefined;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "aspect-square shrink-0 overflow-hidden rounded-xl border-2 border-ink/20 bg-peach grid place-items-center",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {url ? (
        <img
          src={url}
          alt="Avatar do jogador"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
      ) : (
        <UserRound className="text-ink/60" style={{ width: size * 0.55, height: size * 0.55 }} />
      )}
    </div>
  );
}

export function AvatarPicker1x1({
  avatarUrl,
  onChange,
  size = 104,
  className,
}: {
  avatarUrl?: string | null | undefined;
  onChange: (newDataUrl: string | null) => void;
  size?: number;
  className?: string;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (file: File | undefined) => {
    if (!file) return;
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      toast.error("Formato inválido. Escolha uma imagem JPG, PNG ou WEBP.");
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      toast.error("A imagem deve ter no máximo 8 MB.");
      return;
    }
    try {
      const cropped = await cropImageToSquare1x1(file, 320);
      setStoredCustomAvatar(cropped);
      onChange(cropped);
      toast.success("Foto 1:1 atualizada para a partida!");
    } catch {
      toast.error("Não foi possível carregar a imagem selecionada.");
    }
  };

  return (
    <div className={cn("flex flex-col items-center gap-2 text-center", className)}>
      <span className="text-xs font-semibold tracking-wide text-ink/80">
        Seu avatar / foto de perfil (1:1):
      </span>

      <div className="relative group">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="relative aspect-square overflow-hidden rounded-2xl border-2 border-dashed border-ink/40 bg-card shadow-soft transition-all hover:border-ink hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring grid place-items-center cursor-pointer"
          style={{ width: size, height: size }}
          title="Clique para enviar uma foto de perfil 1:1"
        >
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Foto de perfil 1:1 do jogador"
              className="h-full w-full aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-1 p-2 text-muted-foreground">
              <Camera className="h-7 w-7 text-ink/70" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-ink/75">
                Foto 1:1
              </span>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center bg-ink/55 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="flex items-center gap-1 rounded-full bg-cream px-2.5 py-1 text-[10px] font-bold text-ink shadow">
              <Camera className="h-3 w-3" /> {avatarUrl ? "Trocar" : "Enviar"}
            </span>
          </div>
        </button>

        {avatarUrl && (
          <button
            type="button"
            onClick={() => {
              setStoredCustomAvatar(null);
              onChange(null);
              if (inputRef.current) inputRef.current.value = "";
            }}
            className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full border border-border bg-card text-destructive shadow hover:bg-destructive hover:text-white transition-colors cursor-pointer"
            title="Remover foto"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={(e) => void handleFileChange(e.target.files?.[0])}
      />

      <p className="text-[11px] text-muted-foreground">
        Clique no quadro 1:1 para escolher sua foto antes de iniciar.
      </p>
    </div>
  );
}

export function CodificadorPhoto({ size = 56, className }: { size?: number; className?: string }) {
  return (
    <img
      src={chico.url}
      alt="Codificador"
      className={cn(
        "shrink-0 rounded-xl border-2 border-ink/20 object-cover shadow-soft",
        className,
      )}
      style={{ width: size, height: size * (224 / 235) }}
    />
  );
}
