import Vue from 'vue'
import Router from 'vue-router'
import Live from '@/page/Live'
import Recommend from '@/page/Recommend'
import Drama from '@/page/Drama'
import Part from '@/page/Part'
import Event from '@/page/Event'
import Find from '@/page/Find'

Vue.use(Router)
Router.prototype.goBack = function() {　　
    this.isBack = true;
    window.history.go(-1)
}
export default new Router({
    routes: [{
            path: '/',
            name: 'Live',
            redirect: '/live'
        },
        {
            path: '/live',
            name: 'Live',
            component: Live
        },
        {
            path: '/recommend',
            name: 'Recommend',
            component: Recommend
        },
        {
            path: '/drama',
            name: 'Drama',
            component: Drama
        },
        {
            path: '/part',
            name: 'Part',
            component: Part
        },
        {
            path: '/event',
            name: 'Event',
            component: Event
        },
        {
            path: '/find',
            name: 'Find',
            component: Find
        },
    ]
})