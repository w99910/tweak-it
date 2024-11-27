<script setup lang="ts">

import { arrowRight, chevronRight } from '../icons';

import { reactive } from 'vue';

const data = reactive({
    openedIndexes: []
});

const faqs = [{
    question: 'Can I cancel subscription by myself?',
    answer: "If you want to customize the strikethrough style, such as changing the color of the line, you can use Tailwind's text color utilities in combination with custom styles.",
}, {
    question: 'Do you collect my data?',
    answer: "Pyae Phyo, 27, had travelled from his home in Yangon’s West Hlaing Tharyar Township to Muse in northern Shan State, right on the Chinese border. Once there, he found a broker who helped him land a job in a garment factory in neighbouring southern Yunnan, but he lasted less than two weeks before quitting and returning home.",
}, {
    question: 'How can I contact for support',
    answer: "If you want to customize the strikethrough style, such as changing the color of the line, you can use Tailwind's text color utilities in combination with custom styles.",
}, {
    question: 'Why is it so cheap? Is there any catch?',
    answer: "If you want to customize the strikethrough style, such as changing the color of the line, you can use Tailwind's text color utilities in combination with custom styles.",
}, {
    question: 'Will you add more features later?',
    answer: "If you want to customize the strikethrough style, such as changing the color of the line, you can use Tailwind's text color utilities in combination with custom styles.",
}, {
    question: 'Do you offer a refund?',
    answer: "If you want to customize the strikethrough style, such as changing the color of the line, you can use Tailwind's text color utilities in combination with custom styles.",
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
        <h2 class="font-semibold text-3xl gradient-text mb-8">Frequently Asked Questions</h2>
        <div class="w-11/12 flex flex-col">
            <div @click="toggleQuestion(i)"
                class="overflow-hidden faq cursor-pointer py-6 border-b border-gray-400 w-full flex flex-col"
                v-for="(faq, i) in faqs" :key="i">
                <div class="flex items-center w-full justify-between">
                    <h2 class="w-10/12 font-medium text-xl">{{ faq.question }}</h2>
                    <div style="transition: all 0.2s ease-out;" class="w-6 h-6 chevron-right-icon"
                        v-html="chevronRight"></div>
                </div>
                <div style="transition: all 0.2s ease-out; height: 0px;"
                    class="answer mt-4 overflow-hidden text-gray-300">
                    {{ faq.answer }}
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
