function duDoan(){
    var side_1 = document.getElementById("side_1").value
    var side_2 = document.getElementById("side_2").value
    var side_3 = document.getElementById("side_3").value
    var tamGiac = document.getElementById("tamGiac")

    if(side_1 == side_2 && side_2 == side_3){
        document.getElementById("loaiTamGiac").style.display = "block"
        tamGiac.innerHTML = "Đây là tam giác đều"
    }else if(side_1 == side_2 || side_2 == side_3 || side_1 == side_3){
        document.getElementById("loaiTamGiac").style.display = "block"
        tamGiac.innerHTML = "Đây là tam giác cân"
    }else if(side_3*side_3 == side_1*side_1 + side_2*side_2){
        document.getElementById("loaiTamGiac").style.display = "block"
        tamGiac.innerHTML = "Đây là tam giác vuông"
    }else {
        document.getElementById("loaiTamGiac").style.display = "block"
        tamGiac.innerHTML = "Một loại tam giác nào đó"
    }
}