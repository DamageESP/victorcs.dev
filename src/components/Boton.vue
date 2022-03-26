<template>
  <button v-if="type === 'button'" class="btn" :class="buttonClasses">
    <span class="btnLabel">
      <slot />
    </span>
  </button>
  <a v-else :href="href" target="_blank" class="btn" :class="buttonClasses">
    <span class="btnLabel">
      <slot />
    </span>
  </a>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { reactive, toRefs, type PropType } from "vue";

const { darkMode } = toRefs(useAppStore());
const props = defineProps({
  accent: {
    type: String as PropType<"blue" | "red">,
    default: "",
  },
  size: {
    type: String as PropType<"xl" | "md" | "sm">,
    default: "",
  },
  pulse: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<"button" | "link">,
    default: "button",
  },
  href: {
    type: String,
    default: "",
  },
});
const buttonClasses = reactive({
  "btn-blue": props.accent === "blue",
  "btn-red": props.accent === "red",
  pulse: props.pulse,
  xl: props.size === "xl",
  md: props.size === "md",
  sm: props.size === "sm",
  dark: darkMode,
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables";
@for $i from 1 through 5 {
  .btn {
    &:nth-child(#{$i}) {
      animation-delay: $i * (250ms);
    }
  }
}
@keyframes aura {
  0% {
    box-shadow: 0 0 125px rgba(255, 255, 255, 0.4);
  }
  25% {
    box-shadow: 0 0 110px rgba(255, 255, 255, 0.6);
  }
  50% {
    box-shadow: 0 0 132px rgba(255, 255, 255, 0.8);
  }
  75% {
    box-shadow: 0 0 110px rgba(255, 255, 255, 0.25);
  }
  100% {
    box-shadow: 0 0 125px rgba(255, 255, 255, 0.4);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  2% {
    transform: scale(1.05);
  }
  5% {
    transform: scale(1);
  }
  25% {
    transform: scale(1);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}

.btn {
  &:hover {
    box-shadow: 5px 3px 16px rgba(0, 0, 0, 0.16);
  }
  &:active {
    box-shadow: inset 5px 3px 16px rgba(0, 0, 0, 0.16);
    transform: translate(5px, 5px);
  }
  &.pulse {
    animation-name: pulse;
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
  &.dark {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);
  }
  cursor: pointer;
  font-family: $fuentedefault;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s ease;
  background: #f0f0f0;
  text-decoration: none;
  border: 0;
  outline: none;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  padding: 15px;
  &.md {
    padding: 15px 30px;
    font-size: 20px;
  }
  &.sm {
    padding: 8px 20px;
    font-size: 18px;
  }
  &.btn-blue {
    color: white;
    background: $blue;
    &:hover {
      background: $lightblue;
    }
  }
  &.btn-red {
    color: white;
    background: $red;
    &:hover {
      background: $lightred;
    }
  }
  .btnLabel {
    display: flex;
    align-items: center;
  }
}
@include breakpoint-down(md) {
  .btn {
    padding: 15px 30px;
    font-size: $textomd;
    margin: 15px 10px;
  }
}
@include breakpoint-down(sm) {
  .btn {
    padding: 10px 15px;
    font-size: $textosm;
    margin: 10px 5px;
  }
}
</style>
