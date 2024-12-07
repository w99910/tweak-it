<script setup lang="ts">

import { chevronRight } from '../icons';

const faqs = [{
    question: 'Can I cancel subscription by myself?',
    answer: "You can cancel your subscription in Stripe customer portal. You can access to that portal by opening extension menu, switching to settings page and clicking 'Manage subscription' button.",
}, {
    question: 'Do you collect my data?',
    answer: `TL;DR - We only collect your name and email in order to manage your subscription and account status. You can always turn on/off the "sync settings" feature if you don't want to store your styles in our server. For more information, please consult our <a class="text-primary underline" href="/privacy-policy" target="_blank">privacy_policy</a>.`,
}, {
    question: 'How can I contact for support?',
    answer: `Currently, we provide support exclusively via email. For assistance, please contact our support team at <a class="text-primary cursor-pointer underline"
                            href="mailto:support@tweakit.today" target="_blank">support@tweakit.today</a>.`,
}, {
    question: 'Will you add more features later?',
    answer: "Of course, we would love to add more features and will try to deliever them frequently.",
}, {
    question: 'Do you offer a refund?',
    answer: `Paid subscriptions are non-refundable. If you experience an issue, please contact us at <a class="text-primary cursor-pointer underline" href="mailto:support@tweakit.today" target="_blank">support@tweakit.today</a>, and we will work to resolve it.`,
}, {
    question: 'Does it work on my browser?',
    answer: `Currently, we support the Desktop versions of Chrome, Chromium, Brave, Firefox and Zen Browser as browser extensions are not allowed to run on mobile browsers except safari extensions.`
}]

const toggleQuestion = function (index: number) {
    const faq = document.querySelectorAll('.faq')[index];
    if (!faq) return;
    const answerEl = faq.querySelector('.answer') as HTMLElement;
    if (!answerEl) return;
    let height = answerEl.classList.contains('active') ? 0 : answerEl.scrollHeight;
    answerEl.style.height = height + 'px';
    (faq.querySelector('.chevron-right-icon') as HTMLElement).style.transform = height ? 'rotate(90deg)' : 'rotate(0deg)'
    answerEl.classList.toggle('active');
}
</script>

<template>
    <section id="frequently-asked-questions"
        class="flex border-t border-dashed flex-col z-10 w-full items-center py-[10vh]">
        <h2 class="font-semibold text-2xl sm:text-3xl gradient-text mb-8">Frequently Asked Questions</h2>
        <div class="w-11/12 flex flex-col">
            <div @click="toggleQuestion(i)"
                class="overflow-hidden faq cursor-pointer py-6 border-b border-gray-400 w-full flex flex-col"
                v-for="(faq, i) in faqs" :key="i">
                <div class="flex items-center w-full justify-between">
                    <h2 class="w-10/12 font-medium text-lg sm:text-xl">{{ faq.question }}</h2>
                    <div style="transition: all 0.2s ease-out;" class="w-6 h-6 chevron-right-icon"
                        v-html="chevronRight"></div>
                </div>
                <div style="transition: all 0.2s ease-out; height: 0px;"
                    class="answer mt-4 overflow-hidden text-gray-300" v-html="faq.answer">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
