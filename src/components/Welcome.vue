<script setup lang="ts">
import { arrowRight, star } from '../icons';
import Laptop from './Laptop.vue';
</script>

<template>
    <section class="flex z-10 flex-col w-full items-center justify-center px-4 sm:px-0 pt-[5vh] sm:pt-[10vh]">
        <h1 class="font-bold text-5xl">Ultimate Web Styler Extension</h1>
        <h3 class="font-medium text-lg mt-5 text-text-gray">Personalize Every Website Effortlessly with This Powerful
            Tool</h3>
        <div class="flex items-center gap-x-8 mt-10 justify-center">
            <span class="flex w-6 h-6 text-primary" v-html="star"></span>
            <p>
                Limited-Time Offer:
                <span class="text-primary"> Join the first 100 users </span> and
                <span class="text-primary">get 50% discount for your first 12 months!</span>
                <br>
                Don't miss out, the price increases to $3.99 after.
            </p>
        </div>
        <button class="px-8 flex items-center gap-x-2 py-4 rounded-lg bg-primary text-text-primary mt-12">
            Get started For Free
            <p class="w-6 h-6" v-html="arrowRight">

            </p>
        </button>
        <laptop />
    </section>
</template>

<style scoped></style>
