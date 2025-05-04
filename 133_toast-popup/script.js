document.getElementById('showToast').addEventListener('click', () => {
    let toast = document.createElement('div')
    toast.innerText = document.getElementById('message').value
    toast.setAttribute('id', 'toast')
    document.querySelector('body').appendChild(toast)
})