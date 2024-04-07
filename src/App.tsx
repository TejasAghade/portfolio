import './App.css'
import Navbar from './app/components/Navbar'
import Experience from './app/pages/Experience'
import Introduction from './app/pages/Introduction'
import Projects from './app/pages/Projects'
import Skills from './app/pages/Skills'

function App() {

  // const [mousePosition, setMousePosition] = useState({
  //   x:0,
  //   y:0
  // });

  // useEffect(()=>{
  //   const mouseMove = (e:MouseEvent)=>{
  //     setMousePosition({
  //       x : e.clientX,
  //       y : e.clientY
  //     })
  //   }
  //   window.addEventListener("mousemove", mouseMove);

  //   return ()=>{
  //     window.removeEventListener("mousemove", mouseMove);
  //   }
  // });

  // const variants = {
  //   default : {
  //     x : mousePosition.x-8,
  //     y : mousePosition.y-8 
  //   }
  // }

  return (
    <>
      <Navbar />
      <Introduction />
      <Skills/>
      <Projects />
      <Experience/>
      {/* <motion.div 
        variants={variants}  
        animate="default"
        transition={{delay:-0.2}}
        className="cursor"
      >

      </motion.div> */}


    </>
  )
}

export default App
