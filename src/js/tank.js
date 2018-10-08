import Bullet from './Bullet'
/**
 * 坦克的控制类。
 * @param {string} 目标坦克.
 */
export default class tank {
	constructor(obj) {
		this.befdir = obj.dir
		this.dir = obj.dir
		this.oParent = document.querySelector(`#left`)
		this.status = obj.status
		this.t = obj.t // 移动动画
		this.r = obj.r // 移动动画
		this.b = obj.b // 移动动画
		this.l = obj.l // 移动动画
		this.obj = this.created(obj.x, obj.y)
		this.speed = obj.speed // 移动速度
		this.obj.type = 'play'
		this.bulletSpeed = obj.bulletSpeed || 2
		this.animation = null
		this.bulletNum = [] // 可以存在的子弹数量；
	}
	/**
	 * 创建坦克元素
	 * @param {number} x 坐标
	 * @param {number} y 坐标
	 * @return {object} 返回坦克dom对象
	 */
	created(x, y) {
		let positions

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

		let obj = document.createElement('div')
		obj.className = 'tank create'
		obj.style.top = y + 'px'
		obj.style.left = x + 'px'
		
		setTimeout(() => {
			obj.className = "tank";
			obj.style.backgroundPosition = `${positions[0]}px 0`
		}, 800)
		
		this.oParent.appendChild(obj)

		return obj
	}
	// 子弹发射
	bullets() {
// 		if (!this.bullet) {
// 			let x = this.obj.offsetLeft + this.obj.offsetWidth / 2 - 4
// 			let y = this.obj.offsetTop + this.obj.offsetHeight / 2 - 4
// 			let bullet1 = null
// 			if (this.bulletNum.length < 1) {
// 				bullet1 = new Bullet(this.dir, x, y, this.status, this.speed, this.obj.type)
// 				this.bulletNum.push(bullet1)
// 			}
// 			try {
// 				bullet1.evas(() => {
// 					this.bulletNum = []
// 				})
// 			} catch (e) {}
// 		}
	}
	/**
	 * 移动
	 * @param {string} 移动方向
	 */
	move(dir) {
		this.setPositon(dir)
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
	animationStar() {
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
	animationStop() {
		clearInterval(this.animation)
		this.animation = null
	}
	/**
	 * 转向的时候重置位置
	 */
	setPositon(dir) {
		if (this.dir !== dir) {
			if (dir === 'left' || dir === 'right') {
				if (!(this.obj.offsetLeft % 16)) {
					let iTop = parseInt((this.obj.offsetTop + 8) / 16)
					iTop = iTop * 16
					this.obj.style.top = iTop + 'px'
				}
			} else if (dir === 'up' || dir === 'down') {
				if (!(this.obj.offsetTop % 16)) {
					let iLeft = parseInt((this.obj.offsetLeft + 8) / 16)
					iLeft = iLeft * 16
					this.obj.style.left = iLeft + 'px'
				}
			}
		}
	}
	/**
	 * 左移动
	 */
	moveLeft() {
		this.dir = 'left'
		if (this.obj.offsetLeft <= 0) {
			this.setDir(this.dir)
			this.obj.style.left = 0
		} else {
			this.obj.style.left = this.obj.offsetLeft - this.speed + 'px'
			this.axis(this.obj).then(() => {
				this.setDir(this.dir)
				this.obj.style.left = this.obj.offsetLeft + this.speed + 'px'
			}).catch(() => {})
		}
	}

	/**
	 * 右移动
	 */
	moveRight() {
		this.dir = 'right'
		if (this.obj.offsetLeft >= this.oParent.offsetWidth - this.obj.offsetWidth) {
			this.setDir(this.dir)
			this.obj.style.left = this.oParent.offsetWidth - this.obj.offsetWidth + 'px'
		} else {
			this.obj.style.left = this.obj.offsetLeft + this.speed + 'px'
			this.axis(this.obj).then(() => {
				this.setDir(this.dir)
				this.obj.style.left = this.obj.offsetLeft - this.speed + 'px'
			}).catch(() => {})
		}
	}

	/**
	 * 上移动
	 */
	moveUp() {
		this.dir = 'up'
		if (this.obj.offsetTop <= 0) {
			this.setDir(this.dir)
			this.obj.style.top = 0
		} else {
			this.obj.style.top = this.obj.offsetTop - this.speed + 'px'
			this.axis(this.obj).then(() => {
				this.setDir(this.dir)
				this.obj.style.top = this.obj.offsetTop + this.speed + 'px'
			}).catch(() => {})
		}
	}

	/**
	 * 下移动
	 */
	moveDown() {
		this.dir = 'down'
		if (this.obj.offsetTop >= this.oParent.offsetHeight - this.obj.offsetHeight) {
			this.setDir(this.dir)
			this.obj.style.top = this.oParent.offsetHeight - this.obj.offsetHeight + 'px'
		} else {
			this.obj.style.top = this.obj.offsetTop + this.speed + 'px'
			this.axis(this.obj).then(() => {
				this.setDir(this.dir)
				this.obj.style.top = this.obj.offsetTop - this.speed + 'px'
			}).catch(() => {})
		}
	}

	axis(el) {
		const wall = document.querySelectorAll('.wall')
		const iron = document.querySelectorAll('.iron')
		const allWall = [
			...wall,
			...iron,
		]
		return new Promise((resolve, reject) => {
			for (let item of allWall) {
				if (this.casks(item, el)) {
					resolve(item)
				}
			}
			reject(el)
		})
	}
	/**
	 * 碰撞检测。
	 * @return {Boolean}
	 */
	casks(obj1, obj2) {
		const L1 = obj1.offsetLeft
		const T1 = obj1.offsetTop
		const R1 = L1 + obj1.offsetWidth
		const B1 = T1 + obj1.offsetHeight

		const L2 = obj2.offsetLeft
		const T2 = obj2.offsetTop
		const R2 = L2 + obj2.offsetWidth
		const B2 = T2 + obj2.offsetHeight

		if (L1 >= R2 || T1 >= B2 || R1 <= L2 || B1 <= T2) {
			return false
		}
		return true
	}

	setDir() {}
}
