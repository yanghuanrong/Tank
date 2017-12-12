/**
 * 坦克的控制类。
 * @param {string} 目标坦克.
 * @param {string} 坦克的方向.
 * @param {number} 坦克的x坐标.
 * @param {number} 坦克的y坐标.
 */
export default class tank{
    constructor(id,dir,x,y){
        this.el = document.querySelector(id);
        this.speed = 10;                //移动速度
        this.x = x ? x : 128;           //x坐标
        this.y = y ? y : 384;           //y坐标
        this.dir = dir ? dir : 'up';    //主方向
        this.time = null;               //坦克的运动
    };
    moveStar(dir,state){
        clearInterval(this.time);
        switch (dir){
            case 'up':
                this.time = setInterval(() => {
                    if(state){
                        this.y--;
                        this.el.style.top = this.y + 'px';
                    }
                },this.speed);
                break;
            case 'right':
                this.time = setInterval(() => {
                    if(state){
                        this.x++;
                        this.el.style.left = this.x + 'px';
                    }
                },this.speed);
                break;
            case 'down':
                break;
            case 'left':
                this.time = setInterval(() => {
                    if(state){
                        this.x--;
                        this.el.style.left = this.x + 'px';
                    }
                },this.speed);
                break;
            default:
                break;
        }

    };
    moveStop(){
        clearInterval(this.time);
    }
}