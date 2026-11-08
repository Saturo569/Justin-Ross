import Home from './components/Home'; 
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Click from './components/Click';

function App(){
  return(
    <>
      <Click></Click>
      <Sidebar></Sidebar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
    </>
  )
}

export default App;