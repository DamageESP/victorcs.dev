<template>
  <footer class="footer">
    <div class="footer-group">
      Putting
      <span class="material-icons-outlined footer-heart">favorite</span> into
      what I do since 1995.
    </div>
    <div class="footer-right">
      Hosted on
      <a
        href="https://www.webmonster.io/"
        target="_blank"
        rel="noopener noreferrer"
        >WebMonster</a
      >.
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "@/assets/variables";
.footer {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: $muted;
  font-size: 0.9rem;
  padding: 25px 0;
  overflow: hidden;
  text-overflow: ellipsis;

  @include breakpoint-down(md) {
    grid-template-columns: 1fr;
  }

  .footer-heart {
    color: $red;
    font-size: inherit;
  }
  .footer-year {
    color: whitesmoke;
  }
  @include breakpoint-up(md) {
    .footer-right {
      text-align: right;
    }
  }
}
</style>
