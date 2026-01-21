import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    vivaLogo,
    mentorsBanner,
    festheadBanner,
    leftBorder,
    rightBorder,
    lantern,
    vogue1,
    vogue2,
    rickshaw,
    culturalSign,
    memberImage,
    instaIcon,
    mailIcon,
    sponsorBanner,
    developmentBanner,
    creativeBanner,
    prEventsBanner
} from '../assets/ourTeam'

gsap.registerPlugin(ScrollTrigger)

const TeamCard = ({ imageUrl, footerText }) => {
    return (
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[40px]">
            <div className="relative flex items-center bg-white p-[1.5px] sm:p-[2.5px] md:p-[3px] rounded-[15px] sm:rounded-[20px] md:rounded-[25px] shadow-xl">
                <img src={leftBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -left-3 sm:-left-4 md:-left-5 lg:-left-[20px]" alt="" />
                <div className="w-[70vw] sm:w-[75vw] md:w-[65vw] lg:w-[540px] 2xl:w-[35vw] aspect-[16/9] overflow-hidden relative rounded-[13px] sm:rounded-[18px] md:rounded-[23px]">
                    <img src={imageUrl} alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <img src={rightBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -right-3 sm:-right-4 md:-right-5 lg:-right-[20px]" alt="" />
            </div>
            {footerText && (
                <div className="font-sans font-normal text-[#213547] text-[0.75rem] sm:text-[0.85rem] md:text-sm lg:text-[1rem] 2xl:text-[1.2rem] tracking-wide sm:tracking-wider text-center uppercase max-w-[95vw] px-2">
                    {footerText}
                </div>
            )}
        </div>
    )
}

const PhotoCard = ({ imageUrl, name, role, size = "normal" }) => {
    const isSmall = size === "small";
    const cardRef = useRef(null);
    const [labelWidth, setLabelWidth] = useState('auto');

    const imageWidthClasses = isSmall
        ? "w-[85px] sm:w-[105px] md:w-[105px] lg:w-[125px] xl:w-[12vw] 2xl:w-[14vw]"
        : "w-[100px] sm:w-[130px] md:w-[130px] lg:w-[155px] xl:w-[15vw] 2xl:w-[18vw]";

    // Bottom offset
    const bottomClasses = isSmall
        ? "-bottom-[38px] sm:-bottom-[50px] md:-bottom-[45px] lg:-bottom-[50px] xl:-bottom-[75px] 2xl:-bottom-[95px]"
        : "-bottom-[45px] sm:-bottom-[58px] md:-bottom-[54px] lg:-bottom-[58px] xl:-bottom-[90px] 2xl:-bottom-[115px]";

    // Icon size
    const iconWidthClasses = isSmall
        ? "w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-[2.5vw] xl:h-[2.5vw] 2xl:w-[3vw] 2xl:h-[3vw]"
        : "w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-[3.2vw] xl:h-[3.2vw] 2xl:w-[3.8vw] 2xl:h-[3.8vw]";

    // Text sizes
    const nameTextSize = isSmall
        ? "text-[0.55rem] sm:text-[0.6rem] md:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.9vw] 2xl:text-[1.1vw]"
        : "text-[0.65rem] sm:text-[0.7rem] md:text-[0.85rem] lg:text-[1rem] xl:text-[1.1vw] 2xl:text-[1.3vw]";

    const roleTextSize = isSmall
        ? "text-[0.45rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.7rem] xl:text-[0.7vw] 2xl:text-[0.9vw]"
        : "text-[0.55rem] sm:text-[0.6rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[0.9vw] 2xl:text-[1.1vw]";

    useLayoutEffect(() => {
        if (cardRef.current) {
            setLabelWidth(cardRef.current.offsetWidth * 1.2);
        }
        const handleResize = () => {
            if (cardRef.current) {
                setLabelWidth(cardRef.current.offsetWidth * 1.2);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative flex flex-col items-center">
            <div ref={cardRef} className={`relative flex items-center bg-white p-[1.5px] sm:p-[2px] md:p-[2.5px] rounded-[12px] sm:rounded-[15px] md:rounded-[18px] shadow-xl transform transition-transform hover:scale-105`}>
                <img src={leftBorder} className="h-[96%] absolute top-[-3%] w-auto z-[2] pointer-events-none -left-3 sm:-left-4 md:-left-5 lg:-left-[24px]" alt="" />
                <div className={`${imageWidthClasses} aspect-[16/24] overflow-hidden relative rounded-[10.5px] sm:rounded-[13px] md:rounded-[16px]`}>
                    <img src={imageUrl} alt={name || "Team Member"} className="w-full h-full object-cover" />
                </div>
                <img src={rightBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -right-3 sm:-right-4 md:-right-5 lg:-right-[24px]" alt="" />
            </div>

            {(name || role) && (
                <div className={`absolute ${bottomClasses} flex items-center gap-0.5 sm:gap-1 md:gap-1.5 z-10`}>
                    {/* Left Icon */}
                    <a href="#" className={`${iconWidthClasses} flex items-center justify-center transition-transform hover:scale-110`}>
                        <img src={instaIcon} className="max-w-full max-h-full object-contain drop-shadow-md" alt="Instagram" />
                    </a>

                    {/* Main Label Pill */}
                    <div
                        className={`label-pill-ticket ${isSmall ? 'label-pill-compact' : ''}`}
                        style={{ width: labelWidth }}
                    >
                        <div className={`${nameTextSize} text-white font-semibold tracking-wider leading-[1.1] uppercase font-sans whitespace-nowrap`}>
                            {name}
                        </div>
                        <div className={`${roleTextSize} text-white/95 font-normal tracking-[0.12em] uppercase font-sans leading-tight text-center`}>
                            {role}
                        </div>
                    </div>

                    {/* Right Icon */}
                    <a href="#" className={`${iconWidthClasses} flex items-center justify-center transition-transform hover:scale-110`}>
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
            <img src={leftBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -left-3 sm:-left-3 md:-left-4 lg:-left-5" alt="" />
            <div className="w-[110px] sm:w-[130px] md:w-[160px] lg:w-[190px] aspect-[22/26] overflow-hidden relative rounded-[12px] sm:rounded-[15px] md:rounded-[18px] bg-white p-[1.5px] sm:p-[2px] md:p-[2.5px] shadow-xl">
                <img src={imageUrl} alt="Cultural Council Member" className="w-full h-full object-cover rounded-[10.5px] sm:rounded-[13px] md:rounded-[16px]" />
            </div>
            <img src={rightBorder} className="h-[106%] absolute top-[-3%] w-auto z-[2] pointer-events-none -right-3 sm:-right-3 md:-right-4 lg:-right-5" alt="" />
            <div className="absolute -bottom-[30px] sm:-bottom-[35px] md:-bottom-[40px] lg:-bottom-[45px] left-1/2 -translate-x-1/2 bg-[#9d00cc] w-[100px] sm:w-[115px] md:w-[135px] lg:w-[150px] h-[25px] sm:h-[28px] md:h-[32px] lg:h-[36px] rounded-[15px] sm:rounded-[18px] md:rounded-[20px] border-2 sm:border-3 border-dotted border-white/80 shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-[3]"></div>
        </div>
    )
}

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

                {/* Desktop Nav */}
                <nav className="hidden min-[1100px]:flex items-center gap-6 xl:gap-10">
                    <a href="#home" className="no-underline text-[#3d1c10] font-semibold text-[0.95rem] xl:text-[1.15rem] tracking-wider hover:text-[#9E5D47] transition-colors">HOME</a>
                    <a href="#events" className="no-underline text-[#3d1c10] font-semibold text-[0.95rem] xl:text-[1.15rem] tracking-wider hover:text-[#9E5D47] transition-colors">EVENTS</a>
                    <a href="#sponsors" className="no-underline text-[#3d1c10] font-semibold text-[0.95rem] xl:text-[1.15rem] tracking-wider hover:text-[#9E5D47] transition-colors">SPONSORS</a>
                    <a href="#team" className="no-underline text-[#3d1c10] font-semibold text-[0.95rem] xl:text-[1.15rem] tracking-wider hover:text-[#9E5D47] transition-colors">OUR TEAM</a>
                </nav>

                {/* Mobile Hamburger */}
                <div className="min-[1100px]:hidden z-50 relative">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 p-2 focus:outline-none">
                        <span className={`block w-6 h-0.5 bg-[#3d1c10] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-[#3d1c10] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-[#3d1c10] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
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
            {/* Absolute decorations (Hands) go here to ignore section padding */}
            {vogueHands}

            {showHeader && (
                <Header />
            )}

            {/* Banner rendering removed from here to be handled by fixed container in App */}

            <div className="flex-1 flex flex-col justify-center items-center w-full relative z-20 pt-12">
                {children}
            </div>
        </section>
    )
}

function OurTeam() {
    const vogue1Ref = useRef(null)
    const vogue2Ref = useRef(null)

    // Refs for sections to trigger background changes
    const section1Ref = useRef(null)
    const section2Ref = useRef(null)
    const section3Ref = useRef(null)
    const section4Ref = useRef(null)
    const section5Ref = useRef(null)
    const section6Ref = useRef(null)
    const section7Ref = useRef(null) // Creative Team section
    const section8Ref = useRef(null) // PR Events Team section

    // Refs for background layers
    const bgOrangeRef = useRef(null)
    const bgBlueRef = useRef(null)
    const bgPurpleRef = useRef(null)
    const bgSponsorRef = useRef(null)

    // Refs for animations
    const lanternLeftRef = useRef(null)
    const lanternRightRef = useRef(null)
    const vogue3Ref = useRef(null) // For section6 hands
    const vogue4Ref = useRef(null) // For section6 hands
    const lanternLeftSponsorRef = useRef(null)
    const lanternRightSponsorRef = useRef(null)
    const rickshawLeftRef = useRef(null)
    const rickshawRightRef = useRef(null)
    const rickshawLeft7Ref = useRef(null) // For section7
    const rickshawRight7Ref = useRef(null) // For section7
    const vogue5Ref = useRef(null) // For section8 hands
    const vogue6Ref = useRef(null) // For section8 hands
    const banner1Ref = useRef(null)
    const banner2Ref = useRef(null)
    const banner3Ref = useRef(null)
    const banner4Ref = useRef(null)
    const banner6Ref = useRef(null) // For section6
    const banner7Ref = useRef(null) // For section7
    const banner8Ref = useRef(null) // For section8

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
            // Calculate responsive movement based on viewport width
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
                    x: -handMovement, // slides fully out to the left
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
                    x: handMovement, // slides fully out to the right
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
                onToggle: self => gsap.to(banner2Ref.current, { opacity: self.isActive ? 1 : 0, duration: 0.5, ease: "power2.inOut" })
            });
        }

        // Section 1 Banner - Stick and Fade
        if (section1Ref.current) {
            gsap.set(banner1Ref.current, { opacity: 1 });
            ScrollTrigger.create({
                trigger: section1Ref.current,
                start: "top 20%",
                end: "bottom 20%",
                onToggle: self => gsap.to(banner1Ref.current, { opacity: self.isActive ? 1 : 0, duration: 0.5, ease: "power2.inOut" })
            });
        }

        // Section 3 Banner - Stick and Fade
        if (section3Ref.current) {
            gsap.set(banner3Ref.current, { opacity: 0 });
            ScrollTrigger.create({
                trigger: section3Ref.current,
                start: "top 20%",
                end: "bottom 20%",
                onToggle: self => gsap.to(banner3Ref.current, { opacity: self.isActive ? 1 : 0, duration: 0.5, ease: "power2.inOut" })
            });
        }

        // Section 4 Banner and Lanterns - Stick and Fade (Sponsor Section)
        if (section4Ref.current) {
            gsap.set(banner4Ref.current, { opacity: 0 });
            gsap.set([lanternLeftSponsorRef.current, lanternRightSponsorRef.current], { opacity: 0 });

            // Banner Animation
            ScrollTrigger.create({
                trigger: section4Ref.current,
                start: "top 20%",
                end: "bottom 20%",
                onToggle: self => gsap.to(banner4Ref.current, { opacity: self.isActive ? 1 : 0, duration: 0.5, ease: "power2.inOut" })
            });

            // Lanterns Animation (Visible only for Section 4)
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

        // Section 6 Banner and Vogue Hands - Stick and Fade
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

        // 3. Rickshaw Horizontal Full-Width Animation
        // Rickshaws move purely horizontally from one side to the other at the bottom of the screen
        if (rickshawLeftRef.current && rickshawRightRef.current && section3Ref.current) {
            // Calculate responsive movement based on viewport width
            const getResponsiveMovement = () => {
                const vw = window.innerWidth;
                if (vw < 480) return { start: -150, end: vw - 250 };
                if (vw < 768) return { start: -180, end: vw - 300 };
                return { start: -200, end: vw - 450 };
            };

            const movement = getResponsiveMovement();

            // Left Rickshaw: Starts Left -> Goes Right across full width
            gsap.fromTo(rickshawLeftRef.current,
                { x: movement.start },
                {
                    x: movement.end,
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
                { x: -movement.start },
                {
                    x: -movement.end,
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

        // Section 7 Banner - Stick and Fade
        if (section7Ref.current) {
            gsap.set(banner7Ref.current, { opacity: 0 });
            ScrollTrigger.create({
                trigger: section7Ref.current,
                start: "top 20%",
                end: "bottom 20%",
                onToggle: self => gsap.to(banner7Ref.current, { opacity: self.isActive ? 1 : 0, duration: 0.5, ease: "power2.inOut" })
            });
        }

        // Section 8 Banner and Vogue Hands
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

        // 4. Background Transition Logic
        // Create a timeline that crossfades backgrounds based on scroll position

        // Initial State
        gsap.set(bgOrangeRef.current, { opacity: 1, zIndex: 1 });
        gsap.set(bgBlueRef.current, { opacity: 0, zIndex: 2 });
        gsap.set(bgPurpleRef.current, { opacity: 0, zIndex: 3 });
        gsap.set(bgSponsorRef.current, { opacity: 0, zIndex: 4 });

        // Continuous Background Rotation - Disabled
        // gsap.to([bgOrangeRef.current, bgBlueRef.current, bgPurpleRef.current, bgSponsorRef.current], {
        //     rotation: 360,
        //     duration: 60,
        //     repeat: -1,
        //     ease: "linear"
        // });

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

        // Transition: Purple -> Sponsor (Section 3 to Sections 4 & 5)
        ScrollTrigger.create({
            trigger: section4Ref.current,
            start: "top 50%",
            endTrigger: section5Ref.current,
            end: "bottom 50%",
            onToggle: self => {
                gsap.to(bgSponsorRef.current, { opacity: self.isActive ? 1 : 0, duration: 0.8, ease: "power2.inOut" });
            }
        });

        // Transition: -> Purple again (Section 7)
        ScrollTrigger.create({
            trigger: section7Ref.current,
            start: "top 50%",
            onToggle: self => {
                gsap.to(bgPurpleRef.current, { opacity: self.isActive ? 1 : 0, duration: 0.8, ease: "power2.inOut" });
            }
        });

        // Transition: -> Orange again (Section 8)
        ScrollTrigger.create({
            trigger: section8Ref.current,
            start: "top 50%",
            onToggle: self => {
                gsap.to(bgOrangeRef.current, { opacity: self.isActive ? 1 : 0, duration: 0.8, ease: "power2.inOut" });
            }
        });

        // Border Continuity Logic for Sponsor Section (4 & 5)
        // Sec 4: Hide bottom border to connect to 5
        ScrollTrigger.create({
            trigger: section4Ref.current,
            start: "top center",
            end: "bottom center",
            onToggle: self => {
                if (self.isActive) document.body.classList.add('hide-frame-bottom');
                else document.body.classList.remove('hide-frame-bottom');
            }
        });

        // Sec 5: Hide top border to connect to 4
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

    // Add resize listener to refresh ScrollTrigger on viewport changes
    useLayoutEffect(() => {
        const handleResize = () => {
            ScrollTrigger.refresh()
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    return (
        <main className="w-full relative">
            {/* FIXED BACKGROUND LAYERS - z-0 to sit above body bg but behind content */}
            {/* FIXED BACKGROUND LAYERS - z-0 to sit above body bg but behind content */}
            <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <div ref={bgOrangeRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] bg-gradient-orange transition-opacity duration-0" />
                <div ref={bgBlueRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] bg-gradient-blue transition-opacity duration-0" />
                <div ref={bgPurpleRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] bg-gradient-purple transition-opacity duration-0" />
                <div ref={bgSponsorRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] bg-gradient-blue transition-opacity duration-0" />
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
                }
            >
                <div className="flex flex-col justify-center items-center w-full -mt-2 md:-mt-4">
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
                }
            >

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
            </PageSection>

            <PageSection
                sectionRef={section3Ref}
                theme="purple-theme"
                bannerImage={culturalSign}
                bannerAlt="Cultural Council"
                showHeader={false}
                vogueHands={
                    <div ref={banner3Ref} className="fixed top-2 sm:top-4 md:top-8 left-1/2 -translate-x-1/2 z-[40] pointer-events-none opacity-0">
                        <div className="swing-banner">
                            <img src={culturalSign} alt="Cultural Council" className="h-[85px] sm:h-[110px] md:h-[140px] lg:h-[150px] xl:h-[160px] 2xl:h-[185px] w-auto" />
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 justify-center items-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex-wrap relative z-[2]">
                    <CulturalCouncilCard imageUrl={memberImage} />
                    <CulturalCouncilCard imageUrl={memberImage} />
                    <CulturalCouncilCard imageUrl={memberImage} />
                </div>

                {/* Updated: Remove horizontal padding (px-0) and adjusted vertical position */}
                <div className="absolute bottom-[-4%] left-6 sm:left-10 md:left-14 lg:left-20 right-6 sm:right-10 md:right-14 lg:right-20 w-auto flex justify-between items-end pointer-events-none z-10">
                    <img ref={rickshawLeftRef} src={rickshaw} style={{ transform: "scaleX(-1)" }} className="h-[60px] sm:h-[75px] md:h-[100px] lg:h-[110px] w-auto drop-shadow-xl transition-all" alt="Rickshaw" />
                    <img ref={rickshawRightRef} src={rickshaw} className="h-[60px] sm:h-[75px] md:h-[100px] lg:h-[110px] w-auto drop-shadow-xl transform transition-all" alt="Rickshaw" />
                </div>
            </PageSection>

            <PageSection
                sectionRef={section6Ref}
                theme="orange-theme"
                bannerImage={developmentBanner}
                bannerAlt="Development Team"
                showHeader={false}
                vogueHands={
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
                }
            >

                <div className="flex flex-col items-center w-full relative z-[2] mt-24 sm:mt-28 md:mt-32 lg:mt-40">
                    <div className="flex flex-col md:flex-row gap-16 sm:gap-24 md:gap-16 lg:gap-32 xl:gap-32 justify-center items-center">
                        <PhotoCard
                            imageUrl="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop"
                            name="KANISHQ SINGHAL"
                            role="GENERAL SECRETARY"
                            size="small"
                        />
                        <PhotoCard
                            imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
                            name="ISHITA KHANDELWAL"
                            role="ASSOCIATE G. SEC"
                            size="small"
                        />
                        <PhotoCard
                            imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
                            name="TANMAY JAIN"
                            role="FINANCE CONVENOR"
                            size="small"
                        />
                    </div>

                    <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 text-center max-w-[90vw] px-4 mb-20">
                        <p className="font-sans font-normal text-[#3d1c10] text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] tracking-[0.05em] uppercase leading-relaxed max-w-[1000px] mx-auto opacity-90">
                            TEAM MEMBERS - SHUBHANSHU, DHANESHA, SAMKIT, PRATEEK, VINEET, DIVYANSH, ANKUR, BHAVYAM, CHIRAG, BHUPESH, GUNEET, ABDE, DIVYA, SAURAV, KARAN
                        </p>
                    </div>
                </div>
            </PageSection>

            <PageSection
                sectionRef={section4Ref}
                theme="blue-theme"
                bannerImage={sponsorBanner}
                bannerAlt="Sponsorship Team"
                showHeader={false}
                vogueHands={
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
                }
            >
                <div className="flex flex-col items-center w-full relative z-[2] mt-24 sm:mt-28 md:mt-32 lg:mt-40">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 sm:gap-x-20 sm:gap-y-28 md:gap-x-24 md:gap-y-32 lg:gap-x-24 lg:gap-y-32 justify-items-center w-full max-w-[1200px] px-4">
                        <PhotoCard imageUrl={memberImage} name="VIDIT SHARMA" role="SPONSORSHIP HEAD" size="small" />
                        <PhotoCard imageUrl={memberImage} name="RUDRA BANERJEE" role="SPONSORSHIP HEAD" size="small" />
                        <PhotoCard imageUrl={memberImage} name="ANURAG YADAV" role="SPONSORSHIP HEAD" size="small" />
                    </div>
                </div>
            </PageSection>

            <PageSection
                sectionRef={section5Ref}
                theme="blue-theme"
                showHeader={false}
            >
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
            </PageSection>

            <PageSection
                sectionRef={section7Ref}
                theme="purple-theme"
                bannerImage={creativeBanner}
                bannerAlt="Creative Team"
                showHeader={false}
                vogueHands={
                    <div ref={banner7Ref} className="fixed top-2 sm:top-4 md:top-8 left-1/2 -translate-x-1/2 z-[40] pointer-events-none opacity-0">
                        <div className="swing-banner">
                            <img src={creativeBanner} alt="Creative Team" className="h-[85px] sm:h-[110px] md:h-[140px] lg:h-[150px] xl:h-[160px] 2xl:h-[185px] w-auto" />
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col items-center w-full relative z-[2] mt-24 sm:mt-28 md:mt-32 lg:mt-40">
                    <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap w-full gap-4 sm:gap-6 md:gap-8 justify-evenly items-center px-4">
                        <PhotoCard
                            imageUrl="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop"
                            name="RISHABH SRIVASTAVA"
                            role="CREATIVE HEAD"
                            size="small"
                        />
                        <PhotoCard
                            imageUrl="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=400&auto=format&fit=crop"
                            name="ADITYA MEHTA"
                            role="CREATIVE HEAD"
                            size="small"
                        />
                        <PhotoCard
                            imageUrl="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=400&auto=format&fit=crop"
                            name="PRASOON AGARWAL"
                            role="CREATIVE HEAD"
                            size="small"
                        />
                        <PhotoCard
                            imageUrl="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop"
                            name="KRISHNA GOPAL RATHI"
                            role="CREATIVE HEAD"
                            size="small"
                        />
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
            </PageSection>

            <PageSection
                sectionRef={section8Ref}
                theme="orange-theme"
                bannerImage={prEventsBanner}
                bannerAlt="PR and Events Team"
                showHeader={false}
                vogueHands={
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
                }
            >
                <div className="flex flex-col items-center w-full relative z-[2] mt-24 sm:mt-28 md:mt-32 lg:mt-40">
                    <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap w-full gap-4 sm:gap-6 md:gap-8 justify-evenly items-center px-4">
                        <PhotoCard
                            imageUrl="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop"
                            name="VIKRANT SINGH RATHORE"
                            role="EVENTS HEAD"
                            size="small"
                        />
                        <PhotoCard
                            imageUrl="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=400&auto=format&fit=crop"
                            name="RAGHAV PATHAK"
                            role="EVENTS HEAD"
                            size="small"
                        />
                        <PhotoCard
                            imageUrl="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=400&auto=format&fit=crop"
                            name="PARTH GOYAL"
                            role="EVENTS HEAD"
                            size="small"
                        />
                        <PhotoCard
                            imageUrl="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop"
                            name="TAVISHI VERMA"
                            role="EVENTS HEAD"
                            size="small"
                        />
                    </div>

                    <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 text-center max-w-[90vw] px-4 mb-20">
                        <p className="font-sans font-normal text-[#3d1c10] text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] tracking-[0.05em] uppercase leading-relaxed max-w-[1000px] mx-auto opacity-90">
                            TEAM MEMBERS - PALLAV SURANA, AADYA RASTOGI, CHINMAY CHANDALIYA, MARDAV JAIN, HARSH MAURYA, MIHIR KUMAWAT, MADHUSUDAN SINGLA, VIDIT PAREKH, ANTRIKSH NAHAR, PALOMA JAIN, LAMIA KHAN, ARJAV JAIN, SHIVIKA BANSAL, ISHIKA, ARNAV DUBEY, SANSKRITI TRIPATHI, AKANSHA GARG, MADHUR JAIN
                        </p>
                    </div>
                </div>
            </PageSection>
        </main >
    )
}

export default OurTeam
