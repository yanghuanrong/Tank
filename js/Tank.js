window.onload = function() {
  new game();
}

function game() {
  this.toMap();
}

//地图数据
game.prototype.eMap = {
    level_1: {
      gkType: [
        0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0,
        3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 1, 3, 3, 1, 1, 2, 2,
        3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 1, 3, 3, 1, 1, 2, 2,
        3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 2, 2, 0, 0, 3, 3, 0, 0, 0, 0,
        3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 2, 2, 0, 0, 3, 3, 0, 0, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 2, 2, 0, 0, 0, 0, 3, 3, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 2, 2, 0, 0, 0, 0, 3, 3, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        2, 2, 1, 1, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
        2, 2, 1, 1, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 7, 9, 0, 7, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 7, 0, 0, 7, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0
      ],
      tankType: [1, 1, 2, 2, 1, 1, 0, 0, 2, 2, 1, 1, 0, 0, 2, 2, 1, 1, 0, 0]
    }
  }
  //创建地图
game.prototype.toMap = function() {
    this.gk = this.eMap.level_1.gkType;
    for(var i = 0; i < this.gk.length; i++) {
      var ele = document.createElement('span')
      ele.style.position = 'absolute';
      ele.style.left = i % 26 * 16 + 'px'
      ele.style.top = (parseInt(i / 26)) * 16 + 'px'
      switch(this.gk[i]) {
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

      $('left').appendChild(ele)
    }
    this.newTKmi()
  }
  //创建我方坦克
game.prototype.newTKmi = function() {
    var TK = document.createElement('div')
    TK.id = 'play'
    $('left').appendChild(TK);
    this.TK = TK
    this.TKmiMove()
 }
  //控制坦克移动
game.prototype.TKmiMove = function() {
  var _this=this;
  var TKdir = null;
  var tims = null;

  document.onkeydown = function(ev) {
    var e = ev || event;
    if(!tims) {
      tims = setInterval(tkmove, 30);
    }
    switch(e.keyCode) {
      case 37:
        TKdir = 'left';
        break;
      case 38:
        TKdir = 'top';
        break;
      case 39:
        TKdir = 'right';
        break;
      case 40:
        TKdir = 'bottom';
        break;
    }
  }

  document.onkeyup = function(ev) {
    var e = ev || event;
    clearInterval(tims);
    tims = null;
    TKdir=null;
  }

  function tkmove() {
    switch(TKdir) {
      case 'left':
        _this.TK.style.backgroundPosition='-64px 0';
        _this.TKleft(_this.TK);
        break;
      case 'top':
        _this.TK.style.backgroundPosition='0 0';
        _this.TKtop(_this.TK);
        break;
      case 'right':
        _this.TK.style.backgroundPosition='-96px 0';
        _this.TKright(_this.TK);
        break;
      case 'bottom':
        _this.TK.style.backgroundPosition='-32px 0';
        _this.TKbottom(_this.TK);
        break;
    }
  }

}

//坦克移动的方向
game.prototype.TKtop=function(obj){
  if(obj.offsetTop>0){
    obj.style.top=obj.offsetTop-2+'px'
  }
  
}
game.prototype.TKleft=function(obj){
  if(obj.offsetLeft>0){
    obj.style.left=obj.offsetLeft-2+'px'
  }
  
  var eMap=document.getElementsByTagName('span')
  for(var i=0; i<eMap.length; i++){
    if(casks(obj,eMap[i])){
      if(eMap[i].type!=0){
        eMap[i].style.color='#F00';
        eMap[i].innerHTML='0'
        obj.style.left=eMap[i].offsetLeft+eMap[i].offsetWidth+'px'
      }
    }
  }
  
}
game.prototype.TKright=function(obj){
  if(obj.offsetLeft<$('left').offsetWidth-obj.offsetWidth){
    obj.style.left=obj.offsetLeft+2+'px';
  }

}
game.prototype.TKbottom=function(obj){
  if(obj.offsetTop<$('left').offsetHeight-obj.offsetHeight){
    obj.style.top=obj.offsetTop+2+'px'
  }
}

//封装选择元素
function $(dom) {
  if(typeof dom === 'string') {
    return document.getElementById(dom);
  } else if(typeof dom === 'function') {
    return window.onload = dom;
  } else if(typeof dom === 'object') {
    return dom;
  }
}

function casks(obj1,obj2){//碰撞检测
    var l1=obj1.offsetLeft;
    var t1=obj1.offsetTop;
    var r1=obj1.offsetLeft+obj1.offsetWidth;
    var b1=obj1.offsetTop+obj1.offsetHeight;

    var l2=obj2.offsetLeft;
    var t2=obj2.offsetTop;
    var r2=obj2.offsetLeft+obj2.offsetWidth;
    var b2=obj2.offsetTop+obj2.offsetHeight;
    
    
    if(r1<l2 || l1>r2 || t1>b2 || b1<t2 ){
      return false;
    }else{
      return true;
    }
    
  }