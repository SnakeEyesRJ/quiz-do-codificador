import React from "react";

interface SpiritFigureProps {
  className?: string;
  scale?: number;
  delay?: string;
  duration?: string;
}

/**
 * Silhueta etérea de um Espírito de Luz em branco puro, com halo suave,
 * túnica luminosa fluida e irradiação espiritual discreta.
 */
function SpiritOfLightFigure({
  className = "",
  scale = 1,
  delay = "0s",
  duration = "18s",
}: SpiritFigureProps) {
  return (
    <div
      className={`select-none pointer-events-none ${className}`}
      style={{
        animation: `spiritFloat ${duration} ease-in-out ${delay} infinite alternate`,
        transform: `scale(${scale})`,
      }}
    >
      <svg
        viewBox="0 0 200 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <defs>
          <radialGradient id="spiritAura" cx="50%" cy="32%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="spiritRobe" x1="100" y1="60" x2="100" y2="305" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="spiritWings" x1="100" y1="70" x2="100" y2="230" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Halo / Aura irradiante */}
        <circle cx="100" cy="95" r="85" fill="url(#spiritAura)" />
        <circle
          cx="100"
          cy="56"
          r="26"
          stroke="#FFFFFF"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />

        {/* Manto / Asas de luz ascendentes */}
        <path
          d="M100 84 C65 72, 24 96, 14 148 C34 142, 62 156, 76 196 C84 162, 92 128, 100 84 Z"
          fill="url(#spiritWings)"
        />
        <path
          d="M100 84 C135 72, 176 96, 186 148 C166 142, 138 156, 124 196 C116 162, 108 128, 100 84 Z"
          fill="url(#spiritWings)"
        />

        {/* Cabeça luminosa */}
        <circle cx="100" cy="56" r="14" fill="#FFFFFF" fillOpacity="0.8" />

        {/* Corpo / Túnica fluida de luz que se dissolve suavemente */}
        <path
          d="M84 78 C72 110, 62 175, 48 285 C74 298, 126 298, 152 285 C138 175, 128 110, 116 78 C108 73, 92 73, 84 78 Z"
          fill="url(#spiritRobe)"
        />

        {/* Braços erguidos em prece / irradiação de paz */}
        <path
          d="M84 82 C64 96, 48 116, 36 136 C44 142, 56 134, 76 112"
          stroke="#FFFFFF"
          strokeOpacity="0.55"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M116 82 C136 96, 152 116, 164 136 C156 142, 144 134, 124 112"
          stroke="#FFFFFF"
          strokeOpacity="0.55"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Feixes verticais sutis de luz espiritual */}
        <line
          x1="100"
          y1="10"
          x2="100"
          y2="310"
          stroke="#FFFFFF"
          strokeOpacity="0.25"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

/**
 * Fundo decorativo com Espíritos de Luz em cor branca e opacidade quase imperceptível,
 * posicionado atrás das caixas de texto em todo o site.
 */
export function SpiritsOfLightBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Espíritos de Luz distribuídos pelo fundo com opacidade muito suave (barely visible) */}
      <SpiritOfLightFigure
        className="absolute -left-6 top-[6%] h-72 w-48 opacity-[0.085] blur-[1px] sm:left-[3%] sm:h-88 sm:w-56"
        delay="0s"
        duration="20s"
      />
      <SpiritOfLightFigure
        className="absolute -right-6 top-[8%] h-76 w-52 opacity-[0.085] blur-[1px] sm:right-[4%] sm:h-92 sm:w-60"
        delay="-5s"
        duration="22s"
      />
      <SpiritOfLightFigure
        className="absolute left-[14%] top-[36%] hidden h-64 w-44 opacity-[0.065] blur-[1.5px] lg:block"
        delay="-9s"
        duration="24s"
      />
      <SpiritOfLightFigure
        className="absolute right-[13%] top-[38%] hidden h-64 w-44 opacity-[0.065] blur-[1.5px] lg:block"
        delay="-12s"
        duration="21s"
      />
      <SpiritOfLightFigure
        className="absolute left-[2%] bottom-[8%] h-80 w-52 opacity-[0.08] blur-[1px] sm:left-[6%]"
        delay="-3s"
        duration="23s"
      />
      <SpiritOfLightFigure
        className="absolute right-[2%] bottom-[6%] h-80 w-52 opacity-[0.08] blur-[1px] sm:right-[6%]"
        delay="-14s"
        duration="19s"
      />
      <SpiritOfLightFigure
        className="absolute left-1/2 top-[18%] h-96 w-64 -translate-x-1/2 opacity-[0.055] blur-[2px]"
        delay="-7s"
        duration="26s"
      />
      <SpiritOfLightFigure
        className="absolute left-1/2 bottom-[14%] h-96 w-64 -translate-x-1/2 opacity-[0.06] blur-[2px]"
        delay="-16s"
        duration="25s"
      />
    </div>
  );
}
