import Hero from "./components/Hero"
import HorizontalScrolling from "./components/HorizontalScrolling"
import AllProducts from "./components/AllProducts"
import Services from "./components/Serveces"
import AllMachines from "./components/AllMachines"
import Aboutpage from "./components/Showroom"
import Projects from "./components/Projects"
export default function Home() {
  return (
    <main>
      <Hero />
      <HorizontalScrolling />
      <AllProducts />
      <AllMachines />
      <Services />
      <Aboutpage />
      <Projects />
    </main>
  )
}
