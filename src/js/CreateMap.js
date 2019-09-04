import MapData from './MapData'
import {STAGE} from './utils'

class drawMap {
  constructor () {
		
	}
	render(level){
		STAGE.innerHTML = ''
		this.mapData = MapData[level].gkType
		this.tankData = MapData[level].tankType
		const gkType = this.mapData
		let el = document.createDocumentFragment()
		for (let crs in gkType) {
			for (let col in gkType[crs]) {
				let ele = document.createElement('span')
				ele.style.position = 'absolute'
				ele.style.left = `${col * 16}px`
				ele.style.top = `${crs * 16}px`
				switch (gkType[crs][col]) {
					case 0:
						ele.className = 'bare'
						ele.type = 0
						break
					case 1:
						ele.className = 'wall'
						ele.type = 1
						break
					case 2:
						ele.className = 'iron'
						ele.type = 2
						break
					case 3:
						ele.className = 'flower'
						ele.type = 3
						break
					case 7:
						ele.className = 'wall'
						ele.type = 7
						break
					case 9:
						ele.id = 'lair'
						ele.type = 9
						break
				}
				el.appendChild(ele)
			}
		}
		STAGE.appendChild(el)
	}
}


export default new drawMap()
