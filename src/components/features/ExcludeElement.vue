<script setup lang="ts">
import { lightning } from '../../icons';
</script>

<template>
    <section class="w-11/12 flex pb-[5vh] gap-y-8 flex-col">
        <header class="flex items-center gap-x-6 md:gap-x-8">
            <div v-html="lightning" class="w-6 h-6 text-primary"></div>
            <h3 class="text-xl gradient-text font-semibold"> Exclude Element</h3>
        </header>
        <p>
            Sometimes, you might want to exclude some elements from being applied. For such scenario, you can use
            "Exclude Element" feature by
            inputting specific classname or selecting the element manually.
        </p>
        <video class="mt-8 rounded-lg opacity-80" muted controls loop playsinline
            src="../../assets/features/exclude-elements.webm">

        </video>
    </section>
</template>

<style scoped></style>
