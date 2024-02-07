const base = "https://cenakin.cl/otec/wp-json/wp/v2/posts";

export default {
  async listaEntradas({ commit }) {
    const entradas = await this.$axios.$get(`${base}?per_page=100`);
    commit("SET_ENTRADAS", entradas);
  },
  async buscarEntrada({ commit }, idSlug) {
    const entrada = await this.$axios.$get(`${base}?slug=${idSlug}`);
    commit("SET_ENTRADA", entrada[0]);
  },
  quitarEntrada({ commit }) {
    commit("SET_ENTRADA", null);
  },
};
