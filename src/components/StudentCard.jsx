
import { useState } from "react";

function StudentCard({
  prenom,
  nom,
  email,
  telephone,
  filiere,
  onSupprimer,
  onModifier
}) {

  
  const [coordonneesVisibles, setCoordonneesVisibles] =
    useState(false);

  
  function basculerInformations() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (

    <div className="student-card">

      <h3>{prenom} {nom}</h3>

      <p>
        <strong>Filière :</strong> {filiere}
      </p>

     
      {coordonneesVisibles && (
        <div className="contact-info">

          <p>
            <strong>Email :</strong> {email}
          </p>

          <p>
            <strong>Téléphone :</strong> {telephone}
          </p>

        </div>
      )}

     
      <button onClick={basculerInformations}>
        {coordonneesVisibles
          ? "Masquer les informations"
          : "Afficher les informations"}
      </button>

     
<button onClick={() => onModifier({
  prenom,
  nom,
  email,
  telephone,
  filiere
})}>        Modifier
      </button>

      
      <button onClick={()=>onSupprimer(email)}>
        Supprimer
      </button>

    </div>

  );
}

export default StudentCard;
