import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'

Vue.use(Vuex)
Vue.use(VueCookies)

export default new Vuex.Store({
  state: {
    darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
    showTopNav: false,
    cookies: !!VueCookies.get('cookie-consent'),
    contactForm: false
  },
  mutations: {
    toggleDarkMode (state) {
      state.darkMode = !state.darkMode
    },
    toggleTopNav (state) {
      state.showTopNav = !state.showTopNav
    },
    setConsent (state, consent) {
      state.cookies = consent
    },
    toggleContactForm (state) {
      state.contactForm = !state.contactForm
    }
  },
  actions: {

  }
})
