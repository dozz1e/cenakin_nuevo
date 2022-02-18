<template>
  <div id="cursos">
    <cargando v-if="0 >= listadoCursos.length"></cargando>
    <div v-else>
      <header class="pb-5">
        <v-row class="d-flex align-center">
          <v-col cols="12" xs="12" sm="7" class="header">NUESTROS CURSOS</v-col>
        </v-row>
      </header>
      <div v-if="0 < cursoBuscar.length">
        <v-row>
          <curso
            v-for="(curso, i) in cursoBuscar"
            :key="i"
            :titulo="curso.name"
            :categoria="curso.categories"
            :imagen="curso.featured_image_url"
            :idCurso="curso.id"
            :slug="curso.slug"
          ></curso>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Curso from "~/components/Curso";
import Cargando from "~/components/Cargando";

export default {
  name: "CursosComp",
  props: {
    categoria: {
      type: String,
    },
  },
  components: {
    Curso,
    Cargando,
  },
  computed: {
    ...mapGetters("cursos", ["listadoCursos"]),
    cursoBuscar() {
      let cates = [];
      let aux = this.categoria;
      if (this.categoria) {
        cates = this.listadoCursos.filter(function (cat) {
          return cat.categories.some((ca) => aux === ca.slug);
        });
      }
      return cates;
    },
  },
};
</script>

<style lang="sass">
#cursos
  margin-top: -150px
  header
    .header
      color: #eee
      font-family: 'Oswald', sans-serif
      font-size: 24px
      padding-bottom: 0
      z-index: 1
      @media (min-width: 600px)
        padding-bottom: 10px
  .v-text-field .v-input__slot
    margin-bottom: 0 !important
  .orange-card
    border: 3px solid red
  .green-card
    border: 3px solid red
  .blue-card
    border: 3px solid red
  .orange-card, .green-card, .blue-card
    font-size: 1.8rem
    .v-image
      .v-responsive__content
        align-items: center
        display: flex
        span
          text-shadow: 1px 1px 1px #000
</style>