<template>
  <div id="app" :class="{dark: darkMode}">
    <top-nav/>
    <div class="container">
      <div style="width: 100%; height: 64px;"></div>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <CookieConsent/>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'
import CookieConsent from '@/components/CookieConsent'

import { mapState } from 'vuex'

export default {
  name: 'App',
  components: { TopNav, CookieConsent },
  computed: {
    ...mapState(['darkMode'])
  }
}
</script>


<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

html, body {
  margin: 0;
  padding: 0;
}
.dark {
  color: $blanquito-main;
  background-color: $darkBG-main;
}
#app {
  &.dark {
    color: $blanquito-main;
    background-color: $darkBG-main;
  }
  transition: all 0.3s ease;
  font-family: $fuentedefault;
  background: $blanco;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $colortexto;
  background-image: url('./assets/headerBG2.png');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: 80% 80%;
  background-size: contain;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  .container {
    &.nopadding {
      padding: 0;
    }
    padding: 15px;
    max-width: 1200px;
    width: 1200px;
  }
}
.blue {
  color: $blue;
}
.lightblue {
  color: $lightblue;
}
.red {
  color: $red;
}
.tag {
  background: $gradiente;
  color: $blanco;
  padding: 3px 6px;
  border-radius: 3px;
  font-weight: normal;
}
h1, h2 {
  font-weight: normal;
  margin: 0;
  padding: 0;
}
.pointer {
  cursor: pointer;
}

@include breakpoint-down(md) {
  #app {
    .container {
      max-width: 900px;
      width: 900px;
    }
  }
  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.6rem;
  }
}

@include breakpoint-down(sm) {
  #app {
    .container {
      max-width: 600px;
      width: 600px;
    }
  }
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 16px;
  }
}

@include breakpoint-down(xs) {
  #app {
    .container {
      padding: 10px;
      max-width: 400px;
    }
  }
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 14px;
  }
}
</style>
