// GIUSEPPE CENIVIVA

// Array
/** Array - esercizio 1
 * 
 * 
 * aggiungere un elemento all'inizio dell'array
 * 
 * 1° "hello" 
 * 2° 100
 * *
 */
//SOLUZIONE
//  const myArray = [true,null];
//  myArray.unshift("hello");
//  console.log(myArray);
 
/** Array - esercizio 2
 * 
 */
//  * 
//  * aggiungere un elemento ad una specifica index
//  * elemento "abc" -> index 10
//  * 
//  * calcolare la lunghezza finale // 11
//  * 
//  */
//SOLUZIONE
// const array = [1,2,3,4,5,6,7,8,9,10,11,12];
// if (array.length>10)
//   array.splice(10,0,"abc");
// else
//   array[10]="abc";

// console.log(array +" "+ array.length);

/** Array - esercizio 3
 * 
 * 
 * creare un array di 4 oggetti
 * 
 * Ogni oggetto deve avere almeno una marca, un prezzo e un colore
 * 
 * Infine aggiungi un ulteriore oggetto
 * 
 */
//SOLUZIONE
// const arrLista = [
//   {marca: "Nike",
//    prezzo: 100,
//    colore: "Bianco",
//   },
//   {marca: "Adidas",
//   prezzo: 120,
//   colore:"Nero",
//   },
//   {marca: "Puma",
//   prezzo: 80,
//   colore:"Giallo",
//   },
//   {marca: "Kappa",
//   prezzo: 60,
//   colore: "Rosso"
//   }
// ];
// arrLista.push({marca: "Vans", prezzo: 90, colore: "viola"});
// console.log(arrLista);


// Loop 
/* Loop esercizio 1
* generate 4 cifre random, il range è da 1000 a 9999.
* Assicuratevi che questo numero random non si accoppi con alcuno dei numeri nell'array
* se trovare un match hai bisogno di generare 4 nuove cifre
* se non trovi un match, il numero è unico, allora aggiungi nell'array.
*
*
*
* 
const myNumb = [2345, 3245, 7925, 5234, 4532]
*/

//SOLUZIONE
// const myNumb = [2345, 3245, 7925, 5234, 4532]
// const myNumb = [2345, 3245, 7925, 5234, 4532]
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let newNumb = getRandomInt (1000, 9999);
// (!myNumb.includes(newNumb)) ?   myNumb.push(newNumb) : newNumb = getRandomInt(1000, 9999);
// console.log(myNumb, newNumb);



// Array methods

/** forEach() - esercizio 1 
 *  calcola la somma degli elementi di un array
 * 
 * const numbers = [1,2,3,4,5,6,20,15,30];
 * 
 */
// SOLUZIONE
// const numbers = [1, 2, 3, 4, 5, 6, 20, 15, 30];
// console.log(numbers.reduce((acc, value) => acc += value));

/**  - esercizio 
 * const lettere = ['a','b','a','b','c','d','a'];
 * realizzare un oggetto che tenga traccia del numero di lettere presente nell'array
 * 
 * 
 * let count = {};
 * 

 * 
 */
// SOLUZIONE
// const lettere = ['a', 'b', 'a', 'b', 'c', 'd', 'a', 'f'];
// let count = {};

// lettere.forEach((elem) => {
//   count[elem] = count[elem] ? count[elem] + 1 : 1;
// });
// console.log(count);


/** - esercizio 
 * fa un array di elementi JSON crea un array "posts"
 * 
 * const postsJSON = [
 *      '{ "idPost": 1222, "commenti":1 }',
 *      '{ "idPost": 6143, "commenti":32}',
 *      '{ "idPost": 7281, "commenti":12}' 
 * ]
 * 
 * 
 * 
 
 * 
 * 

 * 
 */

/** esercizio 2

 * 
 * esempio 
 * 
 * (allons y!) => ALLONS Y!
 * 
 * (geronimo) => geronimo
 * 
 */
// SOLUZIONE

// let stringa = 'Allows Y!';
// let verifica = (str) => stringa.includes('!') ? stringa = stringa.toUpperCase() : stringa = stringa.toLowerCase();
// console.log(verifica(stringa));

/** esercizio 3
 * 
 * partendo da un Array di prodotti genera un array contenente il valore totale dei prodotti presenti
 * 
 * esempio 
 * 
 * const prodotti = [
 *      {
 *         nomeProdotto:"mac book pro",
 *         prezzo:3000,
 *         quantita:15;
 *      },
 *      {
 *         nomeProdotto:"samsung 9plus",
 *         prezzo:935,
 *         quantita:5;
 *      },
 *      {
 *         nomeProdotto:"synology",
 *         prezzo:900,
 *         quantita:3;
 *      },
 * ]
 * 

 */
//SOLUZIONE
// const prodotti = [
// {
//   nomeProdotto: "mac book pro",
//   prezzo: 3000,
//   quantita: 15
// },
//  {
//   nomeProdotto: "samsung 9plus",
//   prezzo: 935,
//   quantita: 5
// },
// {
//   nomeProdotto: "synology",
//   prezzo: 900,
//   quantita: 3
// },
// ]

//  let valoreTotale = [];
//  prodotti.forEach((elem, index)=>valoreTotale[index]=elem.prezzo*elem.quantita);
//  console.log(valoreTotale);


