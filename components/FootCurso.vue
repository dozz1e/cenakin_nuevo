<template>
  <div id="footCurso">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <h3>Cursos</h3>
          <hr class="hrSubtitulo mb-3" />
          <ul>
            <li v-for="(curso, index) in listadoCursos" :key="index">
              <router-link :to="`/cursos/${curso.id}`" class="footLink">
                {{ curso.slug.split("-").join(" ").toUpperCase() }}
              </router-link>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" v-if="$vuetify.breakpoint.xsOnly">
          <hr />
        </v-col>
        <v-col cols="12" sm="6" class="d-flex flex-column justify-center">
          <ul class="d-flex justify-center">
            <li v-for="(social, index) in redesSociales" :key="index">
              <a :href="social.ruta" target="_blank" class="pa-4">
                <v-icon>{{ social.icono }}</v-icon>
              </a>
            </li>
          </ul>
          <div class="d-flex pt-3 justify-center">CENAKIN 2024</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FootCurso",
  computed: {
    ...mapGetters("cursos", ["listadoCursos", "redesSociales"]),
  },
};
</script>

<style lang="sass">
#footCurso
	hr
		color: rgba(0,0,0,.1)
	.hrSubtitulo
		color: white
		height: 2px
		width: 30px
	.footLink
		color: white
		font-size: 14px
	.v-icon
		font-size: 3rem
</style>
