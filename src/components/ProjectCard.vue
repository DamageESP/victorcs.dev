<template>
  <Card class="project" :class="{ vertical, dark: darkMode }">
    <a
      class="project-image"
      :style="{ backgroundImage: `url(/src/assets/projects/${project.image})` }"
      :href="project.url || project.codeUrl"
      target="_blank"
      rel="noopener"
    ></a>
    <div class="project-content-wrapper">
      <div class="project-content">
        <div class="project-content-title">
          {{ project.name }}
          <template v-if="project.url">
            ·
            <a :href="'//' + project.url" target="_blank" rel="noopener">
              <i class="material-icons-outlined">open_in_new</i>
            </a>
          </template>
          <template v-if="project.codeUrl">
            ·
            <a :href="project.codeUrl" target="_blank" rel="noopener">
              <i class="material-icons-outlined">code</i>
            </a>
          </template>
        </div>
        <span class="project-content-date"
          >{{ project.dateFrom }} - {{ project.dateTo }}</span
        >
        <div class="project-content-technologies">
          <div
            v-for="(technology, i) in project.technologies"
            :key="i"
            class="project-technology"
            :style="{ backgroundColor: getTechColor(technology) }"
          >
            {{ technology }}
          </div>
        </div>
        <p class="project-content-description">
          {{ project.description }}
        </p>
        <!-- <div class="project-content-actions">
          <button
            type="button"
            class="project-details-button"
          >
            DETALLES
          </button>
        </div> -->
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { onMounted, ref, toRefs, type PropType } from "vue";
import Card from "@/components/Card.vue";
import { getTechColor } from "@/lib/skills";
import type { Project } from "@/lib/types";
import { useAppStore } from "@/stores/app";

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});

const { darkMode } = toRefs(useAppStore());
const vertical = ref(false);

const checkWidth = () => {
  if (window.innerWidth > 600) {
    vertical.value = true;
  } else vertical.value = false;
};

onMounted(() => {
  checkWidth();
  window.addEventListener("resize", checkWidth);
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables";
.project {
  width: 100%;
  height: 100%;
  &.vertical {
    flex-direction: column;
    .project-image {
      transition: background-size 0.2s ease-in-out;
      background-size: cover;
      flex-basis: initial;
      width: 100%;
      height: 300px;
      border-radius: 5px 5px 0 0;
    }
    .project-content-wrapper {
      flex-basis: 25%;
    }
  }
  &.dark {
    .project-image {
      background-color: $darkBG-hover;
    }
  }
  .project-image {
    flex-basis: 40%;
    border-radius: 5px 0 0 5px;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    background-color: $blanquito-main;

    @include breakpoint-down(md) {
      display: none;
    }
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
      @include breakpoint-down("md") {
        font-size: 13px;
      }
      .project-content-title {
        font-weight: 600;
        font-size: 19px;
        a {
          border-bottom: 1px solid $red;
          padding-bottom: 0.15rem;
          font-size: 16px;
          text-align: right;
          font-weight: 400;
          &:hover,
          &:hover > .material-icons-outlined {
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
          .material-icons-outlined {
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
          text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8),
            0px 1px 0px rgba(0, 0, 0, 0.8), 1px 0px 0px rgba(0, 0, 0, 0.8),
            1px 1px 0px rgba(0, 0, 0, 0.8);
          background: rgba(255, 255, 255, 0.3);
          color: white;
          white-space: nowrap;
          overflow: hidden;
          padding: 5px;
          margin-bottom: 5px;
          &:not(:last-child) {
            margin-right: 5px;
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
            background: rgba(255, 255, 255, 0.1);
          }
          border-radius: 2px;
          border: none;
          outline: none;
          cursor: pointer;
          padding: 10px 15px;
          transition: 0.3s all ease;
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
