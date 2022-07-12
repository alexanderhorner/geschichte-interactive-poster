<script setup>
import Back from '@/components/icons/Back.vue'

const hasHistory = () => window.history.length > 2

</script>

<template>
    <a @click="hasHistory() ? $router.go(-1) : $router.push('/')" class="link"><Back class="icon" /> Zurück</a>
</template>

<style lang="scss" scoped>
.link {
    color: #23a0ff;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    .icon {
        height: 0.8em;
        vertical-align: baseline;
    }
}

</style>