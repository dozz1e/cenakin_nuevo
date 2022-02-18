<template>
  <v-expansion-panels dark>
    <v-expansion-panel>
      <v-expansion-panel-header>{{
        dudas[parseInt(indice)].pregunta
      }}</v-expansion-panel-header>
      <v-expansion-panel-content>{{
        dudas[parseInt(indice)].respuesta
      }}</v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: {
    indice: {
      type: String,
      default: "0",
    },
  },
  data: () => ({
    dudas: [
      {
        pregunta:
          "Me gustaría saber si sus cursos de masajes están reconocidos por el Ministerio de Salud.",
        respuesta:
          "Nuestros espacios prácticos están aprobados por la resolución sanitaria N° 683 del Ministerio de Salud Viña del Mar - Quillota.",
      },
      {
        pregunta:
          "Me gustaría saber si sus cursos están reconocidos o acreditados por alguna institución.",
        respuesta:
          "Otec Cenakin está reconocida por SENCE en la resolición N° 19606.",
      },
      {
        pregunta:
          "¿Cuál es el campo laboral para los egresados de sus cursos y capacitaciones?",
        respuesta:
          "El campo laboral abarca empresas, emprendimientos, instituciones, organismos. También se puede ejercer la profesión de manera independiente.",
      },
      {
        pregunta: "¿Estos cursos me sirven para emprender?",
        respuesta:
          "Totalmente. El contenido y el conocimiento de nuestros diferentes cursos sirven para construir un emprendimiento y trabajar de forma independiente.",
      },
      {
        pregunta:
          "¿Piden algún requisito mínimo para realizar los cursos y diplomados?",
        respuesta:
          "Si, egresado de enseñanza media y mayor de 18 años. En algunos cursos y diplomados se incluyen otros requisitos que aparecerán en la programación de estos.",
      },
      {
        pregunta: "¿Cuál es la duración de los cursos y diplomados?",
        respuesta:
          "En general nuestros cursos y diplomados, tienen las siguientes duraciones: 8 horas, 20 horas, 32 horas, 100 horas, 150 horas y 200 horas. Estos serán especificados en la programación de cada uno de ellos.",
      },
    ],
  }),
};
</script>

<style lang="sass">
.v-expansion-panel-header
  height: 100px
</style>