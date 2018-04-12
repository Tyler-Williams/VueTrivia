<template>
  <div class="start">
    <div class="card w-50 text-center py-4 mx-auto">
      <div class="w-75 mx-auto">
        <img src="../assets/logo.png" class="img-fluid" alt="logo">
      </div>
      <h1 class="bits">Quiz Game</h1>
      <div class="w-50 mx-auto" id="btn-container">
        <button @click="getQuestions()" class="action-button animate green w-100 mb-3">Play</button>
        <router-link to="/score">
          <button class="action-button animate blue w-100">Ranking</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getQuestions () {
      let router = this.$router
      this.$store.dispatch('getQuestions')
        .then(data => {
          console.log('questions recieved')
          router.push({name: 'game'})
        })
        .catch(data => {
          console.log('Questions Failed ', data)
        })
    }
  }
}
</script>

<style>

</style>
