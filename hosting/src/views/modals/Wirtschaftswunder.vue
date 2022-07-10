<script setup>
import TextModal from '@/components/TextModal.vue'
import ReadMoreButton from '@/components/ReadMoreButton.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <TextModal>
    <h1 >Wirtschaftswunder</h1>
    <p>Nach dem Weltkrieg waren nicht nur die deutschen Städte in Trümmern, sondern auch die Moral der deutschen Bürger. Doch das deutsche Volk packte zusammen an, und gegen alle Wahrscheinlichkeit erlebte Westdeutschland einen enormen wirtschaftlichen Boom... so zumindest der sogenannte Gründungsmythos.</p>

    <p>Wieso Mythos? Der wirtschaftliche Aufschwung war eigentlich garnicht so ein Wunder, wurde aber so dargestellt, um die Moral und das Gemeinschaftsgefühl. Tatsächlich gab es <RouterLink to="Vorraussetzungen-des-Wirtschaftswunder">mehrere Vorraussetzungen, wie z. B. Das Produktionspotenzial und die Einbindung in den freien Weltmarkt</RouterLink>, die Deutschland in eine gute Position für einen „Rebound“ brachten, was auch die Westmächte erkannten.</p>

    <ReadMoreButton link="Vorraussetzungen-des-Wirtschaftswunder">Vorraussetzungen des Wirtschaftswunder</ReadMoreButton>


  </TextModal>
</template>
