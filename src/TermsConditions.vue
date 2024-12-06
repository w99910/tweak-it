<script setup lang="ts">
import Layout from './layout/Layout.vue';
</script>

<template>
    <layout>
        <div class="flex z-10 flex-col w-full py-8 px-4 text-slate-300 tracking-wide leading-relaxed gap-y-8">
            <h1 class="font-bold text-3xl text-white">Terms & Conditions</h1>
            <p>Effective Date: Dec 2, 2024</p>
            <p>
                Welcome to TweakIt! By downloading, installing, or using this browser extension (the “Service”), you
                agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms,
                you may not use the Service.
            </p>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">1. Acceptance of Terms</h2>
                <p>By using TweakIt browser extension, you acknowledge that you have read, understood, and agree to
                    these Terms and Conditions, as well as our Privacy Policy.
                </p>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">2. Description of Service</h2>
                <p>"TweakIt" is a browser extension that allows users to customize web applications’ background colors
                    and
                    typography. We offer free tier with limited features and paid subscription plans for access to all
                    features.</p>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">3. User Accounts and Subscriptions</h2>
                <ul class="list-inside list-disc">
                    <li class="py-1">Account Registration: To use the extension, you must create an account by logging
                        with your Google account and
                        provide an email address and name. By registering, you agree that all information you provide is
                        accurate
                        and up to date. </li>
                    <li class="py-1">Subscriptions: We offer monthly and yearly subscription plans through Stripe. You
                        can find details about pricing and features on our website.
                    </li>
                    <li class="py-1">Payment Processing: Payments are securely handled by Stripe. By subscribing, you
                        agree to <a target="_blank" href="https://stripe.com/privacy"
                            class="text-primary underline cursor-pointer">Stripe’s Terms of Service and Privacy
                            Policy.</a> </li>
                </ul>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">4. User Responsibilities</h2>
                <p>By using the Service, you agree that you will: </p>
                <ul class="list-inside list-disc">
                    <li class="py-1">Use the Service only for lawful purposes and in compliance with all applicable
                        laws.</li>
                    <li class="py-1">Not reverse engineer, copy, modify, or distribute the extension or any part of its
                        code or functionality.
                    </li>
                    <li class="py-1">Be responsible for safeguarding your google account.</li>
                </ul>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">5. Intellectual Property</h2>
                <p>All intellectual property rights in the Service, including but not limited to design, code,
                    trademarks, and logos, belong to creator of TweakIt browser extension. You are granted a limited,
                    non-exclusive,
                    non-transferable license to use the Service for personal purposes.
                </p>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">6. Limitations of Liability </h2>
                <p>To the fullest extent permitted by law, "TweakIt" and its developer(s) are not liable for:
                </p>
                <ul class="list-inside list-disc">
                    <li class="py-1">Any direct, indirect, incidental, special, or consequential damages resulting from
                        your use of the Service.</li>
                    <li class="py-1">Any issues or damages caused by third-party integrations or websites you use in
                        conjunction with the Service.
                    </li>
                    <li class="py-1">Loss of data or settings resulting from errors, misuse, or updates to the Service.
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">7. Refund Policy</h2>
                <ul class="list-inside list-disc">
                    <li class="py-1">Free Trial (if applicable): If a free trial is offered, you may use it to evaluate
                        the Service before purchasing a subscription.
                    </li>
                    <li class="py-1">Subscriptions: Paid subscriptions are non-refundable. If you experience an issue,
                        please contact us at <a class="text-primary cursor-pointer underline"
                            href="mailto:support@tweakit.today" target="_blank">support@tweakit.today</a>, and we will
                        work to resolve it.
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">8. Termination of Use </h2>
                <p>We reserve the right to suspend or terminate your account or access to the Service at any time,
                    without notice, if we believe you have violated these Terms and Conditions or engaged in fraudulent
                    or abusive activity.
                </p>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">9. Changes to the Service or Terms </h2>
                <p>We reserve the right to modify or discontinue the Service (in whole or in part) or update these Terms
                    and Conditions at any time. We will notify users of any significant changes by posting updates
                    within the extension or on our website. Your continued use of the Service after such changes
                    constitutes your acceptance of the new terms.
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
                <p>If you wish to exercise your rights, please contact us at <a
                        class="text-primary cursor-pointer underline" href="mailto:support@tweakit.today"
                        target="_blank">support@tweakit.today</a>. </p>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">10. Governing Law </h2>
                <p>These Terms and Conditions are governed by the laws of Thailand, without regard to its conflict of
                    laws principles. Any disputes arising from or related to the Service will be resolved in the courts
                    of Thailand.
                </p>
            </div>
            <div class="flex flex-col gap-y-2">
                <h2 class="font-semibold text-xl text-white">11. Contact Information
                </h2>
                <p>If you have any questions, concerns, or issues with the Service, please contact us:
                </p>
                <ul class="list-inside list-disc">
                    <li class="py-1">Email: <a class="text-primary cursor-pointer underline"
                            href="mailto:support@tweakit.today" target="_blank">support@tweakit.today</a>
                    </li>
                </ul>
            </div>
        </div>
    </layout>
</template>

<style scoped></style>
