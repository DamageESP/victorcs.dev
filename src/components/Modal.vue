<template>
  <transition appear name="fade-scale">
    <div class="modal-wrapper" @click="closeContactForm">
      <Card class="modal">
        <slot />
      </Card>
    </div>
  </transition>
</template>

<script setup lang="ts">
import Card from "@/components/Card.vue";
import { useAppStore } from "@/stores/app";
import { toRefs } from "vue";

const { contactForm } = toRefs(useAppStore());

const closeContactForm = (e: MouseEvent) => {
  if ((e.target as HTMLElement).classList.contains("modal-wrapper")) {
    contactForm.value = !contactForm.value;
  }
  e.stopPropagation();
};
</script>

<style lang="scss" scoped>
.fade-scale-enter-from {
  opacity: 0;
}

.fade-scale-leave-active {
  opacity: 0;
}

.fade-scale-enter .fade-scale-container,
.fade-scale-leave-active .fade-scale-container {
  transform: scale(1.1);
}

.modal-wrapper {
  transition: all 0.2s ease;
  background: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;

  .modal {
    cursor: auto;
  }
}
</style>
