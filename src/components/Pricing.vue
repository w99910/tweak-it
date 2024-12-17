<script setup lang="ts">
import { tick, arrowRight } from '../icons';
import { open } from '../api';
import { onMounted, ref } from 'vue';

// @ts-ignore
import AnimeScrollTrigger from 'https://cdn.jsdelivr.net/npm/anime-scrolltrigger@0.1.0/dist/anime-scrolltrigger.es.js';

const openUrl = (url: string) => {
    window.open(url, "_blank");
}

const r = ref(null)

onMounted(() => {
    let container = document.getElementById('container');
    const animations: Array<any> = [];
    ['h1', 'h2', 'h3', 'p', 'div', 'video'].forEach((selector) => {
        (r.value! as HTMLElement).querySelectorAll(selector).forEach((el) => {
            animations.push({
                targets: el,
                debug: {
                    startTriggerOffsetMarker: '#f6a945',
                    endTriggerOffsetMarker: '#ffd291',
                    startScrollerOffsetMarker: '#4b45f6',
                    endScrollerOffsetMarker: '#d5d4ff',
                },
                translateY: [10, 0],
                opacity: [0, 1],
                easing: 'easeOutQuart',
                duration: 1200,
                scrollTrigger: {
                    trigger: el,
                    start: '-20% center',
                    end: 'bottom 30%',
                }
            })
        })
    })
    new AnimeScrollTrigger(container, animations);
})

</script>

<template>
    <section ref="r" id="pricing"
        class="flex border-[dashed] border-dashed flex-col z-10 w-full items-center py-[10vh]">
        <h2 class="font-semibold text-3xl gradient-text">Pricing</h2>
        <div
            class="mt-10 w-full sm:w-11/12 bg-gray-gradient border border-gray-700 rounded-lg flex sm:flex-row flex-col sm:p-6 px-4 py-6 lg:p-8">
            <div class="flex w-full sm:w-1/2  sm:p-8 flex-col gap-y-4">
                <div class="flex gap-x-2 items-center font-semibold">
                    <h2 class="text-primary  text-3xl">Free Tier - Forever</h2>
                </div>
                <div class="mt-2 sm:mt-6">
                    <button @click="open"
                        class="px-4 xl:px-8 flex items-center !shadow gap-x-2 py-4 rounded-lg !bg-transparent border-primary border text-slate-100">
                        Get Started
                        <p class="w-6 h-6" v-html="arrowRight">
                        </p>
                    </button>
                </div>
            </div>
            <div class="flex flex-col w-full sm:w-1/2 xl:p-8 sm:p-4 sm:mt-0 mt-10 gap-y-8">
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Preset Styles</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Intelligent Color Adjustment</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Unlimited Browsers</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Unlimited Websites</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Email Support Within 7 Business Days</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Access to future updates</p>
                </div>
            </div>
        </div>
        <div id="subscription"
            class="mt-10 w-full sm:w-11/12 bg-green-gradient border border-gray-700 rounded-lg flex sm:flex-row flex-col sm:p-6 px-4 py-6 lg:p-8">
            <div class="flex w-full sm:w-1/2  sm:p-8 flex-col gap-y-4 justify-between">
                <div class="flex items-center gap-x-2">
                    <h3 class="text-lg text-orange-400">50% Discount for first 100 users - Use <em
                            class="font-semibold">EARLYBIRDS</em> Promo code at checkout</h3>
                </div>
                <div class="flex w-full flex-col border-b border-gray-500/50 pb-6">
                    <div class="flex gap-x-2 items-center font-semibold">
                        <h3 class="text-gray-300 text-xl line-through">$1.99</h3>
                        <h2 class="text-primary  text-3xl">$0.99</h2>
                        <p>/ per month</p>
                    </div>
                    <div class="mt-4">
                        <button @click="openUrl('https://buy.stripe.com/3cs8yKd1z9Qg8yk6oo')"
                            class="px-4 xl:px-8 flex items-center gap-x-2 py-3  rounded-lg border-primary text-primary !shadow border hover:text-dark">
                            Try Monthly Subscription
                            <p class="w-6 h-6" v-html="arrowRight">
                            </p>
                        </button>
                    </div>
                </div>
                <div class="flex w-full flex-col border-b border-gray-500/50 pb-6">
                    <div class="flex gap-x-2 items-center font-semibold">
                        <h3 class="text-gray-300 text-xl line-through">$20.00</h3>
                        <h2 class="text-primary  text-3xl">$10.00</h2>
                        <p>/ per year</p>
                    </div>
                    <div class="mt-4">
                        <button @click="openUrl('https://buy.stripe.com/9AQ7uGaTr3rS4i45kl')"
                            class="px-4 xl:px-8 flex items-center gap-x-2 py-3  rounded-lg border-primary text-primary !shadow border hover:text-dark">
                            Try Yearly Subscription
                            <p class="w-6 h-6" v-html="arrowRight">
                            </p>
                        </button>
                    </div>
                </div>
                <div class="flex w-full flex-col pb-6">
                    <div class="flex gap-x-2 items-center font-semibold">
                        <h2 class="text-primary  text-3xl">$40.00</h2>
                        <p>/ one time</p>
                    </div>
                    <div class="mt-4">
                        <button @click="openUrl('https://buy.stripe.com/28o8yK5z78MceWI146')"
                            class="px-4 xl:px-8 flex items-center gap-x-2 py-3  rounded-lg bg-primary text-text-primary">
                            Purchase One-Time Subscription
                            <p class="w-6 h-6" v-html="arrowRight">
                            </p>
                        </button>
                    </div>
                </div>

            </div>
            <div class="flex flex-col w-full sm:w-1/2 xl:p-8 sm:p-4 sm:mt-0 mt-10 gap-y-8">
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Preset Styles</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Custom Style</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Apply style per website / Global Style</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Intelligent Color Adjustment</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Sync settings across your devices</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Auto-apply style</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Unlimited Browsers</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Unlimited Websites</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Email Support Within 3 Business Days</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Access to future updates</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Cancel at anytime</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
