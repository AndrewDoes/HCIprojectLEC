function plus(x){
    var price = document.getElementById('price'+x);
    var amount = document.getElementById('amount'+x);
    var total = document.getElementById('total');

    var oldAmount = parseFloat(amount.innerHTML);
    var oldPrice = parseFloat(price.innerHTML);
    var newPrice = oldPrice + (oldPrice/oldAmount);
    var newAmount = parseFloat(amount.innerHTML)+1;

    var oldTotal = parseFloat(total.innerHTML);
    var newTotal = oldTotal + (oldPrice/oldAmount);

    if(newTotal >= 1000){
        alert("limit reached")
        return;
    }

    price.innerHTML = newPrice;
    amount.innerHTML = newAmount;
    total.innerHTML = newTotal;
}

function minus(x){
    var price = document.getElementById('price'+x);
    var amount = document.getElementById('amount'+x);
    var total = document.getElementById('total');

    var oldAmount = parseFloat(amount.innerHTML);
    var oldPrice = parseFloat(price.innerHTML);
    var newPrice = oldPrice - (oldPrice/oldAmount);
    var newAmount = parseFloat(amount.innerHTML)-1;
    if(!(newAmount === 0)){
        var oldTotal = parseFloat(total.innerHTML);
        var newTotal = oldTotal - (oldPrice/oldAmount);
    
        price.innerHTML = newPrice;
        amount.innerHTML = newAmount;
        total.innerHTML = newTotal;
    }
   
}

let timeInterval;

function changeTime(){
    var time = document.getElementById('timer');
    if(parseFloat(time.innerText) === 0){
        time.innerHTML = 5;
        return;
    }
    var newTime = parseFloat(time.innerText) - 1;
    time.innerHTML = newTime;
}

function startInterval(){
    timeInterval = setInterval(() => {
        changeTime();
    }, 1000);
}

startInterval();