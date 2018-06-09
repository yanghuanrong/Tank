import { wrap, wrapL, wrapH, wrapW, wrapT } from './utilis'
import Axis from './axis'
import Bullet from './bullet'
/**
 * 坦克的控制类。
 * @param {string} 目标坦克.
 */
export default class tank {
  constructor ({life, dir, id, className, status, x, y, t, r, b, l}) {
    this.life = life
    this.dir = dir
    this.status = status
    this.t = t // 移动动画
    this.r = r // 移动动画
    this.b = b // 移动动画
    this.l = l // 移动动画
    this.obj = this.created(id, className, x, y)
    this.speed = 2 // 移动速度
    this.animation = null
    this.bulletSwitch = null // 发射子弹的开关；
    this.bulletNum = 1 // 可以存在的子弹数量；
  }
  /**
     * 创建坦克元素
     * @param {string} id 元素标识
     * @param {string} className 元素样式
     * @param {number} x 坐标
     * @param {number} y 坐标
     * @return {object} 返回坦克dom对象
     */
  created (id, className, x, y) {
    let obj = document.createElement('div')
    obj.id = id
    obj.className = className
    obj.style.top = y + 'px'
    obj.style.left = x + 'px'
    wrap.appendChild(obj)
    return obj
  }
  bullets () {
    if (!this.bullet) {
      let x = this.obj.offsetLeft + this.obj.offsetWidth / 2 - 4
      let y = this.obj.offsetTop + this.obj.offsetHeight / 2 - 4
      new Bullet(this.dir, x, y)
      this.bullet = setInterval(() => {
        console.log(1)
      }, 1000)
    }
  }
  /**
     * 移动
     * @param {string} 移动方向
     */
  move (dir) {
    switch (dir) {
      case 'up':
        this.moveUp()
        break
      case 'right':
        this.moveRight()
        break
      case 'down':
        this.moveDown()
        break
      case 'left':
        this.moveLeft()
        break
      default:
        break
    }
    if (this.animation == null) {
      this.animationStar()
    } else {
      this.animationStop()
    }
  }

  /**
     * 坦克移动方向动画
     */
  animationStar () {
    let positions
    let index = 0

    switch (this.dir) {
      case 'left':
        positions = this.l[this.status]
        break
      case 'right':
        positions = this.r[this.status]
        break
      case 'up':
        positions = this.t[this.status]
        break
      case 'down':
        positions = this.b[this.status]
        break
    }

    const run = () => {
      this.obj.style.backgroundPosition = `${positions[index]}px 0`
      index++
      if (index >= positions.length) {
        index = 0
      }
      this.animation = setTimeout(run, 2)
    }
    run()
  }
  /**
     * 清空坦克移动动画
     */
  animationStop () {
    clearInterval(this.animation)
    this.animation = null
  }
  /**
     * 左移动
     */
  moveLeft () {
    if (this.obj.offsetLeft <= wrapL) {
      this.obj.style.left = 0
    } else {
      this.obj.style.left = this.obj.offsetLeft - this.speed + 'px'
      new Axis(this.obj).then(() => {
        this.obj.style.left = this.obj.offsetLeft + this.speed + 'px'
      })
    }
    this.dir = 'left'
  }

  /**
     * 右移动
     */
  moveRight () {
    if (this.obj.offsetLeft >= wrapW - this.obj.offsetWidth) {
      this.obj.style.left = wrapW - this.obj.offsetWidth + 'px'
    } else {
      this.obj.style.left = this.obj.offsetLeft + this.speed + 'px'
      new Axis(this.obj).then(() => {
        this.obj.style.left = this.obj.offsetLeft - this.speed + 'px'
      })
    }
    this.dir = 'right'
  }

  /**
     * 上移动
     */
  moveUp () {
    if (this.obj.offsetTop <= wrapT) {
      this.obj.style.top = 0
    } else {
      this.obj.style.top = this.obj.offsetTop - this.speed + 'px'
      new Axis(this.obj).then(() => {
        this.obj.style.top = this.obj.offsetTop + this.speed + 'px'
      })
    }
    this.dir = 'up'
  }

  /**
     * 下移动
     */
  moveDown () {
    if (this.obj.offsetTop >= wrapH - this.obj.offsetHeight) {
      this.obj.style.top = wrapH - this.obj.offsetHeight + 'px'
    } else {
      this.obj.style.top = this.obj.offsetTop + this.speed + 'px'
      new Axis(this.obj).then(() => {
        this.obj.style.top = this.obj.offsetTop - this.speed + 'px'
      })
    }
    this.dir = 'down'
  }
}
