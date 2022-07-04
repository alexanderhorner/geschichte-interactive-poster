<script setup>
import Play from '@/components/icons/Play.vue';
</script>

<template>
  <router-link class="container" to="/create">
    <Play class="icon"></Play>
    <div class="prompt-text">Audio abspielen</div>
  </router-link>
  <!-- <div class="container">
    <Play class="icon"></Play>
    <div class="prompt-text">Audio abspielen</div>
  </div> -->
</template>

<style lang="scss">
.container {
  text-decoration: none;
  color: inherit;
  padding: 10px;
  height: 75px;
  width: 450px;
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  background-color: hsl(0deg, 0%, 20%);
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.15s;

  .icon {
    height: 100%;
    margin-right: 1.2rem;
  }

  .prompt-text {
    font-size: 1.2rem;
  }

  &:hover {
    transform: scale(1.02);

    .icon {
      filter: brightness(0) saturate(100%) invert(59%) sepia(45%) saturate(5670%) hue-rotate(186deg) brightness(103%) contrast(104%);
    }
    .prompt-text {
      color: #23a0ff;
    }
  }
}
</style>