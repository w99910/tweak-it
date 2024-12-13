<script setup lang="ts">
import { lightning } from '../icons';
import AppFooter from '../components/App-Footer.vue';
import { reactive } from 'vue';
import { onMounted } from 'vue';
import { open } from '../api';

const data = reactive({
    width: 0,
    height: 0,
    showNav: false,
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
        <!-- <div class="w-full p-3 gap-x-2 bg-primary text-dark flex items-center justify-center"> <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-circle-alert w-6 h-6 min-w-4 min-h-4">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg> Currently, our chrome extension was unpublished by mistake and now undergoing a new process. Sorry
            for any incovenience.</div> -->
        <div class="w-full sm:bg-inherit bg-dark px-4 sm:w-10/12 md:w-9/12 lg:w-8/12 relative 2xl:w-7/12 flex flex-col">
            <header id="header" class="w-full z-20 bg-dark py-4 flex sticky top-0 items-center justify-between">
                <router-link to="/">
                    <div class="flex items-center gap-x-2">
                        <img src="../assets/logo.svg" />
                    </div>
                </router-link>
                <nav v-show="data.width > 640 || data.showNav"
                    :style="{ width: data.width > 640 ? 'auto' : data.width + 'px', height: data.width > 640 ? 'auto' : data.height + 'px' }"
                    class="flex sm:flex-row flex-col z-10 justify-center sm:bg-none bg-nav-gradient sm:justify-start fixed  top-0 left-0 sm:relative gap-y-8 items-center sm:gap-x-12">
                    <svg @click="data.showNav = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-x sm:hidden cursor-pointer absolute top-10 right-4">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                    <a href="/#features" class="text-lg no-underline">Features</a>
                    <a href="/documentation" class="text-lg no-underline">Documentation</a>
                    <a href="/#pricing" class="text-lg no-underline">Pricing</a>
                    <a href="/#frequently-asked-questions" class="text-lg no-underline">FAQs</a>
                    <button @click="open"
                        class="flex focus:outline-none sm:hidden items-center px-4 py-2 rounded-md gap-x-2 bg-primary text-text-primary">
                        Get Started
                        <span class="w-6 h-6 flex" v-html="lightning"></span>
                    </button>
                </nav>
                <button @click="open"
                    class="items-center hidden sm:flex px-4 py-2 rounded-md gap-x-2 bg-primary text-text-primary">
                    Get Started
                    <span class="w-6 h-6 flex" v-html="lightning"></span>
                </button>
                <svg v-show="!data.showNav" @click="data.showNav = true" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="lucide sm:hidden lucide-menu cursor-pointer">
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
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
