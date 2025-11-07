import Header from "./components/Header.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Skills from "./components/Skills.jsx";
import SocialMedia from "./components/SocialMedia.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";


function App() {
  return (
    <div id="container">
      <Header />
      <AboutMe />
      <Projects />
      <Certifications />
      <Skills />
      <SocialMedia />
      <Footer />
    </div>
  );
}

// function abrirWhatsapp() {
//     var numero = "5551998695019";
//     var mensagem = "Olá, Eduardo!.";
//     var url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
//     window.open(url, '_blank');
// }

export default App;
