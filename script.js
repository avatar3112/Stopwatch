let seconds = 0
let tens = 0
const displayTens = document.getElementById('tens')
const displaySeconds = document.getElementById('seconds')
const buttonStart = document.getElementById('button-start')
const buttonStop = document.getElementById('button-stop')
const buttonReset = document.getElementById('button-reset')
let interval


// The clearInterval() method clears a timer set with the setInterval() method.
// myInterval = setInterval(function, milliseconds);
// clearInterval(myInterval);


buttonStart.onclick = () => {
  clearInterval(interval)
  interval = setInterval(timer, 10)

  // iska matlab hai ki har 10 millisecond ke baad timer() function call ho jaega 
  // aur jab kabhi bhi hum is particular animatoin ko rokna chahte hai to clarInterval use krte h 
}

buttonStop.onclick = () => {
  clearInterval(interval)
}

buttonReset.onclick = () => {
  clearInterval(interval)
  tens = 0
  seconds = 0
  displayTens.innerHTML = `0${tens}`
  displaySeconds.innerHTML = `0${seconds}`
}

const timer = () => {
  console.log(tens);
  tens++

  if (Number(tens) <= 9) {
    displayTens.innerHTML = `0${tens}`
  }

  if (Number(tens) > 9) {
    displayTens.innerHTML = tens
  }

  if (Number(tens) > 99) {
    console.log('seconds')
    seconds++
    displaySeconds.innerHTML = `0${seconds}`
    tens = 0
    displayTens.innerHTML = `0${tens}`
  }

  if (Number(seconds) > 9) {
    displaySeconds.innerHTML = seconds
  }
}
