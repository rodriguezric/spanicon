import Vue from 'vue'
import VueRouter from 'vue-router'

import Conjugate from './components/Conjugate'
import Translate from './components/Translate'
import Answers from './components/Answers'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: "/",
            component: Conjugate
        },
        {
            path: "/translate",
            component: Translate
        },
        {
            path: "/answers",
            component: Answers
        }
    ]
})
export default router