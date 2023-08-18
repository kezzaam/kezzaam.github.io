import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faFacebook, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="w-full text-center">
      <div className="roll text-3xl font-[600] sm:text-left md:text-center mb-6">
            <div className="text-peachcobbler"><h2>Get in touch</h2></div>
            <div className="text-lightskyblue"><h2>See my code</h2></div>
            <div className="text-desertsand"><h2>Follow me</h2></div>
      </div>
      <div className="flex flex-wrap items-end justify-center md:text-xl">        
      <Link href="mailto:keren@moondog.co.nz" className="hover:text-blue-500 hover:transition-all hover:scale-110 hover:-translate-y-2 cursor-pointer max-w-20 px-10 py-4">
            <div className="text-6xl md:text-8xl mx-auto"><FontAwesomeIcon icon={faEnvelope}/></div>
            <p>Email</p>
        </Link>
        <Link href="https://www.linkedin.com/company/moondognz" passHref className="hover:text-blue-500 hover:transition-all hover:scale-110 hover:-translate-y-2 cursor-pointer max-w-20 px-10 py-4">
        <div className="text-6xl md:text-8xl mx-auto"><FontAwesomeIcon icon={faLinkedin}/></div>
            <p>Linkedin</p>
        </Link>
        <Link href="https://github.com/kezzaam" passHref className="hover:text-blue-500 hover:transition-all hover:scale-110 hover:-translate-y-2 cursor-pointer max-w-20 px-10 py-4">
        <div className="text-6xl md:text-8xl mx-auto"><FontAwesomeIcon icon={faGithub}/></div>
            <p>Github</p>
        </Link>
        <Link href="https://codepen.io/Kezzaam/pens/public" passHref className="hover:text-blue-500 hover:transition-all hover:scale-110 hover:-translate-y-2 cursor-pointer max-w-20 px-10 py-4">
        <div className="text-6xl md:text-8xl mx-auto"><FontAwesomeIcon icon={faCodepen}/></div>
            <p>Codepen</p>
        </Link>
        <Link href="https://instagram.com/moondog_nz" passHref className="hover:text-blue-500 hover:transition-all hover:scale-110 hover:-translate-y-2 cursor-pointer max-w-20 px-10 py-4">
        <div className="text-6xl md:text-8xl mx-auto"><FontAwesomeIcon icon={faInstagram}/></div>
            <p>Instagram</p>
        </Link>
        <Link href="https://facebook.com/moondognz" passHref className="hover:text-blue-500 hover:transition-all hover:scale-110 hover:-translate-y-2 cursor-pointer max-w-20 px-10 py-4">
        <div className="text-6xl md:text-8xl mx-auto"><FontAwesomeIcon icon={faFacebook}/></div>
            <p>Facebook</p>
        </Link>
      </div>
    </div>
  )
}
