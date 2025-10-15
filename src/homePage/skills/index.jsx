import SkillCard from "./skillCard";


const skillItem = [
    {
      imgSrc: 'https://res.cloudinary.com/dv8dtipj1/image/upload/v1760471240/figma_yb1egf.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: 'https://res.cloudinary.com/dv8dtipj1/image/upload/v1760471603/css3_xklmgo.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: 'https://res.cloudinary.com/dv8dtipj1/image/upload/v1760471241/javascript_rth0cc.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: 'https://res.cloudinary.com/dv8dtipj1/image/upload/v1760471239/react_hhmwts.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: 'https://res.cloudinary.com/dv8dtipj1/image/upload/v1760471239/tailwindcss_bsnq6r.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];


const Skill = () => {

  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2 ">
                Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc}, key)=>(
                        <SkillCard
                        key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill