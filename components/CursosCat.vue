<template>
  <div id="cursosCat" class="my-5">
    <div class="header mb-2">NUESTRAS FORMACIONES</div>

    <!-- <v-list class="pa-0">
      <template v-for="(cat, index) in categorias">
        <v-list-item
          :href="`/categorias/${cat.slug}`"
          :key="index"
          class="py-2"
        >
          <v-list-item-avatar :color="cat.color" size="56">
            <v-img
              height="40"
              width="40"
              :src="`https://cenakin.cl/images/iconos/${cat.slug}.svg`"
              contain
              class="carImg"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="cat.nombre"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-arrow-right-thick</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="index"></v-divider>
      </template>
    </v-list> -->
    <v-row>
      <v-col v-for="(cat, index) in categorias" :key="index" cols="12" lg="3">
        <v-card class="mx-auto">
          <v-list-item three-line :href="`/categorias/${cat.slug}`">
            <v-list-item-avatar :color="cat.color" size="56">
              <v-img
                height="40"
                width="40"
                :src="`https://cenakin.cl/images/iconos/${cat.slug}.svg`"
                contain
                class="carImg"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                class="text-h6 mb-1"
                v-text="cat.nombre"
              ></v-list-item-title>
            </v-list-item-content>
            <v-icon color="grey lighten-1">mdi-arrow-right-thick</v-icon>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <!-- <v-row>
      <v-col cols="12" lg="3">
        <v-card
          :href="`/categorias/${cat.slug}`"
          :color="cat.color"
          class="d-flex align-center justify-center card-curso"
        >
          <div class="d-flex">
            <v-img
              height="80"
              width="80"
              :src="`https://cenakin.cl/images/iconos/${cat.slug}.svg`"
              contain
              class="carImg"
            ></v-img>
            <div class="d-flex flex-column justify-center">
              <div class="pa-0">Escuela de</div>
              <div v-text="cat.nombre" class="pa-0 display-1"></div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    categorias: [
      { nombre: "Masoterapia", slug: "masoterapia", color: "blue" },
      { nombre: "Salud", slug: "salud", color: "blue" },
      { nombre: "Marketing", slug: "marketing", color: "#5E169F" },
      { nombre: "Formaciones Online", slug: "online", color: "green" },
    ],
  }),
};
</script>

<style lang="sass">
#cursosCat
  .carImg
    flex: 0 0 auto !important
  .header
    color: #eee
    font-family: Oswald,sans-serif
    font-size: 24px
    z-index: 1
  .card-curso
    height: 150px
  @media (width < 1905px)
    .card-curso
      height: 300px
      text-align: center
      padding: 10px
      .d-flex
        flex-direction: column
        justify-content: center
        align-items: center
    .carImg
      margin-right: 0px
</style>
