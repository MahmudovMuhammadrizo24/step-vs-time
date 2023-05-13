var incriment = document.querySelector(".incriment");
var dicriments = document.querySelector(".dicriment");
var schet = document.querySelector(".schet");
var xstop = document.querySelector(".x");
var checkbox = document.querySelector(".checkbox");
var button = document.querySelector(".button");
var timer = document.querySelector(".time");
var step = document.querySelector(".step");
console.log(checkbox);
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
        schet.textContent = String(Number(step.value) + Number(schet.textContent));
    });
}
function getDicriment() {
    dicriments.addEventListener("click", function () {
        if (schet.textContent === '0') {
            schet.textContent = '0';
        }
        else {
            schet.textContent = String(Number(schet.textContent) - Number(step.value));
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
    var timeValue = timer.value;
    if (timeValue !== '0') {
    }
}
function getStep() {
    var stepValue = step.value;
    if (stepValue !== '0') {
        schet.textContent += stepValue;
    }
}
function init() {
    getStep();
    getTime();
    getXstop();
    setTimeout(function () {
        getDicriment();
        getInctiment();
    }, parseInt(timer.value) * 100);
}
init();
