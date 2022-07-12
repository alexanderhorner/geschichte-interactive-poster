<script setup>
import TextModal from '@/components/TextModal.vue'
import ReadMoreButton from '@/components/ReadMoreButton.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <TextModal>
    <h1>Wirtschaftswunder</h1>

    <p>Nach dem Weltkrieg waren nicht nur die deutschen Städte in Trümmern, sondern auch die Moral der deutschen Bürger. Doch das deutsche Volk packte zusammen an, und gegen alle Wahrscheinlichkeit erlebte Westdeutschland in den 50er Jahren einen enormen wirtschaftlichen Boom der bis zu den 60ern anhällt... so zumindest der sogenannte Gründungsmythos.</p>

    <p>Wieso Mythos? Der wirtschaftliche Aufschwung war eigentlich garnicht so ein Wunder, wurde aber so dargestellt, um die Moral und das Gemeinschaftsgefühl der Deutschen zu stärken. Tatsächlich gab es <RouterLink to="Vorraussetzungen-des-Wirtschaftswunder">mehrere Vorraussetzungen, wie z. B. Das Produktionspotenzial und die Einbindung in den freien Weltmarkt</RouterLink>, die Deutschland in eine gute Position für einen „Rebound“ brachten, was auch die Westmächte erkannten.</p>

    <ReadMoreButton style="margin-bottom: 1em" link="Vorraussetzungen-des-Wirtschaftswunder">Vorraussetzungen des Wirtschaftswunder</ReadMoreButton>

    <p>Der demokratische Neubeginn bietet Westdeutschland neue Hoffnung. Die Kombination aus Hilfeleistungen des Marschallplans, Pruduktion - und Arbeiterpotenzial und effektive Innenpolitik lässt die West-Deutsche Wirtschaft einen immensen Aufschwung erfahren. Der neuerlangte Wohlstand durch das Wirtschaftswunder, auch wenn zunächst ungerecht verteilt, hilft die soziale Marktwirtschaft als funktionierendes System zu festigen und die Bundesrepublik zu stabilisieren. Viele Reformen des Sozialstaates wie zum Beispiel die Währungsreform 1948 fördern den Wirtschaftlichen Aufschwung noch weiter. </p>

    <h2>Soziale Marktwirtschaft</h2>
      
    <p>Dabei ist ein zentraler Aspekt des Wirtschaftswunders die soziale Marktwirtschaft. Die neue Wirtschaftsordnung wirkt mit der Einführung des freien Wettbewerbs auf den sozialen Ausgleich hin. Obwohl der allgemeine Wohlstand steigt und jeder davon profitiert, bleibt er sehr ungerecht verteilt. Millionen Deutsche sind nach dem zweiten Weltkrieg stark materiell und psychisch geschädigt. Die Regierung wirkt hier mit Sozialpolitik gegen. Das Einführen des Lastenausgleichsgesetzes und des Tarifvertragsgesetztes entlasten die, die nach dem Kriegsende besonders betroffen waren. Auch die Rentenreform und das Kindergeld wurden eingeführt. Angesichts der Not die so gelindert wird hilft das auch das neue demokratische System zu legitimieren. Und bringt dadurch die Integration breiter Bevölkerungsgruppen mit sich. Auch die damaligen Nazis wurden wieder in die Gesellschaft eingegliedert um wichtige Positionen zu füllen um vorübergehend den Fachkräftemangel zu decken. </p>
    
    <h2>VW Käfer als Symbol des Wirtschaftswunders</h2>

    <p>Am Beispiel des VW Käfers wird durch technologisches know how, bestehende Industrieanlagen , die Zusammenarbeit von Unternehmen und Gewerkschaften und hochqualifizierte Arbeitskräfte ein Produkt geschaffen das zum Symbol des Wirtschaftwunders wird. Das aber auch nach Außen für die Wettbewerbsfähigkeit der BRD steht und „Made in West Germany“ zu einem Zeichen für Qualität werden lässt. Somit wird auch der Exportmarkt weiter Ausgebaut.</p>


  </TextModal>
</template>
