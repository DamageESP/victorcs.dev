<template>
  <section>
    <h2 class="section-title">Personal projects / demos</h2>
    <section class="projects">
      <ProjectCard
        v-for="(project, i) in orderedProjects"
        :key="i"
        :project="project"
      />
    </section>
  </section>
</template>

<script setup lang="ts">
import projects from "../lib/projects";
import ProjectCard from "@/components/ProjectCard.vue";

const orderedProjects = projects.sort((p1, p2) =>
  p1.order < p2.order ? -1 : 1
);
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.section-title {
  font-weight: 800;
  font-size: 28px;
  line-height: 1;
  margin-bottom: 25px;
}
.projects {
  display: grid;
  grid-template-columns: repeat(3, 50fr);
  grid-template-rows: auto;
  gap: 10px;
  justify-items: center;
  align-items: center;

  @include breakpoint-down(md) {
    grid-template-columns: repeat(2, 50fr);
  }
  @include breakpoint-down(xs) {
    grid-template-columns: 1fr;
  }
}
</style>
