<template>
  <div id="footer">
    <v-container class="pt-0">
      <v-row class="py-10">
        <v-col cols="12" sm="8" class="py-0 d-flex flex-column justify-center">
          <header class="mb-2 pt-3">CURSOS CENAKIN</header>
          <ListadoCurso></ListadoCurso>
        </v-col>
        <v-col cols="12" sm="4" class="py-0">
          <v-row>
            <v-col cols="12">
              <header class="pb-3">
                Acreditaciones
              </header>
              <div class="d-flex">
                <div class="d-flex flex-column justify-center pr-5 mr-5 text-center">
                  <p><b>OTEC Acreditada</b></p>
                  <span class="mt-3 text-center">Resolución Número 19606</span>
                </div>
                <div class="d-flex flex-column justify-center mr-5">
                  <img src="/images/logos/nch.png" width="120" height="170" alt="NCH"/>
                  <span class="text-center mt-3">OC-CER726261</span>
                </div>
              </div>
            </v-col>
            <v-col cols="12">
              <header class="pb-3">
                Conecta
              </header>
              <div class="d-flex">
                <a v-for="(red,index) in redesSociales" :key="index" :href="red.ruta" class="mr-5"><img :src="red.imagen" :alt="red.nombre" width="44" height="44" /></a>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-footer class="d-flex justify-center" color="#121212">
      <span>
          &copy; CENAKIN S.p.A - <a href="https://cenakin.cl/otec/terminos-y-condiciones/">Términos y Condiciones</a> - <a href="#">Política de Privacidad</a> - <a href="#">Política de Cookies</a>
        </span>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import ListadoCurso from "~/components/ListadoCurso"

export default {
  name: "Foot",
  components: {
    ListadoCurso
  },
  data: () => ({}),
  computed: {
    ...mapGetters('cursos',['redesSociales'])
  }
};
</script>

<style lang="sass">
#footer
  background: #222
  a
    color: #ddd
    &:hover
      text-decoration: underline
  li a
    font-size: 14px
  header
    color: #aaa
    font-family: 'Oswald', sans-serif
    font-size: 16px
    margin-bottom: 5px
    text-transform: uppercase
  .redesSociales
    .v-image__image
      background-size: cover
  .v-footer
    span
      color: #eee
      text-align: center
  .v-image__image
    background-position: center right !important
    background-size: 100px
</style>