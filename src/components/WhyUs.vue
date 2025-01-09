<script setup lang="ts">
import { onMounted, ref } from 'vue';
// @ts-ignore
import AnimeScrollTrigger from 'https://cdn.jsdelivr.net/npm/anime-scrolltrigger@0.1.0/dist/anime-scrolltrigger.es.js';

const r = ref(null)

onMounted(() => {
    // if (window.innerWidth > 500) {
    //     let container = document.getElementById('container');
    //     const animations: Array<any> = [];
    //     ['header', 'p'].forEach((selector) => {
    //         (r.value! as HTMLElement).querySelectorAll(selector).forEach((el) => {
    //             animations.push({
    //                 targets: el,
    //                 translateY: [10, 0],
    //                 opacity: [0, 1],
    //                 easing: 'easeOutQuart',
    //                 duration: 1200,
    //                 scrollTrigger: {
    //                     trigger: r.value,
    //                     start: 'top center',
    //                     end: 'bottom top',
    //                 }
    //             })
    //         })
    //     })
    //     new AnimeScrollTrigger(container, animations);
    // }

})
</script>

<template>
    <section id="what-tweakit"
        class="flex border-[dashed] border-b items-center mt-8 gap-y-4 border-dashed flex-col z-10 w-full py-[8vh]">
        <header class="font-semibold text-3xl gradient-text">What is TweakIt?</header>
        <div class=" mt-8 leading-8 w-11/12">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide inline-flex text-primary fill-primary lucide-quote">
                <path
                    d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path
                    d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            </svg>
            <p class="mt-4 leading-8 font-medium"> TweakIt is an ultimate browser extension for transforming
                your web
                browsing experience through effortless customization and personalization. It empowers users to take
                control of how websites look and feel, offering unmatched flexibility and simplicity.
            </p>
            <p class="mt-12 font-medium">This is the perfect tool for you if you want to:
            </p>
            <ul class="ml-2 list-disc mt-4 font-medium">
                <li class="text-slate-300"><span class="text-primary font-semibold">Customize Website
                        Styles</span><br /> Design
                    unique styles
                    for
                    specific
                    websites or create global styles that
                    automatically apply when you visit any page.</li>
                <li class="pt-6 text-slate-300"><span class="text-primary font-semibold">Personalize Colors</span><br />
                    Change
                    background
                    colors to
                    suit
                    your
                    preferences—light to dark, dark to light, or any shade in between.</li>
                <li class="pt-6 text-slate-300"><span class="text-primary font-semibold">Enable Transparency
                        Easily</span><br />
                    Simplify the process
                    of
                    enabling
                    transparency on websites with our "Transparent" preset, bypassing the need for complex manual CSS
                    adjustments.</li>
                <li class="pt-6 text-slate-300"><span class="text-primary font-semibold">Set Custom
                        Backgrounds</span><br />
                    Effortlessly
                    add your
                    favorite images as
                    backgrounds to websites, enhancing your online experience.</li>
                <li class="pt-6 text-slate-300"><span class="text-primary font-semibold">Fine-Tune
                        Typography</span><br /> Adjust font
                    size, font
                    family,
                    letter
                    spacing, and word spacing without compromising website layouts.</li>
                <li class="pt-6 text-slate-300"><span class="text-primary font-semibold">Enjoy Simplicity and
                        Affordability</span><br />
                    Benefit
                    from a
                    lightweight,
                    efficient, and budget-friendly styling tool that delivers powerful results.</li>
                <li class="pt-6 text-slate-300"><span class="text-primary font-semibold">Prioritize Privacy</span><br />
                    Rest easy
                    knowing
                    your data
                    is
                    secure with
                    this privacy-first solution—no tracking or intrusive monitoring.</li>
                <li class="pt-6 text-slate-300"><span class="text-primary font-semibold">Count on Long-Term
                        Support</span><br /> Trust
                    in a
                    reliable,
                    well-maintained
                    tool that ensures compatibility and support for years to come.</li>
                <li class="pt-6 text-slate-300"><span class="text-primary font-semibold">Sync Across
                        Devices</span><br /> Easily
                    synchronize your
                    custom
                    styles across
                    multiple browsers and devices for a seamless experience.</li>

            </ul>
        </div>
    </section>
</template>

<style scoped></style>
