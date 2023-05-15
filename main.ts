
/*
const incriment = document.querySelector('.incriment');
const dicriments = document.querySelector('.dicriment');
const schet = document.querySelector('.schet');
const xstop = document.querySelector('.x');
const checkbox = document.querySelector('.checkbox');
const button = document.querySelector('.button');
const timer = document.querySelector('.time');
const step = document.querySelector('.step');

checkbox?.addEventListener('change', () => {
    if (checkbox?.checked) {
        button?.classList.add('checked');
        console.log('Animation triggered!');
    } else {
        button?.classList.remove('checked');
        console.log('Hello');
    }
});

function getInctiment() {
    incriment?.addEventListener('click', () => {
        schet.textContent = String(Number(step.value) + Number(schet.textContent));
    });
}

function getDicriment() {
    dicriments?.addEventListener('click', () => {
        if (schet.textContent === '0') {
            schet.textContent = '0';
        } else {
            schet.textContent = String(Number(schet.textContent) - Number(step.value));
        }
    });
}

function getXstop() {
    xstop?.addEventListener('click', () => {
        checkbox.checked = false;
        console.log('Hello');
    });
}

function getStep() {
    const stepValue = step.value;
    if (stepValue !== '0') {
        schet.textContent += stepValue;
    }
}

function init() {
    getStep();
    getXstop();
    setTimeout(() => {
        getDicriment();
        getInctiment();
    }, Number(timer.value) * 100);
}

init();
*/

const increment = document.querySelector('.increment') as HTMLButtonElement;
const decrement = document.querySelector('.decrement') as HTMLButtonElement;
const counter = document.querySelector('.counter') as HTMLSpanElement;
const xstop = document.querySelector('.x') as HTMLButtonElement;
const checkbox = document.querySelector('.checkbox') as HTMLInputElement;
const button = document.querySelector('.button') as HTMLDivElement;
const timer = document.querySelector('.time') as HTMLInputElement;
const step = document.querySelector('.step') as HTMLInputElement;

checkbox?.addEventListener('change', () => {
    if (checkbox?.checked) {
        button?.classList.add('checked');
        console.log('Animation triggered!');
    } else {
        button?.classList.remove('checked');
        console.log('Hello');
    }
});

function getIncrement(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        increment?.addEventListener('click', () => {
            counter.textContent = String(Number(step.value) + Number(counter.textContent));
            resolve();
        });
    });
}

function getDecrement(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        decrement?.addEventListener('click', () => {
            if (counter.textContent === '0') {
                counter.textContent = '0';
            } else {
                counter.textContent = String(Number(counter.textContent) - Number(step.value));
            }
            resolve();
        });
    });
}

function getXstop(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        xstop?.addEventListener('click', () => {
            checkbox.checked = false;
            console.log('Hello');
            resolve();
        });
    });
}

function getStep(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const stepValue = step.value;
        if (stepValue !== '0') {
            counter.textContent = String(Number(stepValue) + Number(counter.textContent));
        }
        resolve();
    });
}
/*
async function init(): Promise<void> {
    await getStep();
    await getXstop();
    if (checkbox?.checked === true) {
        setTimeout(async () => {

            await getDecrement();
            await getIncrement();
        }, Number(timer.value) * 100);
    }
}
*/


function getTimer(): number {
    const timerValue = Number(timer.value);
    return !isNaN(timerValue) ? timerValue : 0;
}

function sleep(ms: number): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

async function init(): Promise<void> {
    await getStep();
    await getXstop();

    const timerValue = getTimer() * 1000;
    if (timerValue > 0) {
        await sleep(timerValue);
        await getIncrement();
    }
}
init();
