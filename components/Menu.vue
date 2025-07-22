<template>
  <v-list id="menu-basico" class="align-center">
    <v-list-item v-for="(link, index) in links" :key="index">
      <v-list-item-content>
        <v-list-item-title>
          <a :href="link.ruta">{{ link.nombre }}</a>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item class="aula">
      <v-list-item-content>
        <v-list-item-title>
          <a href="https://aulavirtualcenakin.com/" target="_blank"
            >AULA VIRTUAL</a
          >
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        nombre: "INICIO",
        ruta: "/",
      },
      {
        nombre: "CURSOS",
        ruta: "/categorias/masoterapia",
      },
      {
        nombre: "DIPLOMADO",
        ruta: "/cursos/diplomado-masoterapia",
      },
      {
        nombre: "PREGUNTAS",
        ruta: "/#faq",
      },
      {
        nombre: "CONTACTO",
        ruta: "/#contacto",
      },
    ],
  }),
};
</script>

<style lang="sass">
#menu-basico
  margin: 20px 0
  a
    font-weight: bold
@media (min-width: 1264px)
  #menu-basico
    background: transparent
    display: flex
    margin: 0
    .v-list-item
      a
        color: #049dfc
      &:hover
        background: #049dfc !important
        cursor: pointer
        a
          color: #eee !important
    .aula
      background: #049dfc !important
      a
        color: #eee !important
</style>
