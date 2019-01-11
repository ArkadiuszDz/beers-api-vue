import Vue from 'vue';
import Router from 'vue-router';
import MainContent from '@/components/MainContent';
import my_component from '@/components/my_component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: MainContent
    },
    {
      path: '/my_component',
      name: 'my_component',
      component: my_component
    }
  ]
})
