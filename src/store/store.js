import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    results: {
      correct_answers: 0,
      incorrect_answers: 0
    },
    questions: []
  },
  getters: {},
  mutations: {
    //  TODO: OPTIMIZE
    translateData: (state, questions) => {
      for (let i = 0; i < questions.length; i++) {
        questions[i].question = htmlDecode(questions[i].question)
        questions[i].correct_answer = htmlDecode(questions[i].correct_answer)
        questions[i].incorrect_answers.push(questions[i].correct_answer)

        for (let j = 0; j < questions[i].incorrect_answers.length; j++) {
          questions[i].incorrect_answers[j] = htmlDecode(questions[i].incorrect_answers[j])
        }
        shuffle(questions[i].incorrect_answers)
      }
      state.questions = questions
    },
    setResults (state, answers) {
      state.results.correct_answers = answers.corrects
      state.results.incorrect_answers = answers.incorrect
    }
  },
  actions: {
    getQuestions (context) {
      return new Promise((resolve, reject) => {
        Vue.http.get('https://opentdb.com/api.php?amount=10')
          .then(data => {
            context.commit('translateData', data.body.results)
            resolve(true)
          })
          .catch(data => {
            console.log('Error: ', data)
            reject(data)
          })
      })
    }
  }
})

function htmlDecode (input) {
  let e = document.createElement('div')
  e.innerHTML = input
  return e.childNodes[0].nodeValue
}

function shuffle (a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]]
  }
  return a
}
