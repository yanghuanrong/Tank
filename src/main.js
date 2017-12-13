import './style/style.css';
import map from './js/map';
import tank from './js/tank';

class Game{
    constructor(){
        this.key = {};  // 键盘按键对象
        this.level = 1; // 当前正在游戏的关卡
    }
    //初始化
    init(){
        new map(this.level);
    }
    //游戏开始
    GameStart(){
        this.init();
        this.p1 = new tank('#me');
        this.time = setInterval(() => {
            this.updateGame();
        },32)
    }
    //键盘按下
    keyDown(){
        document.onkeydown = e => {
            e.preventDefault();
            this.key[e.keyCode] = true;
            return false
        }
    }
    //键盘抬起
    keyUp(){
        document.onkeyup = e => {
            e.preventDefault();
            this.key[e.keyCode] = false;
        }
    }
    //玩家一控制
    OnePlayer(){
        if(this.key['87']){
            this.p1.move('up');
        }else if(this.key['68']){
            this.p1.move('right');
        }else if(this.key['83']){
            this.p1.move('down');
        }else if(this.key['65']){
            this.p1.move('left');
        }
    }
    //玩家控制
    ctrlPlayers(){
        this.keyDown();
        this.keyUp();
        this.OnePlayer();
    }
    updateGame(){
        this.ctrlPlayers();
    }
}

const TKGame = new Game();
TKGame.GameStart();
