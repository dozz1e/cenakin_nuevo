<template>
  <div id="portadaCat">
    <v-card class="ma-0 elevation-0">
      <div id="portadaInfo" class="d-flex flex-column align-start justify-end">
        <v-img
          sizes="(max-width: 1904px) 100vw, 1904px"
          :src="`/images/portada/categorias/${portada}.${extension}`"
          :srcset="`/images/portada/categorias/${portada}_600.${extension} 960w, /images/portada/categorias/${portada}_960.${extension} 1264w, /images/portada/categorias/${portada}_1264.${extension} 1904w`"
          :alt="`Portada ${portada}`"
          height="400px"
          width="100%"
        >
        </v-img>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    portada: {
      type: String,
    },
  },
  computed: {
    ...mapGetters("cursos", ["extension"]),
  },
};
</script>

<style>
</style>