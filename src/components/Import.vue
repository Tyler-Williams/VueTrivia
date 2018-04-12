<template>
  <div class="import">
    <div class="card w-75 animated bounce text-center py-4 mb-3 mx-auto">
      <h3 class="bit mb-3">Upload Score</h3>
      <div class="container">
        <label for="user" class="bits w-100 bold mt-2 mb-0">Your Score</label>
        <label for="user" class="buts w-100">{{upload.score}}</label>
        <label for="user" class="bits w-100 bold mt-2 mb-0">Enter your username:</label>
        <input type="text" class="bit w-75" v-model="upload.username" maxlength="12">
        <button class="action-button animate blue mt-4 mb-2 w-100" @click="sendData">Upload</button>
        <router-link to="/results">
          <button class="action-button animate green my-2 w-100">Back</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseConfig from '../private/firebase'
export default {
  data () {
    return {
      upload: {
        username: '',
        score: ''
      }
    }
  },
  methods: {
    sendData () {
      console.log(this.upload)
      this.$http.post(firebaseConfig.firebaseLink, this.upload)
        .then(data => {
          console.log(data)
          this.$router.push({name: 'start'})
        })
        .catch(data => {
          console.log('Error: ', data)
        })
    }
  },
  created () {
    this.upload.score = this.$store.getters.getScore
  }
}
</script>

<style scoped>

</style>
