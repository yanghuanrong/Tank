import './style/style.css';
import map from './js/map';
import tank from './js/tank';

//初始化p1玩家数据
const P1_TANK = {
    life: 3,                // 生命数
    dir: 'up',              // 初始方向
    id: 'me',               // id
    parent: 'left',         //父级元素
    className: 'tank',      // class
    status: 0,              // 0 普通状态；1 一星状态； 2 二星状态； 3 三星状态
    x: 128,                 // 初始的x轴坐标
    y: 384,                 // 初始的y轴坐标
    // 上移动时的动画
    t: [[0, -448], [-32, -480]],
    // 右移动时的动画
    r: [[-896, -1344], [-928, -1376]],
    // 下移动时的动画
    b: [[-1792, -2240], [-1825, -2273]],
    // 左移动时的动画
    l: [[-2688, -3136], [-2720, -3168]],
};

class Game {
    constructor() {
        this.key = {};  // 键盘按键对象
        this.level = 1; // 当前正在游戏的关卡
    }

    //初始化
    init() {
        new map(this.level);
    }

    //游戏开始
    GameStart() {
        this.init();
        this.p1 = new tank(P1_TANK);
        this.time = setInterval(() => {
            this.updateGame();
        }, 32)
    }

    //键盘按下
    keyDown() {
        document.onkeydown = e => {
            e.preventDefault();
            this.key[e.keyCode] = true;
            this.p1.play = true;
            return false
        }
    }

    //键盘抬起
    keyUp() {
        document.onkeyup = e => {
            e.preventDefault();
            this.key[e.keyCode] = false;
            this.p1.play =false;
        }
    }

    //玩家一控制
    OnePlayer() {
        if (this.key['87']) {
            this.p1.move('up');
        } else if (this.key['68']) {
            this.p1.move('right');
        } else if (this.key['83']) {
            this.p1.move('down');
        } else if (this.key['65']) {
            this.p1.move('left');
        }else {
            this.p1.animationStop();
        }
    }

    //玩家控制
    ctrlPlayers() {
        this.keyDown();
        this.keyUp();
        this.OnePlayer();
    }

    //更新游戏
    updateGame() {
        this.ctrlPlayers();
    }
}

new Game().GameStart();
