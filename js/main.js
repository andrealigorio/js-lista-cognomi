//CREO VAR ARRAY DI COGNOMI
var surnameList = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
//INSERISCO NELLA VAR IL COGNOME UTENTE
var surnameUser = prompt("Inserisci il tuo cognome");
//LO AGGIUNGO ALL'ARRAY PRECEDENTEMENTE CREATO
surnameList.push(surnameUser);
//ORDINO L'ARRAY IN MODO ALFABETICO
surnameList.sort();
//CREO VAR CONTATORE GENERALE E VAR SEGNAPOSTO
var i = 0;
var numberUser = 0;
//CON IL CICLO WHILE NON APPENA TROVO IL COGNOME INSERITO AGGIUNGO 1 ALLA VAR SEGNAPOSTO
while (i < surnameList.length) {
    if (surnameList[i] !== surnameUser) {
        i++;
    } else {
        numberUser = i + 1;
        i++;
    }
}