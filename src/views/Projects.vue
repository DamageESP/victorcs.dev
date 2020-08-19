<template>
  <section>
    <h1 class="heading">
      Mis proyectos
    </h1>
    <main class="projects">
      <ProjectCard
        v-for="(project, i) in projects"
        :key="i"
        :project="project"
        @ver-detalle="verDetalle"
      />
      <span class="others">... y muchos más. Algunos de ellos los puedes ver <a
        target="_blank"
        href="https://github.com/DamageESP"
      >en mi perfil de github</a>.</span>
    </main>
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
    // TODO: Implement detail view
    verDetalle(projectId) {
      return projectId
    }
  }
};
</script>

<style lang="scss" scoped>
.heading {
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

  .project {
    cursor: pointer;
  }
  .others {
    padding: 25px;
    text-align: center;
  }
}
</style>
