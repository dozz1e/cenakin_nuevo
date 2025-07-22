<template>
  <div v-if="soloCurso" id="cursoPagina">
    <v-row>
      <v-card class="curso__item" width="100%" height="600" dark>
        <div class="curso__item-capa relative">
          <picture>
            <source
              :srcset="`https://cenakin.cl/images/cursos/${soloCurso.slug}/1@1x.webp`"
              media="(max-width: 800px)"
            />
            <source
              :srcset="`https://cenakin.cl/images/cursos/${soloCurso.slug}/1@2x.webp`"
              media="(max-width: 1330px)"
            />
            <source
              :srcset="`https://cenakin.cl/images/cursos/${soloCurso.slug}/1@3x.webp`"
              media="(max-width: 1920px)"
            />
            <img
              :src="`https://cenakin.cl/images/cursos/${soloCurso.slug}/1@3x.webp`"
              :alt="soloCurso.name"
              style="object-fit: cover"
              class="h-full w-full"
            />
          </picture>
          <div class="absolute bottom left">
            <v-container>
              <span class="subtitulo">{{ subtitulo }}</span>
              <h1>{{ soloCurso.name }}</h1>
            </v-container>
          </div>
        </div>
      </v-card>
    </v-row>

    <v-container>
      <div class="py-4">
        <v-row>
          <v-col cols="12" md="8">
            <v-row>
              <v-col cols="12" md="4">
                <div class="d-flex">
                  <v-btn
                    color="purple"
                    rounded
                    x-large
                    class="btn-basico font-weight-bold my-3"
                    :href="`/pdfs/${soloCurso.id}.pdf`"
                    target="_blank"
                    block
                  >
                    DESCARGAR PROGRAMA
                    <v-icon right large class="pl-4"> mdi-download </v-icon>
                  </v-btn>
                  <!-- <v-btn
                    tile
                    large
                    @click="favorito()"
                    v-if="$vuetify.breakpoint.mobile"
                  >
                    <v-icon :style="iconoFavoritoStyle">{{
                      iconoFavorito
                    }}</v-icon></v-btn
                  > -->
                </div>
              </v-col>
            </v-row>
          </v-col>
          <!-- <v-col
            cols="12"
            md="4"
            class="d-flex justify-end"
            v-if="!$vuetify.breakpoint.mobile"
          >
            <v-btn tile large @click="favorito()">
              <v-icon :style="iconoFavoritoStyle">{{ iconoFavorito }} </v-icon>
            </v-btn>
          </v-col> -->
        </v-row>
      </div>

      <v-row>
        <v-col cols="12" lg="8">
          <v-card class="pa-5">
            <v-card-text
              v-html="soloCurso.description"
              class="white--text"
            ></v-card-text>
          </v-card>

          <!-- <v-img
            :src="`/images/cursos/${soloCurso.slug}/2.webp`"
            :srcset="`/images/cursos/${soloCurso.slug}/2@1x.webp 600w, /images/cursos/${soloCurso.slug}/2@2x.webp 960w, /images/cursos/${soloCurso.slug}/2@3x.webp 1264w`"
            :alt="`${soloCurso.name} Subportada`"
            width="100%"
            height="300"
            class="mt-5"
          ></v-img> -->

          <!-- <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/9VVCvXt5gMU?si=YXnqLsYRHlqiwarP"
            title="Cenakin Spa"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="mt-5"
          ></iframe> -->

          <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/TsvfH9uQmas?si=p0ZMZYQ_k3fGWxVK"
            title="Cenakin Spa"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="mt-5"
          ></iframe>

          <v-card
            class="d-flex justify-center mt-5 flex-column pa-5 flex-md-row"
          >
            <div class="d-flex justify-center align-center my-5 mx-md-10">
              <img src="/images/banner.svg" class="acreditada" />
            </div>
            <div
              class="d-flex flex-column justify-center align-center my-5 mx-md-10"
            >
              <img
                src="https://cenakin.cl/images/logos/nch.png"
                alt="WMF"
                class="acreditada2"
              />
              <span class="text-center mt-3"
                >OTEC Certificada<br />OC-CER726261</span
              >
            </div>
            <div
              class="d-flex flex-column justify-center align-center my-5 mx-md-10"
            >
              <img
                src="https://cenakin.cl/images/logos/wmf.avif"
                alt="WMF"
                class="acreditada3"
              />
              <span class="text-center mt-3"
                >Miembro Oficial Federación Mundial<br />de Masajes WMF</span
              >
            </div>
          </v-card>

          <v-expansion-panels class="mt-5">
            <v-expansion-panel class="mb-4">
              <v-expansion-panel-header disable-icon-rotate class="font-weight-bold">
                FECHAS Y HORARIOS
                <template v-slot:actions>
                  <v-icon>
                    mdi-arrow-down-thick
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="p-5" v-html="soloCurso.acf.formato"></div>
                <div class="font-weight-bold mt-3">
                  <div class="fecha pa-4">
                    Fecha de Inicio:
                    {{
                      `${soloCurso.acf.hora_inicio} ${soloCurso.acf.fecha_inicio}`
                    }}
                  </div>
                  <div
                    v-if="soloCurso.acf.fecha_termino"
                    class="fecha pa-4 mt-2"
                  >
                    Fecha de Termino:
                    {{
                      `${soloCurso.acf.hora_termino} ${soloCurso.acf.fecha_termino}`
                    }}
                  </div>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel class="mb-4">
              <v-expansion-panel-header disable-icon-rotate class="font-weight-bold">
                DOCENTES
                <template v-slot:actions>
                  <v-icon>
                    mdi-arrow-down-thick
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="p-5">
                  <div
                    v-for="(profe, index) in soloCurso.acf.profesores"
                    :key="index"
                    v-html="profe"
                    class="mb-3"
                  ></div>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header disable-icon-rotate class="font-weight-bold">
                RESERVA DE CUPO
                <template v-slot:actions>
                  <v-icon>
                    mdi-arrow-down-thick
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>Para reservar el cupo se realizan los siguientes pasos:</p>
                <ul>
                  <li>
                    - Pagar el valor completo del curso o capacitación desde el
                    botón comprar curso.
                  </li>
                  <li>
                    - Una vez que se finalice el pago, recibiremos una
                    notificación de inmediato. Nos pondremos en contacto
                    contigo, en nuestros horarios de atención, y continuaremos
                    con el proceso de inscripción.
                  </li>
                  <li>
                    - Si deseas realizar tu inscripción por transferencia o en
                    nuestras oficinas, déjanos un mensaje en nuestro whatsapp o
                    correo eléctronico para entregarte los pasos a seguir.
                  </li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-row class="justify-center justify-lg-start my-5">
            <v-btn
              href="https://wa.link/v7vfjf"
              target="_blank"
              class="pa-8 px-10 green ma-0 ml-md-3 btn-whatsapp"
            >
              <v-icon left large class="mr-5"> mdi-whatsapp </v-icon>
              <div class="d-flex flex-column">
                <span>+56 9 4487 1048</span>
                <span>MÁS INFORMACIÓN AQUÍ</span>
              </div>
            </v-btn>
          </v-row>

          <v-expansion-panels class="mt-5">
            <v-expansion-panel class="mb-4">
              <v-expansion-panel-header disable-icon-rotate class="font-weight-bold">
                INCLUYE
                <template v-slot:actions>
                  <v-icon>
                    mdi-arrow-down-thick
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="p-5" v-html="soloCurso.acf.incluye"></div>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel class="mb-4">
              <v-expansion-panel-header disable-icon-rotate class="font-weight-bold">
                OBJETIVOS
                <template v-slot:actions>
                  <v-icon>
                    mdi-arrow-down-thick
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="p-5" v-html="soloCurso.acf.objetivo"></div>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel class="mb-4">
              <v-expansion-panel-header disable-icon-rotate class="font-weight-bold">
                REQUISITOS
                <template v-slot:actions>
                  <v-icon>
                    mdi-arrow-down-thick
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="p-5" v-html="soloCurso.acf.dirigido"></div>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header disable-icon-rotate class="font-weight-bold">
                PLAN DE ESTUDIOS
                <template v-slot:actions>
                  <v-icon>
                    mdi-arrow-down-thick
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="p-5" v-html="soloCurso.acf.plan_estudios"></div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/I-ghG4r4UVo?si=3xMCMmXShUiuLf3y"
            title="Alumnos"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="mt-5"
          ></iframe>

          <v-card color="#fff" class="mt-5" light>
            <v-row>
              <v-col cols="12" md="6">
                <header class="py-2 px-3">Valores y Formas de pago</header>
                <v-card-text class="pa-5">
                  <h2 class="mb-3">
                    Arancel total
                    <del v-if="soloCurso.sale_price != ''"
                      >{{ moneda(soloCurso.regular_price) }} CLP</del
                    >
                  </h2>
                  <div
                    v-if="
                      soloCurso.sale_price != '' && soloCurso.date_on_sale_to
                    "
                    class="mensaje"
                  >
                    Arancel con descuento. Válido hasta el
                    {{ fecha2(soloCurso.date_on_sale_to) }}
                  </div>

                  <div class="price ma-5">
                    {{ moneda(soloCurso.price) }} CLP
                  </div>
                  <v-divider></v-divider>
                  <v-card-actions class="px-0 pb-0">
                    <v-btn
                      x-large
                      @click="btnComprar(soloCurso.id)"
                      target="_blank"
                      width="100%"
                      class="btn-basico-violeta"
                    >
                      <v-icon left> mdi-check-decagram-outline </v-icon>
                      INSCRÍBETE AQUÍ
                    </v-btn>
                  </v-card-actions>
                </v-card-text>
              </v-col>
              <v-col cols="12" md="6">
                <header class="py-2 px-3">Medios de Pago</header>
                <v-card-text class="pa-5">
                  <span>
                    Tarjeta de débito o tarjeta de crédito, hasta 6 cuotas
                    precio contado.
                  </span>
                  <img
                    src="/images/medios-pago.png"
                    alt="Medios de Pago"
                    width="100%"
                  />
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" lg="4">
          <v-card class="pa-5 contactoLateral" tile>
            <ContactoDatos></ContactoDatos>
          </v-card>
          <div class="d-none d-lg-flex">
            <v-card tile dark style="width: 100%">
              <header class="py-2 px-3">Valores y Formas de pago</header>
              <v-card-text class="pa-5 oscuro" tile>
                <h2 class="mb-3">
                  Arancel total
                  <del v-if="soloCurso.sale_price != ''"
                    >{{ moneda(soloCurso.regular_price) }} CLP</del
                  >
                </h2>
                <div
                  v-if="soloCurso.sale_price != '' && soloCurso.date_on_sale_to"
                  class="mensaje mb-5"
                >
                  Arancel con descuento. Válido hasta el
                  {{ fecha2(soloCurso.date_on_sale_to) }}
                </div>
                <div class="price">{{ moneda(soloCurso.price) }} CLP</div>
                <v-divider class="mt-5"></v-divider>
                <v-card-actions class="px-0 pb-0">
                  <v-btn
                    x-large
                    @click="btnComprar(soloCurso.id)"
                    target="_blank"
                    width="100%"
                    class="btn-basico-violeta"
                  >
                    <v-icon left> mdi-check-decagram-outline </v-icon>
                    INSCRÍBETE AQUÍ
                  </v-btn>
                </v-card-actions>
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
import Suscripcion from "~/components/Suscripcion";

