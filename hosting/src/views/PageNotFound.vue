<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <div>
      <h1>404 - Seite existiert nicht</h1>
      <div>Ups, scheint als wäre was schief geloffen. <RouterLink to="/">Startseite</RouterLink></div>
    </div>
  </div>
  <div class="placeholder"></div>
</template>

<style lang="scss" scoped>
.container {
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
}

h1, div {
  pointer-events: all;
  text-align: center;
}

h1 {
  margin-top: 0;
}

div {
  margin-bottom: 0;
}

.placeholder {
  height: calc(100vh - 32px);
}
</style>
