<template>
  <div id="cursosCat">
    <div class="header mb-2">NUESTROS CURSOS</div>
    <v-row>
      <v-col cols="12" sm="4" v-for="(cat, index) in categorias" :key="index">
        <v-card
          :href="`/categorias/${cat.slug}`"
          :color="cat.color"
          class="d-flex align-center justify-center card-curso"
        >
          <div class="d-flex">
            <v-img
              height="80"
              width="80"
              :src="`/images/iconos/${cat.slug}.svg`"
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
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    categorias: [
      { nombre: "Salud y Bienestar", slug: "salud", color: "blue" },
      { nombre: "Marketing", slug: "marketing", color: "#5E169F" },
      { nombre: "Ofimática", slug: "ofimatica", color: "green" },
    ],
  }),
};
</script>

<style lang="sass">
#cursosCat
  .carImg
    flex: 0 0 auto !important
    margin-right: 20px
  .header
    color: #eee
    font-family: Oswald,sans-serif
    font-size: 24px
    z-index: 1
  .card-curso
    height: 150px
  @media (700px < width < 1200px)
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
      margin-bottom: 20px
</style>
