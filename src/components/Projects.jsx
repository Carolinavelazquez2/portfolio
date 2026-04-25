import './Projects.css'
import pawky from '../assets/pawky.png'
import tindog from '../assets/tindog.png'
import mysite from '../assets/mysite.png'

const projects = [
  {
    id: 1,
    title: 'Pawky',
    description: 'Tienda de ropa y accesorios para mascotas. Identidad de marca completa — nombre, paleta, logo, tipografía y web funcional con animaciones CSS.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: pawky,
    demo: 'https://carolinavelazquez2.github.io/tienda-ropa/',
    code: 'https://github.com/Carolinavelazquez2/tienda-ropa/',
  },
  {
    id: 2,
    title: 'TinDog',
    description: 'Landing page de una app estilo Tinder para perros. Diseño responsive con secciones de pricing, testimonios y llamada a la acción.',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    image: tindog,
    demo: 'https://carolinavelazquez2.github.io/Tindog/',
    code: 'https://github.com/Carolinavelazquez2/Tindog',
  },
  {
    id: 3,
    title: 'MySite',
    description: 'Sitio de presentación personal con parallax, sección de habilidades y contacto. Primer proyecto autodidacta de desarrollo web.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: mysite,
    demo: 'https://carolinavelazquez2.github.io/MySite/',
    code: 'https://github.com/Carolinavelazquez2/MySite',
  },
  {
    id: 4,
    title: 'Portfolio',
    description: 'Este mismo portfolio — diseñado y desarrollado desde cero en React. Identidad visual propia, componentes reutilizables y animaciones CSS.',
    tags: ['React', 'CSS', 'Vite'],
    image: null,
    demo: '#',
    code: 'https://github.com/Carolinavelazquez2',
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <p className="projects-tag">— Mi trabajo</p>
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-preview">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="project-placeholder">✨</div>
              )}
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer" className="link-demo">Ver demo →</a>
                <a href={project.code} target="_blank" rel="noreferrer" className="link-code">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects