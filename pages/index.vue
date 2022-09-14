<template>
  <div>
    <portada></portada>
    <v-container class="pb-0">
      <cursosCat></cursosCat>
    </v-container>
    <marquesina
      texto="empoderamiento.profesionalismo.expansión.liderazgo."
    ></marquesina>
    <v-container class="pb-0">
      <faqComp></faqComp>
    </v-container>
    <contactoComp></contactoComp>
    <sociales></sociales>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Portada from "~/components/Portada";
import CursosCat from "~/components/CursosCat";
import FaqComp from "~/components/FaqComp";
import ContactoComp from "~/components/ContactoComp";
import Sociales from "~/components/Sociales";
import Marquesina from "~/components/Marquesina";

export default {
  components: {
    Portada,
    CursosCat,
    FaqComp,
    Marquesina,
    ContactoComp,
    Sociales,
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
        { property: "og:image", content: "https://cenakin.cl/images/logo_completo.png" },
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
