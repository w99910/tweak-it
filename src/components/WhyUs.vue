<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AnimeScrollTrigger from 'https://cdn.jsdelivr.net/npm/anime-scrolltrigger@0.1.0/dist/anime-scrolltrigger.es.js';

const r = ref(null)

onMounted(() => {
    let container = document.getElementById('container');
    const animations: Array<any> = [];
    ['header', 'p'].forEach((selector) => {
        (r.value! as HTMLElement).querySelectorAll(selector).forEach((el, i) => {
            animations.push({
                targets: el,
                translateY: [10, 0],
                opacity: [0, 1],
                easing: 'easeOutQuart',
                duration: 1200,
                scrollTrigger: {
                    trigger: r.value,
                    start: 'top center',
                    end: 'bottom top',
                }
            })
        })
    })
    new AnimeScrollTrigger(container, animations);
})
</script>

<template>
    <section ref="r" id="why-us"
        class="flex border-[dashed] border-b items-center gap-y-4 border-dashed flex-col z-10 w-full py-[8vh]">
        <header class="font-semibold text-3xl gradient-text">Why TweakIt?</header>
        <div class=" mt-8 w-11/12">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide inline-flex text-primary fill-primary lucide-quote">
                <path
                    d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path
                    d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            </svg>
            <p class="mt-4 text-lg font-medium">We offer versatile
                and seamless
                customization
                for any
                website, allowing you to adjust
                colors,
                fonts, and even article widths for a more comfortable browsing experience.
            </p>
            <p class="mt-4 text-lg font-medium"> Unlike other
                extensions
                that
                require specific themes or only support light-to-dark transitions, it works effortlessly on any
                site—whether
                it's ChatGPT, Facebook, YouTube, LinkedIn, or Google Docs—ensuring optimal contrast, readability, and
                personalization across all platforms, without any performance issues.</p>
        </div>
    </section>
</template>

<style scoped></style>
