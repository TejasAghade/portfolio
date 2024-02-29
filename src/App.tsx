import './App.css'
import Navbar from './app/components/Navbar'
import Introduction from './app/pages/Introduction'
import Projects from './app/pages/Projects'
import Skills from './app/pages/Skills'

function App() {

  return (
    <>
      <Navbar />
      <Introduction />
      <Skills/>
      <Projects />
    </>
  )
}

export default App
