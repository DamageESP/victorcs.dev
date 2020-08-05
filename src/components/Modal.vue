<template>
  <transition
    appear
    name="fade-scale"
  >
    <div
      class="modal-wrapper"
      @click="closeContactForm"
    >
      <Card class="modal">
        <slot />
      </Card>
    </div>
  </transition>
</template>

<script>
import Card from '@/components/Card'

import { mapMutations } from 'vuex'

export default {
  name: 'Modal',
  components: { Card },
  methods: {
    closeContactForm (e) {
      if (e.target.classList.contains('modal-wrapper')) {
        this.toggleContactForm()
      }
      e.stopPropagation()
    },
    ...mapMutations(['toggleContactForm'])
  }
}
</script>

<style lang="scss" scoped>
.fade-scale-enter {
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
  background: rgba(0, 0, 0, .85);
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
