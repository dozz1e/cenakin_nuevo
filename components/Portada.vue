<template>
  <a href="https://cenakin.cl/cursos/diplomado-masoterapia">
    <div class="image-container">
      <picture>
        <source
          srcset="/images/portada/1_1264.webp"
          media="(min-width: 1400px)"
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
  </a>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Portada",
  data: () => ({}),
  mounted() {
    this.cambiarMenu(true);
  },
  computed: {
    ...mapGetters("cursos", ["extension"]),
  },
  methods: {
    ...mapActions("cursos", ["cambiarMenu"]),
  },
  inject: ["theme"],
};
</script>

<style lang="sass">

#portada
  height: 600px
  margin: -64px 0 0
  display: flex
  justify-content: center
  overflow: hidden
  #link_portada
    display: flex
    justify-content: center
    overflow: hidden
    width: 100%
  img
    height: 600px
  .v-card
    background-position: center center
    background-repeat: no-repeat
    background-size: cover
    border-radius: none
    height: 600px
    width: 100%
    .v-image
      background-position: top center
    .v-list-item__subtitle
      font-size: 1.2rem
    #portadaInfo
      bottom: 0
      left: 0
      position: absolute
      right: 0
      top: 0
      overflow: hidden
      h1
        font-family: 'Oswald', sans-serif
        font-size: 2rem
        line-height: 1
        margin-bottom: 10px
        text-shadow: 1px 1px 1px black
        @media (min-width: 600px)
          font-size: 3rem
      p
        margin-bottom: 0
      span
        color: #ccc
        font-style: italic
        line-height: 1.2rem
      .v-responsive__content
        display: flex
    @media (min-width: 600px)
      .col
        display: flex
        flex-direction: column
        justify-content: flex-end

.image-container
  width: 100%
  height: 600px
  overflow: hidden
  display: flex
  justify-content: center
  align-items: center
  picture
    width: auto
    height: 100%
    object-fit: contain
  img
    width: auto
    height: 100%
    object-fit: contain
@media (min-width: 1200px)
  .image-container
    height: 670px
</style>
