import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Duties from '@/components/MonthManagement'
import Specializer from '@/components/SpecializerManagement'
import Statistics from '@/components/StatisticsManagement'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/duties',
            name: 'Duties',
            component: Duties
        },
        {
            path: '/specializer',
            name: 'Specializer',
            component: Specializer
        },
        {
            path: '/statistics',
            name: 'Statistics',
            component: Statistics
        }
    ]
})