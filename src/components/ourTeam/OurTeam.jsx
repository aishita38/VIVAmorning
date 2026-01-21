import { useLayoutEffect, useRef, useState } from 'react'
import '../../styles/ourTeam.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    vivaLogo,
    mentorsBanner,
    festheadBanner,
    lantern,
    vogue1,
    vogue2,
    rickshaw,
    culturalSign,
    memberImage,
    sponsorBanner,
    developmentBanner,
    creativeBanner,
    prEventsBanner
} from '../../assets/ourTeam'
import TeamCard from './TeamCard'
import PhotoCard from './PhotoCard'
import CulturalCouncilCard from './CulturalCouncilCard'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)
    const linksRef = useRef(null)

    useLayoutEffect(() => {
        if (menuOpen) {
            gsap.to(menuRef.current, { x: '0%', duration: 0.5, ease: 'power3.out' })
            gsap.fromTo(linksRef.current?.children,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2 }
            )
        } else {
            gsap.to(menuRef.current, { x: '100%', duration: 0.5, ease: 'power3.in' })
        }
    }, [menuOpen])

    return (
        <>
            <header className="w-full flex flex-row justify-between items-center z-50 pt-10 sm:pt-12 md:pt-14 lg:pt-16 px-3 lg:px-3 xl:px-12 2xl:px-20 relative">
                <div className="flex-shrink-0 z-50 relative">
                    <img src={vivaLogo} alt="Vivacity'26 Logo" className="h-[40px] sm:h-[50px] md:h-[70px] lg:h-[90px] w-auto transition-all" />
                </div>

                <nav className="hidden min-[1100px]:flex items-center gap-6 xl:gap-10">
                    <a href="#home" className="no-underline text-[#3d1c10] font-semibold text-[0.95rem] xl:text-[1.15rem] tracking-wider hover:text-[#9E5D47] transition-colors">HOME</a>
                    <a href="#events" className="no-underline text-[#3d1c10] font-semibold text-[0.95rem] xl:text-[1.15rem] tracking-wider hover:text-[#9E5D47] transition-colors">EVENTS</a>
                    <a href="#sponsors" className="no-underline text-[#3d1c10] font-semibold text-[0.95rem] xl:text-[1.15rem] tracking-wider hover:text-[#9E5D47] transition-colors">SPONSORS</a>
                    <a href="#team" className="no-underline text-[#3d1c10] font-semibold text-[0.95rem] xl:text-[1.15rem] tracking-wider hover:text-[#9E5D47] transition-colors">OUR TEAM</a>
                </nav>

                <div className="min-[1100px]:hidden z-50 relative">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 p-2 focus:outline-none">
                        <span className={`block w-6 h-0.5 bg-[#3d1c10] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-[#3d1c10] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-[#3d1c10] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </header>

            <div ref={menuRef} className="fixed inset-0 bg-[#f7d0ab] z-40 flex flex-col justify-center items-center min-[1100px]:hidden translate-x-full">
                <nav ref={linksRef} className="flex flex-col gap-8 text-center">
                    <a href="#home" onClick={() => setMenuOpen(false)} className="text-[#3d1c10] font-bold text-2xl tracking-widest hover:text-[#9E5D47] transition-colors">HOME</a>
                    <a href="#events" onClick={() => setMenuOpen(false)} className="text-[#3d1c10] font-bold text-2xl tracking-widest hover:text-[#9E5D47] transition-colors">EVENTS</a>
                    <a href="#sponsors" onClick={() => setMenuOpen(false)} className="text-[#3d1c10] font-bold text-2xl tracking-widest hover:text-[#9E5D47] transition-colors">SPONSORS</a>
                    <a href="#team" onClick={() => setMenuOpen(false)} className="text-[#3d1c10] font-bold text-2xl tracking-widest hover:text-[#9E5D47] transition-colors">OUR TEAM</a>
                </nav>
            </div>
        </>
    )
}

const PageSection = ({ theme, bannerImage, bannerAlt, children, showHeader, vogueHands, sectionRef }) => {
    return (
        <section ref={sectionRef} className={`w-full min-h-screen flex flex-col items-center px-3 sm:px-4 md:px-12 lg:px-16 pb-12 sm:pb-14 md:pb-16 relative z-10 overflow-hidden ${theme}`}>
            {vogueHands}

            {showHeader && (
                <Header />
            )}



            <div className="flex-1 flex flex-col justify-center items-center w-full relative z-20 pt-12">
                {children}
            </div>
        </section>
    )
}

function OurTeam() {
    const vogue1Ref = useRef(null)
    const vogue2Ref = useRef(null)

    const section1Ref = useRef(null)
    const section2Ref = useRef(null)
    const section3Ref = useRef(null)
    const section4Ref = useRef(null)
    const section5Ref = useRef(null)
    const section6Ref = useRef(null)
    const section7Ref = useRef(null)
    const section8Ref = useRef(null)

    const bgOrangeRef = useRef(null)
    const bgBlueRef = useRef(null)
    const bgPurpleRef = useRef(null)
    const bgSponsorRef = useRef(null)

    const lanternLeftRef = useRef(null)
    const lanternRightRef = useRef(null)
    const vogue3Ref = useRef(null)
    const vogue4Ref = useRef(null)
    const lanternLeftSponsorRef = useRef(null)
    const lanternRightSponsorRef = useRef(null)
    const rickshawLeftRef = useRef(null)
    const rickshawRightRef = useRef(null)
    const rickshawLeft7Ref = useRef(null)
    const rickshawRight7Ref = useRef(null)
    const vogue5Ref = useRef(null)
    const vogue6Ref = useRef(null)
    const banner1Ref = useRef(null)
    const banner2Ref = useRef(null)
    const banner3Ref = useRef(null)
    const banner4Ref = useRef(null)
    const banner6Ref = useRef(null)
    const banner7Ref = useRef(null)
    const banner8Ref = useRef(null)

    useLayoutEffect(() => {

        if (vogue1Ref.current && vogue2Ref.current) {
            gsap.fromTo([vogue1Ref.current, vogue2Ref.current],
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.2 }
            );
        }


        if (vogue1Ref.current && vogue2Ref.current && section1Ref.current) {
            const getHandMovement = () => {
                const vw = window.innerWidth;
                if (vw < 480) return 300;
                if (vw < 768) return 400;
                return 500;
            };

            const handMovement = getHandMovement();

            // Left Hand: Moves specifically out to the left
            gsap.fromTo(
                vogue1Ref.current,
                { x: 0 },
                {
                    x: -handMovement,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section1Ref.current,
                        start: "bottom bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );


            // Right Hand: Moves specifically out to the right
            gsap.fromTo(
                vogue2Ref.current,
                { x: 0 },
                {
                    x: handMovement,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section1Ref.current,
                        start: "bottom bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

        }

        if (section2Ref.current) {
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


            gsap.set(banner2Ref.current, { opacity: 0 });
            ScrollTrigger.create({
                trigger: section2Ref.current,
                start: "top 20%",
                end: "bottom 20%",
                onToggle: self => gsap.to(banner2Ref.current, { opacity: self.isActive ? 1 : 0, duration: 0.5, ease: "power2.inOut" })
            });
        }


        if (section1Ref.current) {
            gsap.set(banner1Ref.current, { opacity: 1 });
            ScrollTrigger.create({
                trigger: section1Ref.current,
                start: "top 20%",
                end: "bottom 20%",
                onToggle: self => gsap.to(banner1Ref.current, { opacity: self.isActive ? 1 : 0, duration: 0.5, ease: "power2.inOut" })
            });
        }


        if (section3Ref.current) {
            gsap.set(banner3Ref.current, { opacity: 0 });
            ScrollTrigger.create({
                trigger: section3Ref.current,
                start: "top 20%",
                end: "bottom 20%",
                onToggle: self => gsap.to(banner3Ref.current, { opacity: self.isActive ? 1 : 0, duration: 0.5, ease: "power2.inOut" })
            });
        }


        if (section4Ref.current) {
            gsap.set(banner4Ref.current, { opacity: 0 });
            gsap.set([lanternLeftSponsorRef.current, lanternRightSponsorRef.current], { opacity: 0 });


            ScrollTrigger.create({
                trigger: section4Ref.current,
                start: "top 20%",
                end: "bottom 20%",
                onToggle: self => gsap.to(banner4Ref.current, { opacity: self.isActive ? 1 : 0, duration: 0.5, ease: "power2.inOut" })
            });


            ScrollTrigger.create({
                trigger: section4Ref.current,
                start: "top 20%",
                end: "bottom 20%",
                onEnter: () => gsap.to([lanternLeftSponsorRef.current, lanternRightSponsorRef.current], { opacity: 1, duration: 0.5 }),
                onLeave: () => gsap.to([lanternLeftSponsorRef.current, lanternRightSponsorRef.current], { opacity: 0, duration: 0.5 }),
                onEnterBack: () => gsap.to([lanternLeftSponsorRef.current, lanternRightSponsorRef.current], { opacity: 1, duration: 0.5 }),
                onLeaveBack: () => gsap.to([lanternLeftSponsorRef.current, lanternRightSponsorRef.current], { opacity: 0, duration: 0.5 }),
            });
        }


        if (section6Ref.current) {
            gsap.set(banner6Ref.current, { opacity: 0 });
            gsap.set([vogue3Ref.current, vogue4Ref.current], { opacity: 0, y: 100 });

            ScrollTrigger.create({
                trigger: section6Ref.current,
                start: "top 20%",
                end: "bottom 20%",
                onEnter: () => {
                    gsap.to(banner6Ref.current, { opacity: 1, duration: 0.5 });
                    gsap.to([vogue3Ref.current, vogue4Ref.current], { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
                },
                onLeave: () => {
                    gsap.to(banner6Ref.current, { opacity: 0, duration: 0.5 });
                    gsap.to([vogue3Ref.current, vogue4Ref.current], { opacity: 0, duration: 0.5 });
                },
                onEnterBack: () => {
                    gsap.to(banner6Ref.current, { opacity: 1, duration: 0.5 });
                    gsap.to([vogue3Ref.current, vogue4Ref.current], { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
                },
                onLeaveBack: () => {
                    gsap.to(banner6Ref.current, { opacity: 0, duration: 0.5 });
                    gsap.to([vogue3Ref.current, vogue4Ref.current], { opacity: 0, duration: 0.5 });
                }
            });
        }

        if (rickshawLeftRef.current && rickshawRightRef.current && section3Ref.current) {
            const getResponsiveMovement = () => {
                const vw = window.innerWidth;
                if (vw < 480) return { start: -150, end: vw - 250 };
                if (vw < 768) return { start: -180, end: vw - 300 };
                return { start: -200, end: vw - 450 };
            };

            const movement = getResponsiveMovement();


            gsap.fromTo(rickshawLeftRef.current,
                { x: movement.start },
                {
                    x: movement.end,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section3Ref.current,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: 5,
                    }
                }
            );


            gsap.fromTo(rickshawRightRef.current,
                { x: -movement.start },
                {
                    x: -movement.end,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section3Ref.current,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: 5,
                    }
                }
            );
        }


        if (section7Ref.current) {
            gsap.set(banner7Ref.current, { opacity: 0 });
            ScrollTrigger.create({
                trigger: section7Ref.current,
                start: "top 20%",
                end: "bottom 20%",
                onToggle: self => gsap.to(banner7Ref.current, { opacity: self.isActive ? 1 : 0, duration: 0.5, ease: "power2.inOut" })
            });
        }


        if (section8Ref.current) {
            gsap.set(banner8Ref.current, { opacity: 0 });
            gsap.set([vogue5Ref.current, vogue6Ref.current], { opacity: 0, y: 100 });

            ScrollTrigger.create({
                trigger: section8Ref.current,
                start: "top 20%",
                end: "bottom 20%",
                onEnter: () => {
                    gsap.to(banner8Ref.current, { opacity: 1, duration: 0.5 });
                    gsap.to([vogue5Ref.current, vogue6Ref.current], { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
                },
                onLeave: () => {
                    gsap.to(banner8Ref.current, { opacity: 0, duration: 0.5 });
                    gsap.to([vogue5Ref.current, vogue6Ref.current], { opacity: 0, duration: 0.5 });
                },
                onEnterBack: () => {
                    gsap.to(banner8Ref.current, { opacity: 1, duration: 0.5 });
                    gsap.to([vogue5Ref.current, vogue6Ref.current], { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
                },
                onLeaveBack: () => {
                    gsap.to(banner8Ref.current, { opacity: 0, duration: 0.5 });
                    gsap.to([vogue5Ref.current, vogue6Ref.current], { opacity: 0, duration: 0.5 });
                }
            });
        }

        gsap.set(bgOrangeRef.current, { opacity: 1, zIndex: 1 });
        gsap.set(bgBlueRef.current, { opacity: 0, zIndex: 2 });
        gsap.set(bgPurpleRef.current, { opacity: 0, zIndex: 3 });
        gsap.set(bgSponsorRef.current, { opacity: 0, zIndex: 4 });

        ScrollTrigger.create({
            trigger: section2Ref.current,
            start: "top 50%",
            onToggle: self => {
                gsap.to(bgBlueRef.current, { opacity: self.isActive ? 1 : 0, duration: 0.8, ease: "power2.inOut" });
            }
        });


        ScrollTrigger.create({
            trigger: section3Ref.current,
            start: "top 50%",
            onToggle: self => {
                gsap.to(bgPurpleRef.current, { opacity: self.isActive ? 1 : 0, duration: 0.8, ease: "power2.inOut" });
            }
        });


        ScrollTrigger.create({
            trigger: section4Ref.current,
            start: "top 50%",
            endTrigger: section5Ref.current,
            end: "bottom 50%",
            onToggle: self => {
                gsap.to(bgSponsorRef.current, { opacity: self.isActive ? 1 : 0, duration: 0.8, ease: "power2.inOut" });
            }
        });


        ScrollTrigger.create({
            trigger: section7Ref.current,
            start: "top 50%",
            onToggle: self => {
                gsap.to(bgPurpleRef.current, { opacity: self.isActive ? 1 : 0, duration: 0.8, ease: "power2.inOut" });
            }
        });

        ScrollTrigger.create({
            trigger: section4Ref.current,
            start: "top center",
            end: "bottom center",
            onToggle: self => {
                if (self.isActive) document.body.classList.add('hide-frame-bottom');
                else document.body.classList.remove('hide-frame-bottom');
            }
        });

        ScrollTrigger.create({
            trigger: section5Ref.current,
            start: "top center",
            end: "bottom center",
            onToggle: self => {
                if (self.isActive) document.body.classList.add('hide-frame-top');
                else document.body.classList.remove('hide-frame-top');
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    useLayoutEffect(() => {
        const handleResize = () => {
            ScrollTrigger.refresh()
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    const sections = [
        {
            id: 'section1',
            ref: section1Ref,
            theme: 'orange-theme',
            bannerImage: mentorsBanner,
            bannerAlt: 'Our Mentors',
            showHeader: true,
            bannerRef: banner1Ref,
            vogueHands: (
                <>
                    <div ref={banner1Ref} className="fixed top-2 sm:top-4 md:top-8 left-1/2 -translate-x-1/2 z-[40] pointer-events-none opacity-100">
                        <div className="swing-banner">
                            <img src={mentorsBanner} alt="Our Mentors" className="h-[85px] sm:h-[110px] md:h-[140px] lg:h-[150px] xl:h-[160px] 2xl:h-[185px] w-auto" />
                        </div>
                    </div>
                    <img
                        ref={vogue1Ref}
                        src={vogue1}
                        className="vogue-img left-6 sm:left-10 md:left-14 lg:left-16 fixed bottom-10 sm:bottom-14 md:bottom-8 h-[90px] sm:h-[110px] md:h-[120px] lg:h-[160px] xl:h-[210px] 2xl:h-[15vw] w-auto pointer-events-none z-50 will-change-transform opacity-0"
                        alt=""
                    />
                    <img
                        ref={vogue2Ref}
                        src={vogue2}
                        className="right-6 sm:right-10 md:right-14 lg:right-16 fixed bottom-10 sm:bottom-14 md:bottom-8 h-[90px] sm:h-[110px] md:h-[120px] lg:h-[160px] xl:h-[210px] 2xl:h-[15vw] w-auto pointer-events-none z-50 will-change-transform opacity-0"
                        alt=""
                    />
                </>
            ),
            content: (
                <div className="flex flex-col justify-center items-center w-full -mt-2 md:-mt-4">
                    <TeamCard
                        imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                        footerText="OUR MENTORS - AJAY RAJ, PRATHMESH, MANAS, VANSH, HARSH, MRADUL"
                    />
                </div>
            )
        },
        {
            id: 'section2',
            ref: section2Ref,
            theme: 'blue-theme',
            bannerImage: festheadBanner,
            bannerAlt: 'Fest Head',
            showHeader: false,
            bannerRef: banner2Ref,
            vogueHands: (
                <>
                    <div ref={banner2Ref} className="fixed top-2 sm:top-4 md:top-8 left-1/2 -translate-x-1/2 z-[40] pointer-events-none opacity-0">
                        <div className="swing-banner">
                            <img src={festheadBanner} alt="Fest Head" className="h-[85px] sm:h-[110px] md:h-[140px] lg:h-[150px] xl:h-[160px] 2xl:h-[185px] w-auto" />
                        </div>
                    </div>
                    <div className="fixed top-[20px] sm:top-[25px] md:top-[30px] lg:top-[40px] left-0 right-0 w-full px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 flex justify-between pointer-events-none z-30">
                        <img ref={lanternLeftRef} src={lantern} className="lantern-swing h-[130px] sm:h-[170px] md:h-[210px] lg:h-[260px] xl:h-[300px] 2xl:h-[22vw] w-auto" alt="Lantern" />
                        <img ref={lanternRightRef} src={lantern} className="lantern-swing h-[130px] sm:h-[170px] md:h-[210px] lg:h-[260px] xl:h-[300px] 2xl:h-[22vw] w-auto " alt="Lantern" />
                    </div>
                </>
            ),
            content: (
                <div className="flex flex-col md:flex-row gap-16 sm:gap-24 md:gap-16 lg:gap-32 xl:gap-32 justify-center items-center mt-12 sm:mt-14 md:mt-20 lg:mt-24 relative z-[2]">
                    <PhotoCard
                        imageUrl="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop"
                        name="VEDANT WADHWA"
                        role="FEST HEAD"
                        size="small"
                    />
                    <PhotoCard
                        imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
                        name="VEDANG DIXIT"
                        role="FEST HEAD"
                        size="small"
                    />
                </div>
            )
        },
        {
            id: 'section3',
            ref: section3Ref,
            theme: 'purple-theme',
            bannerImage: culturalSign,
            bannerAlt: 'Cultural Council',
            showHeader: false,
            bannerRef: banner3Ref,
            vogueHands: (
                <div ref={banner3Ref} className="fixed top-2 sm:top-4 md:top-8 left-1/2 -translate-x-1/2 z-[40] pointer-events-none opacity-0">
                    <div className="swing-banner">
                        <img src={culturalSign} alt="Cultural Council" className="h-[85px] sm:h-[110px] md:h-[140px] lg:h-[150px] xl:h-[160px] 2xl:h-[185px] w-auto" />
                    </div>
                </div>
            ),
            content: (
                <>
                    <div className="flex flex-col md:flex-row gap-16 sm:gap-20 md:gap-16 lg:gap-24 xl:gap-32 justify-center items-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 flex-wrap relative z-[2]">
                        <CulturalCouncilCard imageUrl={memberImage} name="KANISHQ SINGHAL" role="GENERAL SECRETARY" />
                        <CulturalCouncilCard imageUrl={memberImage} name="ISHITA KHANDELWAL" role="ASSOCIATE G. SEC" />
                        <CulturalCouncilCard imageUrl={memberImage} name="TANMAY JAIN" role="FINANCE CONVENOR" />
                    </div>
                    <div className="absolute bottom-[-4%] left-6 sm:left-10 md:left-14 lg:left-20 right-6 sm:right-10 md:right-14 lg:right-20 w-auto flex justify-between items-end pointer-events-none z-10">
                        <img ref={rickshawLeftRef} src={rickshaw} style={{ transform: "scaleX(-1)" }} className="h-[60px] sm:h-[75px] md:h-[100px] lg:h-[110px] w-auto drop-shadow-xl transition-all" alt="Rickshaw" />
                        <img ref={rickshawRightRef} src={rickshaw} className="h-[60px] sm:h-[75px] md:h-[100px] lg:h-[110px] w-auto drop-shadow-xl transform transition-all" alt="Rickshaw" />
                    </div>
                </>
            )
        },
        {
            id: 'section6',
            ref: section6Ref,
            theme: 'orange-theme',
            bannerImage: developmentBanner,
            bannerAlt: 'Development Team',
            showHeader: false,
            bannerRef: banner6Ref,
            vogueHands: (
                <>
                    <div ref={banner6Ref} className="fixed top-2 sm:top-4 md:top-8 left-1/2 -translate-x-1/2 z-[40] pointer-events-none opacity-0">
                        <div className="swing-banner">
                            <img src={developmentBanner} alt="Development Team" className="h-[85px] sm:h-[110px] md:h-[140px] lg:h-[150px] xl:h-[160px] 2xl:h-[185px] w-auto" />
                        </div>
                    </div>
                    <img
                        ref={vogue3Ref}
                        src={vogue1}
                        className="vogue-img left-[-20px] sm:left-[-10px] md:left-0 fixed bottom-[-20px] sm:bottom-[-10px] md:bottom-0 h-[100px] sm:h-[130px] md:h-[160px] lg:h-[200px] xl:h-[250px] 2xl:h-[18vw] w-auto pointer-events-none z-50 opacity-0"
                        alt=""
                    />
                    <img
                        ref={vogue4Ref}
                        src={vogue2}
                        className="right-[-20px] sm:right-[-10px] md:right-0 fixed bottom-[-20px] sm:bottom-[-10px] md:bottom-0 h-[100px] sm:h-[130px] md:h-[160px] lg:h-[200px] xl:h-[250px] 2xl:h-[18vw] w-auto pointer-events-none z-50 opacity-0"
                        alt=""
                    />
                </>
            ),
            content: (
                <div className="flex flex-col items-center w-full relative z-[2] mt-24 sm:mt-28 md:mt-32 lg:mt-40">
                    <div className="flex flex-col md:flex-row gap-16 sm:gap-24 md:gap-16 lg:gap-32 xl:gap-32 justify-center items-center">
                        <PhotoCard imageUrl="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop" name="KANISHQ SINGHAL" role="GENERAL SECRETARY" size="small" />
                        <PhotoCard imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" name="ISHITA KHANDELWAL" role="ASSOCIATE G. SEC" size="small" />
                        <PhotoCard imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" name="TANMAY JAIN" role="FINANCE CONVENOR" size="small" />
                    </div>
                    <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 text-center max-w-[90vw] px-4 mb-20">
                        <p className="font-sans font-normal text-[#3d1c10] text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] tracking-[0.05em] uppercase leading-relaxed max-w-[1000px] mx-auto opacity-90">
                            TEAM MEMBERS - SHUBHANSHU, DHANESHA, SAMKIT, PRATEEK, VINEET, DIVYANSH, ANKUR, BHAVYAM, CHIRAG, BHUPESH, GUNEET, ABDE, DIVYA, SAURAV, KARAN
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'section4',
            ref: section4Ref,
            theme: 'blue-theme',
            bannerImage: sponsorBanner,
            bannerAlt: 'Sponsorship Team',
            showHeader: false,
            bannerRef: banner4Ref,
            vogueHands: (
                <>
                    <div ref={banner4Ref} className="fixed top-2 sm:top-4 md:top-8 left-1/2 -translate-x-1/2 z-[40] pointer-events-none opacity-0">
                        <div className="swing-banner">
                            <img src={sponsorBanner} alt="Sponsorship Team" className="h-[85px] sm:h-[110px] md:h-[140px] lg:h-[150px] xl:h-[160px] 2xl:h-[185px] w-auto" />
                        </div>
                    </div>
                    <div className="fixed top-[20px] sm:top-[25px] md:top-[30px] lg:top-[40px] left-0 right-0 w-full px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 flex justify-between pointer-events-none z-30">
                        <img ref={lanternLeftSponsorRef} src={lantern} className="lantern-swing h-[130px] sm:h-[170px] md:h-[210px] lg:h-[260px] xl:h-[300px] 2xl:h-[22vw] w-auto" alt="Lantern" />
                        <img ref={lanternRightSponsorRef} src={lantern} className="lantern-swing h-[130px] sm:h-[170px] md:h-[210px] lg:h-[260px] xl:h-[300px] 2xl:h-[22vw] w-auto " alt="Lantern" />
                    </div>
                </>
            ),
            content: (
                <div className="flex flex-col items-center w-full relative z-[2] mt-24 sm:mt-28 md:mt-32 lg:mt-40">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 sm:gap-x-20 sm:gap-y-28 md:gap-x-24 md:gap-y-32 lg:gap-x-24 lg:gap-y-32 justify-items-center w-full max-w-[1200px] px-4">
                        <PhotoCard imageUrl={memberImage} name="VIDIT SHARMA" role="SPONSORSHIP HEAD" size="small" />
                        <PhotoCard imageUrl={memberImage} name="RUDRA BANERJEE" role="SPONSORSHIP HEAD" size="small" />
                        <PhotoCard imageUrl={memberImage} name="ANURAG YADAV" role="SPONSORSHIP HEAD" size="small" />
                    </div>
                </div>
            )
        },
        {
            id: 'section5',
            ref: section5Ref,
            theme: 'blue-theme',
            showHeader: false,
            content: (
                <div className="flex flex-col items-center w-full relative z-[2] mt-12 sm:mt-14 md:mt-16 lg:mt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 sm:gap-x-20 sm:gap-y-28 md:gap-x-24 md:gap-y-32 lg:gap-x-24 lg:gap-y-32 justify-items-center w-full max-w-[1200px] px-4">
                        <PhotoCard imageUrl={memberImage} name="KARTIKEYA SINGH GAUR" role="SPONSORSHIP HEAD" size="small" />
                        <PhotoCard imageUrl={memberImage} name="SAJAL JAGGI" role="SPONSORSHIP HEAD" size="small" />
                        <PhotoCard imageUrl={memberImage} name="JAYESH JHAMNANI" role="SPONSORSHIP HEAD" size="small" />
                    </div>
                    <div className="mt-24 sm:mt-28 md:mt-32 lg:mt-40 text-center max-w-[90vw] px-4 mb-20">
                        <p className="font-sans font-normal text-[#3d1c10] text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] tracking-[0.05em] uppercase leading-relaxed max-w-[1000px] mx-auto opacity-90">
                            TEAM MEMBERS - TEJAS MISHRA, AMRENDRA VIKRAM SINGH, SHUBH KAPOOR, AYUSH RAJ, SNEHIT RAJ, MUKUND MAHESHWARI, BHAVYA SARAN, HARSH VARDHAN THAKUR, HARSHIL AGARWAL, RITISH NAGPAL, AYUSH SAINI, YATISH SINGHAL, TANISHQ GANGWANI
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'section7',
            ref: section7Ref,
            theme: 'purple-theme',
            bannerImage: creativeBanner,
            bannerAlt: 'Creative Team',
            showHeader: false,
            bannerRef: banner7Ref,
            vogueHands: (
                <div ref={banner7Ref} className="fixed top-2 sm:top-4 md:top-8 left-1/2 -translate-x-1/2 z-[40] pointer-events-none opacity-0">
                    <div className="swing-banner">
                        <img src={creativeBanner} alt="Creative Team" className="h-[85px] sm:h-[110px] md:h-[140px] lg:h-[150px] xl:h-[160px] 2xl:h-[185px] w-auto" />
                    </div>
                </div>
            ),
            content: (
                <>
                    <div className="flex flex-col items-center w-full relative z-[2] mt-24 sm:mt-28 md:mt-32 lg:mt-40">
                        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap w-full gap-4 sm:gap-6 md:gap-8 justify-evenly items-center px-4">
                            <PhotoCard imageUrl="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop" name="RISHABH SRIVASTAVA" role="CREATIVE HEAD" size="small" />
                            <PhotoCard imageUrl="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=400&auto=format&fit=crop" name="ADITYA MEHTA" role="CREATIVE HEAD" size="small" />
                            <PhotoCard imageUrl="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=400&auto=format&fit=crop" name="PRASOON AGARWAL" role="CREATIVE HEAD" size="small" />
                            <PhotoCard imageUrl="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop" name="KRISHNA GOPAL RATHI" role="CREATIVE HEAD" size="small" />
                        </div>
                        <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 text-center max-w-[90vw] px-4 mb-20">
                            <p className="font-sans font-normal text-white text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] tracking-[0.05em] uppercase leading-relaxed max-w-[1000px] mx-auto opacity-90">
                                TEAM MEMBERS - ANJALI WADHWA, KINJAL BHARIL, PARAS GUPTA, ARUSH DAKHERA, KRISH SHANDILYA, KSHITIZE SINGH, RUTWIK RAHUL NAIK, ANISH KOTHARI, PARTH SHARMA
                            </p>
                        </div>
                    </div>
                    <div className="absolute bottom-[-4%] left-6 sm:left-10 md:left-14 lg:left-20 right-6 sm:right-10 md:right-14 lg:right-20 w-auto flex justify-between items-end pointer-events-none z-10">
                        <img ref={rickshawLeft7Ref} src={rickshaw} style={{ transform: "scaleX(-1)" }} className="h-[60px] sm:h-[75px] md:h-[100px] lg:h-[110px] w-auto drop-shadow-xl transition-all" alt="Rickshaw" />
                        <img ref={rickshawRight7Ref} src={rickshaw} className="h-[60px] sm:h-[75px] md:h-[100px] lg:h-[110px] w-auto drop-shadow-xl transform transition-all" alt="Rickshaw" />
                    </div>
                </>
            )
        },
        {
            id: 'section8',
            ref: section8Ref,
            theme: 'orange-theme',
            bannerImage: prEventsBanner,
            bannerAlt: 'PR and Events Team',
            showHeader: false,
            bannerRef: banner8Ref,
            vogueHands: (
                <>
                    <div ref={banner8Ref} className="fixed top-2 sm:top-4 md:top-8 left-1/2 -translate-x-1/2 z-[40] pointer-events-none opacity-0">
                        <div className="swing-banner">
                            <img src={prEventsBanner} alt="PR and Events Team" className="h-[85px] sm:h-[110px] md:h-[140px] lg:h-[150px] xl:h-[160px] 2xl:h-[185px] w-auto" />
                        </div>
                    </div>
                    <img
                        ref={vogue5Ref}
                        src={vogue1}
                        className="vogue-img left-[-20px] sm:left-[-10px] md:left-0 fixed bottom-[-20px] sm:bottom-[-10px] md:bottom-0 h-[100px] sm:h-[130px] md:h-[160px] lg:h-[200px] xl:h-[250px] 2xl:h-[18vw] w-auto pointer-events-none z-50 opacity-0"
                        alt=""
                    />
                    <img
                        ref={vogue6Ref}
                        src={vogue2}
                        className="right-[-20px] sm:right-[-10px] md:right-0 fixed bottom-[-20px] sm:bottom-[-10px] md:bottom-0 h-[100px] sm:h-[130px] md:h-[160px] lg:h-[200px] xl:h-[250px] 2xl:h-[18vw] w-auto pointer-events-none z-50 opacity-0"
                        alt=""
                    />
                </>
            ),
            content: (
                <div className="flex flex-col items-center w-full relative z-[2] mt-24 sm:mt-28 md:mt-32 lg:mt-40">
                    <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap w-full gap-4 sm:gap-6 md:gap-8 justify-evenly items-center px-4">
                        <PhotoCard imageUrl="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop" name="VIKRANT SINGH RATHORE" role="EVENTS HEAD" size="small" />
                        <PhotoCard imageUrl="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=400&auto=format&fit=crop" name="RAGHAV PATHAK" role="EVENTS HEAD" size="small" />
                        <PhotoCard imageUrl="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=400&auto=format&fit=crop" name="PARTH GOYAL" role="EVENTS HEAD" size="small" />
                        <PhotoCard imageUrl="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop" name="TAVISHI VERMA" role="EVENTS HEAD" size="small" />
                    </div>
                    <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 text-center max-w-[90vw] px-4 mb-20">
                        <p className="font-sans font-normal text-[#3d1c10] text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] tracking-[0.05em] uppercase leading-relaxed max-w-[1000px] mx-auto opacity-90">
                            TEAM MEMBERS - PALLAV SURANA, AADYA RASTOGI, CHINMAY CHANDALIYA, MARDAV JAIN, HARSH MAURYA, MIHIR KUMAWAT, MADHUSUDAN SINGLA, VIDIT PAREKH, ANTRIKSH NAHAR, PALOMA JAIN, LAMIA KHAN, ARJAV JAIN, SHIVIKA BANSAL, ISHIKA, ARNAV DUBEY, SANSKRITI TRIPATHI, AKANSHA GARG, MADHUR JAIN
                        </p>
                    </div>
                </div>
            )
        }
    ]

    return (
        <main className="w-full relative">
            <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <div ref={bgOrangeRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] bg-gradient-orange transition-opacity duration-0" />
                <div ref={bgBlueRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] bg-gradient-blue transition-opacity duration-0" />
                <div ref={bgPurpleRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] bg-gradient-purple transition-opacity duration-0" />
                <div ref={bgSponsorRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] bg-gradient-blue transition-opacity duration-0" />
            </div>

            {sections.map((section) => (
                <PageSection
                    key={section.id}
                    sectionRef={section.ref}
                    theme={section.theme}
                    bannerImage={section.bannerImage}
                    bannerAlt={section.bannerAlt}
                    showHeader={section.showHeader}
                    vogueHands={section.vogueHands}
                >
                    {section.content}
                </PageSection>
            ))}

        </main >
    )
}

export default OurTeam