export default {
  components: {
    ContactoDatos,
    Suscripcion,
    Foot,
  },
  data: () => ({
    iconoFavorito: "mdi-heart-outline",
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Nombre es requerido"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail es requerido",
      (v) => /.+@.+\..+/.test(v) || "E-mail debe ser válido",
    ],
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
        {
          property: "og:image",
          content: `https://www.cenakin.cl/images/cursos/${this.$route.params.id}/1.jpg`,
        },
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
    ...mapGetters("cursos", ["anchoVentana"]),
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
        title = `${this.soloCurso.name} - Cenakin OTEC`;
      }
      return title;
    },
    descripcionCurso() {
      let descrip = "";
      if (this.soloCurso) {
        descrip = this.soloCurso.yoast_head_json.og_description;
      }
      return descrip;
    },
    imagenCurso() {
      let image = "";
      if (this.soloCurso) {
        image = `https://www.cenakin.cl/images/cursos/${this.soloCurso.slug}/1.webp`;
      }
      return image;
    },
  },

  methods: {
    ...mapActions("cursos", ["quitarCurso", "cambiarMenu"]),
    btnComprar(idCurso) {
      fbq("track", "AddToCart");
      window.location.href = `https://cenakin.cl/otec/carrito/?add-to-cart=${idCurso}`;
    },
    favorito() {
      if ("mdi-heart" === this.iconoFavorito) {
        this.iconoFavorito = "mdi-heart-outline";
      } else {
        this.iconoFavorito = "mdi-heart";
      }
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
          name = aux[0];
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
      return hora;
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
    validate() {
      this.$refs.form.validate();
    },
  },

  async asyncData(context) {
    return await context.$axios
      .get(
        `https://cenakin.cl/otec/wp-json/wc/v3/products?slug=${context.params.id}&consumer_key=ck_a62303a495e142cc35dbb14ca13884a4a8ae8b4e&consumer_secret=cs_49e0b6468aa1af67c931ed88fc59bfdacb5395ae`
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
$color2: #9c27b0

.oscuro
  .v-card__text, h2, .mensaje
    color: #fff

.relative
  position: relative
.absolute
  position: absolute
  h1
    overflow-wrap: break-word
  .subtitulo
    text-shadow: 1px 1px 1px black
    font-weight: bold
    text-transform: uppercase
    font-size: 1.2rem
.bottom
  bottom: 20px
.left
  left: 1rem
@media (width > 600px)
  .left
    left: 2rem
@media (width > 980px)
  .left
    left: 5rem

@keyframes bounce
  70%, 90%, 97%, 100%
    transform: translateY(0%)
  80%
    transform: translateY(-15%)
  95%
    transform: translateY(-7%)
  99%
    transform: translateY(-3%)

.bounce
  animation: bounce 2s ease infinite

.mdi-chevron-down::before
  font-weight: bold
  background-color: rgba(4, 157, 252, 0.9)
  padding: 6px 6px 5px 5px
  border-radius: 50px

.price
  color: rgba(4,157,252,.9)
  font-size: 38px
  font-weight: bold
  padding: 10px 0
  display: flex
  justify-content: center

#cursoPagina
  margin-top: -64px !important
  overflow: hidden

  picture
    display: flex
    justify-content: center
    img
      height: 600px !important
  @media (max-width:1023px)
    picture
      img
        width: 100%
  @media (min-width:1024px)
    picture
      img
        position: absolute
        height: auto
        min-width: 100%
  h1
    font-size: 3rem
    line-height: 1
    text-shadow: 1px 1px 1px black
    @media (min-width: 960px)
      line-height: 1.3
  hr
    color: rgba(0,0,0,.1)
  .pago
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
    overflow: hidden
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
  .v-card__text p
    padding-bottom: 20px
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
    color: #121212
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
    h4
      font-family: 'Roboto', sans-serif
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

.btn-basico:hover
  background-color: #641971 !important

.acreditada
    height: 60px
.acreditada2
  height: 100px
  width: 80px
.acreditada3
  height: 100px
  width: 100px

.btn-whatsapp:hover
  background-color: #347937 !important

@media (min-width: 1024px)
  .acreditada
    height: 120px !important
</style>
