function togglePopup1() {
    var popup = document.getElementById("popup1");
    var lanjutButton = document.getElementById("lanjutbtn1");
    var penjelasan = document.querySelector('.penjelasan');

    popup.classList.toggle("open-popup");
    lanjutButton.classList.toggle("show-button");

    if (popup.classList.contains("open-popup")) {
        penjelasan.style.maxHeight = "710px"; 
    } else {
        penjelasan.style.maxHeight = "0";
    }
}

function nextContent1() {
    var popup2 = document.getElementById("popup2");
    var lanjutbutton2 = document.getElementById("lanjutbtn2");
    var penjelasan = document.querySelector('.penjelasan');

    popup2.style.transition = "transform 0.5s ease, opacity 0.5s ease, visibility 0.5s";
    popup2.style.transform = "translateX(0)"; 
    popup2.style.opacity = 1;
    popup2.style.visibility = "visible";
    lanjutbutton2.style.visibility = "visible";

    penjelasan.style.maxHeight = "1180px"; 
}

function nextContent2() {
    var popup3 = document.getElementById("popup3");
    var lanjutbutton3 = document.getElementById("lanjutmcd");
    var penjelasan = document.querySelector('.penjelasan');

    popup3.style.transition = "transform 0.5s ease, opacity 0.5s ease, visibility 0.5s";
    popup3.style.transform = "translateX(0)"; 
    popup3.style.opacity = 1;
    popup3.style.visibility = "visible";
    lanjutbutton3.style.visibility = "visible";

    penjelasan.style.maxHeight = "2400px"; 
}
