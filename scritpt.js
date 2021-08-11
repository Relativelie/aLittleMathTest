const par = document.querySelector("p");
const button = document.querySelector('.btn');
const rightAnswerOne = document.querySelector(".rightAnswerOne");
const rightAnswerTwo = document.querySelector(".rightAnswerTwo");
const rightAnswerThree = document.querySelector(".rightAnswerThree");
const rightAnswerFour = document.querySelector(".rightAnswerFour");
const rightAnswerFive = document.querySelector(".rightAnswerFive");

button.addEventListener("click", results);

function results(event) {
    event.preventDefault();

    let rightAnswersScore = 0;
    if (rightAnswerOne.checked === true) {
        rightAnswersScore ++
    }

    if (rightAnswerTwo.checked === true) {
        rightAnswersScore ++
    }

    if (rightAnswerThree.checked === true) {
        rightAnswersScore ++
    }

    if (rightAnswerFour.checked === true) {
        rightAnswersScore ++
    }

    if (rightAnswerFive.checked === true) {
        rightAnswersScore ++
    }

    par.textContent = "Your score: " + rightAnswersScore;
}