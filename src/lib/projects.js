import technologies from './technologies.js'

export default [
  {
    id: 'dontry.coach',
    name: 'DONTRY.coach',
    url: 'dontry.coach',
    dateFrom: 'Agosto 2018',
    dateTo: 'Junio 2019',
    description:
      'Aplicación elaborada en Ruby on Rails. También hace uso extensivo de VueJS en un panel de administración.',
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
    id: 'webmonster.io',
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
    id: 'victorcs.dev',
    name: 'VictorCS',
    url: 'victorcs.dev',
    dateFrom: '2019',
    dateTo: 'Permanentemente',
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
    id: 'palacioweb.com',
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
      technologies.find((t) => t.id === 'nginx'),
    ],
  },
  {
    id: 'cgimemes.wtf',
    name: 'CGI Memes',
    url: 'cgimemes.wtf',
    dateFrom: 'Abril 2020',
    dateTo: 'Abril 2020',
    description:
      'Aplicación elaborada en VueJS y ExpressJS, haciendo uso de Docker y Docker-Compose para su posterior despliegue en un VPS en clouding.io. La realización del proyecto de principio a fin fue de aproximadamente 1 semana.',
    image: 'cgimemes.png',
    technologies: [
      technologies.find((t) => t.id === 'node'),
      technologies.find((t) => t.id === 'express'),
      technologies.find((t) => t.id === 'docker'),
      technologies.find((t) => t.id === 'terminal'),
      technologies.find((t) => t.id === 'vue'),
      technologies.find((t) => t.id === 'sass'),
      technologies.find((t) => t.id === 'nginx'),
    ],
  },
]
