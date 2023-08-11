// Your JavaScript goes here

//Radio Button functions title

function fontchoice1() {
    let font1a = document.getElementById("font1").value;
    document.getElementById("text-1").style.fontFamily = font1a;
}

function fontchoice2() {
    let font2b = document.getElementById("font2").value;
    document.getElementById("text-1").style.fontFamily = font2b;
}

function fontchoice3() {
    let font3c = document.getElementById("font3").value;
    document.getElementById("text-1").style.fontFamily = font3c;
}

//Radio Button functions para

function fontchoicea() {
    let fonta1 = document.getElementById("fonta").value;
    document.getElementById("text-2").style.fontFamily = fonta1;
}

function fontchoiceb() {
    let fontb2 = document.getElementById("fontb").value;
    document.getElementById("text-2").style.fontFamily = fontb2;
}

function fontchoicec() {
    let fontc3 = document.getElementById("fontc").value;
    document.getElementById("text-2").style.fontFamily = fontc3;
}

//Slider

function funcslide() {
    let toslide = document.getElementById("slider").value;
    let sliding = document.getElementById("text-1");
    sliding.style.fontSize = toslide + "px";
}

function funcslide2() {
    let toslide = document.getElementById("slider2").value;
    let sliding = document.getElementById("text-2");
    sliding.style.fontSize = toslide + "px";
}

function choosePic() {
    let choice = document.getElementById("imageSelect").value;
    let imageChoice = document.getElementById("img");
    imageChoice.src = choice;

}

function inputMessage() {
    let typed = document.getElementById("theText").value;
    heading = document.getElementById("text-1");
    heading.innerHTML = typed;
}

function inputMessage2() {
    let typed = document.getElementById("bottomText").value;
    heading = document.getElementById("text-2");
    heading.innerHTML = typed;
}

function chooseColor1() {
    let selectElement = document.getElementById("fontColor").value;
    let text1 = document.getElementById("text-1");
    let text2 = document.getElementById("text-2");

    text1.style.color = selectElement;
    text2.style.color = selectElement;

}

function changenumber() {
    let strokeid = document.getElementById("numberstroke").value;
    let text11 = document.getElementById("text-1");
    let text22 = document.getElementById("text-2");

    text11.style.webkitTextStrokeWidth = strokeid + "px";
    text22.style.webkitTextStrokeWidth = strokeid + "px";

}


