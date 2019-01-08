import style from '../css/main.css'

var hello = new Vue({
  el: '#hello',
  data: {
    name: ''
  },
  computed: {
    displayName: function() {
      if (this.name == '') {
        return 'World'
      } else {
        return this.name
      }
    }
  }
})