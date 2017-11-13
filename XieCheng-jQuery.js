window.onload = function () {
    var image = document.getElementById("body_top_right_one")
    var pic = document.getElementById("pic").getElementsByTagName("li")
    var list = document.getElementById("list").getElementsByTagName("li")
    index = 0
    timer = null

    timer = setInterval(autoPlay, 1500)
    image.onmouseover = function () {
        clearInterval(timer)
    }
    image.onmouseout = function () {
        timer = setInterval(autoPlay, 1500)
    }

    for (var i = 0; i < list.length; i++) {
        list[i].onmouseover = function () {
            clearInterval(timer)
            index = this.innerText - 1
            changePic(index)
        }
    }

    function autoPlay() {
        if (++index >= pic.length)
            index = 0
        changePic(index)
    }

    function changePic(curIndex) {
        for (var i = 0; i < pic.length; ++i) {
            pic[i].style.display = "none"
            list[i].className = ""
        }
        pic[curIndex].style.display = "block"
        list[curIndex].className = "on"
    }
}