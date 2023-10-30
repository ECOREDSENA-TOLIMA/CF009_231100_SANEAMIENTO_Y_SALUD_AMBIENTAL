export default {
  global: {
    componenteFormativo: 'Prevención de riesgo',
    descripcionCurso:
      'En este componente formativo se abordan diferentes temáticas las cuales podrá utilizar para identificar factores de riesgo y los elementos de protección que se deben utilizar para el cuidado de riesgos de bioseguridad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Técnicas',
            hash: 't_1_1',
          },
          {
            numero: '1.1',
            titulo: 'Métodos',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Instrumentos de evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fuentes de información',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de recolección',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Medidas preventivas y correctivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'TFactores de riesgo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Indicadores y análisis',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Bioseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos protección',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Elementos protección',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_009_231100.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Protocolos de bioseguridad.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, 11 de abril). Protocolos de bioseguridad. [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DWJcnTOcMmQ',
    },
    {
      tema: 'Procesamiento de información.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, 27 de junio). Técnicas para el análisis de datos. [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pjTI4UOgkM8',
    },
  ],
  glosario: [
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de normas, medidas y protocolos que son aplicados en múltiples procedimientos realizados en investigaciones científicas y trabajos docentes con el objetivo de contribuir a la prevención de riesgos o infecciones derivadas de la exposición a agentes potencialmente infecciosos.',
    },
    {
      termino: 'Indicadores',
      significado:
        'es una característica específica, observable y medible que puede ser usada para mostrar los cambios y progresos que Está haciendo un programa hacia el logro de un resultado específico.',
    },
    {
      termino: 'Factores de riesgo',
      significado:
        'son condiciones, conductas, estilos de vida o situaciones que nos exponen a mayor riesgo de presentar una enfermedad, en este caso hablaremos de las enfermedades cardiovasculares.',
    },
    {
      termino: 'Riesgo sanitario',
      significado:
        'medida de los posibles perjuicios para la salud de una población concreta derivados de la ocurrencia de una situación peligrosa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Casa Lima corp. Perú. (2022). EPP: Equipos de Protección Personal.',
      link:
        'https://grupocasalima.com/blog/que-son-los-equipos-de-proteccion-personal-epp-importancia-y-ejemplos/#%C2%BFQue_es_EPP',
    },
    {
      referencia:
        'Función pública. (2021). Resolución 777 de 2021 Ministerio de Salud y Protección Social.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=163987',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2022). Lineamientos nacionales parala vigilancia 2022.',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/lineamientos-nacionales-2022.pdf',
    },
    {
      referencia:
        'Ministerio de salud y protección social. (2016). Gestión integral de riesgo en salud.',
      link:
        'https://www.minsalud.gov.co/proteccionsocial/Paginas/gestion-integral-de-riesgo-en-salud.aspx',
    },
    {
      referencia:
        'Universidad de Guadalajara, (s.f.). (2022). Clasificación general de las fuentes de información.',
      link:
        'http://biblioteca.udgvirtual.udg.mx/portal/clasificacion-general-de-las-fuentes-de-informacion',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Víctor Julián Ardila ',
          cargo: 'Experto temático ',
          centro: 'Regional Tolima - Centro Agropecuario La Granja.',
        },
        {
          nombre: 'Gloria Alexandra Orejarena Barrios',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial.',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable del equipo de desarrollo curricular ',
          centro:
            'Regional Santander. Centro Industrial de Diseño y la manufactura.',
        },
        {
          nombre: 'Sandra Patricia Hoyos Seúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jaslyth Juliana Eraso Casanova',
          cargo: 'Experta Temática ',
          centro:
            'Regional Putumayo - Centro Agroforestal y Acuícola Arapaima.',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Briceño Vera',
          cargo: 'Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Produccióon audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
