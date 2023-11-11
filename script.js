let dateCourante = new Date();
let jour = dateCourante.getDate();
let mois = dateCourante.getMonth() + 1;
let annee = dateCourante.getFullYear();
let heure = dateCourante.getHours();
let minute = dateCourante.getMinutes();

let stringMois;

switch (mois) {
    case 1:
        stringMois = "Janvier"
        break;
    case 2:
        stringMois = "Fevrier"
        break;
    case 3:
        stringMois = "Mars"
        break;
    case 4:
        stringMois = "Avril"
        break; 
    case 5:
        stringMois = "Mai"
        break;  
    case 6:
        stringMois = "Juin"
        break;
    case 7:
        stringMois = "Juillet"
        break;
    case 8:
        stringMois = "Aout"
        break;
    case 9:
        stringMois = "Septembre"
        break;
    case 10:
        stringMois = "Octobre"
        break; 
    case 11:
        stringMois = "Novembre"
        break;  
    case 12:
        stringMois = "Decembre"
        break;                     
}

document.querySelector(".main__time__date").innerHTML = jour+" "+stringMois+" "+annee
document.querySelector(".main__time__heure").innerHTML = heure+"h"+minute

let secondes = 0
let minutes = 0
let heures = 0
let idInterval = null
function start(){
    idInterval = setInterval(()=>{
        if(secondes<59){
            secondes++
            if(secondes < 10)
                document.querySelector(".main__chrono__seconde").innerHTML = "0"+secondes
            else
                document.querySelector(".main__chrono__seconde").innerHTML = secondes
        }
        else{
            document.querySelector(".main__chrono__seconde").innerHTML = "00"
            secondes = 0
            if(minutes < 59){
                minutes++
                if(minutes < 10)
                    document.querySelector(".main__chrono__minute").innerHTML = "0"+minutes
                else
                    document.querySelector(".main__chrono__minute").innerHTML = minutes
            }
            else{
                document.querySelector(".main__chrono__minute").innerHTML = "00"
                minutes = 0
                heures++
                if(heure<10)
                    document.querySelector(".main__chrono__heure").innerHTML = "0"+ heures
                else
                    document.querySelector(".main__chrono__heure").innerHTML = heures
            }
        }
    },1000)
}

function restart(){
    secondes = 0
    minutes = 0
    heures = 0
    document.querySelector(".main__chrono__heure").innerHTML = "00"
    document.querySelector(".main__chrono__minute").innerHTML = "00"
    document.querySelector(".main__chrono__seconde").innerHTML = "00"
    clearInterval(idInterval)
}

function pause(){
    clearInterval(idInterval)
}

document.querySelector(".main__commands__button--start").addEventListener("click",start)
document.querySelector(".main__commands__button--restart").addEventListener("click",restart)
document.querySelector(".main__commands__button--pause").addEventListener("click",pause)

