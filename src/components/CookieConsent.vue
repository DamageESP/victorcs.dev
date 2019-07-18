<template>
  <transition name="toggle">
    <div>
      <div class="cookie-wrapper" :class="{dark: darkMode, 'cookies-off' : changedConsent}" @click="toggleConsent">
        <div class="cookie" :class="{'no-cookies': !cookies}">
          <img src="../assets/galleta.png" alt="Cookies">
        </div>
        <transition name="toggle">
          <span v-if="changedConsent" class="cookie-changed">Cookies <span :class="cookies ? 'blue' : 'red'">{{ cookies ? 'ON' : 'OFF' }}</span></span>
        </transition>
      </div>
      <transition name="toggle">
        <div class="cookie-disclaimer-wrapper" v-if="!dismissed">
          <Card class="cookie-disclaimer" @click.native="dismissed = !dismissed">
            <div class="cookie-disclaimer-text">
              <span style="margin-bottom: 5px;">Uso cookies porque me gustan las estadísticas. Son para uso personal, ¡no te preocupes!</span>
              <span>Si te molestan demasiado, puedes desactivarlas en cualquier momento desde la galletita de la esquina 👉</span>
            </div>
            <div class="material-icons" @click.native="dismissed = !dismissed">close</div>
          </Card>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import Card from '@/components/Card'
import { setTimeout } from 'timers';

export default {
  name: 'CookieConsent',
  components: { Card },
  data () {
    return {
      showMenu: false,
      dismissed: false,
      changedConsent: false
    }
  },
  computed: {
    ...mapState(['darkMode', 'cookies'])
  },
  methods: {
    ...mapMutations(['setConsent']),
    toggleConsent () {
      this.changedConsent = true
      if (this.cookies === false) {
        setTimeout(() => {
          this.changedConsent = false
        }, 1000)
      }
      this.setConsent(!this.cookies)
    }
  }
}
</script>

<style lang="scss" scoped>
.toggle-enter-active, .toggle-leave-active {
  transition: opacity .5s;
}
.toggle-enter, .toggle-leave-to {
  opacity: 0;
}

.cookie-wrapper {
  &:hover {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, .1);
  }
  &.dark {
    &:hover {
      background: $darkBG-hover;
    }
    background: $darkBG-secondary;
  }
  &.cookies-off {
    border-radius: 5px;
  }
  .cookie-changed {
    margin-top: 5px;
  }
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: $blanquito-secondary;
  margin: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .07);
  padding: 10px;
  .cookie {
    &.no-cookies {
      filter: grayscale(100%);
    }
    img {
      width: 100%;
      height: auto;
    }
    width: 50px;
    height: 50px;
  }
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
}

.cookie-disclaimer-wrapper {
  .cookie-disclaimer {
    &:hover {
      background: $gradiente;
    }
    background: $gradiente;
    color: $blanquito-main;
    cursor: pointer;
    pointer-events: all; 
    .cookie-disclaimer-text {
      font-size: 0.8rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  pointer-events: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
}

</style>
