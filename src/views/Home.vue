<template>
  <section>
    <IntroHeader class="home-intro-header" />
    <Projects class="home-projects" />
  </section>
</template>

<script setup lang="ts">
import IntroHeader from "@/components/IntroHeader.vue";
import Projects from "./Projects.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/variables";
.home-intro-header {
  margin: 50px 0;
}
.home-projects {
  margin-top: 100px;
}
</style>
