<template>
  <div id="btn-social">
    <!-- <v-btn
      href="https://instagram.com/cenakinchile/"
      target="_blank"
      fab
      dark
      color="purple"
    >
      <v-icon>mdi-instagram</v-icon>
    </v-btn> -->
    <v-chip class="ma-2"> Hola! Escríbenos aquí --> </v-chip>
    <v-btn
      href="https://api.whatsapp.com/send?phone=56944871048"
      target="_blank"
      fab
      dark
      color="green"
    >
      <v-icon large>mdi-whatsapp</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Sociales",
};
</script>

<style lang="sass">
#btn-social
  bottom: 12px
  position: fixed
  right: 12px
  z-index: 2
</style>
