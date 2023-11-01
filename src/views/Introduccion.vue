<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right") 
        p La prevención de riesgos en diferentes ámbitos, como los físicos, mentales, sanitarios y laborales, es esencial para garantizar la seguridad y el bienestar de las poblaciones. La prevención no solo ayuda a evitar problemas de salud, sino que también contribuye a reducir costos en el sistema de atención médica y mejora la calidad de vida de las personas. Actuar de manera proactiva para identificar, evaluar y mitigar los riesgos es una estrategia fundamental en la promoción de la salud y la seguridad en todos los niveles de la sociedad. La prevención oportuna y efectiva es clave para evitar la propagación de enfermedades y la ocurrencia de accidentes.
    
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video          
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
