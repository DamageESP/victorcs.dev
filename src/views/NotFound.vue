<template>
  <main class="error-page">
    <h1><span class="error-code">Error 404</span> - Not found, amigo</h1>
  </main>
</template>

<script>
  export default {
    name: 'NotFound',
  }
</script>

<style scoped lang="scss">
.error-page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  h1 {
    font-size: 50px;
    font-weight: 800;
    text-align: center;

    .error-code {
      padding: 5px 10px;
      background-color: rgba(0, 0, 0, .1);
      border-radius: 5px;
    }
  }
}
</style>
