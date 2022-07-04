<script setup>
import { RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'

import AOS from 'aos'

import PlayAudioButton from '@/components/PlayAudioButton.vue';

const content = ref(null)

const incompatibleDevice = ref(false)

onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth < 1000) {
      incompatibleDevice.value = true
    } else {
      incompatibleDevice.value = false
    }
  })
  
})

onMounted(() => {
  window.addEventListener('load', () => {
    AOS.init({
      offset: 150,
    })
  });
})

const props = defineProps(['component'])
</script>

<template>
  <!-- <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>-->
  <RouterView /> 

  <template v-if="incompatibleDevice">
    <div style="padding: 100px">Dein Gerät ist zu klein</div>
  </template>

  <template v-else>

    <section data-aos="zoom-in" data-aos-easing="ease-out" data-aos-duration="750" name="top" class="hero-section">
      <div class="titles" style="overflow: visible;" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="750">
        <h1 class="title-main">Deutschlands Aufschwung</h1>
        <div class="title-secondary">presented by History Extreme</div>
      </div>
    </section>

    <main ref="content" class="content">

      <!-- <component :is="component"></component> -->
      <div>{{ component }}</div>

      <section class="cdu-anti-kommunismus">
        <img data-aos="fade-right" class="img-big " src="@/assets/img/cdu-anti-kommunismus.jpg" alt="Propagandafoto mit Text: CDU schützt vor Enteignung">
        <div data-aos="fade-left" class="info">
          <h2 class="info-headline">Anti Kommunismus</h2>
          <PlayAudioButton></PlayAudioButton>
        </div>
      </section>

      <!-- <img class="img-big name" src="@/assets/img/.jpg" alt="">
      <div class="info name">
        <h2 class="info-headline name">Anti Kommunismus</h2>
        <PlayAudioButton></PlayAudioButton>
      </div> -->

      <section class="wirtschaftswunder">
        <div data-aos="fade-right" class="info">
          <h2 class="info-headline">Wirtschafts&shy;wunder</h2>
          <div class="info-text" style="margin-bottom: 1rem">„Wohlstand für alle“ - Ludwig Erhard</div>
          <PlayAudioButton></PlayAudioButton>
        </div>
        <img data-aos="fade-left" class="img-big" src="@/assets/img/wirtschaftswunder.jpg" alt="">
      </section>

      <section class="währungsreform">
        <img data-aos="fade-right" class="img-big" src="@/assets/img/währungsreform.jpg" alt="">
        <div data-aos="fade-left" class="info">
          <h2 class="info-headline">Währungs&shy;reform</h2>
          <PlayAudioButton></PlayAudioButton>
        </div>
      </section>

    </main>
  </template>
</template>

<style lang="scss">

.hero-section {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/img/Heilbronn_1945-darker.jpg');

  .titles {
    padding-bottom: 5vh;

    .title-main {
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      font-size: 5rem;
      text-shadow: 0 0 40px black;
      margin: 0;
    }

    .title-secondary {
      text-shadow: 0 0 40px black;
      font-style: italic;
      margin-left: 5px;
    }
  }
}

.content {
  padding-top: 150px;
  padding-bottom: 500px;
  display: grid;
  grid-template-columns: 1fr repeat(5, 2fr) 1fr;
  row-gap: 150px;
  margin-top: 100vh;

  .img-big {
    width: 100%;
  }

  .info {
    padding: 5rem;
    padding-top: 0;

    h2.info-headline {
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      font-size: 3rem;
    }
  }

  section {
    display: contents;
  }

  // cdu-anti-kommunismus
  section.cdu-anti-kommunismus {
    img {
      grid-column: 2 / span 2;
    }

    .info {
      grid-column: 4 / span 3;
      padding-right: 0;
    }
  }
  
  // wirtschaftswunder
  section.wirtschaftswunder {
    img {
      grid-column: 4 / span 3;
    }

    .info {
      grid-column: 2 / span 2;
      padding-left: 0;
    }
  }

  // währungsreform
  section.währungsreform {
    img {
      grid-column: 2 / span 3;
    }

    .info {
      grid-column: 5 / span 2;
      padding-right: 0;
    }
  }

}
</style>
