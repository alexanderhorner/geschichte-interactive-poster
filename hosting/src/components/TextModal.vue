<script setup>
import Modal from '@/components/Modal.vue';

import BackLink from '@/components/BackLink.vue'

</script>

<template>
  
  <Modal>
    <div class="container">
      <BackLink></BackLink>
      <slot></slot>
    </div>
  </Modal>

</template>

<style lang="scss" scoped>

.container {
  background-color: hsl(0deg, 0%, 20%);
  padding: 30px 50px;
  border-radius: 10px;
}

</style>

<style>
html.modal-open, .modal-open body {
  overflow: hidden;
}
</style>