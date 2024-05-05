'use strict';
console.log('ok');



    // - definisco una variabile che parta da valore = 0 (somma)
    let somma = 0;
    const count = 10;
    // - creo un ciclo for che si ripeta per 10 volte dove inserisco l'operazione
    for (let i = 1; i <= count; i++) {
          // - calcolo la somma dei numeri da 1 a 10
        somma += i;
      
    }
  
  

    // - fuori dal ciclo calcolo la media dei numeri

    let media = somma / 10;


    // - stampo i risultati somma e media in console

    console.log('la somma dei primi dieci numeri è:', somma);
    console.log('la media dei primi dieci numeri è:', media);