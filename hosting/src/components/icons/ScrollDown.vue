<template>
    <div class="container-arrows">
        <svg class="svgline" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 19"><polyline class="cls-1 line1" points="1 1 17 17 33 1"/></svg>
        <svg class="svgline" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 19"><polyline class="cls-1 line2" points="1 1 17 17 33 1"/></svg>
        <svg class="svgline" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 19"><polyline class="cls-1 line3" points="1 1 17 17 33 1"/></svg>
    </div>
</template>

<style lang="scss" scoped>
@keyframes pulse {
    0% {
        opacity: 0.5;
    }
    35% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    65% {
        opacity: 0.5;
    }
    100% {
        opacity: 0.5;
    }
}

@keyframes pulse2 {
    0% {
        stroke: hsl(0deg, 0%, 60%);
    }
    35% {
        stroke: hsl(0deg, 0%, 60%);
    }
    50% {
        stroke: hsl(0deg, 0%, 100%);
    }
    65% {
        stroke: hsl(0deg, 0%, 60%);
    }
    100% {
        stroke: hsl(0deg, 0%, 60%);
    }
}

.container-arrows {
    width: 50px;
    display: flex;
    flex-direction: column;

    .svgline {
        margin-top: -25%;

        .cls-1 {
            width: 100%;
            fill: none;
            stroke: #FFF;
            stroke-miterlimit: 10;
            stroke-width: 2px;
            animation: 2s linear 0s infinite pulse2;
            animation-direction: normal;
        }

        .line1 {
            animation-delay: 0;
        }
        .line2 {
            animation-delay: 0.15s;
        }
        .line3 {
            animation-delay: 0.3s;
        }
    }
}
</style>