import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Team } from './components/Team'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Address } from './components/Address'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <Team />
        <Services />
        <Contact />
        <Address />
      </main>
      <Footer />
    </>
  )
}
