<template>
  <transition name="fade">
    <div class="top-bar-wrapper" :class="{dark: darkMode}">
      <div class="container nopadding">
        <nav class="top-bar">
          <div class="links">
            <router-link to="/" class="link">Inicio</router-link>
          </div>
          <button class="material-icons pointer" type="button" @click="toggleDarkMode">wb_sunny</button>
        </nav>
      </div>
    </div>
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

.top-bar-wrapper {
  &.dark {
    background-color: $darkBG-hover;
  }
  background-color: $blanquito-main;
  .top-bar {
    padding: 15px;
    display: flex;
    align-items: center;
    .links {
      flex-grow: 1;
      .link {
        text-decoration: none;
      }
    }
  }
  &.dark {
    button, a {
      color: $blanquito-main;
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
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
}
</style>
