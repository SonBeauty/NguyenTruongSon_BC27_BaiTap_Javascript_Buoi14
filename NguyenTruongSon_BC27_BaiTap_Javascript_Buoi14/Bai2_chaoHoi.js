function chaoHoi() {
    var nguoiThanEl = document.getElementById("nguoiThan").value
    var ketQuaEl = document.getElementById("ketQua")

    if (nguoiThanEl == 1) {
        ketQuaEl.style.display = "block"
        document.getElementById("loiChao").innerHTML = "Xin chào Bố"

    } else if (nguoiThanEl == 2) {
        ketQuaEl.style.display = "block"
        var loiChao = document.getElementById("loiChao")
        loiChao.innerHTML = "Xin chào Mẹ"

    } else if (nguoiThanEl == 3) {
        ketQuaEl.style.display = "block"
        var loiChao = document.getElementById("loiChao")
        loiChao.innerHTML = "Xin chào anh trai"

    } else if (nguoiThanEl == 4) {
        ketQuaEl.style.display = "block"
        var loiChao = document.getElementById("loiChao")
        loiChao.innerHTML = "Xin chào em gái"

    }
}