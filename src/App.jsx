import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Process from "./components/Process.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <main>
      <Navbar />

      <Hero />
      <Services />
      <Projects />
      <Process />
      <About />
      <Contact />

      <Footer />
    </main>
  );
}

export default App;