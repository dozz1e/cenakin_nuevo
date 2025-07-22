<template>
  <div id="footer">
    <v-container class="pt-0">
      <v-row class="py-10">
        <v-col cols="12" lg="3" class="py-0 d-flex justify-center align-center">
          <img src="/images/banner.svg" class="acreditada" />
        </v-col>

        <v-col cols="12" lg="3" class="py-0 mt-10">
          <div
            class="d-flex flex-column justify-center align-center certificado"
          >
            <img
              src="https://cenakin.cl/images/logos/nch.png"
              alt="WMF"
              class="acreditada2"
            />
            <span class="text-center mt-3"
              >OTEC Certificada<br />OC-CER726261</span
            >
          </div>
        </v-col>

        <v-col cols="12" lg="3" class="py-0 mt-10">
          <div
            class="d-flex flex-column justify-center align-center certificado"
          >
            <img
              src="https://cenakin.cl/images/logos/wmf.avif"
              alt="WMF"
              class="acreditada3"
            />
            <span class="text-center mt-3"
              >Miembro Oficial Federación Mundial<br />de Masajes WMF</span
            >
          </div>
        </v-col>

        <v-col
          cols="12"
          lg="3"
          class="py-0 d-flex flex-column justify-center align-center mt-10"
        >
          <header class="pb-3">Conecta</header>
          <div class="d-flex">
            <a
              v-for="(red, index) in redesSociales"
              :key="index"
              :href="red.ruta"
              class="mr-5"
              ><img :src="red.imagen" :alt="red.nombre" width="44" height="44"
            /></a>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-footer class="d-flex justify-center py-10 py-md-5" color="#121212">
      <span>
        &copy; CENAKIN S.p.A -
        <a href="/terminos-y-condiciones">Términos y Condiciones</a>
        - <a href="/politica-privacidad">Política de Privacidad</a> -
        <a href="/politica-cookies">Política de Cookies</a>
      </span>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListadoCurso from "~/components/ListadoCurso";

export default {
  name: "Foot",
  components: {
    ListadoCurso,
  },
  data: () => ({}),
  computed: {
    ...mapGetters("cursos", ["redesSociales"]),
  },
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
  .acreditada
    height: 60px
  .acreditada2
    height: 100px
    width: 80px
  .acreditada3
    height: 100px
    width: 100px
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
footer
  z-index: 3
@media (min-width: 1024px)
  footer
    z-index: 1
  .acreditada
    height: 120px !important
</style>
