<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

import X from '@/components/icons/X.vue'

onMounted(() => {
  document.querySelector('html').classList.add("modal-open")
})

onUnmounted(() => {
  document.querySelector('html').classList.remove("modal-open")
})

const goBack = () => {
  history.back()
}

</script>

<template>
  <div class="background" @click="goBack()">
    <X class="close"></X>
  </div>

  <div class="modal">

    <slot />

  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 20px);
  max-width: min(1100px, 100vw);
  overflow: scroll;
  max-height: 100vh;
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