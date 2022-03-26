<template>
  <section class="action-buttons">
    <boton class="action-button" @click="toggleContactForm"
      ><span class="material-icons-outlined download-icon">email</span
      >Contact</boton
    >
    <boton
      type="link"
      href="//victorcs.dev/cv.pdf"
      accent="blue"
      class="action-button"
    >
      <span class="material-icons-outlined download-icon">file_download</span
      >Download CV</boton
    >
  </section>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import Boton from "./Boton.vue";

const { toggleContactForm } = useAppStore();
</script>

<style scoped lang="scss">
.action-buttons {
  display: flex;

  .action-button {
    &:not(:last-child) {
      margin-right: 20px;
    }
    .download-icon {
      font-size: 22px;
      margin-right: 10px;
    }
  }
}
</style>
