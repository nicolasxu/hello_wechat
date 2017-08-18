import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CaseForm from '@/components/CaseForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CaseForm',
      component: CaseForm
    }
  ]
})
