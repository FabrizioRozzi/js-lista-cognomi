var cognomi = [
  'Rozzi',
  'Gialli',
  'Rossi',
  'Bianchi',
  'Maddaloni'
];
cognome_inserito = prompt("Inserisci il tuo cognome...");
cognomi.push(cognome_inserito);
cognomi.sort();
console.log(cognomi);

for(var i=0; i<cognomi.length; i++){
  
  var elemento = cognomi[i];

  var contenuto_precendente = document.getElementById('lista').innerHTML;

  document.getElementById('lista').innerHTML = contenuto_precendente + "<li>" + cognomi[i] + "</li>"
  
  if(cognomi[i] == cognome_inserito){
    console.log("Il cognome é inserito nella posizione numero: " + (i=i+1))
  }
}

