<template>
  <v-card
    id="contacto-datos"
    class="pa-5 d-flex flex-column align-center justify-center"
    flat
    :dark="darks"
    tile
  >
    <h2 class="text-center">¡Mantengámonos en contacto!</h2>
    <ul class="pa-4">
      <li
        v-for="(contacto, index) in contactos"
        :key="index"
        class="d-flex pa-2 align-center"
      >
        <v-icon width="20">{{ contacto.icono }}</v-icon
        ><span class="pl-4">{{ contacto.texto }}</span>
      </li>
    </ul>
    <ul class="d-flex justify-center social">
      <li
        v-for="(social, index) in redesSociales"
        :key="index"
        class="pl-2 pr-2"
      >
        <a :href="social.ruta" target="_blank"
          ><v-icon :color="darks ? 'white' : '#121212'">{{
            social.icono
          }}</v-icon></a
        >
      </li>
    </ul>
    <v-alert outlined type="success" prominent border="left" class="mt-5">
      En período de pandemía, para una mejor comunicación, prefiera contactarse
      a través de nuestro whatsapp o llamandonos.
    </v-alert>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    darks: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    contactos: [
      {
        icono: "mdi-map-marker-outline",
        texto:
          "Calle Limache 1724, oficina 1102 ed. Contemporáneo, Viña del Mar",
      },
      {
        icono: "mdi-account-clock-outline",
        texto: "Lunes a Viernes de 9:30 a 13:00 y 15:00 a 18:00 hrs.",
      },
      {
        icono: "mdi-phone",
        texto: "+56 9 4487 1048",
      },
      {
        icono: "mdi-email-outline",
        texto: "admision@cenakin.cl",
      },
    ],
  }),
  computed: {
    ...mapGetters("cursos", ["redesSociales"]),
  },
};
</script>

<style lang="sass">
#contacto-datos
  height: auto
  .social
    .v-icon
      font-size: 4rem
  @media (min-width: 600px)
    height: 450px
  @media (min-width: 960px)
    height: 600px
</style>
