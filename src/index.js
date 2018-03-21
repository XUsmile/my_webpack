import './index.less'
import './index.css'

(function(){
  var persen = function (man) {
    this.name = man.name,
    this.age = man.age,
    this.sex = man.sex
  }

  persen.prototype.action = () => {
    console.log('goff')
  }

  persen.prototype.speak = () => {
    console.log('hello')
  }

  window.persen = persen
}())