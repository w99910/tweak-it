<script setup lang="ts">
import { firefox, star, zen } from './icons';
import Layout from './layout/Layout.vue';
</script>

<template>
    <layout>
        <div class="flex z-10 flex-col w-full py-8 px-4 text-slate-300 tracking-wide leading-relaxed gap-y-6">
            <h1 class="font-bold text-3xl text-white text-center">Documentation</h1>
            <p class="text-xl font-semibold mt-2 text-white ">Table Of Contents</p>
            <ul class="list-disc list-inside">
                <li class="py-1"><a href="#installation" class="underline text-primary">Installation</a></li>
                <li class="py-1"><a href="#usage" class="underline text-primary">Usage</a></li>
                <li class="py-1"><a href="#subscribe" class="underline text-primary">Subscribe</a></li>
                <li class="py-1"><a href="#bug-report" class="underline text-primary">Bug Report</a></li>
            </ul>
            <section id="installation" class="flex border-t border-dashed py-4 flex-col gap-y-4">
                <h2 class="text-2xl font-semibold text-primary ">Installation</h2>
                <p class="px-2">Currently, we support firefox-based browsers such as <a
                        href="https://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox</a> & <a
                        href="https://zen-browser.app/" target="_blank">Zen Browser</a> for our extension. Our chrome
                    extension is still
                    undergoing the review process. We will update our new supported browsers either here or via email.
                    So you can install our extension in
                </p>
                <div class="flex flex-wrap gap-4 px-2">
                    <button class="px-4 shadow bg-primary text-dark py-2 flex items-center gap-x-4 rounded">
                        Install on Firefox<span v-html="firefox"></span>
                    </button>
                    <button class="px-4 shadow bg-primary text-dark py-2 flex items-center gap-x-4 rounded">
                        Install on Zen Browser<span v-html="zen"></span>
                    </button>

                </div>
                <p class="px-2">After adding the extension in your browser, proceed the following steps: </p>
                <ul class="list-disc mx-4">
                    <li class="pb-4">
                        <div class="flex flex-col">
                            <h3>Open the extension.</h3>
                            <img alt="click-extension" class="w-10/12 mt-4 border rounded-lg border-primary"
                                src="./assets/documentation/click-extension.png" />
                        </div>
                    </li>
                    <li class="pt-4">
                        <div class="flex flex-col">
                            <h3>When a modal pops up, login with your google account. The reason why we require Google
                                login is to track the number of users using our extension and to offer you a seamless
                                way to
                                subscribe effortlessly in the future. We don't track or store any of your browser
                                activity.</h3>
                            <img alt="google-login" class="w-10/12 mt-4 border rounded-lg border-primary"
                                src="./assets/documentation/login.png" />
                        </div>
                    </li>
                    <li class="pt-4">
                        <div class="flex flex-col">
                            <h3>After successful login, you will see the following modal. Yay! 🎉🥳</h3>
                            <img alt="successful-login" class="mt-4 w-10/12 border rounded-lg border-primary"
                                src="./assets/documentation/auth.png" />
                        </div>
                    </li>
                </ul>
            </section>
            <section id="usage" class="flex border-t border-dashed py-4 flex-col gap-y-4">
                <h2 class="text-2xl font-semibold text-primary ">Usage</h2>
                <h2 class="text-xl mt-4 font-medium text-primary">Preset Styles</h2>
                <div class="flex flex-col px-4">
                    <p class="px-2">In order to apply preset style, go to preset styles tab in the modal. </p>
                    <ul class="list-disc mx-4">
                        <li class="pb-4">
                            <div class="flex flex-col">
                                <h3>Choose style. ( Note: The following styles can be changed as we upgrade our
                                    extension in
                                    the future.)</h3>
                                <img alt="click-extension" class="w-10/12 mt-4 border rounded-lg border-primary"
                                    src="./assets/documentation/choose-style.png" />
                            </div>
                        </li>
                        <li class="pt-4">
                            <div class="flex flex-col">
                                <h3>Apply the selected style.</h3>
                                <img alt="google-login" class="w-10/12 mt-4 border rounded-lg border-primary"
                                    src="./assets/documentation/click-apply.png" />
                            </div>
                        </li>
                        <li class="pt-4">
                            <div class="flex flex-col">
                                <h3> Enjoy the magic. Voilà.🎉🥳</h3>
                                <img alt="successful-login" class="mt-4 w-10/12 border rounded-lg border-primary"
                                    src="./assets/documentation/applied_style.png" />
                            </div>
                        </li>
                    </ul>
                </div>
                <h2 class="text-xl font-medium mt-12 text-primary">Custom Style</h2>
                <div class="flex flex-col px-4">
                    <p class="px-2">Custom style is a paid feature for subscribers. In order to use this feature, you
                        can subscribe for only $3.99 per month</p>
                    <div class="flex py-4 px-4 items-center rounded gap-x-2 bg-primary my-4 text-dark">
                        <span class="flex w-6 h-6" v-html="star"></span>
                        As for first 100 users, we are offering 50%
                        discount ($1.99 per month) for first 12 months.
                    </div>
                    <p class="mt-4">Before we get started, let me explain about three types of configuration in a style.
                    </p>
                    <ul class="list-decimal my-2 list-inside mx-4">
                        <li class="py-2"><em class="text-primary">General Style</em> - It is a general configuration for
                            the current style.
                            If you
                            haven't
                            specified other style type such as header or paragraph, configuration from General style
                            will be used.
                        </li>
                        <li class="py-2"><em class="text-primary">Header Style</em> - In order to overwrite general
                            style for header texts,
                            you can tweak
                            this
                            configuration.</li>
                        <li class="py-2"><em class="text-primary">Paragraph Style</em> - This is an overall text style
                            configuration. Values
                            will be
                            descended from General style if not provided.</li>
                    </ul>
                    <ul class="list-disc mx-4 mt-4">
                        <li class="pb-4">
                            <div class="flex flex-col">
                                <h3>Changing Background Color</h3>
                                <p class="mt-4">With the help of our Intelligent Color Adjustment, you choose one
                                    color and we will apply other relevant colors based on current background colors of
                                    current website instead of applying one choosen color.</p>
                                <img alt="custom_style_bg" class="w-10/12 mt-4 border rounded-lg border-primary"
                                    src="./assets/documentation/custom_style_bg.png" />
                            </div>
                        </li>
                        <li class="pt-4">
                            <div class="flex flex-col">
                                <h3>Changing Font Color</h3>
                                <p class="mt-4">If you don't provide your customfont color, we will choose appropriate
                                    font
                                    color based on current background color contrast to keep hustle away from you.</p>
                                <img alt="custom_style_font_color" class="w-10/12 mt-4 border rounded-lg border-primary"
                                    src="./assets/documentation/custom_style_font_color.png" />
                            </div>
                        </li>
                        <li class="pt-4">
                            <div class="flex flex-col">
                                <h3>Changing Width</h3>
                                <p class="mt-4">This is still experimental feature. We added this feature to adjust
                                    article width on Medium.com.</p>
                                <img alt="custom_style_font_color" class="w-10/12 mt-4 border rounded-lg border-primary"
                                    src="./assets/documentation/custom_style_width.png" />
                            </div>
                        </li>
                        <li class="pt-4">
                            <div class="flex flex-col">
                                <h3>Changing Font Family</h3>
                                <p class="mt-4">As for now, we only support Google Fonts. In order to find your
                                    favourite Google font, go to <a href="https://fonts.google.com/"
                                        target="_blank">fonts.google.com</a>, get the <em>Font Name</em> and insert it
                                    in the box.</p>
                                <img alt="custom_style_font_family"
                                    class="w-10/12 mt-4 border rounded-lg border-primary"
                                    src="./assets/documentation/custom_style_font_family.png" />
                            </div>
                        </li>
                        <li class="pt-4">
                            <div class="flex flex-col">
                                <h3>Changing Font Size, Letter spacing, Line Height and Word spacing</h3>
                                <p class="mt-4">While default typography style is the best, you might want to tweak it
                                    as you wish.</p>
                                <img alt="custom_style_font_family"
                                    class="w-10/12 mt-4 border rounded-lg border-primary"
                                    src="./assets/documentation/custom_style_typography.png" />
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section id="subscribe" class="flex border-t border-dashed py-6 sm:py-8 flex-col gap-y-4">
                <h2 class="text-2xl font-semibold text-primary ">Subscribe</h2>
                <p>You can subscribe our paid plan in settings tab. Likewise, you can manage your subscription in
                    settings tab if you have active subscription.</p>
                <img alt="custom_style_font_family" class="w-10/12 mt-4 border rounded-lg border-primary"
                    src="./assets/documentation/subscribe.png" />
            </section>
            <section id="bug-report" class="flex border-t border-dashed py-6 sm:py-8 flex-col gap-y-4">
                <h2 class="text-2xl font-semibold text-primary ">Bug Report</h2>
                <p>Thank you for submitting your report. Please submit your form via <a
                        href="https://forms.gle/jDBp4WAJbUNTnjvZ7" target="_blank">this Google Form.</a></p>
            </section>
        </div>
    </layout>
</template>

<style scoped>
h3 {
    font-weight: 600;
}
</style>
