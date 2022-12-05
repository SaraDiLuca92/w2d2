/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Premettendo che le variabili sono contenitori per dati, i data type ci indicano che tipo di dati abbiamo all'interno della variabile:
I principali data type, ossia tipi di variabili sono:
Numerico: quando la variabile ha valore numerico. Es. let numero=10.
Stringa: quando la variabile ha valore alfanumerico, quindi una sequenza di caratteri. Es. let nome="Sara".
Booleani:quando la variabile può assumere solo i valori true (vero) false (falso). Es. let altezza=true.
Null: se non ho assegnato un valore ad una variabile che ho già dichiarato. 
Undefined: significa indefinito, non posso usare cose che sono indefinite, quindi comparirà un avviso se le
variabili non sono definite e se vogliamo usarle dobbiamo definirle.
 */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
var nome = "Sara";
console.log(nome);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let numero1 = 12;
let numero2 = 20;
let risultato = numero1 + numero2;
console.log(risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let anni = 12;
console.log(anni);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
var nome = "Di Luca";
console.log(nome);
const annisergio = 20;
console.log(annisergio);
const annisergio = 30;
console.log(annisergio);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let quattro = 4;
let sottrazione = anni - quattro;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";
let uguaglianza = name1 === name2;
console.log(uguaglianza);
name2.toLowerCase();
console.log(uguaglianza);
