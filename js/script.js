// l programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//recupero elemento in pagina  
const moneyElement = document.getElementById("money");

//chiederre l'età all'utente    
const userAge = parseInt(prompt("Quanti anni hai?" , 28).trim());
console.log(userAge);

//chiedere all'utente quanti km deve percorrere 
const userDistance = parseInt(prompt("Quanti km devi percorrere?" , 50).trim());
console.log(userDistance);


//calcola il prezzo del biglietto
const userPrice = (0.21 * userDistance);
console.log(userPrice);

//stabilire sconto del 20%
let discountSmall = ((userPrice * 20) / 100 )
console.log(discountSmall);

//stabilire sconto del 40%
let discountBig = ((userPrice * 40) / 100)
console.log(discountBig);
 

//se è under 18...
if (isNaN (userAge) || isNaN (userDistance) || (userAge <=0) || (userDistance <=0)) {
    document.getElementById("money").innerText = "HAI INSERITO CARATTERI INVALIDI. RIPROVA";
 }
else if (userAge < 18){
    moneyElement.innerText = "il prezzo del tuo biglietto è di €" + (userPrice - discountSmall).toFixed(2)
}else if (userAge >= 65){
    moneyElement.innerText = "il prezzo del tuo biglietto è di €" + (userPrice - discountBig).toFixed(2) }
else { moneyElement.innerText = "il prezzo del tuo biglietto è di €" + userPrice.toFixed(2)};
