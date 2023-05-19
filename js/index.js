window.onload = PicScroller;

function PicScroller() {
    let scroller1 = document.getElementById('scroller1');
    let scroller2 = document.getElementById('scroller2');
    scroller1.innerHTML += scroller1.innerHTML;
    scroller2.innerHTML += scroller2.innerHTML;
    mouseMove(scroller1);
    mouseMove(scroller2);
    let speed = 15;
    let myMar1 = setInterval(marquee1, speed);
    let myMar2 = setInterval(marquee2, speed);
    scroller1.onmouseover = function () {
        clearInterval(myMar1);
        //mouseMove(scroller1);
    }
    scroller1.onmouseout = function () {
        myMar1 = setInterval(marquee1, speed);
    }
    scroller2.onmouseover = function () {
        clearInterval(myMar2);
        //mouseMove(scroller2);
    }
    scroller2.onmouseout = function () {
        myMar2 = setInterval(marquee2, speed);
    }
}

function marquee1() {
    let scroller1 = document.getElementById('scroller1');
    const scroller1Width = scroller1.offsetWidth / 2;
    let left = parseInt(scroller1.style.left);
    // console.log(scroller1.offsetWidth);
    // console.log(scroller1Width);
    // console.log(left);
    if (Math.abs(left) >= scroller1Width) {
        scroller1.style.left = left + scroller1Width + 'px';
    }
    else {
        scroller1.style.left = left - 1 + 'px';
    }
}

function marquee2() {
    let scroller2 = document.getElementById('scroller2');
    const scroller2Width = scroller2.offsetWidth / 2;
    let left = parseInt(scroller2.style.left);
    // console.log(scroller2.offsetWidth);
    // console.log(scroller2Width);
    // console.log(left);
    if (Math.abs(left) <= scroller2Width) {
        scroller2.style.left = left - scroller2Width + 'px';
    }
    else {
        scroller2.style.left = left + 1 + 'px';
    }
}



function mouseMove(scroller) {
    var box = scroller; // 获取box元素
    // 鼠标在元素上按下开始拖拽
    box.onmousedown = function () {
        // 获取按下鼠标时 盒子与页面的距离
        var originBoxX = box.offsetLeft;
        //var originBoxY = box.offsetTop;
        // 获取按下鼠标时 鼠标与页面的距离
        var mouseX = event.pageX;
        //var mouseY = event.pageY;
        // 在页面上移动
        window.onmousemove = function () {
            // 鼠标滑动的距离 = 鼠标移动后的位置 - 按下鼠标时的位置
            var distanceX = event.pageX - mouseX;
            //var distanceY = event.pageY - mouseY;
            // 给元素重新赋值 上左定位的位置
            box.style.left = originBoxX + distanceX + "px";
            //box.style.top = originBoxY + distanceY + "px";
        }
        // 鼠标松开取消事件
        box.onmouseup = function () {
            // 解绑在页面上滚动的事件
            window.onmousemove = null;
            window.onmouseup = null;
            Window.onmousedown = null;
        }
    }
}

let flight = document.getElementById('flight');
let train = document.getElementById('train');
let bus = document.getElementById('bus');
let subway = document.getElementById('subway');
let flightShow = document.getElementById('flightShow');
let trainShow = document.getElementById('trainShow');
let busShow = document.getElementById('busShow');
let subwayShow = document.getElementById('subwayShow');

flight.onclick = function () {
    flight.classList.add('transportation-list-active');
    train.classList.remove('transportation-list-active');
    bus.classList.remove('transportation-list-active');
    subway.classList.remove('transportation-list-active');
    flightShow.classList.remove('info-hidden');
    trainShow.classList.add('info-hidden');
    busShow.classList.add('info-hidden');
    subwayShow.classList.add('info-hidden');
}

train.onclick = function () {
    flight.classList.remove('transportation-list-active');
    train.classList.add('transportation-list-active');
    bus.classList.remove('transportation-list-active');
    subway.classList.remove('transportation-list-active');
    flightShow.classList.add('info-hidden');
    trainShow.classList.remove('info-hidden');
    busShow.classList.add('info-hidden');
    subwayShow.classList.add('info-hidden');
}

bus.onclick = function () {
    flight.classList.remove('transportation-list-active');
    train.classList.remove('transportation-list-active');
    bus.classList.add('transportation-list-active');
    subway.classList.remove('transportation-list-active');
    flightShow.classList.add('info-hidden');
    trainShow.classList.add('info-hidden');
    busShow.classList.remove('info-hidden');
    subwayShow.classList.add('info-hidden');
}

subway.onclick = function () {
    flight.classList.remove('transportation-list-active');
    train.classList.remove('transportation-list-active');
    bus.classList.remove('transportation-list-active');
    subway.classList.add('transportation-list-active');
    flightShow.classList.add('info-hidden');
    trainShow.classList.add('info-hidden');
    busShow.classList.add('info-hidden');
    subwayShow.classList.remove('info-hidden');
}
