function check(x){
    for(let i = 1; i <= 5; i++){
        var star = document.getElementById('star' + i);
        star.classList.remove('checked');
        star.classList.remove('const');
    }
    for(let i = 1; i <= x; i++){
        var star = document.getElementById('star' + i);
        star.classList.add('checked');
        star.classList.add('const');
    }
}

function checkHover(x){
    for(let i = 1; i <= x; i++){
        var star = document.getElementById('star' + i);
        star.classList.add('checked');
    }
}

function uncheckHover(x){
    for(let i = 1; i <= x; i++){
        var star = document.getElementById('star' + i);
        if(!star.classList.contains('const'))
        star.classList.remove('checked');
    }
}

var now = new Date();
document.getElementById('time').innerHTML = now;