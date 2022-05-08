import About from '../src/Components/About'
import Navbar from '../src/Components/Navbar'
import Projects from '../src/Components/Projects'
import Skills from '../src/Components/Skills'
import Testimonials from '../src/Components/Testimonials'
import Contact from '../src/Components/Contact'


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
