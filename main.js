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


function openResults() {
    document.getElementById('results').style.display = 'block';
}

function closeResults() {
    document.getElementById('results').style.display = 'none';
}

function showResultsButton() {
    document.getElementById('resultsbutton').style.display = 'block';
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
    document.getElementById('popInfo2').style.display = 'block';
}

function closeInfo2() {
    document.getElementById('popInfo2').style.display = 'none';
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
    document.getElementById('popInfo3').style.display = 'block';
}

function closeInfo3() {
    document.getElementById('popInfo3').style.display = 'none';
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
    document.getElementById('popInfo4').style.display = 'block';
}

function closeInfo4() {
    document.getElementById('popInfo4').style.display = 'none';
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


var firstbutton6 = document.getElementById("first6");
var secondbutton6 = document.getElementById("second6");
var thirdbutton6 = document.getElementById("third6");
var fourthbutton6 = document.getElementById("fourth6");





firstbutton6.addEventListener("click", incorrectAnswer6);
secondbutton6.addEventListener("click", correctAnswer6);
thirdbutton6.addEventListener("click", incorrectAnswer6);
fourthbutton6.addEventListener("click", incorrectAnswer6);






function correctAnswer6() {
    document.getElementById("correct6").innerHTML = "CORRECT!";
}

function incorrectAnswer6() {
    document.getElementById("incorrect6").innerHTML = "Incorrect";
}

function showNext6() {
    document.getElementById('next6').style.display = 'block';
}



function greenBack6() {
    document.getElementById("questiongrid6").style.backgroundColor = "green";
}

function redBack6() {
    document.getElementById("questiongrid6").style.backgroundColor = "red";
}


function hideButtons6() {
    document.getElementById('first6').style.display = 'none';
    document.getElementById('second6').style.display = 'none';
    document.getElementById('third6').style.display = 'none';
    document.getElementById('fourth6').style.display = 'none';
}


function infoButton6() {
    document.getElementById('info6').style.display = 'block';
}

function popupOne6() {
    document.getElementById('popInfo6').style.display = 'block';
}

function closeInfo6() {
    document.getElementById('popInfo6').style.display = 'none';
}


var firstbutton7 = document.getElementById("first7");
var secondbutton7 = document.getElementById("second7");
var thirdbutton7 = document.getElementById("third7");
var fourthbutton7 = document.getElementById("fourth7");





firstbutton7.addEventListener("click", incorrectAnswer7);
secondbutton7.addEventListener("click", correctAnswer7);
thirdbutton7.addEventListener("click", incorrectAnswer7);
fourthbutton7.addEventListener("click", incorrectAnswer7);






function correctAnswer7() {
    document.getElementById("correct7").innerHTML = "CORRECT!";
}

function incorrectAnswer7() {
    document.getElementById("incorrect7").innerHTML = "Incorrect";
}

function showNext7() {
    document.getElementById('next7').style.display = 'block';
}



function greenBack7() {
    document.getElementById("questiongrid7").style.backgroundColor = "green";
}

function redBack7() {
    document.getElementById("questiongrid7").style.backgroundColor = "red";
}


function hideButtons7() {
    document.getElementById('first7').style.display = 'none';
    document.getElementById('second7').style.display = 'none';
    document.getElementById('third7').style.display = 'none';
    document.getElementById('fourth7').style.display = 'none';
}


function infoButton7() {
    document.getElementById('info7').style.display = 'block';
}

function popupOne7() {
    document.getElementById('popInfo7').style.display = 'block';
}

function closeInfo7() {
    document.getElementById('popInfo7').style.display = 'none';
}


var firstbutton8 = document.getElementById("first8");
var secondbutton8 = document.getElementById("second8");
var thirdbutton8 = document.getElementById("third8");
var fourthbutton8 = document.getElementById("fourth8");





firstbutton8.addEventListener("click", correctAnswer8);
secondbutton8.addEventListener("click", incorrectAnswer8);
thirdbutton8.addEventListener("click", incorrectAnswer8);
fourthbutton8.addEventListener("click", incorrectAnswer8);






function correctAnswer8() {
    document.getElementById("correct8").innerHTML = "CORRECT!";
}

function incorrectAnswer8() {
    document.getElementById("incorrect8").innerHTML = "Incorrect";
}

function showNext8() {
    document.getElementById('next8').style.display = 'block';
}



function greenBack8() {
    document.getElementById("questiongrid8").style.backgroundColor = "green";
}

function redBack8() {
    document.getElementById("questiongrid8").style.backgroundColor = "red";
}


function hideButtons8() {
    document.getElementById('first8').style.display = 'none';
    document.getElementById('second8').style.display = 'none';
    document.getElementById('third8').style.display = 'none';
    document.getElementById('fourth8').style.display = 'none';
}


function infoButton8() {
    document.getElementById('info8').style.display = 'block';
}

function popupOne8() {
    document.getElementById('popInfo8').style.display = 'block';
}

function closeInfo8() {
    document.getElementById('popInfo8').style.display = 'none';
}


var firstbutton9 = document.getElementById("first9");
var secondbutton9 = document.getElementById("second9");
var thirdbutton9 = document.getElementById("third9");
var fourthbutton9 = document.getElementById("fourth9");





firstbutton9.addEventListener("click", incorrectAnswer9);
secondbutton9.addEventListener("click", incorrectAnswer9);
thirdbutton9.addEventListener("click", incorrectAnswer9);
fourthbutton9.addEventListener("click", correctAnswer9);






function correctAnswer9() {
    document.getElementById("correct9").innerHTML = "CORRECT!";
}

function incorrectAnswer9() {
    document.getElementById("incorrect9").innerHTML = "Incorrect";
}

function showNext9() {
    document.getElementById('next9').style.display = 'block';
}



function greenBack9() {
    document.getElementById("questiongrid9").style.backgroundColor = "green";
}

function redBack9() {
    document.getElementById("questiongrid9").style.backgroundColor = "red";
}


function hideButtons9() {
    document.getElementById('first9').style.display = 'none';
    document.getElementById('second9').style.display = 'none';
    document.getElementById('third9').style.display = 'none';
    document.getElementById('fourth9').style.display = 'none';
}


function infoButton9() {
    document.getElementById('info9').style.display = 'block';
}

function popupOne9() {
    document.getElementById('popInfo9').style.display = 'block';
}

function closeInfo9() {
    document.getElementById('popInfo9').style.display = 'none';
}


var firstbutton10 = document.getElementById("first10");
var secondbutton10 = document.getElementById("second10");
var thirdbutton10 = document.getElementById("third10");
var fourthbutton10 = document.getElementById("fourth10");





firstbutton10.addEventListener("click", incorrectAnswer10);
secondbutton10.addEventListener("click", correctAnswer10);
thirdbutton10.addEventListener("click", incorrectAnswer10);
fourthbutton10.addEventListener("click", incorrectAnswer10);






function correctAnswer10() {
    document.getElementById("correct10").innerHTML = "CORRECT!";
}

function incorrectAnswer10() {
    document.getElementById("incorrect10").innerHTML = "Incorrect";
}

function showNext10() {
    document.getElementById('next10').style.display = 'block';
}



function greenBack10() {
    document.getElementById("questiongrid10").style.backgroundColor = "green";
}

function redBack10() {
    document.getElementById("questiongrid10").style.backgroundColor = "red";
}


function hideButtons10() {
    document.getElementById('first10').style.display = 'none';
    document.getElementById('second10').style.display = 'none';
    document.getElementById('third10').style.display = 'none';
    document.getElementById('fourth10').style.display = 'none';
}


function infoButton10() {
    document.getElementById('info10').style.display = 'block';
}

function popupOne10() {
    document.getElementById('popInfo10').style.display = 'block';
}

function closeInfo10() {
    document.getElementById('popInfo10').style.display = 'none';
}
