const buttonElement = document.getElementById('checkbox')
const clearElement = document.getElementById('clear')
const messageElement = document.getElementById('message')
const mouseElement = document.getElementById('mouse')
buttonElement.addEventListener('click', () => {
    messageElement.innerHTML = "&nbsp button pressed"
})

document.addEventListener('keydown', (e) => {
    messageElement.innerHTML = e.key + ` &nbsp key pressed`
})

clearElement.addEventListener('click', () => {
    messageElement.innerHTML = ''
    clearElement.checked = 'unchecked'
})

document.addEventListener('mousemove', (e) => {
    mouseElement.innerHTML = `mouse ${e.clientX}, ${e.clientY}`
})