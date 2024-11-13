import About from './About'
import Hero from './Hero'
import Navbar from './Navbar'

const MyPage = () => {
  return (
    <main className="max-w-[1400px] mx-auto relative">
      <Navbar />
      <Hero />
      <About />
    </main>

  )
}

export default MyPage
