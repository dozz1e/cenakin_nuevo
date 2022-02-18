<template>
  <ul class="listadoCurso pt-5">
    <li v-for="(curso, index) in listadoCursos" :key="index">
      <n-link :to="`/cursos/${curso.slug}`" class="d-flex align-center">{{ curso.name }}</n-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed:{
    ...mapGetters('cursos',['listadoCursos'])
  }
}
</script>

<style lang="sass">
.listadoCurso
  li
    height: 44px
    a
      display: block
      font-size: 1.1rem !important
      height: 44px
</style>