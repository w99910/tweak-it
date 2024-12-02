<script setup lang="ts">
import { lightning } from '../../icons';
</script>

<template>
    <div class="flex w-full flex-wrap gap-y-24">
        <div class="w-1/2 px-8 gap-y-8 flex flex-col">
            <header class="flex items-center gap-x-8">
                <div v-html="lightning" class="w-6 h-6 text-primary"></div>
                <h3 class="text-xl gradient-text font-semibold"> Sync Settings Across All Devices </h3>
            </header>
            <p>
                Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform. Use
                Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent)
                new business models.
            </p>
        </div>
        <div class="w-1/2 px-8 gap-y-8 flex flex-col">
            <header class="flex items-center gap-x-8">
                <div v-html="lightning" class="w-6 h-6 text-primary"></div>
                <h3 class="text-xl gradient-text font-semibold"> Style Per Website / Global Style </h3>
            </header>
            <p>
                Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform. Use
                Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent)
                new business models.
            </p>
        </div>
        <div class="w-1/2 px-8 gap-y-8 flex flex-col">
            <header class="flex items-center gap-x-8">
                <div v-html="lightning" class="w-6 h-6 text-primary"></div>
                <h3 class="text-xl gradient-text font-semibold"> Create Your Own Custom Style </h3>
            </header>
            <p>
                Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform. Use
                Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent)
                new business models.
            </p>
        </div>
        <div class="w-1/2 px-8 gap-y-8 flex flex-col">
            <header class="flex items-center gap-x-8">
                <div v-html="lightning" class="w-6 h-6 text-primary"></div>
                <h3 class="text-xl gradient-text font-semibold"> Intelligent Color Adjustment </h3>
            </header>
            <p>
                Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform. Use
                Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent)
                new business models.
            </p>
        </div>
    </div>
</template>

<style scoped></style>
