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

//aggiungi un evento click al bottone
emailButtonEl.addEventListener("click", function(){

//memorizzo l'email inserita dall'utente
let emailinseritaEl = document.getElementById("email").value
console.log(emailinseritaEl)   



    for(let i = 0; i < emailVerificate.length; i++){
        
        console.log(emailVerificate[i])

        

        if(emailinseritaEl == emailVerificate[i]){
            let newEl = document.createElement("p")
            newEl.innerText = "true"
            console.log(newEl.innerText)
            emailContainerEl.append(newEl)
            

        } else {(emailinseritaEl != emailVerificate[i])
            let newEl = document.createElement("p")
            newEl.innerText = "false"
            console.log(newEl.innerText)
            emailContainerEl.append(newEl)
            
            
        }
        
        
        
            
        
    }     
        
        
    


})


