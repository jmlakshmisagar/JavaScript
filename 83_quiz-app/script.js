import question_answers from "./questions.js";

let score = 0;
let iterator = 0;

function renderQuestion() {
    let question = question_answers[iterator];

    if (!question) {
        document.getElementById('result').textContent = `Score ${score} / ${question_answers.length}`;
        return;
    }

    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = `
        <h3>${iterator + 1}. ${question.question}</h3>
        ${[1, 2, 3, 4].map(i => `
            <label>
                <input type="radio" name="answer" value="answer${i}">
                ${question[`answer${i}`]}
            </label><br>
        `).join('')}
    `;
    document.getElementById('next').setAttribute('disabled', ''); 
}

document.addEventListener('DOMContentLoaded', renderQuestion);

document.getElementById('next').addEventListener('click', () => {
    let selected = document.querySelector('input[name="answer"]:checked');

    if (selected && selected.value === question_answers[iterator].correct_answer) { 
        score++;
    }

    iterator++;
    renderQuestion();
});

document.getElementById('save').addEventListener('click', () => {
    alert('Selection Saved..');
    document.getElementById('next').removeAttribute('disabled');
});
