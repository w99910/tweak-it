<script setup lang="ts">
import Layout from './layout/Layout.vue';

import Welcome from './components/Welcome.vue';
import Features from './components/Features.vue';
import Pricing from './components/Pricing.vue';
import Faq from './components/FAQ.vue';
</script>

<template>
    <layout>
        <welcome />
        <features />
        <pricing />
        <faq />
    </layout>
</template>

<style scoped></style>
