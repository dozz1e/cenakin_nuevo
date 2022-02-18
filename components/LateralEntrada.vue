<template>
  <div id="lateral-entrada">
    <v-card class="pa-5" tile outlined>
      <h3>Últimas Entradas</h3>
      <v-list>
        <v-list-item v-for="(entra, i) in listadoEntradas" :to="`/entradas/${entra.slug}`" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="entra.title.rendered"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed:{
    ...mapGetters('entradas',['listadoEntradas'])
  },
}
</script>

<style>

</style>