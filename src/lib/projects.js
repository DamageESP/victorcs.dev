import technologies from './technologies.js'

export default [
  {
    id: 1,
    name: 'DONTRY.coach',
    url: 'dontry.coach',
    dateFrom: 'Agosto 2018',
    dateTo: 'Junio 2019',
    description:
      'Aplicación elaborada en Ruby on Rails. También hace uso de VueJS en el panel de gestión.',
    image: 'dontry.png',
    technologies: [
      technologies.find((t) => t.id === 'ruby'),
      technologies.find((t) => t.id === 'rails'),
      technologies.find((t) => t.id === 'js'),
      technologies.find((t) => t.id === 'sass'),
      technologies.find((t) => t.id === 'vscode'),
      technologies.find((t) => t.id === 'terminal'),
      technologies.find((t) => t.id === 'jquery'),
      technologies.find((t) => t.id === 'vue'),
    ],
  },
  {
    id: 2,
    name: 'WebMonster',
    url: 'webmonster.io',
    dateFrom: 'Agosto 2018',
    dateTo: 'Junio 2019',
    description:
      'Web elaborada al completo con VueJS y optimizada para SEO. La web ha sido pre-renderizada para obtener menores tiempos de carga y pintado.',
    image: 'webmonster.png',
    technologies: [
      technologies.find((t) => t.id === 'vue'),
      technologies.find((t) => t.id === 'htmlcss'),
      technologies.find((t) => t.id === 'js'),
      technologies.find((t) => t.id === 'sass'),
      technologies.find((t) => t.id === 'aws'),
      technologies.find((t) => t.id === 'vscode'),
      technologies.find((t) => t.id === 'eslint'),
      technologies.find((t) => t.id === 'terminal'),
    ],
  },
  {
    id: 3,
    name: 'VictorCS - Web CV',
    url: 'victorcs.dev',
    dateFrom: 'Agosto 2018',
    dateTo: 'Junio 2019',
    description:
      'Web personal elaborada con VueJS con el objetivo de dar un poco más de información sobre mis habilidades.',
    image: 'victorcs.png',
    technologies: [
      technologies.find((t) => t.id === 'vue'),
      technologies.find((t) => t.id === 'htmlcss'),
      technologies.find((t) => t.id === 'js'),
      technologies.find((t) => t.id === 'sass'),
    ],
  },
  {
    id: 4,
    name: 'Palacioweb HeadQuarters',
    url: '',
    dateFrom: 'Agosto 2018',
    dateTo: 'Junio 2019',
    description:
      'Aplicación elaborada en VueJS y ExpressJS, haciendo uso de Docker para su posterior despliegue en AWS, en una instancia t2.micro, con las imágenes de Docker subidas a ECR.',
    image: 'unknown.jpg',
    technologies: [
      technologies.find((t) => t.id === 'node'),
      technologies.find((t) => t.id === 'express'),
      technologies.find((t) => t.id === 'aws'),
      technologies.find((t) => t.id === 'docker'),
      technologies.find((t) => t.id === 'terminal'),
      technologies.find((t) => t.id === 'vue'),
      technologies.find((t) => t.id === 'sass'),
    ],
  },
]
