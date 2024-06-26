import projectsData from '../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export const Portfolio = () => {
  const projects = projectsData

  return (
    <section className="pt-20 pb-28 px-6 lg:px-0" id="projects">
      <div className="mx-auto max-w-8xl">
        <header className="text-center space-y-4">
          <h1 className="text-port-black text-3xl font-bold capitalize">
            Projects
          </h1>
          <p className="text-2xl font-medium  text-port-gray max-w-2xl mx-auto">
            A testament to creativity and technical prowess, these showcase my
            learning and experience roadmap.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => {
            return (
              <div
                className="group space-y-0  card overflow-hidden relative p-0 h-[20rem] w-full"
                key={project.url}
              >
                <header>
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="block absolute h-full w-full"
                  />
                </header>

                <div className="group-hover:opacity-100 group-hover:scale-100 origin-top transition-all flex items-center justify-center space-x-8 scale-0  text-white  opacity-0 absolute top-0 left-0 right-0 bg-black/50 z-10 h-full">
                  <Link to={project['github-url']} target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="h-10" />
                  </Link>

                  <Link to={project['url']}>
                    <FontAwesomeIcon
                      icon={faLink}
                      className="h-10"
                      target="_blank"
                    />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
