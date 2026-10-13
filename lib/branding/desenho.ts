/**
 * Desenho da marca padrão do CRM Novo Horizonte.
 *
 * O monograma NH combina hastes firmes (a precisão dos perfis de alumínio) com
 * uma linha verde de horizonte. A geometria vive em código para que a mesma
 * marca seja usada na navegação, na entrada e no ícone da aba sem arquivo
 * estático vazando para instalações com marca própria.
 */
export const SIMBOLO = {
  viewBox: "0 0 264 216",
  transform: "translate(0 0)",
  d: "M18 174V42h31l54 68V42h31v132h-30L49 106v68Z M154 42h30v49h38V42h30v132h-30v-54h-38v54h-30Z",
  modulo: { x: 18, y: 188, width: 234, height: 7, rx: 3.5 },
} as const;

/** Símbolo + wordmark, dimensionado pela altura para sidebar e fachada. */
export const LOGOTIPO = {
  viewBox: "0 0 420 160",
  proporcao: 420 / 160,
  simbolo: { ...SIMBOLO, transform: "translate(0 0) scale(0.65)" },
} as const;

/** Paleta baseada no azul-marinho e verde da identidade pública da Novo Horizonte. */
export const CORES_DA_MARCA = {
  claro: { simbolo: "#003f5c", nome: "#003f5c", sufixo: "#00a651" },
  escuro: { simbolo: "#dcebf0", nome: "#f5f7f5", sufixo: "#38c982" },
} as const;
