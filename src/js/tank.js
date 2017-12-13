/**
 * 坦克的控制类。
 * @param {string} 目标坦克.
 */
export default class tank {
    constructor(id) {
        this.obj = document.querySelector(id);
        this.speed = 2;                //移动速度
        this.oParent = document.querySelector('#left');
    };

    /**
     * 移动
     * @param {string} 移动方向
     */
    move(dir) {
        switch (dir) {
            case 'up':
                this.moveUp();
                break;
            case 'right':
                this.moveRight();
                break;
            case 'down':
                this.moveDown();
                break;
            case 'left':
                this.moveLeft();
                break;
            default:
                break;
        }
    }

    //左移动
    moveLeft() {
        if (this.obj.offsetLeft <= 0) {
            this.obj.style.left = 0;
        } else {
            this.obj.style.left = this.obj.offsetLeft - this.speed + 'px';
            if (this.axis()) {
                this.obj.style.left = this.obj.offsetLeft + this.speed + 'px';
            }
        }
    }

    //右移动
    moveRight() {
        if (this.obj.offsetLeft >= this.oParent.offsetWidth - this.obj.offsetWidth) {
            this.obj.style.left = this.oParent.offsetWidth - this.obj.offsetWidth + 'px';
        } else {
            this.obj.style.left = this.obj.offsetLeft + this.speed + 'px';
            if (this.axis()) {
                this.obj.style.left = this.obj.offsetLeft - this.speed + 'px';
            }
        }
    }

    //上移动
    moveUp() {
        if (this.obj.offsetTop <= 0) {
            this.obj.style.top = 0;
        } else {
            this.obj.style.top = this.obj.offsetTop - this.speed + 'px';
            if (this.axis()) {
                this.obj.style.top = this.obj.offsetTop + this.speed + 'px';
                return true;
            } else {
                return false;
            }
        }
    }

    //下移动
    moveDown() {
        if (this.obj.offsetTop >= this.oParent.offsetHeight - this.obj.offsetHeight) {
            this.obj.style.top = this.oParent.offsetHeight - this.obj.offsetHeight + 'px';
        } else {
            this.obj.style.top = this.obj.offsetTop + this.speed + 'px';
            if (this.axis()) {
                this.obj.style.top = this.obj.offsetTop - this.speed + 'px';
            }
        }
    }

    /**
     * 坦克与墙的碰撞检测。
     * @return {json} 返回方向是否可走。
     */
    axis() {
        const wall = document.querySelectorAll('.wall');
        const iron = document.querySelectorAll('.iron');
        const allWall = [...wall, ...iron];
        for (let item of allWall) {
            if (this.casks(item)) {
                return true;
            }
        }
        return false;
    }

    //碰撞检测
    casks(obj1) {
        const L1 = obj1.offsetLeft;
        const T1 = obj1.offsetTop;
        const R1 = L1 + obj1.offsetWidth;
        const B1 = T1 + obj1.offsetHeight;

        const L2 = this.obj.offsetLeft;
        const T2 = this.obj.offsetTop;
        const R2 = L2 + this.obj.offsetWidth;
        const B2 = T2 + this.obj.offsetHeight;

        if (L1 >= R2 || T1 >= B2 || R1 <= L2 || B1 <= T2) {
            return false;
        }
        return true;
    }
}