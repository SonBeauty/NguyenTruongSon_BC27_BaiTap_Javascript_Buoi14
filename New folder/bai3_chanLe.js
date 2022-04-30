function dem() {
    var firstNumber = document.getElementById("firstNumber").value
    var secondNumber = document.getElementById("secondNumber").value
    var thirdNumber = document.getElementById("thirdNumber").value
    var count = 0;
    var evenNumber = document.getElementById("demChanLe")
    if (firstNumber % 2 === 0) {
        count = count + 1;
    }
    if (secondNumber % 2 === 0) {
        count = count + 1
    }
    if (thirdNumber % 2 === 0) {
        count = count + 1
    }
    document.getElementById("chanLe").style.display = "block"
    evenNumber.innerHTML = "Có " + count + " Số chẵn " + (3-count) + " Số lẽ "

}