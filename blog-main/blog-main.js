function display() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var time = year + "年" + month + "月" + day + "日";
    $(".rightpart #time").html(time);

    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (second < 10) {
        second = "0" + second;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    var htime = hour + ":" + minute + ":" + second;
    $(".rightpart #timeone").html(htime);

    var week = now.getDay();
    var weekday = new Array(7);
    weekday[0] = '星期日';
    weekday[1] = '星期一';
    weekday[2] = '星期二';
    weekday[3] = '星期三';
    weekday[4] = '星期四';
    weekday[5] = '星期五';
    weekday[6] = '星期六';
    $(".rightpart #week").html(weekday[week]);

    setTimeout("display()", 500);
}


function totop() {
    var btn = document.getElementById("totop");
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;

    window.onscroll = function () {
        var ostop = document.documentElement.scrollTop || document.body.scrollTop;
        if (ostop >= clientHeight) {
            btn.style.display = 'block'
        } else {
            btn.style.display = 'none'
        }

        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    }

    btn.onclick = function () {
        timer = setInterval(function () {
            var ostop = document.documentElement.scrollTop || document.body.scrollTop;
            var isspeed = Math.floor(-ostop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = ostop + isspeed;

            isTop = true;
            if (ostop == 0) {
                clearInterval(timer);
            }
        }, 30);
    }
}

window.onload = function () {
    display();
    totop();
}