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
  margin: 100px auto;
  background-color: hsl(0deg, 0%, 20%);
  padding: 30px 50px;
  border-radius: 10px;
  overflow-y: hidden;

  @media screen and (max-width: 700px) {
    padding: 30px 20px;
    border-radius: 0;
  }
}

::v-deep(figure) {
  margin: 0;

  figcaption {
    font-size: 0.8rem;
    color: hsl(0deg, 0%, 70%);
  }
}

::v-deep(img) {
  max-width: 100%;
}

// ::v-deep(h1) {
//   margin-top: 2em;
//   margin-bottom: 0.5em;
// }

::v-deep(h2) {
  margin-top: 1em;
  margin-bottom: 0.5em;
}

::v-deep(p) {
  margin-top: 0.5em;
  margin-bottom: 1em;
}

</style>

<style>
html.modal-open, .modal-open body {
  overflow: hidden;
}
</style>