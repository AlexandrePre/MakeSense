import FormInscription from "../components/Inscription/FormInscription";
import Connexion from "../components/Inscription/Connexion";
import Explain from "../components/Inscription/Explain";
import "./Inscription.css";

export default function Inscription() {
  return (
    <div className="inscription">
      <Explain />
      <Connexion />
      <FormInscription />
    </div>
  );
}
