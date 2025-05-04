const wordList = ['Developer', 'Student', 'GoldSmith']

let wordIndex = 0

const span = document.querySelector('span')

function typeWord(word) {
    span.innerText = ''
    word.split('').forEach((element, index) => {
        setTimeout(() => {
            span.innerText += element
        }, index * 250)
    });

    setTimeout(() => {
        wordIndex += 1
        typeWord(wordList[wordIndex])
    }, wordList.length * 300 + 2500)
}

typeWord(wordList[wordIndex])