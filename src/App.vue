<template>
  <div id="app" :class="{dark: darkMode}">
    <top-nav/>
    <div class="container">
      <div style="width: 100%; height: 64px;"></div>
      <transition name="component-fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Modal v-show="contactForm">
      <div class="mail-modal-content">
        <h2 v-if="decoded">Puedes enviarme un correo a</h2>
        <h2 v-else>Descodifica mi dirección de correo</h2>
        <a class="tag" @click="decodeEmailTag" :href="'mailto:' + emailAddress">{{ emailAddress }}</a>
        <Boton v-if="!decoded" @click.native="decodeEmail" accent="blue" size="md"><i class="material-icons">lock_open</i></Boton>
        <a v-else v-ga="$ga.commands.trackContact.bind(this, 'Send Mail - Envelope Button')" :href="'mailto:' + emailAddress">
          <Boton accent="red" size="md">
            <i class="material-icons">mail</i>
          </Boton>
        </a>
      </div>
    </Modal>
    <!-- <CookieConsent/> -->
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'
import Modal from '@/components/Modal'
import Boton from '@/components/Boton'
import CookieConsent from '@/components/CookieConsent'

import { mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    return  {
      emailAddress: 'aG9sYUB2aWN0b3Jjcy5kZXY=',
      decoded: false
    }
  },
  components: { TopNav, CookieConsent, Modal, Boton },
  methods: {
    decodeEmail (e) {
      if (!this.decoded) {
        e.preventDefault()
        this.$ga.event('Contact', 'Decrypt - Unlock Button')
        this.emailAddress = atob(this.emailAddress) // Prevent crawlers from getting my email
        this.decoded = true
      }
    },
    decodeEmailTag (e) {
      if (!this.decoded) {
        e.preventDefault()
        this.$ga.event('Contact', 'Decrypt - String Tag')
        this.emailAddress = atob(this.emailAddress) // Prevent crawlers from getting my email
        this.decoded = true
      } else {
        this.$ga.event('Contact', 'Send Mail - String Tag')
      }
    }
  },
  computed: {
    ...mapState(['darkMode', 'contactForm'])
  }
}
</script>


<style lang="scss">
.component-fade-enter-active, .component-fade-leave-active {
  transition: all 0.5s ease;
}
.component-fade-enter, .component-fade-leave-to {
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
  .mail-modal-content {
    h2 {
      margin-bottom: 10px;
    }
    .tag {
      margin: 40px 0;
    }
    a {
      color: white;
    }
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.muted {
  color: gray;
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
