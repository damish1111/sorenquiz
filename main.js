var c = 0
var audioyay = new Audio('yay.mp3');
var audioboo = new Audio('boo.mp3');
var question = localStorage.getItem('question');
sessionStorage.setItem("question", question)
var score = localStorage.getItem('score');
sessionStorage.setItem("question", question)
console.log(score)
function getOption1(dropdown) {
  output1 = dropdown.options[dropdown.selectedIndex].value;
}
function getOption2(dropdown) {
  output2 = dropdown.options[dropdown.selectedIndex].value;
}
function next() {
  if (output1 == "correct" && output2 == "correct") {
    window.location.href = "right.html?" + question;
    localStorage.setItem('score', ++score);
    score = score + 1
  }
  else
  {
    window.location.href = "wrong.html?" + question;
  }
}

function nextquestion () {
      localStorage.setItem('question', ++question);
      window.location.href = "question" + (question) + ".html"
}
function begin () {
  localStorage.clear()
  window.location.href = "question.html"
}
window.onload = function() { 
  document.getElementById("Scored").innerHTML = "Congratulations You Scored " + score + "/10";
}

function restart() {
  window.location.href = "index.html"
}

window.onload = () => {
let bannerNode = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
bannerNode.parentNode.removeChild(bannerNode);
}
window.onload = () => { 
  document.getElementById("scored").innerHTML = "Congratulations You Scored " + score + "/10";
}