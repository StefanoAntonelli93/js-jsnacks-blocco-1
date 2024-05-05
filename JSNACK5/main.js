'use strict';
console.log('ok');

// Snack 5
//     // - creo un array vuoto
let emptyArray = [];


//     // - creo un ciclo for che si ripeta per sei volte
const count = 6;
for (let i = 0; i < count; i++) {
//     // definisco una variabile che chieda all'utente di inserire un numero intero e lo salvo in un prompt (userNumber)
    const userNumber = Number(prompt(`${i} di ${count} inserisci un numero`));
    console.log('il numero inserito è:', userNumber);
    //    SE numero utente disparo ALLORA inserisco nell'array 
    if  (!isNaN(userNumber)) {
        if (userNumber % 2 !== 0){
            emptyArray.push(userNumber);
        }
       

    } else {
        console.log(
          `${i} - Hai inserito un valore non numerico che è stato escluso dalla somma`
        );
        // i = i - 1;
        i--;
      }
}



  //     // - stampo in console il risultato 
  console.log('i numeri dispari sono:', emptyArray);



