let number = 0
document.getElementById('custom-addtion').addEventListener('click', () => {
    let clone = document.createElement('div')
    clone.setAttribute('id','card')
    clone.textContent = number
    number++
    document.querySelector('body').appendChild(clone)
})