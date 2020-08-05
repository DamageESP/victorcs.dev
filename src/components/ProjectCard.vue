<template>
  <Card
    class="project"
    :class="{ vertical }"
    @click.native="$emit('ver-detalle', project.id)"
  >
    <div
      class="project-image"
      :style="{ backgroundImage: processedImage(project.image) }"
    />
    <div class="project-content-wrapper">
      <div class="project-content">
        <h1 class="project-content-title">
          {{ project.name }}
          <template v-if="project.url">
            ·
            <a
              :href="'//' + project.url"
              target="_blank"
              rel="noopener"
            >
              {{ project.url }}
              <i class="material-icons">open_in_new</i>
            </a>
          </template>
        </h1>
        <span
          class="project-content-date"
        >{{ project.dateFrom }} - {{ project.dateTo }}</span>
        <div class="project-content-technologies">
          <div
            v-for="(technology, i) in project.technologies"
            :key="i"
            class="project-technology"
            :style="{backgroundColor: getTechColor(technology.id)}"
          >
            {{ technology.name }}
            <SkillCard
              class="embedded-skill"
              :skill="technology"
            />
          </div>
        </div>
        <p class="project-content-description">
          {{ project.description }}
        </p>
        <div class="project-content-actions">
          <button
            type="button"
            class="project-details-button"
          >
            DETALLES
          </button>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/Card";
import SkillCard from "@/components/SkillCard";

import { getTechColor } from '../lib/technologies'

export default {
  name: "ProjectCard",
  components: { Card, SkillCard },
  props: {
    project: {
      id: {
        type: Number,
        default: 0,
      },
      name: {
        type: String,
        default: "Sin título",
      },
      description: {
        type: String,
        default: "Sin descripción.",
      },
      dateFrom: {
        type: String,
        default: "Desde los inicios",
      },
      dateTo: {
        type: String,
        default: "Para siempre",
      },
      image: {
        type: String,
        default: require("../assets/projects/unknown.jpg"),
      },
      url: {
        type: String,
        default: "https://victorcs.dev",
      },
    },
  },
  data() {
    return {
      vertical: false,
    };
  },
  mounted() {
    this.checkWidth();
    window.addEventListener("resize", this.checkWidth);
  },
  methods: {
    processedImage(url) {
      return `url(${require(`../assets/projects/${url}`)})`;
    },
    checkWidth() {
      if (window.innerWidth > 600) {
        this.vertical = true;
      } else this.vertical = false;
    },
    getTechColor(techId) {
      return getTechColor(techId)
    }
  },
};
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  width: 100%;
  height: 100%;
  &.vertical {
    flex-direction: column;
    .project-image {
      transition: background-size 0.2s ease-in-out;
      &:hover {
        background-size: 115%;
      }
      flex-basis: initial;
      width: 100%;
      height: 300px;
      border-radius: 5px 5px 0 0;
    }
    .project-content-wrapper {
      flex-basis: 25%;
      .project-content {
        .project-content-title {
          a {
            display: initial;
          }
        }
      }
    }
  }
  .project-image {
    flex-basis: 40%;
    border-radius: 5px 0 0 5px;
    background-position: center;
    background-size: 100%;
  }
  .project-content-wrapper {
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .project-content {
      padding: 15px 10px;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      @include breakpoint-down('md') {
        font-size: 13px;
      }
      .project-content-title {
        font-weight: 600;
        font-size: 19px;
        a {
          display: none;
          border-bottom: 1px solid $red;
          padding-bottom: 0.15rem;
          font-size: 16px;
          text-align: right;
          font-weight: 400;
          &:hover,
          &:hover > .material-icons {
            background: -webkit-gradient(
              linear,
              left top,
              right top,
              from($red),
              to($blue)
            );
            background: $gradiente;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-box-decoration-break: clone;
            box-decoration-break: clone;
            text-shadow: none;
            border-color: white;
          }
          color: inherit;
          text-decoration: none;
          .material-icons {
            font-size: 14px;
          }
        }
      }
      .project-content-date {
        color: $muted;
        font-size: 12px;
        margin: 5px 0;
        margin-bottom: 10px;
      }
      .project-content-technologies {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .project-technology {
          border-radius: 15px;
          font-size: 11px;
          text-align: center;
          text-shadow: 0px 0px 2px rgba(0, 0, 0, .8), 0px 1px 0px rgba(0, 0, 0, .8), 1px 0px 0px rgba(0, 0, 0, .8), 1px 1px 0px rgba(0, 0, 0, .8);
          background: rgba(255, 255, 255, .3);
          color: white;
          white-space: nowrap;
          overflow: hidden;
          padding: 5px;
          margin-bottom: 5px;
          &:not(:last-child) {
            margin-right: 5px;
          }
          &:hover {
            .embedded-skill {
              display: flex;
            }
          }
          .embedded-skill {
            box-shadow: 0px 0px 25px rgba(0, 0, 0, .2);
            display: none;
            position: absolute;
          }
        }
      }
      .project-content-description {
        flex-grow: 1;
      }
      .project-content-actions {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .project-details-button {
          &:hover {
            background: rgba(255, 255, 255, .1);
          }
          border-radius: 2px;
          border: none;
          outline: none;
          cursor: pointer;
          padding: 10px 15px;
          transition: .3s all ease;
          background: transparent;
          text-transform: uppercase;
          text-align: right;
          color: $lightblue;
        }
      }
    }
  }
}
</style>
