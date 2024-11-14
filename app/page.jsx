import About from "./section/About"
import Clients from "./section/Clients"
import Hero from "./section/Hero"
import Navbar from "./section/Navbar"
import Project from "./section/Projects"
const App = () => {
  return (
    <main className="max-w-[1400px] mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Clients />
    </main>

  )
}

export default App
