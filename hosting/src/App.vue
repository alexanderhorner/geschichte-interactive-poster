<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <!-- <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header> -->
  <RouterView />
  <div class="copyright">Von Alexander Horner und Steven Feldbusch © 2022</div>
</template>

<style lang="scss">
.copyright {
  text-align: center;
  color: hsl(0deg, 0%, 50%);
  margin-bottom: 10px;
}
</style>
