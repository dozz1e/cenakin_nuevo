<template>
  <div class="image-container">
    <picture>
      <source
        srcset="/images/portada/1_1264.webp"
        media="(min-width: 1200px)"
        type="image/webp"
      />
      <source
        srcset="/images/portada/1_960.webp"
        media="(min-width: 768px)"
        type="image/webp"
      />
      <img src="/images/portada/1_600.webp" alt="Portada Cenakin" />
    </picture>
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
video
  width: 100%
  height: auto
</style>
