var firstbutton3 = document.getElementById("first3");
var secondbutton3 = document.getElementById("second3");
var thirdbutton3 = document.getElementById("third3");
var fourthbutton3 = document.getElementById("fourth3");





firstbutton3.addEventListener("click", incorrectAnswer3);
secondbutton3.addEventListener("click", correctAnswer3);
thirdbutton3.addEventListener("click", incorrectAnswer3);
fourthbutton3.addEventListener("click", incorrectAnswer3);






function correctAnswer3() {
    document.getElementById("correct3").innerHTML = "CORRECT!";
}

function incorrectAnswer3() {
    document.getElementById("incorrect3").innerHTML = "Incorrect";
}

function showNext3() {
    document.getElementById('next3').style.display = 'block';
}



function greenBack3() {
    document.getElementById("questiongrid3").style.backgroundColor = "green";
}

function redBack3() {
  document.getElementById("questiongrid3").style.backgroundColor = "red";
}


function hideButtons3() {
  document.getElementById('first3').style.display = 'none';
  document.getElementById('second3').style.display = 'none';
  document.getElementById('third3').style.display = 'none';
  document.getElementById('fourth3').style.display = 'none';
}
