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

function infoButton() {
    document.getElementById('info').style.display = 'block';
}


function popupOne() {
  document.getElementById('popInfo').style.display = 'block';
}

function closeInfo() {
  document.getElementById('popInfo').style.display = 'none';
}

var scoreamount = 0;

function scoreKeep() {
    scoreamount++;
    document.getElementById('plusscore').innerHTML = 'Score: ' + scoreamount + '/10 ';
}

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


function infoButton2() {
    document.getElementById('info2').style.display = 'block';
  }

  function popupOne2() {
    document.getElementById('popInfo').style.display = 'block';
  }

  function closeInfo2() {
    document.getElementById('popInfo').style.display = 'none';
  }


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


  function infoButton3() {
      document.getElementById('info3').style.display = 'block';
  }

  function popupOne3() {
    document.getElementById('popInfo').style.display = 'block';
  }

  function closeInfo3() {
    document.getElementById('popInfo').style.display = 'none';
  }


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


  function infoButton4() {
      document.getElementById('info4').style.display = 'block';
  }

  function popupOne4() {
    document.getElementById('popInfo').style.display = 'block';
  }

  function closeInfo4() {
    document.getElementById('popInfo').style.display = 'none';
  }


  var firstbutton5 = document.getElementById("first5");
  var secondbutton5 = document.getElementById("second5");
  var thirdbutton5 = document.getElementById("third5");
  var fourthbutton5 = document.getElementById("fourth5");





  firstbutton5.addEventListener("click", incorrectAnswer5);
  secondbutton5.addEventListener("click", incorrectAnswer5);
  thirdbutton5.addEventListener("click", correctAnswer5);
  fourthbutton5.addEventListener("click", incorrectAnswer5);






  function correctAnswer5() {
      document.getElementById("correct5").innerHTML = "CORRECT!";
  }

  function incorrectAnswer5() {
      document.getElementById("incorrect5").innerHTML = "Incorrect";
  }

  function showNext5() {
      document.getElementById('next5').style.display = 'block';
  }



  function greenBack5() {
      document.getElementById("questiongrid5").style.backgroundColor = "green";
  }

  function redBack5() {
    document.getElementById("questiongrid5").style.backgroundColor = "red";
  }


  function hideButtons5() {
    document.getElementById('first5').style.display = 'none';
    document.getElementById('second5').style.display = 'none';
    document.getElementById('third5').style.display = 'none';
    document.getElementById('fourth5').style.display = 'none';
  }


  function infoButton5() {
      document.getElementById('info5').style.display = 'block';
  }

  function popupOne5() {
    document.getElementById('popInfo5').style.display = 'block';
  }

  function closeInfo5() {
    document.getElementById('popInfo5').style.display = 'none';
  }
