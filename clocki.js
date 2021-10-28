//Tabs
function Switch(evt, type) {
    var i, content, links

    content = document.getElementsByClassName('content')
    for (i = 0; i < content.length;i++) {
        content[i].style.display = 'none'
    }

    links = document.getElementsByClassName('links')
        for (i = 0; i < links.length;i++) {
            links.className = links[i].className.replace('active', '')
        }

    document.getElementById(type).style.display = 'block'
    evt.currentTarget.className += 'active'
}

//Digital
let digital = document.getElementById('digital')
setInterval(displayDigital,1000)

function displayDigital () {
    let currentTime = new Date()
    let Hdis = currentTime.getHours()
    let Mdis = currentTime.getMinutes()
    let Sdis = currentTime.getSeconds()

    Hdis = (Hdis < 10) ? '0' + Hdis : Hdis
    Mdis = (Mdis < 10) ? '0' + Mdis : Mdis
    Sdis = (Sdis < 10) ? '0' + Sdis : Sdis

    digital.innerText = Hdis + ':' + Mdis + ':' + Sdis
}

displayDigital()

// Analog
function rotation(e, ratio) {
    e.style.setProperty('--rotation', ratio * 360);
}

setInterval(displayAnalog,1000)

const hours = document.querySelector('[data-hours]')
const minutes = document.querySelector('[data-minutes]')
const seconds = document.querySelector('[data-seconds]')

function displayAnalog() {
    let currentTime = new Date()

    let Sratio = currentTime.getSeconds() / 60
    let Mratio = (Sratio + currentTime.getMinutes()) / 60
    let Hratio = (Mratio + currentTime.getHours()) / 12   

    rotation(hours, Hratio)
    rotation(minutes, Mratio)
    rotation(seconds, Sratio)
}
displayAnalog();

//EWC
const one = document.getElementById('ewcOne')
const two = document.getElementById('ewcTwo')
const three = document.getElementById('ewcThree')
const four = document.getElementById('ewcFour')
const five = document.getElementById('ewcFive')
const six = document.getElementById('ewcSix')
const seven = document.getElementById('ewcSeven')
const eight = document.getElementById('ewcEight')
const nine = document.getElementById('ewcNine')
const ten = document.getElementById('ewcTen')
const eleven = document.getElementById('ewcEleven')
const twelve = document.getElementById('ewcTwelve')
const half = document.getElementById('ewcHalf')
const ten2 = document.getElementById('ewcTen2')
const quarter = document.getElementById('ewcQuarter')
const twenty = document.getElementById('ewcTwenty')
const minutesEWC = document.getElementById('ewcMinutes')
const to = document.getElementById('ewcTo')
const past = document.getElementById('ewcPast')

function displayEWC() {
let currentTime = new Date()
if (currentTime.getMinutes() <= 30) {
    past.style.color = 'orangered'
} else {
    to.style.color = 'orangered'
}

switch(currentTime.getMinutes()) {
    case 30:
        half.style.color = 'orangered'
        minutesEWC.style.color = 'orangered'
    case 20:
        twenty.style.color = 'orangered'
        minutesEWC.style.color = 'orangered'
    case 15:
        quarter.style.color = 'orangered'
        minutesEWC.style.color = 'orangered'
    case 10:
        ten2.style.color = 'orangered'
        minutesEWC.style.color = 'orangered'
}
switch (currentTime.getHours()){
    case 0: 
        twelve.style.color = 'orangered'    
        break;
    case 1:
        one.style.color = 'orangered'
        break;
    case 2:
        two.style.color = 'orangered'
        break;
    case 3:
        three.style.color = 'orangered'
        break;
    case 4:
        four.style.color = 'orangered'
        break;
    case 5:
        five.style.color = 'orangered'
        break;
    case 6:
        six.style.color = 'orangered'
        break;
    case 7:
        seven.style.color = 'orangered'
        break;
    case 8:
        eight.style.color = 'orangered'
        break;
    case 9:
        nine.style.color = 'orangered'
        break;
    case 10:
        ten.style.color = 'orangered'
        break;
    case 11:
        eleven.style.color = 'orangered'
        break;
    }
    
}

displayEWC()

//console.log(currentTime.getHours())