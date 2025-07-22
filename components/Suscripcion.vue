<template>
  <v-card class="mx-auto overflow-hidden" color="#fff" light flat>
    <v-row class="my-10">
      <v-col
        cols="12"
        sm="6"
        class="pa-0 d-none d-sm-flex align-center justify-center"
      >
        <v-img
          src="/images/contacto.svg"
          max-height="200"
          max-width="200"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <div
          class="ml-8 mr-10 d-flex justify-center items-center flex-column h-full suscripcion"
        >
          <h2 class="pb-2">SUSCRÍBASE AHORA</h2>
          <p class="text--grey lighten-1">
            Suscríbete y recibe información de formación o cursos de intéres,
            próximas capacitaciones y ofertas.
          </p>
          <v-form>
            <v-text-field
              v-model="name"
              label="Nombre"
              required
              class="w-full text--black"
              placeholder="Escriba su nombre"
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="E-mail"
              required
              class="w-full text--black"
              placeholder="correo@ejemplo.cl"
            ></v-text-field>

            <v-btn
              @click="enviarFormulario"
              x-large
              block
              dark
              class="btn-basico-violeta"
            >
              <v-icon left>mdi-check</v-icon>
              Suscribirse
            </v-btn>
          </v-form>
          <v-alert dense text type="success" class="mt-4" v-if="valido">
            Suscripción exitosa!
          </v-alert>
          <v-alert dense text type="error" class="mt-4" v-if="error">
            Debe rellenar todos los campos
          </v-alert>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["curso"],
  data: () => ({
    name: "",
    email: "",
    valido: false,
    error: false,
  }),
  methods: {
    reset() {
      this.name = "";
      this.email = "";
      this.$refs.form.reset();
    },
    enviarFormulario() {
      if (this.name != "" && this.email != "") {
        this.error = false;
        this.submit(this.curso);
      } else {
        this.error = true;
      }
    },
    async submit(cursoName) {
      await this.$axios
        .post("https://cenakin.cl/otec/correo.php", {
          nombre: this.name,
          correo: this.email,
          curso: cursoName,
        })
        .then((response) => {
          if (response.data.error) {
            this.error = true;
          } else {
            this.valido = true;
            this.reset();
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>

<style>
.h-full {
  height: 100%;
}
.w-full {
  width: 100%;
}
.suscripcion {
  h2 {
    color: #049dfc;
  }
}
.btn-basico-violeta {
  background-color: #049dfc !important;
  color: #fff !important;
}
.btn-basico-violeta:hover {
  background-color: #026eb1 !important;
}
</style>
