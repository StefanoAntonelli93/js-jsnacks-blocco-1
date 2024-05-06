'use strict';
console.log('bonus');



let somma = 0;
// - definisco una variabile che chieda all'utente un numero di 4 cifre e lo salvo in un prompt (userNumber)
const userNumber = Number(prompt('inserisci un numero di 4 cifre'));
console.log('il numero inserito è:', userNumber);

// - converto in stringa il numero di 4 cifre per poi iterarlo in un ciclo for
const input = userNumber.toString();
// - definisco una variabile che indichi se il numero inserito sia valido per l'operazione (isValidNumber)
let isValidNumber = false;

// - SE il numero è composto da 4 cifre ALLORA è valido altrimenti ripeti
if (userNumber >= 1000 && userNumber <= 9999)  {
    isValidNumber = true;

}

if (isValidNumber === true) {
    console.log('il numero è composto da 4 cifre');
    for (let i = 0; i < input.length; i++) {
        somma += parseInt(input[i]);

    }

 } else {
    console.log('il numero non è composto da 4 cifre');
  


 }

// - calcolo la somma delle cifre che compongono il numero
// - stampo il risultato in console

console.log('la somma è:', somma);