var firstbutton = document.getElementById("first");
var secondbutton = document.getElementById("second");
var thirdbutton = document.getElementById("third");
var fourthbutton = document.getElementById("fourth");




firstbutton.addEventListener("click", correctAnswer);
secondbutton.addEventListener("click", incorrectAnswer);
thirdbutton.addEventListener("click", incorrectAnswer);
fourthbutton.addEventListener("click", incorrectAnswer);




function correctAnswer() {
    document.getElementById("correct").innerHTML = "CORRECT!";
}

function incorrectAnswer() {
    document.getElementById("incorrect").innerHTML = "Incorrect";
}

function showNext() {
    document.getElementById('next').style.display = 'block';
}



function greenBack() {
    document.getElementById("questiongrid").style.backgroundColor = "green";
}

function redBack() {

}
