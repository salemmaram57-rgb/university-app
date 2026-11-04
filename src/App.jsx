
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
import "./App.css";

const etudiants = [
  {
    prenom: "hana",
    nom: "Boubaker",
    email: "slim@gmail.com",
    telephone: "20111222",
    filiere: "Informatique"
  },
  {
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra@gmail.com",
    telephone: "22123456",
    filiere: "Cybersecurite"
  },
  {
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariem@gmail.com",
    telephone: "55123456",
    filiere: "Developpement Web"
  }
];

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <main className="container" id="etudiants">
        <h2 className="section-title">Liste des étudiants</h2>

        <div className="students-list">
          {etudiants.map((etudiant) => (
            <StudentCard
              key={etudiant.email}
              prenom={etudiant.prenom}
              nom={etudiant.nom}
              email={etudiant.email}
              telephone={etudiant.telephone}
              filiere={etudiant.filiere}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
