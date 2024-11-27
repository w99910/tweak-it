<script setup lang="ts">
import { lightning } from './icons.ts';
import Welcome from './components/Welcome.vue';
import Features from './components/Features.vue';
import Pricing from './components/Pricing.vue';
import Faq from './components/FAQ.vue';
import AppFooter from './components/App-Footer.vue';
import { reactive } from 'vue';
import { onMounted } from 'vue';

const data = reactive({
  width: null,
  height: null,
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
  <div class="bg-dark font-inter text-white flex flex-col items-center overflow-y-auto overflow-x-hidden"
    :style="{ width: data.width + 'px', height: data.height + 'px' }">
    <div class="w-full px-4 sm:w-10/12 md:w-9/12 lg:w-8/12 relative 2xl:w-7/12 flex flex-col">
      <header id="header" class="w-full z-20 bg-dark py-4 flex sticky top-0 items-center justify-between">
        <img src="./assets/logo.svg" />
        <nav class="flex items-center gap-x-12">
          <a class="text-lg">Features</a>
          <a class="text-lg">Pricing</a>
          <a class="text-lg">FAQs</a>
          <a class="text-lg">Support</a>
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
        <welcome />
        <features />
        <pricing />
        <faq />
      </main>
    </div>
    <app-footer />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
