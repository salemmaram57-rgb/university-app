import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
const etudiant = {
  nom: "Salem",
  prenom: "Mayssa",
  email: "salemmaram57@gmail.com",
  telephone: "52209935",
  filiere: "GLSI2",
  annéedétude: "2026/2027",
  Groupe: "A",
  ville: "Mahdia",
};
function App() {
  const [count, setCount] = useState(0);

  return (
 
    <body>
