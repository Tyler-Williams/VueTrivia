<template>
  <div class="score">
    <div class="card w-75 animated bounce text-center py-4 px-5 mb-3 mx-auto">
      <h3 class="bits">Ranking</h3>
      <div class="container mb-4 px-5">
        <div class="d-flex justify-content-between mb-4">
          <span class="bits">Username</span>
          <span class="bits text-right">Score</span>
        </div>
        <div class="d-flex justify-content-between bits" v-for="score in scores" :key="score.score">
          <span>{{score.username}}</span>
          <span>{{score.score}}</span>
        </div>
      </div>
      <router-link to="/" class="w-100 d-flex justify-content-center">
      <button class="w-50 action-button animate green bits">
        Back
      </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import firebaseConfig from '../private/firebase'

export default {
  data () {
    return {
      scores: []
    }
  },
  created () {
    this.$http.get(firebaseConfig.firebaseLink)
      .then(data => {
        let arr = []
        for (let x in data.body) {
          arr.push(data.body[x])
        }
        this.scores = arr.sort((a, b) => a.score < b.score ? 1 : -1)
        console.log(this.scores)
      })
      .catch(data => {
        console.log('Error ', data)
      })
  }
}
</script>

<style scoped>

</style>
