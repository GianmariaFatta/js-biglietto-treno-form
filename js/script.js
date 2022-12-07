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



// //recupero elementi in pagina 
const userName = document.getElementById("username");
const nameElement = document.getElementById("name")
const genButton =document.getElementById("generate");
const eraseButton =document.getElementById("erase")
const moneyElement =document.getElementById("money")
const kmsElement= document.getElementById("kms")
const ageElement =document.getElementById("age")
const discountElement=document.getElementById("discount")
const trainElement=document.getElementById("train")
const codElement=document.getElementById("code")





//aggancia il bottone
eraseButton.addEventListener("click", function(){
    nameElement.value="";
    kmsElement.value="";
    userName.innerText = " ";
    moneyElement.innerText="";

    
})
genButton.addEventListener("click", function(){


    //numero carrozza
    

    let randomNumber =Math.floor(Math.random()*(10)+1);
    console.log(randomNumber)
    trainElement.innerText= randomNumber;

    //codice cp

    let randomNumberCode =Math.floor(Math.random()*(99999)+10000);
    console.log(randomNumberCode)
    codElement.innerText= randomNumberCode;
    
    
    //gestimao il nome
    const text = nameElement.value.trim();
    console.log(text);
    userName.innerText = text;
    nameElement.value="";
    
    
    
    
    // gestiamo il prezzo
    const distance = kmsElement.value.trim();
    const discountBig= (distance * 0.21)*0.6;
    const discountSmall =(distance *0.21)*0.8

    
    if(isNaN (ageElement.value) || isNaN (kmsElement.value) || (ageElement.value <=0) || (kmsElement.value <=0)){
        moneyElement.innerText= "HAI INSERITO CARATTERI INVALIDI, RIPROVA";
        userName.innerText =""
    }    
    
    
    else if(ageElement.value >= 65 ){
        moneyElement.innerText= "€" + (discountBig).toFixed(2);
        ageElement.value="";
        kmsElement.value="";
        discountElement.innerText="Sconto del 40% over 65";
        
    }else if (ageElement.value < 18 ){
        moneyElement.innerText= "€" + (discountSmall).toFixed(2);
        ageElement.value="";
        kmsElement.value="";
        discountElement.innerText="Sconto del 20% under 18"
    }
    else{
        
        //costo di base
        const distance = kmsElement.value.trim();
        moneyElement.innerText= "€" + (distance * 0.21).toFixed(2);
        ageElement.value="";
        kmsElement.value="";
        discountElement.innerText="///"
    }
    

    
});




// //calcola il prezzo del biglietto

//stabilirire la distanza che l'utente vuole percorrere


// //stabilire sconto del 20%
// //stabilire sconto del 40%


//aggancio l'event listenear al button

