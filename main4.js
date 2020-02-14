var firstbutton4 = document.getElementById("first4");
var secondbutton4 = document.getElementById("second4");
var thirdbutton4 = document.getElementById("third4");
var fourthbutton4 = document.getElementById("fourth4");





firstbutton4.addEventListener("click", incorrectAnswer4);
secondbutton4.addEventListener("click", incorrectAnswer4);
thirdbutton4.addEventListener("click", incorrectAnswer4);
fourthbutton4.addEventListener("click", correctAnswer4);






function correctAnswer4() {
    document.getElementById("correct4").innerHTML = "CORRECT!";
}

function incorrectAnswer4() {
    document.getElementById("incorrect4").innerHTML = "Incorrect";
}

function showNext4() {
    document.getElementById('next4').style.display = 'block';
}



function greenBack4() {
    document.getElementById("questiongrid4").style.backgroundColor = "green";
}

function redBack4() {
  document.getElementById("questiongrid4").style.backgroundColor = "red";
}


function hideButtons4() {
  document.getElementById('first4').style.display = 'none';
  document.getElementById('second4').style.display = 'none';
  document.getElementById('third4').style.display = 'none';
  document.getElementById('fourth4').style.display = 'none';
}
