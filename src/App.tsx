
import './App.css'
import Contact from './components/Contact'
import Main from './components/Main'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Skills from './components/Skills'
// about at bottom
function App() {

  return (
    <>
      <div className="motion-safe:animate-fadeIn">
        <Sidenav />
        <Main />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App;
