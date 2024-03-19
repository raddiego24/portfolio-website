import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Projects from './components/Projects/projects';
import Footer from './components/Footer/footer';
import Contact from './components/Contact/contact';
import Resume from './components/Resume/resume';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/> 
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
