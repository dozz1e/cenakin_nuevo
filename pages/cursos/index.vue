<template>
  <div>
    <Portada></Portada>
    <v-container>
      <cursosCat></cursosCat>
    </v-container>
    <marquesina texto="empoderamiento.profesionalismo.expansión.liderazgo."></marquesina>
    <contactoComp></contactoComp>
    <sociales></sociales>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Portada from "~/components/Portada";
import CursosCat from "~/components/CursosCat";
import Foot from "~/components/Foot";

export default {
  components: { Portada, CursosCat, Foot },
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
        { property: "og:url", content: "https://www.cenakin.cl/cursos" },
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

</style>