<template>
  <div class="d-flex flex-column" id="quienes">
    <v-row no-gutters>
      <v-col sm="6" offset-sm="3" offset-lg="0" lg="12" class="mb-1 text-center">
        <v-btn dark x-large @click="dialog1 = true" class="ma-1" width="300">QUIÉNES SOMOS</v-btn>
        <v-btn dark x-large @click="dialog2 = true" class="ma-1" width="300">VISIÓN</v-btn>
        <v-btn dark x-large @click="dialog3 = true" class="ma-1" width="300">MISIÓN</v-btn>
        <v-btn dark x-large @click="dialog4 = true" class="ma-1" width="300">ESCUELA</v-btn>
        <v-btn dark x-large @click="dialog5 = true" class="ma-1" width="300">DIRECCIÓN Y HORARIOS</v-btn>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog1" width="500">
      <v-card>
        <v-card-title class="headline text-center" primary-title v-html="dialogos[0].titulo"></v-card-title>
        <v-card-text v-html="dialogos[0].texto"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click.stop="dialog1 = false">CERRAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" width="500">
      <v-card>
        <v-card-title class="headline text-center" primary-title v-html="dialogos[1].titulo"></v-card-title>
        <v-card-text v-html="dialogos[1].texto"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click.stop="dialog2 = false">CERRAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog3" width="500">
      <v-card>
        <v-card-title class="headline text-center" primary-title v-html="dialogos[2].titulo"></v-card-title>
        <v-card-text v-html="dialogos[2].texto"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click.stop="dialog3 = false">CERRAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog4" width="500">
      <v-card>
        <v-card-title class="headline text-center" primary-title v-html="dialogos[3].titulo"></v-card-title>
        <v-card-text v-html="dialogos[3].texto"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click.stop="dialog4 = false">CERRAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog5" width="500">
      <v-card>
        <v-card-title class="headline text-center" primary-title v-html="dialogos[4].titulo"></v-card-title>
        <v-card-text v-html="dialogos[4].texto"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click.stop="dialog5 = false">CERRAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Dialogo from './Dialogos'

export default {
  name: "Varios",
  data: () => ({
    dialog1: false,
    dialog2: false,
    dialog3: false,
    dialog4: false,
    dialog5: false,
    dialogos: [
      {
        titulo: 'QUIÉNES SOMOS',
        texto: 'Cenakin es una escuela que genera oficios nuevos acordes a los cambios sociales que se están generando. Nosotros queremos que las actuales generaciones y profesionales utilicen su conocimienlto, su reflexión y creatividad para descubrir su valor intrínseco siendo un aporte a la sociedad. Nos caracterizamos por generar oficios de poca inversión en tiempo y dinero (comparado con otros centros educativos) que sean rentables en la forma de obtener recursos. La forma que enseñamos va en la potencialidades de cada alumnos sacando lo mejor de ellos. Además la excelencia de nuestro servicio es parte de nuestro compromiso, por lo que disponemos de los mejores profesionales al servicio del estudiante.'
      },
      {
        titulo: 'VISIÓN',
        texto: 'Ser la mejor escuela de oficios a nivel nacional que forme individuos que aporten a la sociedad mediante el constante crecimiento personal, la disciplina, responsabilidad social, uso eficiente de los recursos y respeto entre nuestros pares.'
      },
      {
        titulo: 'ESCUELA',
        texto: 'Escuela con prestigio regional, grupos reducidos, grato ambiente, certificación, material de estudio, eventos en instituciones y mucho más.'
      },
      {
        titulo: 'MISIÓN',
        texto: 'Nuestra misión es potenciar el espíritu humano generando valor permanente en la comunidad.'
      },
      {
        titulo: 'DIRECCIÓN Y HORARIOS',
        texto: 'Dirección 1 oriente esquina 13 Norte #1167 oficina 501 o 502 (piso 5) Viña del mar. Edificio Jardín Oriente.<br />Horario de atención: Lunes a Viernes de 9:30 a 13:30 y 14:30 a 18:30 hrs.'
      }
    ]
  }),
};

</script>

<style></style>