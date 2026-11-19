
import React, { useState } from "react";

function StudentForm({
  onAjouterEtudiant,
  etudiantAModifier,
  onModifierEtudiant,
}) {
  
const [nom, setNom] = useState(etudiantAModifier?.nom || "");
const [prenom, setPrenom] = useState(etudiantAModifier?.prenom || "");
const [email, setEmail] = useState(etudiantAModifier?.email || "");
const [telephone, setTelephone] = useState(etudiantAModifier?.telephone || "");
const [filiere, setFiliere] = useState(etudiantAModifier?.filiere || "");
const [annee, setAnnee] = useState(etudiantAModifier?.anneeEtude || "");
const [groupe, setGroupe] = useState(etudiantAModifier?.groupe || "");
const [ville, setVille] = useState(etudiantAModifier?.ville || "");
const [image, setImage] = useState(etudiantAModifier?.image || "");
const [erreurs, setErreurs] = useState({});
function validerFormulaire() {
  const nouvellesErreurs = {};

  if (!nom.trim()) {
    nouvellesErreurs.nom = "Nom est obligatoire";
  }

  if (!prenom.trim()) {
    nouvellesErreurs.prenom = "Prenom est obligatoire";
  }

  setErreurs(nouvellesErreurs);

  return Object.keys(nouvellesErreurs).length === 0;
}

function handleSubmit(e) {
  e.preventDefault();

  const nouvelEtudiant = {
    nom,
    prenom,
    email,
    telephone,
    filiere,
    anneeEtude: annee,
    groupe,
    ville,
    image,
  };
  if (!validerFormulaire()) {
  return;
}

  if (etudiantAModifier) {
    onModifierEtudiant({
      ...etudiantAModifier,
      ...nouvelEtudiant,
    });
  } else {
    onAjouterEtudiant(nouvelEtudiant);
  }
}


 



  return (
    <form onSubmit={handleSubmit}>
     <h2>
  {etudiantAModifier ? "Modifier l'étudiant" : "Ajouter un étudiant"}
</h2>

      <label>Nom :</label>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      {erreurs.nom && (
  <p className="error-msg">{erreurs.nom}</p>
)}

      <label>Prénom :</label>
      <input
        type="text"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
      />
      {erreurs.prenom && (
  <p className="error-msg">{erreurs.prenom}</p>
)}

      <label>Email :</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

<label>Téléphone :</label>
<input
  type="tel"
  value={telephone}
  onChange={(e) => setTelephone(e.target.value)}
/>

<label>Filière :</label>
<select value={filiere} onChange={(e) => setFiliere(e.target.value)}>
  <option value="">Choisir une filière</option>
  <option value="GLSI">GLSI</option>
  <option value="DSI">DSI</option>
  <option value="RSI">RSI</option>
</select>

<label>Année d'étude :</label>
<input type="text" value={annee} onChange={(e) => setAnnee(e.target.value)} />

<label>Groupe :</label>
<input type="text" value={groupe} onChange={(e) => setGroupe(e.target.value)} />

<label>Ville :</label>
<input type="text" value={ville} onChange={(e) => setVille(e.target.value)} />


<div className="form-group">
  <label>Image :</label>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      const fichier = e.target.files[0];

      if (fichier) {
        setImage(URL.createObjectURL(fichier));
      }
    }}
  />
</div>

      <button type="submit" className="btn-submit">
  {etudiantAModifier ? "Modifier" : "Ajouter"}
</button>
    </form>
  );
}

export default StudentForm;
