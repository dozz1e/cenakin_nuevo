const base = "https://cenakin.cl/otec/wp-json/wc/v3/";
const kis =
  "&consumer_key=ck_a62303a495e142cc35dbb14ca13884a4a8ae8b4e&consumer_secret=cs_49e0b6468aa1af67c931ed88fc59bfdacb5395ae";

export default {
  async listaCursos({ commit }) {
    const cursos = await this.$axios.$get(
      `${base}products?category=22&per_page=50${kis}`
    );
    commit("SET_CURSOS", cursos);
  },
  async buscarCurso({ commit }, idCurso) {
    const curso = await this.$axios.$get(
      `${base}products?slug=${idCurso}${kis}`
    );
    commit("SET_CURSO", curso[0]);
  },
  tamanoWindow({ commit }, anchoWindow) {
    commit("SET_ANCHO", anchoWindow);
  },
  quitarCurso({ commit }) {
    commit("SET_CURSO", null);
  },
  cambiarMenu({ commit }, datos) {
    commit("SET_MENU", datos);
  },
  setIOS({ commit }) {
    const aux =
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    let ext = "jpg";
    if (!aux) ext = "webp";
    commit("SET_EXTENSION", ext);
  },
};
