
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

  // État de visibilité
  const [coordonneesVisibles, setCoordonneesVisibles] =
    useState(false);

  // Afficher ou masquer les coordonnées
  function basculerInformations() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (

    <div className="student-card">

      <h3>{prenom} {nom}</h3>

      <p>
        <strong>Filière :</strong> {filiere}
      </p>

      {/* Affichage conditionnel */}
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

      {/* Bouton afficher / masquer */}
      <button onClick={basculerInformations}>
        {coordonneesVisibles
          ? "Masquer les informations"
          : "Afficher les informations"}
      </button>

      {/* Bouton modifier */}
      <button onClick={onModifier}>
        Modifier
      </button>

      {/* Bouton supprimer */}
      <button onClick={onSupprimer}>
        Supprimer
      </button>

    </div>

  );
}

export default StudentCard;
