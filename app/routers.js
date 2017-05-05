import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const routes = [
    {
        path:'/',
        component:require('./App'),
        children:[

        ]
    }
];

const router = new VueRouter({
    routes:routes,
    history:true,
    linkActiveClass:'active', //如果有底部导航栏，这个属性可以为被选中的路由增加相应的选中状态class
});

export default router;