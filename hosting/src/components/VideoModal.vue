<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import thumbnail from '@/assets/img/thumbnail-CDU-Wahlwerbespot-Herr-Schmitz.jpg'
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


// const props = defineProps(["mp3src"])

const plyr = ref(null)

// onMounted(() => {
//   plyr.value.player.play()
// })

</script>

<template>
  <div class="background" @click="goBack()">
    <X class="close"></X>
  </div>

  <div class="modal">

     <vue-plyr ref="plyr">
      <video
        controls
        crossorigin
        playsinline
        :data-poster="thumbnail"
      >
        <source
          size="720"
          src="@/assets/video/CDU-Wahlwerbespot-Herr-Schmitz.mp4"
          type="video/mp4"
        />
      </video>
      <!-- <div class="plyr__video-embed">
        <iframe
          src="https://www.youtube.com/embed/bTqVqk7FSmY?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
          allowfullscreen
          allowtransparency
          allow="autoplay"
        ></iframe>
      </div> -->
    </vue-plyr>

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
  --width: calc(466/360 * 100vh);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--width);
  max-height: calc((360/566 * 100vw) + 61px);
  max-width: 100vw;
  display: block;

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

::v-deep(.plyr) {
  // width: 100%;
}

</style>

<style>
html.modal-open, .modal-open body {
  overflow: hidden;
}
</style>