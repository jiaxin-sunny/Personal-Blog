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
    totop();
}