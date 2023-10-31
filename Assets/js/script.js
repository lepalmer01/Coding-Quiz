
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
        