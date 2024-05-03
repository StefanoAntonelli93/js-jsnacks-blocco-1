'use strict';

console.log('ok');

// - definisco una variabile di un numero iniziale in questo caso 0 (somma = 0)
let somma = 0;

// - creo un ciclo for che si ripeta per 10 volte
for (let i = 0; i < 10; i++) {
   
    // - definisco una variabile che chieda un numero all'utente e la salvo in un prompt (numberUser) 
    let numberUser = parseInt(prompt('inserisci un numero:'));
     // - sommare i risultati
    somma += numberUser;
}
// - scrivere in console la somma
console.log("La somma di tutti i numeri inseriti è:", somma);