<template>
  <div class="answers">
    <div class="container">
      <div class="row px-3">
        <div class="col-md-6" v-for="option in options" :key="option">
          <div class="multiple-choice">
            <button
              @click="pickOption(option)"
              class="action-button animate w-100 mb-3"
              v-bind:class='{
                blue: gameActive,
                disabled: !gameActive,
                red: !gameActive,
                yellow: selected == option && selected != correct,
                green: !gameActive && selected == option && selected == correct || !gameActive && selected != correct && option == correct
                }'
              >
              {{option}}
            </button>
          </div>
        </div>
        <button v-if="!gameActive" @click="nextQuestion()" class="action-button animate w-100 blue my-3 bits">
          NEXT >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['answers'],
  data () {
    return {
      options: [],
      correct: '',
      gameActive: true,
      selected: '',
      status: false
    }
  },
  methods: {
    assign () {
      this.options = this.answers.incorrect_answers
      this.correct = this.answers.correct_answer
      this.gameActive = true
      this.selected = ''
    },
    pickOption (selection) {
      this.gameActive = false
      this.selected = selection
      this.status = this.selected === this.correct
    },
    nextQuestion () {
      this.$emit('nextQuestion', this.status)
    }
  },
  created () {
    this.assign()
  },
  watch: {
    '$props': {
      handler: function (val, oldVal) {
        this.assign()
      },
      deep: true
    }
  }
}
</script>

<style sacoped>

</style>
