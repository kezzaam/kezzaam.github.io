export default function GuidingLight() {

  const sectionStyle = "transition-all flex min-w-[100vw] snap-start items-center justify-center overflow-x-scroll"

  return (
    <main className="flex overflow-x-scroll snap-x snap-mandatory h-screen">
      <section 
        id="home" 
        className={`
        ${sectionStyle} 
        `}>
        <div className="md:text-center p-10 leading-6xl mx-auto">
          <h1 className="text-6xl font-bold bg-blue-500 bg-opacity-75 py-2 px-4 rounded">Guiding Light</h1>
          <p className="text-xl md:max-w-3xl mx-auto"></p>
        </div>
      </section>

      <section 
          id="background" 
          className={`
              ${sectionStyle} 
          `}>
      </section>

      <section 
          id="portfolio" 
          className={`
              ${sectionStyle} 
          `}>
      </section>

      <section 
          id="contact" 
          className={`
              ${sectionStyle} 
              `}>
      </section>
    </main>
  )
}
