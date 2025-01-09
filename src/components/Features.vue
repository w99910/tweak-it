<script setup lang="ts">
import PresetStyles from './features/PresetStyles.vue';
import CustomStyle from './features/CustomStyle.vue';
import ExcludeElement from './features/ExcludeElement.vue';
import OtherFeatures from './features/OtherFeatures.vue';
import { lightning } from '../icons';
import { onMounted, ref } from 'vue';

// @ts-ignore
import AnimeScrollTrigger from 'https://cdn.jsdelivr.net/npm/anime-scrolltrigger@0.1.0/dist/anime-scrolltrigger.es.js';

const r = ref(null)

onMounted(() => {
    // if (window.innerWidth > 500) {
    //     let container = document.getElementById('container');
    //     const animations: Array<any> = [];
    //     ['h1', 'h2', 'h3', 'p', 'div', 'video'].forEach((selector) => {
    //         (r.value! as HTMLElement).querySelectorAll(selector).forEach((el) => {
    //             animations.push({
    //                 targets: el,
    //                 debug: {
    //                     startTriggerOffsetMarker: '#f6a945',
    //                     endTriggerOffsetMarker: '#ffd291',
    //                     startScrollerOffsetMarker: '#4b45f6',
    //                     endScrollerOffsetMarker: '#d5d4ff',
    //                 },
    //                 translateY: [10, 0],
    //                 opacity: [0, 1],
    //                 easing: 'easeOutQuart',
    //                 duration: 1200,
    //                 scrollTrigger: {
    //                     trigger: el,
    //                     start: '-20% center',
    //                     end: 'bottom 30%',
    //                 }
    //             })
    //         })
    //     })
    //     new AnimeScrollTrigger(container, animations);
    // }
})
</script>

<template>
    <section ref="r" id="features"
        class="flex flex-col border border-t border-[dashed] border-dashed z-10 w-full items-center py-[6vh]">
        <h2 class="font-semibold text-4xl gradient-text">Features</h2>
        <!-- <p class="text-text-gray mt-4 px-2 text-center">Tweak your style and ease your readability</p> -->
        <div class="flex items-center w-full flex-col gap-y-8 mt-16">
            <div class="flex w-full flex-wrap gap-y-24">
                <div class="w-full sm:w-1/2 px-4 sm:px-8 gap-y-8 flex flex-col">
                    <header class="flex items-center gap-x-6 md:gap-x-8">
                        <div v-html="lightning" class="w-6 h-6 text-primary"></div>
                        <h3 class="text-xl gradient-text font-semibold"> Easy To Use </h3>
                    </header>
                    <p>
                        TweakIt is well-considered and designed for
                        <span>You</span>. With a few
                        clicks, you can <span class="text-primary">Easily Tweak</span> your style <span
                            class="text-primary">Without
                            Any Sweat.</span>
                    </p>
                </div>
                <div class="w-full sm:w-1/2 px-4 sm:px-8 gap-y-8 flex flex-col">
                    <header class="flex items-center gap-x-6 md:gap-x-8">
                        <div v-html="lightning" class="w-6 h-6 text-primary"></div>
                        <h3 class="text-xl gradient-text font-semibold"> Efficient </h3>
                    </header>
                    <p>
                        We really care about your browsing experience. In order to provide you a smooth and seamless
                        experience,
                        TweakIt is optimized to be
                        <span class="text-primary">fast</span> and
                        <span class="text-primary">prevent breaking your websites.</span>
                    </p>
                </div>
                <div class="w-full sm:w-1/2 px-4 sm:px-8 gap-y-8 flex flex-col">
                    <header class="flex items-center gap-x-6 md:gap-x-8">
                        <div v-html="lightning" class="w-6 h-6 text-primary"></div>
                        <h3 class="text-xl gradient-text font-semibold"> Works on any website </h3>
                    </header>
                    <p>
                        We trust TweakIt to work on any website. Although there are a
                        few edge cases and evolving
                        technology, we will keep updating TweakIt frequently and immediately as needed.
                    </p>
                </div>
                <div class="w-full sm:w-1/2 px-4 sm:px-8 gap-y-8 flex flex-col">
                    <header class="flex items-center gap-x-6 md:gap-x-8">
                        <div v-html="lightning" class="w-6 h-6 text-primary"></div>
                        <h3 class="text-xl gradient-text font-semibold"> Unlimited Websites & Browsers </h3>
                    </header>
                    <p>
                        We believe in your freedom. Thus, unlike other extension, we have made <span
                            class="text-primary">TweakIt</span> to be
                        <span class="text-primary">available anywhere</span> in your browsers whether you are
                        free-tier user or subscriber.
                    </p>
                </div>

            </div>
            <preset-styles />
            <custom-style />
            <exclude-element />
            <other-features />
        </div>
    </section>
</template>

<style scoped></style>
