<script setup>
import TextModal from '@/components/TextModal.vue'
</script>

<template>
    <TextModal>
        <div class="horizontal-scroll">
            <table>
                <tr>
                    <th>Innere Faktoren</th>
                    <th>Äußere Faktoren</th>
                </tr>
                <tr>
                    <td>
                        <strong>Produktionspotenzial</strong>
                        <ul>
                            <li>„Humankapital"</li>
                            <li>technologisches Know-how</li>
                            <li>Bestand an Industrieanlagen</li>
                            <li>Modernisierungsschub der Industrie bereits im Krieg</li>
                        </ul>
                    </td>
                    <td>
                        <strong>Einbindung in freien Weltmarkt</strong>
                        <ul>
                            <li>Einbindung der DM in das internatioale System fester Wechselkurse</li>
                            <li>Beitritt der Bundesrepublik zum Zoll- und Handelsabkommen GATT (Abbau von Zöllen, Exporterleichterung)</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <strong>Tarifpolitik</strong>
                        <ul>
                            <li>Zusammenarbeit von Unternehmern und Gewerkschaften</li>
                            <li>niedriges Streikniveau</li>
                            <li>stabilisierende Wirkung der Tarifautonomie</li>
                            <li>gemäßigte Lohnforderungen der Gewerkschaften</li>
                        </ul>
                    </td>
                    <td>
                        <strong>Hilfeleistungen des Marshall-Plans</strong>
                        <ul>
                            <li>Sachlieferungen (Waren, Rohstoffe und Lebensmittel) GATT (Abbau von Zöllen, Exporterleichterung)</li>
                            <li>Kredite</li>
                            <li>Förderung der europäischen Zusammenarbeit</li>
                            <li>erleichterte Einbindung der Bundesrepublik in den Weltmarkt</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <strong>Arbeitskräftepotenzial</strong>
                        <ul>
                            <li>hohe Qualifikation und Motivation der Vertriebenen</li>
                            <li>aus der DDR geflüchtete Fachkräfte  <span style="white-space: nowrap">➤ größte</span> mobilisierbare Arbeitskräftereserven in Westeuropa</li>
                        </ul>
                    </td>
                    <td>
                        <strong>Exportsteigerung</strong> (durch Korea-Boom)
                        <ul>
                            <li>steigende US-Rüstungsproduktion bindet Kapazitäten von US-Firmen</li>
                            <li>deutsche Unternehmen bedienen die internationale Nachfrage nach industriellen Gütern</li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>

    </TextModal>
</template>

<style lang="scss" scoped>
table {
    border-collapse: collapse;

    th, td {
        border: 1px solid hsl(0deg, 0%, 40%);
        padding: 0.5em 1em;
    }
}

.horizontal-scroll {
    overflow-x: scroll;
}

</style>