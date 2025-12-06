import Navbar from './components/common/Navbar';
import SocialSidebar from './components/common/SocialSidebar';
import Footer from './components/common/Footer';
import Hero from './components/home/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <SocialSidebar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
