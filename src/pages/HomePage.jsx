import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import SkillsSection from '../components/home/SkillsSection';
import ProjectsSection from '../components/home/ProjectsSection';
import ContactSection from '../components/home/ContactSection';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Juan Miguel Rashley Andrada | Information Technology Student Portfolio"
        description="Portfolio of Juan Miguel Rashley Andrada, a 2nd year Information Technology student at West Visayas State University specializing in Java, Web Development, and Software Engineering."
        canonical="/"
      />
      <section id="home">
        <Hero />
      </section>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
