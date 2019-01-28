import Vue from 'vue';
import Router from 'vue-router';
import MainContent from '@/components/MainContent';
import BeerDetails from '@/components/BeerDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: MainContent
    },
    {
      path: '/:beerName',
      name: 'BeerDetails',
      component: BeerDetails
    }
  ]
})
