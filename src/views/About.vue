<template>
  <div class="about">
    <Card class="about-header">
      <transition appear name="fade-scale">
        <img class="avatar" src="/me.jpg" alt="Víctor Campos Salado">
      </transition>
      <div class="about-content">
        <h1>Hola, soy <b class="lightblue">Víctor Campos</b></h1>
        <h2>y soy desarrollador web Full-Stack <span class="tag">por vocación</span>.</h2>
      </div>
    </Card>
    <div class="about-intro">
      <h2>A lo largo de mis <span class="tag">10 años de experiencia</span> he trabajado con una amplia variedad de lenguajes y herramientas:</h2>
    </div>
    <div class="about-inner">
      <div class="skill-column" v-for="(column, j) in sortedColumns" :key="j">
        <h3>{{ column.name }}</h3>
        <div class="skills-container" :class="[column.name == 'HERRAMIENTAS' ? 'tools' : '']">
          <skill-card v-for="(skill, i) in column.skills" :key="i" :skill="skill"></skill-card>
        </div>
      </div>
    </div>
    <router-link to="/">
      <Boton pulse accent="red">Back</Boton>
    </router-link>
  </div>
</template>

<script>
import SkillCard from '@/components/SkillCard'
import Boton from '@/components/Boton'
import Card from '@/components/Card'

import skills from '../skills'

export default {
  name: 'About',
  components: { SkillCard, Boton, Card },
  data() {
    return {
      columns: skills
    }
  },
  computed: {
    sortedColumns () {
      const sorted = []
      this.columns.forEach(({ skills, ...c }) => 
        sorted.push({
          skills: skills.sort((a, b) => a.favorite ? -1 : 1),
          ...c
        })
      )
      return sorted
    }
  }
}
</script>

<style lang="scss" scoped>

.about {
  transition: height 0.5s ease-in-out;
  .about-header {
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .avatar {
      border-radius: 50%;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, .1);
      /* animation-name: aura;
      animation-duration: 4s;
      animation-iteration-count: infinite; */
      width: 250px;
      height: 250px;
      margin: 15px;
    }
    .about-content {
      display: flex;
      flex-direction: column;
      text-align: center;
      h1 {
        margin-bottom: 10px;
      }
      .lower-section {
        margin-top: 80px;
      }
    }
  }
  .about-intro {
    text-align: center;
    margin-bottom: 50px;
  }
  .about-inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    transition: height 0.5s ease;
    .skill-column {
      min-width: 250px;
      flex-basis: 30%;
      flex-grow: 1;
      text-align: center;
      /* align-items: stretch; */
      display: flex;
      flex-direction: column;
      /* justify-content: flex-start; */
      .skills-container {
        &.tools {
          flex-direction: row;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        flex-wrap: wrap;
      }
    }
  }
}
.fade-scale-enter-active, .fade-scale-leave-active {
  transition: all 0.2s ease;
}
.fade-scale-enter, .fade-scale-leave-to {
  transform: scale(0);
  opacity: 0;
}

@include breakpoint-down(md) {
  .about {
    .about-header {
      .avatar {
        width: 150px;
        height: 150px;
      }
    }
  }
}

@include breakpoint-down(sm) {
  .about {
    .about-header {
      .avatar {
        width: 100px;
        height: 100px;
      }
    }
  }
}

@include breakpoint-down(xs) {
  .about {
    .about-header {
      .avatar {
        width: 75px;
        height: 75px;
      }
    }
  }
}
</style>

