import LanguageSwitch from '../components/LanguageSwitch';
import Signature from '../components/Signature';
import { usePageMeta } from '../hooks/usePageMeta';
import '../styles/redesign.css';

// Version anglaise générée à partir de la maquette « Sanou.dc.html » du canevas de design, puis relu.
// Les styles restent en ligne pour garantir un rendu identique à la maquette.
const SanouCaseStudy = () => {
  usePageMeta({
    title: "Sanou va bien – Case study – Imed Belouettar",
    description: "Website design for a cultural association, with an accessibility panel and an admin dashboard.",
    background: "#050505",
  });

  return (
    <div className="rd rd-sanou" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#FFFFFF", background: "#050505", minHeight: "100vh" }}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {/* TOP BAR */}
      <header style={{ borderBottom: "1px solid #2A2A30" }}>
        <nav aria-label="Main navigation" className="cs-nav" style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", fontWeight: "600", fontSize: "15px", color: "#FFFFFF", textDecoration: "none" }}>
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 5l-7 7 7 7" />
            </svg>
            <span className="sr-only">
              Imed Belouettar's portfolio
            </span>
            <Signature height={32} />
          </a>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px" }}>
            <LanguageSwitch color="#FFFFFF" />
            <a href="mailto:ie.belouettar@gmail.com" className="cs-nav__cta" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", background: "#FFFFFF", color: "#050505", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
              Contact me
            </a>
          </div>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1}>
        {/* HERO */}
        <section aria-labelledby="titre-page" style={{ position: "relative", overflow: "hidden", background: "radial-gradient(ellipse 60% 70% at 72% -10%, rgba(192,132,252,0.20), transparent 70%), #050505" }}>
          <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 1440 820" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: "0" }}>
            <defs>
              <linearGradient id="cone" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.16" />
                <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="1010,0 1090,0 1360,820 760,820" fill="url(#cone)" />
          </svg>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "40px 24px 96px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
            <div style={{ flex: "999 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "26px" }}>
              <nav aria-label="Breadcrumb">
                <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "8px", fontSize: "14px", fontWeight: "500", color: "#B9B9C2" }}>
                  <li>
                    <a href="/" style={{ color: "#FFFFFF" }}>
                      Home
                    </a>
                  </li>
                  <li aria-hidden="true">
                    /
                  </li>
                  <li>
                    <a href="/#travaux" style={{ color: "#FFFFFF" }}>
                      Case studies
                    </a>
                  </li>
                  <li aria-hidden="true">
                    /
                  </li>
                  <li>
                    <span aria-current="page">
                      Sanou va bien
                    </span>
                  </li>
                </ol>
              </nav>
              <p style={{ margin: "0", fontSize: "13px", fontWeight: "700", letterSpacing: "0.14em", color: "#C084FC" }}>
                CASE STUDY · CULTURAL ASSOCIATION
              </p>
              <h1 id="titre-page" style={{ margin: "0", fontFamily: "'Fondamento', Garamond, serif", fontWeight: "400", fontSize: "clamp(44px, 6vw, 84px)", lineHeight: "1.02" }}>
                A small stage,
                {" "}<br />
                open to everyone.
              </h1>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#D1D5DB", maxWidth: "46ch" }}>
                The website of the Sanou va bien association, designed with a panel that lets every visitor adjust the display to their needs.
              </p>
              <ul aria-label="Project keywords" style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "8px", fontSize: "13px", fontWeight: "600" }}>
                <li style={{ padding: "8px 12px", border: "1px solid #FFFFFF" }}>
                  Website
                </li>
                <li style={{ padding: "8px 12px", border: "1px solid #FFFFFF" }}>
                  UX/UI
                </li>
                <li style={{ padding: "8px 12px", border: "1px solid #FFFFFF" }}>
                  Accessibility
                </li>
                <li style={{ padding: "8px 12px", background: "#C084FC", color: "#050505", border: "1px solid #C084FC" }}>
                  ● Coming soon
                </li>
              </ul>
            </div>
            {/* hero visual */}
            <div aria-hidden="true" style={{ flex: "1 1 460px", minWidth: "0", position: "relative", paddingBottom: "60px" }}>
              <div style={{ border: "1px solid #3A3A42", background: "#000000", boxShadow: "0 40px 80px rgba(0,0,0,0.6)" }}>
                <div style={{ display: "flex", gap: "6px", alignItems: "center", padding: "10px 12px", background: "#18181C", borderBottom: "1px solid #2A2A30" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#3A3A42" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#3A3A42" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#3A3A42" }} />
                  <span style={{ marginLeft: "12px", flex: "1", height: "18px", background: "#0E0E11" }} />
                </div>
                <div style={{ position: "relative", minHeight: "340px", padding: "16px 20px 24px", background: "radial-gradient(ellipse 40% 60% at 70% 30%, rgba(255,255,255,0.10), transparent 70%), #000000", display: "flex", flexDirection: "column", gap: "22px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                    <span style={{ fontFamily: "'Fondamento', serif", fontStyle: "italic", fontSize: "18px" }}>
                      Sanou
                    </span>
                    <span style={{ display: "flex", gap: "14px", fontFamily: "'Fondamento', serif", fontSize: "12px" }}>
                      <span style={{ borderBottom: "1px solid #FFFFFF" }}>
                        Home
                      </span>
                      <span>
                        Events
                      </span>
                      <span>
                        Gallery
                      </span>
                      <span>
                        Calendar
                      </span>
                    </span>
                    <span style={{ width: "26px", height: "26px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#050505">
                        <circle cx="12" cy="4" r="2.4" />
                        <path d="M4 7.5h16v2.2h-5.6V21h-2.4v-6h-0.4v6H9.2V9.7H4z" />
                      </svg>
                    </span>
                  </div>
                  <p style={{ margin: "18px 0 0", fontFamily: "'Fondamento', serif", fontSize: "38px", lineHeight: "1.05", maxWidth: "9ch" }}>
                    Small stage, Big stories.
                  </p>
                  <p style={{ margin: "0", fontSize: "11px", color: "#D1D5DB", maxWidth: "30ch" }}>
                    Discover a new way to experience culture and art with our community.
                  </p>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ padding: "9px 16px", background: "#FFFFFF", color: "#050505", fontSize: "11px", fontWeight: "700" }}>
                      Discover
                    </span>
                    <span style={{ padding: "8px 14px", border: "1px solid #FFFFFF", fontFamily: "'Fondamento', serif", fontSize: "13px", boxShadow: "5px 5px 0 -1px #000000, 5px 5px 0 0 #FFFFFF" }}>
                      Donate
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", right: "-8px", bottom: "0", width: "250px", background: "#FFFFFF", color: "#050505", border: "2px solid #050505", boxShadow: "8px 8px 0 0 #C084FC", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontWeight: "800", fontSize: "13px" }}>
                  Accessibility settings
                </span>
                {" "}
                <span style={{ fontSize: "11px", fontWeight: "600" }}>
                  Contrast
                </span>
                <div style={{ display: "flex", gap: "6px", fontSize: "11px", fontWeight: "600" }}>
                  <span style={{ padding: "5px 8px", border: "1.5px solid #050505" }}>
                    Light
                  </span>
                  <span style={{ padding: "5px 8px", border: "1.5px solid #050505" }}>
                    Dark
                  </span>
                  <span style={{ padding: "5px 8px", background: "#050505", color: "#FFFFFF", border: "1.5px solid #050505" }}>
                    ✓ High
                  </span>
                </div>
                <span style={{ fontSize: "11px", fontWeight: "600" }}>
                  Text size · 125%
                </span>
                <div style={{ position: "relative", height: "4px", background: "#D1D5DB" }}>
                  <span style={{ position: "absolute", left: "0", top: "0", width: "50%", height: "4px", background: "#050505" }} />
                  <span style={{ position: "absolute", left: "47%", top: "-6px", width: "16px", height: "16px", borderRadius: "50%", background: "#050505" }} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FACTS */}
        <section aria-label="Project overview" style={{ borderTop: "1px solid #2A2A30", borderBottom: "1px solid #2A2A30", background: "#0E0E11" }}>
          <dl style={{ maxWidth: "1200px", margin: "0 auto", padding: "28px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px" }}>
            <div>
              <dt style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C084FC" }}>
                Role
              </dt>
              <dd style={{ margin: "6px 0 0", fontWeight: "600", fontSize: "15px", lineHeight: "1.4" }}>
                UX/UI Product Designer, accessibility lead
              </dd>
            </div>
            <div>
              <dt style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C084FC" }}>
                Client
              </dt>
              <dd style={{ margin: "6px 0 0", fontWeight: "600", fontSize: "15px", lineHeight: "1.4" }}>
                Sanou va bien cultural association
              </dd>
            </div>
            <div>
              <dt style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C084FC" }}>
                Period
              </dt>
              <dd style={{ margin: "6px 0 0", fontWeight: "600", fontSize: "15px", lineHeight: "1.4" }}>
                February – May 2026
              </dd>
            </div>
            <div>
              <dt style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C084FC" }}>
                Tools
              </dt>
              <dd style={{ margin: "6px 0 0", fontWeight: "600", fontSize: "15px", lineHeight: "1.4" }}>
                Figma, React, TypeScript, MongoDB
              </dd>
            </div>
          </dl>
        </section>
        {/* CHAPTERS */}
        <nav aria-label="Case study chapters">
          <ul style={{ maxWidth: "1200px", margin: "0 auto", padding: "18px 24px", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <li>
              <a href="#besoin" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", border: "1px solid #3A3A42", color: "#FFFFFF", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}>
                The need
              </a>
            </li>
            <li>
              <a href="#architecture" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", border: "1px solid #3A3A42", color: "#FFFFFF", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}>
                Architecture
              </a>
            </li>
            <li>
              <a href="#identite" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", border: "1px solid #3A3A42", color: "#FFFFFF", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}>
                Identity
              </a>
            </li>
            <li>
              <a href="#ecrans" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", border: "1px solid #3A3A42", color: "#FFFFFF", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}>
                Screens
              </a>
            </li>
            <li>
              <a href="#admin" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", border: "1px solid #3A3A42", color: "#FFFFFF", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#panneau" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", border: "1px solid #3A3A42", color: "#FFFFFF", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}>
                Accessibility panel
              </a>
            </li>
            <li>
              <a href="#demarche" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", border: "1px solid #3A3A42", color: "#FFFFFF", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}>
                Process
              </a>
            </li>
          </ul>
        </nav>
        {/* 01 BESOIN */}
        <section id="besoin" aria-labelledby="t-besoin" style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px", display: "flex", flexDirection: "column", gap: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "760px" }}>
            <p style={{ margin: "0", fontSize: "13px", fontWeight: "700", letterSpacing: "0.14em", color: "#C084FC" }}>
              01 · THE NEED
            </p>
            <h2 id="t-besoin" style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 52px)", lineHeight: "1.1" }}>
              A showcase for the stage, and for every audience
            </h2>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D1D5DB" }}>
              The association needed a website to bring its programme to life, showcase its artists and receive support.
            </p>
          </div>
          <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "1px", background: "#2A2A30", border: "1px solid #2A2A30" }}>
            <li style={{ padding: "28px", background: "#050505", display: "flex", flexDirection: "column", gap: "14px" }}>
              <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="16" />
                <path d="M3 10h18M8 3v4M16 3v4" />
              </svg>
              <h3 style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "26px" }}>
                Programme
              </h3>
              <p style={{ margin: "0", fontSize: "15px", color: "#D1D5DB" }}>
                Events and calendar
              </p>
            </li>
            <li style={{ padding: "28px", background: "#050505", display: "flex", flexDirection: "column", gap: "14px" }}>
              <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="16" />
                <circle cx="9" cy="10" r="2" />
                <path d="m3 18 6-5 4 3 3-2 5 4" />
              </svg>
              <h3 style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "26px" }}>
                Showcase
              </h3>
              <p style={{ margin: "0", fontSize: "15px", color: "#D1D5DB" }}>
                The talent gallery
              </p>
            </li>
            <li style={{ padding: "28px", background: "#050505", display: "flex", flexDirection: "column", gap: "14px" }}>
              <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
              </svg>
              <h3 style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "26px" }}>
                Support
              </h3>
              <p style={{ margin: "0", fontSize: "15px", color: "#D1D5DB" }}>
                Donations via HelloAsso
              </p>
            </li>
            <li style={{ padding: "28px", background: "#050505", display: "flex", flexDirection: "column", gap: "14px" }}>
              <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5h16v11H8l-4 4z" />
              </svg>
              <h3 style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "26px" }}>
                Chat
              </h3>
              <p style={{ margin: "0", fontSize: "15px", color: "#D1D5DB" }}>
                Contact and partnerships
              </p>
            </li>
          </ul>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "16px" }}>
            <article style={{ padding: "26px", border: "1px solid #3A3A42", display: "flex", flexDirection: "column", gap: "10px" }}>
              <p style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", color: "#C084FC" }}>
                AUDIENCE
              </p>
              <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>
                The spectator
              </h3>
              <p style={{ margin: "0", fontSize: "15px", color: "#D1D5DB" }}>
                “What's on, when and where?”
              </p>
            </article>
            <article style={{ padding: "26px", border: "1px solid #3A3A42", display: "flex", flexDirection: "column", gap: "10px" }}>
              <p style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", color: "#C084FC" }}>
                AUDIENCE
              </p>
              <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>
                The artist
              </h3>
              <p style={{ margin: "0", fontSize: "15px", color: "#D1D5DB" }}>
                “How can I perform on this stage?”
              </p>
            </article>
            <article style={{ padding: "26px", border: "1px solid #3A3A42", display: "flex", flexDirection: "column", gap: "10px" }}>
              <p style={{ margin: "0", fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", color: "#C084FC" }}>
                AUDIENCE
              </p>
              <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>
                The partner, the donor
              </h3>
              <p style={{ margin: "0", fontSize: "15px", color: "#D1D5DB" }}>
                “What does the association do, how can I help?”
              </p>
            </article>
          </div>
          <p style={{ margin: "0", padding: "22px 26px", background: "#C084FC", color: "#050505", fontSize: "17px", fontWeight: "700", lineHeight: "1.5" }}>
            And among them, people with low vision, dyslexia or sensitivity to contrast: the site must adapt to them, not the other way round.
          </p>
        </section>
        {/* 02 ARCHITECTURE */}
        <section id="architecture" aria-labelledby="t-archi" style={{ background: "#0E0E11", borderTop: "1px solid #2A2A30", borderBottom: "1px solid #2A2A30" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", fontSize: "13px", fontWeight: "700", letterSpacing: "0.14em", color: "#C084FC" }}>
                02 · ARCHITECTURE
              </p>
              <h2 id="t-archi" style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 52px)", lineHeight: "1.1" }}>
                Five entry points, not one more
              </h2>
            </div>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "0" }}>
              <div style={{ padding: "14px 32px", background: "#FFFFFF", color: "#050505", fontFamily: "'Fondamento', serif", fontSize: "24px" }}>
                Home
              </div>
              <div aria-hidden="true" style={{ width: "2px", height: "32px", background: "#3A3A42" }} />
              <ul style={{ listStyle: "none", margin: "0", padding: "24px 0 0", width: "100%", borderTop: "2px solid #3A3A42", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 170px), 1fr))", gap: "14px" }}>
                <li style={{ padding: "18px", border: "1px solid #FFFFFF", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontFamily: "'Fondamento', serif", fontSize: "22px" }}>
                    Events
                  </span>
                  <span style={{ fontSize: "13px", color: "#D1D5DB", lineHeight: "1.5" }}>
                    Filters by category
                    {" "}<br />
                    Event details
                  </span>
                </li>
                <li style={{ padding: "18px", border: "1px solid #FFFFFF", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontFamily: "'Fondamento', serif", fontSize: "22px" }}>
                    Calendar
                  </span>
                  <span style={{ fontSize: "13px", color: "#D1D5DB", lineHeight: "1.5" }}>
                    Monthly view
                  </span>
                </li>
                <li style={{ padding: "18px", border: "1px solid #FFFFFF", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontFamily: "'Fondamento', serif", fontSize: "22px" }}>
                    Gallery
                  </span>
                  <span style={{ fontSize: "13px", color: "#D1D5DB", lineHeight: "1.5" }}>
                    Highlights, artists
                  </span>
                </li>
                <li style={{ padding: "18px", border: "1px solid #FFFFFF", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontFamily: "'Fondamento', serif", fontSize: "22px" }}>
                    Contact
                  </span>
                  <span style={{ fontSize: "13px", color: "#D1D5DB", lineHeight: "1.5" }}>
                    Form by topic
                  </span>
                </li>
                <li style={{ padding: "18px", border: "1px dashed #C084FC", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontFamily: "'Fondamento', serif", fontSize: "22px" }}>
                    Donate
                  </span>
                  <span style={{ fontSize: "13px", color: "#D1D5DB", lineHeight: "1.5" }}>
                    HelloAsso, external site
                  </span>
                </li>
              </ul>
              <figcaption style={{ marginTop: "20px", alignSelf: "stretch", padding: "14px 18px", border: "1px solid #C084FC", color: "#FFFFFF", fontSize: "15px", fontWeight: "600", textAlign: "center" }}>
                On every page: the accessibility panel, one click away · Behind the scenes: a dashboard for the association
              </figcaption>
            </figure>
          </div>
        </section>
        {/* 03 IDENTITE */}
        <section id="identite" aria-labelledby="t-id" style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px", display: "flex", flexDirection: "column", gap: "36px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", fontSize: "13px", fontWeight: "700", letterSpacing: "0.14em", color: "#C084FC" }}>
              03 · IDENTITY
            </p>
            <h2 id="t-id" style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 52px)", lineHeight: "1.1" }}>
              A darkened hall, a spotlight
            </h2>
          </div>
          <ul aria-label="Colour palette" style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "12px" }}>
            <li style={{ minHeight: "170px", padding: "20px", background: "#000000", border: "1px solid #3A3A42", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <p style={{ margin: "0", fontFamily: "'Fondamento', serif", fontSize: "22px" }}>
                Stage black
              </p>
              <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#D1D5DB" }}>
                #000000 · background
              </p>
            </li>
            <li style={{ minHeight: "170px", padding: "20px", background: "#FFFFFF", color: "#050505", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <p style={{ margin: "0", fontFamily: "'Fondamento', serif", fontSize: "22px" }}>
                Spotlight white
              </p>
              <p style={{ margin: "4px 0 0", fontSize: "13px" }}>
                #FFFFFF · on black 21:1
              </p>
            </li>
            <li style={{ minHeight: "170px", padding: "20px", background: "#C084FC", color: "#050505", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <p style={{ margin: "0", fontFamily: "'Fondamento', serif", fontSize: "22px" }}>
                Neon violet
              </p>
              <p style={{ margin: "4px 0 0", fontSize: "13px" }}>
                #C084FC · on black 7.9:1
              </p>
            </li>
            <li style={{ minHeight: "170px", padding: "20px", background: "#D1D5DB", color: "#050505", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <p style={{ margin: "0", fontFamily: "'Fondamento', serif", fontSize: "22px" }}>
                Backstage grey
              </p>
              <p style={{ margin: "4px 0 0", fontSize: "13px" }}>
                #D1D5DB · secondary text
              </p>
            </li>
          </ul>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "12px" }}>
            <div style={{ padding: "28px", border: "1px solid #3A3A42", display: "flex", gap: "22px", alignItems: "center", flexWrap: "wrap" }}>
              <p aria-hidden="true" style={{ margin: "0", fontFamily: "'Fondamento', serif", fontSize: "110px", lineHeight: "0.9" }}>
                Aa
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                  Fondamento
                </h3>
                <p style={{ margin: "0", fontSize: "15px", color: "#D1D5DB" }}>
                  Headings, like a show poster.
                </p>
              </div>
            </div>
            <div style={{ padding: "28px", border: "1px solid #3A3A42", display: "flex", gap: "22px", alignItems: "center", flexWrap: "wrap" }}>
              <p aria-hidden="true" style={{ margin: "0", fontWeight: "700", fontSize: "100px", lineHeight: "0.9" }}>
                Aa
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                  Inter
                </h3>
                <p style={{ margin: "0", fontSize: "15px", color: "#D1D5DB" }}>
                  Body text, readable at every size.
                </p>
              </div>
            </div>
            <div style={{ padding: "28px", border: "1px solid #3A3A42", display: "flex", gap: "22px", alignItems: "center", flexWrap: "wrap" }}>
              <div aria-hidden="true" style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                <span style={{ padding: "12px 18px", background: "#FFFFFF", color: "#050505", fontSize: "14px", fontWeight: "700" }}>
                  Discover
                </span>
                <span style={{ padding: "11px 16px", border: "1px solid #FFFFFF", fontFamily: "'Fondamento', serif", fontSize: "17px", boxShadow: "6px 6px 0 -1px #050505, 6px 6px 0 0 #FFFFFF" }}>
                  Donate
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                  The offset frame
                </h3>
                <p style={{ margin: "0", fontSize: "15px", color: "#D1D5DB" }}>
                  Square corners and a raised shadow, like stage scenery.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 04 ECRANS */}
        <section id="ecrans" aria-labelledby="t-ecrans" style={{ background: "#0E0E11", borderTop: "1px solid #2A2A30", borderBottom: "1px solid #2A2A30" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px", display: "flex", flexDirection: "column", gap: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", fontSize: "13px", fontWeight: "700", letterSpacing: "0.14em", color: "#C084FC" }}>
                04 · SCREENS
              </p>
              <h2 id="t-ecrans" style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 52px)", lineHeight: "1.1" }}>
                From the programme to the contact form
              </h2>
              <p style={{ margin: "0", fontSize: "14px", color: "#B9B9C2" }}>
                Mock-up content shown as an example.
              </p>
            </div>
            {/* Events desktop */}
            <figure style={{ margin: "0", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center" }}>
              <div role="img" aria-label="Events page: heading Our events, category filters with All selected, two event cards with category, date, venue, seat gauge and a See details button" style={{ flex: "999 1 560px", minWidth: "0", border: "1px solid #3A3A42", background: "#000000", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}>
                <div style={{ display: "flex", gap: "6px", alignItems: "center", padding: "10px 12px", background: "#18181C", borderBottom: "1px solid #2A2A30" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#3A3A42" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#3A3A42" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#3A3A42" }} />
                </div>
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "18px" }}>
                  <span style={{ fontSize: "11px", color: "#B9B9C2" }}>
                    {"Home / "}
                    <span style={{ color: "#FFFFFF" }}>
                      Events
                    </span>
                  </span>
                  {" "}
                  <span style={{ fontFamily: "'Fondamento', serif", fontSize: "34px", lineHeight: "1" }}>
                    Our events
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", fontSize: "12px", fontWeight: "600" }}>
                    <span style={{ padding: "8px 12px", background: "#FFFFFF", color: "#050505" }}>
                      ✓ All (4)
                    </span>
                    <span style={{ padding: "8px 12px", border: "1px solid #FFFFFF" }}>
                      Music (2)
                    </span>
                    <span style={{ padding: "8px 12px", border: "1px solid #FFFFFF" }}>
                      Painting (1)
                    </span>
                    <span style={{ padding: "8px 12px", border: "1px solid #FFFFFF" }}>
                      Dance (1)
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
                    <div style={{ border: "1px solid #3A3A42", background: "#0E0E11" }}>
                      <div style={{ height: "96px", background: "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(192,132,252,0.45), transparent 75%), #18181C" }} />
                      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ alignSelf: "flex-start", padding: "3px 7px", background: "#C084FC", color: "#050505", fontSize: "10px", fontWeight: "800", letterSpacing: "0.08em" }}>
                          MUSIC
                        </span>
                        <span style={{ fontFamily: "'Fondamento', serif", fontSize: "19px" }}>
                          {"Open mic: slam & guitar"}
                        </span>
                        <span style={{ fontSize: "11px", color: "#D1D5DB" }}>
                          Fri, June 19 · 19:00 · Paris 15th
                        </span>
                        <div style={{ height: "4px", background: "#2A2A30" }}>
                          <div style={{ width: "40%", height: "4px", background: "#FFFFFF" }} />
                        </div>
                        <span style={{ fontSize: "10px", color: "#D1D5DB" }}>
                          12 of 30 seats booked
                        </span>
                        <span style={{ marginTop: "4px", padding: "8px", border: "1px solid #FFFFFF", textAlign: "center", fontSize: "11px", fontWeight: "700" }}>
                          See details
                        </span>
                      </div>
                    </div>
                    <div style={{ border: "1px solid #3A3A42", background: "#0E0E11" }}>
                      <div style={{ height: "96px", background: "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(255,255,255,0.28), transparent 75%), #18181C" }} />
                      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ alignSelf: "flex-start", padding: "3px 7px", background: "#FFFFFF", color: "#050505", fontSize: "10px", fontWeight: "800", letterSpacing: "0.08em" }}>
                          DANCE
                        </span>
                        <span style={{ fontFamily: "'Fondamento', serif", fontSize: "19px" }}>
                          Contemporary dance evening
                        </span>
                        <span style={{ fontSize: "11px", color: "#D1D5DB" }}>
                          Sat, June 27 · 20:30 · Paris 15th
                        </span>
                        <div style={{ height: "4px", background: "#2A2A30" }}>
                          <div style={{ width: "80%", height: "4px", background: "#FFFFFF" }} />
                        </div>
                        <span style={{ fontSize: "10px", color: "#D1D5DB" }}>
                          24 of 30 seats booked
                        </span>
                        <span style={{ marginTop: "4px", padding: "8px", border: "1px solid #FFFFFF", textAlign: "center", fontSize: "11px", fontWeight: "700" }}>
                          See details
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <h3 style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "30px" }}>
                  Events
                </h3>
                <ol style={{ margin: "0", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", lineHeight: "1.5", color: "#D1D5DB" }}>
                  <li>
                    Filters with the number of events
                  </li>
                  <li>
                    Active filter checked, not just coloured
                  </li>
                  <li>
                    Gauge backed by text: “12 of 30 seats”
                  </li>
                </ol>
              </figcaption>
            </figure>
            {/* Contact desktop */}
            <figure style={{ margin: "0", display: "flex", flexWrap: "wrap-reverse", gap: "32px", alignItems: "center" }}>
              <figcaption style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <h3 style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "30px" }}>
                  Contact
                </h3>
                <ol style={{ margin: "0", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", lineHeight: "1.5", color: "#D1D5DB" }}>
                  <li>
                    Labels always visible
                  </li>
                  <li>
                    Optional field clearly marked
                  </li>
                  <li>
                    A topic to route the request
                  </li>
                </ol>
              </figcaption>
              <div role="img" aria-label="Contact form: First name, Last name, Email, optional Phone fields, Topic list, Message and a Send message button" style={{ flex: "999 1 560px", minWidth: "0", border: "1px solid #3A3A42", background: "#000000", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}>
                <div style={{ display: "flex", gap: "6px", alignItems: "center", padding: "10px 12px", background: "#18181C", borderBottom: "1px solid #2A2A30" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#3A3A42" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#3A3A42" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#3A3A42" }} />
                </div>
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <span style={{ fontFamily: "'Fondamento', serif", fontSize: "30px", lineHeight: "1" }}>
                    Stay in touch
                  </span>
                  {" "}
                  <span style={{ fontSize: "11px", color: "#D1D5DB" }}>
                    All fields are required unless stated otherwise.
                  </span>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      <span style={{ fontSize: "11px", fontWeight: "600" }}>
                        First name
                      </span>
                      <span style={{ height: "32px", border: "1px solid #B9B9C2" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      <span style={{ fontSize: "11px", fontWeight: "600" }}>
                        Last name
                      </span>
                      <span style={{ height: "32px", border: "1px solid #B9B9C2" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      <span style={{ fontSize: "11px", fontWeight: "600" }}>
                        Email
                      </span>
                      <span style={{ height: "32px", border: "1px solid #B9B9C2" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      <span style={{ fontSize: "11px", fontWeight: "600" }}>
                        Phone (optional)
                      </span>
                      <span style={{ height: "32px", border: "1px solid #B9B9C2" }} />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600" }}>
                      Topic
                    </span>
                    <span style={{ height: "32px", border: "1px solid #B9B9C2", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 10px", fontSize: "11px" }}>
                      Partnership
                      <span>
                        ▾
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600" }}>
                      Message
                    </span>
                    <span style={{ height: "70px", border: "1px solid #B9B9C2" }} />
                  </div>
                  <span style={{ alignSelf: "flex-start", padding: "10px 18px", background: "#FFFFFF", color: "#050505", fontSize: "12px", fontWeight: "700" }}>
                    Send message
                  </span>
                </div>
              </div>
            </figure>
            {/* Mobile screens */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center" }}>
              <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
                <div role="img" aria-label="Mobile calendar: month of June with two days marked with an event and the list of the month's events below" style={{ width: "280px", height: "580px", boxSizing: "border-box", borderRadius: "40px", border: "9px solid #2A2A30", background: "#000000", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <div style={{ padding: "20px 16px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #2A2A30" }}>
                    <span style={{ fontFamily: "'Fondamento', serif", fontStyle: "italic", fontSize: "17px" }}>
                      Sanou
                    </span>
                    <span style={{ display: "flex", gap: "8px" }}>
                      <span style={{ width: "26px", height: "26px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="#050505">
                          <circle cx="12" cy="4" r="2.4" />
                          <path d="M4 7.5h16v2.2h-5.6V21h-2.4v-6h-0.4v6H9.2V9.7H4z" />
                        </svg>
                      </span>
                      <span style={{ width: "26px", height: "26px", border: "1px solid #FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px" }}>
                        <span style={{ width: "12px", height: "1.5px", background: "#FFFFFF" }} />
                        <span style={{ width: "12px", height: "1.5px", background: "#FFFFFF" }} />
                        <span style={{ width: "12px", height: "1.5px", background: "#FFFFFF" }} />
                      </span>
                    </span>
                  </div>
                  <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "14px" }}>
                    <span style={{ fontFamily: "'Fondamento', serif", fontSize: "24px" }}>
                      Calendar
                    </span>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", fontWeight: "700" }}>
                      <span style={{ width: "28px", height: "28px", border: "1px solid #3A3A42", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        ‹
                      </span>
                      June 2026
                      <span style={{ width: "28px", height: "28px", border: "1px solid #3A3A42", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        ›
                      </span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: "4px", fontSize: "10px", textAlign: "center", color: "#D1D5DB" }}>
                      <span>
                        M
                      </span>
                      <span>
                        M
                      </span>
                      <span>
                        M
                      </span>
                      <span>
                        T
                      </span>
                      <span>
                        F
                      </span>
                      <span>
                        S
                      </span>
                      <span>
                        S
                      </span>
                      {" "}
                      <span>
                        1
                      </span>
                      <span>
                        2
                      </span>
                      <span>
                        3
                      </span>
                      <span>
                        4
                      </span>
                      <span>
                        5
                      </span>
                      <span>
                        6
                      </span>
                      <span>
                        7
                      </span>
                      {" "}
                      <span>
                        8
                      </span>
                      <span>
                        9
                      </span>
                      <span>
                        10
                      </span>
                      <span>
                        11
                      </span>
                      <span>
                        12
                      </span>
                      <span>
                        13
                      </span>
                      <span>
                        14
                      </span>
                      {" "}
                      <span>
                        15
                      </span>
                      <span>
                        16
                      </span>
                      <span>
                        17
                      </span>
                      <span>
                        18
                      </span>
                      <span style={{ background: "#C084FC", color: "#050505", fontWeight: "800" }}>
                        19
                      </span>
                      <span>
                        20
                      </span>
                      <span>
                        21
                      </span>
                      {" "}
                      <span>
                        22
                      </span>
                      <span>
                        23
                      </span>
                      <span>
                        24
                      </span>
                      <span>
                        25
                      </span>
                      <span>
                        26
                      </span>
                      <span style={{ background: "#FFFFFF", color: "#050505", fontWeight: "800" }}>
                        27
                      </span>
                      <span>
                        28
                      </span>
                      {" "}
                      <span>
                        29
                      </span>
                      <span>
                        30
                      </span>
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <div style={{ padding: "12px", borderLeft: "3px solid #C084FC", background: "#0E0E11", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "10px", fontWeight: "700", color: "#C084FC" }}>
                        FRI, JUNE 19 · 19:00
                      </span>
                      <span style={{ fontFamily: "'Fondamento', serif", fontSize: "16px" }}>
                        Open mic
                      </span>
                    </div>
                    <div style={{ padding: "12px", borderLeft: "3px solid #FFFFFF", background: "#0E0E11", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "10px", fontWeight: "700" }}>
                        SAT, JUNE 27 · 20:30
                      </span>
                      <span style={{ fontFamily: "'Fondamento', serif", fontSize: "16px" }}>
                        Dance evening
                      </span>
                    </div>
                  </div>
                </div>
                <figcaption style={{ maxWidth: "280px", fontSize: "15px", lineHeight: "1.5", color: "#D1D5DB", textAlign: "center" }}>
                  <strong style={{ color: "#FFFFFF" }}>
                    Mobile calendar:
                  </strong>
                  {" highlighted dates and the month's list, readable without zooming."}
                </figcaption>
              </figure>
              <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
                <div role="img" aria-label="Mobile menu open: large Home, Events, Gallery, Calendar, Contact links, a Donate button and an Accessibility settings button" style={{ width: "280px", height: "580px", boxSizing: "border-box", borderRadius: "40px", border: "9px solid #2A2A30", background: "#000000", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <div style={{ padding: "20px 16px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #2A2A30" }}>
                    <span style={{ fontFamily: "'Fondamento', serif", fontStyle: "italic", fontSize: "17px" }}>
                      Sanou
                    </span>
                    <span style={{ width: "26px", height: "26px", border: "1px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>
                      ✕
                    </span>
                  </div>
                  <div style={{ padding: "26px 20px", display: "flex", flexDirection: "column", gap: "18px", flex: "1", background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(192,132,252,0.18), transparent 70%)" }}>
                    <span style={{ fontFamily: "'Fondamento', serif", fontSize: "30px", borderBottom: "1px solid #FFFFFF", alignSelf: "flex-start" }}>
                      Home
                    </span>
                    {" "}
                    <span style={{ fontFamily: "'Fondamento', serif", fontSize: "30px" }}>
                      Events
                    </span>
                    {" "}
                    <span style={{ fontFamily: "'Fondamento', serif", fontSize: "30px" }}>
                      Gallery
                    </span>
                    {" "}
                    <span style={{ fontFamily: "'Fondamento', serif", fontSize: "30px" }}>
                      Calendar
                    </span>
                    {" "}
                    <span style={{ fontFamily: "'Fondamento', serif", fontSize: "30px" }}>
                      Contact
                    </span>
                  </div>
                  <div style={{ padding: "16px 20px 22px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ padding: "12px", background: "#FFFFFF", color: "#050505", textAlign: "center", fontSize: "13px", fontWeight: "700" }}>
                      Donate ↗
                    </span>
                    <span style={{ padding: "11px", border: "1px solid #C084FC", color: "#C084FC", textAlign: "center", fontSize: "13px", fontWeight: "700" }}>
                      Accessibility settings
                    </span>
                  </div>
                </div>
                <figcaption style={{ maxWidth: "280px", fontSize: "15px", lineHeight: "1.5", color: "#D1D5DB", textAlign: "center" }}>
                  <strong style={{ color: "#FFFFFF" }}>
                    Mobile menu:
                  </strong>
                  {" large targets, donations and settings always within thumb reach."}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        {/* 05 COULISSES (admin) */}
        <section id="admin" aria-labelledby="t-admin" style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px", display: "flex", flexDirection: "column", gap: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "780px" }}>
            <p style={{ margin: "0", fontSize: "13px", fontWeight: "700", letterSpacing: "0.14em", color: "#C084FC" }}>
              05 · BEHIND THE SCENES
            </p>
            <h2 id="t-admin" style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 52px)", lineHeight: "1.1" }}>
              A dashboard so the association can run itself
            </h2>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D1D5DB" }}>
              Volunteers manage the whole site without writing a line of code: programme, bookings, gallery and messages.
            </p>
          </div>
          {/* dashboard mockup */}
          <div role="img" aria-label="Admin dashboard: sidebar with Dashboard, Events, Bookings, Gallery, Messages and Settings; four indicators (upcoming events, seats booked, unread messages, photos); table of upcoming events with date, category, seat gauge, Published or Draft status and an Edit button; New event button" style={{ border: "1px solid #3A3A42", background: "#000000", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}>
            <div style={{ display: "flex", gap: "6px", alignItems: "center", padding: "10px 12px", background: "#18181C", borderBottom: "1px solid #2A2A30" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#3A3A42" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#3A3A42" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#3A3A42" }} />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", minHeight: "520px" }}>
              <div style={{ flex: "0 0 200px", padding: "20px 14px", borderRight: "1px solid #2A2A30", display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                <span style={{ fontFamily: "'Fondamento', serif", fontStyle: "italic", fontSize: "20px", padding: "0 8px 14px" }}>
                  Sanou · admin
                </span>
                {" "}
                <span style={{ padding: "10px", background: "#FFFFFF", color: "#050505" }}>
                  Dashboard
                </span>
                {" "}
                <span style={{ padding: "10px" }}>
                  Events
                </span>
                {" "}
                <span style={{ padding: "10px" }}>
                  Bookings
                </span>
                {" "}
                <span style={{ padding: "10px" }}>
                  Gallery
                </span>
                {" "}
                <span style={{ padding: "10px", display: "flex", justifyContent: "space-between" }}>
                  Messages
                  <span style={{ padding: "0 7px", background: "#C084FC", color: "#050505", fontWeight: "800" }}>
                    3
                  </span>
                </span>
                {" "}
                <span style={{ padding: "10px" }}>
                  Settings
                </span>
              </div>
              <div style={{ flex: "1 1 480px", minWidth: "0", padding: "22px", background: "#0B0B0E", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Fondamento', serif", fontSize: "28px" }}>
                    Hello, Sanou team
                  </span>
                  <span style={{ padding: "10px 16px", background: "#FFFFFF", color: "#050505", fontSize: "12px", fontWeight: "700", boxShadow: "5px 5px 0 0 #C084FC" }}>
                    + New event
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px" }}>
                  <div style={{ padding: "14px", border: "1px solid #2A2A30", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "11px", color: "#B9B9C2" }}>
                      Upcoming events
                    </span>
                    <span style={{ fontFamily: "'Fondamento', serif", fontSize: "30px" }}>
                      4
                    </span>
                  </div>
                  <div style={{ padding: "14px", border: "1px solid #2A2A30", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "11px", color: "#B9B9C2" }}>
                      Seats booked
                    </span>
                    <span style={{ fontFamily: "'Fondamento', serif", fontSize: "30px" }}>
                      {"36 "}
                      <span style={{ fontSize: "16px", color: "#B9B9C2" }}>
                        / 120
                      </span>
                    </span>
                  </div>
                  <div style={{ padding: "14px", border: "1px solid #C084FC", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "11px", color: "#C084FC" }}>
                      Unread messages
                    </span>
                    <span style={{ fontFamily: "'Fondamento', serif", fontSize: "30px" }}>
                      3
                    </span>
                  </div>
                  <div style={{ padding: "14px", border: "1px solid #2A2A30", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "11px", color: "#B9B9C2" }}>
                      Photos in gallery
                    </span>
                    <span style={{ fontFamily: "'Fondamento', serif", fontSize: "30px" }}>
                      48
                    </span>
                  </div>
                </div>
                <div style={{ border: "1px solid #2A2A30" }}>
                  <div style={{ padding: "12px 14px", borderBottom: "1px solid #2A2A30", fontSize: "13px", fontWeight: "700" }}>
                    Upcoming events
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.2fr 1fr auto", gap: "10px", padding: "10px 14px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.06em", color: "#B9B9C2" }}>
                    <span>
                      EVENT
                    </span>
                    <span>
                      DATE
                    </span>
                    <span>
                      CATEGORY
                    </span>
                    <span>
                      SEATS
                    </span>
                    <span>
                      STATUS
                    </span>
                    <span />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.2fr 1fr auto", gap: "10px", padding: "12px 14px", borderTop: "1px solid #1C1C21", fontSize: "12px", alignItems: "center" }}>
                    <span style={{ fontWeight: "600" }}>
                      Open mic
                    </span>
                    <span>
                      June 19
                    </span>
                    <span>
                      Music
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      12/30
                      <span style={{ height: "3px", background: "#2A2A30" }}>
                        <span style={{ display: "block", width: "40%", height: "3px", background: "#FFFFFF" }} />
                      </span>
                    </span>
                    <span style={{ color: "#86EFAC" }}>
                      ● Published
                    </span>
                    <span style={{ padding: "5px 9px", border: "1px solid #FFFFFF", fontSize: "11px", fontWeight: "700" }}>
                      Edit
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.2fr 1fr auto", gap: "10px", padding: "12px 14px", borderTop: "1px solid #1C1C21", fontSize: "12px", alignItems: "center" }}>
                    <span style={{ fontWeight: "600" }}>
                      Dance evening
                    </span>
                    <span>
                      June 27
                    </span>
                    <span>
                      Dance
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      24/30
                      <span style={{ height: "3px", background: "#2A2A30" }}>
                        <span style={{ display: "block", width: "80%", height: "3px", background: "#FFFFFF" }} />
                      </span>
                    </span>
                    <span style={{ color: "#86EFAC" }}>
                      ● Published
                    </span>
                    <span style={{ padding: "5px 9px", border: "1px solid #FFFFFF", fontSize: "11px", fontWeight: "700" }}>
                      Edit
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.2fr 1fr auto", gap: "10px", padding: "12px 14px", borderTop: "1px solid #1C1C21", fontSize: "12px", alignItems: "center" }}>
                    <span style={{ fontWeight: "600" }}>
                      Exhibition: neighbourhood colours
                    </span>
                    <span>
                      July 4
                    </span>
                    <span>
                      Painting
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      0/40
                      <span style={{ height: "3px", background: "#2A2A30" }} />
                    </span>
                    <span style={{ color: "#D1D5DB" }}>
                      ○ Draft
                    </span>
                    <span style={{ padding: "5px 9px", border: "1px solid #FFFFFF", fontSize: "11px", fontWeight: "700" }}>
                      Edit
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center" }}>
            {/* create event form */}
            <div role="img" aria-label="New event form: title, category, date and time, venue, capacity, description, image drop zone, Publish now toggle, Save draft and Publish buttons" style={{ flex: "1 1 380px", maxWidth: "520px", border: "1px solid #3A3A42", background: "#0B0B0E", padding: "22px", display: "flex", flexDirection: "column", gap: "12px", boxShadow: "10px 10px 0 0 #C084FC" }}>
              <span style={{ fontFamily: "'Fondamento', serif", fontSize: "26px" }}>
                New event
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <span style={{ fontSize: "11px", fontWeight: "600" }}>
                  Title
                </span>
                <span style={{ padding: "8px 10px", border: "1px solid #B9B9C2", fontSize: "12px" }}>
                  {"Open mic: slam & guitar"}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "600" }}>
                    Category
                  </span>
                  <span style={{ padding: "8px 10px", border: "1px solid #B9B9C2", fontSize: "12px", display: "flex", justifyContent: "space-between" }}>
                    Music
                    <span>
                      ▾
                    </span>
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "600" }}>
                    Date and time
                  </span>
                  <span style={{ padding: "8px 10px", border: "1px solid #B9B9C2", fontSize: "12px" }}>
                    19/06/2026 · 19:00
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "600" }}>
                    Venue
                  </span>
                  <span style={{ padding: "8px 10px", border: "1px solid #B9B9C2", fontSize: "12px" }}>
                    Paris 15th
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "600" }}>
                    Capacity
                  </span>
                  <span style={{ padding: "8px 10px", border: "1px solid #B9B9C2", fontSize: "12px" }}>
                    30 seats
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <span style={{ fontSize: "11px", fontWeight: "600" }}>
                  Image (with alt text)
                </span>
                <span style={{ padding: "16px", border: "1px dashed #B9B9C2", textAlign: "center", fontSize: "11px", color: "#D1D5DB" }}>
                  Drop an image or browse
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", fontWeight: "600" }}>
                <span>
                  Publish now
                </span>
                <span style={{ width: "40px", height: "22px", border: "1.5px solid #FFFFFF", display: "flex", alignItems: "center", padding: "2px", boxSizing: "border-box" }}>
                  <span style={{ width: "15px", height: "15px", background: "#FFFFFF" }} />
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", fontSize: "12px", fontWeight: "700" }}>
                <span style={{ padding: "9px 14px", border: "1px solid #FFFFFF" }}>
                  Save draft
                </span>
                <span style={{ padding: "9px 14px", background: "#FFFFFF", color: "#050505" }}>
                  Post
                </span>
              </div>
            </div>
            {/* capabilities */}
            <ul style={{ flex: "999 1 380px", minWidth: "0", listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "1px", background: "#2A2A30", border: "1px solid #2A2A30" }}>
              <li style={{ padding: "22px", background: "#050505", display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "23px" }}>
                  Events
                </h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#D1D5DB" }}>
                  Create, edit, publish or keep as a draft
                </p>
              </li>
              <li style={{ padding: "22px", background: "#050505", display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "23px" }}>
                  Bookings
                </h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#D1D5DB" }}>
                  Track seats at a glance
                </p>
              </li>
              <li style={{ padding: "22px", background: "#050505", display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "23px" }}>
                  Gallery
                </h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#D1D5DB" }}>
                  Add photos, with their alt text
                </p>
              </li>
              <li style={{ padding: "22px", background: "#050505", display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "23px" }}>
                  Messages
                </h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#D1D5DB" }}>
                  Read requests sent through the form
                </p>
              </li>
            </ul>
          </div>
          <p style={{ margin: "0", padding: "20px 24px", border: "1px solid #C084FC", fontSize: "16px", lineHeight: "1.55" }}>
            Alt text is required every time an image is added: accessibility continues after launch, in the association's hands.
          </p>
        </section>
        {/* 06 PANNEAU (light section) */}
        <section id="panneau" aria-labelledby="t-panneau" style={{ background: "#FFFFFF", color: "#050505" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "780px" }}>
              <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.14em", color: "#6B21A8" }}>
                06 · THE HEART OF THE PROJECT
              </p>
              <h2 id="t-panneau" style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 52px)", lineHeight: "1.1" }}>
                Every visitor sets the stage to their eyesight
              </h2>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#3F3F46" }}>
                A panel opened from any page adjusts contrast, reading and navigation aids. Settings stay active from one page to the next.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "36px", alignItems: "flex-start" }}>
              {/* panel mockup */}
              <div role="img" aria-label="Accessibility settings panel: Light, Dark or High contrast; monochrome mode; sliders for text size from 100 to 150%, line height and letter spacing; enlarged cursor; highlighted links; Reset button" style={{ flex: "1 1 340px", maxWidth: "420px", border: "2px solid #050505", boxShadow: "10px 10px 0 0 #C084FC", background: "#FFFFFF" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", background: "#050505", color: "#FFFFFF" }}>
                  <span style={{ fontWeight: "800", fontSize: "15px" }}>
                    Accessibility settings
                  </span>
                  <span style={{ width: "30px", height: "30px", background: "#FFFFFF", color: "#050505", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900" }}>
                    ✕
                  </span>
                </div>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontWeight: "800", fontSize: "15px" }}>
                      Contrast and colours
                    </span>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", fontSize: "13px", fontWeight: "600" }}>
                      <span style={{ padding: "7px 11px", border: "2px solid #050505" }}>
                        Light
                      </span>
                      <span style={{ padding: "7px 11px", border: "2px solid #050505" }}>
                        Dark
                      </span>
                      <span style={{ padding: "7px 11px", border: "2px solid #050505", background: "#050505", color: "#FFFFFF" }}>
                        ✓ High
                      </span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", fontWeight: "600" }}>
                      <span>
                        Monochrome mode
                      </span>
                      <span style={{ width: "42px", height: "24px", border: "2px solid #050505", display: "flex", alignItems: "center", padding: "2px", boxSizing: "border-box" }}>
                        <span style={{ width: "16px", height: "16px", background: "#050505" }} />
                      </span>
                    </div>
                  </div>
                  <div style={{ height: "1px", background: "#D1D5DB" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ fontWeight: "800", fontSize: "15px" }}>
                      Reading
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "600" }}>
                        Text size
                        <span>
                          125 %
                        </span>
                      </span>
                      <div style={{ position: "relative", height: "4px", background: "#D1D5DB" }}>
                        <span style={{ position: "absolute", left: "0", top: "0", width: "50%", height: "4px", background: "#050505" }} />
                        <span style={{ position: "absolute", left: "47%", top: "-7px", width: "18px", height: "18px", borderRadius: "50%", background: "#050505" }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "600" }}>
                        Line height
                        <span>
                          2
                        </span>
                      </span>
                      <div style={{ position: "relative", height: "4px", background: "#D1D5DB" }}>
                        <span style={{ position: "absolute", left: "0", top: "0", width: "60%", height: "4px", background: "#050505" }} />
                        <span style={{ position: "absolute", left: "57%", top: "-7px", width: "18px", height: "18px", borderRadius: "50%", background: "#050505" }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "600" }}>
                        Letter spacing
                        <span>
                          0.12 em
                        </span>
                      </span>
                      <div style={{ position: "relative", height: "4px", background: "#D1D5DB" }}>
                        <span style={{ position: "absolute", left: "0", top: "0", width: "80%", height: "4px", background: "#050505" }} />
                        <span style={{ position: "absolute", left: "77%", top: "-7px", width: "18px", height: "18px", borderRadius: "50%", background: "#050505" }} />
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "1px", background: "#D1D5DB" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontWeight: "800", fontSize: "15px" }}>
                      Visual aids
                    </span>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", fontWeight: "600" }}>
                      <span>
                        Enlarged cursor
                      </span>
                      <span style={{ width: "42px", height: "24px", border: "2px solid #050505", display: "flex", alignItems: "center", padding: "2px", boxSizing: "border-box" }}>
                        <span style={{ width: "16px", height: "16px", background: "#050505" }} />
                      </span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", fontWeight: "600" }}>
                      <span>
                        Highlighted links
                      </span>
                      <span style={{ width: "42px", height: "24px", border: "2px solid #050505", background: "#050505", display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "2px", boxSizing: "border-box" }}>
                        <span style={{ width: "16px", height: "16px", background: "#FFFFFF" }} />
                      </span>
                    </div>
                  </div>
                  <span style={{ alignSelf: "flex-start", padding: "10px 16px", border: "2px solid #050505", fontSize: "13px", fontWeight: "800" }}>
                    Reset
                  </span>
                </div>
              </div>
              {/* mapping */}
              <div style={{ flex: "999 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ margin: "0 0 6px", fontSize: "18px", fontWeight: "800" }}>
                  One setting, one need
                </h3>
                <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li style={{ padding: "16px 18px", border: "1.5px solid #050505", display: "flex", flexWrap: "wrap", gap: "8px 16px", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: "800", fontSize: "16px" }}>
                      High contrast
                    </span>
                    <span style={{ fontSize: "14px", color: "#3F3F46" }}>
                      Low vision
                    </span>
                    <span style={{ padding: "4px 8px", background: "#F3E8FF", color: "#6B21A8", fontSize: "12px", fontWeight: "800" }}>
                      WCAG 1.4.6
                    </span>
                  </li>
                  <li style={{ padding: "16px 18px", border: "1.5px solid #050505", display: "flex", flexWrap: "wrap", gap: "8px 16px", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: "800", fontSize: "16px" }}>
                      Text up to 150%
                    </span>
                    <span style={{ fontSize: "14px", color: "#3F3F46" }}>
                      Low vision, eye strain
                    </span>
                    <span style={{ padding: "4px 8px", background: "#F3E8FF", color: "#6B21A8", fontSize: "12px", fontWeight: "800" }}>
                      WCAG 1.4.4
                    </span>
                  </li>
                  <li style={{ padding: "16px 18px", border: "1.5px solid #050505", display: "flex", flexWrap: "wrap", gap: "8px 16px", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: "800", fontSize: "16px" }}>
                      Line height, spacing
                    </span>
                    <span style={{ fontSize: "14px", color: "#3F3F46" }}>
                      Dyslexia, reading difficulties
                    </span>
                    <span style={{ padding: "4px 8px", background: "#F3E8FF", color: "#6B21A8", fontSize: "12px", fontWeight: "800" }}>
                      WCAG 1.4.12
                    </span>
                  </li>
                  <li style={{ padding: "16px 18px", border: "1.5px solid #050505", display: "flex", flexWrap: "wrap", gap: "8px 16px", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: "800", fontSize: "16px" }}>
                      Highlighted links
                    </span>
                    <span style={{ fontSize: "14px", color: "#3F3F46" }}>
                      Colour blindness
                    </span>
                    <span style={{ padding: "4px 8px", background: "#F3E8FF", color: "#6B21A8", fontSize: "12px", fontWeight: "800" }}>
                      WCAG 1.4.1
                    </span>
                  </li>
                  <li style={{ padding: "16px 18px", border: "1.5px solid #050505", display: "flex", flexWrap: "wrap", gap: "8px 16px", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: "800", fontSize: "16px" }}>
                      Monochrome, enlarged cursor
                    </span>
                    <span style={{ fontSize: "14px", color: "#3F3F46" }}>
                      Visual overload, wayfinding
                    </span>
                    <span style={{ padding: "4px 8px", background: "#F4F4F5", color: "#3F3F46", fontSize: "12px", fontWeight: "800" }}>
                      Comfort
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* before / after reading */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "16px" }}>
              <figure style={{ margin: "0", padding: "26px", background: "#050505", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "14px" }}>
                <figcaption style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.1em", color: "#C084FC" }}>
                  DEFAULT SETTING
                </figcaption>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  Sanou va bien creates spaces where emerging artists share their talent with the community.
                </p>
              </figure>
              <figure style={{ margin: "0", padding: "26px", background: "#050505", color: "#FFFFFF", border: "3px solid #C084FC", display: "flex", flexDirection: "column", gap: "14px" }}>
                <figcaption style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.1em", color: "#C084FC" }}>
                  COMFORTABLE READING
                </figcaption>
                <p style={{ margin: "0", fontSize: "19px", lineHeight: "2", letterSpacing: "0.12em", wordSpacing: "0.16em" }}>
                  Sanou va bien creates spaces where emerging artists share their talent with the community.
                </p>
              </figure>
            </div>
            <p style={{ margin: "0", padding: "22px 26px", borderLeft: "6px solid #050505", background: "#F4F4F5", fontSize: "17px", lineHeight: "1.55", fontWeight: "600" }}>
              The panel complements RGAA compliance, it doesn't replace it: the site must stay accessible without any setting.
            </p>
          </div>
        </section>
        {/* 06 DEMARCHE */}
        <section id="demarche" aria-labelledby="t-demarche" style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 24px", display: "flex", flexDirection: "column", gap: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", fontSize: "13px", fontWeight: "700", letterSpacing: "0.14em", color: "#C084FC" }}>
              07 · PROCESS
            </p>
            <h2 id="t-demarche" style={{ margin: "0", fontFamily: "'Fondamento', serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 52px)", lineHeight: "1.1" }}>
              From needs to launch
            </h2>
          </div>
          <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 170px), 1fr))", gap: "0", borderTop: "2px solid #FFFFFF" }}>
            <li style={{ padding: "22px 18px 0 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ marginTop: "-32px", width: "18px", height: "18px", borderRadius: "50%", background: "#FFFFFF" }} />
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#C084FC" }}>
                FEBRUARY 2026
              </span>
              <span style={{ fontFamily: "'Fondamento', serif", fontSize: "21px", lineHeight: "1.2" }}>
                Requirements gathering
              </span>
            </li>
            <li style={{ padding: "22px 18px 0 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ marginTop: "-32px", width: "18px", height: "18px", borderRadius: "50%", background: "#FFFFFF" }} />
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#C084FC" }}>
                STEP 2
              </span>
              <span style={{ fontFamily: "'Fondamento', serif", fontSize: "21px", lineHeight: "1.2" }}>
                Site map and journeys
              </span>
            </li>
            <li style={{ padding: "22px 18px 0 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ marginTop: "-32px", width: "18px", height: "18px", borderRadius: "50%", background: "#FFFFFF" }} />
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#C084FC" }}>
                STEP 3
              </span>
              <span style={{ fontFamily: "'Fondamento', serif", fontSize: "21px", lineHeight: "1.2" }}>
                Wireframes
              </span>
            </li>
            <li style={{ padding: "22px 18px 0 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ marginTop: "-32px", width: "18px", height: "18px", borderRadius: "50%", background: "#FFFFFF" }} />
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#C084FC" }}>
                STEP 4
              </span>
              <span style={{ fontFamily: "'Fondamento', serif", fontSize: "21px", lineHeight: "1.2" }}>
                Figma mock-ups
              </span>
            </li>
            <li style={{ padding: "22px 18px 0 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ marginTop: "-32px", width: "18px", height: "18px", borderRadius: "50%", background: "#FFFFFF" }} />
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#C084FC" }}>
                MAY 2026
              </span>
              <span style={{ fontFamily: "'Fondamento', serif", fontSize: "21px", lineHeight: "1.2" }}>
                Development and accessibility QA
              </span>
            </li>
            <li style={{ padding: "22px 18px 0 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ marginTop: "-32px", width: "18px", height: "18px", borderRadius: "50%", border: "2px dashed #C084FC", background: "#050505" }} />
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#C084FC" }}>
                UPCOMING
              </span>
              <span style={{ fontFamily: "'Fondamento', serif", fontSize: "21px", lineHeight: "1.2" }}>
                Launch
              </span>
            </li>
          </ol>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "24px" }}>
            <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
              Before the curtain rises
            </h3>
            <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "12px" }}>
              <li style={{ padding: "20px", border: "1px solid #3A3A42", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ alignSelf: "flex-start", padding: "3px 8px", border: "1px solid #C084FC", color: "#C084FC", fontSize: "11px", fontWeight: "800" }}>
                  TO DO
                </span>
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  Full RGAA audit
                </span>
              </li>
              <li style={{ padding: "20px", border: "1px solid #3A3A42", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ alignSelf: "flex-start", padding: "3px 8px", border: "1px solid #C084FC", color: "#C084FC", fontSize: "11px", fontWeight: "800" }}>
                  TO DO
                </span>
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  Testing with NVDA and VoiceOver
                </span>
              </li>
              <li style={{ padding: "20px", border: "1px solid #3A3A42", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ alignSelf: "flex-start", padding: "3px 8px", border: "1px solid #C084FC", color: "#C084FC", fontSize: "11px", fontWeight: "800" }}>
                  TO DO
                </span>
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  Reduced motion on request
                </span>
              </li>
              <li style={{ padding: "20px", border: "1px solid #3A3A42", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ alignSelf: "flex-start", padding: "3px 8px", border: "1px solid #C084FC", color: "#C084FC", fontSize: "11px", fontWeight: "800" }}>
                  TO DO
                </span>
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  Gallery and calendar filled in
                </span>
              </li>
            </ul>
          </div>
        </section>
        {/* NEXT */}
        <section aria-labelledby="t-next" style={{ borderTop: "1px solid #2A2A30", position: "relative", overflow: "hidden", background: "radial-gradient(ellipse 50% 80% at 85% 100%, rgba(192,132,252,0.18), transparent 70%), #050505" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 24px", display: "flex", flexWrap: "wrap", gap: "28px", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2 id="t-next" style={{ margin: "0", fontSize: "13px", fontWeight: "700", letterSpacing: "0.14em", color: "#C084FC" }}>
                NEXT CASE STUDY
              </h2>
              <a href="/projects/fds-institut/" style={{ color: "#FFFFFF", fontFamily: "'Fondamento', serif", fontSize: "clamp(28px, 3vw, 40px)" }}>
                FDS Institut, from paper to platform
              </a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <a href="/#travaux" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 24px", border: "1px solid #FFFFFF", color: "#FFFFFF", fontWeight: "700", textDecoration: "none" }}>
                All case studies
              </a>
              {" "}
              <a href="mailto:ie.belouettar@gmail.com" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 24px", background: "#FFFFFF", color: "#050505", fontWeight: "700", textDecoration: "none", boxShadow: "6px 6px 0 0 #C084FC" }}>
                Contact me
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer style={{ borderTop: "1px solid #2A2A30" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "22px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", fontSize: "14px", color: "#D1D5DB" }}>
          <p style={{ margin: "0" }}>
            © 2026 Imed Belouettar
          </p>
          <p style={{ margin: "0" }}>
            <a href="/accessibility/" style={{ color: "#FFFFFF" }}>
              Accessibility: targeting RGAA 4.1 compliance
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SanouCaseStudy;
