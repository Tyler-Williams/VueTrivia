import Vue from 'vue'
import Router from 'vue-router'
import Start from '../components/Start'
import Game from '../components/Game'
import Results from '../components/Results'
import Score from '../components/Score'
import ScoreImport from '../components/Import'

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
    },
    {
      path: '/score',
      name: 'score',
      component: Score
    },
    {
      path: '/import',
      name: 'import',
      component: ScoreImport
    }
  ]
})
