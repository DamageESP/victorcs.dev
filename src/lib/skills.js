import technologies from './technologies'

export default [
  {
    name: 'LENGUAJES',
    skills: [
      technologies.find((t) => t.id === 'js'),
      technologies.find((t) => t.id === 'htmlcss'),
      technologies.find((t) => t.id === 'php'),
      technologies.find((t) => t.id === 'ruby'),
      technologies.find((t) => t.id === 'python'),
    ],
  },
  {
    name: 'FRONT-END',
    skills: [
      technologies.find((t) => t.id === 'vue'),
      technologies.find((t) => t.id === 'sass'),
      technologies.find((t) => t.id === 'jquery'),
      technologies.find((t) => t.id === 'bootstrap'),
      technologies.find((t) => t.id === 'react'),
      technologies.find((t) => t.id === 'angular'),
    ],
  },
  {
    name: 'BACK-END',
    skills: [
      technologies.find((t) => t.id === 'laravel'),
      technologies.find((t) => t.id === 'node'),
      technologies.find((t) => t.id === 'express'),
      technologies.find((t) => t.id === 'django'),
      technologies.find((t) => t.id === 'rails'),
      technologies.find((t) => t.id === 'mysql'),
    ],
  },
  {
    name: 'HERRAMIENTAS',
    skills: [
      technologies.find((t) => t.id === 'webpack'),
      technologies.find((t) => t.id === 'vscode'),
      technologies.find((t) => t.id === 'aws'),
      technologies.find((t) => t.id === 'apache'),
      technologies.find((t) => t.id === 'socketio'),
      technologies.find((t) => t.id === 'git'),
      technologies.find((t) => t.id === 'nginx'),
      technologies.find((t) => t.id === 'electron'),
      technologies.find((t) => t.id === 'docker'),
      technologies.find((t) => t.id === 'eslint'),
      technologies.find((t) => t.id === 'terminal'),
      technologies.find((t) => t.id === 'wordpress'),
      technologies.find((t) => t.id === 'whmcs'),
    ],
  },
  {
    name: 'QUIERO APRENDER',
    skills: [
      technologies.find((t) => t.id === 'tensorflow'),
      technologies.find((t) => t.id === 'graphql'),
      technologies.find((t) => t.id === 'reactnative'),
      technologies.find((t) => t.id === 'cordova'),
    ],
  },
]
