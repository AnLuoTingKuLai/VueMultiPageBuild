import Vue from 'vue'
import Router from 'vue-router'
import First from '../components/First.vue'
import SecondPage from '../components/Second.vue'

Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'First',
    component: First
  },
  {
    path: '/second',
    name: 'secondpage',
    component: SecondPage
  }
  ]
})
