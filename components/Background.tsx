import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '@iconify/react';

export default function Background() {
  const jobs = [
    {
      id: 1,
      title: 'Freelancer',
      subtitle: 'Moondog Design + Illustration',
      dateRange: 'June 2010 - Present',
      description: 'Self employed / sole trader. Contract design and illustration for clients in NZ and Australia.',
      skills: ['Adobe CC', 'Digital Illustration', 'Graphic Design', 'Web Design', 'Surface Pattern Design', 'Business management'],
      link: 'https://moondog.co.nz'
    },
    {
      id: 2,
      title: 'Online Educator',
      subtitle: 'Skillshare',
      dateRange: 'September 2022 - Present',
      description: 'Class creation around art and graphic design topics. Invited member of Skillshare Teach Corps based on quality content.',
      skills: ['Lesson planning', 'Presentation', 'Storytelling', 'Video/Audio Editing', 'Marketing'],
      link: 'https://www.skillshare.com/en/r/profile/Keren-Elizabeth/486988915?gr_tch_ref=on'
    },
    {
      id: 3,
      title: 'Graphic Designer',
      subtitle: 'Back 9 Design',
      dateRange: 'January - March 2014',
      description: 'Employed for three months on a casual/contract basis, filling in as part of a graphic design studio team.',
      skills: ['Following design briefs', 'Time management', 'Client communication', 'Teamwork'],
      link: 'https://www.back9.co.nz/'
    },
  ]

  const qualifications = [
    {
      id: 4,
      title: 'Certificate, Software Engineering',
      subtitle: 'Institute of Data',
      dateRange: 'February - July 2023',
      description: 'AUT (Auckland University of Technology) accredited Professional Certificate in Software Engineering.',
      skills: ['Web Design', 'API Development', 'Javascript Programming', 'Full Stack Development', 'React II'],
      link: 'https://bootcamp.aut.ac.nz/software-engineering-lp?utm_source=google&utm_medium=search&utm_campaign=NZ+AUT+SOFTWARE+ENGEERING&https://bootcamp.aut.ac.nz/software-engineering-lp?utm_source=google&utm_medium=search&utm_campaign=AUT+SOFTWARE+ENG+LP&utm_id=AUT+SOFTWARE+ENG+LP&campaignid=15890467572&adgroupid=149632863831&keyword=software%20engineer&device=c&utm_term=software%20engineer&utm_campaign=NZ+Search-+DataScience&utm_source=adwords&utm_medium=ppc&hsa_acc=4645158552&hsa_cam=15890467572&hsa_grp=149632863831&hsa_ad=650367936174&hsa_src=g&hsa_tgt=kwd-21992171&hsa_kw=software%20engineer&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad=1&gclid=CjwKCAjwivemBhBhEiwAJxNWN3XYCHgeDhXRQsBJQJxUyyrFRhslue8iLUiw5R5x_WfZ0408XDeWTxoC8LwQAvD_BwE'
    },
    {
      id: 5,
      title: 'Microsoft Certified: Azure Fundamentals',
      subtitle: '#10kWomen Microsoft Tech Talent Program',
      dateRange: 'June 2023',
      description: 'A two week learning program run by Akkodis Academy and Microsoft',
      skills: ['Microsoft Azure', 'Cloud Computing'],
      link: 'https://www.microsoft.com/en-nz/business/10kwomen/'
    },
    {
      id: 6,
      title: 'Advanced Diploma, Graphic Design & Advertising',
      subtitle: 'Tractor Design School',
      dateRange: 'March 2012 - November 2013',
      description: 'Two year full time qualification covering visual communication and design for print and web.',
      skills: ['Graphic Design', 'Typography', 'Branding', 'Advertising', 'Web Design', 'Illustration', 'Animation', 'Photography', 'Marketing'],
      link: 'https://agda.com.au/education/tractor-design-school'
    },
  ]

  const toggleAccordion = (id: string) => {
    const details = document.querySelectorAll("details")
    details.forEach((detail) => {
      if (detail.id !== id) {
        detail.removeAttribute("open")
      }
    })
  }

  const [hovered, setHovered] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleMouseEnter = (jobId: any) => {
    setHovered(jobId)
  }

  const handleMouseLeave = () => {
    setHovered(null)
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-6 mt-36 h-auto">
      {/* <h2 className="text-3xl font-[600] text-left md:text-center">Background</h2> */}
      {/* accordion */}
      <div className="w-screen lg:max-w-6xl px-4 mx-auto my-2 space-y-1">
        <details id="about" open>
          <summary
            className="font-semibold bg-blue-500 bg-opacity-75 px-4 py-2 sm:text-sm md:text-2xl cursor-pointer rounded-t-xl"
            onClick={() => {
              toggleAccordion("about")
            }}>About me</summary>
          <div className="sm:leading-6 md:leading-8 p-10 sm:text-lg md:text-2xl bg-blue-500 bg-opacity-25">
            <p>
              I am a designer/illustrator and mum of two, freelancing from my home in Nelson, New Zealand.
              Freshly qualified in software engineering, I am curious, self-driven and love to learn new things. 
              I have worked everywhere from kitchens to boats, and often in small isolated spaces (think cupboard size with no internet). 
              In my spare time I like to play guitar, mountain bike and listen to youtube videos at 2x speed.
            </p>
          </div>
        </details>

        <details id="tech">
          <summary
            className="font-semibold bg-blue-500 bg-opacity-75 px-4 py-2 sm:text-lg md:text-2xl cursor-pointer"
            onClick={() => {
              toggleAccordion("tech")
            }}>Tech Skills</summary>
          <div className="flex flex-row flex-wrap px-4 pt-4 pb-10 items-end justify-center space-x-4 space-y-4 text-center bg-blue-500 bg-opacity-25">
            {/* design */}
            <div><Icon icon="lucide:figma" />Figma</div>
            <div><Icon icon="ic:baseline-adobe" />Adobe CC</div>
            {/* frontend */}
            <div><Icon icon="akar-icons:html-fill" />HTML</div>
            <div><Icon icon="akar-icons:css-fill" />CSS</div>
            <div><Icon icon="ri:javascript-fill" />Javascript</div>
            <div><Icon icon="bxl:typescript" />Typescript</div>
            <div><Icon icon="mdi:react" />React</div>
            <div><Icon icon="teenyicons:nextjs-solid" />NextJS</div>
            <div><Icon icon="ri:bootstrap-fill" />Bootstrap</div>
            <div><Icon icon="file-icons:tailwind" />Tailwind</div>
            <div><Icon icon="file-icons:d3" />D3JS</div>
            {/* backend */}
            <div><Icon icon="teenyicons:nodejs-solid" />NodeJS</div>
            <div><Icon icon="simple-icons:express" />Express</div>
            <div><Icon icon="simple-icons:mongodb" />MongoDB</div>
            <div><Icon icon="devicon-plain:mysql" />MySQL</div>
            <div><Icon icon="simple-icons:prisma" />PrismaORM</div>
            <div><Icon icon="simple-icons:postman" />Postman</div>
            <div><Icon icon="akar-icons:vscode-fill" />VS Code</div>
            <div><Icon icon="simple-icons:npm" />NPM</div>
            {/* deployment */}
            <div><Icon icon="bi:git" />Git</div>
            <div><Icon icon="mdi:docker" />Docker</div>
            <div><Icon icon="simple-icons:microsoftazure" />Azure Cloud</div>
          </div>
        </details>

        <details id="experience">
          <summary
            className="font-semibold bg-blue-500 bg-opacity-75 px-4 py-2 sm:text-lg md:text-2xl cursor-pointer"
            onClick={() => {
              toggleAccordion("experience")
            }}>Experience</summary>
          {/* cards display */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:p-10 bg-blue-500 bg-opacity-25">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                onMouseEnter={() => handleMouseEnter(job.id)}
                onMouseLeave={handleMouseLeave}
                className={`card w-[320px] h-[320px] mx-auto mt-2 rounded-lg shadow overflow-hidden relative ${job.id === hovered ? 'hovered' : ''
                  } ${index === currentIndex ? 'reveal' : 'hide'
                  }`}
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                  <p className="text-blue-500">{job.dateRange}</p>
                  <h3 className="text-2xl font-bold tracking-loose">
                    {job.title}
                  </h3>
                  <div className="flex flex-row flex-wrap items-center justify-center space-x-2 mt-4 text-sm">
                    {job.skills.map((skill, index) => (
                      <p key={index} className="bg-blue-500 bg-opacity-50 my-1 px-2 rounded-lg">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>


                {hovered === job.id && (
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center bg-blue-500 text-white">
                    <p className="text-blue-500">{job.dateRange}</p>
                    <h3 className="text-xl font-bold tracking-loose">
                      {job.subtitle}
                    </h3>
                    <p>{job.description}</p>
                    <a
                      href={job.link}
                      className="mt-4 hover:text-peachcobbler transition-all hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* cards pagination small screen */}
          <div className="pagination md:hidden flex justify-center py-4 bg-blue-500 bg-opacity-25">
            {qualifications.map((_, index) => (
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
        </details>

        <details id="qualifications">
          <summary
            className="font-semibold bg-blue-500 bg-opacity-75 px-4 py-2 sm:text-lg md:text-2xl cursor-pointer"
            onClick={() => {
              toggleAccordion("qualifications")
            }}>Qualifications</summary>
          {/* cards display */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:p-4 md:p-10 bg-blue-500 bg-opacity-25">
            {qualifications.map((qualification, index) => (
              <div
                key={qualification.id}
                onMouseEnter={() => handleMouseEnter(qualification.id)}
                onMouseLeave={handleMouseLeave}
                className={`card w-[320px] h-[320px] mx-auto mt-2 rounded-lg shadow overflow-hidden relative ${qualification.id === hovered ? 'hovered' : ''
                  } ${index === currentIndex ? 'reveal' : 'hide'
                  }`}
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                  <p className="text-blue-500">{qualification.dateRange}</p>
                  <h3 className="text-2xl font-bold tracking-loose">
                    {qualification.title}
                  </h3>
                  <div className="flex flex-row flex-wrap items-center justify-center space-x-2 mt-4 text-sm">
                    {qualification.skills.map((skill, index) => (
                      <p key={index} className="bg-blue-500 bg-opacity-50 my-1 px-2 rounded-lg">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>


                {hovered === qualification.id && (
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center bg-blue-500 text-white">
                    <p className="text-blue-500">{qualification.dateRange}</p>
                    <h3 className="text-xl font-bold tracking-loose">
                      {qualification.subtitle}
                    </h3>
                    <p>{qualification.description}</p>
                    <a
                      href={qualification.link}
                      className="mt-4 hover:text-peachcobbler transition-all hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* cards pagination small screen */}
          <div className="pagination md:hidden flex justify-center py-4 bg-blue-500 bg-opacity-25">
            {jobs.map((_, index) => (
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
        </details>
      </div>
    </div>
  )
}