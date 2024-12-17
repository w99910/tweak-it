<script setup lang="ts">

</script>

<template>
    <footer class="bg-green-gradient w-screen py-[8vh] items-center flex justify-center">
        <div class="w-full flex flex-col items-center px-4 sm:w-10/12 md:w-9/12 lg:w-8/12 2xl:w-7/12">
            <img alt="logo" src="../assets/logo.svg">
            <h2 class="text-text-gray italic mt-4 font-medium px-4 text-lg text-center">Ultimate Web Styler Extension -
                Your web,
                your
                style—redefined.</h2>
            <!-- <p class="mt-2 text-text-gray"></p> -->
            <div class="flex sm:flex-row flex-col sm:gap-y-0 gap-y-12 w-full justify-center gap-x-24 mt-12">
                <div class="flex flex-col gap-y-4 sm:gap-y-8 px-6 sm:px-8">
                    <h2 class="text-primary text-lg">Product</h2>
                    <div class="flex flex-col gap-y-3 sm:gap-y-5">
                        <a href="/#features" class="no-underline">Features</a>
                        <a href="/#pricing" class="no-underline">Pricing</a>
                        <a href="https://doc.tweakit.today" target="_blank" class="no-underline">Documentation</a>
                        <a href="/#why-us" class="no-underline">Why Us?</a>
                        <a href="https://www.linkedin.com/in/thomas-brillion/" class="no-underline">Creator</a>
                    </div>
                </div>
                <div class="flex flex-col gap-y-4 sm:gap-y-8 px-6 sm:px-8">
                    <h2 class="text-primary text-lg">Support</h2>
                    <div class="flex flex-col gap-y-3 sm:gap-y-5">
                        <a href="/#frequently-asked-questions" class="no-underline">FAQs</a>
                        <a href="mailto:support@tweakit.today" target="_blank" class="no-underline">Contact Us</a>
                    </div>
                </div>
                <div class="flex flex-col gap-y-4 sm:gap-y-8 px-6 sm:px-8">
                    <h2 class="text-primary text-lg">Legal</h2>
                    <div class="flex flex-col gap-y-3 sm:gap-y-5">
                        <RouterLink to="/privacy-policy" class="no-underline">Privacy Policy</RouterLink>
                        <RouterLink to="/terms-and-conditions" class="no-underline">Terms & Conditions</RouterLink>
                    </div>
                </div>
            </div>
            <div class="flex flex-col mt-20 gap-y-4 sm:gap-y-6">
                <div class="flex flex-wrap gap-x-5 gap-y-4 justify-center items-center">
                    <a href="https://instagram.com/tweakit.today"><svg xmlns="http://www.w3.org/2000/svg" role="img"
                            viewBox="0 0 24 24" aria-hidden="true" class="d-block" width="18" height="18">
                            <title>Instagram</title>
                            <path
                                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                fill="currentColor"></path>
                        </svg></a>
                    <a href="https://tiktok.com/@tweak.it" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
                            role="img" viewBox="0 0 24 24" aria-hidden="true" class="d-block" width="18" height="18">
                            <title>TikTok</title>
                            <path
                                d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                                fill="currentColor"></path>
                        </svg></a>
                    <a href="https://x.com/tweakit" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor"
                            aria-hidden="true" class="d-block" width="16" height="16">
                            <path
                                d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z">
                            </path>
                        </svg>
                    </a>
                    <a href="https://www.producthunt.com/posts/tweakit" target="_blank"><svg height="22px" version="1.1"
                            fill="currentColor" viewBox="0 0 56.7 56.7" width="22px" xml:space="preserve"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g>
                                <g>
                                    <path
                                        d="M28.35,3.5943c-13.6721,0-24.7556,11.0835-24.7556,24.7556c0,13.6722,11.0835,24.7557,24.7556,24.7557    c13.6722,0,24.7556-11.0835,24.7556-24.7557C53.1056,14.6778,42.0222,3.5943,28.35,3.5943z M31.6508,33.3011L31.6508,33.3011    l-7.0141,0.0001v7.4266h-4.9511V15.9721l11.9653,0.0001v-0.0001c4.7853,0,8.6644,3.8793,8.6644,8.6645    C40.3152,29.4219,36.4361,33.3011,31.6508,33.3011z" />
                                </g>
                                <g>
                                    <path
                                        d="M31.6508,20.9233L31.6508,20.9233l-7.0141,0.0001V28.35h7.0141v-0.0001c2.0508,0,3.7132-1.6625,3.7132-3.7133    C35.364,22.5858,33.7016,20.9233,31.6508,20.9233z" />
                                </g>
                            </g>
                        </svg></a>

                </div>
                <p>© 2024 Tweak It. All right reserved.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped></style>
