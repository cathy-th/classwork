function inputText() {
    typed = document.getElementById("myText").value;
    heading = document.getElementById("heading");
    heading.innerHTML = typed;
}

function visibilityChange() {
    document.getElementById("subheading").style.visibility="hidden";
    document.getElementById("visibility").innerHTML="Appear";
}

function changeloop() {
    if (document.getElementById("subheading").style.visibility="hidden") {
        
    }


}

function fontchoice1() {
    let font1 =document.getElementById("font1").value;
    document.getElementById("paragraph").style.fontFamily=font1;
}

function fontchoice2() {
    let font2=document.getElementById("font2").value;
    document.getElementById("paragraph").style.fontFamily=font2;
}

function fontchoice3() {
    let font3=document.getElementById("font3").value;
    document.getElementById("paragraph").style.fontFamily=font3;
}

function changeBoxSize() {
    size=document.getElementById("boxychangy").value;
    box=document.getElementById("box");
    box.style.width = size + "px";
}

function chooseImage() {
    let choice=document.getElementById("imageSelect").value;
    let imageChoice=document.getElementById("img");
    imageChoice.src = choice;

}

function inputWord() {
    typed = document.getElementById("theText").value;
    heading = document.getElementById("text-1");
    heading.innerHTML = typed;
}
