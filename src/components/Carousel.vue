<script setup lang="ts">
// import * as dat from "dat.gui";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { onMounted, ref } from "vue";
import page0 from '../assets/show-cases/show-case-0.png?url';
import page1 from '../assets/show-cases/show-case-1.png?url';
import page2 from '../assets/show-cases/show-case-2.png?url';
import page3 from '../assets/show-cases/show-case-3.png?url';
import page4 from '../assets/show-cases/show-case-4.png?url';
import page5 from '../assets/show-cases/show-case-5.png?url';
import page6 from '../assets/show-cases/show-case-6.png?url';
import page7 from '../assets/show-cases/show-case-7.png?url';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


const containerRef = ref(null)

const showCases = [
    page0,
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
]

onMounted(() => {
    // init();
    const splide = new Splide('.splide', {
        type: 'loop',
        arrows: false,
        drag: false,
        perPage: 4,
        pagination: false,
        gap: '4rem',
        focus: 'center',
        perMove: 1,
        breakpoints: {
            640: {
                perPage: 2,
                gap: '2rem'
            },
            1024: {
                perPage: 3,
                gap: '3rem'
            }
        },
        autoScroll: {
            speed: 0.25,
            pauseOnHover: false,
        },
    });

    // splide.on('move', () => {
    //     const slides = document.querySelectorAll('.splide__slide');

    //     slides.forEach((slide, index) => {
    //         const slideRect = slide.getBoundingClientRect();
    //         const containerRect = splide.Components.Elements.track.getBoundingClientRect();

    //         // Calculate proximity to center
    //         const distanceFromCenter = Math.abs(slideRect.left + slideRect.width / 2 - containerRect.left - containerRect.width / 2);

    //         console.log(distanceFromCenter, slide)

    //         // Map the distance to a scale factor
    //         const scaleFactor = Math.max(1 - distanceFromCenter / containerRect.width, 0.8); // Scale between 0.8 and 1.0
    //         slide.style.transform = `scale(${scaleFactor})`;
    //     });
    // });

    splide.mount({ AutoScroll });

})
</script>
<template>
    <div ref="containerRef" class="w-screen z-10 py-12 mt-12">
        <section class="splide" aria-labelledby="carousel-heading">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide" v-for="showCase in showCases" :key="showCase"><img class="rounded-lg"
                            :src="showCase" /></li>
                </ul>
            </div>
        </section>
    </div>
</template>


<style scoped></style>