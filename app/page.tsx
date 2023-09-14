"use client"

import Contact from "@/components/Contact"
import Portfolio from "@/components/Portfolio"
import Background from "@/components/Background"
import animation from "./animation.json"
import Lottie from "lottie-react"
import { useScrollDirection } from "@/hooks/useScrollDirection"
import { useActiveSection } from "@/context/ActiveSection"

export default function Home() {
  const { activeSection } = useActiveSection() || {}
  const scrollDirection = useScrollDirection()

  const sectionStyle = "transition-all flex min-w-[100vw] snap-start items-center justify-center overflow-x-scroll"

    // Define a style for the main container to enable vertical scrolling on small screens
    const mainStyle = `
    flex overflow-x-scroll snap-x snap-mandatory h-screen z-0
    ${scrollDirection === 'left' ? 'scroll-left' : 'scroll-right'}
    ${activeSection === "home" ? "active" : ""}
  `

  return (
    <main className={mainStyle}>
      <section 
        id="home" 
        className={`
        ${sectionStyle} 
        ${activeSection === "home" ? "active" : "" } 
        ${scrollDirection === 'left' ? 'scroll-left' : 'scroll-right'}
        `}>
        <div className="md:text-center p-10 leading-6xl mx-auto">
          <Lottie animationData={animation} className="w-1/2 md:w-1/6 md:mx-auto mb-4" />
          <h1 className="text-6xl font-bold">Keren Elizabeth</h1>
          <div className="roll text-3xl font-[600] text-left md:text-center">
            <div className="text-peachcobbler"><h2>Software engineer </h2></div>
            <div className="text-lightskyblue"><h2>Designer</h2></div>
            <div className="text-desertsand"><h2>Illustrator</h2></div>
          </div>
          <p className="text-xl md:max-w-3xl mx-auto">I build nice looking and functional web stuff, while challenging myself to keep on learning.
            I am currently running <a href="https://www.moondog.co.nz/" className="text-blue-500 hover:text-peachcobbler">Moondog Design + Illustration</a> and looking for a junior role to kickstart my switch into tech.</p>
        </div>
      </section>

      <section 
          id="background" 
          className={`
              ${sectionStyle} 
              ${activeSection === "background" ? "active" : ""} 
              ${scrollDirection === 'left' ? 'scroll-left' : 'scroll-right'}
          `}>
        <Background />
      </section>

      <section 
          id="portfolio" 
          className={`
              ${sectionStyle} 
              ${activeSection === "portfolio" ? "active" : ""} 
              ${scrollDirection === 'left' ? 'scroll-left' : 'scroll-right'}
          `}>
        <Portfolio />
      </section>

      <section 
          id="contact" 
          className={`
              ${sectionStyle} 
              ${activeSection === "contact" ? "active" : ""} 
              ${scrollDirection === 'left' ? 'scroll-left' : 'scroll-right'}
              `}>
        <Contact />
      </section>
    </main>
  )
}
