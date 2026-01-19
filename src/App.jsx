import { useLayoutEffect, useRef } from 'react'
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

const PageSection = ({ theme, bannerImage, bannerAlt, children, showHeader, vogueHands, sectionRef }) => {
  return (
    <section ref={sectionRef} className={`w-full min-h-screen flex flex-col items-center px-4 md:px-16 pb-16 relative z-10 overflow-hidden ${theme}`}>
      {/* Absolute decorations (Hands) go here to ignore section padding */}
      {vogueHands}

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

      <div className="flex-1 flex flex-col justify-center items-center w-full relative z-20 pt-12">
        {children}
      </div>
    </section>
  )
}

function App() {
  const vogue1Ref = useRef(null)
  const vogue2Ref = useRef(null)

  // Refs for sections to trigger background changes
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)

  // Refs for background layers
  const bgOrangeRef = useRef(null)
  const bgBlueRef = useRef(null)
  const bgPurpleRef = useRef(null)

  // Refs for animations
  const lanternLeftRef = useRef(null)
  const lanternRightRef = useRef(null)

  useLayoutEffect(() => {
    // 1. Hands Exit Animation (Scroll-linked)
    // Moves hands down and slightly out as user scrolls through Section 1
    if (vogue1Ref.current && vogue2Ref.current && section1Ref.current) {
      gsap.to(vogue1Ref.current, {
        yPercent: 100, // Move down 100%
        xPercent: -20, // Move left slightly
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top top",
          end: "bottom center", // Animation completes when center of S1 hits bottom
          scrub: 0.5, // Smooth scrubbing
        }
      });

      gsap.to(vogue2Ref.current, {
        yPercent: 100, // Move down 100%
        xPercent: 20, // Move right slightly
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top top",
          end: "bottom center",
          scrub: 0.5,
        }
      });
    }

    // 2. Section 2 Entrance Animations (Lanterns & Banner)
    // These animate IN automatically when we reach section 2
    if (section2Ref.current) {
      // Set initial state for lanterns
      gsap.set([lanternLeftRef.current, lanternRightRef.current], { y: -300, opacity: 0 });

      // Lanterns - Drop in automatically
      gsap.to([lanternLeftRef.current, lanternRightRef.current], {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.15, // Slight delay between them
        ease: "bounce.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 75%", // Start when top of S2 is 75% down viewport
          toggleActions: "play none none reverse" // Play on enter, reverse on scroll back
        }
      });

      // Fest Head Banner - Drop/Scale in automatically
      const bannerElement = section2Ref.current.querySelector('.swing-banner');
      if (bannerElement) {
        gsap.set(bannerElement, { y: -200, opacity: 0, scale: 0.8 });

        gsap.to(bannerElement, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top 70%",
            toggleActions: "play none none reverse" // Play on enter, reverse on leave
          }
        });
      }
    }

    // 3. Background Transition Logic
    // Create a timeline that crossfades backgrounds based on scroll position

    // Initial State
    gsap.set(bgOrangeRef.current, { opacity: 1, zIndex: 1 });
    gsap.set(bgBlueRef.current, { opacity: 0, zIndex: 2 });
    gsap.set(bgPurpleRef.current, { opacity: 0, zIndex: 3 });

    // Transition: Orange -> Blue (Section 1 to Section 2)
    ScrollTrigger.create({
      trigger: section2Ref.current,
      start: "top bottom", // Starts when top of S2 hits bottom of viewport
      end: "center center", // Ends when center of S2 is in center
      scrub: true,
      onUpdate: (self) => {
        // Fade in Blue over Orange
        gsap.set(bgBlueRef.current, { opacity: self.progress });
      }
    });

    // Transition: Blue -> Purple (Section 2 to Section 3)
    ScrollTrigger.create({
      trigger: section3Ref.current,
      start: "top bottom",
      end: "center center",
      scrub: true,
      onUpdate: (self) => {
        // Fade in Purple over Blue
        gsap.set(bgPurpleRef.current, { opacity: self.progress });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])


  return (
    <main className="w-full relative">
      {/* FIXED BACKGROUND LAYERS - z-0 to sit above body bg but behind content */}
      <div className="fixed inset-0 w-full h-full pointers-events-none z-0">
        <div ref={bgOrangeRef} className="absolute inset-0 w-full h-full bg-gradient-orange transition-opacity duration-0" />
        <div ref={bgBlueRef} className="absolute inset-0 w-full h-full bg-gradient-blue transition-opacity duration-0" />
        <div ref={bgPurpleRef} className="absolute inset-0 w-full h-full bg-gradient-purple transition-opacity duration-0" />
      </div>

      <PageSection
        sectionRef={section1Ref}
        theme="orange-theme" // CSS class now just handles non-bg styles if any
        bannerImage={mentorsBanner}
        bannerAlt="Our Mentors"
        showHeader={true}
        vogueHands={
          <>
            <img ref={vogue1Ref} src={vogue1} className="vogue-img vogue-img-anim-left left-0 absolute bottom-0 h-[140px] md:h-[220px] lg:h-[260px] w-auto pointer-events-none z-50 transition-transform will-change-transform" alt="" />
            <img ref={vogue2Ref} src={vogue2} className="vogue-img vogue-img-anim-right right-0 absolute bottom-0 h-[140px] md:h-[220px] lg:h-[260px] w-auto pointer-events-none z-50 transition-transform will-change-transform" alt="" />
          </>
        }
      >
        <div className="flex justify-center items-center w-full">
          <TeamCard
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
            footerText="OUR MENTORS - AJAY RAJ, PRATHMESH, MANAS, VANSH, HARSH, MRADUL"
          />
        </div>
      </PageSection>

      <PageSection
        sectionRef={section2Ref}
        theme="blue-theme"
        bannerImage={festheadBanner}
        bannerAlt="Fest Head"
        showHeader={false}
      >
        <div className="w-full max-w-[1400px] flex justify-between items-start -mt-[220px] relative pointer-events-none">
          <img ref={lanternLeftRef} src={lantern} className="lantern-swing ml-8 md:ml-16 h-[280px] w-auto" alt="Lantern" />
          <img ref={lanternRightRef} src={lantern} className="lantern-swing mr-8 md:mr-16 h-[280px] w-auto [animation-delay:0.5s]" alt="Lantern" />
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
        sectionRef={section3Ref}
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

        <div className="absolute bottom-[-8%] left-0 w-full px-4 md:px-12 flex justify-between items-end pointer-events-none z-10">
          <img src={rickshaw} className="h-[100px] md:h-[160px] w-auto drop-shadow-xl -scale-x-100 transform transition-all" alt="Rickshaw" />
          <img src={rickshaw} className="h-[100px] md:h-[160px] w-auto drop-shadow-xl transform transition-all" alt="Rickshaw" />
        </div>
      </PageSection>
    </main>
  )
}

export default App
