const flashcards = [
{
question:"What is HTML?",
answer:"HTML stands for Hyper Text Markup Language."
},
{
question:"What is CSS?",
answer:"CSS is used to style web pages."
},
{
question:"What is JavaScript?",
answer:"JavaScript adds interactivity to websites."
},
{
question:"What is GitHub?",
answer:"GitHub is a platform for hosting code repositories."
}
];

let currentCard = 0;

function loadCard(){
document.getElementById("question").innerText =
flashcards[currentCard].question;

document.getElementById("answer").innerText =
flashcards[currentCard].answer;

document.getElementById("answer").style.display="none";
}

function showAnswer(){
document.getElementById("answer").style.display="block";
}

function nextCard(){
currentCard=(currentCard+1)%flashcards.length;
loadCard();
}

function prevCard(){
currentCard=(currentCard-1+flashcards.length)%flashcards.length;
loadCard();
}

loadCard();
