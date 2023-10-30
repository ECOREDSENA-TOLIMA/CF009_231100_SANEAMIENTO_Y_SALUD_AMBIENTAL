<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 A continuación, se describe el tema principal del componente formativo Prevención de riesgos, lo que es esencial para proteger nuestro bienestar y el entorno. Identificar posibles amenazas, como la contaminación del aire, el agua o los productos químicos peligrosos, permite implementar medidas preventivas. Esto incluye promover prácticas sostenibles, regular y aplicar leyes ambientales, y fomentar la conciencia pública. La educación sobre prácticas seguras y el uso responsable de recursos son fundamentales para reducir los impactos negativos en nuestra salud y el medio ambiente. Con una planificación adecuada, podemos preservar los ecosistemas, prevenir enfermedades y promover una vida más saludable para todos 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se observan los diferentes temas del componente formativo Prevención de riesgo. Entre ellos: la comunicación, los instrumentos de evaluación, las medidas preventivas y la bioseguridad.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
