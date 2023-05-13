const incriment = document.querySelector<HTMLDivElement>(".incriment");
const dicriments = document.querySelector<HTMLDivElement>(".dicriment");
const schet = document.querySelector<HTMLDivElement>(".schet");
const xstop = document.querySelector<HTMLButtonElement>(".x");
const checkbox = document.querySelector<HTMLInputElement>(".checkbox");
const button = document.querySelector<HTMLLabelElement>(".button");
const timer = document.querySelector<HTMLInputElement>(".time");
const step = document.querySelector<HTMLInputElement>(".step");


checkbox?.addEventListener('change', () => {
    if (checkbox.checked) {
        button?.classList.add('checked');
        console.log('Animation triggered!');
    } else {
        button?.classList.remove('checked');
        console.log('Hello');
    }
});

function getInctiment(): void {

    incriment?.addEventListener("click", () => {
        schet.textContent = String(Number(step.value) + Number(schet.textContent));
    });
}

function getDicriment(): void {
    dicriments?.addEventListener("click", () => {
        if (schet.textContent === '0') {
            schet.textContent = '0';
        } else {
            schet.textContent = String(Number(schet.textContent) - Number(step.value));
        }
    });
}

function getXstop(): void {
    xstop?.addEventListener("click", () => {
        checkbox.checked = false;
        console.log('Hello');
    });
}

function getTime(): void {
    const timeValue = timer.value;
    if (timeValue !== '0') {

    }
}

function getStep(): void {
    const stepValue = step.value;
    if (stepValue !== '0') {
        schet.textContent += stepValue;
    }
}

function init(): void {
    getStep();
    getTime();
    getXstop();
    setTimeout(() => {
        getDicriment();
        getInctiment();
    }, Number(timer.value) * 100);
}

init();
