<template>
  <div id="content-wrapper">
    <div id="content">
      <img
        class="avatar"
        src="/me.jpg"
        alt="Víctor Campos Salado"
      >
      <div class="main-content">
        <h1>Hola, soy <b class="lightblue">Víctor Campos</b></h1>
        <h2>y soy desarrollador web Full-Stack <span class="tag">por vocación</span>.</h2>
        <div
          ref="lowerSection"
          class="lower-section"
        >
          <span class="quiet">¿Qué necesitas?<br></span>
          <router-link to="/about">
            <boton accent="blue">
              Saber más sobre mí
            </boton>
          </router-link>
          <boton accent="red">
            Hablar conmigo
          </boton>
        </div>
      </div>
      <div id="dynContent">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Boton from '@/components/Boton'

export default {
  name: 'Content',
  components: { Boton },
  mounted() {
    this.toggleButtons(true)
  },
  methods: {
    toggleButtons (state) {
      // true means show it, false means hide it
      const container = this.$refs.lowerSection
      let targetState = container.classList.contains('active')
      if (state) targetState = state

      if (targetState === true) {
        container.classList.add('active')
        container.style.height = 'auto'
        const height = `${container.clientHeight}px`
        container.style.height = '0px'
        setTimeout(() => {
          container.style.height = height
        }, 0)
      } else {
        container.style.height = '0px'
        container.addEventListener('transitionend', () => {
          container.classList.remove('active')
        }, {
          once: true
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #content {
    padding: 45px 15px;
    max-width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .avatar {
      border-radius: 50%;
      /* animation-name: aura;
      animation-duration: 4s;
      animation-iteration-count: infinite; */
      width: 250px;
      height: 250px;
      margin-bottom: 50px;
    }
    .main-content {
      display: flex;
      flex-direction: column;
      text-align: center;
      h1 {
        margin-bottom: 10px;
      }
      .lower-section {
        &:not(.active) {
          display: none;
        }
        overflow: hidden;
        transition: height 0.5s ease-in-out;
        margin-top: 80px;
      }
    }

  }
  min-height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 3;
}

@include breakpoint-down(md) {
  #content-wrapper {
    .avatar {
      width: 150px;
      height: 150px;
    }
  }
}

@include breakpoint-down(sm) {
  #content-wrapper {
    flex-direction: column;
    .avatar {
      width: 125px;
      height:  125px;
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
}
</style>
