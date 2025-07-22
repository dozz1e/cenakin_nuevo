<template>
  <div>
    <portada></portada>
    <v-container class="pb-0">
      <cursosCat></cursosCat>
    </v-container>
    <marquesina
      texto="empoderamiento - profesionalismo - expansión - liderazgo -"
      class="py-16"
    ></marquesina>
    <v-container class="pb-0">
      <faqComp></faqComp>
    </v-container>
    <contactoComp></contactoComp>
    <v-dialog v-model="dialog" max-width="700" elevation="0">
      <v-btn color="white" fab small dark class="mb-2" @click="dialog = false">
        <v-icon class="black--text">mdi-close</v-icon>
      </v-btn>
      <Suscripcion curso="Todos los cursos"></Suscripcion>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Portada from "~/components/Portada";
import CursosCat from "~/components/CursosCat";
import FaqComp from "~/components/FaqComp";
import ContactoComp from "~/components/ContactoComp";
import Marquesina from "~/components/Marquesina";
import Suscripcion from "~/components/Suscripcion.vue";

export default {
  components: {
    Portada,
    CursosCat,
    FaqComp,
    Marquesina,
    ContactoComp,
    Suscripcion,
  },
  data() {
    return {
      dialog: true,
      textoBasico: "empoderamiento.profesionalismo.expansión.liderazgo.",
    };
  },
  head() {
    return {
      title: "Cenakin OTEC Cursos Viña del Mar, Chile",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Un nuevo método de enseñanza para distintos cursos, con materiales incluidos, docentes kinesiólogos y calidad de servicio Viña del Mar, Chile.",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content:
            "Cenakin Cursos Online y Presenciales en Viña del Mar, Chile",
        },
        {
          property: "og:description",
          content:
            "Un nuevo método de enseñanza para distintos cursos, con materiales incluidos, docentes kinesiólogos y calidad de servicio Viña del Mar, Chile.",
        },
        { property: "og:url", content: "https://www.cenakin.cl/" },
        {
          property: "og:image",
          content: "https://cenakin.cl/images/logo_completo.png",
        },
      ],
    };
  },
  beforeCreate() {
    this.$vuetify.theme.dark = true;
  },
  mounted() {
    this.cambiarMenu(true);
  },
  methods: {
    ...mapActions("cursos", ["cambiarMenu"]),
  },
};
</script>

<style>
.v-dialog {
  box-shadow: none !important;
}
</style>
