/**
 * Imagem de Jesus como fundo fixo e discreto do Quiz do Codificador.
 * "contain" preserva a imagem inteira, sem cortes nas bordas.
 */
export function SpiritsOfLightBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 select-none"
      style={{
        backgroundImage:
          "url(https://cdn.tukioswebsites.com/8a915317-322d-445c-8204-f483e6bc9383/lg)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        opacity: 0.16,
      }}
    />
  );
}
