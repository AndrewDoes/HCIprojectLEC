function minus(i) {
    var num = document.getElementById("counter" + i);
    // console.log(num.textContent)
    if (Number(num.textContent) > 0) {
        var newNum = Number(num.textContent) - 1;
        num.innerHTML = newNum;
    }

    var item = document.getElementById("price" + i);
    var itemPrice = parseFloat(item.textContent);
    // console.log(itemPrice);
    var currPrice = document.getElementById("totalPrice");
    var priceInitial = parseFloat(currPrice.textContent)
    if(priceInitial-itemPrice >= 0){
        currPrice.innerHTML = (priceInitial - itemPrice);
        if(!(priceInitial - itemPrice === 0)){
            currPrice.innerHTML = currPrice.textContent + ".000";
        }
        else{
            currPrice.innerHTML = currPrice.textContent;
        }
    }
    

    var totalNum = document.getElementById("amount");
    var newNum = Number(totalNum.textContent) - 1;
    if(newNum >= 0){
        totalNum.innerHTML = newNum;
    }
}

function plus(i) {
    var num = document.getElementById("counter" + i);
    // console.log(num.textContent)
    var newNum = Number(num.textContent) + 1;
    num.innerHTML = newNum;


    var item = document.getElementById("price" + i);
    var itemPrice = parseFloat(item.textContent);
    // console.log(itemPrice);
    var currPrice = document.getElementById("totalPrice");
    var priceInitial = parseFloat(currPrice.textContent)
    if(priceInitial+itemPrice >= 1000){
        alert("Total product ordered exceeded limit");
        return;
    }
    currPrice.innerHTML = (priceInitial + itemPrice);
    currPrice.innerHTML = currPrice.textContent + ".000,00";

    var totalNum = document.getElementById('amount');
    // console.log(Number(totalNum.textContent))
    var sum = Number(totalNum.textContent) + 1;
    totalNum.innerHTML = sum;
}

function changePage(){
    window.location.href = "orderPage.html"
}