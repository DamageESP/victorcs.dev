<template>
  <section id="content" :class="{ dark: darkMode }">
    <section class="main-header">
      <div class="header-bg"></div>
      <img
        class="avatar"
        src="../assets/logos/me3.jpg"
        alt="Víctor Campos Salado"
      />
      <div class="brief-intro">
        <h1>Víctor Campos Salado</h1>
        <h2 class="red">Senior Web Developer</h2>
      </div>
      <div></div>
      <action-buttons />
    </section>
    <!-- <section class="main-content">
      <transition appear name="slidedown">
        <div class="lower-section">
          <span class="muted">What brought you here?<br /></span>
          <boton pulse accent="blue" @click="$router.push('/about')">
            Know more about me
          </boton>
          <boton pulse accent="blue" @click="$router.push('/projects')">
            See my projects
          </boton>
          <boton pulse accent="red" @click="toggleContactForm">
            Get in touch
          </boton>
        </div>
      </transition>
    </section> -->
  </section>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { toRefs } from "vue";
import ActionButtons from "./ActionButtons.vue";

const { darkMode } = toRefs(useAppStore());
</script>

<style lang="scss" scoped>
@import "@/assets/variables";
.slidedown-enter-active,
.slidedown-leave-active {
  transition: all 0.5s ease;
}
.slidedown-enter-from,
.slidedown-leave-to {
  transform: scale(0) translateY(-200px);
  opacity: 0;
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;

  &.dark {
    .avatar {
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);
    }
  }
  .main-header {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 50px 25px;

    @include breakpoint-down(sm) {
      grid-template-columns: 1fr;
      gap: 15px;
      justify-items: center;
      text-align: center;
    }

    .avatar {
      border-radius: 50%;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
      width: 200px;
      height: 200px;

      @include breakpoint-down(sm) {
        width: 75px;
        height: 75px;
      }
    }
    .header-bg {
      position: fixed;
      z-index: -1;
      width: 100vw;
      left: 0;
      top: 170px;
      height: 500px;
      background-image: url("../assets/headerBG.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    .brief-intro {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1 {
        font-weight: 800;
        font-size: 36px;

        @include breakpoint-down(sm) {
          font-size: 24px;
        }
      }
      h2 {
        font-weight: 600;
        font-size: 20px;
      }
    }
  }

  .intro-header-action-buttons {
    align-self: flex-end;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 50px;
  }
}
</style>
