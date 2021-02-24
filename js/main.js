//CREO VAR ARRAY DI COGNOMI
var surnameList = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

//INSERISCO NELLA VAR IL COGNOME UTENTE
var surnameUser = prompt("Inserisci il tuo cognome");

//CONTROLLO CHE IL COGNOME SIA SCRITTO CORRETTAMENTE E LO SALVO IN UNA VAR
var surnameCheck = surnameUser.charAt(0).toUpperCase() + surnameUser.slice(1).toLowerCase();

//LO AGGIUNGO ALL'ARRAY PRECEDENTEMENTE CREATO
surnameList.push(surnameCheck);

//ORDINO L'ARRAY IN MODO ALFABETICO
surnameList.sort();

//TRAMITE CICLO FOR CREO TOT LI PER TUTTA LA MIA LISTA
for (var c = 0; c < surnameList.length; c++) {
    document.getElementById("surname_list").innerHTML += "<li>" + surnameList[c] + "</li>";
}

//CREO VAR CONTATORE GENERALE E VAR SEGNAPOSTO
var i = 0;
var numberUser = 0;

//CON IL CICLO WHILE NON APPENA TROVO IL COGNOME INSERITO AGGIUNGO 1 ALLA VAR SEGNAPOSTO
while (i < surnameList.length) {
    if (surnameList[i] !== surnameCheck) {
        i++;
    } else {
        numberUser = i + 1;
        i++;
    }
}

var position = document.getElementById("position").innerHTML = numberUser;