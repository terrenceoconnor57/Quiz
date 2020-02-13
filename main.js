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
  document.getElementById("questiongrid").style.backgroundColor = "red";
}


function hideButtons() {
  document.getElementById('first').style.display = 'none';
  document.getElementById('second').style.display = 'none';
  document.getElementById('third').style.display = 'none';
  document.getElementById('fourth').style.display = 'none';
}




var i = 0;
    function buttonClick() {
        document.getElementById('first').value = i++;
        document.getElementById('plusscore').innerHTML = "Score is " + i;
    }
