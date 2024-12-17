<script setup lang="ts">
import { onMounted } from 'vue';
import Layout from './layout/Layout.vue';

import confetti from 'canvas-confetti';

onMounted(async () => {
    const colors = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"];
    const end = Date.now() + 2.5 * 1000;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 80,
            origin: { x: 0, y: 0.6 },
            colors: colors,
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 80,
            origin: { x: 1, y: 0.6 },
            colors: colors,
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
})
</script>

<template>
    <layout>
        <div class="flex z-10 flex-col w-full py-[5vh] px-4 text-slate-300 tracking-wide leading-relaxed gap-y-8">
            <h1 class="text-primary text-4xl font-bold text-center">🎉 Thank you for your subscription 🤩 </h1>
            <div class="flex w-full items-center justify-center py-[5vh]">
                <img src="./assets/onboarding.svg" class="w-4/12" />
            </div>
            <p>
                You should now have access to paid features. Please <a href="mailto://support@tweakit.today"
                    target="_blank">email us</a> if you find
                any issue with the extension or subscription.

            </p>
            <div class="flex flex-col gap-y-2">
                <p>Please kindly find the following resources to leverage the paid features.</p>
                <ul class="list-disc list-inside">
                    <li class="py-2">
                        <a href="https://doc.tweakit.today/basic_usage" target="_blank">Basic Usage</a>
                    </li>
                    <li class="py-2">
                        <a href="https://doc.tweakit.today/CustomStyle" target="_blank">Custom Style</a>
                    </li>
                    <li class="py-2">
                        <a href="https://doc.tweakit.today/Settings/sync_settings" target="_blank">Sync Settings</a>
                    </li>
                    <li class="py-2">
                        <a href="https://doc.tweakit.today/Settings/auto_apply_style" target="_blank">Auto Apply
                            Style</a>
                    </li>
                    <li class="py-2">
                        <a href="https://doc.tweakit.today/Subscription/manage" target="_blank">Managing
                            Subscription</a>
                    </li>
                </ul>
            </div>
        </div>
    </layout>
</template>

<style scoped></style>
