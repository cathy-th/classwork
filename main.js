let bop= document.getElementById("heading")

function blah() {
   bop.style.fontSize="50px";
   bop.innerHTML="muahahahahah";
   bop.style.color="red";
   document.getElementById("buttonChange").innerHTML="change back";
}

function original() {
    bop.style.fontSize="32px";
    bop.innerHTML="This is going to change"
    bop.style.color="blue";
    document.getElementById("buttonChange").innerHTML="change";
}


let timeschanged=0;
function funk() {
timeschanged++;
if (timeschanged>1) {
    original();
    timeschanged=0;
} else {
    blah();
}
}

function typing() {
    var typed = document.getElementById("myText").value;
    document.getElementById("heading").innerHTML = typed;
}
