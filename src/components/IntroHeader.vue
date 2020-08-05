<template>
  <div id="content">
    <img
      class="avatar"
      :src="computedImageURL('me.jpg')"
      alt="Víctor Campos Salado"
    >
    <div class="main-content">
      <h1>Hola, soy <b class="lightblue">Víctor Campos</b></h1>
      <h2>y soy desarrollador web Full-Stack <span class="tag">por vocación</span>.</h2>
      <transition
        appear
        name="slidedown"
      >
        <div
          ref="lowerSection"
          class="lower-section"
        >
          <span class="quiet">¿Qué necesitas?<br></span>
          <router-link to="/about">
            <boton
              pulse
              accent="blue"
            >
              Saber más sobre mí
            </boton>
          </router-link>
          <boton
            v-ga="$ga.commands.trackContact.bind(this, 'Start - CTA Index')"
            pulse
            accent="red"
            @click.native="toggleContactForm"
          >
            Hablar conmigo
          </boton>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Boton from '@/components/Boton'

import { mapMutations } from 'vuex'

export default {
  name: 'IntroHeader',
  components: { Boton },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    computedImageURL (logoName) {
      return require(`../assets/logos/${logoName}`)
    },
    ...mapMutations(['toggleContactForm'])
  }
}
</script>

<style lang="scss" scoped>
.slidedown-enter-active, .slidedown-leave-active {
  transition: all 0.5s ease;
}
.slidedown-enter, .slidedown-leave-to {
  transform: scale(0) translateY(-200px);
  opacity: 0;
}

#content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .avatar {
    border-radius: 50%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .1);
    /* animation-name: aura;
    animation-duration: 4s;
    animation-iteration-count: infinite; */
    width: 250px;
    height: 250px;
    margin: 50px 0;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
      margin-bottom: 10px;
    }
    .lower-section {
      margin-top: 80px;
    }
  }
}

@include breakpoint-down(sm) {
  #content {
    .avatar {
      width: 150px;
      height: 150px;
      margin: 50px 0;
    }
  }
}
</style>
