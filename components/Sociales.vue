<template>
  <!-- <v-speed-dial
    v-model="fab"
    direction="top"
    :open-on-hover="true"
    transition="slide-y-reverse-transition"
    id="btn-social"
    v-if="2500 > offsetTop"
  >
    <template v-slot:activator>
      <v-btn v-model="fab" color="blue darken-2" dark>
        <v-icon v-if="fab">mdi-close</v-icon>
        <div v-else>REDES</div>
      </v-btn>
    </template>
    <v-btn
      v-for="(social, index) in socials"
      :key="index"
      :href="social.ruta"
      target="_blank"
      fab
      dark
      small
      :color="social.color"
    >
      <v-icon>{{ social.icono }}</v-icon>
    </v-btn>
  </v-speed-dial> -->
  <div id="btn-social">
    <v-btn
      href="https://api.whatsapp.com/send?phone=56944871048"
      target="_blank"
      fab
      dark
      color="green"
      x-large
    >
      <v-icon>mdi-whatsapp</v-icon>
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
</style>