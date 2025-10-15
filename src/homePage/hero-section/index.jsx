import { ButtonOutline, ButtonPrimary } from "../../components/ui/button/button"



const Hero = () => {
  return (
    <section 
     id="home"
    className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div className="">

          <div className="flex items-center gap-3 ">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1760458248/WhatsApp_Image_2025-10-13_at_3.07.47_PM_yev7o4.jpg" 
              width={40}
              height={40}
              alt="Muaz Awais Portrait" 
              className="img-cover"/>
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide ">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>

              Available for work
            </div>
          </div>
            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
            </h2>

            <div className="flex items-center gap-3">
              <ButtonPrimary
                label="Download CV"
                icon={"download"}
              />
            
              <ButtonOutline 
              label="Scroll Down"
              href="#about"
              icon={"arrow_downward"}/>
            </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400 to-65%  rounded-[60px] overflow-hidden">
            <img 
            src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1760465198/bgre_ntkvdu.png" 
            width={656}
            height={800}
            alt="Muaz Awais"
            className="w-full" 
            />
          </figure>

        </div>

      </div>
    </section>
  )
}

export default Hero