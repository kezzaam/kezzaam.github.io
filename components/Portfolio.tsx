import Link from 'next/link'
import { useState } from 'react'
import GuidingLight from './projects/animations/GuidingLight'
import Slumberjack from './projects/animations/Slumberjack'
import Spelldeck from './projects/animations/Spelldeck'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ProjectModal from './projects/ProjectModal'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Guiding Light',
      description:
        'A full stack educational, interactive resource for NZ naked eye stars with a focus on Māori astronomy and mythology.',
      display: <GuidingLight />,
      github: 'https://github.com/kezzaam/guidinglight',
      bgImage: '/images/nightskydark.jpg',
      techStack: ['NextJS', 'Typescript', 'Tailwind CSS', 'PrismaORM', 'MongoDB', 'NextAuth'],
      mockup: '/images/guidinglight_mockup.png',
      videoURL: 'xB7_SUUcH8E',
      features: [],
      development: [],
    },
    {
      id: 2,
      title: 'Slumberjack',
      description:
        'A frontend React application focused on helping users log, track and interpret their dreams over time.',
      display: <Slumberjack />,
      github: 'https://github.com/kezzaam/slumberjack',
      bgImage: '/images/luciddreaming.jpg',
      techStack: ['NextJS', 'Typescript', 'Tailwind CSS', 'Firebase'],
      mockup: '/images/slumberjack_mockup.png',
      videoURL: '',
      features: [],
      development: [],
    },
    {
      id: 3,
      title: 'Spelldeck',
      description:
        'A fun, interactive card deck for referencing Wizarding World spells from the Harry Potter API.',
      display: <Spelldeck />,
      github: 'https://github.com/kezzaam/spelldeck',
      bgImage: '/images/spelldeck.jpg',
      techStack: ['HTML', 'Javascript', 'CSS', 'Bootstrap', 'Express', 'NodeJS'],
      mockup: '/images/spelldeck_mockup.png',
      videoURL: '',
      features: [],
      development: [],
    },
  ]

  const [hovered, setHovered] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project:any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setIsModalOpen(false)
  }


  const handleMouseEnter = (projectId: any) => {
    setHovered(projectId)
  }

  const handleMouseLeave = () => {
    setHovered(null)
  }

  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen space-y-6">
      {/* <h2 className="text-3xl font-[600] text-left md:text-center">Latest work</h2> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            className={`card w-[320px] h-[460px] rounded-lg shadow overflow-hidden relative ${project.id === hovered ? 'hovered' : ''
              } ${index === currentIndex ? 'reveal' : 'hide'
              }`}
          >
            <div
              className="bg-overlay absolute inset-0 rounded-lg flex items-center justify-center"
              style={{
                background: `url(${project.bgImage}) center/cover`,
              }}
            >
              {project.display}
            </div>

            {hovered === project.id && (
              <div className="hover-content absolute inset-0 flex flex-col justify-center items-center p-6 text-center"
                   onClick={() => openModal(project)} // Open the modal when the card is clicked 
              >
                <h5 className="bg-blue-500 bg-rounded-2xl px-4 mb-2 text-2xl font-bold tracking-loose">
                  {project.title}
                </h5>
                <p>{project.description}</p>
                <div className="flex flex-row flex-wrap items-center justify-center space-x-2 mt-4">
                  {project.techStack.map((tech, index) => (
                    <p key={index} className="bg-blue-500 my-1 px-2 rounded-lg bg-opacity-50">
                      {tech}
                    </p>
                  ))}
                </div>
                <a
                  href={project.github}
                  className="mt-4 text-blue-500 hover:text-peachcobbler transition-all hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="pagination mt-4 md:hidden">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`px-4 py-2 rounded-lg ${index === currentIndex ? 'bg-blue-500 bg-opacity-50' : ''
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    {isModalOpen && (
      <ProjectModal project={selectedProject} onClose={closeModal} />
    )}
    </>
  )
}