<template>
  <transition appear name="fade-scale">
    <div class="card" :class="{dark: darkMode}">
      <slot/>
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
.card {
  &.dark {
    &:hover {
      background: $darkBG-hover;
    }
    background: $darkBG-secondary;
    color: $blanquito-main;
  }
  &:hover {
    /* background: rgba(0, 0, 0, .02); */
    box-shadow: 0px 0px 25px rgba(0, 0, 0, .1);
  }
  /* width: 350px; */
  color: $colortexto;
  display: flex;
  background: $blanquito-secondary;
  margin: 10px;
  transition: all 0.5s ease;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .07);
  padding: 15px 10px;
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
