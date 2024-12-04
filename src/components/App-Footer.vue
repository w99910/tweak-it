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
                        <a href="/#features">Features</a>
                        <a href="/#why-us">Why Us?</a>
                        <a href="/#pricing">Pricing</a>
                        <a href="https://www.linkedin.com/in/thomas-brillion/">Creator</a>
                    </div>
                </div>
                <div class="flex flex-col gap-y-4 sm:gap-y-8 px-6 sm:px-8">
                    <h2 class="text-primary text-lg">Support</h2>
                    <div class="flex flex-col gap-y-3 sm:gap-y-5">
                        <a href="/#frequently-asked-questions">FAQs</a>
                        <a href="mailto:support@tweakit.today" target="_blank">Contact Us</a>
                    </div>
                </div>
                <div class="flex flex-col gap-y-4 sm:gap-y-8 px-6 sm:px-8">
                    <h2 class="text-primary text-lg">Legal</h2>
                    <div class="flex flex-col gap-y-3 sm:gap-y-5">
                        <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
                        <RouterLink to="/terms-and-conditions">Terms & Conditions</RouterLink>
                    </div>
                </div>
            </div>
            <p class="mt-20">© 2024 Tweak It. All right reserved.</p>
        </div>
    </footer>
</template>

<style scoped></style>
