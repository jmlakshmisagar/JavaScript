let number = 0
const card = document.getElementById('custom-addtion')
card.addEventListener('click', () => {
    let clone = document.createElement('div')
    clone.setAttribute('id', 'card')
    clone.textContent = number
    number++
    document.querySelector('body').appendChild(clone)
})

setInterval(() => {
    card.click()
},1000)