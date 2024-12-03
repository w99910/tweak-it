<script setup lang="ts">
import { lightning } from '../../icons';
</script>

<template>
    <section class="w-11/12 flex pb-[5vh] gap-y-8 flex-col">
        <header class="flex items-center gap-x-8">
            <div v-html="lightning" class="w-6 h-6 text-primary"></div>
            <h3 class="text-xl gradient-text font-semibold"> Custom Style</h3>
        </header>
        <p>You can not only apply preset styles but also create and save your own custom styles to use on other
            websites. By enabling sync settings, your custom styles will automatically sync across browsers where you're
            logged in.</p>
        <video class="mt-8 rounded-lg opacity-80" muted controls loop playsinline src="../../assets/custom.mp4">

        </video>
    </section>
</template>

<style scoped></style>
