<script setup lang="ts">
import { lightning } from '../../icons';
</script>

<template>
    <section class="w-11/12 flex py-[5vh] gap-y-8 flex-col">
        <header class="flex items-center gap-x-6 md:gap-x-8">
            <div v-html="lightning" class="w-6 h-6 text-primary"></div>
            <h3 class="text-xl gradient-text font-semibold"> Preset Styles</h3>
        </header>
        <p>Explore several preset styles available in TweakIt. We will also add more preset styles frequently. Stay
            tuned!!
        </p>
        <video class="mt-8 rounded-lg opacity-80" muted controls loop playsinline src="../../assets/preset-styles.mp4">

        </video>
    </section>
</template>

<style scoped></style>
