
<template>
  <button class="btn" :class="{ 'btn-blue': blue, 'btn-red': red, 'pulse': pulse, 'xl': xl, 'md': md, 'sm': sm }">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'boton',
    props: {
      accent: String,
      size: String,
      pulse: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      blue () {
        return this.accent === 'blue'
      },
      red () {
        return this.accent === 'red'
      },
      xl () {
        return this.size === 'xl'
      },
      md () {
        return this.size === 'md'
      },
      sm () {
        return this.size === 'sm'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @for $i from 1 through 2 {
    .btn {
      &:nth-child(#{$i}) {
        animation-delay: $i * (250ms);
      }
    }
  }
  @keyframes aura {
    0% {
      box-shadow: 0 0 125px rgba(255, 255, 255, .4);
    }
    25% {
      box-shadow: 0 0 110px rgba(255, 255, 255, .6);
    }
    50% {
      box-shadow: 0 0 132px rgba(255, 255, 255, .8);
    }
    75% {
      box-shadow: 0 0 110px rgba(255, 255, 255, .25);
    }
    100% {
      box-shadow: 0 0 125px rgba(255, 255, 255, .4);
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
      box-shadow: 5px 3px 16px rgba(0, 0, 0, .16);
      /* animation-name: aura;
      animation-duration: 5s;
      animation-iteration-count: infinite; */
    }
    &:active {
      box-shadow: inset 5px 3px 16px rgba(0, 0, 0, .16);
      transform: translate(5px, 5px);
    }
    &.pulse {
      animation-name: pulse;
      animation-duration: 10s;
      animation-iteration-count: infinite;
    }
    cursor: pointer;
    font-family: $fuentedefault;
    transition: all 0.5s ease;
    background: #F0F0F0;
    border: 0;
    outline: none;
    border-radius: 3px;
    color: white;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, .16);
    padding: 21px 50px;
    font-size: 28px;
    margin: 25px 15px;
    &.md {
      padding: 15px 30px;
      font-size: 20px;
      margin: 15px 10px;
    }
    &.sm {
      padding: 8px 20px;
      font-size: 18px;
      margin: 10px;
    }
    &.btn-blue {
      &:hover {
        background: $lightblue;
      }
      background: $blue;
    }
    &.btn-red {
      &:hover {
        background: $lightred;
      }
      background: $red;
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
      margin: 10px  5px;
    }
  }
</style>