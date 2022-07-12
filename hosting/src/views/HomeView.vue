<script setup>
import { RouterView } from 'vue-router'
import { onMounted, ref, onUnmounted } from 'vue'

import AOS from 'aos'

import ReadMoreButton from '@/components/ReadMoreButton.vue';
import PlayVideoButton from '@/components/PlayVideoButton.vue';

import MoneyEasterEggPic from '@/assets/img/money.jpg'

const content = ref(null)

const title = ref(null)
const heroSection = ref(null)

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
  responsiveAnimation()
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






// konami code
{
  const pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
  // const pattern = ['b', 'a']
  let current = 0

  const listener = (event) => {
    // If the key isn't in the pattern, or isn't the current key in the pattern, reset
    if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
      current = 0;
      return;
    }

    // Update how much of the pattern is complete
    current++

    // If complete, alert and reset
    if (pattern.length === current) {
      current = 0
      window.alert('Unlimited Wirtschaftswunder!');
      title.value.innerHTML = "Balance: 99999999999999999DM"
      heroSection.value.style.backgroundImage = `url('${MoneyEasterEggPic}')`
    }
  }
  onMounted(() => document.addEventListener('keydown', listener))
  onUnmounted(() => document.removeEventListener('keydown', listener))
}




</script>

<template>
  <!-- <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>-->
  <div class="no-css-grid-support">Dieser Browser ist zu alt. Aktualisieren Sie ihn und versuchen Sie es erneut.</div>

  <section name="top" class="hero-section" ref="heroSection">
    <div class="titles" style="overflow: visible;">
      <h1 class="title-main" ref="title">Westdeutschlands Aufschwung</h1>
      <div class="title-secondary">presented by History Extreme</div>
    </div>
  </section>

  <main ref="content" class="content">

  

    <section class="wirtschaftswunder">
      <div data-aosinitial="fade-right" data-aos-anchor=".wirtschaftswunder > .img-big" class="info">
        <h2 class="info-headline">Wirtschafts&shy;wunder</h2>

        <div class="info-text" style="margin-bottom: 1rem">
          <ul>
            <li>Wirtschaftswunder in der BRD ab 1950</li>
            <li>Legitimierung der Bundesrepublik <span style="white-space: nowrap">➤ Gründungsmythos</span></li>
            <li>Hauptursachen des Wunders: Zusammenspiel aus geschickter Politik, Produktionspotenzial, Arbeitskräftepotential, Entwicklungen und Ereignissen</li>
            <li>Merkmale des Wunders: Volbeschäftigung, "Konsumwellen", steigender Lebensstandart</li>
            <li>freier Wettbewerb als sozialer Ausgleich: "Wohlstand für Alle"</li>
            <li>Weitere Legitimation und Akzeptanz durch Beseitigung von Not</li>
          </ul>
        </div>

        <ReadMoreButton link="Wirtschaftswunder"></ReadMoreButton>
        <PlayVideoButton style="margin-top: 1em;" link="Herr-Schmitt-Video">CDU-Wahlwerbespot</PlayVideoButton>
      </div>
      <img data-aosinitial="fade-left" class="img-big" src="@/assets/img/wirtschaftswunder.jpg" alt="">
    </section>


    <section class="währungsreform">
      <img data-aosinitial="fade-right" class="img-big" src="@/assets/img/währungsreform.jpg" alt="">
      <div data-aosinitial="fade-left" data-aos-anchor=".währungsreform > .img-big" class="info">
        <h2 class="info-headline">Währungs&shy;reform</h2>
        <!-- <div class="info-text">Insbesondere die Währungsreform legt den Grundstein für das Wunder. Durch die Einführung der D-Mark werden Tauschbörse und Schwarzmarkt eingedämmt. Jeder Bürger erhält zunächst 40 D- Mark und danach nochmal 20 D-Mark um den Privatkonsum anzukurbeln und somit die Wirtschaftslage weiter zu bessern.</div> -->
        <ReadMoreButton link="Währungsreform"></ReadMoreButton>
      </div>
    </section>

    <section class="integration-der-vertriebenen">
      <div data-aosinitial="fade-right" data-aos-anchor=".integration-der-vertriebenen > .img-big" class="info">
        <h2 class="info-headline">Integration der Vertriebenen</h2>

        <div class="info-text" style="margin-bottom: 1rem">
          <ul>
            <li>Die Integration der vertriebenen als Herausforderung</li>
            <li>Integrationshürden: soziale Spannung, Kulturschock, Ausgrenzung und Diskriminierung, soz. Abstieg der Vertriebenen, Segregation</li>
            <li>Integrationserfolg in Gebieten mit hohem Arbeiterbedarf</li>
            <li>Modernisierung der Gesellschaft</li>
          </ul>
        </div>

        <ReadMoreButton link="Integration-der-Vertriebenen"></ReadMoreButton>
      </div>
      <img data-aosinitial="fade-left" class="img-big" src="@/assets/img/vertreibene.jpg" alt="">
    </section>

    <section class="verwestlichung-und-amerikanisierung">
      <img data-aosinitial="fade-right" class="img-big" src="@/assets/img/germany-at-the-crossroad.jpg" alt="">
      <div data-aosinitial="fade-left" data-aos-anchor=".verwestlichung-und-amerikanisierung > .img-big" class="info">
        <h2 class="info-headline">Verwestlichung und Amerikanisierung</h2>

        <div class="info-text" style="margin-bottom: 1rem">
          <ul>
            <li>1949 Bildung einer konservativen Gesellschaft</li>
            <li>Sehnen nach Normalität und Sicherheit durch Instabilität der BRD </li>
            <li>Amerikanisierung und Verwestlichung der Gesellschaft durch Populär- und Jugendkultur</li>
            <li>Amerikanisierung: Veränderung einer Gesellschaft hinsichtlich ihrer Einrichtung, Werte, Traditinoen und Verhaltensweisen nach dem Vorbild der USA</li>
            <li>Verwestlichung: Übernahme von politischen Ideen des Westens <span style="white-space: nowrap">➤ Liberalismus</span> und Pluralismus</li>
          </ul>
        </div>

        <ReadMoreButton link="Verwestlichung-und-Amerikanisierung"></ReadMoreButton>
      </div>
    </section>

    


    <section class="cdu-anti-kommunismus">
      <div data-aosinitial="fade-right" data-aos-anchor=".cdu-anti-kommunismus > .img-big" class="info">
        <h2 class="info-headline">Antikommunismus</h2>
        <div class="info-text" style="margin-bottom: 2rem">
          <ul>
            <li>Kommunismus als Feindbild</li>
            <li>Zusammenschließung des Westens gegen Kommunismus</li>
            <li>Wahlerfolg der Parteien gegen den Kommunismus</li>
          </ul>
        </div>
        <!-- <PlayAudioButton link="playertest"></PlayAudioButton> -->
        <ReadMoreButton link="Antikommunismus"></ReadMoreButton>
      </div>
      <img data-aosinitial="fade-left" class="img-big " src="@/assets/img/cdu-anti-kommunismus.jpg" alt="Propagandafoto mit Text: CDU schützt vor Enteignung"> 
    </section>

  </main>

  <RouterView />
