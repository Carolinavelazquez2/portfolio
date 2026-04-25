import { useEffect, useRef, useState } from 'react'
import './About.css'
import aboutImg from '../assets/about.png'

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1800
        const start = performance.now()
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>{count}{suffix}</span>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src={aboutImg} alt="Carolina diseñando" />
      </div>
      <div className="about-content">
        <p className="about-tag">— Sobre mí</p>
        <h2>Diseñadora gráfica y<br />Frontend Developer</h2>
        <p className="about-text">
          Soy Carolina, diseñadora gráfica y frontend developer apasionada 
          por crear experiencias visuales que combinan código y diseño. 
          Me encanta dar vida a ideas — desde la identidad de una marca 
          hasta una interfaz que se mueve y enamora.
        </p>
        <p className="about-text">
          Actualmente enfocada en React y motion design, buscando proyectos 
          donde el diseño y el código trabajen juntos.
        </p>
        <div className="about-counters">
          <div className="counter-item">
            <strong><Counter target={4} suffix="+" /></strong>
            <span>Proyectos completados</span>
          </div>
          <div className="counter-item">
            <strong><Counter target={6} suffix="+" /></strong>
            <span>Tecnologías</span>
          </div>
          <div className="counter-item">
            <strong>∞</strong>
            <span>Tazas de café ☕</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About