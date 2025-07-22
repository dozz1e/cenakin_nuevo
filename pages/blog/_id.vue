<template>
  <div v-if="soloEntrada != null" id="entrada">
    <v-card width="100%" height="600">
      <div class="entrada__portada">
        <v-img
          sizes="(max-width: 1904px) 100vw, 1904px"
          :src="`/images/blog/${soloEntrada.slug}/1.${extension}`"
          :srcset="`/images/blog/${soloEntrada.slug}/1@1x.${extension} 960w, /images/blog/${soloEntrada.slug}/1@2x.${extension} 1264w, /images/blog/${soloEntrada.slug}/1@3x.${extension} 1904w`"
          :alt="soloEntrada.title.rendered"
          gradient="to bottom, rgba(4,157,252,.3), rgba(0,0,0,.5)"
          width="100%"
          height="600"
        >
          <v-container class="pa-0">
            <v-card-actions class="pa-0 mx-4 align-end d-flex">
              <v-list-item two-line class="pa-0">
                <v-list-item-content>
                  <v-list-item-title>
                    <h1
                      v-if="$vuetify.breakpoint.mobile"
                      v-html="nombre(soloEntrada.title.rendered)"
                      class="white--text"
                    ></h1>
                    <h1
                      v-else
                      class="mb-2 white--text"
                      v-html="soloEntrada.title.rendered"
                    ></h1>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-container>
        </v-img>
      </div>
    </v-card>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" lg="8">
          <div class="px-2 py-3 d-flex justify-space-between align-center">
            <span
              ><v-icon>mdi-calendar</v-icon>{{ fecha(soloEntrada.date) }}</span
            >
            <v-btn tile large @click="favorito()"
              ><v-icon :style="iconoFavoritoStyle">{{
                iconoFavorito
              }}</v-icon></v-btn
            >
          </div>
          <hr class="mx-2" />
          <v-card flat>
            <v-card-text v-html="soloEntrada.content.rendered"></v-card-text>
          </v-card>
          <v-img
            sizes="(max-width: 1904px) 100vw, 1904px"
            :src="`/images/blog/${soloEntrada.slug}/2.${extension}`"
            :srcset="`/images/blog/${soloEntrada.slug}/2@1x.${extension} 960w, /images/blog/${soloEntrada.slug}/2@2x.${extension} 1264w, /images/blog/${soloEntrada.slug}/2@3x.${extension} 1904w`"
            alt="Imagen contenido principal"
            width="100%"
          ></v-img>
          <v-card flat v-if="soloEntrada.texto_2">
            <v-card-text v-html="soloEntrada.texto_2"></v-card-text>
          </v-card>
          <v-img
            sizes="(max-width: 1904px) 100vw, 1904px"
            :src="`/images/blog/${soloEntrada.slug}/3.${extension}`"
            :srcset="`/images/blog/${soloEntrada.slug}/3@1x.${extension} 960w, /images/blog/${soloEntrada.slug}/3@2x.${extension} 1264w, /images/blog/${soloEntrada.slug}/3@3x.${extension} 1904w`"
            alt="Imagen apoyo 1"
            width="100%"
          ></v-img>
          <v-card flat v-if="soloEntrada.texto_3">
            <v-card-text v-html="soloEntrada.texto_3"></v-card-text>
          </v-card>
          <v-img
            sizes="(max-width: 1904px) 100vw, 1904px"
            :src="`/images/blog/${soloEntrada.slug}/4.${extension}`"
            :srcset="`/images/blog/${soloEntrada.slug}/4@1x.${extension} 960w, /images/blog/${soloEntrada.slug}/4@2x.${extension} 1264w, /images/blog/${soloEntrada.slug}/4@3x.${extension} 1904w`"
            alt="Imagen contenido principal"
            width="100%"
          ></v-img>
          <v-card flat v-if="soloEntrada.texto_4">
            <v-card-text v-html="soloEntrada.texto_4"></v-card-text>
          </v-card>
          <v-img
            sizes="(max-width: 1904px) 100vw, 1904px"
            :src="`/images/blog/${soloEntrada.slug}/5.${extension}`"
            :srcset="`/images/blog/${soloEntrada.slug}/5@1x.${extension} 960w, /images/blog/${soloEntrada.slug}/5@2x.${extension} 1264w, /images/blog/${soloEntrada.slug}/5@3x.${extension} 1904w`"
            alt="Imagen contenido principal"
            width="100%"
          ></v-img>
          <v-card flat v-if="soloEntrada.texto_5">
            <v-card-text v-html="soloEntrada.texto_5"></v-card-text>
          </v-card>
          <v-card
            flat
            href="https://cenakin.cl/cursos/redes-sociales/"
            class="publicidad"
          >
            <v-img
              sizes="(max-width: 1904px) 100vw, 1904px"
              :src="`/images/blog/footer.${extension}`"
              :srcset="`/images/blog/footer@1x.${extension} 960w, /images/blog/footer@2x.${extension} 1264w, /images/blog/footer@3x.${extension} 1904w`"
              alt="Publicidad Cenakin OTEC"
              width="100%"
            >
              <v-card-text v-if="!$vuetify.breakpoint.mobile">
                Aprende estrategias en redes sociales que<br />llevarán tus
                proyectos a otro nivel
              </v-card-text>
            </v-img>
            <v-card-text v-if="$vuetify.breakpoint.mobile">
              Aprende estrategias en redes sociales que llevarán tus proyectos a
              otro nivel
            </v-card-text>
            <v-card-actions class="d-flex justify-center white--text blue">
              MÁS INFORMACIÓN
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4" class="lateral">
          <ContactoDatos :darks="negro"></ContactoDatos>
        </v-col>
      </v-row>
    </v-container>
    <Foot></Foot>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ContactoDatos from "~/components/ContactoDatos";
