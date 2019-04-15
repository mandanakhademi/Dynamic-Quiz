
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
    
    let i = 1;
    showQuestion(questions, i);

}

showQuestion = function(questions, i){

    let questionNumber = document.getElementById('question-number');
    questionNumber.innerText = "Question"+i;

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
        radio.addEventListener("click", eventListenerSetAnswer);

        
    }
  }
}

eventListenerSetAnswer = function(event){
    let target = event.target;
    
    console.log(target.parentElement);
    target.parentElement.value = target.nextSibling.data;
    console.log(target.parentElement.value);

}



window.onload = initialize;