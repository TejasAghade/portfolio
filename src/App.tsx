import './App.css'
import Navbar from './app/components/Navbar'
import Experience from './app/pages/Experience'
import Introduction from './app/pages/Introduction'
import Projects from './app/pages/Projects'
import Skills from './app/pages/Skills'

function App() {

  return (
    <>
     
      <div className="root-wr">
        <div className="nav-wr w-16 flex justify-center fixed left-0 h-full">
          <Navbar />
        </div>
        <div className="app-wr ml-8 flex flex-col">
          <Introduction />
          <Skills/>
          <Projects />
          <Experience/>
        </div>
        

      </div>

    </>
  )
}

export default App
