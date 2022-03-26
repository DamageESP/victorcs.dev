<script setup lang="ts">
import { RouterView } from "vue-router";
import Modal from "./components/Modal.vue";
import Boton from "./components/Boton.vue";
import { useAppStore } from "./stores/app";
import { ref, toRefs } from "vue";
import { event } from "vue-gtag";
import TopNav from "@/components/TopNav.vue";
import VFooter from "./components/VFooter.vue";

const { darkMode, contactForm } = toRefs(useAppStore());
const decoded = ref(false);
const emailAddress = ref("aG9sYUB2aWN0b3Jjcy5kZXY=");
const decodeEmail = (e: Event) => {
  if (!decoded.value) {
    e.preventDefault();
    event("Contact", { event_label: "Decrypt - Unlock Button" });
    emailAddress.value = atob(emailAddress.value); // Prevent crawlers from getting my email
    decoded.value = true;
  }
};
const decodeEmailTag = (e: Event) => {
  if (!decoded.value) {
    e.preventDefault();
    event("Contact", { event_label: "Decrypt - String Tag" });
    emailAddress.value = atob(emailAddress.value); // Prevent crawlers from getting my email
    decoded.value = true;
  } else {
    event("Contact", { event_label: "Send Mail - String Tag" });
  }
};
</script>

<template>
  <div id="victorcs" :class="{ dark: darkMode }">
    <div class="container">
      <top-nav />
      <div style="width: 100%; height: 64px" />
      <router-view v-slot="{ Component }">
        <transition name="component-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <VFooter />
    </div>
    <Modal v-show="contactForm">
      <div class="mail-modal-content">
        <h2 v-if="decoded">You can shoot me a mail to</h2>
        <h2 v-else>Decode my email address</h2>
        <a
          class="tag"
          :href="'mailto:' + emailAddress"
          @click="decodeEmailTag"
          >{{ emailAddress }}</a
        >
        <Boton v-if="!decoded" accent="blue" @click="decodeEmail">
          <i class="material-icons-outlined">lock_open</i
          ><span class="decode-label">Decode</span>
        </Boton>
        <a
          v-else
          @click="
            event('trackContact', {
              event_label: 'Send Mail - Envelope Button',
            })
          "
          :href="'mailto:' + emailAddress"
        >
          <Boton accent="red" size="md">
            <i class="material-icons-outlined">mail</i>
          </Boton>
        </a>
      </div>
    </Modal>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";
.component-fade-enter-active,
.component-fade-leave-active {
  transition: all 0.3s ease;
}
.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}

html,
body {
  margin: 0;
  padding: 0;
}
#victorcs {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  transition: all 0.3s ease;
  font-family: $fuentedefault;
  background: $blanquito-main;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $colortexto;
  min-height: 100vh;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-image: radial-gradient(
        ellipse closest-side,
        rgba(255, 255, 255, 0.75),
        $blanquito-main
      ),
      url("./assets/logo.png");
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.75;
  }
  &.dark {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.75;
      background-image: radial-gradient(
          ellipse closest-side,
          rgba(0, 0, 0, 0.75),
          $darkBG-main
        ),
        url("./assets/logo.png");
    }
    background-color: $darkBG-main;
    color: $blanquito-main;
  }
  & > .container {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
  }
  .container {
    position: relative;
    z-index: 1;
    padding: 15px;
    max-width: 1200px;
  }
  .mail-modal-content {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 450px;

    @include breakpoint-down("md") {
      width: 70vw;
    }

    h2 {
      margin-bottom: 10px;
    }
    .tag {
      margin: 40px 0;
    }
    a {
      color: white;
    }
    .decode-label {
      margin-left: 10px;
    }
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
h1,
h2 {
  font-weight: normal;
  margin: 0;
  padding: 0;
}
.pointer {
  cursor: pointer;
}

@include breakpoint-down(md) {
  #victorcs {
    .container {
      max-width: 900px;
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
  #victorcs {
    .container {
      max-width: 600px;
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
  #victorcs {
    .container {
      padding: 10px;
      max-width: 400px;
    }
  }
}
</style>
