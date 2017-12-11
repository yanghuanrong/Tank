import './style/style.css';
import map from './js/map';
/**
 * 渲染当前关卡的地图。
 * @param {json} 接收地图数据.
 * @param {number} 接收目前正在玩的关卡。
 */
class drawMap {
    constructor(map,gk){
        const gkType = map[`level_${gk}`].gkType;
        let el = document.createDocumentFragment();
        for(let crs in gkType){
            for(let col in gkType[crs]){
                let ele = document.createElement('span');
                ele.style.position = 'absolute';
                ele.style.left = `${col * 16}px`;
                ele.style.top = `${crs * 16}px`;
                switch(gkType[crs][col]) {
                    case 0:
                        ele.className = 'bare';
                        ele.type = 0;
                        break;
                    case 1:
                        ele.className = 'wall';
                        ele.type = 1;
                        break;
                    case 2:
                        ele.className = 'iron';
                        ele.type = 2;
                        break;
                    case 3:
                        ele.className = 'flower';
                        ele.type = 3;
                        break;
                    case 7:
                        ele.className = 'wall';
                        ele.type = 7;
                        break;
                    case 9:
                        ele.id = 'lair';
                        ele.type = 9;
                        break;
                }
                el.appendChild(ele)
            }
        }
        document.querySelector('#left').appendChild(el);
    }
}
new drawMap(map,1);