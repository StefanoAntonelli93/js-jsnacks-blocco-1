'use strict'

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

console.log('ok');

//     // - definisco una variabile parola1 e salvo il valore di un prompt;
const parola1 = prompt('Inserisci la prima parola');
console.log('la prima parola è:', parola1);

//     // - definisco una variabile parola2 e salvo il valore di un prompt;

const parola2 = prompt('Inserisci la seconda parola');
console.log('la seconda parola è:', parola2);

// - definisco le variabili per le lunghezze delle parole e le salvo in console; (lParola1 e lParola2)
const lParola1 = parola1.length; 
const lParola2 = parola2.length; 
// Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.
console.log(lParola1);
console.log(lParola2);
//    SE lparola1 > lparola2
//    -allora stampo prima parola 1 poi parola 2
//    altrimenti SE lparola2 > lparola1
//    -stampo prima parola 2 poi parola 1
//    altrimenti
//    -stampo le parole hanno la stessa lunghezza
if (lParola1 > lParola2) {
    console.log(`${parola1} è più lunga di ${parola2}`);
}
