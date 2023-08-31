import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function ProjectModal({ project, onClose }: any) {
   
    const imageLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }

  return (
    <div className="fixed w-full h-[110%] left-0 bg-blue-500 flex items-center justify-center z-50">
        <button className="absolute top-10 right-10 cursor-pointer text-4xl z-10" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>  
        
        <div className="sm:flex sm:flex-col sm:overflow-scroll md:flex-row items-center justify-between md:space-x-12 px-20 py-10 min-h-[80%] sm:text-base md:text-4xl">

          <div>
            <h3 className="sm:text-3xl md:text-6xl uppercase">{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <div>
            <div>
            <Image loader={imageLoader} src={project.mockup} width={800} height={1599} alt={project.title}/>
            </div>
          </div>
        
        </div>
    </div>
  )
}

