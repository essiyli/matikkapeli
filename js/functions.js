'use strict'

let rand_num1 = 0
let rand_num2 = 0


//funktio jolla voidaan laskea satunnaisluvut välille 1-10
const getRandomIntNumberRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

/*funktio, kutsuu kahdesti ylemmän getRandomIntNumberRange
funktiota ja tallentaa tulokset muuttujiin, muuttujien arvot syötetään
html:n kautta käyttöliittymän tulosteeseen id-selectoreiden num1 ja num2 avulla*/
const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberRange(1, 10)
    rand_num2 = getRandomIntNumberRange(1, 10)
    document.querySelector("#num1").innerHTML = rand_num1
    document.querySelector("#num2").innerHTML = rand_num2
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
});

let scoreCounter = 0
let errorCounter = 0

document.querySelector('button').addEventListener('click', () => {
    const answer  = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {
        alert('Correct!')
        scoreCounter ++
        document.querySelector("#oikeaVastaus").innerHTML = scoreCounter

    }
    else {
        alert('Incorrect!')
        errorCounter ++
        document.querySelector("#vaaraVastaus").innerHTML = errorCounter


    }

    randomizeNumbers()
    document.querySelector('input').value = ''
})



