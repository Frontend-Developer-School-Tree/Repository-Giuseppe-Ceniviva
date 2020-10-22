//FUNZIONE NUMERI RANDOM (PRESA SU GOOGLE)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//CREO CARTELLA GIOCATORE E CARTELLA SOLUZIONE
let cartella = [];
let soluzione = [11, 5, 7, 90, 56, 69, 13, 46, 88, 74];

//RIEMPIO CARTELLA GIOCATORE
cartella.push(getRandomInt(1, 90));
for (let i = 1; i < 10; i++) {
    let cont = getRandomInt(1, 90);
    (cartella.some((elem, ind) => cont == elem) ? i-- : cartella.push(cont));
}

//VERIFICA MATCH TRA 2 CARTELLE CON DOPPIO FOR
let contaMatch = 0;
for (elem of cartella)
    for (prop of soluzione)
        if (elem == prop)
            contaMatch++;


//STAMPA RISULTATO
console.log("I tuoi numeri sono: "+cartella);
console.log("I numeri vincenti sono: " + soluzione);
console.log("I numeri azzeccati sono: "+contaMatch);
switch (contaMatch) {
    case 2: console.log("AMBO"); break;
    case 3: console.log("TERNO"); break;
    case 4: console.log("CINQUINA"); break;
    case 5: console.log("CINQUINA"); break;
    case 6: console.log("CINQUINA"); break;
    case 7: console.log("CINQUINA"); break;
    case 8: console.log("CINQUINA"); break;
    case 9: console.log("CINQUINA"); break;
    case 10: console.log("TOMBOLA"); break;
    default: console.log("C'HAI SECCO!")
}
