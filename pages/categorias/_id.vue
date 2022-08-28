<template>
  <div id="categorias">
    <portadaCat :portada="this.$route.params.id"></portadaCat>
    <v-container class="pb-0">
      <cursosComp :categoria="this.$route.params.id"></cursosComp>
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
import PortadaCat from "~/components/PortadaCat";
import CursosComp from "~/components/CursosComp";
import FaqComp from "~/components/FaqComp";
import ContactoComp from "~/components/ContactoComp";
import Sociales from "~/components/Sociales";
import Marquesina from "~/components/Marquesina";

export default {
  components: {
    PortadaCat,
    CursosComp,
    FaqComp,
    ContactoComp,
    Sociales,
    Marquesina,
  },
  beforeCreate() {
    this.$vuetify.theme.dark = true;
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
        { property: "og:type", content: "og:website" },
        {
          property: "og:url",
          content: `https://www.cenakin.cl/categorias/${this.$route.params.id}`,
        },
        {
          property: "og:title",
          content: "Cenakin OTEC Cursos Viña del Mar, Chile",
        },
        {
          property: "og:image",
          content: "https://cenakin.cl/images/portada/1.jpg",
        },
        {
          property: "og:description",
          content:
            "Un nuevo método de enseñanza para distintos cursos, con materiales incluidos, docentes kinesiólogos y calidad de servicio Viña del Mar, Chile.",
        },
        {
          property: "twitter:title",
          content: "Cenakin OTEC Blog Viña del Mar, Chile",
        },
        {
          property: "twitter:description",
          content:
            "Un nuevo método de enseñanza para distintos cursos, con materiales incluidos, docentes kinesiólogos y calidad de servicio Viña del Mar, Chile.",
        },
        {
          property: "twitter:image",
          content: "https://cenakin.cl/images/portada/1.jpg",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: `https://www.cenakin.cl/categorias/${this.$route.params.id}`,
        },
      ],
    };
  },
};
</script>

<style lang="sass"></style>
