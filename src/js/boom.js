export default class boom {
  constructor(el){
    this.el = el
    console.log(this.el.offsetTop)
    console.log(this.el.offsetLeft)
    this.el.style.left = this.el.offsetLeft - 32 +'px'
    this.el.style.top = this.el.offsetTop - 32 +'px'
    this.el.className = 'Boom'
    setTimeout(() => {
      document.querySelector('#left').removeChild(this.el);
    },60)
  }
}
