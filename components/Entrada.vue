<template>
  <v-col cols="12" class="pt-0 entrada">
    <nuxt-link :to="`/blog/${slug}`">
      <v-card class="d-flex flex-column" tile hover>
        <v-row no-gutters>
          <v-col cols="12" sm="4" class="d-flex pa-0">
            <v-img
              :src="`/images/blog/${slug}/1@1x.${extension}`"
              :alt="titulo"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="8" class="d-flex align-center">
            <div class="d-flex flex-column entrada-texto">
              <h2 v-text="titulo" class="mb-3"></h2>
              <span
                v-html="cortoMod(corto, 200)"
                v-if="$vuetify.breakpoint.xsOnly"
              ></span>
              <span
                v-html="cortoMod(corto, 300)"
                v-if="$vuetify.breakpoint.smAndUp"
              ></span>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </nuxt-link>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Entrada",
  props: ["idEntrada", "titulo", "categoria", "slug", "corto"],
  computed: {
    ...mapGetters("cursos", ["extension"]),
  },
  methods: {
    cortoMod(texto, largo) {
      return `${texto.substring(0, largo)}...(Seguir Leyendo)`;
    },
  },
};
</script>

<style lang="sass">
.entrada
  .v-card
    &:hover
      h2
        color: #049DFC
    h2
      font-size: 1.8rem
      line-height: 1.1
    .entrada-texto
      padding: 16px
    @media (min-width: 600px)
      height: 250px
      .entrada-texto
        padding: 0 20px
      .v-image
        height: 250px
        width: 300px
</style>
