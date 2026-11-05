
import { useState } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  // Liste des étudiants
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "Slim",
      nom: "Boubaker",
      email: "slimboubaker@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "GLSI"
    },
    {
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra.trabelsi@gmail.com",
      telephone: "+216 22 222 222",
      filiere: "GLSI"
    },
    {
      prenom: "Ahmed",
      nom: "Ben Ali",
      email: "ahmed.benali@gmail.com",
      telephone: "+216 55 555 555",
      filiere: "RT"
    }
  ]);

  // Recherche
  const [recherche, setRecherche] = useState("");

  // 1. Ajouter un étudiant
  function ajouterEtudiant() {

    const prenom = prompt("Donner le prénom :");
    if (!prenom || !prenom.trim()) return;

    const nom = prompt("Donner le nom :");
    if (!nom || !nom.trim()) return;

    const email = prompt("Donner l'email :");
    if (!email || !email.trim()) return;

    const telephone = prompt("Donner le téléphone :");
    if (!telephone || !telephone.trim()) return;

    const filiere = prompt("Donner la filière :");
    if (!filiere || !filiere.trim()) return;

    const nouvelEtudiant = {
      prenom: prenom.trim(),
      nom: nom.trim(),
      email: email.trim(),
      telephone: telephone.trim(),
      filiere: filiere.trim()
    };

    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  // 2. Supprimer un étudiant
  function supprimerEtudiant(email) {

    setEtudiants(
      etudiants.filter(
        (etudiant) => etudiant.email !== email
      )
    );
  }

  // 3. Modifier un étudiant
  function modifierEtudiant(email) {

    const nouveauPrenom = prompt("Donner le nouveau prénom :");

    if (!nouveauPrenom || !nouveauPrenom.trim()) return;

    setEtudiants(
      etudiants.map((etudiant) =>
        etudiant.email === email
          ? { ...etudiant, prenom: nouveauPrenom.trim() }
          : etudiant
      )
    );
  }

  // 4. Filtrer les étudiants
  const etudiantsFiltres = etudiants.filter((etudiant) => {

    const texte = recherche.toLowerCase();

    return (
      etudiant.prenom.toLowerCase().includes(texte) ||
      etudiant.nom.toLowerCase().includes(texte) ||
      etudiant.filiere.toLowerCase().includes(texte)
    );

  });

  return (
    <div className="app">

      <Header />

      <Navbar />

      <main className="container">

        <h1>University App</h1>

        {/* Recherche */}
        <div className="search-section">

          <input
            type="text"
            placeholder="Rechercher par nom ou filière..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />

        </div>

        {/* Ajouter un étudiant */}
        <div className="actions">

          <button onClick={ajouterEtudiant}>
            + Ajouter un étudiant
          </button>

        </div>

        {/* Liste des étudiants */}
        <div className="students-list">

          {etudiantsFiltres.length > 0 ? (

            etudiantsFiltres.map((etudiant) => (

              <StudentCard
                key={etudiant.email}
                prenom={etudiant.prenom}
                nom={etudiant.nom}
                email={etudiant.email}
                telephone={etudiant.telephone}
                filiere={etudiant.filiere}
                onSupprimer={() => supprimerEtudiant(etudiant.email)}
                onModifier={() => modifierEtudiant(etudiant.email)}
              />

            ))

          ) : (

            <p>Aucun étudiant trouvé.</p>

          )}

        </div>

        <p className="total">
          Nombre total d'étudiants : {etudiants.length}
        </p>

      </main>

      <Footer />

    </div>
  );
}

export default App;
