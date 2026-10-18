import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from "./Header";
import WaveDivider from "./WaveBanner";
import TextWindow from "./TextWindow";
import ContactForm from './ContactForm';
import DriftCards from './DriftCards';
import ReviewTiles from './ReviewTiles';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="snap-container">
  <section className="snap-section">
    <Header style={{ position: 'relative', zIndex: 1 }} />
  </section>
  <section className="snap-section">
    <DriftCards />
    <WaveDivider />
  </section>
  <section className="snap-section">
    <ReviewTiles />
    <WaveDivider />
  </section>
  <section className="snap-section">
    <ContactForm />
    <WaveDivider />
  </section>
</div>   

        
        
    </>
  )
}

export default App;