function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
const techColors = new Map()

export function getTechColor(techId) {
  return (
    techColors.get(techId) ||
    (() => {
      const c = getRandomColor()
      techColors.set(techId, c)
      return c
    })()
  )
}

export default [
  {
    id: 'js',
    icon: 'js.png',
    name: 'JavaScript (ES6+)',
    level: 95,
    favorite: true,
  },
  {
    id: 'htmlcss',
    icon: 'htmlcss.png',
    name: 'HTML5 & CSS3',
    level: 90,
    favorite: true,
  },
  {
    id: 'php',
    icon: 'php.png',
    name: 'PHP',
    level: 75,
  },
  {
    id: 'ruby',
    icon: 'ruby.png',
    name: 'Ruby',
    level: 50,
  },
  {
    id: 'python',
    icon: 'python.jpg',
    name: 'Python',
    level: 60,
  },
  {
    id: 'vue',
    icon: 'vue.png',
    name: 'Vue (Router, VueX)',
    level: 95,
    favorite: true,
  },
  {
    id: 'sass',
    icon: 'sass.jpg',
    name: 'SASS/SCSS',
    level: 95,
    favorite: true,
  },
  {
    id: 'jquery',
    icon: 'jquery.png',
    name: 'jQuery',
    level: 100,
  },
  {
    id: 'bootstrap',
    icon: 'bootstrap.jpg',
    name: 'Bootstrap',
    level: 90,
  },
  {
    id: 'react',
    icon: 'react.png',
    name: 'React',
    level: 60,
    favorite: true,
  },
  {
    id: 'laravel',
    icon: 'laravel.png',
    name: 'Laravel',
    level: 50,
  },
  {
    id: 'node',
    icon: 'node.jpg',
    name: 'NodeJS',
    level: 90,
    favorite: true,
  },
  {
    id: 'express',
    icon: 'express.png',
    name: 'ExpressJS',
    level: 90,
    favorite: true,
  },
  {
    id: 'django',
    icon: 'django.png',
    name: 'Django',
    level: 70,
  },
  {
    id: 'rails',
    icon: 'rails.png',
    name: 'Ruby on Rails',
    level: 60,
  },
  {
    id: 'mysql',
    icon: 'mysql.jpg',
    name: 'MySQL',
    level: 90,
    favorite: true,
  },
  {
    id: 'webpack',
    icon: 'webpack.png',
    name: 'Webpack',
    favorite: true,
  },
  {
    id: 'vscode',
    icon: 'vscode.png',
    name: 'Visual Studio Code',
    favorite: true,
  },
  {
    id: 'aws',
    icon: 'aws.png',
    name: 'AWS',
  },
  {
    id: 'babel',
    icon: 'babel.jpg',
    name: 'Babel',
    favorite: true,
  },
  {
    id: 'apache',
    icon: 'apache.png',
    name: 'Apache',
  },
  {
    id: 'socketio',
    icon: 'socketio.png',
    name: 'Socket.IO',
    favorite: true,
  },
  {
    id: 'git',
    icon: 'git.png',
    name: 'Git',
  },
  {
    id: 'nginx',
    icon: 'nginx.png',
    name: 'NGINX',
  },
  {
    id: 'electron',
    icon: 'electron.png',
    name: 'Electron',
    favorite: true,
  },
  {
    id: 'docker',
    icon: 'docker.png',
    name: 'Docker',
    favorite: true,
  },
  {
    id: 'eslint',
    icon: 'eslint.png',
    name: 'ESLint',
    favorite: true,
  },
  {
    id: 'terminal',
    icon: 'terminal.png',
    name: 'Terminal, cmd',
    favorite: true,
  },
  {
    id: 'wordpress',
    icon: 'wordpress.png',
    name: 'WordPress',
  },
  {
    id: 'whmcs',
    icon: 'whmcs.png',
    name: 'WHMCS',
  },
  {
    id: 'tensorflow',
    icon: 'tensorflow.png',
    name: 'TensorFlow',
  },
  {
    id: 'angular',
    icon: 'angular.png',
    name: 'Angular',
    level: 75,
  },
  {
    id: 'graphql',
    icon: 'graphql.png',
    name: 'GraphQL',
  },
  {
    id: 'reactnative',
    icon: 'reactnative.png',
    name: 'React Native',
  },
  {
    id: 'cordova',
    icon: 'cordova.png',
    name: 'Cordova',
  },
]
