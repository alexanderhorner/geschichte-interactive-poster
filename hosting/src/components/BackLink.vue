<script setup>
</script>

<template>
    <a @click="$router.back()" class="link">⬅ Zurück</a>
</template>

<style lang="scss" scoped>

.link {
    color: #23a0ff;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}

</style>