import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: false,
    showTopNav: false,
    lowerSectionHeight: 0 // <- lmaoooo paso loco
  },
  mutations: {
    toggleDarkMode (state) {
      state.darkMode = !state.darkMode
    },
    toggleTopNav (state) {
      state.showTopNav = !state.showTopNav
    },
    setTopNavFixed (state, fixed) {
      state.showTopNav = fixed
    },
    setLowerSection (state, val) {
      state.lowerSectionHeight = val
    }
  },
  actions: {

  }
})
