import Hero from './sections/Hero';
import About from './sections/About';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';
import Contact from './sections/Contact';
import Clients from './sections/Clients';
import Projects from './sections/Projects';
import WorkExperience from './sections/Experience';

export default function Home() {
  return (
    <main>
      <Navbar />
      {/*<Hero />*/}
      <About />
      {/*<Projects />*/ }
      <Clients />
      {/*<WorkExperience />*/} 
      <Contact />
      <Footer />
    </main>
  );
}
