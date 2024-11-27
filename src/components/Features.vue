<script setup la components: { OtherFeatures },ng="ts">
import PresetStyles from './features/PresetStyles.vue';
import CustomStyle from './features/CustomStyle.vue';
import OtherFeatures from './features/OtherFeatures.vue';
</script>

<template>
    <section class="flex flex-col border border-t border-[dashed] border-dashed z-10 w-full items-center py-[10vh]">
        <h2 class="font-semibold text-3xl gradient-text">Features</h2>
        <p class="text-text-gray mt-4">Tweak your style and ease your readability</p>
        <div class="flex items-center w-full flex-col gap-y-8">
            <preset-styles />
            <custom-style />
            <other-features />
        </div>
    </section>
</template>

<style scoped></style>
