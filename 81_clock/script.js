setInterval(() => {
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    document.getElementById('hours').textContent = hours
    document.getElementById('minutes').textContent = minutes
    document.getElementById('seconds').textContent = seconds
}, 1000)