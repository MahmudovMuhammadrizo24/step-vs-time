/*const incriment = document.querySelector(".incriment");
const dicriments = document.querySelector(".dicriment");
const schet = document.querySelector(".schet");
const xstop = document.querySelector(".x");
const checkbox = document.querySelector(".checkbox");
const button = document.querySelector(".button");
const timer = document.querySelector(".time");
const step = document.querySelector(".step");

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        button.classList.add('checked');
        console.log('Animation triggered!');
    }
    else {
        button.classList.remove('checked');
        console.log('Hello');
    }
});

function getInctiment() {

    incriment.addEventListener("click", function () {

        schet.textContent = Number(step.value) + Number(schet.textContent)
    });

}
function getDicriment() {
    dicriments.addEventListener("click", function () {
        if (schet.textContent == 0) {
            schet.textContent = 0;
        } else {
            schet.textContent = Number(schet.textContent) - Number(step.value);
        }
    });

}
function getXstop() {
    xstop.addEventListener("click", function () {
        checkbox.checked = false;
        console.log('Hello');
    });
}

function getTime() {
    let timeValue = timer.value;
    if (timeValue !== '0') {

    }
}
function getStep() {
    let stepValue = step.value;
    if (stepValue !== '0') {
        schet.textContent += stepValue;
    }
}
function init() {
    getStep();
    getTime()
    getXstop();
    setTimeout(() => {
        getDicriment();
        getInctiment();
    }, timer.textContent + "00");
}
init();*/
