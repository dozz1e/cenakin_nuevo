<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      width="100%"
      app
      id="menu-mobile"
      v-if="$vuetify.breakpoint.mobile"
      :dark="estadoMenu"
    >
      <header>
        <v-img
          src="https://cenakin.cl/images/banner_blanco.svg"
          alt="Banner Cenakin"
          max-width="150"
          max-height="50"
        ></v-img>
        <v-spacer></v-spacer>
        <div id="cerrarMobile" @click="drawer = false">
          <v-icon>mdi-close</v-icon>
        </div>
      </header>
      <div id="menu-principal">
        <v-list>
          <v-list-item>
            <ul>
              <li>01</li>
              <li><hr /></li>
              <li>NAVEGACIÓN</li>
            </ul>
          </v-list-item>
          <Menu></Menu>
          <v-list-item>
            <ul>
              <li v-for="(social, index) in redesSociales" :key="index">
                <a :href="social.ruta" target="_blank" @click="drawer = false">
                  <v-icon x-large>{{ social.icono }}</v-icon>
                </a>
              </li>
              <li><hr /></li>
              <li>ADMISION@CENAKIN.CL</li>
            </ul>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-app-bar app clipped-left flat color="#272727">
      <v-container class="d-flex align-center">
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="d-flex d-lg-none"
        ></v-app-bar-nav-icon>
        <v-spacer v-if="$vuetify.breakpoint.mobile"></v-spacer>
        <n-link to="/">
          <v-img
            src="/images/banner_cl.svg"
            alt="Banner Cenakin"
            width="150"
          ></v-img>
        </n-link>
        <v-spacer class="d-lg-flex d-none"></v-spacer>
        <div class="d-lg-flex d-none" id="menu-web">
          <v-toolbar-items>
            <Menu></Menu>
          </v-toolbar-items>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <nuxt />
      <sociales></sociales>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Menu from "~/components/Menu";
import Sociales from "~/components/Sociales";

export default {
  data: () => ({
    drawer: false,
    offsetTop: 0,
    cargar: false,
  }),
  components: {
    Menu,
    Sociales,
  },
  beforeMount() {
    this.setIOS();
  },
  mounted() {
    this.listaCursos();
    this.listaEntradas();
    this.tamanoWindow(this.anchoVentana);
    window.addEventListener("scroll", this.onScroll);
  },
  computed: {
    ...mapGetters("cursos", ["redesSociales", "estadoMenu"]),
    anchoVentana() {
      return window.innerHeight;
    },
  },
  methods: {
    ...mapActions("cursos", ["listaCursos", "tamanoWindow", "setIOS"]),
    ...mapActions("entradas", ["listaEntradas"]),
    onScroll() {
      this.offsetTop = window.scrollY;
    },
    volver() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="sass">
$color1: #049DFC

*
  font-family: 'Roboto', sans-serif

a
  text-decoration: none

h1, h2, h3, h4, h5, h6
  font-family: 'Oswald', sans-serif

ol, ul
  list-style-type: none
  padding: 0 !important

#app
  background-image: url('/images/fondo_logo.png')

#banner-aviso
  z-index: 5

#menu-mobile
  background-color: $color1
  .v-navigation-drawer__content
    header
      display: flex
      #cerrarMobile
        display: flex
        font-family: 'Oswald', sans-serif
        margin-right: 20px
        .v-icon
          font-size: 28px
      .v-image__image
        background-position: 20px center !important
        background-size: 100px
    #menu-principal
      margin-top: 3rem
      ul
        display: flex
        flex-direction: row
        li
          align-items: center
          display: flex
          font-family: 'Oswald', sans-serif
          hr
            color: white
            margin: 0 10px
            width: 50px
      .v-list
        padding: 0
        width: 100%
        .v-list-item
          margin: 0 0 0 20px
          min-height: auto
          padding: 0
          a
            color: white
            font-family: 'Oswald', sans-serif
            font-size: 44px
            line-height: 1.3
          .v-list-item__content
            padding: 0
            a
              color: white
              font-family: 'Oswald', sans-serif
              font-size: 44px
              line-height: 1.3

#menu-web
  height: 100%
  .v-btn
    background: transparent
    box-shadow: none
    span
      text-shadow: 1px 1px 1px black

.btn-basico
  font-size: 16px
  text-shadow: 1px 1px 1px black
  width: 25rem
</style>
