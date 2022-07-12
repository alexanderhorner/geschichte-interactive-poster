<script setup>
import { onMounted, ref } from 'vue';

import Modal from '@/components/Modal.vue';

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

const props = defineProps(["mp3src"])

const plyr = ref(null)

onMounted(() => {
  // window.test123 = plyr.value
  plyr.value.player.play()
})

</script>

<template>
  
  <Modal>

    <vue-plyr ref="plyr">
      <audio controls crossorigin playsinline>
        <source
            :src="mp3src"
            type="audio/mp3"
            autoplay="true"
        />
      </audio>
    </vue-plyr>

  </Modal>

</template>

<style lang="scss" scoped>

::v-deep(.plyr) {
  width: 100%;
}

</style>

<style>
html.modal-open, .modal-open body {
  overflow: hidden;
}
</style>