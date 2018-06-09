import Boom from './boom'
import Axis from './axis'
import { wrap, wrapL, wrapH, wrapW, wrapT } from './utilis'

export default class bullet {
  constructor (dir, x, y) {
    this.dir = dir
    this.x = x
    this.y = y
    this.el = null
    this.speed = 3
    this.time = null
    this.moveTime = 20
    this.created()
  }
  created () {
    this.el = document.createElement('div')
    this.el.style.left = this.x + 'px'
    this.el.style.top = this.y + 'px'
    this.el.className = `bullet ${this.dir}`
    wrap.appendChild(this.el)
    this.move()
  }
  move () {
    switch (this.dir) {
      case 'up':
        this.time = setInterval(() => {
          this.y -= this.speed
          this.el.style.top = this.y + 'px'

          if (this.y <= wrapT) {
            this.over()
          }
          new Axis(this.el).then((el) => {
            wrap.removeChild(el)
          })
        }, this.moveTime)
        break
      case 'left':
        this.time = setInterval(() => {
          this.x -= this.speed
          this.el.style.left = this.x + 'px'

          if (this.x <= wrapL) {
            this.over()
          }
          new Axis(this.el).then((el) => {
            wrap.removeChild(el)
          })
        }, this.moveTime)
        break
      case 'down':
        this.time = setInterval(() => {
          this.y += this.speed
          this.el.style.top = this.y + 'px'

          if (this.y >= wrapH) {
            this.over()
          }
          new Axis(this.el).then((el) => {
            wrap.removeChild(el)
          })
        }, this.moveTime)
        break
      case 'right':
        this.time = setInterval(() => {
          this.x += this.speed
          this.el.style.left = this.x + 'px'

          if (this.x >= wrapW) {
            this.over()
          }
          new Axis(this.el).then((el) => {
            wrap.removeChild(el)
          })
        }, this.moveTime)
        break
      default:
    }
  }
  over () {
    clearInterval(this.time)
    new Boom(this.el)
  }
}