import Foot from "~/components/Foot";

export default {
  components: { ContactoDatos, Foot },
  data: () => ({
    negro: false,
    titulo: "",
    description: "",
    iconoFavorito: "mdi-heart-outline",
  }),
  mounted() {
    this.cambiarMenu(false);
  },
  beforeCreate() {
    this.$vuetify.theme.dark = false;
  },
  created() {
    this.quitarEntrada();
  },
  computed: {
    ...mapGetters("cursos", ["extension"]),
    ...mapGetters("entradas", ["listadoEntradas"]),
    iconoFavoritoStyle() {
      return this.iconoFavorito === "mdi-heart" ? "color: red" : "";
    },
    descripcionPagina() {
      let aux = "";
      if (this.soloEntrada != null)
        aux = this.soloEntrada.yoast_meta.yoast_wpseo_metadesc;
      return aux;
    },
    tituloPagina() {
      let aux = "";
      if (this.soloEntrada != null)
        aux = this.soloEntrada.yoast_meta.yoast_wpseo_title;
      return aux;
    },
    imagenPagina() {
      let aux = "";
      if (this.soloEntrada != null)
        aux = `https://www.cenakin.cl/images/blog/${this.soloEntrada.slug}/1.jpg`;
      return aux;
    },
    urlPagina() {
      let aux = "";
      if (this.soloEntrada != null)
        aux = `https://cenakin.cl/otec/${this.soloEntrada.slug}`;
      return aux;
    },
  },
  methods: {
    ...mapActions("entradas", ["buscarEntrada", "quitarEntrada"]),
    ...mapActions("cursos", ["cambiarMenu"]),
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
    fecha(fec) {
      let aux = "";
      aux = fec.split("T");
      aux = aux[0].split("-");
      return `${aux[2]}/${aux[1]}/${aux[2]}`;
    },
    favorito() {
      if ("mdi-heart" === this.iconoFavorito) {
        this.iconoFavorito = "mdi-heart-outline";
      } else {
        this.iconoFavorito = "mdi-heart";
      }
    },
  },
  head() {
    let titulo = "";
    let descripcion = "";
    if (this.soloEntrada != null) titulo = this.tituloPagina;
    descripcion = this.descripcionPagina;
    return {
      title: this.tituloPagina,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.descripcionPagina,
        },
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content: `https://cenakin.cl/entradas/${this.$route.params.id}`,
        },
        { property: "og:site_name", content: "Cenakin" },
        { property: "og:title", content: this.tituloPagina },
        { property: "og:image", content: this.imagenPagina },
        { property: "og:description", content: this.descripcionPagina },
      ],
      link: [
        {
          rel: "canonical",
          href: `https://cenakin.cl/entradas/${this.$route.params.id}`,
        },
      ],
    };
  },
  async asyncData(context) {
    return context.$axios
      .get(
        `https://cenakin.cl/otec/wp-json/wp/v2/posts?slug=${context.params.id}`
      )
      .then((result) => {
        return {
          soloEntrada: result.data[0],
        };
      });
  },
};
</script>

<style lang="sass">
#entrada
  margin-top: -64px
  .lateral
    margin: 20px 0
    @media (min-width: 960px)
      .v-card
        margin: 0 20px
  .publicidad
    @media (min-width: 960px)
      margin-bottom: 20px
      .v-card__text
        font-size: 32px
        line-height: 1.2
  .entrada__portada
    .v-responsive__content
      align-items: flex-end
      display: flex
      .container
        background: #049DFC
        h1
          line-height: 1.2
</style>
