<script setup lang="ts">
import { Ref, ref } from 'vue'
import { lightning } from '../../icons';
import ChangeBackground from '../../assets/features/change-background.webm?url';
import ChangeWidth from '../../assets/features/change-width.webm?url';
import ChangeFontColor from '../../assets/features/change-font-color.webm?url'
import ChangeFontSize from '../../assets/features/change-font-size.webm?url'
import ChangeFontFamily from '../../assets/features/change-font-family.webm?url'
import ChangeLetterSpacing from '../../assets/features/change-letter-spacing.webm?url'
import ChangeWordSpacing from '../../assets/features/change-word-spacing.webm?url'
import ChangeLineHeight from '../../assets/features/change-line-height.webm?url'

const styles = {
    'Background Color': ChangeBackground,
    'Width': ChangeWidth,
    'Font Color': ChangeFontColor,
    'Font Size': ChangeFontSize,
    'Font Family': ChangeFontFamily,
    'Letter Spacing': ChangeLetterSpacing,
    'Word Spacing': ChangeWordSpacing,
    'Line Height': ChangeLineHeight,
}

const selectedStyle: Ref<string> = ref('Background Color');
</script>

<template>
    <section id="custom-style" class="w-11/12 flex pb-[5vh] gap-y-8 flex-col">
        <header class="flex items-center gap-x-6 md:gap-x-8">
            <div v-html="lightning" class="w-6 h-6 text-primary"></div>
            <h3 class="text-xl gradient-text font-semibold"> Custom Style</h3>
        </header>
        <p>You can not only apply preset styles but also create and save your own custom styles to use on other
            websites. By enabling sync settings, your custom styles will automatically sync across your browsers where
            you're
            logged in.</p>
        <div class="flex flex-wrap gap-5 mt-4">
            <div class="p-4 cursor-pointer" @click="selectedStyle = style"
                :class="{ 'border-custom-gray rounded border bg-gradient-gray': style === selectedStyle }"
                v-for="style in Object.keys(styles)" :key="style">
                {{ style }}
            </div>
        </div>
        <video class="mt-8 rounded-lg opacity-80" muted controls loop playsinline :src="styles[selectedStyle]">

        </video>
    </section>
</template>

<style scoped></style>
