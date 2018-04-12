<template>
  <div class="results">
    <div class="card w-75 animated bounce text-center py-4 mb-3 mx-auto">
      <doughtnut />
      <div class="container">
        <router-link to="/import">
        <button class="action-button animate blue my-2 w-100">
          Upload Score
        </button>
        </router-link>
        <router-link to="/">
          <button class="action-button animate green w-100">
            Home Page
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Doughtnut from './Doughnut'

export default {
  name: 'results',
  data () {
    return {
    }
  },
  components: {
    Doughtnut
  }
}
</script>

<style scoped>

</style>
