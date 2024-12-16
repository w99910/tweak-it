import { createWebHistory, createRouter } from 'vue-router'

import PrivacyPolicy from './PrivacyPolicy.vue'
import Home from './Home.vue'
import TermsConditions from './TermsConditions.vue'
import Welcome from './Welcome.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/privacy-policy', component: PrivacyPolicy },
    { path: '/terms-and-conditions', component: TermsConditions },
    { path: '/welcome', component: Welcome },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router