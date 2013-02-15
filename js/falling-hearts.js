var TYPEFACE = new Array("Tahoma","Geneva","Arial","Verdana")
var CHARACTER = "♥"
var SPEED = 0.5
var MAX_SIZE = 36
var MIN_SIZE = 10
var MAX_NUM_HEARTS = 20

var marginbottom
var marginright
var timer
var hearts = new Array()
var x_mv = new Array();
var crds = new Array();
var lftrght = new Array();

function heartfall() {
    marginbottom = document.body.scrollHeight
    marginright = document.body.clientWidth

    var snowsizerange = MAX_SIZE - MIN_SIZE
    for (i = 0; i <= MAX_NUM_HEARTS; i++) {
            crds[i] = 0;
        lftrght[i] = Math.random()*15;
        x_mv[i] = 0.03 + Math.random()/10;
        
        hearts[i]=document.getElementById("element"+i)
        
        hearts[i].style.fontFamily=TYPEFACE[getRandomNumber(TYPEFACE.length)]
        hearts[i].size=getRandomNumber(snowsizerange)+MIN_SIZE
        hearts[i].style.fontSize=hearts[i].size+'px';
        hearts[i].style.zIndex=1000
        hearts[i].sink=SPEED * hearts[i].size/10
        hearts[i].posx=getRandomNumber(marginright-hearts[i].size)
        hearts[i].posy=getRandomNumber(2*marginbottom-marginbottom-2*hearts[i].size)
        hearts[i].style.left=hearts[i].posx+'px';
        hearts[i].style.top=hearts[i].posy+'px';
    }
    movement()
}

function movement() {
    for (i=0;i<=MAX_NUM_HEARTS;i++) {
        crds[i] += x_mv[i];
        hearts[i].posy+=hearts[i].sink
        hearts[i].style.left=hearts[i].posx+lftrght[i]*Math.sin(crds[i])+'px';
        hearts[i].style.top=hearts[i].posy+'px';

        if (hearts[i].posy>=marginbottom-2*hearts[i].size || parseInt(hearts[i].style.left)>(marginright-3*lftrght[i])){
            hearts[i].posx=getRandomNumber(marginright-hearts[i].size)                        
            hearts[i].posy=0
        }
    }
    var timer=setTimeout("movement()",50)
}

for (i = 0; i <= MAX_NUM_HEARTS; i++) {
    document.write("<span id='element"+i+"' style='position:absolute; top:-"+MAX_SIZE+"'>"+CHARACTER+"</span>")
}

function getRandomNumber(n) {
    return Math.floor(Math.random() * n)
}

window.onload=heartfall
