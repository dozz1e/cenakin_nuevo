<template>
  <div id="portadaCat">
    <v-card class="ma-0 elevation-0">
      <div id="portadaInfo" class="d-flex flex-column align-start justify-end">
        <picture>
          <source :srcset="`/images/portada/categorias/${portada}_600.webp`" media="(max-width: 800px)" />
          <source :srcset="`/images/portada/categorias/${ portada }_960.webp`" media="(max-width: 1330px)" />
          <source :srcset="`/images/portada/categorias/${portada}_1264.webp`" media="(max-width: 1920px)" />
          <img :src="`/images/portada/categorias/${portada}_1264.webp`" :alt="`Portada ${portada}`" width="100%" height="600"/>
        </picture>
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

<style lang="sass">
#portadaCat
  picture
    width: 100%
#link_portada
  display: flex
  justify-content: center
  overflow: hidden
  width: 100%
</style>
