import Vue from 'vue'
import VueRouter from 'vue-router'

import Conjugate from './components/Conjugate'
import Translate from './components/Translate'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: "/",
            component: Conjugate
        },
        {
            path: "/translate",
            component: Translate
        }
    ]
})
export default router