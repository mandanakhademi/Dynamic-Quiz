
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
    
    let answers = [0,0,0,0,0];
    let i = 1;
    showQuestion(questions, i);

    let nextButton = document.getElementById('next-button');
    nextButton.addEventListener("click", eventListenerNext.bind(null, event, questions, answers)); 

    let previousButton = document.getElementById('previous-button');
    previousButton.addEventListener("click", eventListenerPrevious.bind(null, event, questions, answers)); 

    let startButton = document.getElementById('start-button');
    startButton.addEventListener("click", eventListenerStart.bind(null, event, questions)); 
    

}

showQuestion = function(questions, i){

    let questionNumber = document.getElementById('question-number');
    questionNumber.innerText = i;

    let questionDiv = document.getElementsByClassName('question');
    questionDiv[0].innerText = questions[i-1].question;

    setRadioButtons(questions, i);

}

setRadioButtons = function(questions, i){
    for (j=0; j<document.getElementsByTagName('input').length; j++) {

        if(document.getElementsByTagName('input')[j].type=='radio'){

            let radio = document.getElementsByTagName('input')[j];
            radio.nextSibling.data = questions[i-1].options[j];
            document.getElementsByTagName('input')[j].checked = false;
            radio.addEventListener("click", eventListenerSetAnswer);

        }   

    }     
  
}

eventListenerSetAnswer = function(event){
    let target = event.target;    
    target.parentElement.value = target.value;
}

eventListenerNext = function(event, questions, answers){    
    let questionForm = document.getElementsByClassName('form');
    let questionAnswer = questionForm[0].value;
    
    let currentNumberElement = document.getElementById('question-number');
    let currentNumber = parseInt(currentNumberElement.innerText);
    questionNumber = currentNumber + 1;
    
    if (questionNumber <= questions.length){
        showQuestion(questions, questionNumber);    

        displayButton('start-button');
        displayButton('previous-button');
    }

    answers[currentNumber-1] = questionAnswer;

    setAnswer(answers, questionNumber);
    

    if (questionNumber == questions.length){
        displayButton('submit-button');
        hideButton('next-button');        
    }
}


eventListenerPrevious = function(event, questions, answers){
    let currentNumberElement = document.getElementById('question-number');
    let currentNumber = parseInt(currentNumberElement.innerText);
    questionNumber = currentNumber - 1;

    if (questionNumber >= 1){
        showQuestion(questions, questionNumber);                 
    }

    setAnswer(answers, questionNumber);

    if (questionNumber == 1){
        hideButton('start-button');
        hideButton('previous-button');

    }

    if (questionNumber == questions.length-1){
        hideButton('submit-button');
        displayButton('next-button');

    }    

}

eventListenerStart = function(event, questions){
    showQuestion(questions, 1);  
    hidePreviousButton();  
    hideStartButton();
    hideSubmitButton();
    displayNextButton();
}

displayButton = function(buttonId){
    let button = document.getElementById(buttonId);
        if(button.classList.contains('hide')){
            button.classList.remove('hide'); 
        }
}

hideButton = function(buttonId){
    let button = document.getElementById(buttonId);
        if(!button.classList.contains('hide')){
            button.classList.add('hide'); 
        }
}

setAnswer = function(answers, questionNumber){
    for (k=0; k<document.getElementsByTagName('input').length; k++) {  

        if(document.getElementsByTagName('input')[k].type=='radio'){

            let radio = document.getElementsByTagName('input')[k]; 

            if(k+1 == answers[questionNumber-1]){
                document.getElementsByTagName('input')[k].checked = true;
            }
        }          
    }  
}


window.onload = initialize;