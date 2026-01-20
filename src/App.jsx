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
                <div className="w-[95vw] md:w-[85vw] lg:w-[800px] aspect-[16/9] overflow-hidden relative">
                    <img src={imageUrl} alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <img src={rightBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -right-6 md:-right-[25px]" alt="" />
            </div>
            {footerText && (
                <div className="font-sans font-normal text-[#213547] text-xs md:text-base lg:text-[1.1rem] tracking-wider text-center uppercase max-w-[90vw]">
                    {footerText}
                </div>
            )}
        </div>
    )
}

const PhotoCard = ({ imageUrl, name, role }) => {
    return (
        <div className="relative flex flex-col items-center">
            <div className="relative flex items-center bg-white p-1 rounded-sm shadow-xl transform transition-transform hover:scale-105">
                <img src={leftBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -left-6 md:-left-[28px]" alt="" />
                <div className="w-[190px] md:w-[320px] aspect-[22/24] overflow-hidden relative">
                    <img src={imageUrl} alt={name || "Team Member"} className="w-full h-full object-cover" />
                </div>
                <img src={rightBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -right-6 md:-right-[28px]" alt="" />
            </div>

            {(name || role) && (
                <div className="absolute -bottom-[25px] md:-bottom-[35px] flex items-center gap-1.5 md:gap-2.5 z-10">
                    {/* Left Icon (Insta Circle) */}
                    <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#1a6da1] border-2 border-[#a6e3ff] flex items-center justify-center shadow-md">
                        <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-white/80 rounded-[4px] relative">
                            <div className="absolute top-[1px] right-[1px] w-0.5 h-0.5 bg-white rounded-full"></div>
                        </div>
                    </div>

                    {/* Main Label Pill */}
                    <div className="bg-[#1ca3d3] border-3 md:border-4 border-dotted border-white/60 px-5 md:px-8 py-1 md:py-1.5 rounded-[20px] md:rounded-[25px] text-center shadow-lg min-w-[140px] md:min-w-[200px]">
                        <div className="text-white text-[0.75rem] md:text-[0.95rem] font-bold tracking-wider leading-tight uppercase font-sans">
                            {name}
                        </div>
                        <div className="text-[#a6e3ff] text-[0.55rem] md:text-[0.65rem] font-bold tracking-[0.15em] uppercase font-sans mt-0.5">
                            {role}
                        </div>
                    </div>

                    {/* Right Icon (Mail Circle) */}
                    <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#1a6da1] border-2 border-[#a6e3ff] flex items-center justify-center shadow-md">
                        <div className="w-3.5 h-2.5 md:w-4.5 md:h-3.5 border-2 border-white/80 rounded-[2px] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-white translate-y-[2px] rotate-[30deg] origin-left"></div>
                            <div className="absolute top-0 right-0 w-full h-[1px] bg-white translate-y-[2px] -rotate-[30deg] origin-right"></div>
                        </div>
                    </div>
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
                <header className="w-full flex flex-row justify-between items-center z-30 pt-16 md:pt-20 pl-24 md:pl-28 pr-20 md:pr-24">
                    <div className="flex-shrink-0 mt-4 md:mt-6 -ml-8 md:-ml-12">
                        <img src={vivaLogo} alt="Vivacity'26 Logo" className="h-[60px] md:h-[100px] w-auto transition-all" />
                    </div>
                    <nav className="flex items-center gap-2 md:gap-6 lg:gap-10 pr-0 md:pr-2">
                        <a href="#home" className="no-underline text-[#3d1c10] font-bold text-[0.7rem] md:text-base lg:text-xl tracking-widest hover:text-[#9E5D47] transition-colors">HOME</a>
                        <a href="#events" className="no-underline text-[#3d1c10] font-semibold text-[0.7rem] md:text-base lg:text-xl tracking-widest hover:text-[#9E5D47] transition-colors">EVENTS</a>
                        <a href="#sponsors" className="no-underline text-[#3d1c10] font-semibold text-[0.7rem] md:text-base lg:text-xl tracking-widest hover:text-[#9E5D47] transition-colors">SPONSORS</a>
                        <a href="#team" className="no-underline text-[#3d1c10] font-semibold text-[0.7rem] md:text-base lg:text-xl tracking-widest hover:text-[#9E5D47] transition-colors">OUR TEAM</a>
                    </nav>
                </header>
            )}

            <div className="absolute top-[130px] -mt-[150px] left-1/2 -translate-x-1/2 z-10">
                <div className="swing-banner">
                    <img src={bannerImage} alt={bannerAlt} className="h-[280px] max-[768px]:h-[220px] max-[480px]:h-[170px] w-auto" />
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
    const rickshawLeftRef = useRef(null)
    const rickshawRightRef = useRef(null)

    useLayoutEffect(() => {
        // 0. Hands Entrance Animation (On Load)
        // Hands start hidden and fade/slide in when the page loads
        if (vogue1Ref.current && vogue2Ref.current) {
            gsap.fromTo([vogue1Ref.current, vogue2Ref.current],
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.2 }
            );
        }

        // 1. Hands Exit Animation (Scroll-linked)
        // Moves hands horizontally out of the viewport as user scrolls
        if (vogue1Ref.current && vogue2Ref.current && section1Ref.current) {
            // Left Hand: Moves specifically out to the left
            gsap.fromTo(
                vogue1Ref.current,
                { x: 0 },
                {
                    x: -500, // slides fully out to the left
                    ease: "none",
                    scrollTrigger: {
                        trigger: section1Ref.current,
                        start: "bottom bottom", // start ONLY when leaving section 1
                        end: "bottom top",      // fully gone when section ends
                        scrub: true
                    }
                }
            );


            // Right Hand: Moves specifically out to the right
            gsap.fromTo(
                vogue2Ref.current,
                { x: 0 },
                {
                    x: 500, // slides fully out to the right
                    ease: "none",
                    scrollTrigger: {
                        trigger: section1Ref.current, // ✅ SAME trigger as vogue1
                        start: "bottom bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

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

        // 3. Rickshaw Horizontal Full-Width Animation
        // Rickshaws move purely horizontally from one side to the other at the bottom of the screen
        if (rickshawLeftRef.current && rickshawRightRef.current && section3Ref.current) {
            // Left Rickshaw: Starts Left -> Goes Right across full width
            gsap.fromTo(rickshawLeftRef.current,
                { x: -200 },
                {
                    x: window.innerWidth - 450,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section3Ref.current,
                        start: "top bottom", // Start when section enters
                        end: "bottom bottom", // Finish when section is fully visible
                        scrub: 5, // Reduced to 5 for faster motion
                    }
                }
            );

            // Right Rickshaw: Starts Right -> Goes Left across full width
            gsap.fromTo(rickshawRightRef.current,
                { x: 200 },
                {
                    x: -(window.innerWidth - 450),
                    ease: "none",
                    scrollTrigger: {
                        trigger: section3Ref.current,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: 5, // Reduced to 5 for faster motion
                    }
                }
            );
        }

        // 4. Background Transition Logic
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
                        <img
                            ref={vogue1Ref}
                            src={vogue1}
                            className="vogue-img left-20 fixed bottom-14 md:bottom-16 h-[150px] md:h-[250px] lg:h-[320px] w-auto pointer-events-none z-50 will-change-transform opacity-0"
                            alt=""
                        />
                        <img
                            ref={vogue2Ref}
                            src={vogue2}
                            className="right-20 fixed bottom-14 md:bottom-16 h-[150px] md:h-[250px] lg:h-[320px] w-auto pointer-events-none z-50 will-change-transform opacity-0"
                            alt=""
                        />

                    </>
                }
            >
                <div className="flex justify-center items-center w-full -mt-2 md:-mt-4">
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
                {/* Lanterns positioned at the top like the reference image */}
                <div className="absolute top-[-50px] md:top-[-80px] left-0 right-0 w-full px-12 md:px-32 flex justify-between pointer-events-none z-30">
                    <img ref={lanternLeftRef} src={lantern} className="lantern-swing h-[280px] md:h-[380px] w-auto" alt="Lantern" />
                    <img ref={lanternRightRef} src={lantern} className="lantern-swing h-[280px] md:h-[380px] w-auto [animation-delay:0.5s]" alt="Lantern" />
                </div>

                <div className="flex gap-16 md:gap-32 justify-center items-center mt-16 md:mt-24 flex-wrap relative z-[2]">
                    <PhotoCard
                        imageUrl="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop"
                        name="VEDANT WADHWA"
                        role="FEST HEAD"
                    />
                    <PhotoCard
                        imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
                        name="VEDANG DIXIT"
                        role="FEST HEAD"
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

                {/* Updated: Remove horizontal padding (px-0) and adjusted vertical position */}
                <div className="absolute bottom-[2%] left-24 right-24 w-auto flex justify-between items-end pointer-events-none z-10">
                    <img ref={rickshawLeftRef} src={rickshaw} style={{ transform: "scaleX(-1)" }} className="h-[100px] md:h-[160px] w-auto drop-shadow-xl transition-all" alt="Rickshaw" />
                    <img ref={rickshawRightRef} src={rickshaw} className="h-[100px] md:h-[160px] w-auto drop-shadow-xl transform transition-all" alt="Rickshaw" />
                </div>
            </PageSection>
        </main>
    )
}

export default App
