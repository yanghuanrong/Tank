import {STAGE, STAGE_T, STAGE_L, STAGE_R, STAGE_B, random} from './utils'
import map from './CreateMap'

class TankNPC {
	constructor(option) {
		this.init(option)
	}
	init(option) {
		for (let k in option) {
			this[k] = option[k]
		}
		
		this.dirIndex = 0
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

		this.el.style.backgroundPosition = `${positions[this.dirIndex]}px 0`
		this.dirIndex++
		if (this.dirIndex >= positions.length) {
			this.dirIndex = 0
		}
	}

	leftMove() {
		if (this.el.offsetLeft <= STAGE_L) {
			this.el.style.left = STAGE_L
			this.restDir()
    } else {
			if(this.axis()){
				this.restDir()
			} else if( this.axisTank()) {
				if(this.type === 'NPC'){
					this.el.style.left = this.el.offsetLeft + this.speed + 'px'
				}
				this.restDir()
			} else {
				this.el.style.left = this.el.offsetLeft - this.speed + 'px'
			}
		}
	}

	rightMove() {
		if (this.el.offsetLeft >= STAGE_R) {
			this.el.style.left = STAGE_R
			this.restDir()
    } else {
			if(this.axis()){
				this.restDir()
			}else if(this.axisTank()){
				if(this.type === 'NPC'){
					this.el.style.left = this.el.offsetLeft - this.speed + 'px'
				}
				this.restDir()
			} else {
				this.el.style.left = this.el.offsetLeft + this.speed + 'px'
			}
		}
	}

	upMove() {
		if (this.el.offsetTop <= STAGE_T) {
			this.el.style.top = STAGE_T
			this.restDir()
    } else {
			if(this.axis()){
				this.restDir()
			} else if(this.axisTank()){
				if(this.type === 'NPC'){
					this.el.style.top = this.el.offsetTop + this.speed + 'px'
				}
				this.restDir()
			} else {
				this.el.style.top = this.el.offsetTop - this.speed + 'px'
			}
		}
	}

	downMove() {
		if (this.el.offsetTop >= STAGE_B) {
			this.el.style.top = STAGE_B
			this.restDir()
    } else {
			if (this.axis()) {
				this.restDir()
			} else if(this.axisTank()){
				if(this.type === 'NPC'){
					this.el.style.top = this.el.offsetTop - this.speed + 'px'
				}
				this.restDir()
			} else {
				this.el.style.top = this.el.offsetTop + this.speed + 'px'
			}
		}
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
		const Ban = (data) => {
			for(let item of data){
				if(item === 1 || item === 2 || item === 7){
					return true
				}
			}
			return false
		}

		if (!(this.el.offsetLeft % 16)) {
			const row = parseInt((this.el.offsetTop + 8) / 16)

			if(this.dir === 'left'){
				const col = parseInt((this.el.offsetLeft + 8) / 16) - 1

				const L1 = map.mapData[row][col]
				const L2 = map.mapData[row + 1][col]
				return Ban([L1, L2])
			}
			if(this.dir === 'right'){
				const col = parseInt((this.el.offsetLeft + 8) / 16) + 2
				
				const L1 = map.mapData[row][col]
				const L2 = map.mapData[row + 1][col]
				return Ban([L1, L2])
			}
		}

		if (!(this.el.offsetTop % 16)) {
			const col = parseInt((this.el.offsetLeft + 8) / 16)

			if(this.dir === 'up'){
				const row = parseInt((this.el.offsetTop + 8) / 16) - 1

				const L1 = map.mapData[row][col]
				const L2 = map.mapData[row][col + 1]
				return Ban([L1, L2])
			}
			if(this.dir === 'down'){
				const row = parseInt((this.el.offsetTop + 8) / 16) + 2
				
				const L1 = map.mapData[row][col]
				const L2 = map.mapData[row][col + 1]
				return Ban([L1, L2])
			}
		}

		return false
	}
	
	axisTank(){
		const tank = document.querySelectorAll('.tank')
		
		for (let item of tank) {
			if(item !== this.el){
				const xVal = Math.abs(this.el.offsetLeft - item.offsetLeft)
				const yVal = Math.abs(this.el.offsetTop - item.offsetTop)
	
				// if (this.dir === 'left' || this.dir === 'right') {
				// 	if (xVal <= 32 && xVal > 26 && yVal <= 32) { return true; }
				// } else {
				// 	if (yVal <= 32 && yVal > 26 && xVal <= 32) { return true; }
				// }

				// if (this.dir === 'left' || this.dir === 'right') {
				// 	if (xVal <= 32 && yVal <= 16 && xVal > 26) { return true; }
				// } else {
				// 	if (yVal <= 32 && xVal <= 16 && yVal > 26) { return true; }
				// }

				if (this.dir === 'left' || this.dir === 'right') {
					if (xVal < 32 && xVal > 26 && yVal < 32) { return true; }
				} else {
					if (yVal < 32 && yVal > 26 && xVal < 32) { return true; }
				}
				

			}
		}
		return false
	}
	
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

	start() {
		this[this.dir + 'Move']()
		this.animationStar()

		this.count ++
		if(this.count > this.restCount){
			this.count = 0
			this.restCount = random(80, 180)
			this.restDir()
		}
	}
}


export default TankNPC