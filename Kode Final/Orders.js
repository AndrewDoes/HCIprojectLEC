function showReceipt(){
    var receipt = document.getElementById('pop-up')
    if(receipt.classList.contains('active')){
        receipt.classList.remove('active')
        return
    }
    var time = new Date();
    document.getElementById('time').innerHTML = time;
    receipt.classList.add('active')
}