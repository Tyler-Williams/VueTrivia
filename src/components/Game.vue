<template>
  <div class="game">
    <div class="card w-75 text-center py-4 mx-auto">
      <question v-bind:question='question' />
      <answers v-bind:answers='object' v-on:nextQuestion='getQuestion($event)' />
    </div>
  </div>
</template>

<script>
import Question from './Question'
import Answers from './Answers'

export default {
  components: {
    question: Question,
    answers: Answers
  },
  data () {
    return {
      questions: this.$store.state.questions,
      question: '',
      object: {},
      result: {
        corrects: 0,
        incorrects: 0
      },
      gameActive: true
    }
  },
  methods: {
    getQuestion (answer) {
      if (answer) {
        this.result.corrects++
      }
      if (answer === false) {
        this.result.incorrects++
      } else if (answer === null) {}
      if (this.questions[0]) {
        this.gameActive = true
        this.object = this.questions.shift()
        this.question = this.object.question
      } else {
        this.$store.commit('setResults', this.result)
        this.$router.push({ name: 'results' })
      }
    }
  },
  created () {
    this.getQuestion()
  }
}
</script>

<style sacoped>
.game{
  min-height: 100vh;
}
</style>
