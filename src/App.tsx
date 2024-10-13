import './App.css'

import Experience from './app/pages/Experience'
import Introduction from './app/pages/Introduction'
import Projects from './app/pages/Projects'
import Skills from './app/pages/Skills'



function App() {

  return (
    <>
      <Introduction />
      <Skills/>
      <Projects />
      <Experience/>
      <div className="intro-screen"></div>
    </>
  )
}

export default App
