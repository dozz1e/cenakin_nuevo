<template>
  <div id="quienes">
    <Varios></Varios>
    <v-row>
      <v-col sm="8" offset-sm="2" lg="4" offset-lg="0" v-for="(quien, index) in quienes" :key="index">
        <v-card tile class="pa-3">
          <img :src="quien.imagen" />
          <v-card-title>
            {{ quien.titulo }}
          </v-card-title>
          <v-card-text>
              {{ quien.contenido }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Varios from "./Varios"

export default {
  name: "QuienesComp",
  components: {
    Varios
  },
  data: () => ({
    quienes: [
      {
        imagen: '/images/quienes/metodo.png',
        titulo: 'Nuestro Método',
        contenido: 'Cenakin ofrece un nuevo método de enseñanza que combina practicas reales, tutorías ilimitadas, clases de anatomía, colaboraciones en eventos deportivos e instituciones.'
      },
      {
        imagen: '/images/quienes/futuro.png',
        titulo: 'Una profesión con Futuro',
        contenido: 'En Cenakin recibirás una formación de calidad para que puedas ser un buen profesional. Adquirirás todos los conocimientos necesarios para poder trabajar como masajista, trabajar en un SPA o montarte tu propio centro de masaje. También dispondrás de nuestra importante bolsa de trabajo.' 
      },
      {
        imagen: '/images/quienes/innovacion.png',
        titulo: 'Innovación',
        contenido: 'Nuestros profesores y material didáctico siempre están en continuo esfuerzo para innovar y mejorar, así te entregamos las mejores herramientas para un aprendizaje de calidad.'
      }
    ]
  })
};
</script>

<style lang="sass">
#quienes
  .v-card
    align-items: center
    background: rgba(30,30,30,.6)
    border-radius: 4px !important
    display: flex
    flex-direction: column
    margin: 10px 0
    padding: 20px
    .v-card__title
      font-family: 'Oswald', sans-serif
      font-size: 2rem
      text-align: center
      word-break: normal
</style>