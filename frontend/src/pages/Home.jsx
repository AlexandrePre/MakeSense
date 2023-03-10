import Homebody from "../components/Home/Homebody";
import Buttontestme from "../components/Home/Buttontestme";
import NavBar from "../components/Home/NavBar";
import "./Home.css";
import Footer from "../components/Home/Footer";

export default function Home() {
  return (
    <div className="homePage">
      <NavBar />
      <header className="App-header">
        <h2> PRENONS DES DECISIONS </h2>
        <h2> COLLECTIVES </h2>
        <Buttontestme />
      </header>
      <Homebody />
      <Footer />
    </div>
  );
}
