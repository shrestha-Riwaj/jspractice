const questions = [
    {
        question: "Which country won the first football world cup?",
        answers:[
            {text:"Urugay", correct:true},
            {text:"Germany", correct:false},
            {text:"Argentina", correct:false},
            {text:"England", correct:false},
        ]
    },
    {
        question: "Which country won the recent euro cup?",
        answers:[
            {text:"England", correct:false},
            {text:"France", correct:false},
            {text:"Spain", correct:true},
            {text:"Portugal", correct:false},
        ]
    },
    {
        question: "Which country has won the most world cup",
        answers:[
            {text:"Argentina", correct:false},
            {text:"Brazil", correct:true},
            {text:"Italy", correct:false},
            {text:"Germany", correct:false},
        ]
    },
    {
        question: "Which team won the 2024 UEFA",
        answers:[
            {text:"Real Madrid", correct:true},
            {text:"Barcelona", correct:false},
            {text:"Dortmund", correct:false},
            {text:"Bayern Munich", correct:false},
        ]
    },
];

const questioElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questioElement.innerHTML=questionNo + "." + 
    currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"; 
}

function showScore(){
    resetState();
    questioElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex <questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
