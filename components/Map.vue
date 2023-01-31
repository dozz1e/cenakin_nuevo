<template>
  <div id="mapa">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.036183409743!2d-71.54167558423886!3d-33.02917718340205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689ddc28f9fad87%3A0xc04b1826cc0704ae!2sCenakin!5e0!3m2!1ses-419!2scl!4v1674832119837!5m2!1ses-419!2scl"
      width="100%" style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
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