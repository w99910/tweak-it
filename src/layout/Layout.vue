<script setup lang="ts">
import { lightning } from '../icons';
import AppFooter from '../components/App-Footer.vue';
import { reactive } from 'vue';
import { onMounted } from 'vue';

const data = reactive({
    width: 0,
    height: 0,
})

data.width = window.innerWidth;
data.height = window.innerHeight;

onMounted(() => {
    window.addEventListener('resize', () => {
        data.width = window.innerWidth;
        data.height = window.innerHeight;
    })
})

</script>

<template>
    <div class="bg-dark scroll-smooth font-inter text-slate-200 tracking-wider flex flex-col items-center overflow-y-auto overflow-x-hidden"
        :style="{ width: data.width + 'px', height: data.height + 'px' }">
        <div class="w-full px-4 sm:w-10/12 md:w-9/12 lg:w-8/12 relative 2xl:w-7/12 flex flex-col">
            <header id="header" class="w-full z-20 bg-dark py-4 flex sticky top-0 items-center justify-between">
                <router-link to="/"><img src="../assets/logo.svg" /></router-link>
                <nav class="flex items-center gap-x-12">
                    <a href="/#features" class="text-lg">Features</a>
                    <a href="/#why-us" class="text-lg">Why Us?</a>
                    <a href="/#pricing" class="text-lg">Pricing</a>
                    <a href="/#frequently-asked-questions" class="text-lg">FAQs</a>
                </nav>
                <button class="flex items-center px-4 py-2 rounded-md gap-x-2 bg-primary text-text-primary">
                    Get Started
                    <span class="w-6 h-6 flex" v-html="lightning"></span>
                </button>
            </header>
            <main class="relative flex w-full flex-col items-center">
                <div class="h-full left-0 absolute w-1/2 border-l border-r border-[dashed] border-dashed">
                </div>
                <div class="h-full right-0 absolute w-1/2 border-r border-[dashed] border-dashed">
                </div>
                <slot></slot>
            </main>
        </div>
        <app-footer />
    </div>
</template>

<style scoped></style>
