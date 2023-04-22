const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const millisecondElement = document.querySelector('.millisecond') 

// Buttons
const startButton = document.querySelector('.start ')
const pauseButton = document.querySelector('.pause ')
const stopButton = document.querySelector('.stop')
const newButton = document.querySelector('.new')

//Listeners
startButton.addEventListener('click', () => { 
     clearInterval(interval)
     interval = setInterval(startTimer, 10)
})


pauseButton.addEventListener('click', () => {
     clearInterval(interval)
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
    clearFields()
    disableBtn() 
})

newButton.addEventListener('click', () => {
    clearInterval(interval)
    counter++ 
    const results = document.querySelector('.results')
    const block = document.createElement('div')
    block.classList.add(`results__info`) 
    block.innerText = `Result: ${counter}: ${hour}:${minute}:${second}:${millisecond}`
    results.append(block)
    clearFields()
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
 
})
 
// Variables   
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval,
    counter = 0,
    disabled = true

    function startTimer() {
        millisecond++ 

        // MIlliseconds
        if(millisecond < 9) {
            millisecondElement.innerText = "0" + millisecond
        }
        if(millisecond > 9){
            millisecondElement.innerText = millisecond
        }
        if(millisecond > 99){
            second++ 
            secondElement.innerText = "0" + second
            millisecond = 0
            millisecondElement.innerText = "0" + millisecond
        }
    
    // Seconds
    if(second < 9){
        secondElement.innerText = "0" + second 
    }
    if(second > 9) {
        secondElement.innerText = second  
    }
    if(second > 59){
        minute++ 
        minuteElement.innerText = "0" + minute
        second = 0 
        secondElement.innerText = "0" + second
    }
    // Minutes
    if(minute > 9){
        minuteElement.innerText = minute
    }
    // Hours 
    if(hour > 9){
        minuteElement.innerText = hour
    }
    newButton.disabled = false 
}

function clearFields() {
    hour = 00 
    minute = 00
    second = 00
    millisecond = 00
    hourElement.textContent = "00"
    minuteElement.textContent = "00"
    secondElement.textContent = "00"
    millisecondElement.textContent = "00"
}

function disableBtn() {
    if(disabled) {
         newButton.disabled = true 
    }
}
disableBtn()
  