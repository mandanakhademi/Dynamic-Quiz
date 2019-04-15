
initialize = function() {
    let questions = [{
      question: "What is 2*5?",
      options: [2, 5, 10, 15],
      correctAnswer: 2,
      score: 10
    }, {
      question: "What is 3*6?",
      options: [3, 6, 9, 18],
      correctAnswer: 3,
      score: 10
    }, {
      question: "What is 8*9?",
      options: [72, 99, 108, 134],
      correctAnswer: 0,
      score: 10
    }, {
      question: "What is 1*7?",
      options: [4, 5, 6, 7],
      correctAnswer: 3,
      score: 10
    }, {
      question: "What is 8*8?",
      options: [20, 30, 64, 56],
      correctAnswer: 2,
      score: 10
    }];
    
    let answers = [];
    let i = 1;
    showQuestion(questions, i);

    let nextButton = document.getElementById('next-button');

    nextButton.addEventListener("click", eventListenerNext.bind(null, event, questions, answers)); 
    
    let previousButton = document.getElementById('previous-button');

    previousButton.addEventListener("click", eventListenerPrevious.bind(null, event, questions)); 

}

showQuestion = function(questions, i){

    let questionNumber = document.getElementById('question-number');
    questionNumber.innerText = i;

    let questionDiv = document.getElementsByClassName('question');
    questionDiv[0].innerText = questions[i-1].question;

    setRadioButtons(questions, i);

}

setRadioButtons = function(questions, i){
    for (j=0; j<document.getElementsByTagName('input').length; j++) 
  {
    if(document.getElementsByTagName('input')[j].type=='radio')
    {
        let radio = document.getElementsByTagName('input')[j];
        radio.nextSibling.data = questions[i-1].options[j];
        document.getElementsByTagName('input')[j].checked = false;
        radio.addEventListener("click", eventListenerSetAnswer);
        
    }
  }
}

eventListenerSetAnswer = function(event){
    let target = event.target;    
    target.parentElement.value = target.nextSibling.data;
}

eventListenerNext = function(event, questions, answers){    
    let questionForm = document.getElementsByClassName('form');
    let questionAnswer = questionForm[0].value;
    
    let currentNumber = document.getElementById('question-number');
    questionNumber = parseInt(currentNumber.innerText) + 1;
    
    if (questionNumber <= questions.length){
        showQuestion(questions, questionNumber);    
        displayStartButton();
        displayPreviousButton();        
    }

    answers[currentNumber-1] = questionAnswer;

    if (questionNumber == questions.length){
        displaySubmitButton();
        hideNextButton();
    }
}


displayStartButton = function(){
    let startButton = document.getElementById('start-button');
        if(startButton.classList.contains('hide')){
            startButton.classList.remove('hide'); 
        }
}

displayPreviousButton = function(){
    let previousButton = document.getElementById('previous-button');
        if(previousButton.classList.contains('hide')){
            previousButton.classList.remove('hide'); 
        }
}

displaySubmitButton = function(){
    let submitButton = document.getElementById('submit-button');
        if(submitButton.classList.contains('hide')){
            submitButton.classList.remove('hide'); 
        }
}

hideNextButton = function(){
    let nextButton = document.getElementById('next-button');
        if(!nextButton.classList.contains('hide')){
            nextButton.classList.add('hide'); 
        }
}

eventListenerPrevious = function(event, questions){
    let currentNumber = document.getElementById('question-number');
    questionNumber = parseInt(currentNumber.innerText) - 1;

    if (questionNumber >= 1){
        showQuestion(questions, questionNumber);                 
    }

    if (questionNumber == 1){
        hideStartButton()
        hidePreviousButton();  
    }

    if (questionNumber == questions.length-1){
        hideSubmitButton();
        displayNextButton();
    }    

}

hideStartButton = function(){
    let startButton = document.getElementById('start-button');
        if(!startButton.classList.contains('hide')){
            startButton.classList.add('hide'); 
        }
}

hidePreviousButton = function(){
    let previousButton = document.getElementById('previous-button');
        if(!previousButton.classList.contains('hide')){
            previousButton.classList.add('hide'); 
        }
}

hideSubmitButton = function(){
    let submitButton = document.getElementById('submit-button');
        if(!submitButton.classList.contains('hide')){
            submitButton.classList.add('hide'); 
        }
}

displayNextButton = function(){
    let nextButton = document.getElementById('next-button');
        if(nextButton.classList.contains('hide')){
            nextButton.classList.remove('hide'); 
        }
}




window.onload = initialize;