</template>

<style lang="scss" scoped>

.no-css-grid-support {
  display: none;
  text-align: center;
  height: 200px;
  padding-top: 50px;
}

@supports not (display: grid) {
  * {
    display: none !important;
  }
  .no-css-grid-support {
    display: block !important;
  }
}

@supports not (display: contents) {
  * {
    display: none !important;
  }
  .no-css-grid-support {
    display: block !important;
  }
}

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
  
  // max-height: 100vw;
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

    @media screen and (max-width: 750px) {
      font-size: 2.25vw;
    }

    @media screen and (max-width: 1250px) {
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
      font-size: 16px;
    }
  }
}

.content {
  padding-top: 150px;
  padding-bottom: 250px;
  display: grid;
  grid-template-columns: 1fr repeat(5, 2fr) 1fr;
  row-gap: 150px;
  margin-top: 100vh;

  @media screen and (max-width: 1080px) {
    padding-top: 20px;
    grid-template-columns: 1fr repeat(5, 130px) 1fr;
    row-gap: 20px;
  }

  @media screen and (max-width: 690px) {
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

      @media screen and (max-width: 600px) {
        font-size: 2rem;
      }
    }
  }

  section {
    display: contents;
  }
  
  // wirtschaftswunder
  section.wirtschaftswunder {
    img {
      grid-column: 5 / span 2;
    }

    .info {
      grid-column: 2 / span 3;
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

  section.integration-der-vertriebenen {
    img {
      grid-column: 5 / span 2;
    }

    .info {
      grid-column: 2 / span 3;
      padding-left: 0;
    }
  }

  section.verwestlichung-und-amerikanisierung {
    img {
      grid-column: 2 / span 2;
    }

    .info {
      grid-column: 4 / span 3;
      padding-right: 0;
    }
  }

  // cdu-anti-kommunismus
  section.cdu-anti-kommunismus {
    img {
      grid-column: 5 / span 2;
    }

    .info {
      grid-column: 2 / span 3;
      padding-left: 0;
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
        margin-bottom: 150px;

        .info-headline {
          margin-top: 0.4em;
        }
      }

      @for $i from 1 through 5 {
        &:nth-of-type(#{$i}) {
          .img-big {
            order: $i * 2;
          }
          .info {
            order: $i * 2 + 1;
          }
        }
      }

    }
  }
  

}
</style>
