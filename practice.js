var app = new Vue({
  el: '#app',
  data: {
    message: 'Olá Vue!'
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  },
  methods: {
    changeSeen: function(e){
      this.seen = !this.seen
    }
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<div>{{ todo.text }}</div>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetais' },
      { id: 1, text: 'Queijo' },
      { id: 2, text: 'Qualquer outra coisa que humanos podem comer' }
    ]
  }
})