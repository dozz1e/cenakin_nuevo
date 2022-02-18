<template>
  <div id="mapa">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.034575601428!2d-71.53880903013787!3d-33.02921954325105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689de70dfba2f65%3A0x13e2ad9a6e4dc5b!2sEdificio%20Contempor%C3%A1neo!5e0!3m2!1ses-419!2scl!4v1621877124533!5m2!1ses-419!2scl"
      width="100%"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Map",
  data: () => ({}),
};
</script>

<style lang="sass">
#mapa
  iframe
    height: 400px
    @media (min-width: 960px)
      height: 600px
</style>