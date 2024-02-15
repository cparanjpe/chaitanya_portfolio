import './App.css';
import Intro from './components/Intro/Intro'; 
import Navbar from './components/NavBar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App h-[100vh] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 via-slate-800 to-stone-900 text-[#ffffff] ">
      <Navbar />
      <Intro/>
      <About />
      <Projects />
      <Experience />
      
    </div>
  );
}

export default App;
