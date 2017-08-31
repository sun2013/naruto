import Vue from 'vue'
import Router from 'vue-router'
import Live from '@/components/Live'
import Recommend from '@/components/Recommend'
import Drama from '@/components/Drama'
import Part from '@/components/Part'
import Event from '@/components/Event'
import Find from '@/components/Find'

Vue.use(Router)
    // 增强原方法，好处是旧的业务模块不需要任何变动
Router.prototype.go = function() {
    this.isBack = true
    window.history.go(-1)
}

// 或者你可以新建一个方法
Router.prototype.goBack = function() {
    this.isBack = true
    this.go(-1)
}
export default new Router({
    routes: [{
            path: '/',
            name: 'Live',
            component: Live,
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