<template>
  <div id="contacto">
    <v-container class="pb-15">
      <v-row>
        <v-col cols="12" xs="12" lg="4">
          <ContactoDatos></ContactoDatos>
        </v-col>
        <v-col cols="12" xs="12" lg="8">
          <Map></Map>
        </v-col>
      </v-row>
    </v-container>
    <Foot></Foot>
  </div>
</template>

<script>
import Map from "./Map"
import ContactoDatos from "./ContactoDatos"
import Foot from "./Foot"

export default {
  name: "ContactoComp",
  components: {
    Map,
    ContactoDatos,
    Foot
  }
};
</script>

<style lang="sass">
$color1: #049DFC

#contacto
  .v-icon
    color: $color1
  .v-card
    background: rgba(30,30,30,.6)
    h2
      font-family: 'Oswald', sans-serif
      font-size: 1.8rem
      line-height: 1
</style>