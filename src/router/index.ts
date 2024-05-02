import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  // 配置路由对象

  // 必须指定路由模式
  history: createWebHashHistory(),	// history 模式
  routes: [   // 路由配置
    {
      path: '/index',
      name: "Index",
      component: () => import('../index/index.vue')	//路由懒加载
    },
    {
      // 重定向
      path: '/',
      redirect: '/index'
    }
  ]
})

// 暴露 router 对象
export default router