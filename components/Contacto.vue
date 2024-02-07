<template>
  <div class="contactoForm">
    <span>Déjanos tus datos y recibe ofertas</span>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="nombreForm"
        :rules="nombreReglas"
        label="Nombre"
        required
      ></v-text-field>
      <v-text-field
        v-model="correoForm"
        :rules="correoReglas"
        label="Correo"
        required
      ></v-text-field>
      <v-select
        v-model="cursoForm"
        label="Curso de Interés"
        :items="listaCurso"
      ></v-select>
      <v-checkbox
        dark
        v-model="checkboxForm"
        :rules="[v => !!v || 'Debe hacer click para continuar']"
        label="No soy un robot"
        required
      ></v-checkbox>
      <v-btn class="btn-basico" color="primary" @click="validar">Enviar</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    valid: true,
    nombreForm: "",
    nombreReglas: [v => !!v || "El Nombre es requerido"],
    correoForm: "",
    correoReglas: [
      v => !!v || "El Correo es requerido",
      v => /.+@.+\..+/.test(v) || "El Correo debe ser válido"
    ],
    checkboxForm: false,
    cursoForm: ""
  }),
  computed: {
    ...mapGetters("cursos", ["listadoCursos"]),

    listaCurso() {
      let itemsForm = [];

      this.listadoCursos.forEach(element => {
        itemsForm.push(element.title.rendered);
      });
      return itemsForm;
    }
  },
  methods: {
    validar() {
      this.$refs.form.validate();
    }
  }
};
</script>

<style></style>
