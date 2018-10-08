import Tank from './Tank'

class TankNPC extends Tank {
	constructor(obj) {
		super(obj)
	}
	start(){
		setTimeout(() => {
			this.obj.type = 'npc'
			this.move(this.dir)
			this.bullets()
		}, 800)
	}
	setDir(dir){
		let dirArr = ['up', 'down', 'left', 'right']
		this.dir = dirArr[Math.ceil(Math.random()*dirArr.length) - 1]
		this.move(this.dir)
	}
}

export default TankNPC