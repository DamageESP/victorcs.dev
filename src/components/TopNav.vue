<template>
  <transition name="fade">
    <nav id="top-nav-bar" :class="{dark: darkMode}">
      <button class="material-icons pointer" type="button" @click="toggleDarkMode">wb_sunny</button>
    </nav>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'TopNav',
  computed: {
    ...mapState(['darkMode'])
  },
  methods: {
    ...mapMutations(['toggleDarkMode'])
  }
}
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

#top-nav-bar {
  &.dark {
    button {
      color: $blanquito;
    }
  }
  button {
    outline: none;
    border: none;
    background: transparent;
  }
  transition: all 0.3s ease;
  color: $colortexto;
  position: fixed;
  left: 0;
  top: 0;
  padding: 15px;
  display: flex;
  z-index: 10;
}
</style>
