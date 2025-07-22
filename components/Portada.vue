<template>
  <!-- <div id="portada">
    <v-card class="ma-0 elevation-0">
      <div id="portadaInfo" class="d-flex flex-column align-start justify-end">
        <v-img
          sizes="(max-width: 1904px) 100vw, 1904px"
          src="/images/portada/1.webp"
          srcset="/images/portada/1_600.webp 960w, /images/portada/1_960.webp 1264w, /images/portada/1_1264.webp 1904w"
          alt="Portada Cenakin"
          class="portada__image"
          height="600px"
          width="100%"
        >
          <v-container>
            <v-row>
              <v-col cols="12" sm="1" v-if="$vuetify.breakpoint.smOnly"></v-col>
              <v-col cols="12" sm="6" class="d-flex justify-end flex-column">
                <v-card
                  color="transparent"
                  flat
                  class="d-flex justify-center flex-column"
                >
                  <h1>Formando personas para el nuevo mundo</h1>
                  <v-card-text class="pl-0">
                    <v-avatar size="30px" color="white" class="mr-2">
                      <v-img
                        alt="Logo Cenakin"
                        src="/images/logo.svg"
                        height="40"
                      ></v-img>
                    </v-avatar>
                    Cenakin OTEC
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </div>
    </v-card>
  </div> -->
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
