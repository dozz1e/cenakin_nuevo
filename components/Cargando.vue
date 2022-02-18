<template>
  <div class="cargando">
    <header class="pb-5">
      <v-row class="d-flex align-center">
        <v-col cols="12" xs="12" sm="7">
          <v-skeleton-loader
            :loading="loading"
            :transition="transition"
            type="text"
            width="200"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="12" xs="12" sm="5">
          <v-skeleton-loader
            :loading="loading"
            :transition="transition"
            type="text"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </header>
    <v-row class="pt-5">
      <v-col cols="12">
        <v-skeleton-loader
          :loading="loading"
          :transition="transition"
          width="200"
          type="text"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" md="4" v-for="n in 3" :key="n">
        <v-skeleton-loader
          :loading="loading"
          :transition="transition"
          height="250"
          type="card"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: true,
    transition: "scale-transition"
  })
};
</script>

<style></style>
