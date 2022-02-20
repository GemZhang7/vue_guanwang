//这个文件专门用于创建整个应用的路由器
//导入vuerouter插件（构造函数使用）
import VueRouter from "vue-router";
//引入组件
import About from '../components/About'
import Home from '../components/Home'

export default new VueRouter({
    routes: [{
            path: '/about',
            componet: About
        },
        {
            path: '/home',
            componet: Home
        }
    ]
})