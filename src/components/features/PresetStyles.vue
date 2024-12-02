<script setup lang="ts">
import { lightning } from '../../icons';
</script>

<template>
    <section class="w-11/12 flex py-[5vh] gap-y-8 flex-col">
        <header class="flex items-center gap-x-8">
            <div v-html="lightning" class="w-6 h-6 text-primary"></div>
            <h3 class="text-xl gradient-text font-semibold"> Preset Styles</h3>
        </header>
        <p>Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform. Use Stripe
            to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business
            models.</p>
        <video class="mt-8 rounded-lg opacity-80" muted autoplay loop playsinline src="../../assets/preset.mp4">

        </video>
    </section>
</template>

<style scoped></style>
