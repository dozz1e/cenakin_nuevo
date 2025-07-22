<template>
  <div id="cursos">
    <cargando v-if="0 == listadoCursos.length"></cargando>

    <div v-else>
      <header class="pb-5">
        <v-row class="d-flex align-center">
          <v-col cols="12" xs="12" sm="7" class="header">NUESTROS CURSOS</v-col>
        </v-row>
      </header>
      <div v-if="categoria === 'masoterapia'">
        <v-dialog v-model="dialog" max-width="700" elevation="0">
          <v-btn
            color="white"
            fab
            small
            dark
            class="mb-2"
            @click="dialog = false"
          >
            <v-icon class="black--text">mdi-close</v-icon>
          </v-btn>
          <Suscripcion curso="Todos los cursos"></Suscripcion>
        </v-dialog>
        <v-row v-if="catCurso('diplomado-salud')">
          <v-col cols="12">
            <h2>Para ser un Masoterapeuta Profesional</h2>
          </v-col>
          <curso
            v-for="(curso, i) in catCurso('diplomado-salud')"
            :key="i"
            :titulo="curso.name"
            :categoria="curso.categories"
            :imagen="curso.featured_image_url"
            :idCurso="curso.id"
            :slug="curso.slug"
            :valor="curso.price"
          >
          </curso>
        </v-row>
        <v-row class="mt-8" v-if="catCurso('explora-masoterapia')">
          <v-col cols="12">
            <h2>Inicia o explora en la masoterapia</h2>
          </v-col>
          <curso
            v-for="(curso, i) in catCurso('explora-masoterapia')"
            :key="i"
            :titulo="curso.name"
            :categoria="curso.categories"
            :imagen="curso.featured_image_url"
            :idCurso="curso.id"
            :slug="curso.slug"
            :valor="curso.price"
          >
          </curso>
        </v-row>
        <v-row class="mt-8" v-if="catCurso('masajes')">
          <v-col cols="12">
            <h2>Cursos de masajes</h2>
          </v-col>
          <curso
            v-for="(curso, i) in catCurso('masajes')"
            :key="i"
            :titulo="curso.name"
            :categoria="curso.categories"
            :imagen="curso.featured_image_url"
            :idCurso="curso.id"
            :slug="curso.slug"
            :valor="curso.price"
          >
          </curso>
        </v-row>
        <v-row class="mt-8" v-if="catCurso('masajes-deportivos')">
          <v-col cols="12">
            <h2>Cursos de masajes deportivos</h2>
          </v-col>
          <curso
            v-for="(curso, i) in catCurso('masajes-deportivos')"
            :key="i"
            :titulo="curso.name"
            :categoria="curso.categories"
            :imagen="curso.featured_image_url"
            :idCurso="curso.id"
            :slug="curso.slug"
            :valor="curso.price"
          >
          </curso>
        </v-row>
        <v-row class="mt-8" v-if="catCurso('masajes-esteticos')">
          <v-col cols="12">
            <h2>Cursos de masajes estéticos</h2>
          </v-col>
          <curso
            v-for="(curso, i) in catCurso('masajes-esteticos')"
            :key="i"
            :titulo="curso.name"
            :categoria="curso.categories"
            :imagen="curso.featured_image_url"
            :idCurso="curso.id"
            :slug="curso.slug"
            :valor="curso.price"
          >
          </curso>
        </v-row>
        <v-row class="mt-8" v-if="catCurso('terapia-complementaria')">
          <v-col cols="12">
            <h2>Terapia complementaria</h2>
          </v-col>
          <curso
            v-for="(curso, i) in catCurso('terapia-complementaria')"
            :key="i"
            :titulo="curso.name"
            :categoria="curso.categories"
            :imagen="curso.featured_image_url"
            :idCurso="curso.id"
            :slug="curso.slug"
            :valor="curso.price"
          >
          </curso>
        </v-row>
      </div>
      <v-row v-else>
        <curso
          v-for="(curso, i) in cursoBuscar"
          :key="i"
          :titulo="curso.name"
          :categoria="curso.categories"
          :imagen="curso.featured_image_url"
          :idCurso="curso.id"
          :slug="curso.slug"
          :valor="curso.price"
        ></curso>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Curso from "~/components/Curso";
import Cargando from "~/components/Cargando";
import Suscripcion from "~/components/Suscripcion";

export default {
  name: "CursosComp",
  props: {
    categoria: {
      type: String,
    },
  },
  data() {
    return {
      dialog: true,
    };
  },
  components: {
    Curso,
    Cargando,
    Suscripcion,
  },
  computed: {
    ...mapGetters("cursos", ["listadoCursos"]),
    cursoBuscar() {
      let cates = [];
      let aux = this.categoria;
      if (aux) {
        cates = this.listadoCursos.filter(function (cat) {
          return cat.categories.some((ca) => aux === ca.slug);
        });
      }
      return cates;
    },
  },
  methods: {
    catCurso(cate) {
      let cates = this.listadoCursos.filter(function (cat) {
        return cat.categories.some((ca) => cate === ca.slug);
      });
      let aux = cates;
      if (0 == aux.length) aux = false;
      return aux;
    },
  },
};
</script>

<style lang="sass">
#cursos
  header
    .header
      color: #fafafa
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
