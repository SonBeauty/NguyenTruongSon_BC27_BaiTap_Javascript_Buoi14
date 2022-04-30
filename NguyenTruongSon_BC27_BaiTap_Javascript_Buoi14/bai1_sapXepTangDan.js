function sapXep() {
var number_1 = document.getElementById("number_1").value;
var number_2 = document.getElementById("number_2").value;
var number_3 = document.getElementById("number_3").value;
var resultEl = document.getElementById("resultEl")
var max;
var min;
var middle;

if(+number_1 <= +number_2 && +number_2 <= +number_3){
    min = number_1;
    middle = number_2;
    max = number_3;
}

if(+number_1 <= +number_3 && +number_3 <= +number_2){
    min = number_1;
    middle = number_3;
    max = number_2;
}

if(+number_2 <= +number_1 && +number_1 <= +number_3){
    min = number_2;
    middle = number_1;
    max = number_3;
}

if(+number_2 <= +number_3 && +number_3 <= +number_1){
    min = number_2;
    middle = number_3;
    max = number_1;
}

if(+number_3 <= +number_2 && +number_2 <= +number_1){
    min = number_3;
    middle = number_2;
    max = number_1;
}

if(+number_3 <= +number_1 && +number_1 <= +number_2){
    min = number_3;
    middle = number_1;
    max = number_2;
}
    document.getElementById("result").style = "block"
    resultEl.innerHTML = min +" < " + middle + " < " + max
}

