<template>
  <!-- <v-col cols="12" sm="6" lg="4" class="pt-0" id="listadoCurso">
    <nuxt-link :to="`/cursos/${slug}`">
      <v-card class="mb-4 curso__item" dark height="250" max-width="400">
        <div class="cursoInfo d-flex flex-column align-start">
          <v-img
            :src="`https://cenakin.cl/images/cursos/${slug}/1.webp`"
            :srcset="`/images/cursos/${slug}/1@1x.webp 600w, /images/cursos/${slug}/1@2x.webp 960w, /images/cursos/${slug}/1@3x.webp 1264w`"
            :alt="titulo"
            gradient="to bottom, rgba(4,157,252,.3), rgba(0,0,0,.5)"
            width="100%"
            height="250"
          >
            <v-card-title class="cenakin--title"> CYBER CENAKIN </v-card-title>
            <v-card-actions class="pa-0 mx-4">
              <v-list-item two-line class="pa-0">
                <v-list-item-content>
                  <v-list-item-subtitle>CURSO CERTIFICADO</v-list-item-subtitle>
                  <v-list-item-title v-html="titulo"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-img>
        </div>
      </v-card>
    </nuxt-link>
  </v-col> -->
  <v-col cols="12" sm="4" lg="3">
    <nuxt-link :to="`/cursos/${slug}`">
      <v-card class="curso__item" dark id="listadoCurso">
        <v-img
          class="relative"
          height="250"
          :src="`https://cenakin.cl/images/cursos/${slug}/1@1x.webp`"
          gradient="rgba(0,0,0,0.1), rgb(0,0,0,0.9)"
          eager
        >
        </v-img>

        <v-card-title class="cenakin--title"> CENAKIN </v-card-title>
        <v-card-actions class="pa-0">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title v-html="titulo"></v-list-item-title>
              <v-list-item-subtitle
                ><v-icon size="20" class="mr-1">mdi-certificate-outline</v-icon
                >Curso Certificado</v-list-item-subtitle
              >
              <v-list-item-subtitle
                ><v-icon size="20" class="mr-1">mdi-shield-crown-outline</v-icon
                >Docentes Profesionales</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </nuxt-link>
  </v-col>
</template>

<script>
export default {
  name: "Curso",
  props: ["titulo", "categoria", "imagen", "idCurso", "slug", "valor"],
  methods: {
    formatPrice(value) {
      var formatter = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
  },
  // methods: {
  //   nombre(datos) {
  //     let aux = datos.split(" ");
  //     switch (aux.length) {
  //       case 1:
  //         name = aux;
  //         break;
  //       case 2:
  //         name = aux[0] + "<br />" + aux[1];
  //         break;
  //       case 3:
  //         name = aux[0] + "<br />" + aux[1] + " " + aux[2];
  //         break;
  //       case 4:
  //         name = aux[0] + " " + aux[1] + "<br />" + aux[2] + " " + aux[3];
  //         break;
  //       case 5:
  //         name =
  //           aux[0] +
  //           "<br />" +
  //           aux[1] +
  //           " " +
  //           aux[2] +
  //           "<br />" +
  //           aux[3] +
  //           " " +
  //           aux[4];
  //         break;
  //       case 6:
  //         name =
  //           aux[0] +
  //           " " +
  //           aux[1] +
  //           "<br />" +
  //           aux[2] +
  //           " " +
  //           aux[3] +
  //           "<br />" +
  //           aux[4] +
  //           " " +
  //           aux[5];
  //         break;
  //       case 7:
  //         name =
  //           aux[0] +
  //           "<br />" +
  //           aux[1] +
  //           " " +
  //           aux[2] +
  //           "<br />" +
  //           aux[3] +
  //           " " +
  //           aux[4] +
  //           "<br />" +
  //           aux[5] +
  //           " " +
  //           aux[6];
  //         break;
  //     }
  //     return name;
  //   },
  // },
};
</script>

<style lang="sass">
$color1: #049DFC
#listadoCurso
  background: rgba(0, 0, 0, 0.5)
  border-radius: 10px
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)
  transition: transform 0.3s ease-in-out

.cenakin--title
  font-family: "Oswald", sans-serif
  font-size: 1rem
  text-shadow: 1px 1px 1px black
  background: $color1
  color: white
  padding: 0 8px
  position: absolute
  left: 5px
  top: 5px
  border-radius: 5px

.valor-curso
  width: 100%
  bottom: 20px
  font-size: 1.3rem
  text-shadow: 1px 1px 1px #000
  span
    padding-left: 10px
    font-weight: bold
    font-size: 2rem
    color: $color1

.v-image:hover .v-image__image--cover
  background-size: 110%
  background-position: center
  transition: all 0.7s ease-in-out
  transform: scale(1.05)
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)

.curso__item
  .v-card__actions
    .v-list-item__content
      .v-list-item__title
        font-family: 'Oswald', sans-serif
      .v-list-item__title
        font-size: 1.5rem
        line-height: 1.5rem
        padding-bottom: 10px
        white-space: normal !important
</style>
