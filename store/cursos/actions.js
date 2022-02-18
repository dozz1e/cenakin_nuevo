const base = "https://cenakinaulaonline.com/wp-json/wc/v3/";
const kis =
  "&consumer_key=ck_8d87b7db23fc44e5cd9c9f1754c8ab64bf929840&consumer_secret=cs_4c5d058b5bf2d8080573c400de1ea5590d957499";

export default {
  async listaCursos({ commit }) {
    const cursos = await this.$axios.$get(
      `${base}products?category=38&per_page=50${kis}`
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
        "iPod"
      ].includes(navigator.platform) ||
      (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    let ext = "jpg";
    if (!aux) ext = "webp";
    commit("SET_EXTENSION", ext);
  }
};
