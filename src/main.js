import './style/style.css';
import map from './js/map';
import tank from './js/tank';
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
                el.appendChild(ele);
            }
        }
        document.querySelector('#left').appendChild(el);
    }
}

new drawMap(map,1);
let p1 = new tank('#me');

/**
 * 坦克与墙的碰撞检测。
 * @param {object} 目标坦克.
 * @return {json} 返回方向是否可走。
 */
function axis(obj,dir) {
    let mapChunk = document.querySelector('#left').getElementsByTagName('span');
    for(let i = 0; i<mapChunk.length; i++){
        if(mapChunk[i].offsetTop == obj.y && mapChunk[i].offsetLeft == obj.x){
            switch (dir){
                case 'up':
                    return mapChunk[i-26].type && mapChunk[i-25].type ? false : true;
                    break;
                case 'down':
                    break;
                case 'left':
                    return mapChunk[i-1].type && mapChunk[i+25].type ? false : true;
                    break;
                case 'right':
                    return mapChunk[i+2].type && mapChunk[i+28].type ? false : true
                    break;
            }
        }
    }
}

//p1玩家控制
function dir(dir) {
    console.log(dir)
    switch (dir){
        case 87:
            p1.moveStar('up',axis(p1,'up'));
            break;
        case 68:
            p1.moveStar('right',axis(p1,'right'));
            break;
        case 63:
            p1.moveStar('down',axis(p1));
            break;
        case 65:
            p1.moveStar('left',axis(p1,'left'));
            break;
    };
}
document.addEventListener('keydown',e => {
    dir(e.keyCode);
});
document.addEventListener('keyup',()=> {
    p1.moveStop();
});
