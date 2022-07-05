<script setup>
import { RouterView } from 'vue-router'
import { onMounted, ref, onUnmounted } from 'vue'

import AOS from 'aos'

import PlayAudioButton from '@/components/PlayAudioButton.vue';

const content = ref(null)

const responsiveAnimation = () => {
  const aosElements = content.value.querySelectorAll('[data-aosinitial]')

  if (window.innerWidth < 1080) {
    aosElements.forEach((element) => {
      element.dataset.aos = 'fade-up'
    })
  } else {
    aosElements.forEach((element) => {
      element.dataset.aos = element.dataset.aosinitial
    })
  }
}

onMounted(() => {
  const aosElements = content.value.querySelectorAll('[data-aosinitial]')
  aosElements.forEach((element) => {
    element.dataset.aos = element.dataset.aosinitial
  })
  window.addEventListener('resize', responsiveAnimation)
})

onUnmounted(() => {
  window.removeEventListener('resize', responsiveAnimation)
})

AOS.init({
  offset: 150,
})

onMounted(() => {
  window.addEventListener('load', () => {
    AOS.refresh()
  }, {once: true});
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

  <section name="top" class="hero-section">
    <div class="titles" style="overflow: visible;">
      <h1 class="title-main">Deutschlands Aufschwung</h1>
      <div class="title-secondary">presented by History Extreme</div>
    </div>
  </section>

  <main ref="content" class="content">

    <!-- <component :is="component"></component> -->
    <div>{{ component }}</div>

    <section class="cdu-anti-kommunismus">
      <img data-aosinitial="fade-right" class="img-big " src="@/assets/img/cdu-anti-kommunismus.jpg" alt="Propagandafoto mit Text: CDU schützt vor Enteignung">
      <div data-aosinitial="fade-left" class="info">
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
      <div data-aosinitial="fade-right" class="info">
        <h2 class="info-headline">Wirtschafts&shy;wunder</h2>
        <div class="info-text" style="margin-bottom: 1rem">„Wohlstand für alle“ - Ludwig Erhard</div>
        <PlayAudioButton></PlayAudioButton>
      </div>
      <img data-aosinitial="fade-left" class="img-big" src="@/assets/img/wirtschaftswunder.jpg" alt="">
    </section>

    <section class="währungsreform">
      <img data-aosinitial="fade-right" class="img-big" src="@/assets/img/währungsreform.jpg" alt="">
      <div data-aosinitial="fade-left" class="info">
        <h2 class="info-headline">Währungs&shy;reform</h2>
        <PlayAudioButton></PlayAudioButton>
      </div>
    </section>

  </main>

  <RouterView />
</template>

<style lang="scss">

@keyframes zoomIn {
  0% {
    transform: scale(0.7);
    filter: blur(20px)
  }
  100% {
    transform: scale(1);
    filter: blur(0);
  }
}

.hero-section {
  
  max-height: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('@/assets/img/Heilbronn_1945-darker.jpg');

  .titles {
    animation: 1s ease-out 0s 1 zoomIn;
    padding-bottom: 5vh;
    margin: 0 2rem;

    @media screen and (max-width: 600px) {
      font-size: 2.5vw;
    }

    @media screen and (max-width: 1100px) {
      text-align: center;
    }


    .title-main {
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      font-size: 5em;
      margin: 0;
    }

    .title-secondary {
      font-style: italic;
      margin-left: 5px;
    }
  }
}

.content {
  padding-top: 150px;
  padding-bottom: 250px;
  display: grid;
  grid-template-columns: 1fr repeat(5, 2fr) 1fr;
  row-gap: 150px;
  margin-top: min(100vh, 100vw);

  @media screen and (max-width: 1080px) {
     grid-template-columns: 20px repeat(5, 1fr) 20px;
     row-gap: 20px;
  }

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

  section {
    @media screen and (max-width: 1080px) {
      img {
        grid-column: 2 / span 5 !important;
      }
      .info {
        grid-column: 2 / span 5 !important;
        padding: 0;
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
  

}
</style>
