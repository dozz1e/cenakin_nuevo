<template>
  <v-col cols="12" sm="6" lg="4" class="pt-0" id="listadoCurso">
    <nuxt-link :to="`/cursos/${slug}`">
      <v-card class="mb-4 curso__item" dark height="250" max-width="400">
        <div class="cursoInfo d-flex flex-column align-start">
          <v-img :src="`/images/cursos/${slug}/1.${extension}`"
            :srcset="`/images/cursos/${slug}/1@1x.${extension} 600w, /images/cursos/${slug}/1@2x.${extension} 960w, /images/cursos/${slug}/1@3x.${extension} 1264w`"
            :alt="titulo" gradient="to bottom, rgba(4,157,252,.3), rgba(0,0,0,.5)" width="100%" height="250">
            <v-card-title>
              <img src="/images/banner_cl.png" alt="Banner Cenakin" width="60" />
            </v-card-title>
            <v-card-actions class="pa-0 mx-4">
              <v-list-item two-line class="pa-0">
                <v-list-item-content>
                  <v-list-item-subtitle>{{ subtitulo }}</v-list-item-subtitle>
                  <v-list-item-title v-html="nombre(titulo)"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-img>
        </div>
      </v-card>
    </nuxt-link>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Curso",
  props: ["titulo", "categoria", "imagen", "idCurso", "slug"],
  computed: {
    ...mapGetters("cursos", ["extension"]),
    subtitulo() {
      let aux = "CURSOS";

      this.categoria.forEach((cat) => {
        if (23 === cat.id) {
          aux = "DIPLOMADO";
        }
        if (39 === cat.id) {
          aux = "CURSOS ONLINE";
        }
        if (41 === cat.id) {
          aux = "CURSOS DE KINESIOLOGÍA";
        }
      });

      return aux;
    },
  },
  methods: {
    nombre(datos) {
      let aux = datos.split(" ");
      switch (aux.length) {
        case 1:
          name = aux;
          break;
        case 2:
          name = aux[0] + "<br />" + aux[1];
          break;
        case 3:
          name = aux[0] + "<br />" + aux[1] + " " + aux[2];
          break;
        case 4:
          name = aux[0] + " " + aux[1] + "<br />" + aux[2] + " " + aux[3];
          break;
        case 5:
          name =
            aux[0] +
            "<br />" +
            aux[1] +
            " " +
            aux[2] +
            "<br />" +
            aux[3] +
            " " +
            aux[4];
          break;
        case 6:
          name =
            aux[0] +
            " " +
            aux[1] +
            "<br />" +
            aux[2] +
            " " +
            aux[3] +
            "<br />" +
            aux[4] +
            " " +
            aux[5];
          break;
        case 7:
          name =
            aux[0] +
            "<br />" +
            aux[1] +
            " " +
            aux[2] +
            "<br />" +
            aux[3] +
            " " +
            aux[4] +
            "<br />" +
            aux[5] +
            " " +
            aux[6];
          break;
      }
      return name;
    },
  },
};
</script>

<style lang="sass">
.curso__item
  border: none !important
  .cursoInfo
    background-repeat: no-repeat
    background-size: cover
    height: 250px
  .v-image
    border-radius: 4px
  .v-card__actions
    bottom: 0
    position: absolute
    .v-list-item__content
      .v-list-item__subtitle, .v-list-item__title
        font-family: 'Oswald', sans-serif
        text-shadow: 1px 1px 1px black
      .v-list-item__title
        font-size: 2rem
        line-height: 1
        padding-bottom: 10px
</style>
