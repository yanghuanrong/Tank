import '../style/style.css'
import MapData from './MapData'
import CreateMap from './CreateMap'
import * as TankData from './TankData'
import TankNPC from './TankNPC'
import Tank from './Tank'

export default class Game {
  constructor () {
    this.level = 1
		this.key = {} // 键盘按键对象
		this.coords = [{x: 0, y: 0}, {x: 192, y: 0}, {x: 384, y: 0}],
		this.npc = []
  }

  // 初始化
  init () {
    const MAP = MapData[this.level].gkType
    const TANK = MapData[this.level].tankType
      //  初始化地图
    new CreateMap(MAP)
    //  初始化敌机
    for(let i = 0; i<3; i++){
      const NPC = TankData[`B${TANK[i]}_TANK`]
      // const NPC = TankData['P1_TANK']
      NPC.x = this.coords[i % 3].x
      NPC.y = this.coords[i % 3].y
      NPC.type = 'NPC'
      if(i === 0){
        NPC.dir = 'right'
      } else {
        NPC.dir = 'left'
      }
      // NPC.dir = 'up'
      this.npc.push(new TankNPC(NPC))
    }
	
  
    this.p1 = new Tank(TankData['P1_TANK'])
  }

  // 游戏开始
  GameStart () {
    this.init()
    requestAnimationFrame(this.updateGame.bind(this))
  }

  // 键盘按下
  keyDown () {
    document.onkeydown = e => {
      e.preventDefault()
      this.key[e.keyCode] = true
      return false
    }
  }

  // 键盘抬起
  keyUp () {
    document.onkeyup = e => {
      e.preventDefault()
      this.key[e.keyCode] = false
      if (e.keyCode === 74) {
        setTimeout(() => {
          clearInterval(this.p1.bullet)
          this.p1.bullet = null
        }, 1000)
      }
    }
  }

  // 玩家一控制
  OnePlayer () {
    if (this.key['87']) {
      this.p1.upMove()
    } else if (this.key['68']) {
      this.p1.rightMove()
    } else if (this.key['83']) {
      this.p1.downMove()
    } else if (this.key['65']) {
      this.p1.leftMove()
    }
    if (this.key['74']) {
      this.p1.bullets()
    }
  }

  // 玩家控制
  ctrlPlayers () {
    this.keyDown()
    this.keyUp()
    this.OnePlayer()
  }

  // 更新游戏
  updateGame () {
    this.npc.forEach(item => {
      item.start()
    })
    this.p1.start()

    this.ctrlPlayers()
    requestAnimationFrame(this.updateGame.bind(this))
  }
}
