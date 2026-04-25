import './Hero.css'
import avatar from '../assets/avatar.png'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">✨ Available for work</div>
        <h1>Frontend Developer<br />&amp; Graphic Designer</h1>
        <p>Creo interfaces que combinan código limpio y diseño con personalidad.</p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">Ver proyectos</a>
          <a href="/cv.pdf" className="btn-outline" download>Descargar CV</a>
        </div>
        <div className="hero-socials">
          <a href="#" aria-label="GitHub">GH</a>
          <a href="#" aria-label="LinkedIn">LI</a>
          <a href="#" aria-label="Instagram">IG</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={avatar} alt="Carolina avatar" />
      </div>
    </section>
  )
}

export default Hero