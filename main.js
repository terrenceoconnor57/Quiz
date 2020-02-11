



document.getElementById("first").addEventListener("click", correctAnswer);
document.getElementById("second").addEventListener("click", incorrectAnswer);
document.getElementById("third").addEventListener("click", incorrectAnswer);
document.getElementById("fourth").addEventListener("click", incorrectAnswer);

function correctAnswer(){
  document.getElementById("correct").innerHTML = "CORRECT!";
}

function incorrectAnswer(){
  document.getElementById("incorrect").innerHTML = "Incorrect";
}
