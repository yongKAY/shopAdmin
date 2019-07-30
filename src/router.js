import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout'


Vue.use(Router)

export default new Router({
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        component: Layout,
        redirect: '/statistics/index',
        meta: {
            title: '首页',
            icon: 'el-icon-platform-eleme'
        },
        children: [{
            path: '/statistics/index',
            name: 'statistics',
            component: () => import('./views/statistics'),
        }]
    }, {
        path: '/shop',
        component: Layout,
        redirect: '/shop/shoplist',
        meta: {
            title: '店铺管理',
            icon: 'el-icon-platform-eleme'
        },
        children: [{
                path: '/shop/shoplist',
                name: 'shop',
                component: () => import('./views/shop/shoplist'),
                meta: {
                    title: '门店列表',
                    icon: ''
                },
                // children: [{
                //     path: '/shop/index/test1',
                //     name: 'test1',
                //     redirect: '/shop/index/test1/test1-1',
                //     component: () => import('./views/test'),
                //     meta: {
                //         title: '测试1',
                //         icon: ''
                //     },
                //     children: [{
                //         path: '/shop/index/test1/test1-1',
                //         name: 'test1-1',
                //         component: () => import('./views/advertisement'),
                //         meta: {
                //             title: '测试1-1',
                //             icon: ''
                //         },
                //     },
                //     {
                //         path: '/shop/index/test1/test1-2',
                //         name: 'test1-2',
                //         component: () => import('./views/shop/staff'),
                //         meta: {
                //             title: '员工列表',
                //             icon: ''
                //         },
                //     }]
                // }]
            },
            {
                path: '/shop/staff',
                name: 'staff',
                component: () => import('./views/shop/staff'),
                meta: {
                    title: '员工列表',
                    icon: ''
                },
            }
        ]
    },{
        path: '/menu',
        redirect: '/menu/index',
        component: Layout,
        meta: {
            title: '菜单管理',
            icon: 'el-icon-platform-eleme'
        },
        children: [{
            path: 'index',
            name: 'menu',
            component: () => import('./views/menu'),
        }]
    },{
        path: '/financial',
        redirect: '/financial/index',
        component: Layout,
        meta: {
            title: '财务管理',
            icon: 'el-icon-platform-eleme'
        },
        children: [{
            path: '/financial/incomeDetails',
            name: 'incomeDetails',
            component: () => import('./views/financial/incomeDetails'),
            meta: {
                title: '收入明细',
                icon: ''
            },
        },{
            path: '/financial/expenditureDetails',
            name: 'expenditureDetails',
            component: () => import('./views/financial/expenditureDetails'),
            meta: {
                title: '支出明细',
                icon: ''
            },
        }]
    }, {
        path: '/advertisement',
        redirect: '/advertisement/index',
        component: Layout,
        meta: {
            title: '广告管理',
            icon: 'el-icon-platform-eleme'
        },
        children: [{
            path: 'index',
            name: 'advertisement',
            component: () => import('./views/advertisement'),
        }]
    },{
        path: '/workingRecords',
        redirect: '/workingRecords/index',
        component: Layout,
        meta: {
            title: '考勤情况',
            icon: 'el-icon-platform-eleme'
        },
        children: [{
            path: 'index',
            name: 'workingRecords',
            component: () => import('./views/workingRecords'),
        }]
    }, {
        path: '/authority',
        component: Layout,
        redirect: '/authority/index',
        meta: {
            title: '权限管理',
            icon: 'el-icon-platform-eleme'
        },
        children: [{
            path: 'index',
            name: 'authority',
            component: () => import('./views/authority'),
        }]
    }]
})