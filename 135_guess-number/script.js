let randomNumber;

document.getElementById('generate').addEventListener('click', () => {
    randomNumber = generateNumber();
    console.log("Generated Number:", randomNumber);
    if (randomNumber !== undefined) {
        document.getElementById('generate').setAttribute('disabled', 'true');
        document.getElementById('startedd').innerText = 'Game Started...';
        document.getElementById('result').innerText = '';
    }
});

function generateNumber() {
    return Math.floor(Math.random() * 101);
}

document.getElementById('submit').addEventListener('click', () => {
    const input = document.getElementById('number');
    const selectedNumber = parseInt(input.value);
    const message = document.getElementById('result');

    if (isNaN(selectedNumber)) {
        message.innerText = 'Please enter a valid number.';
        return;
    }

    if (selectedNumber < randomNumber) {
        message.innerText = 'Too Low...';
    } else if (selectedNumber > randomNumber) {
        message.innerText = 'Too High...';
    } else {
        message.innerText = 'Correct! 🎉';
    }
    input.value=''
});

document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('generate').removeAttribute('disabled');
    document.getElementById('startedd').innerText = '';
    document.getElementById('result').innerText = '';
    document.getElementById('number').value = '';
    randomNumber = undefined;
});
