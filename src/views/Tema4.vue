<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Bioseguridad

    Separador
    .row
      .col-xl-12       
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.1 Tipos protección
    
    Separador
    .row
      .col-xl-12       
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.2 Elementos protección
</template>

<script>
export default {
  name: 'Tema4',
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
