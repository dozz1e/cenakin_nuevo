<template>
  <div id="entradas">
    <v-card flat class="portada-blog">
      <v-img src="/images/blog/blog.svg" alt="Portada Cenakin Blog" height="400px" contain></v-img>
    </v-card>
    <v-container>
      <v-row class="entrada-contenido">
        <v-col cols="12" lg="9">
          <Entradas></Entradas>
        </v-col>
        <v-col cols="12" lg="3" class="pa-0" v-if="$vuetify.breakpoint.lgAndUp">
          <LateralEntrada></LateralEntrada>
        </v-col>
      </v-row>
    </v-container>
    <Foot></Foot>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import Entradas from "~/components/EntradasComp"
import LateralEntrada from "~/components/LateralEntrada";
import Foot from "~/components/Foot"

export default {
  components: { Entradas, LateralEntrada, Foot },
  beforeCreate(){
    this.$vuetify.theme.dark = this.aux
  },
  mounted(){
    this.cambiarMenu(false)
  },
  methods:{
    ...mapActions('cursos',['cambiarMenu'])
  },
  head(){
    return{
      title: 'Cenakin OTEC Blog Viña del Mar, Chile',
      meta: [
        { hid: 'description', name: 'description', content: 'Un nuevo método de enseñanza para distintos cursos, con materiales incluidos, docentes kinesiólogos y calidad de servicio Viña del Mar, Chile.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Cenakin Cursos Online y Presenciales en Viña del Mar, Chile' },
        { property: 'og:description', content: 'Un nuevo método de enseñanza para distintos cursos, con materiales incluidos, docentes kinesiólogos y calidad de servicio Viña del Mar, Chile.' },
        { property: 'og:url', content: 'https://www.cenakin.cl/entradas' }
      ]
    }
  }
}
</script>

<style lang="sass">
#entradas
  .entrada-contenido
    margin: -50px 0 30px
    @media (min-width: 960px)
      margin: 30px 0
  .portada-blog
    background: #58b0fb
    height: 400px
    .v-image
      .v-image__image--contain
        background-size: 300px
        @media (min-width: 600px)
          background-size: 500px
        @media (min-width: 960px)
          background-size: 700px
</style>