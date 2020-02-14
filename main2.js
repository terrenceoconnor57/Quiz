var firstbutton2 = document.getElementById("first2");
var secondbutton2 = document.getElementById("second2");
var thirdbutton2 = document.getElementById("third2");
var fourthbutton2 = document.getElementById("fourth2");





firstbutton2.addEventListener("click", incorrectAnswer2);
secondbutton2.addEventListener("click", incorrectAnswer2);
thirdbutton2.addEventListener("click", correctAnswer2);
fourthbutton2.addEventListener("click", incorrectAnswer2);






function correctAnswer2() {
    document.getElementById("correct2").innerHTML = "CORRECT!";
}

function incorrectAnswer2() {
    document.getElementById("incorrect2").innerHTML = "Incorrect";
}

function showNext2() {
    document.getElementById('next2').style.display = 'block';
}



function greenBack2() {
    document.getElementById("questiongrid2").style.backgroundColor = "green";
}

function redBack2() {
  document.getElementById("questiongrid2").style.backgroundColor = "red";
}


function hideButtons2() {
  document.getElementById('first2').style.display = 'none';
  document.getElementById('second2').style.display = 'none';
  document.getElementById('third2').style.display = 'none';
  document.getElementById('fourth2').style.display = 'none';
}
