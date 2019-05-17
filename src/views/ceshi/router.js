const A = () => import('./src/a.vue')
const B = () => import('./src/b.vue')

export default function (router) {
  router.push({
    path: '/a',
    name: 'a',
    component: A
  }, {
    path: '/b',
    name: 'b',
    component: B
  })
}