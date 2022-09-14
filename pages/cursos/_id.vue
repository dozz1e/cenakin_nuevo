<template>
  <div v-if="soloCurso != null" id="cursoPagina">
    <v-row>
      <v-card class="curso__item" width="100%" height="600" dark>
        <div class="curso__item-capa">
          <v-img
            sizes="(max-width: 1904px) 100vw, 1904px"
            :src="`/images/cursos/${soloCurso.slug}/1.${extension}`"
            :srcset="`/images/cursos/${soloCurso.slug}/1@1x.${extension} 960w, /images/cursos/${soloCurso.slug}/1@2x.${extension} 1264w, /images/cursos/${soloCurso.slug}/1@3x.${extension} 1904w`"
            alt="soloCurso.name"
            gradient="to bottom, rgba(4,157,252,.3), rgba(0,0,0,.5)"
            width="100%"
            height="600"
          >
            <v-container class="pa-0">
              <v-card-actions class="pa-0 mx-4 align-end d-flex">
                <v-list-item two-line class="pa-0">
                  <v-list-item-content>
                    <v-list-item-subtitle>{{ subtitulo }}</v-list-item-subtitle>
                    <v-list-item-title>
                      <h1
                        v-if="$vuetify.breakpoint.mobile"
                        class="ml-3 mb-2"
                        v-html="nombre(soloCurso.name)"
                      ></h1>
                      <h1 v-else class="mb-2" v-html="soloCurso.name"></h1>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card-actions>
            </v-container>
          </v-img>
        </div>
      </v-card>
    </v-row>
    <v-container>
      <div class="px-2 py-3">
        <v-row>
          <v-col cols="12" md="8">
            <v-row>
              <v-col cols="12" md="4">
                <div class="d-flex justify-space-between">
                  <v-btn
                    color="primary"
                    tile
                    large
                    class="btn-basico"
                    :href="`/pdfs/${soloCurso.id}.pdf`"
                    target="_blank"
                    >DESCARGAR PROGRAMA</v-btn
                  >
                  <v-btn
                    tile
                    large
                    @click="favorito()"
                    v-if="$vuetify.breakpoint.mobile"
                  >
                    <v-icon :style="iconoFavoritoStyle">{{
                      iconoFavorito
                    }}</v-icon></v-btn
                  >
                </div>
              </v-col>
              <v-col cols="12" md="8" class="d-flex justify-end">
                <div id="compartir" class="d-flex align-center">
                  <h3>Compartir</h3>
                  <share-network
                    network="facebook"
                    key="facebook"
                    :url="`https://cenakin.cl/cursos/${$route.params.id}`"
                    :title="soloCurso.yoast_head_json.og_title"
                    :description="soloCurso.yoast_head_json.description"
                    quote="Cenakin OTEC Cursos Viña del Mar, Chile."
                    hashtags="cursos,otec"
                    twitterUser="Dozz1e"
                  >
                    <v-img
                      src="/images/social/facebook.png"
                      alt="Facebook"
                      height="45"
                      width="45"
                      class="ml-3"
                    ></v-img>
                  </share-network>
                  <share-network
                    network="whatsapp"
                    key="whatsapp"
                    :url="`https://cenakin.cl/cursos/${$route.params.id}`"
                    :title="soloCurso.yoast_head_json.og_title"
                    :description="soloCurso.yoast_head_json.description"
                    quote="Cenakin OTEC Cursos Viña del Mar, Chile."
                    hashtags="cursos,otec"
                    twitterUser="Dozz1e"
                  >
                    <v-img
                      src="/images/social/whatsapp.png"
                      alt="Whatsapp"
                      height="45"
                      width="45"
                      class="ml-3"
                    ></v-img>
                  </share-network>
                  <!-- <a
                    :href="`https://www.facebook.com/sharer/sharer.php?u=${$route.params.id}`"
                    target="_blank"
                    >Comparte en Facebook</a
                  > -->
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            md="4"
            class="d-flex justify-end"
            v-if="!$vuetify.breakpoint.mobile"
          >
            <v-btn tile large @click="favorito()">
              <v-icon :style="iconoFavoritoStyle">{{ iconoFavorito }} </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <v-row>
        <v-col cols="12" md="8">
          <v-card class="pa-5">
            <v-card-text v-html="soloCurso.description"></v-card-text>
          </v-card>
          <v-img
            :src="`/images/cursos/${soloCurso.slug}/2.${extension}`"
            :srcset="`/images/cursos/${soloCurso.slug}/2@1x.${extension} 600w, /images/cursos/${soloCurso.slug}/2@2x.${extension} 960w, /images/cursos/${soloCurso.slug}/2@3x.${extension} 1264w`"
            :alt="`${soloCurso.name} Subportada`"
            width="100%"
            height="300"
          ></v-img>
          <v-card class="pa-5">
            <v-row>
              <v-col cols="8" class="pb-0">
                <v-card-title class="pb-0"> OBJETIVO </v-card-title>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="pa-0"></v-col>
              <v-col cols="9" class="pt-0">
                <v-card-text v-html="soloCurso.objetivo"></v-card-text>
              </v-col>
            </v-row>
          </v-card>
          <div class="extra-titulo" v-if="'' != soloCurso.titulo_3">
            <h3>¿Qué Lograrás?</h3>
          </div>
          <v-img
            :src="`/images/cursos/${soloCurso.slug}/3.${extension}`"
            :srcset="`/images/cursos/${soloCurso.slug}/3@1x.${extension} 600w, /images/cursos/${soloCurso.slug}/3@2x.${extension} 960w, /images/cursos/${soloCurso.slug}/3@3x.${extension} 1264w`"
            :alt="soloCurso.titulo_3"
            width="100%"
            height="300"
            v-if="'' != soloCurso.titulo_3"
          >
            <span class="d-flex align-center">{{ soloCurso.titulo_3 }}</span>
          </v-img>
          <v-img
            :src="`/images/cursos/${soloCurso.slug}/4.${extension}`"
            :srcset="`/images/cursos/${soloCurso.slug}/4@1x.${extension} 600w, /images/cursos/${soloCurso.slug}/4@2x.${extension} 960w, /images/cursos/${soloCurso.slug}/4@3x.${extension} 1264w`"
            :alt="soloCurso.titulo_4"
            width="100%"
            height="300"
            v-if="'' != soloCurso.titulo_4"
          >
            <span class="d-flex align-center">{{ soloCurso.titulo_4 }}</span>
          </v-img>
          <v-img
            :src="`/images/cursos/${soloCurso.slug}/5.${extension}`"
            :srcset="`/images/cursos/${soloCurso.slug}/5@1x.${extension} 600w, /images/cursos/${soloCurso.slug}/5@2x.${extension} 960w, /images/cursos/${soloCurso.slug}/5@3x.${extension} 1264w`"
            :alt="soloCurso.titulo_5"
            width="100%"
            height="300"
            v-if="'' != soloCurso.titulo_5"
          >
            <span class="d-flex align-center">{{ soloCurso.titulo_5 }}</span>
          </v-img>
          <v-img
            :src="`/images/cursos/${soloCurso.slug}/6.${extension}`"
            :srcset="`/images/cursos/${soloCurso.slug}/6@1x.${extension} 600w, /images/cursos/${soloCurso.slug}/6@2x.${extension} 960w, /images/cursos/${soloCurso.slug}/6@3x.${extension} 1264w`"
            :alt="soloCurso.titulo_6"
            width="100%"
            height="300"
            v-if="'' != soloCurso.titulo_6"
          >
            <span class="d-flex align-center">{{ soloCurso.titulo_6 }}</span>
          </v-img>
          <v-img
            :src="`/images/cursos/${soloCurso.slug}/7.${extension}`"
            :srcset="`/images/cursos/${soloCurso.slug}/7@1x.${extension} 600w, /images/cursos/${soloCurso.slug}/7@2x.${extension} 960w, /images/cursos/${soloCurso.slug}/7@3x.${extension} 1264w`"
            :alt="soloCurso.titulo_7"
            width="100%"
            height="300"
            v-if="'' != soloCurso.titulo_7"
          >
            <span class="d-flex align-center">{{ soloCurso.titulo_7 }}</span>
          </v-img>
          <v-card class="pa-5" tile>
            <v-row>
              <v-col cols="8" class="pb-0">
                <v-card-title> INCLUYE </v-card-title>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3"></v-col>
              <v-col cols="9" class="pt-0">
                <v-card-text
                  v-html="soloCurso.incluye"
                  class="pt-0"
                ></v-card-text>
              </v-col>
            </v-row>
          </v-card>
          <v-card tile>
            <v-row class="pa-5">
              <v-col cols="8" class="pb-0">
                <v-card-title> INICIO Y HORARIOS DE CLASES </v-card-title>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3"></v-col>
              <v-col cols="9">
                <v-card-text
                  v-html="soloCurso.formato"
                  class="pt-0"
                ></v-card-text>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="8" class="pt-0">
                <v-card-text class="fecha">
                  Fecha de Inicio:
                  {{ fecha(soloCurso.hora_inicio, soloCurso.fecha_inicio) }}
                  <div v-if="'' != soloCurso.fecha_termino">
                    <br />
                    Fecha de Termino:
                    {{ fecha(soloCurso.hora_termino, soloCurso.fecha_termino) }}
                  </div>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
          <v-card class="pa-5" tile>
            <v-row>
              <v-col cols="8" class="pb-0">
                <v-card-title> DIRIGIDO A </v-card-title>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3"></v-col>
              <v-col cols="9" class="pt-0">
                <v-card-text
                  v-html="soloCurso.dirigido"
                  class="pt-0"
                ></v-card-text>
              </v-col>
            </v-row>
          </v-card>
          <v-card class="pa-5" tile>
            <v-row>
              <v-col cols="8" class="pb-0">
                <v-card-title> PLAN DE ESTUDIOS </v-card-title>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3"></v-col>
              <v-col cols="9" class="pt-0">
                <v-card-text
                  v-html="soloCurso.plan_estudios"
                  class="pt-0"
                ></v-card-text>
              </v-col>
            </v-row>
          </v-card>
          <v-card class="pa-5" tile>
            <v-card-title> NUESTROS DOCENTES </v-card-title>
            <v-card-text
              v-for="(profe, index) in soloCurso.profesores"
              :key="index"
              v-html="profe"
            >
            </v-card-text>
          </v-card>
          <v-row id="pago" class="py-10">
            <v-col cols="12" sm="6">
              <v-card color="#fff" tile>
                <header class="py-2 px-3">Valores y Formas de pago</header>
                <v-card-text class="pa-5" tile>
                  <h2 class="mb-3">
                    Arancel total {{ moneda(soloCurso.regular_price) }}
                  </h2>
                  <div v-if="null != soloCurso.date_on_sale_to" class="mensaje">
                    Arancel con pago Webpay {{ moneda(soloCurso.price) }} CLP.
                    Válido hasta el
                    {{ fecha2(soloCurso.date_on_sale_to) }}
                  </div>
                  <div class="price pa-5">
                    {{ moneda(soloCurso.price) }} CLP
                  </div>
                  <v-divider></v-divider>
                  <v-card-actions class="px-0 pb-0">
                    <v-btn
                      x-large
                      @click="btnComprar(soloCurso.id)"
                      target="_blank"
                      width="100%"
                    >
                      CONTRATAR CURSO
                    </v-btn>
                  </v-card-actions>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" class="medios-pago">
              <v-card color="#fff" tile>
                <header class="py-2 px-3">Medios de Pago</header>
                <v-card-text class="pa-5">
                  <span v-html="soloCurso.medios_pago"></span>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="pa-5 contactoLateral" tile>
            <ContactoDatos></ContactoDatos>
          </v-card>
          <div class="pb-5 mt-2" v-if="$vuetify.breakpoint.lgAndUp">
            <v-card
              height="300"
              class="d-flex flex-column align-center justify-center"
              tile
            >
              <v-card-text
                class="d-flex justify-center flex-column align-center"
              >
                <h2 class="mb-4">
                  Arancel total:
                  {{ moneda(soloCurso.regular_price) }} CLP
                </h2>
                <span v-if="null != soloCurso.date_on_sale_to" class="mb-3"
                  >Arancel pago Webpay válido hasta el
                  {{ fecha2(soloCurso.date_on_sale_to) }}
                  <b>{{ moneda(soloCurso.price) }}</b></span
                >
                <span class="mb-3 text-center">
                  Para finalizar la compra se redireccionará a
                  cenakinaulaonline.com
                </span>
                <v-btn
                  x-large
                  color="primary"
                  class="btn-basico"
                  @click="btnComprar(soloCurso.id)"
                  target="_blank"
                  >CONTRATAR CURSO</v-btn
                >
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <Foot class="foot"></Foot>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Foot from "~/components/Foot";
import ContactoDatos from "~/components/ContactoDatos";
import Marquesina from "~/components/Marquesina";

