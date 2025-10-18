import { ButtonPrimary } from "../ui/button/button";


const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/muazawais'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muaz-awais-a755412a6/'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/muaz_awais'
  }
];


function Footer() {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">Let&apos;s work together today!</h2>
            <ButtonPrimary label="Start Project"
            href="mailto:muazawais1947@gmail.com"
            icon="chevron_right"/>
          </div>


          <div className="grid grid-cols-2 gap-4 lg:pl-20 ">
            <div>
              <p className="mb-2">Sitemap</p>

              <ul>
                {sitemap.map(({label, href},key)=>(
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 ">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2">Socialmap</p>

              <ul>
                {socials.map(({label, href},key)=>(
                  <li key={key}>
                    <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>


        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="" 
          className=""
          >
            <img src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1760427253/freepik-gradient-developers-coding-logo-20251014073346jVVI_uch196.png" width={40} height={40} alt="logo" className="" />
          </a>

          <p className="text-zinc-500 text-sm">
            &copy; 2025 <span className="text-zinc-200">Muaz Awais</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
