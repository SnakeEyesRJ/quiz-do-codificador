import React from "react";

interface LightFlareSpec {
  id: number;
  top: string;
  left: string;
  size: number;
  coreSize: number;
  opacity: number;
  pulseDuration: string;
  driftDuration: string;
  delay: string;
  hasRays?: boolean;
}

/**
 * Conjunto de clarões/fachos de luz branca (light flares) distribuídos de forma
 * orgânica e aleatória pelo fundo, representando espíritos luminosos no "outro lado".
 */
const SPIRIT_LIGHT_FLARES: LightFlareSpec[] = [
  { id: 1, top: "6%", left: "8%", size: 130, coreSize: 18, opacity: 0.75, pulseDuration: "6.5s", driftDuration: "18s", delay: "-1.2s", hasRays: true },
  { id: 2, top: "12%", left: "24%", size: 85, coreSize: 12, opacity: 0.55, pulseDuration: "8.2s", driftDuration: "22s", delay: "-4.5s" },
  { id: 3, top: "7%", left: "46%", size: 110, coreSize: 15, opacity: 0.65, pulseDuration: "7.4s", driftDuration: "20s", delay: "-2.8s", hasRays: true },
  { id: 4, top: "14%", left: "72%", size: 95, coreSize: 13, opacity: 0.6, pulseDuration: "9.1s", driftDuration: "25s", delay: "-6.0s" },
  { id: 5, top: "8%", left: "91%", size: 140, coreSize: 20, opacity: 0.8, pulseDuration: "7.0s", driftDuration: "19s", delay: "-3.3s", hasRays: true },
  { id: 6, top: "24%", left: "4%", size: 90, coreSize: 12, opacity: 0.58, pulseDuration: "8.8s", driftDuration: "23s", delay: "-7.1s" },
  { id: 7, top: "28%", left: "17%", size: 150, coreSize: 22, opacity: 0.78, pulseDuration: "6.8s", driftDuration: "21s", delay: "-0.7s", hasRays: true },
  { id: 8, top: "22%", left: "36%", size: 70, coreSize: 10, opacity: 0.5, pulseDuration: "10.2s", driftDuration: "26s", delay: "-5.4s" },
  { id: 9, top: "31%", left: "61%", size: 120, coreSize: 16, opacity: 0.68, pulseDuration: "7.9s", driftDuration: "22s", delay: "-8.9s", hasRays: true },
  { id: 10, top: "26%", left: "84%", size: 105, coreSize: 14, opacity: 0.64, pulseDuration: "8.4s", driftDuration: "24s", delay: "-2.1s" },
  { id: 11, top: "42%", left: "9%", size: 115, coreSize: 16, opacity: 0.72, pulseDuration: "7.2s", driftDuration: "20s", delay: "-9.6s", hasRays: true },
  { id: 12, top: "46%", left: "28%", size: 80, coreSize: 11, opacity: 0.52, pulseDuration: "9.5s", driftDuration: "27s", delay: "-3.9s" },
  { id: 13, top: "39%", left: "49%", size: 135, coreSize: 19, opacity: 0.7, pulseDuration: "6.9s", driftDuration: "19s", delay: "-11.2s", hasRays: true },
  { id: 14, top: "48%", left: "76%", size: 90, coreSize: 12, opacity: 0.58, pulseDuration: "8.6s", driftDuration: "23s", delay: "-1.8s" },
  { id: 15, top: "43%", left: "93%", size: 125, coreSize: 17, opacity: 0.74, pulseDuration: "7.6s", driftDuration: "21s", delay: "-6.7s", hasRays: true },
  { id: 16, top: "59%", left: "6%", size: 100, coreSize: 14, opacity: 0.62, pulseDuration: "8.1s", driftDuration: "24s", delay: "-4.2s" },
  { id: 17, top: "64%", left: "21%", size: 145, coreSize: 21, opacity: 0.78, pulseDuration: "6.4s", driftDuration: "18s", delay: "-10.4s", hasRays: true },
  { id: 18, top: "57%", left: "42%", size: 75, coreSize: 10, opacity: 0.48, pulseDuration: "9.8s", driftDuration: "25s", delay: "-2.5s" },
  { id: 19, top: "66%", left: "67%", size: 130, coreSize: 18, opacity: 0.72, pulseDuration: "7.3s", driftDuration: "20s", delay: "-7.8s", hasRays: true },
  { id: 20, top: "61%", left: "88%", size: 95, coreSize: 13, opacity: 0.6, pulseDuration: "8.9s", driftDuration: "22s", delay: "-5.1s" },
  { id: 21, top: "77%", left: "12%", size: 125, coreSize: 17, opacity: 0.74, pulseDuration: "7.1s", driftDuration: "21s", delay: "-3.4s", hasRays: true },
  { id: 22, top: "82%", left: "33%", size: 90, coreSize: 12, opacity: 0.56, pulseDuration: "8.7s", driftDuration: "23s", delay: "-8.3s" },
  { id: 23, top: "75%", left: "54%", size: 110, coreSize: 15, opacity: 0.66, pulseDuration: "7.7s", driftDuration: "19s", delay: "-1.5s", hasRays: true },
  { id: 24, top: "84%", left: "73%", size: 140, coreSize: 20, opacity: 0.76, pulseDuration: "6.7s", driftDuration: "20s", delay: "-9.1s", hasRays: true },
  { id: 25, top: "79%", left: "92%", size: 85, coreSize: 12, opacity: 0.58, pulseDuration: "9.3s", driftDuration: "26s", delay: "-4.8s" },
  { id: 26, top: "92%", left: "19%", size: 105, coreSize: 14, opacity: 0.65, pulseDuration: "8.0s", driftDuration: "22s", delay: "-6.3s" },
  { id: 27, top: "94%", left: "58%", size: 120, coreSize: 16, opacity: 0.7, pulseDuration: "7.5s", driftDuration: "21s", delay: "-2.9s", hasRays: true },
  { id: 28, top: "91%", left: "83%", size: 100, coreSize: 14, opacity: 0.64, pulseDuration: "8.3s", driftDuration: "24s", delay: "-11.7s" },
];

