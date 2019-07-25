import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-59985241-3',
  checkDuplicatedScript: true,
  router,
  commands: {
    trackContact (stage = 'unknown') {
      this.$ga.event('Contact', stage)
    },
    trackDarkMode (enable = 'Enable') {
      this.$ga.event('UX', 'Toggle Dark Mode', enable)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
}).$mount('#app')
