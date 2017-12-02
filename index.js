var app = new Vue({
  el: '#app',
  data: {
    title: 'Introdução!',
    message: 'Estou realizando o curso de Vue JS da Udemy',
    link: 'https://www.google.com.br',
    flink: '<h3><a href="https://www.google.com.br">Google</a></h3>'
  },
  methods: {
    changeTitle: function(event){
      this.title = event.target.value;
    },
    putTitle: function(){
      return this.title;
    }
  }
})

var ex1 = new Vue({
  el: '#exercise1',
  data: {
    name: 'Jonathan Rezende',
    age: '27',
    img: 'https://marketingdeconteudo.com/wp-content/uploads/2017/01/formatos-de-imagem-2.jpg'
  },
  methods: {
    randomNumber: function(){
      return Math.random();
    },
    age3x: function(){
      return (this.age * 3)
    }
  }
})

var app2 = new Vue({
  el: '#app2',
  data: {
    counter: 1,
    x: 0,
    y: 0
  },
  methods: {
    increase: function(step){
      this.counter += step;
    },
    updateCoordinates: function(event){
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
})

var ex2 = new Vue({
  el: '#exercise2',
  data: {
    value: 'value'
  },
  methods: {
    alertBtn: function(){
      alert('Clicked!');
    }
  }
})

var ex3 = new Vue({
  el: '#exercise3',
  data: {
    value: 0,
    timeOut: 5000
  },
  computed: {
    result: function(){
      return this.value < 37 ? 'not there yet' : 'done';
    }
  },
  watch: {
    result: function(){
      var vm = this;
      setTimeout(function() {
        vm.value = 0;
      }, this.timeOut);
    }
  }
})

var ex4 = new Vue({
  el: '#exercise4',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true,
      userClass: ''
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
      vm.effectClasses.highlight = !vm.effectClasses.highlight;
      vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    }
  }
});