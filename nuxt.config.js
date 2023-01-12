import colors from "vuetify/es5/util/colors";
import axios from "axios";

const rutas = async () => {
  let cursos = axios
    .get(
      "https://cenakin.cl/otec/wp-json/wc/v3/products?category=22&per_page=100&consumer_key=ck_a62303a495e142cc35dbb14ca13884a4a8ae8b4e&consumer_secret=cs_49e0b6468aa1af67c931ed88fc59bfdacb5395ae"
    )
    .then((res) => {
      return res.data.map((crs) => {
        return "/cursos/" + crs.slug;
      });
    });
  let entradas = axios
    .get("https://cenakin.cl/otec/wp-json/wp/v2/posts")
    .then((res) => {
      return res.data.map((ntds) => {
        return "/blog/" + ntds.slug;
      });
    });
  return Promise.all([cursos, entradas]).then((values) => {
    return values.join().split(",");
  });
};

export default {
  target: "static",
  head: {
    titleTemplate: "%s",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "robots",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        property: "og:image:width",
        content: "1280",
      },
      {
        property: "og:image:height",
        content: "720",
      },
      { property: "og:locale", content: "es_CL" },
      { property: "og:site_name", content: "Cenakin" },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap",
        media: "print",
        onload: "this.media='all'",
      },
    ],
    script:[
      { src: 'https://cenakin.cl/js/google-tag.js', defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/google-gtag",
    "nuxt-facebook-pixel-module",
    "@nuxtjs/sitemap",
    "vue-social-sharing/nuxt",
    "nuxt-ssr-cache",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  "google-gtag": {
    id: "UA-126263425-1",
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ["cenakin.cl"],
      },
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  },

  facebook: {
    /* module options */
    track: "PageView",
    pixelId: "1078650119240088",
    autoPageView: true,
    disabled: false,
  },

  sitemap: {
    hostname: "https://cenakin.cl",
    gzip: true,
    routes: rutas,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  generate: {
    routes: rutas,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  cache: {
    useHostPrefix: false,
    pages: ["/"],
    store: {
      type: "memory",
      max: 100,
      ttl: 60,
    },
  },
};
