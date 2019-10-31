/*
路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'

Vue.use(VueRouter)

export default new VueRouter({
    //n个路由
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                path:'/home/news', //path左侧的斜杠永远代表根路径
                component:News
             },
             {
                 path:'message',//简化写法
                 component:Message
             }
            ]
        },
        {
            path:'/',
            redirect:'/about'
        }
    ]
})