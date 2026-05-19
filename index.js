document.getElementById('home').textContent = 0
document.getElementById('guest').textContent = 0
document.getElementById('period').textContent = 1

let homePoints = document.getElementById('home')
let guestPoints = document.getElementById('guest')
let period = document.getElementById('period')

function point1Home() {
    homePoints.textContent = Number(homePoints.textContent) + 1
}

function point2Home() {
    homePoints.textContent = Number(homePoints.textContent) + 2
}

function point3Home() {
    homePoints.textContent = Number(homePoints.textContent) + 3
}

function point1Guest() {
    guestPoints.textContent = Number(guestPoints.textContent) + 1
}

function point2Guest() {
    guestPoints.textContent = Number(guestPoints.textContent) + 2
}

function point3Guest() {
    guestPoints.textContent = Number(guestPoints.textContent) + 3
}

function minusHome () {
    homePoints.textContent = Number(homePoints.textContent) - 1
}

function minusGuest () {
    guestPoints.textContent = Number(guestPoints.textContent) - 1
}

function period1() {
    period.textContent = 1
}

function period2() {
    period.textContent = 2
}

function period3() {
    period.textContent = 3
}

function period4() {
    period.textContent = 4
}

function newGame() {
    homePoints.textContent = 0
    guestPoints.textContent = 0
    period.textContent = 1
}
