function calculate() {
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var cal = document.getElementById("calculateDate");

    if (month == 2) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            document.getElementById("date").style.display = "block"
            cal.innerHTML = "tháng " + month + "năm " + year + "có 29 ngày"
        }
        else {
            document.getElementById("date").style.display = "block"
            cal.innerHTML = "tháng " + month + "năm " + year + "có 28 ngày"
        }
    }
    else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        document.getElementById("date").style.display = "block"
        cal.innerHTML = "tháng " + month + " năm " + year + " có 31 ngày"
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11) {
        document.getElementById("date").style.display = "block"
        cal.innerHTML = "tháng " + month + " năm " + year + "có 30 ngày"
    }
    else {
        document.getElementById("date").style.display = "block"
        cal.innerHTML = "tháng không hợp lệ"
    }
}