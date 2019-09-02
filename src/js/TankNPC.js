import {STAGE, STAGE_T, STAGE_L, STAGE_R, STAGE_B, random} from './utils'

class TankNPC {
	constructor(option) {
		this.init(option)
	}
	init(option) {
		for (let k in option) {
			this[k] = option[k]
		}
		this.count = 0
		this.restCount = 100

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

		const el = document.createElement('div')
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
		}, 300)
	}

	leftMove() {
		const initX = this.x
		this.x -= this.speed
		if (this.x <= STAGE_L || this.axis() || this.axisTank()) {
			this.x = initX
			this.restDir()
		}
		this.el.style.left = this.x + 'px'
	}

	rightMove() {
		const initX = this.x

		this.x += this.speed
		if (this.x >= STAGE_R || this.axis() || this.axisTank()) {
			this.x = initX
			this.restDir()
		}
		this.el.style.left = this.x + 'px'
	}

	upMove() {
		const initY = this.y
		this.y += -this.speed

		if (this.y <= STAGE_T || this.axis() || this.axisTank()) {
			this.y = initY
			this.restDir()
		}
		
		this.el.style.top = this.y + 'px'
	}

	downMove() {
		const initY = this.y
		this.y += this.speed
		if (this.y >= STAGE_B || this.axis() || this.axisTank()) {
			this.y = initY
			this.restDir()
		}
		this.el.style.top = this.y + 'px'
	}

	setPositon(dir) {
		if (dir === 'left' || dir === 'right') {
			if (!(this.el.offsetLeft % 16)) {
				let iTop = parseInt((this.el.offsetTop + 8) / 16)
				iTop = iTop * 16
				this.y = iTop
				this.el.style.top = iTop + 'px'
			}
		} else if (dir === 'up' || dir === 'down') {
			if (!(this.el.offsetTop % 16)) {
				let iLeft = parseInt((this.el.offsetLeft + 8) / 16)
				iLeft = iLeft * 16
				this.x = iLeft
				this.el.style.left = iLeft + 'px'
			}
		}
	}

	restDir(){
		const dirArr = ['up', 'down', 'left', 'right']
		const newDirArr = [] 
		dirArr.map((item) => {
			if(item !== this.dir){
				newDirArr.push(item)
			}
		})
		
		this.dir = newDirArr[Math.floor(Math.random()*3)]
		
		this.setPositon(this.dir)
		this[this.dir + 'Move']()
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
	
	axisTank(){
		const tank = document.querySelectorAll('.tank')
		for (let item of tank) {
			const xVal = Math.abs(this.x - item.offsetLeft)
			const yVal = Math.abs(this.y - item.offsetTop)

			if (this.dir === 'left' || this.dir === 'right') {
				if (xVal < 32 && xVal > 26 && yVal < 32) { return true; }
			} else {
				if (yVal < 32 && yVal > 26 && xVal < 32) { return true; }
			}
		}
		return false
	}

	start() {
		this[this.dir + 'Move']()
		this.animationStar()

		this.count ++
		if(this.count > this.restCount){
			this.count = 0
			this.restCount = random(80, 180)
			console.log(this.restCount)
			this.restDir()
		}
	}
}


export default TankNPC