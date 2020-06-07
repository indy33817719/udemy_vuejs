Vue.component('button-counter', {
  data: function() {
    return {
      counter: 0
    }
    },
    template: '<button v-on:click="counter++">{{ counter }}</button>'
  })

var app = new Vue({
  el: '#app',
})