function answerSubmit(){
    document.getElementById("correctAnswer").className = "btn btn-success btn-primary m-2";
    // document.getElementsByClassName("incorrectAnswer").className = "btn btn-danger btn-primary m-2 incorrectAnswer";
    var answers = document.getElementsByClassName('incorrectAnswer');
    for(var i=0; i<4; i++) { 
        answers[i].className = "btn btn-danger btn-primary m-2 incorrectAnswer";
    }
}