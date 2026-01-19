import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import vivaLogo from './assets/viva-logo.png'
import mentorsBanner from './assets/mentors.png'
import festheadBanner from './assets/festhead.png'
import leftBorder from './assets/left-border.png'
import rightBorder from './assets/right-border.png'
import lantern from './assets/lantern.png'
import vogue1 from './assets/vogue 1.png'
import vogue2 from './assets/vogue 2.png'
import rickshaw from './assets/rickshaw.png'
import culturalSign from './assets/cultural.png'
import memberImage from './assets/image 330.png'

gsap.registerPlugin(ScrollTrigger)

const TeamCard = ({ imageUrl, footerText }) => {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-[30px]">
      <div className="relative flex items-center bg-white p-1 rounded-sm shadow-xl">
        <img src={leftBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -left-6 md:-left-[25px]" alt="" />
        <div className="w-[85vw] md:w-[60vw] lg:w-[450px] aspect-[3/2] overflow-hidden relative">
          <img src={imageUrl} alt="Team Member" className="w-full h-full object-cover" />
        </div>
        <img src={rightBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -right-6 md:-right-[25px]" alt="" />
      </div>
      {footerText && (
        <div className="font-sans font-extrabold text-[#213547] text-xs md:text-base lg:text-[1.1rem] tracking-wider text-center uppercase max-w-[90vw]">
          {footerText}
        </div>
      )}
    </div>
  )
}

const PhotoCard = ({ imageUrl, name }) => {
  return (
    <div className="relative flex items-center bg-white p-1 rounded-sm shadow-lg transform transition-transform hover:scale-105">
      <img src={leftBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -left-5" alt="" />
      <div className="w-[160px] md:w-[220px] aspect-[22/26] overflow-hidden relative">
        <img src={imageUrl} alt={name || "Team Member"} className="w-full h-full object-cover" />
      </div>
      <img src={rightBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -right-5" alt="" />
      {name && (
        <div className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 bg-linear-to-br from-[#4a9fd8] to-[#6bb8e8] text-white px-6 md:px-[30px] py-1 md:py-2 rounded-full font-bold text-[0.7rem] md:text-[0.85rem] tracking-wider shadow-md whitespace-nowrap border-2 border-dotted border-white/60">
          {name}
        </div>
      )}
    </div>
  )
}

const CulturalCouncilCard = ({ imageUrl }) => {
  return (
    <div className="relative flex items-center p-1 rounded">
      <img src={leftBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -left-5" alt="" />
      <div className="w-[160px] md:w-[220px] aspect-[22/26] overflow-hidden relative rounded-[20px]">
        <img src={imageUrl} alt="Cultural Council Member" className="w-full h-full object-cover" />
      </div>
      <img src={rightBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -right-5" alt="" />
      <div className="absolute -bottom-[22px] left-1/2 -translate-x-1/2 bg-[#9d00cc] w-[140px] md:w-[160px] h-[35px] md:h-[40px] rounded-[20px] border-4 border-dotted border-white/80 shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-[3]"></div>
    </div>
  )
}

const PageSection = ({ theme, bannerImage, bannerAlt, children, showHeader }) => {
  return (
    <section className={`w-full min-h-screen flex flex-col items-center px-4 md:px-16 pb-16 relative overflow-hidden ${theme}`}>
      {showHeader && (
        <header className="w-full flex flex-row justify-between items-center z-30 pt-6 px-4 md:px-8">
          <div className="flex-shrink-0">
            <img src={vivaLogo} alt="Vivacity'26 Logo" className="h-[60px] md:h-[100px] w-auto transition-all" />
          </div>
          <nav className="flex items-center gap-4 md:gap-10 lg:gap-16 pr-0 md:pr-4">
            <a href="#home" className="no-underline text-[#3d1c10] font-extrabold text-[0.7rem] md:text-base lg:text-xl tracking-widest hover:text-[#9E5D47] transition-colors">HOME</a>
            <a href="#events" className="no-underline text-[#3d1c10] font-extrabold text-[0.7rem] md:text-base lg:text-xl tracking-widest hover:text-[#9E5D47] transition-colors">EVENTS</a>
            <a href="#sponsors" className="no-underline text-[#3d1c10] font-extrabold text-[0.7rem] md:text-base lg:text-xl tracking-widest hover:text-[#9E5D47] transition-colors">SPONSORS</a>
            <a href="#team" className="no-underline text-[#3d1c10] font-extrabold text-[0.7rem] md:text-base lg:text-xl tracking-widest hover:text-[#9E5D47] transition-colors">OUR TEAM</a>
          </nav>
        </header>
      )}

      <div className="absolute top-[150px] -mt-[150px] left-1/2 -translate-x-1/2 z-10">
        <div className="swing-banner">
          <img src={bannerImage} alt={bannerAlt} className="h-[220px] max-[768px]:h-[180px] max-[480px]:h-[140px] w-auto" />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center w-full relative z-20 pt-24">
        {children}
      </div>
    </section>
  )
}

function App() {
  const vogue1Ref = useRef(null)
  const vogue2Ref = useRef(null)

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])


  return (
    <main className="w-full">
      <PageSection
        theme="orange-theme"
        bannerImage={mentorsBanner}
        bannerAlt="Our Mentors"
        showHeader={true}
      >
        <div className="flex justify-center items-center w-full">
          <TeamCard
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
            footerText="OUR MENTORS - AJAY RAJ, PRATHMESH, MANAS, VANSH, HARSH, MRADUL"
          />
        </div>
        <img ref={vogue1Ref} src={vogue1} className="vogue-img vogue-img-anim-left left-0 absolute bottom-0 h-[220px] md:h-[350px] lg:h-[450px] w-auto pointer-events-none z-50 transition-all" alt="" />
        <img ref={vogue2Ref} src={vogue2} className="vogue-img vogue-img-anim-right right-0 absolute bottom-0 h-[220px] md:h-[350px] lg:h-[450px] w-auto pointer-events-none z-50 transition-all" alt="" />
      </PageSection>

      <PageSection
        theme="blue-theme"
        bannerImage={festheadBanner}
        bannerAlt="Fest Head"
        showHeader={false}
      >
        <div className="w-full max-w-[1400px] flex justify-between items-start -mt-[180px] relative pointer-events-none">
          <img src={lantern} className="lantern-swing ml-8 md:ml-16 h-[280px] w-auto" alt="Lantern" />
          <img src={lantern} className="lantern-swing mr-8 md:mr-16 h-[280px] w-auto [animation-delay:0.5s]" alt="Lantern" />
        </div>

        <div className="flex gap-10 md:gap-20 justify-center items-start mt-8 md:mt-16 flex-wrap relative z-[2]">
          <PhotoCard
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
            name="PERSON 1"
          />
          <PhotoCard
            imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
            name="PERSON 2"
          />
        </div>
      </PageSection>

      <PageSection
        theme="purple-theme"
        bannerImage={culturalSign}
        bannerAlt="Cultural Council"
        showHeader={false}
      >
        <div className="flex gap-8 md:gap-16 lg:gap-24 justify-center items-start mt-8 md:mt-12 flex-wrap relative z-[2]">
          <CulturalCouncilCard imageUrl={memberImage} />
          <CulturalCouncilCard imageUrl={memberImage} />
          <CulturalCouncilCard imageUrl={memberImage} />
        </div>

        <div className="absolute bottom-8 left-0 w-full px-4 md:px-16 flex justify-between items-end pointer-events-none z-10">
          <img src={rickshaw} className="h-[140px] md:h-[220px] w-auto drop-shadow-2xl -scale-x-100 transition-all" alt="Rickshaw" />
          <img src={rickshaw} className="h-[140px] md:h-[220px] w-auto drop-shadow-2xl transition-all" alt="Rickshaw" />
        </div>
      </PageSection>
    </main>
  )
}

export default App
