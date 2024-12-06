<script setup lang="ts">
import { tick, arrowRight } from '../icons';
</script>

<template>
    <section id="pricing" class="flex border-[dashed] border-dashed flex-col z-10 w-full items-center py-[10vh]">
        <h2 class="font-semibold text-3xl gradient-text">Pricing</h2>
        <div
            class="mt-10 sm:w-11/12 bg-gray-gradient border border-gray-700 rounded-lg flex sm:flex-row flex-col sm:p-6 px-4 py-6 lg:p-8">
            <div class="flex w-full sm:w-1/2  sm:p-8 flex-col gap-y-4">
                <div class="flex gap-x-2 items-center font-semibold">
                    <h2 class="text-primary  text-3xl">Free Tier - Forever</h2>
                </div>
                <div class="mt-2 sm:mt-6">
                    <button
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
                    <p class="">Email Support</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Access to future updates</p>
                </div>
            </div>
        </div>
        <div
            class="mt-10 sm:w-11/12 bg-green-gradient border border-gray-700 rounded-lg flex sm:flex-row flex-col sm:p-6 px-4 py-6 lg:p-8">
            <div class="flex w-full sm:w-1/2  sm:p-8 flex-col gap-y-4">
                <div class="flex gap-x-2 items-center font-semibold">
                    <h3 class="text-gray-500 text-xl line-through">$3.99</h3>
                    <h2 class="text-primary  text-3xl">$1.99</h2>
                    <p>/ per month</p>
                </div>
                <div class="flex items-center gap-x-2">
                    <h3 class="text-xl text-orange-500">50% discount for first 100 users</h3>
                </div>
                <div class="mt-2 sm:mt-6">
                    <button class="px-4 xl:px-8 flex items-center gap-x-2 py-4 rounded-lg bg-primary text-text-primary">
                        Try Now
                        <p class="w-6 h-6" v-html="arrowRight">
                        </p>
                    </button>
                </div>
            </div>
            <div class="flex flex-col w-full sm:w-1/2 xl:p-8 sm:p-4 sm:mt-0 mt-10 gap-y-8">
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">No Credit Card Required For Trial Period</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Cancel at anytime</p>
                </div>
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
                    <p class="">Style per website / Global Style</p>
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
                    <p class="">Email Support</p>
                </div>
                <div class="flex items-center gap-x-4 sm:gap-x-6">
                    <div v-html="tick" class="w-6 h-6"></div>
                    <p class="">Access to future updates</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
