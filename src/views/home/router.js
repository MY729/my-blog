const home = () => import('./src/index.vue')

export default function (router) {
  router.push({
    path: '/',
    name: 'home',
    component: home
  })
}
