export default () => ({
  namespaced: true,
  cursos: [],
  ancho: 0,
  curso: null,
  menu: true,
  extension: null,
  socials: [
    {
      icono: "mdi-facebook",
      ruta: "https://www.facebook.com/cenakinchile",
      imagen: "/images/social/facebook.png",
      nombre: "Facebook",
    },
    {
      icono: "mdi-instagram",
      ruta: "https://www.instagram.com/cenakinchile/",
      imagen: "/images/social/instagram.png",
      nombre: "Instagram",
    },
    {
      icono: "mdi-whatsapp",
      ruta: "https://api.whatsapp.com/send?phone=56944871048",
      imagen: "/images/social/whatsapp.png",
      nombre: "Whastapp",
    },
  ],
});