/** map() - esercizio 4 
 * trasforma un array di stringhe in un array di numeri
 * 
 * const stringhe = ['1','2','3','4','5'];
 * 

 * 
 */

 //SOLUZIONE

// let stringhe = ['1', '2', '3', '4', '5'];
// stringhe= stringhe.map(x => parseInt(x));
// console.log(stringhe + ' ' + typeof(stringhe[1]));


/**  esercizio 1
 * verificare quali utenti hanno la maggiore età  
 * const persone = [{name:"Brad",eta:15},{name:"Marika",eta:25},{name:"Roby",eta:17},{name:"Sarah".eta:19}]
 * 
 * 
 * const adulti = people.filter(persona => persona.eta >= 18)
 */
//SOLUZIONE

// const persone = [{ name: "Brad", eta: 15 }, { name: "Marika", eta: 25 }, { name: "Roby", eta: 17 }, { name: "Sarah", eta: 19}];
// const maggiorenni = persone.filter(persona => persona.eta >= 18);
// console.log(maggiorenni);

 /** challenge 
  * 
  * La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola
  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".
  *  
  */

//FUNZIONE NUMERI RANDOM (PRESA SU GOOGLE)
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
//CREO CARTELLA GIOCATORE E CARTELLA SOLUZIONE
let cartella = [];
let soluzione = [11, 5, 7, 90, 56, 69, 13, 46, 88, 74];

//RIEMPIO CARTELLA GIOCATORE SENZA DOPPIONI
cartella.push(getRandomInt(1,90));
for(let i=1; i<10; i++){
  let cont = getRandomInt(1,90);
  (cartella.some((elem, ind)=>cont==elem) ? i-- : cartella.push(cont));
}

//VERIFICA MATCH TRA 2 CARTELLE CON DOPPIO FOR
let contaMatch = 0;
for (elem of cartella)
  for (prop of soluzione)
    if (elem==prop)
      contaMatch++;


//STAMPA RISULTATO
console.log(cartella);
console.log(soluzione);
console.log(contaMatch);
switch(contaMatch){
  case 2 : console.log("AMBO"); break;
  case 3 : console.log("TERNO"); break;
  case 4 : console.log("CINQUINA"); break;
  case 5 : console.log("CINQUINA"); break;
  case 6 : console.log("CINQUINA"); break;
  case 7 : console.log("CINQUINA"); break;
  case 8 : console.log("CINQUINA"); break;
  case 9 : console.log("CINQUINA"); break;
  case 10: console.log("TOMBOLA"); break;
  default: console.log("C'HAI SECCO!")
}



  /** reduce() - esercizio 
   * crea una funzione "popularPostsId" con due parametri "posts" e "minimalCommentsQuantity"
   * Questa funzione dovrà ritornare un array di postIds dei posts che hanno una quantità di "commenti" almeno della quantitàminima
   * 
    const posts = [
  		{
  			title:"Come trovare lavoro come js developer?",
  			postId:321,
  			comments:25
  		},
  		{
  			title:"È complicato Es6",
  			postId:213,
  			comments:5
  		},
  		{
  			title:"React o Angular?",
  			postId:123,
  			comments:12
  		},
  ]
  
  const minimalCommentsQuantity = 10;
   *
   *
   *
   *
   */

   /** reduce() - esercizio 2
    * 
    * Create una funzione "quantityByCateg" con un parametro "products"
    * 
    * Questa funzione dovrà ritornare un oggetto con chiavi uguali di categorie e valori uguali alla somma di tutte le quantita
    * in ogni categoria
    * 
     const products = [
  		{
  			title:"Phone case",
  			price:30,
  			quantity:2,
  			category:"Accessory"
  		},
  		{
  			title:"Samsung 8plus",
  			price:800,
  			quantity:1,
  			category:"Phone"
  		},
  		{
  			title:"Headphones",
  			price:70,
  			quantity:1,
  			category:"Accessory"
  		},
  		{
  			title:"Sport Watch",
  			price:100,
  			quantity:2,
  			category:"Watches"
  		},
  ]
    * 
    * 
    * 
    */





/** funzioni - esercizio 1
 * Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.
 * 
 
 Input:Anna
        
 */
 

/** Clouser - Esercizio 1  
 * esercizio come riesco a non stamparlo 3 volte?
// let view;
// function inizializzazione(){
// 	view = 'panorama';
// 	console.log('la view è state set');
// }

// inizializzazione();
// inizializzazione();
// inizializzazione();
// console.log(view)
 * 
 * 
 


 */

 /**Clousure esercizio - 2
  * 
  * come posso far uscire tutti i numeri?
  * 
  * 
  * 
  *  const array = [1,2,3,4];

    function forFun(){
    	for( var i = 0; i < array.length; i++){
    		setTimeout( () => {
    			console.log('Sono all\'indice ' + i);
    		},2000)
    	}

    forFun();
  */





/**
 * 
 *  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti: il giorno e il mese.
  La funzione deve restituire a quale giorno dell'anno corrisponde (compreso tra 1 e 366).
  Esempio:
    Input : giorno = 5, mese = 2
    Output:
            36

 * 
 * 
 */

