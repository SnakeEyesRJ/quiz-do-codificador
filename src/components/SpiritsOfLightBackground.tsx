import React from "react";

/**
 * Plano de fundo fixo com as imagens de Maria (à esquerda), Jesus (à direita)
 * e São Miguel (ao centro no rodapé), levemente esmaecidas atrás do conteúdo do site.
 */
export function SpiritsOfLightBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Imagem de Maria alinhada à esquerda da tela e levemente esmaecida */}
      <div
        className="absolute inset-y-0 left-0 w-full bg-no-repeat"
        style={{
          backgroundImage: "url('/maria-bg.png?v=2')",
          backgroundPosition: "left bottom",
          backgroundSize: "contain",
          opacity: 0.24,
        }}
      />

      {/* Imagem de São Miguel alinhada ao centro no rodapé e levemente esmaecida */}
      <div
        className="absolute inset-y-0 inset-x-0 w-full bg-no-repeat"
        style={{
          backgroundImage: "url('/sao-miguel-bg.png')",
          backgroundPosition: "center bottom",
          backgroundSize: "contain",
          opacity: 0.24,
        }}
      />

      {/* Imagem de Jesus alinhada à direita da tela e levemente esmaecida */}
      <div
        className="absolute inset-y-0 right-0 w-full bg-no-repeat"
        style={{
          backgroundImage: "url('/jesus-bg.png')",
          backgroundPosition: "right bottom",
          backgroundSize: "contain",
          opacity: 0.24,
        }}
      />
    </div>
  );
}
