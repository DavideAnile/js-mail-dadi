/* 
Mail
Chiedi all’utente la sua email,                                                   _____ CONSEGNA _______
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/

/* 
-crea una costante array di email
-creazione variabili
-aggiungi un evento click al bottone impostando il valore della variabile controllo in "false"
-crea un ciclo for
? SE l'email dell'input è uguale al contenuto della costante
    °il valore della variabile controllo diventa "true"


? SE il valore di controllo è "true"
    °stampa accesso consentito
 : ALTRIMENTI
    °stampa accesso negato
*/



//crea una costante array di email
const emailVerificate = ["davide@gmail.com", "pippo@gmail.com", "anna@gmail.com", "peppe@gmail.com", "pasquale@gmail.com"];
console.log(emailVerificate)

//creazione variabili
let emailContainerEl = document.getElementById("email-container");
let emailButtonEl = document.getElementById("email-button");
let controllo;

//aggiungi un evento click al bottone
emailButtonEl.addEventListener("click", function(){

emailButtonEl.disabled = "disabled"

    controllo = false ; 


//memorizzo l'email inserita dall'utente
    let emailInseritaEl = document.getElementById("email").value;
    console.log(emailInseritaEl)  ;
    
    for(let i = 0; i < emailVerificate.length; i++){
        console.log(emailVerificate[i])

        
        if (emailInseritaEl == emailVerificate[i]){

            controllo = true;
            console.log(controllo)
        }
        
    }     
    
    /*? SE il valore di controllo è "true"
        °stampa accesso consentito */
    if(controllo == true){
         
        let newEl = document.createElement("div");
        newEl.innerText = "accesso consentito";
        newEl.classList.add("newEl")
        emailContainerEl.appendChild(newEl);
    
    
    /* : ALTRIMENTI
        °stampa accesso negato */
    } else {(controllo == false)
         
        let newEl = document.createElement("div");
        newEl.innerText = "Accesso negato";
        newEl.classList.add("newEl")
        emailContainerEl.appendChild(newEl);
        
    }
    
    
    });




    /* 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.                               _________ CONSENGNA __________
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

/* 

- creo varibili bottoni
- crea evento al click del bottone
-genera un numero random da 1 a 6 per entrambi i giocatori
? SE il numero generato dal pc è maggiore di quello dell'utente
 °il pc vince
:? ALTRIMENTI SE il numero generato dal pc è minore di quello dell'utente
 °il pc perde
 :ALTRIMENTI
    °rigioca


*/

    
       
        
        
// - creo varibili bottoni        
let launchButtonEl = document.getElementById("launchButton")

let resetButtonEl = document.getElementById("reset-button")
        
let numberContainerEl = document.getElementById("number-container")
    


// - crea evento al click del bottone
launchButtonEl.addEventListener("click", function(){

    launchButtonEl.disabled = "disabled"


// -genera un numero random da 1 a 6 per entrambi i giocatori    
    let userNumberEl = Math.round(Math.random() * 6 ) ;
    document.getElementById("userNumber").value = userNumberEl
            

 // -genera un numero random da 1 a 6 per entrambi i giocatori          
    let pcNumberEl = Math.round(Math.random() * 6)
    document.getElementById("pcNumber").value = pcNumberEl

// ? SE il numero generato dal pc è maggiore di quello dell'utente
//       °il pc vince

            if (pcNumberEl > userNumberEl){
                 let risultato = document.createElement("div")
                 risultato.innerText = "Il pc Ha vinto"
                 numberContainerEl.appendChild(risultato)


 //:? ALTRIMENTI SE il numero generato dal pc è minore di quello dell'utente
 //         °il pc perde                
            } else if (pcNumberEl < userNumberEl){

                let risultato = document.createElement("div")
                 risultato.innerText = "L'utente Ha vinto"
                 numberContainerEl.appendChild(risultato)
            
//   :ALTRIMENTI
//    °rigioca         
                } else {
                let risultato = document.createElement("div")
                 risultato.innerText = "Parità"
                 numberContainerEl.appendChild(risultato)
            }
            
            

        })


        

        


        
            









            
        
        
        




