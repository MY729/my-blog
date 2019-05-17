import Vue from 'vue'
import Router from  'vue-router'
import App from '@/views/App.vue'

const requireAll = requireContext => requireContext.keys().map(requireContext)

const routerChildrenContext = require.context('@/views/', true, /router\.js$/)

Vue.use(Router)

let routes = []

let rootRouter = {
  path: '/',
  component: App,
  children: []
}

// 重定向路由
let redirectRoute = {
  path: '*',
  redirect: '/'
}

const routerChildren = requireAll(routerChildrenContext)

routerChildren.map((route) => {
  route.default(rootRouter.children)
})

let mode = 'history'

const relRoutes = routes.concat([rootRouter, redirectRoute])
export default new Router({
  mode: mode,
  routes: relRoutes
})
