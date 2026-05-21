import Particles from './components/Particles/Particles.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Projects from './components/Projects/Projects.jsx';
import Tools from './components/Tools/Tools.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  return (
    <>
      <Particles />
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Tools />
        <Footer />
      </main>
    </>
  );
}
