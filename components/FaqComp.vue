<template>
  <div id="faq" class="pb-10">
    <header>PREGUNTAS FRECUENTES</header>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <Faq indice="0"></Faq>
          <Faq indice="1"></Faq>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <Faq indice="2"></Faq>
          <Faq indice="3"></Faq>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <Faq indice="4"></Faq>
          <Faq indice="5"></Faq>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Faq from "~/components/Faq"
export default {
  name: "FaqComp",
  components: {
    Faq
  }
};
</script>

<style lang="sass">
#faq
  header
    color: #aaa
    font-family: 'Oswald', sans-serif
    font-size: 24px
</style>