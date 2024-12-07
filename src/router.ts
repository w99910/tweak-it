import { createWebHistory, createRouter } from 'vue-router'

import PrivacyPolicy from './PrivacyPolicy.vue'
import Home from './Home.vue'
import TermsConditions from './TermsConditions.vue'
import Doc from './Doc.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/privacy-policy', component: PrivacyPolicy },
    { path: '/terms-and-conditions', component: TermsConditions },
    { path: '/documentation', component: Doc },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router