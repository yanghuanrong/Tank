import TankNPC from './TankNPC'
/**
 * 坦克的控制类。
 * @param {string} 目标坦克.
 */
export default class tank extends TankNPC{
	constructor(obj) {
		super(obj)
	}
	restDir(){
	}
	move(dir){
		if(this.dir !== dir){
			this.setPositon(dir)
		}
		this.dir = dir
		this[this.dir + 'Move']()
		this.animationStar()
	}
}
