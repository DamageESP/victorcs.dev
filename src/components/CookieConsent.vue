<template>
  <transition name="toggle">
    <div id="wrapper" v-if="consent == 'no'">
      <div id="content">
        <p>El sitio web webmonster.io utiliza cookies propias y de terceros para recopilar información que ayuda a optimizar su visita a sus páginas web.</p>
        <p>
          No se utilizarán las cookies para recoger información de carácter personal.
          Usted puede permitir su uso o rechazarlo, también puede cambiar su configuración siempre que lo desee.
        </p>
        <p>Encontrará más información en nuestra <router-link to="/cookies">Política de Cookies.</router-link></p>
        <div id="actions">
          <router-link class="btn yelo" to="/cookies#de1337">Modificar configuración</router-link>
          <button class="pruple" @click="accept()">Aceptar cookies</button>
          <!-- <button @click="accept('no')">Aceptar cookies</button> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CookieConsent',
  data: () => {
    return {
      consent: 'yes'
    }
  },
  beforeMount () {
    this.consent = this.$cookie.get('consent') === 'yes' ? 'yes' : 'no'
  },
  methods: {
    accept (a) {
      this.$cookie.set('consent', 'yes', { expires: '1Y' })
      if (a) this.$cookie.set('consent', 'no', { expires: '1Y' })
      this.consent = this.$cookie.get('consent')
    }
  }
}
</script>

<style scoped>
.toggle-enter-active, .toggle-leave-active {
  transition: opacity .5s;
}
.toggle-enter, .toggle-leave-to {
  opacity: 0;
}
div#wrapper {
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 100;
}
div#content {
  padding: 35px;
}
p {
  margin: 10px 0;
}
#actions {
  display: flex;
  justify-content: center;
}
#actions button {
  margin: 0 15px;
}

@media screen and (max-width: 600px) {
  div#content {
    padding: 15px;
    font-size: 0.6rem;
  }
  #actions button, #actions a {
    padding: 10px 15px;
    font-size: 0.6rem;
  }
}
</style>
