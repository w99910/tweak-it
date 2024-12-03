<script setup lang="ts">
import { lightning } from '../../icons';
</script>

<template>
    <section class="w-11/12 flex pt-[5vh] gap-y-4 flex-col">
        <header class="flex items-center gap-x-6 md:gap-x-8">
            <div v-html="lightning" class="w-6 h-6 text-primary"></div>
            <h3 class="text-xl gradient-text font-semibold">What is a style?</h3>
        </header>
        <p>Style refers to a collection of settings that control the appearance of elements, including
        </p>
        <div class="flex flex-wrap gap-5 mt-4">
            <div class="rounded border-custom-gray p-4 border bg-gradient-gray">
                Background Color
            </div>
            <div class="rounded border-custom-gray p-4 border bg-gradient-gray">Width</div>
            <div class="rounded border-custom-gray p-4 border bg-gradient-gray">Text Color</div>
            <div class="rounded border-custom-gray p-4 border bg-gradient-gray">Font Size</div>
            <div class="rounded border-custom-gray p-4 border bg-gradient-gray">Font Family</div>
            <div class="rounded border-custom-gray p-4 border bg-gradient-gray">Letter Spacing</div>
            <div class="rounded border-custom-gray p-4 border bg-gradient-gray">Line Height</div>
        </div>
    </section>
</template>

<style scoped></style>
