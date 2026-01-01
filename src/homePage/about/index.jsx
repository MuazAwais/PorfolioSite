
import { useEffect, useState } from "react";
import { client } from "../../sanityClient";

const fallbackAboutItems = [
  {
    label : 'Project done',
    number : 5
  },
  {
    label : 'Years of experience',
    number : 1
  }
];

const fallbackBio = "Welcome! I'm Muaz, a professional front-end web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.";

const About = () => {
  const [aboutItems, setAboutItems] = useState(fallbackAboutItems);
  const [bio, setBio] = useState(fallbackBio);

  useEffect(() => {
    if (import.meta.env.VITE_SANITY_PROJECT_ID) {
      const query = '*[_type == "profile"][0]{bio, stats}';
      client.fetch(query)
        .then((data) => {
          if (data) {
            if (data.bio) setBio(data.bio);
            if (data.stats) setAboutItems(data.stats);
          }
        })
        .catch(console.error);
    }
  }, []);

  return (
    <section
    id="about"
    className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
          {bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({label, number}, key)=>(
                <div key={key}>
                  <div className="flex items-center md:mb-2" >
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl ">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
            ))}

            <img src="https://res.cloudinary.com/dv8dtipj1/image/upload/f_auto,q_auto/v1760427253/freepik-gradient-developers-coding-logo-20251014073346jVVI_uch196.png" width={30} height={30} alt="Code Icon" className="ml-auto md:w-[40px] md:h-[40px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About