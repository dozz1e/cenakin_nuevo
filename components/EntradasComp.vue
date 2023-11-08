<template>
  <div id="entradas">
    <v-row>
      <entrada v-for="(entr, i) in listadoEntradas" :key="i" :idEntrada='entr.id' :titulo='entr.title.rendered' :categoria='entr.categories' :slug='entr.slug' :corto="entr.excerpt.rendered"></entrada>
    </v-row>
    <!--<v-footer class="d-flex justify-center" v-if="1 <= Math.ceil(listadoEntradas.length / 10)">
      <v-pagination v-model="currPage" :length="Math.ceil(listadoEntradas.length / 10)" :total-visible="6"></v-pagination>
    </v-footer>-->
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Entrada from "~/components/Entrada"

export default {
  components: { Entrada },
  data: () => ({
    currPage: 1
  }),
  computed:{
    ...mapGetters('entradas',['listadoEntradas'])
  }
}
</script>

<style>

</style>
