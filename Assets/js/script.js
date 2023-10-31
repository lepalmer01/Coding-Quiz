
var timerElement = document.querySelector(".timer");
var startButton = document.querySelector("#start-button");
var startContainer = document.querySelector("start-container")
var quizContainer = document.querySelector(".quiz-container")
var questionEl = document.getElementById("question")
var btnList = document.querySelector(".btn-list")


//Create function to initiate quiz, display questions and multiple choice answers to user
function startQuiz() {
    if (index === theQuestions.length) {
        endQuiz()
    }

    startContainer.classList.add("hide")
    quizContainer.classList.replace("hide", "show")

    questionEl.textContent = theQuestions[index].question
    btnList.innerHTML = ""
    for (let i = 0; i < theQuestions[index].answers.length; i++) {
        var btn = document.createElement("button")
        btn.setAttribute("class", "btn-answer")
        btn.textContent = theQuestions[index].answers[i]
        btnList.append(btn)
    }
}

//Create countdown timer for quiz 
function setTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount

        if (timerCount == 0) {
            endQuiz()
        }
    }, 1000)
}





























// Create array to store questions, answers and correct answer
var theQuestions = [
    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        answers: ["It is an ordered list of values", "It is an ordered list of objects", "It is an ordered list of strings", "It is an ordered list of functions"],
        correct: "It is an ordered list of values"
    }, {
        question: "Which of the following is not a Javascript data type?",
        answers: ["Null", "Array", "Boolean", "Function"],
        correct: "Function"
    }, {
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        answers: ["Function/Method", "Preprocessor", "Triggering Event", "Condition"],
        correct: "Function/Method"
    }, {
        question: "Which method attaches an event handler to the specified element?",
        answers: ["getElementById", "innerHTML", "addEventListener", "none of the above"],
        correct: "addEventListener"
    }, {
        question: "Which function is used to convert an object into a string?",
        answers: ["parse()", "stringify()", "convert()", "none of the above"],
        correct: "stringify()"
    }
]