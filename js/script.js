var form = document.getElementById("reservation");


function afficherErreur(id, texte) {
  document.querySelector("#erreur-" + id).textContent = texte;
}


function verifierFormulaire() {
  var valide = true;

  var nom = document.querySelector("#nom").value.trim().toLowerCase();
  var prenom = document.querySelector("#prenom").value.trim().toLowerCase();
  var email = document.querySelector("#email").value.trim();
  var tel = document.querySelector("#telephone").value.trim();
  var destination = document.querySelector("#destination").value;
  var date = document.querySelector("#date").value;
  var nb = document.querySelector("#nb").value;

  
  if (nom.length < 2) {
    afficherErreur("nom", "Le nom est obligatoire (2 lettres minimum).");
    valide = false;
  }
  for (const char of nom) {
    if (char < "a" || char > "z"){
      afficherErreur("nom", "Le nom est obligatoire (2 lettres minimum).");
      valide = false;
    } 
  }

  if (prenom.length < 2) {
    afficherErreur("prenom", "Le prénom est obligatoire (2 lettres minimum).");
    valide = false;
  }
  for (const char of prenom) {
    if (char < "a" || char > "z"){
      afficherErreur("prenom", "Le prénom est obligatoire (2 lettres minimum).");
      valide = false;
    } 
  }

    
  if (email.indexOf("@") < 1 || email.lastIndexOf(".") < email.indexOf("@") + 3) {
    afficherErreur("email", "Entrez une adresse e-mail valide (exemple : nom@gmail.com).");
    valide = false;
  }
  if (tel.length !== 8 || isNaN(tel)) {
    afficherErreur("telephone", "Le téléphone doit contenir 8 chiffres.");
    valide = false;
  }
  if (destination === "") {
    afficherErreur("destination", "Choisissez une destination.");
    valide = false;
  }
  if (date === "") {
    afficherErreur("date", "Choisissez une date de départ.");
    valide = false;
  }
  if (nb < 1 || nb > 10) {
    afficherErreur("nb", "Le nombre de voyageurs doit être entre 1 et 10.");
    valide = false;
  }
  alert("Nous avons le plaisir de vous confirmer votre réservation.");
  return valide;
}
