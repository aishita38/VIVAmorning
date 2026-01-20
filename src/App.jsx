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
import instaIcon from './assets/instagram.png'
import mailIcon from './assets/email.png'

gsap.registerPlugin(ScrollTrigger)

const TeamCard = ({ imageUrl, footerText }) => {
    return (
        <div className="flex flex-col items-center gap-12 md:gap-[50px]">
            <div className="relative flex items-center bg-white p-1 rounded-sm shadow-xl">
                <img src={leftBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -left-6 md:-left-[25px]" alt="" />
                <div className="w-[85vw] md:w-[75vw] lg:w-[650px] aspect-[16/9] overflow-hidden relative">
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
                <div className="w-[140px] md:w-[230px] aspect-[16/24] overflow-hidden relative">
                    <img src={imageUrl} alt={name || "Team Member"} className="w-full h-full object-cover" />
                </div>
                <img src={rightBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -right-6 md:-right-[28px]" alt="" />
            </div>

            {(name || role) && (
                <div className="absolute -bottom-[60px] md:-bottom-[85px] flex items-center gap-0.5 md:gap-1 z-10">
                    {/* Left Icon */}
                    <a href="#" className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center transition-transform hover:scale-110">
                        <img src={instaIcon} className="max-w-full max-h-full object-contain drop-shadow-md" alt="Instagram" />
                    </a>

                    {/* Main Label Pill */}
                    <div className="label-pill-ticket">
                        <div className="text-white text-[0.8rem] md:text-[1.1rem] font-semibold tracking-wider leading-[1.1] uppercase font-sans whitespace-nowrap">
                            {name}
                        </div>
                        <div className="text-white/95 text-[0.7rem] md:text-[0.95rem] font-normal tracking-[0.12em] uppercase font-sans leading-tight">
                            {role}
                        </div>
                    </div>

                    {/* Right Icon */}
                    <a href="#" className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center transition-transform hover:scale-110">
                        <img src={mailIcon} className="max-w-full max-h-full object-contain drop-shadow-md" alt="Email" />
                    </a>
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
            <div className="absolute -bottom-[40px] md:-bottom-[55px] left-1/2 -translate-x-1/2 bg-[#9d00cc] w-[140px] md:w-[160px] h-[35px] md:h-[40px] rounded-[20px] border-4 border-dotted border-white/80 shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-[3]"></div>
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
                        <a href="#home" className="no-underline text-[#3d1c10] font-semibold text-[0.7rem] md:text-base lg:text-xl tracking-widest hover:text-[#9E5D47] transition-colors">HOME</a>
                        <a href="#events" className="no-underline text-[#3d1c10] font-semibold text-[0.7rem] md:text-base lg:text-xl tracking-widest hover:text-[#9E5D47] transition-colors">EVENTS</a>
                        <a href="#sponsors" className="no-underline text-[#3d1c10] font-semibold text-[0.7rem] md:text-base lg:text-xl tracking-widest hover:text-[#9E5D47] transition-colors">SPONSORS</a>
                        <a href="#team" className="no-underline text-[#3d1c10] font-semibold text-[0.7rem] md:text-base lg:text-xl tracking-widest hover:text-[#9E5D47] transition-colors">OUR TEAM</a>
                    </nav>
                </header>
            )}

            {/* Banner rendering removed from here to be handled by fixed container in App */}

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
    const banner1Ref = useRef(null)
    const banner2Ref = useRef(null)
    const banner3Ref = useRef(null)

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
        if (section2Ref.current) {
            // Lanterns - Stick to top and fade in
            gsap.set([lanternLeftRef.current, lanternRightRef.current], { opacity: 0 });

            ScrollTrigger.create({
                trigger: section2Ref.current,
                start: "top 20%",
                end: "bottom 20%",
                onEnter: () => gsap.to([lanternLeftRef.current, lanternRightRef.current], { opacity: 1, duration: 0.5 }),
                onLeave: () => gsap.to([lanternLeftRef.current, lanternRightRef.current], { opacity: 0, duration: 0.5 }),
                onEnterBack: () => gsap.to([lanternLeftRef.current, lanternRightRef.current], { opacity: 1, duration: 0.5 }),
                onLeaveBack: () => gsap.to([lanternLeftRef.current, lanternRightRef.current], { opacity: 0, duration: 0.5 }),
            });

            // Section 2 Banner - Stick and Fade
            gsap.set(banner2Ref.current, { opacity: 0 });
            ScrollTrigger.create({
                trigger: section2Ref.current,
                start: "top 20%",
                end: "bottom 20%",
                onEnter: () => gsap.to(banner2Ref.current, { opacity: 1, duration: 0.5 }),
                onLeave: () => gsap.to(banner2Ref.current, { opacity: 0, duration: 0.5 }),
                onEnterBack: () => gsap.to(banner2Ref.current, { opacity: 1, duration: 0.5 }),
                onLeaveBack: () => gsap.to(banner2Ref.current, { opacity: 0, duration: 0.5 }),
            });
        }

        // Section 1 Banner - Stick and Fade
        if (section1Ref.current) {
            gsap.set(banner1Ref.current, { opacity: 1 });
            ScrollTrigger.create({
                trigger: section1Ref.current,
                start: "top top",
                end: "bottom 20%",
                onEnterBack: () => gsap.to(banner1Ref.current, { opacity: 1, duration: 0.5 }),
                onLeave: () => gsap.to(banner1Ref.current, { opacity: 0, duration: 0.5 }),
            });
        }

        // Section 3 Banner - Stick and Fade
        if (section3Ref.current) {
            gsap.set(banner3Ref.current, { opacity: 0 });
            ScrollTrigger.create({
                trigger: section3Ref.current,
                start: "top 20%",
                end: "bottom bottom",
                onEnter: () => gsap.to(banner3Ref.current, { opacity: 1, duration: 0.5 }),
                onLeaveBack: () => gsap.to(banner3Ref.current, { opacity: 0, duration: 0.5 }),
            });
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
            start: "top 50%", // Threshold to switch background
            onToggle: self => {
                gsap.to(bgBlueRef.current, { opacity: self.isActive ? 1 : 0, duration: 0.8, ease: "power2.inOut" });
            }
        });

        // Transition: Blue -> Purple (Section 2 to Section 3)
        ScrollTrigger.create({
            trigger: section3Ref.current,
            start: "top 50%",
            onToggle: self => {
                gsap.to(bgPurpleRef.current, { opacity: self.isActive ? 1 : 0, duration: 0.8, ease: "power2.inOut" });
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

            {/* FIXED BANNERS handled inside PageSection's vogueHands for better isolation */}

            <PageSection
                sectionRef={section1Ref}
                theme="orange-theme" // CSS class now just handles non-bg styles if any
                bannerImage={mentorsBanner}
                bannerAlt="Our Mentors"
                showHeader={true}
                vogueHands={
                    <>
                        <div ref={banner1Ref} className="fixed top-[15px] mt-[60px] left-1/2 -translate-x-1/2 z-[40] pointer-events-none">
                            <div className="swing-banner">
                                <img src={mentorsBanner} alt="Our Mentors" className="h-[220px] max-[768px]:h-[170px] max-[480px]:h-[130px] w-auto" />
                            </div>
                        </div>
                        <img
                            ref={vogue1Ref}
                            src={vogue1}
                            className="vogue-img left-20 fixed bottom-20 md:bottom-10 h-[120px] md:h-[180px] lg:h-[240px] w-auto pointer-events-none z-50 will-change-transform opacity-0"
                            alt=""
                        />
                        <img
                            ref={vogue2Ref}
                            src={vogue2}
                            className="right-20 fixed bottom-20 md:bottom-10 h-[120px] md:h-[180px] lg:h-[240px] w-auto pointer-events-none z-50 will-change-transform opacity-0"
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
                vogueHands={
                    <>
                        <div ref={banner2Ref} className="fixed top-[15px] mt-[60px] left-1/2 -translate-x-1/2 z-[40] pointer-events-none">
                            <div className="swing-banner">
                                <img src={festheadBanner} alt="Fest Head" className="h-[220px] max-[768px]:h-[170px] max-[480px]:h-[130px] w-auto" />
                            </div>
                        </div>
                        <div className="fixed top-[48px] md:top-[80px] left-0 right-0 w-full px-12 md:px-32 flex justify-between pointer-events-none z-30">
                            <img ref={lanternLeftRef} src={lantern} className="lantern-swing h-[280px] md:h-[380px] w-auto" alt="Lantern" />
                            <img ref={lanternRightRef} src={lantern} className="lantern-swing h-[280px] md:h-[380px] w-auto " alt="Lantern" />
                        </div>
                    </>
                }
            >

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
                vogueHands={
                    <div ref={banner3Ref} className="fixed top-[15px] mt-[60px] left-1/2 -translate-x-1/2 z-[40] pointer-events-none">
                        <div className="swing-banner">
                            <img src={culturalSign} alt="Cultural Council" className="h-[220px] max-[768px]:h-[170px] max-[480px]:h-[130px] w-auto" />
                        </div>
                    </div>
                }
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
