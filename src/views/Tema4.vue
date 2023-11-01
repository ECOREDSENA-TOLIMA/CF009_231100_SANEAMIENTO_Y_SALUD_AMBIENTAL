<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Bioseguridad

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-4
          p La bioseguridad es un conjunto de normas y medidas esenciales para prevenir riesgos en procedimientos científicos que involucran agentes potencialmente infecciosos o peligrosos, ya sean de naturaleza biológica, química o física. Su principal objetivo es proteger a quienes trabajan con estos agentes, así como a la comunidad, el medio ambiente y las muestras o procesos de cualquier forma de contaminación.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La bioseguridad se enfoca en controlar estos riesgos y evitar la liberación de agentes peligrosos dentro y fuera de los lugares de trabajo. Para lograrlo, se aplican normas y protocolos específicos. Los tres parámetros fundamentales que componen el conjunto de medidas de bioseguridad son:
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img2.svg', alt='Imagen decorativa')
        h3.text-center Parámetro #1
        p Consiste en asegurarse de que se sigan adecuadamente las técnicas, procedimientos y normas de trabajo establecidas. Esto implica que las personas involucradas en actividades científicas o laboratorios deben cumplir con los protocolos de seguridad y las buenas prácticas para minimizar los riesgos de exposición a agentes peligrosos. La formación, la capacitación y la supervisión son fundamentales para garantizar que estas normas se cumplan de manera efectiva.

      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img3.svg', alt='Imagen decorativa')
        h3.text-center Parámetro #2
        p Contención o aislamiento físico de los agentes patógenos. Esto implica diseñar y construir instalaciones de trabajo seguras que eviten la liberación de agentes biológicos peligrosos al entorno. Además, es fundamental el uso adecuado de equipos de seguridad, como cabinas de flujo laminar, guantes, batas, máscaras, y otros dispositivos que ayuden a prevenir la exposición a estos agentes patógenos. El objetivo es mantener un ambiente de trabajo seguro y evitar la propagación de infecciones o contaminación.
      .col-md.tarjeta.color-acento-botones.p-5(style="background-color:#F1D8FF;color:#000000")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img4.svg', alt='Imagen decorativa')
        h3.text-center(style="color:#000000") Parámetro #3
        p(style="color:#000000") Se centra en la capacitación del personal encargado de seguir las normas y prácticas de trabajo adecuadas. Esto implica proporcionar formación sobre cómo trabajar de manera segura con agentes patógenos, asegurando que el personal conozca las medidas de seguridad, los protocolos de emergencia y cómo utilizar y mantener los equipos de seguridad. La capacitación es esencial para garantizar que el personal esté consciente de los riesgos y sepa cómo protegerse a sí mismo y a los demás mientras realiza su trabajo.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p Las normas de bioseguridad son fundamentales para prevenir riesgos biológicos en diversos entornos, como laboratorios, hospitales y otros lugares donde se manipulan agentes biológicos. Estas normas incluyen la implementación de barreras para evitar la exposición a agentes infecciosos y reducir el riesgo de contagio. Las barreras de bioseguridad incluyen el uso de equipo de protección personal, técnicas de trabajo seguras, desinfección y esterilización adecuadas, así como la contención física de los agentes infecciosos en instalaciones seguras. La aplicación adecuada de estas barreras es fundamental para garantizar la seguridad de quienes trabajan con agentes biológicos y para prevenir la propagación de enfermedades.
    Separador
    .row
      .col-xl-12       
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.1 Tipos protección
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La protección en entornos donde se manipulan agentes biológicos, químicos o físicos es fundamental para garantizar la seguridad de las personas involucradas. Los elementos de protección varían según el tipo de riesgo y las partes del cuerpo que deben protegerse. Algunos de los elementos de protección comunes incluyen:
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Protectores de la cabeza")
        .col-md-6.mb-4.mb-md-0
          p Los cascos de seguridad se utilizan en entornos donde existe el riesgo de caída de objetos o lesiones en la cabeza.
        .col-md-6
          figure
           img(src='@/assets/curso/temas/tema4/img5.png', alt='Protectores de la cabeza')
      .row(titulo="Protectores auditivos")
        .col-md-6.mb-4.mb-md-0
          p En entornos ruidosos, se utilizan protectores auditivos como tapones para los oídos o protectores de oídos con cancelación de ruido.
        .col-md-6
          figure
           img(src='@/assets/curso/temas/tema4/img6.png', alt='Protectores auditivos')
      .row(titulo="Protectores oculares y faciales")
        .col-md-6.mb-4.mb-md-0
          p Las gafas de seguridad, protectores faciales y máscaras de protección facial son esenciales para proteger los ojos y la cara de salpicaduras, partículas o sustancias químicas.
        .col-md-6
          figure
           img(src='@/assets/curso/temas/tema4/img7.png', alt='Protectores oculares y faciales')
      .row(titulo="Protectores de vías respiratorias")
        .col-md-6.mb-4.mb-md-0
          p En situaciones donde existe riesgo de inhalación de partículas peligrosas, se utilizan respiradores o máscaras de protección para garantizar una adecuada filtración del aire.
        .col-md-6
          figure
           img(src='@/assets/curso/temas/tema4/img8.png', alt='Protectores de vías respiratorias')
      .row(titulo="Protectores de manos y brazos")
        .col-md-6.mb-4.mb-md-0
          p Los guantes de protección son esenciales para evitar la exposición de la piel a sustancias peligrosas. Pueden ser de látex, nitrilo, vinilo u otros materiales, según las necesidades.
        .col-md-6
          figure
           img(src='@/assets/curso/temas/tema4/img9.png', alt='Protectores de manos y brazos')
      .row(titulo="Protectores de pies")
        .col-md-6.mb-4.mb-md-0
          p Se utilizan botas de seguridad con punteras reforzadas, calzado antideslizante en superficies resbaladizas, calzado resistente a productos químicos en entornos con sustancias peligrosas, botas con propiedades aislantes en áreas con riesgo de descargas eléctricas, calzado con aislamiento térmico en condiciones extremas y calzado específico para diferentes industrias.
        .col-md-6
          figure
           img(src='@/assets/curso/temas/tema4/img10.png', alt='Protectores de pies')
      .row(titulo="Protectores para la piel")
        .col-md-6.mb-4.mb-md-0
          p Cremas, pomadas o bloqueadores con filtro UV.
        .col-md-6
          figure
           img(src='@/assets/curso/temas/tema4/img11.png', alt='Protectores para la piel')
      .row(titulo="Protectores del tronco")
        .col-md-6.mb-4.mb-md-0
          p Las batas y overoles proporcionan una capa adicional de protección para el cuerpo contra derrames o salpicaduras.
        .col-md-6
          figure
           img(src='@/assets/curso/temas/tema4/img12.png', alt='')
      .row(titulo="Protectores de cuerpo completo")
        .col-md-6.mb-4.mb-md-0
          p Arneses para trabajos en altura, ropa de riesgo químico para proteger contra sustancias peligrosas, trajes antillamas para prevenir quemaduras, y trajes térmicos para mantener una temperatura corporal adecuada en entornos extremos de temperatura.
        .col-md-6
          figure
           img(src='@/assets/curso/temas/tema4/img13.png', alt='Protectores de cuerpo completo')
      
    Separador
    .row
      .col-xl-12       
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.2 Elementos protección
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los Elementos de Protección Individual (EPI) son esenciales para proteger a los trabajadores de diversos riesgos en el entorno laboral. Estos elementos se pueden clasificar en tres categorías:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
           img(src='@/assets/curso/temas/tema4/img14.svg', alt='Imagen de muestra')
      .col-lg-8
        .cajon-b.color-primario.p-3.mb-1(style="background-color: #eeffde;")
          p.mb-0 #[b a.]	#[b Riesgos mínimos:] estos EPI protegen a los trabajadores de riesgos mínimos, como la manipulación de productos químicos, exposición a temperaturas extremas y acciones mecánicas que pueden causar efectos superficiales.
        .cajon-b.color-primario.p-3.mb-1(style="background-color: #eeffde;")
          p.mb-0 #[b b.] #[b Riesgos de nivel intermedio:] estos elementos de protección están diseñados para enfrentar riesgos de nivel medio a alto que, aunque peligrosos, no se consideran mortales o irreversibles.
        .cajon-b.color-primario.p-3.mb-1(style="background-color: #eeffde;")
          p.mb-0 #[b c.] #[b Riesgos de índole irreversible:] estos EPI se utilizan para proteger a los trabajadores de riesgos que podrían resultar en consecuencias mortales para su salud.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Es importante que los trabajadores utilicen los equipos de protección individual de manera obligatoria en el entorno laboral para evitar la exposición a peligros como polvo, líquidos y otros elementos que puedan poner en riesgo su vida. Las empresas también tienen la responsabilidad de proporcionar información sobre cómo usar estos elementos y cuándo deben implementarse. Los EPI son fundamentales para:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-4
          .row
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema4/img15.svg', alt='Imagen de muestra')
            .col-lg-8
              ul.lista-ul
                li
                  i.fas.fa-check(style="color:#63C500")
                  |	Proteger la integridad física de las personas.
                li
                  i.fas.fa-check(style="color:#63C500")
                  |	Servir como barrera contra las fuentes de riesgo.
                li
                  i.fas.fa-check(style="color:#63C500")
                  |	Mejorar el rendimiento laboral de los trabajadores.
                li
                  i.fas.fa-check(style="color:#63C500")
                  |	Contribuir a un ambiente de trabajo más seguro.
                li
                  i.fas.fa-check(style="color:#63C500")
                  |	Reducir las consecuencias de los accidentes laborales.

          
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El uso adecuado de los elementos de protección es esencial para prevenir riesgos y enfermedades en el trabajo, así como para evitar la propagación de enfermedades en las comunidades. Garantizar que las personas tengan acceso a la información necesaria sobre cómo utilizarlos correctamente es fundamental para mejorar la calidad de vida y la seguridad en el trabajo.
            
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
