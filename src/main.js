import Vue from 'vue'
import component from './components'
// import './scss/index.scss'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'

Vue.config.productionTip = false

Vue.use(component)

new Vue({
  router
}).$mount('#app')
