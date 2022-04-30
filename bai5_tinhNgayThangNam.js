function ngayHomQua() {
    var ngay = document.getElementById("ngay").value
    var thang = document.getElementById("thang").value
    var nam = document.getElementById("nam").value
    var day = document.getElementById("day");

    if (ngay == 1) {
        if (thang == 1) {
            nam = nam - 1;
            thang = 12;
            ngay = 31;
        }else{ thang = thang - 1;}
        if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
            ngay = 31
        }
        if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
            ngay = 30
        }
        if (thang == 2) {
            ngay = 28;
        }
    } else {
        ngay = ngay - 1;
    }
    document.getElementById("xuatNgay").style.display = "block";
    day.innerHTML = ngay + "/" + thang + "/" + nam;
}
function ngayMai() {
    var ngay = document.getElementById("ngay").value
    var thang = document.getElementById("thang").value
    var nam = document.getElementById("nam").value
    var day = document.getElementById("day");

    if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
        if (ngay == 31) {
            if (thang == 12) {
                nam = +nam + 1;
                ngay = 1;
                thang = 1
            }
            else {thang = +thang + 1;
            ngay = 1}
        }
        else {ngay = +ngay + 1;}
    }
    if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
        if (ngay == 30) {
            thang = +thang + 1;
            ngay = 1;
        }
    else {ngay == ngay++}
} 
    if(thang == 2){
        if (ngay == 28){
            thang = 3
            ngay = 1
        }
        else {ngay = +ngay+1;}
    }
    document.getElementById("xuatNgay").style.display = "block";
    day.innerHTML = ngay + "/" + thang + "/" + nam;
}