import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import YouTube from 'react-youtube'

export default function ProjectModal({ project, onClose }: any) {
  const imageLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  // Define state to track the current section index
  const [currentSection, setCurrentSection] = useState(0)

  // Array of sections with their corresponding data
  const sections = [
    {
      title: '',
      content: (
        <div>
          <Image loader={imageLoader} src={project.mockup} width={800} height={1599} alt={project.title} className="max-h-[60vh] w-auto" />
        </div>
      ),
    },
    {
      title: 'Video Demo',
      content: (
        <div className="flex max-w-screen">
        <YouTube
  videoId={project.videoURL}
  className="w-full overflow-hidden flex-1"
/>
      </div>
      ),
    },
    {
      title: 'Tech Stack',
      content: (<div className="flex flex-row flex-wrap space-x-2 my-4 lg:text-3xl justify-center">
        {project.techStack.map((tech: string, index: string) => (
          <p key={index} className="border my-1 px-2 rounded-lg">
            {tech}
          </p>
        ))}
      </div>),
    },
  ]

  // Function to navigate to the previous section
  const goToPreviousSection = () => {
    setCurrentSection((prevSection) => Math.max(prevSection - 1, 0))
  }

  // Function to navigate to the next section
  const goToNextSection = () => {
    setCurrentSection((prevSection) => Math.min(prevSection + 1, sections.length - 1))
  }

  return (
    <div className="fixed max-w-screen min-h-screen left-0 top-0 bg-blue-500 flex items-center justify-between z-50">
      <button className="absolute top-10 right-10 cursor-pointer text-4xl z-10" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <div className="flex flex-col md:flex-row items-center justify-between p-8 md:space-x-10 lg:px-20 lg:py-10 min-h-[80%] sm:text-base md:text-4xl">
        <div className="flex-1 flex-col">
          <h3 className="text-3xl md:text-6xl uppercase">{project.title}</h3>
          <p>{project.description}</p>
          <div className="my-4">
            <a
              href={project.github}
              className="text-white hover:text-peachcobbler transition-all hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>

        </div>
        <div className="flex flex-col flex-1 items-center min-h-[30vh] ">
          <div>
            {/* Display the current section */}
            <h3 className="sm:text-xl md:text-2xl uppercase bg-peachcobbler rounded-t pl-2">{sections[currentSection].title}</h3>
            {sections[currentSection].content}
          </div>

          {/* pagination */}
          <div className="absolute space-x-10 bottom-0">
            <button className="cursor-pointer text-4xl z-10 hover:scale-110 hover:transition-all" onClick={goToPreviousSection}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="cursor-pointer text-4xl z-10 hover:scale-110 hover:transition-all" onClick={goToNextSection}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
