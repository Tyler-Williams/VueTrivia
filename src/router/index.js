import Vue from 'vue'
import Router from 'vue-router'
import Start from '../components/Start'
import Game from '../components/Game'
import Results from '../components/Results'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    }
  ]
})
