<template>
  <transition
    appear
    name="fade-scale"
  >
    <div
      class="card"
      :class="{dark: darkMode}"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Card',
  computed: {
    ...mapState(['darkMode'])
  }
}
</script>

<style lang="scss" scoped>
.fade-scale-enter-active, .fade-scale-leave-active {
  transition: all 0.5s ease;
}
.fade-scale-enter, .fade-scale-leave-to {
  transform: scale(0) translateY(-200px);
  opacity: 0;
}

.card {
  &.dark {
    &:hover {
      background: $darkBG-hover;
    }
    background: $darkBG-secondary;
    color: $blanquito-main;
  }
  &:hover {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, .1);
  }
  color: $colortexto;
  display: flex;
  background: $blanquito-secondary;
  transition: all 0.5s ease;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .07);
  border-radius: 5px;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@include breakpoint-down(md) {
  .skill {
    /* width: 320px; */
    margin: 10px;
    padding: 15px;
    .skill-icon {
      width: 35px;
      height: 35px;
      margin-right: 10px;
    }
    .skill-body {
      .skill-body-heading {
        font-size: 16px;
      }
    }
  }
}

@include breakpoint-down(xs) {
  .skill {
    margin: 5px;
  }
}
</style>
