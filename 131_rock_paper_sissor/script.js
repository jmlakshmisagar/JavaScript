
let RockPaperScissor = ['Paper', 'Rock', 'Scissor'];
let RockPaperScissorEmoji = ['✋🏻','✊🏻','✌🏻']

const winner = [
    [0, 2],
    [1, 0],
    [2, 1]
]

let score = {
    user1: 0,
    user2: 0
}

function generateRandom() {
    let random_number = Math.floor(Math.random() * RockPaperScissor.length);
    return random_number;
}
function animator() {
    const element1 = document.getElementById('user1Animation');
    const element2 = document.getElementById('user2Animation');
    element1.classList.add('rotateruser1');
    element2.classList.add('rotateruser2');

    setTimeout(() => {
        element1.classList.remove('rotateruser1');
        element2.classList.remove('rotateruser2');
    }, 1500);
}
function winnerChecker(num) {
    animator()
    setTimeout(() => {
        if (score.user1 + score.user2 === 10) {
            return score.user1 > score.user2 ? alert('user1 won') : alert('user2 won')
        }
        let user1 = num
        let user2 = generateRandom()
        document.getElementById('user1Animation').textContent = RockPaperScissorEmoji[user1]
        document.getElementById('user2Animation').textContent = RockPaperScissorEmoji[user2]

        const result = winner.some(patter => {
            return patter[0] === user1 && patter[1] === user2
        })

        if (result) {
            score.user1 += 1
            document.getElementById('winLoss').innerText = 'You Won'
            document.getElementById('user1Score').innerText = score.user1
            document.getElementById('user1ResultTitle').innerText = RockPaperScissor[num]
            document.getElementById('user2ResultTitle').innerText = RockPaperScissor[user2]
        } else {
            score.user2 += 1
            document.getElementById('winLoss').innerText = 'You Loss'
            document.getElementById('user2Score').innerText = score.user2
            document.getElementById('user1ResultTitle').innerText = RockPaperScissor[num]
            document.getElementById('user2ResultTitle').innerText = RockPaperScissor[user2]
        }
    }, 1500)
    document.getElementById('user1Animation').textContent ='✊🏻'
    document.getElementById('user2Animation').textContent = '✊🏻'

}

document.getElementById('rock').addEventListener('click', () => winnerChecker(1))
document.getElementById('paper').addEventListener('click', () => winnerChecker(0))
document.getElementById('scissor').addEventListener('click', () => winnerChecker(2))

