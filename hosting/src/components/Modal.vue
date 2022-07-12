<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

import X from '@/components/icons/X.vue'

onMounted(() => {
  document.querySelector('html').classList.add("modal-open")
})

onUnmounted(() => {
  document.querySelector('html').classList.remove("modal-open")
})

// const goBack = () => {
//   console.log("go back");
//   console.log(window.history.length > 2);
  
// }

const hasHistory = () => window.history.length > 2

</script>

<template>
  <div class="background" @click="hasHistory() ? $router.go(-1) : $router.push('/')">
    <X class="close"></X>
  </div>

  <div @click="hasHistory() ? $router.go(-1) : $router.push('/')" class="modal">

    <slot />

  </div>
</template>

<style lang="scss" scoped>
@keyframes appear {
  0% {
    filter: blur(20px);
  }
  100% {
    filter: blur(0);
  }
}

.modal {
  animation: 0.2s ease-out 0s 1 appear;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 50px);
  max-width: 1100px;
  overflow: scroll;
  max-height: 100vh;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
}

.background {
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(0deg, 0%, 0%, 0.5);

  .close {
    cursor: pointer;
    width: 30px;
    position: absolute;
    top: 20px;
    right: 20px;
  }
}

</style>

<style>
html.modal-open, .modal-open body {
  overflow: hidden;
}
</style>