export default {
  components: {
    ContactoDatos,
    Marquesina,
    Foot,
  },
  data: () => ({
    iconoFavorito: "mdi-heart-outline",
  }),
  head() {
    return {
      title: this.titleCurso,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.descripcionCurso,
        },
        { property: "og:type", content: "og:website" },
        {
          property: "og:url",
          content: `https://www.cenakin.cl/cursos/${this.$route.params.id}`,
        },
        { property: "og:title", content: this.soloCurso.name },
        { property: "og:image", content: this.imagenCurso },
        { property: "og:description", content: this.descripcionCurso },
        {
          property: "twitter:title",
          content: this.soloCurso.name,
        },
        {
          property: "twitter:description",
          content: this.descripcionCurso,
        },
        { property: "twitter:image", content: this.imagenCurso },
      ],
      link: [
        {
          rel: "canonical",
          href: `https://www.cenakin.cl/cursos/${this.$route.params.id}`,
        },
      ],
    };
  },
  beforeCreate() {
    this.$vuetify.theme.dark = true;
  },
  mounted() {
    this.cambiarMenu(true);
  },
  created() {
    this.quitarCurso();
  },
  computed: {
    ...mapGetters("cursos", ["anchoVentana", "extension"]),
    subtitulo() {
      let aux = "CURSOS";

      this.soloCurso.categories.forEach((cat) => {
        if (40 === cat.id) {
          aux = "DIPLOMADO";
        } else if (39 === cat.id) {
          aux = "CURSOS ONLINE";
        }
      });

      return aux;
    },
    iconoFavoritoStyle() {
      return this.iconoFavorito === "mdi-heart" ? "color: red" : "";
    },
    titleCurso() {
      let title = "";
      if (this.soloCurso) {
        title = this.soloCurso.yoast_head_json.og_title;
      }
      return title;
    },
    descripcionCurso() {
      let descrip = "";
      if (this.soloCurso) {
        descrip = this.soloCurso.yoast_head_json.description;
      }
      return descrip;
    },
    imagenCurso() {
      let image = "";
      if (this.soloCurso) {
        image = `https://www.cenakin.cl/images/cursos/${this.soloCurso.slug}/1.jpg`;
      }
      return image;
    },
  },
  methods: {
    ...mapActions("cursos", ["quitarCurso", "cambiarMenu"]),
    btnComprar(idCurso){
      fbq('track','AddToCart');
      window.location.href = `https://cenakinaulaonline.com/carrito/?add-to-cart=${idCurso}`;
    },
    favorito() {
      if ("mdi-heart" === this.iconoFavorito) {
        this.iconoFavorito = "mdi-heart-outline";
      } else {
        this.iconoFavorito = "mdi-heart";
      }
      // console.log(this.soloCurso);
    },
    moneda(valor) {
      const formatterPeso = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0,
      });
      return formatterPeso.format(valor);
    },
    nombre(datos) {
      let aux = datos.split(" ");
      let name = "";
      switch (aux.length) {
        case 1:
          name = aux;
          break;
        case 2:
          name = aux[0] + "<br />" + aux[1];
          break;
        case 3:
          name = aux[0] + "<br />" + aux[1] + " " + aux[2];
          break;
        case 4:
          name = aux[0] + " " + aux[1] + "<br />" + aux[2] + " " + aux[3];
          break;
        case 5:
          name =
            aux[0] +
            "<br />" +
            aux[1] +
            " " +
            aux[2] +
            "<br />" +
            aux[3] +
            " " +
            aux[4];
          break;
        case 6:
          name =
            aux[0] +
            " " +
            aux[1] +
            "<br />" +
            aux[2] +
            " " +
            aux[3] +
            "<br />" +
            aux[4] +
            " " +
            aux[5];
          break;
        case 7:
          name =
            aux[0] +
            "<br />" +
            aux[1] +
            " " +
            aux[2] +
            "<br />" +
            aux[3] +
            " " +
            aux[4] +
            "<br />" +
            aux[5] +
            " " +
            aux[6];
          break;
      }
      return name;
    },
    fecha(hora, dia) {
      let data = "";
      let fec = "";
      if ("" != hora) {
        data = hora + " ";
      }
      if (10 > parseInt(dia.slice(6, 8))) fec = dia.slice(7, 8);
      else fec = dia.slice(6, 8);
      data += fec + " de " + this.mes(dia.slice(4, 6)) + " " + dia.slice(0, 4);
      return data;
    },
    fecha2(dia) {
      let anno = dia.slice(0, 4);
      let mes = dia.slice(5, 7);
      let da = "";

      if (10 > dia.slice(8, 10)) da = dia.slice(9, 10);
      else da = dia.slice(8, 10);

      return da + " de " + this.mes(mes) + " " + anno;
    },
    mes(fecha) {
      let fec = "";
      switch (fecha) {
        case "01":
          fec = "Enero";
          break;
        case "02":
          fec = "Febrero";
          break;
        case "03":
          fec = "Marzo";
          break;
        case "04":
          fec = "Abril";
          break;
        case "05":
          fec = "Mayo";
          break;
        case "06":
          fec = "Junio";
          break;
        case "07":
          fec = "Julio";
          break;
        case "08":
          fec = "Agosto";
          break;
        case "09":
          fec = "Septiembre";
          break;
        case "10":
          fec = "Octubre";
          break;
        case "11":
          fec = "Noviembre";
          break;
        case "12":
          fec = "Diciembre";
          break;
      }
      return fec;
    },
  },
  async asyncData(context) {
    return await context.$axios
      .get(
        `https://cenakinaulaonline.com/wp-json/wc/v3/products?slug=${context.params.id}&consumer_key=ck_8d87b7db23fc44e5cd9c9f1754c8ab64bf929840&consumer_secret=cs_4c5d058b5bf2d8080573c400de1ea5590d957499`
      )
      .then((result) => {
        return {
          soloCurso: result.data[0],
        };
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="sass">
$color1: #049DFC

#cursoPagina
  margin-top: -64px !important
  overflow: hidden
  h1
    font-size: 3rem
    line-height: 1
    text-shadow: 1px 1px 1px black
    @media (min-width: 960px)
      line-height: 1.3
  hr
    color: rgba(0,0,0,.1)
  #pago
    header
      border-bottom: 1px solid rgba(0,0,0,.1)
    .v-card
      color: #121212
      h2
        color: rgba(0,0,0,.7)
        font-size: 26px
        line-height: 1.5
        text-transform: uppercase
      .mensaje
        color: rgba(0,0,0,.6)
        font-size: 16px
      .price
        color: rgba(4,157,252,.9)
        font-size: 38px
        font-weight: bold
        padding: 10px 0
        display: flex
        justify-content: center
      .v-btn
        background: rgba(4,157,252,.9)
  .container
    height: 100%
    .v-card__actions
      height: 100%
      h1
        font-weight: normal
      .v-list-item__subtitle
        font-family: 'Oswald', sans-serif
  .contactoLateral
    margin-bottom: 20px
  .curso__item
    box-shadow: none
    .curso__item-capa
      height: 100%
      width: 100%
  .extra-titulo
    background: $color1
    padding: 15px 10px
    h3
      font-size: 24px
      text-shadow: 1px 1px 1px #121212
      text-transform: uppercase
  .fecha
    background: $color1
    color: #fff
    font-size: 18px
    text-shadow: 1px 1px 1px #121212
    text-transform: uppercase
  .foot
    @media (min-width: 960px)
      margin-top: 30px
  .medios-pago
    .v-card__text
      color: #121212
      font-size: 18px
      ol
        list-style-type: square
        padding-left: 24px !important
        li
          padding: 5px
  .v-image
    .v-responsive__content
      align-items: flex-end
      display: flex
      span
        background: rgba(4,157,252,.9)
        height: 48px
        font-size: 18px
        line-height: 1
        margin-bottom: 10px
        padding: 10px
        text-shadow: 1px 1px 1px #000
        text-transform: uppercase
  .v-card__title
    font-size: 1.5rem
    line-height: 1.2
    text-transform: uppercase
    word-break: normal
  .v-card__text
    color: #eee
    font-size: 1rem
    h3
      align-items: center
      color: #fff
      display: flex
      flex-wrap: wrap
      font-family: 'Roboto',sans-serif
      font-size: 1.25rem
      font-weight: 500
      letter-spacing: 0.0125em
      line-height: 1.2
    p
      margin: 0
  .v-list-item__subtitle
    margin-left: 12px
    text-shadow: 1px 1px 1px black
    @media (min-width: 600px)
      margin-left: 0
  @media (min-width: 1366px)
    margin-top: -64px !important
    .v-list-item__title
      h1
        font-size: 4rem
        line-height: 1
    .v-list-item__subtitle
      font-size: 1.5rem
#valor-precio
  background-color: $color1
</style>
