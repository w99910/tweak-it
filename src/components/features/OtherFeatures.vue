<script setup lang="ts">
import { lightning } from '../../icons';
</script>

<template>
    <div class="flex w-full flex-wrap gap-y-24">
        <div class="w-full sm:w-1/2 px-4 sm:px-8 gap-y-8 flex flex-col">
            <header class="flex items-center gap-x-8">
                <div v-html="lightning" class="w-6 h-6 text-primary"></div>
                <h3 class="text-xl gradient-text font-semibold"> Sync Settings Across All Devices </h3>
            </header>
            <p>
                Keep your preferences consistent no matter where you go. Sync your settings across all devices for a
                seamless and personalized experience everywhere.
            </p>
        </div>
        <div class="w-full sm:w-1/2 px-4 sm:px-8 gap-y-8 flex flex-col">
            <header class="flex items-center gap-x-8">
                <div v-html="lightning" class="w-6 h-6 text-primary"></div>
                <h3 class="text-xl gradient-text font-semibold"> Style Per Website / Global Style </h3>
            </header>
            <p>
                Personalize your browsing by setting unique styles for each website or create a unified look across all
                sites with a single global style.
            </p>
        </div>
        <div class="w-full sm:w-1/2 px-4 sm:px-8 gap-y-8 flex flex-col">
            <header class="flex items-center gap-x-8">
                <div v-html="lightning" class="w-6 h-6 text-primary"></div>
                <h3 class="text-xl gradient-text font-semibold"> Create Your Own Custom Style </h3>
            </header>
            <p>
                Unleash your creativity and design the perfect look for your favorite websites. Customize everything
                from colors to fonts, and save your unique styles to use anytime!
            </p>
        </div>
        <div class="w-full sm:w-1/2 px-4 sm:px-8 gap-y-8 flex flex-col">
            <header class="flex items-center gap-x-8">
                <div v-html="lightning" class="w-6 h-6 text-primary"></div>
                <h3 class="text-xl gradient-text font-semibold"> Intelligent Color Adjustment </h3>
            </header>
            <p>
                Intelligent Color Adjustment ensures your customizations blend seamlessly with the website's design by
                automatically adjusting colors for optimal contrast and preserving the overall aesthetic.
            </p>
        </div>
    </div>
</template>

<style scoped></style>
