var scores=JSON.parse(localStorage.getItem("highScore")) || []

var ul = document.getElementById("score-history")

for (let i = 0; i <scores.length; i++) {
    var li = document.createElement("li")
    li.setAttribute("class", "list-item")
    li.textContent= `Initials: ${scores[i].initials} Score: ${scores[i].score}`
    ul.append(li)
}