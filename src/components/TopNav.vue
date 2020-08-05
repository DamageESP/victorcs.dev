<template>
  <transition name="fade">
    <nav class="top-bar-wrapper" :class="{dark: darkMode, scrolled}">
      <div class="container nopadding">
        <div class="top-bar">
          <button type="button" class="burger" @click="showMobileMenu = !showMobileMenu">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
          </button>
          <div class="links" :class="{showMobileMenu}">
            <router-link to="/" class="link" @click.native="showMobileMenu = !showMobileMenu">
              <img src="../assets/logo-50.webp" alt="VíctorCS Logo">
              <span>Inicio</span>
            </router-link>
            <router-link to="/about" class="link" @click.native="showMobileMenu = !showMobileMenu">
              <span>Sobre mí</span>
            </router-link>
            <router-link to="/projects" class="link" @click.native="showMobileMenu = !showMobileMenu">
              <span>Proyectos</span>
            </router-link>
            <!-- <router-link to="/snippets" class="link">
              <span>Snippets</span>
            </router-link> -->
          </div>
          <div class="right-links">
            <button class="material-icons pointer link" type="button" @click="toggleContactForm" v-ga="$ga.commands.trackContact.bind(this, 'Start - TopNav')">mail_outline</button>
            <a class="link img" href="https://www.linkedin.com/in/victorcampossalado/" target="_blank" rel="noopener">
              <img :src="computedImageURL('social_linkedin.png')" alt="Mi perfil en LinkedIn">
            </a>
            <a class="link img especialito" href="https://github.com/DamageESP" target="_blank" rel="noopener">
              <img :src="computedImageURL('social_github.png')" alt="Mi perfil en LinkedIn">
            </a>
            <!-- <a class="link img" href="https://twitter.com/Victor26B" target="_blank" rel="noopener">
              <img :src="computedImageURL('social_twitter.png')" alt="Mi perfil en LinkedIn">
            </a> -->
            <button class="material-icons pointer dark-mode-button" type="button" @click="toggleDarkMode" v-ga="$ga.commands.trackDarkMode.bind(this, darkMode ? 'Disable' : 'Enable')">wb_sunny</button>
          </div>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'TopNav',
  data () {
    return {
      scrolled: false,
      showMobileMenu: false,
    }
  },
  computed: {
    ...mapState(['darkMode'])
  },
  methods: {
    ...mapMutations(['toggleDarkMode', 'toggleContactForm']),
    computedImageURL (logoName) {
      return require(`../assets/logos/${logoName}`)
    },
    checkScrolled () {
      if (window.scrollY > 10) this.scrolled = true
      else this.scrolled = false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.checkScrolled)
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
  }
  &.scrolled {
    background: rgba($blanquito-main, .8);
    &.dark {
      background: rgba($darkBG-main, .8);
    }
  }
  .top-bar {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .burger {
      width: 30px;
      color: rgba($blanquito-main, .8);
      @include breakpoint-up('md') {
        display: none;
      }
    }
    .links {
      flex-grow: 1;
      display: flex;
      justify-content: flex-start;
      
      @include breakpoint-down('md') {
        flex-direction: column;
        position: absolute;
        top: 50px;
        background-color: $darkBG-hover;
        padding: 10px;
        &:not(.showMobileMenu) {
          display: none;
        }
      }
      .link {
        padding: 10px 15px;
        border-radius: 3px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;

        @include breakpoint-down('md') {
          padding: 5px;
        }

        @include breakpoint-up('md') {
          &:not(:last-child) {
            margin-right: 15px;
          }
          padding: 5px;
        }

        &.router-link-exact-active {
          background: rgba(255, 255, 255, .2);
        }
        &:hover {
          background: rgba(255, 255, 255, .3);
        }
        img {
          width: 20px;
          height: auto;
          margin-right: 10px;
        }
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
