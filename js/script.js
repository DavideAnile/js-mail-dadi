/* 
Mail
Chiedi all’utente la sua email,                                                   _____ CONSEGNA _______
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/

/* 
-crea una costante array di email
-aggiungi un evento click al bottone
-crea un ciclo for
? SE l'email dell'input è uguale al contenuto della costante
    °consenti accesso
: ALTRIMENTI
    °accesso negato

*/


//crea una costante array di email
const emailVerificate = ["davide@gmail.com", "pippo@gmail.com", "anna@gmail.com", "peppe@gmail.com", "pasquale@gmail.com"];
console.log(emailVerificate)

//creazione variabili
let emailContainerEl = document.getElementById("email-container");
let emailButtonEl = document.getElementById("email-button");
let newEl;
let annullaEl = document.getElementById("annulla");
let controllo;



//aggiungi un evento click al bottone
emailButtonEl.addEventListener("click", function(){





 controllo = false ; 
 console.log(controllo); 

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
        
        
if(controllo == true){
     
    newEl = document.createElement("div");
    newEl.innerText = "accesso consentito";
    newEl.classList.add("newEl")
    emailContainerEl.appendChild(newEl);
} else {(controllo == false)
     
    newEl = document.createElement("div");
    newEl.innerText = "Accesso negato";
    newEl.classList.add("newEl")
    emailContainerEl.appendChild(newEl);
    
}


})
