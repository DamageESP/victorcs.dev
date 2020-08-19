<template>
  <section class="projectDetails">
    <ProjectCard
      v-if="project"
      :project="project"
    />
    <span v-else>project no existo</span>
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
      project: projects.find(p => p.id === this.$route.params.id),
    };
  },
};
</script>

<style lang="scss" scoped>
.projectDetails {
  display: flex;
  justify-items: center;
  align-items: center;

  .project {
    cursor: pointer;
  }
}
</style>
