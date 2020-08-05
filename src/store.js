import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode:
      window.matchMedia('(prefers-color-scheme: dark)').matches ||
      localStorage.getItem('dark-mode') === 'true',
    showTopNav: false,
    cookies: localStorage.getItem('cookie-consent') === 'true',
    contactForm: false,
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode
      if (state.cookies)
        localStorage.setItem('dark-mode', state.darkMode)
    },
    toggleTopNav(state) {
      state.showTopNav = !state.showTopNav
    },
    setConsent(state, consent) {
      state.cookies = consent
      if (!state.cookies) localStorage.clear()
      else localStorage.setItem('cookie-consent', state.cookies)
    },
    toggleContactForm(state) {
      state.contactForm = !state.contactForm
    },
  },
  actions: {},
})
