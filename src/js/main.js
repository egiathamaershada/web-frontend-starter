import style from '../css/main.css'
import img from '../img/e.svg';

let imageEl = document.getElementById("image")
let imgEl = document.createElement("img")
imgEl.setAttribute("data-src", img)
imgEl.setAttribute("uk-img",'')
imageEl.appendChild(imgEl)

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