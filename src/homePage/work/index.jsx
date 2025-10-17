import React from 'react'
import ProjectCard from './projectCard';


const works = [
  {
    imgSrc: 'https://res.cloudinary.com/dv8dtipj1/image/upload/v1760475579/Untitled_design_3_mtueht.png',
    title: 'Persnol Portfolio',
    tags: ['React', 'Development','Tailwind'],
    projectLink: 'https://porfolio-site-beta.vercel.app/'
  },
  {
    imgSrc: 'https://res.cloudinary.com/dv8dtipj1/image/upload/v1760475580/Untitled_design_2_kviy9i.png',
    title: 'E-Learning Site',
    tags: ['Shadcn', 'React', 'Api','Tailwind'],
    projectLink: 'https://learn-engine-fawn.vercel.app/'
  },
  {
    imgSrc: 'https://res.cloudinary.com/dv8dtipj1/image/upload/v1760475580/Untitled_design_1_qkldep.png',
    title: 'Car Bloging Site',
    tags: ['Development', 'React','Tailwind','Shadcn'],
    projectLink: 'https://car-blogging-site.vercel.app/'
  },
  {
    imgSrc: 'https://res.cloudinary.com/dv8dtipj1/image/upload/v1760475580/Untitled_design_wevic7.png',
    title: 'Bakery Site',
    tags: ['Web-design', 'Development','HTML','CSS'],
    projectLink: 'https://my-project-sage-five.vercel.app/'
  },
];



const Work = () => {
  return (
    <section id='work' className="section">
      <div className="container">

        <h2 className="headline-2 mb-8">
          My Portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({imgSrc, title, tags, projectLink},key)=>(
            <ProjectCard
            key={key}
            imgSrc={imgSrc}
            title={title}
            tags={tags}
            projectLink={projectLink}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work