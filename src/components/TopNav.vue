<template>
  <transition name="fade">
    <div class="top-bar-wrapper" :class="{dark: darkMode}">
      <div class="container nopadding">
        <nav class="top-bar">
          <div class="links">
            <router-link to="/" class="link">Inicio</router-link>
          </div>
          <div class="right-links">
            <a class="link img" href="https://linkedin.com" target="_blank">
              <img src="/social_linkedin.png" alt="Mi perfil en LinkedIn">
            </a>
            <a class="link img especialito" href="https://linkedin.com" target="_blank">
              <img src="/social_github.png" alt="Mi perfil en LinkedIn">
            </a>
            <a class="link img" href="https://linkedin.com" target="_blank">
              <img src="/social_twitter.png" alt="Mi perfil en LinkedIn">
            </a>
            <button class="material-icons pointer dark-mode-button" type="button" @click="toggleDarkMode">wb_sunny</button>
          </div>
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
    .top-bar {
      .right-links {
        .dark-mode-button {
          background: $darkBG-hover;
        }
      }
    }
    .especialito {
      filter: invert(1);
    }
    background-color: $darkBG-secondary;
  }
  background-color: $blanquito-main;
  .top-bar {
    padding: 15px;
    display: flex;
    align-items: center;
    .links {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .link {
        text-decoration: none;
      }
    }
    .right-links {
      .dark-mode-button {
        padding: 5px;
        border-radius: 50%;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .07);
        background: $blanquito-secondary;
      }
      .link {
        margin-right: 20px;
        text-decoration: none;
        &.img {
          width: 20px;
          height: 20px;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
      display: flex;
      align-items: center;
      justify-content: flex-start;
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
