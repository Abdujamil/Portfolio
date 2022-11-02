import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Home from './components/Home/Home.js';
import Work from './components/Work/Work.jsx';
import Header from "./components/Header/Header.js";
import Skills from './components/Skills/Skills.js';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <About />
        <Work />
        <Skills />
        <Contact />
    </div>
  );
}

export default App;
