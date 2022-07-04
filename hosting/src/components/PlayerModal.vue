<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

const plyr = ref(null)

onMounted(() => {
  // window.test123 = plyr.value
  plyr.value.player.play()
})

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
  <div class="background" @click="goBack()"></div>
  <div class="modal">

    <vue-plyr ref="plyr">
      <audio controls crossorigin playsinline>
        <source
            src="@/assets/audio/file_example_MP3_1MG.mp3"
            type="audio/mp3"
            autoplay="true"
        />
      </audio>
    </vue-plyr>

  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
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
}

html.modal-open {
  .background {
  }
}

</style>

<style>
html.modal-open, .modal-open body {
  overflow: hidden;
}
</style>