export function SpiritsOfLightBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {SPIRIT_LIGHT_FLARES.map((flare) => (
        <div
          key={flare.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            top: flare.top,
            left: flare.left,
            width: flare.size,
            height: flare.size,
            animation: `spiritFlareDrift ${flare.driftDuration} ease-in-out ${flare.delay} infinite alternate`,
          }}
        >
          <div
            className="relative flex h-full w-full items-center justify-center"
            style={{
              opacity: flare.opacity,
              animation: `spiritFlarePulse ${flare.pulseDuration} ease-in-out ${flare.delay} infinite alternate`,
            }}
          >
            {/* Halo difuso de luz branca pura */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.55) 22%, rgba(255,255,255,0.18) 52%, rgba(255,255,255,0) 75%)",
                filter: "blur(3px)",
              }}
            />

            {/* Raios suaves de flare estelar (nos espíritos mais luminosos) */}
            {flare.hasRays && (
              <>
                <div
                  className="absolute rounded-full"
                  style={{
                    width: flare.size * 1.15,
                    height: 2,
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0) 100%)",
                    filter: "blur(0.6px)",
                  }}
                />
                <div
                  className="absolute rounded-full"
                  style={{
                    width: 2,
                    height: flare.size * 1.15,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0) 100%)",
                    filter: "blur(0.6px)",
                  }}
                />
              </>
            )}

            {/* Núcleo branco brilhante */}
            <div
              className="rounded-full bg-white"
              style={{
                width: flare.coreSize,
                height: flare.coreSize,
                boxShadow: "0 0 16px 6px rgba(255, 255, 255, 0.9)",
                filter: "blur(0.5px)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
