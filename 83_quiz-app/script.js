import question_answers from "./questions.js";

let score = 0;
let question_number_set = [];
let iterator;
let question_number = 0;

document.addEventListener('DOMContentLoaded', renderQuestions);

function generateRandom() {
    if (question_answers.length <= question_number_set.length) {
        document.querySelector('.quizBox').innerHTML = "";
        document.getElementById('next').style.display = 'none';
        document.getElementById('result').innerHTML = `
            <h2>Score: ${score} / ${question_answers.length}</h2>
            <button onclick="window.location.reload()">Restart Quiz</button>
        `;
        return null;
    }

    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * question_answers.length);
    } while (question_number_set.includes(randomNumber));

    question_number_set.push(randomNumber);
    return randomNumber;
}

function renderQuestions() {
    iterator = generateRandom();
    if (iterator === null) return;

    const quizBox = document.querySelector('.quizBox');
    const question_answer = question_answers[iterator];

    quizBox.innerHTML = `
        <h4>${question_number + 1}. ${question_answer.question}</h4>
        ${[1, 2, 3, 4].map(i =>
            `<label for="answer${i}">
                <input type="radio" name="answer" value="${question_answer[`answer${i}`]}">
                ${question_answer[`answer${i}`]}
            </label><br/>`
        ).join('')}
    `;
    document.getElementById('next').setAttribute('disabled', '');
}

document.addEventListener('change', () => {
    if (document.querySelector('input[name="answer"]:checked')) {
        document.getElementById('next').removeAttribute('disabled');
    }
});

document.getElementById('next').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return;

    const selected_answer = selectedOption.value;
    if (selected_answer === question_answers[iterator].correct_answer) {
        score++;
    }

    console.log(score);
    question_number++;
    renderQuestions();
});
