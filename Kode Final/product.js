function navigate(){
    window.location.href = 'outlet.html';
}

let slideShow;

function getCurrentImage() {
    for (let i = 1; i <= 3; i++) {
        let pic = document.getElementById("pic" + i);
        let opacityControl = getComputedStyle(pic).getPropertyValue("opacity");
        if (opacityControl === "1") {
            return i;
        }
    }
}

document.getElementById("dot1").addEventListener("click", function () {
    let i = getCurrentImage();
    var imgCurr = document.getElementById("pic" + i);
    var dotCurr = document.getElementById("dot" + i);
    var img1 = document.getElementById("pic1");

    dotCurr.style.backgroundColor = '#c8c8c8'
    this.style.backgroundColor = '#000'

    imgCurr.style.opacity = 0;
    img1.style.opacity = 1;
});

document.getElementById("dot2").addEventListener("click", function () {
    let i = getCurrentImage();
    var imgCurr = document.getElementById("pic" + i);
    var dotCurr = document.getElementById("dot" + i);
    var img1 = document.getElementById("pic2");

    dotCurr.style.backgroundColor = '#c8c8c8'
    this.style.backgroundColor = '#000'

    imgCurr.style.opacity = 0;
    img1.style.opacity = 1;
});

document.getElementById("dot3").addEventListener("click", function () {
    let i = getCurrentImage();
    var imgCurr = document.getElementById("pic" + i);
    var dotCurr = document.getElementById("dot" + i);
    var img1 = document.getElementById("pic3");

    dotCurr.style.backgroundColor = '#c8c8c8'
    this.style.backgroundColor = '#000'

    imgCurr.style.opacity = 0;
    img1.style.opacity = 1;
});

function changeSlide() {
    let i = getCurrentImage();
    var imgCurr = document.getElementById("pic" + i);
    var dotCurr = document.getElementById("dot" + i);
    var dot1 = document.getElementById("dot" + (i === 3 ? 1 : i + 1));
    var img1 = document.getElementById("pic" + (i === 3 ? 1 : i + 1));

    dotCurr.style.backgroundColor = '#c8c8c8'
    dot1.style.backgroundColor = '#000'

    imgCurr.style.opacity = 0;
    img1.style.opacity = 1;
}

function startShow() {
    slideShow = setInterval(() => {
        changeSlide();
    }, 4000);
}

startShow();
