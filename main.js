let remainingTime = document.querySelector('#remainingTime');  // Tempo rimanente (cuntdown che visualizzeremo)
let countdownInput = document.querySelector('#countdown-input');  // Elemento che permetterà all'utente di inserire i secondi


// Catturiamo i 3 Btn start,stop e reset
let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let resetBtn = document.querySelector('#resetBtn');



let interval;
let counter;
let remainingSeconds = 0;


startBtn.addEventListener('click', () => {
    clearInterval(interval); // clearInterval ci permetterà di pulire il timer al click del button start, interval è la variabile che conterrà il setinterval che ci permette di creare il timer
    counter = countdownInput.value;  // counter sarà pari al valore che inserirà l'utente tramite l'input

    if (remainingSeconds !== 0) {
        counter = remainingSeconds;
    }  // condizione per far si che il timer se si mette in pausa non riparta da zero 

    interval = setInterval(() => {
        if (counter < 0) {
            clearInterval(interval)
            remainingTime.innerHTML = `Tempo scaduto`  // Quando il tempo sarà terminato in remaining time ci sarà tempo scaduto 
        } else {
            remainingTime.innerHTML = counter; // altrimenti remaining time avra come valore counter ovvero i secondi
            counter--; // counter decrementa
        }
    }, 1000)
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval)
    remainingSeconds = counter;
})

resetBtn.addEventListener('click', () => {
    countdownInput.value = ``;
    clearInterval(interval);
    remainingTime.innerHTML = ``;
})
