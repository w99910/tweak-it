<script setup lang="ts">
import Layout from './layout/Layout.vue';
</script>

<template>
    <layout>
        <div class="flex z-10 flex-col w-full py-8 px-4 text-slate-300 tracking-wide leading-relaxed gap-y-8">
            <h1 class="font-bold text-3xl text-white">Privacy Policy</h1>
            <p>Effective Date: Dec 2, 2024</p>
            <p>
                TweakIt (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, and protect your information when you use our browser extension.
            </p>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">1. Information We Collect</h2>
                <p>We collect and store the following information to provide and improve our services:</p>
                <ul class="list-inside list-disc">
                    <li class="py-1">
                        User Email Address: Used to verify your account status and manage subscription details.
                    </li>
                    <li class="py-1">Custom Styles and Settings: Includes any custom background colors, typography
                        preferences, and
                        other
                        settings you configure in the extension.</li>
                    <li class="py-1">Name for Stripe Customer Object: Used to associate your payment information with
                        your account
                        for
                        subscription purposes.</li>
                </ul>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">2. How We Collect Your Information</h2>
                <p>We use your information for the following purposes:</p>
                <ul class="list-inside list-disc">
                    <li class="py-1">
                        You create an account or subscribe to our services.
                    </li>
                    <li class="py-1">You configure custom settings in the extension.</li>
                    <li class="py-1">You subscribe or make payments using Stripe.</li>
                </ul>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">3. How We Use Your Information</h2>
                <p>We use your information for the following purposes:</p>
                <ul class="list-inside list-disc">
                    <li class="py-1">To enable the functionality of the browser extension.</li>
                    <li class="py-1">To manage your subscription, including billing and account status checks.</li>
                    <li class="py-1">To store your custom settings for a personalized user experience.</li>
                </ul>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">3. How We Use Your Information</h2>
                <p>We use your information for the following purposes:</p>
                <ul class="list-inside list-disc">
                    <li class="py-1">To enable the functionality of the browser extension.</li>
                    <li class="py-1">To manage your subscription, including billing and account status checks.</li>
                    <li class="py-1">To store your custom settings for a personalized user experience.</li>
                </ul>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">4. Where Your Information Is Stored</h2>
                <p>Your information is stored securely using:</p>
                <ul class="list-inside list-disc">
                    <li class="py-1"><a class="text-primary underline cursor-pointer" target="_blank"
                            href="https://www.cloudflare.com/privacypolicy/">Cloudflare D1</a>: Our
                        database provider,
                        used to store user data including email, custom settings,
                        and subscription details.</li>
                </ul>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">5. Payment Processing</h2>
                <p>We use Stripe for secure payment processing. Stripe handles your payment information directly, and we
                    do not store any credit card details. For more information, please review <a
                        class="text-primary underline cursor-pointer" href="https://stripe.com/privacy"
                        target="_blank">Stripe’s
                        Privacy Policy.</a>
                </p>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">6. Data Sharing</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your data
                    only in the following circumstances:
                </p>
                <ul class="list-inside list-disc">
                    <li class="py-1">With Stripe: To process payments.
                    </li>
                    <li class="py-1">As required by law: If required to comply with legal obligations or protect our
                        rights.
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">7. Data Retention</h2>
                <p>We retain your information for as long as your account is active or as needed to provide you with our
                    services. You may request the deletion of your data by contacting us at either our support ticket
                    form or our support email.
                </p>
                <ul class="list-inside list-disc">
                    <li class="py-1">With Stripe: To process payments.
                    </li>
                    <li class="py-1">As required by law: If required to comply with legal obligations or protect our
                        rights.
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">8. Data Security</h2>
                <p>We take the protection of your data seriously and implement appropriate technical and organizational
                    measures to safeguard it. However, no method of transmission over the internet or electronic storage
                    is 100% secure.
                </p>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">9. Your Rights</h2>
                <p>Depending on your location, you may have the following rights:
                </p>
                <ul class="list-inside list-disc">
                    <li class="py-1">To access, update, or delete your personal data.
                    </li>
                    <li class="py-1">To opt out of marketing communications.
                    </li>
                    <li class="py-1">
                        To withdraw consent to data processing where applicable.
                    </li>
                </ul>
                <p>If you wish to exercise your rights, please contact us at [your email address]. </p>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">10. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by
                    posting the new policy on our website or within the Chrome extension. The “Effective Date” at the
                    top of this policy will indicate the most recent update.
                </p>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">11. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul class="list-inside list-disc">
                    <li class="py-1">Email:
                    </li>
                    <li class="py-1">Support Ticket Form:
                    </li>
                </ul>
            </div>
        </div>
    </layout>
</template>

<style scoped></style>
