<script setup lang="ts">
import Layout from './layout/Layout.vue';

import Welcome from './components/Welcome.vue';
import Features from './components/Features.vue';
import WhyUs from './components/WhyUs.vue';
import Pricing from './components/Pricing.vue';
import Faq from './components/FAQ.vue';
</script>

<template>
    <layout>
        <welcome />
        <features />
        <why-us />
        <pricing />
        <faq />
    </layout>
</template>

<style scoped></style>
