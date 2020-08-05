<template>
  <section class="projects">
    <ProjectCard
      v-for="(project, i) in projects"
      :key="i"
      :project="project"
      @ver-detalle="verDetalle"
    />
  </section>
</template>

<script>
import projects from "../lib/projects";

import ProjectCard from "@/components/ProjectCard";

export default {
  name: "Projects",
  components: { ProjectCard },
  data() {
    return {
      projects,
    };
  },
  methods: {
    verDetalle(projectName) {
      console.log('coming soon', projectName)
    }
  }
};
</script>

<style lang="scss" scoped>
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

  .project {
    cursor: pointer;
  }
}
</style>
