<template>
  <Card class="skill">
    <div
      class="skill-icon"
      :style="`background-image: url('${computedImageURL(skill.icon)}')`"
    />
    <div class="skill-body">
      <div class="skill-body-heading">
        {{ skill.name }}
      </div>
      <div
        v-if="skill.level"
        ref="level"
        class="skill-body-level"
      >
        <div
          ref="levelBar"
          class="skill-body-level-bar"
        />
      </div>
    </div>
    <div
      v-if="skill.favorite"
      class="skill-favorite"
    />
  </Card>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'SkillCard',
  components: { Card },
  props: {
    skill: {
      type: Object,
      default: () => {
        return {
          icon: '',
          name: 'Tech',
          level: 0,
          favorite: false
        }
      }
    }
  },
  mounted () {
    this.barRecalc()
  },
  methods: {
    barRecalc () {
      if (!this.$refs.levelBar) return
      this.$refs.levelBar.style.width = `${this.skill.level}%`
    },
    computedImageURL (logoName) {
      return require(`../assets/logos/${logoName}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.skill {
  max-width: 350px;
  padding: 15px 10px;
  margin: 10px;
  .skill-icon {
    width: 40px;
    height: 40px;
    margin-right: 20px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .skill-body {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .skill-body-heading {
      font-size: 18px;
    }
    .skill-body-level {
      margin-top: 10px;
      background: rgba(0, 0, 0, .1);
      height: 6px;
      width: 100%;
      border-radius: 2px;
      .skill-body-level-bar {
        border-radius: 5px;
        transition: width 1s ease;
        background: $blue;
        width: 0px;
        height: 100%;
      }
    }
  }
  .skill-favorite {
    transition: all 0.1s ease;
    position: relative;
    animation-name: pulse;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-timing-function: linear;
    top: -30px;
    left: 20px;
    background-image: url('../assets/heart.png');
    background-size: contain;
    background-position: center;
    height: 35px;
    width: 35px;
  }
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
