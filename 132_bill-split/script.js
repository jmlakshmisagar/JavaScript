let form = document.getElementById('billSplit');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let amount = parseFloat(document.getElementById('amount').value);
    let peopleCount = parseInt(document.getElementById('peopleCount').value);

    let selectedTipInput = document.querySelector('input[name="tip"]:checked');
    let tipPercentage = selectedTipInput ? parseFloat(selectedTipInput.value) : parseFloat(document.getElementById('customTip').value || 0);

    let tipAmount = (amount * tipPercentage) / 100;
    let grandTotal = amount + tipAmount;
    let eachPersonPays = grandTotal / peopleCount;

    document.querySelector('.grand-total').textContent = grandTotal.toFixed(2);
    document.querySelector('.tip-amount').textContent = tipAmount.toFixed(2);
    document.querySelector('.total-amount').textContent = amount.toFixed(2);
    document.querySelector('.per-person').textContent = eachPersonPays.toFixed(2);
});
