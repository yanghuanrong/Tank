import Boom from './boom'
export default class bullet {
  constructor (dir, x, y) {
    this.dir = dir
    this.x = x
    this.y = y
    this.el = null
    this.speed = 3
    this.time = null
    this.created()
  }
  created () {
    this.el = document.createElement('div')
    this.el.style.left = this.x + 'px'
    this.el.style.top = this.y + 'px'
    this.el.className = `bullet ${this.dir}`
    document.querySelector('#left').appendChild(this.el)
    this.move()
  }
  move () {
    switch (this.dir) {
      case 'up':
        this.time = setInterval(() => {
          this.y -= this.speed
          this.el.style.top = this.y + 'px'

          if (this.y <= 0 || this.axis()) {
            this.over()
          }
        }, 20)
        break
      case 'left':
        this.time = setInterval(() => {
          this.x -= this.speed
          this.el.style.left = this.x + 'px'

          if (this.x <= 0 || this.axis()) {
            this.over()
          }
        }, 20)
        break
      case 'down':
        this.time = setInterval(() => {
          this.y += this.speed
          this.el.style.top = this.y + 'px'

          if (this.y >= document.querySelector('#left').offsetHeight || this.axis()) {
            this.over()
          }
        }, 20)
        break
      case 'right':
        this.time = setInterval(() => {
          this.x += this.speed
          this.el.style.left = this.x + 'px'

          if (this.x >= document.querySelector('#left').offsetWidth || this.axis()) {
            this.over()
          }
        }, 20)
        break
      default:
    }
  }
  over () {
    clearInterval(this.time)
    new Boom(this.el)
  }
  /**
     * 坦克与墙的碰撞检测。
     * @return {Boolean} true 碰上 false 没碰
     */
  axis () {
    const wall = document.querySelectorAll('.wall')
    const iron = document.querySelectorAll('.iron')
    const allWall = [
      ...wall,
      ...iron
    ]
    for (let item of allWall) {
      if (this.casks(item)) {
        document.querySelector('#left').removeChild(item)
        return true
      }
    }
    return false
  }

  /**
     * 碰撞检测。
     * @return {Boolean}
     */
  casks (obj1) {
    const L1 = obj1.offsetLeft
    const T1 = obj1.offsetTop
    const R1 = L1 + obj1.offsetWidth
    const B1 = T1 + obj1.offsetHeight

    const L2 = this.el.offsetLeft
    const T2 = this.el.offsetTop
    const R2 = L2 + this.el.offsetWidth
    const B2 = T2 + this.el.offsetHeight

    if (L1 >= R2 || T1 >= B2 || R1 <= L2 || B1 <= T2) {
      return false
    }
    return true
  }
}
