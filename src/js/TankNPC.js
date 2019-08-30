const STAGE = document.querySelector(`#left`)
const STAGE_T = 0
const STAGE_L = 0
const STAGE_R = STAGE.offsetWidth - 32
const STAGE_B = STAGE.offsetHeight - 32

class TankNPC {
	constructor(option) {
		this.init(option)
	}
	init(option) {
		for (let k in option) {
			this[k] = option[k]
		}

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

		let el = document.createElement('div')
		el.className = 'tank'
		el.style.top = this.y + 'px'
		el.style.left = this.x + 'px'

		el.className = "tank";
		el.style.backgroundPosition = `${positions[0]}px 0`

		STAGE.appendChild(el)
		this.el = el
	}

	animationStar() {
		let positions
		let index = 0

		setInterval(() => {
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

			this.el.style.backgroundPosition = `${positions[index]}px 0`
			index++
			if (index >= positions.length) {
				index = 0
			}
		}, 36)
	}

	setPositon(dir) {
		if (this.dir !== dir) {
			if (dir === 'left' || dir === 'right') {
				if (!(this.el.offsetLeft % 16)) {
					let iTop = parseInt((this.el.offsetTop + 8) / 16)
					iTop = iTop * 16
					this.el.style.top = iTop + 'px'
				}
			} else if (dir === 'up' || dir === 'down') {
				if (!(this.el.offsetTop % 16)) {
					let iLeft = parseInt((this.el.offsetLeft + 8) / 16)
					iLeft = iLeft * 16
					this.el.style.left = iLeft + 'px'
				}
			}
		}
	}

	leftMove() {
		this.x += -this.speed
		if (this.x <= STAGE_L || this.axis()) {
			this.x -= -this.speed
		}
		this.el.style.left = this.x + 'px'
	}

	rightMove() {
		this.x += this.speed
		if (this.x >= STAGE_R || this.axis()) {
			this.x -= this.speed
		}
		this.el.style.left = this.x + 'px'
	}

	upMove() {
		this.y += -this.speed
		if (this.y <= STAGE_T || this.axis()) {
			this.y -= -this.speed
		}
		this.el.style.top = this.y + 'px'
	}

	downMove() {
		this.y += this.speed
		if (this.y >= STAGE_B || this.axis()) {
			this.y -= this.speed
		}
		this.el.style.top = this.y + 'px'
	}

	axis() {
		const wall = document.querySelectorAll('.wall')
		const iron = document.querySelectorAll('.iron')
		const allWall = [
			...wall,
			...iron,
		]
		let type = false
		for (let item of allWall) {
			if (this.casks(item, this.el)) {
				type = true
			}
		}
		return type
	}

	casks(obj1, obj2) {
		const O1 = obj1.getBoundingClientRect()
		const O2 = obj2.getBoundingClientRect()
		const L1 = O1.left
		const T1 = O1.top
		const R1 = O1.right
		const B1 = O1.bottom

		const L2 = O2.left
		const T2 = O2.top
		const R2 = O2.right
		const B2 = O2.bottom

		if (L1 >= R2 || T1 >= B2 || R1 <= L2 || B1 <= T2) {
			return false
		}
		return true
	}
	start() {
		this[this.dir + 'Move']()
		// let dirArr = ['up', 'down', 'left', 'right']
		// this.move(this.dir)
		// this.animationStar()
		// this.bullets()
	}


}

export default TankNPC