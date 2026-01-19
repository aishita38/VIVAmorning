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
    <div className="team-card-wrapper">
      <div className="team-card">
        <img src={leftBorder} className="side-border left" alt="" />
        <div className="avatar-frame">
          <img src={imageUrl} alt="Team Member" className="member-image" />
        </div>
        <img src={rightBorder} className="side-border right" alt="" />
      </div>
      {footerText && <div className="card-footer-text">{footerText}</div>}
    </div>
  )
}

const PhotoCard = ({ imageUrl, name }) => {
  return (
    <div className="photo-card">
      <img src={leftBorder} className="photo-border left" alt="" />
      <div className="photo-frame">
        <img src={imageUrl} alt={name || "Team Member"} className="photo-image" />
      </div>
      <img src={rightBorder} className="photo-border right" alt="" />
      {name && <div className="photo-name-tag">{name}</div>}
    </div>
  )
}

const CulturalCouncilCard = ({ imageUrl }) => {
  return (
    <div className="photo-card" style={{ boxShadow: 'none', background: 'transparent' }}>
      <img src={leftBorder} className="photo-border left" alt="" />
      <div className="photo-frame" style={{ borderRadius: '20px' }}>
        <img src={imageUrl} alt="Cultural Council Member" className="photo-image" />
      </div>
      <img src={rightBorder} className="photo-border right" alt="" />
      <div className="cultural-card-footer"></div>
    </div>
  )
}

const PageSection = ({ theme, bannerImage, bannerAlt, children, showHeader }) => {
  return (
    <section className={`page-section ${theme}`}>
      {showHeader && (
        <header className="header">
          <div className="logo-container">
            <img src={vivaLogo} alt="Vivacity'26 Logo" className="viva-logo" />
          </div>
          <nav className="nav">
            <a href="#home">HOME</a>
            <a href="#events">EVENTS</a>
            <a href="#sponsors">SPONSORS</a>
            <a href="#team">OUR TEAM</a>
          </nav>
        </header>
      )}

      <div className="banner-wrapper">
        <div className="banner-content">
          <img src={bannerImage} alt={bannerAlt} className="mentors-banner" />
        </div>
      </div>

      <div className="team-section">
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
    <main className="main-content">
      <PageSection
        theme="orange-theme"
        bannerImage={mentorsBanner}
        bannerAlt="Our Mentors"
        showHeader={true}
      >
        <TeamCard
          imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
          footerText="OUR MENTORS - AJAY RAJ, PRATHMESH, MANAS, VANSH, HARSH, MRADUL"
        />
        <img ref={vogue1Ref} src={vogue1} className="vogue-img left" alt="" />
        <img ref={vogue2Ref} src={vogue2} className="vogue-img right" alt="" />
      </PageSection>

      <PageSection
        theme="blue-theme"
        bannerImage={festheadBanner}
        bannerAlt="Fest Head"
        showHeader={false}
      >
        <div className="lanterns-container">
          <img src={lantern} className="lantern left" alt="Lantern" />
          <img src={lantern} className="lantern right" alt="Lantern" />
        </div>

        <div className="photos-grid">
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
        <div className="photos-grid" style={{ marginTop: '40px', gap: '80px' }}>
          <CulturalCouncilCard imageUrl={memberImage} />
          <CulturalCouncilCard imageUrl={memberImage} />
          <CulturalCouncilCard imageUrl={memberImage} />
        </div>

        <div className="rickshaw-container">
          <img src={rickshaw} className="rickshaw left" alt="Rickshaw" />
          <img src={rickshaw} className="rickshaw right" alt="Rickshaw" />
        </div>
      </PageSection>
    </main>
  )
}

export default App
