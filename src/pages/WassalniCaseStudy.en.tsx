import LanguageSwitch from '../components/LanguageSwitch';
import Signature from '../components/Signature';
import { usePageMeta } from '../hooks/usePageMeta';
import '../styles/redesign.css';

// Version anglaise générée à partir de la maquette « Wassalni.dc.html » du canevas de design, puis relu.
// Les styles restent en ligne pour garantir un rendu identique à la maquette.
const WassalniCaseStudy = () => {
  usePageMeta({
    title: "Wassalni – Case study – Imed Belouettar",
    description: "UX audit and redesign of a carpooling app: 12 issues found, 6 screens redesigned.",
    background: "#F7F7FB",
  });

  return (
    <div className="rd rd-wassalni" style={{ fontFamily: "'Montserrat', system-ui, sans-serif", color: "#1E1F5C", background: "#F7F7FB", minHeight: "100vh" }}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {/* TOP BAR */}
      <header style={{ background: "#5457FF" }}>
        <nav aria-label="Main navigation" className="cs-nav" style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", fontWeight: "700", fontSize: "15px", color: "#FFFFFF", textDecoration: "none" }}>
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
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
            <a href="mailto:ie.belouettar@gmail.com" className="cs-nav__cta" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", borderRadius: "14px", background: "#FFFFFF", color: "#1E1F5C", fontWeight: "800", fontSize: "14px", textDecoration: "none" }}>
              Contact me
            </a>
          </div>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1}>
        {/* HERO */}
        <section aria-labelledby="titre-page" style={{ background: "#5457FF", color: "#FFFFFF", position: "relative", overflow: "hidden" }}>
          <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" fill="none" style={{ position: "absolute", inset: "0" }}>
            <path d="M-40 640 C 220 560 300 700 520 620 S 860 470 1040 560 S 1340 640 1500 520" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="3" strokeDasharray="2 14" strokeLinecap="round" />
            <path d="M-40 180 C 200 120 380 260 620 200 S 1000 60 1500 160" stroke="#FFFFFF" strokeOpacity="0.12" strokeWidth="70" strokeLinecap="round" />
            <circle cx="1040" cy="560" r="9" fill="#FFFFFF" fillOpacity="0.6" />
            <circle cx="520" cy="620" r="9" fill="#FFFFFF" fillOpacity="0.6" />
          </svg>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "32px 24px 0", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end" }}>
            <div style={{ flex: "999 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "26px", paddingBottom: "88px" }}>
              <nav aria-label="Breadcrumb">
                <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "8px", fontSize: "14px", fontWeight: "600" }}>
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
                      Wassalni
                    </span>
                  </li>
                </ol>
              </nav>
              <p style={{ margin: "0", display: "inline-flex", alignItems: "flex-end", gap: "6px", fontStyle: "italic", fontWeight: "900", fontSize: "clamp(48px, 7vw, 92px)", lineHeight: "0.9", letterSpacing: "-0.01em" }}>
                WASSALNI
                <svg aria-hidden="true" width="64" height="80" viewBox="0 0 34 42" fill="none" stroke="#FFFFFF" strokeWidth="4.2" strokeLinecap="round">
                  <circle cx="20" cy="7" r="5.5" fill="#FFFFFF" stroke="none" />
                  <path d="M7 3c0 7 4 10 10 11M20 15v24M20 19l10 9M13 39V22" />
                </svg>
              </p>
              <h1 id="titre-page" style={{ margin: "0", fontWeight: "800", fontSize: "clamp(30px, 3.6vw, 46px)", lineHeight: "1.12", maxWidth: "17ch" }}>
                Long-distance carpooling, with confidence.
              </h1>
              <p style={{ margin: "0", fontSize: "18px", fontWeight: "500", lineHeight: "1.55", maxWidth: "46ch" }}>
                An app that connects drivers and passengers to share rides between cities. I led it as Product Owner during my bachelor's, then audited and redesigned it as a designer.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a href="#ecrans" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 24px", borderRadius: "16px", background: "#FFFFFF", color: "#1E1F5C", fontWeight: "800", textDecoration: "none" }}>
                  See the screens
                </a>
                {" "}
                <a href="#avant-apres" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 24px", borderRadius: "16px", border: "2px solid #FFFFFF", color: "#FFFFFF", fontWeight: "800", textDecoration: "none" }}>
                  Before / after
                </a>
              </div>
            </div>
            {/* hero phone + floating UI */}
            <div aria-hidden="true" style={{ flex: "1 1 400px", minWidth: "0", position: "relative", display: "flex", justifyContent: "center", minHeight: "600px" }}>
              <div style={{ position: "absolute", bottom: "-60px", width: "300px", height: "620px", boxSizing: "border-box", borderRadius: "44px", border: "10px solid #14152E", background: "#FFFFFF", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 40px 80px rgba(20,21,46,0.35)", color: "#1E1F5C" }}>
                <div style={{ background: "#5457FF", color: "#FFFFFF", padding: "28px 20px 72px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    Hello Sara
                  </span>
                  <span style={{ fontSize: "23px", fontWeight: "800" }}>
                    Where are you going?
                  </span>
                </div>
                <div style={{ margin: "-54px 14px 0", padding: "16px", borderRadius: "22px", background: "#FFFFFF", boxShadow: "0 10px 24px rgba(30,31,92,0.16)", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", color: "#5E607E" }}>
                      From
                    </span>
                    <span style={{ padding: "10px 12px", borderRadius: "12px", background: "#F2F2FA", fontWeight: "700", fontSize: "14px" }}>
                      City centre
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", color: "#5E607E" }}>
                      To
                    </span>
                    <span style={{ padding: "10px 12px", borderRadius: "12px", background: "#F2F2FA", fontWeight: "700", fontSize: "14px" }}>
                      Central station
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ flex: "1", padding: "10px 12px", borderRadius: "12px", border: "1.5px solid #E2E3F0", fontWeight: "700", fontSize: "13px" }}>
                      Tue, June 25
                    </span>
                    <span style={{ padding: "10px 12px", borderRadius: "12px", border: "1.5px solid #E2E3F0", fontWeight: "700", fontSize: "13px" }}>
                      1 passenger
                    </span>
                  </div>
                  <span style={{ padding: "12px", borderRadius: "14px", background: "#5457FF", color: "#FFFFFF", textAlign: "center", fontWeight: "800", fontSize: "14px" }}>
                    Search for a ride
                  </span>
                </div>
                <div style={{ padding: "16px 14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "800" }}>
                    Your frequent rides
                  </span>
                  <span style={{ padding: "10px 12px", borderRadius: "12px", background: "#EEEFFF", color: "#2A2CB0", fontWeight: "700", fontSize: "13px" }}>
                    City centre → Central station
                  </span>
                  <span style={{ padding: "10px 12px", borderRadius: "12px", background: "#EEEFFF", color: "#2A2CB0", fontWeight: "700", fontSize: "13px" }}>
                    Campus → Airport
                  </span>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0", top: "70px", padding: "12px 14px", borderRadius: "18px", background: "#FFFFFF", color: "#1E1F5C", boxShadow: "0 16px 32px rgba(20,21,46,0.25)", display: "flex", gap: "10px", alignItems: "center", transform: "rotate(-4deg)" }}>
                <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800" }}>
                  A
                </span>
                {" "}
                <span style={{ display: "flex", flexDirection: "column", fontSize: "13px", fontWeight: "800" }}>
                  Ash ★ 4.9
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#0D5C42" }}>
                    ✓ Verified profile
                  </span>
                </span>
              </div>
              <div style={{ position: "absolute", right: "0", top: "230px", padding: "12px 14px", borderRadius: "18px", background: "#1E1F5C", color: "#FFFFFF", boxShadow: "0 16px 32px rgba(20,21,46,0.3)", display: "flex", gap: "10px", alignItems: "center", transform: "rotate(3deg)" }}>
                <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#12805C", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900" }}>
                  ✓
                </span>
                {" "}
                <span style={{ fontSize: "13px", fontWeight: "800" }}>
                  Request accepted
                </span>
              </div>
              <div style={{ position: "absolute", left: "4%", bottom: "120px", padding: "10px 16px", borderRadius: "999px", background: "#FFFFFF", color: "#2A2CB0", boxShadow: "0 16px 32px rgba(20,21,46,0.25)", fontSize: "15px", fontWeight: "900" }}>
                2,000 DA
              </div>
            </div>
          </div>
        </section>
        {/* FACTS */}
        <section aria-label="Project overview" style={{ background: "#1E1F5C", color: "#FFFFFF", position: "relative" }}>
          <dl style={{ maxWidth: "1200px", margin: "0 auto", padding: "28px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px" }}>
            <div>
              <dt style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C9CAFF" }}>
                Role
              </dt>
              <dd style={{ margin: "6px 0 0", fontWeight: "700", fontSize: "15px", lineHeight: "1.4" }}>
                Product Owner (V1), Product Designer (V2)
              </dd>
            </div>
            <div>
              <dt style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C9CAFF" }}>
                Context
              </dt>
              <dd style={{ margin: "6px 0 0", fontWeight: "700", fontSize: "15px", lineHeight: "1.4" }}>
                Student startup, bachelor's project
              </dd>
            </div>
            <div>
              <dt style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C9CAFF" }}>
                Duration · team
              </dt>
              <dd style={{ margin: "6px 0 0", fontWeight: "700", fontSize: "15px", lineHeight: "1.4" }}>
                V1: 7 months · V2: 1 year · 3 people (2 devs, me as PO)
              </dd>
            </div>
            <div>
              <dt style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C9CAFF" }}>
                Tools
              </dt>
              <dd style={{ margin: "6px 0 0", fontWeight: "700", fontSize: "15px", lineHeight: "1.4" }}>
                Figma, React Native, Node.js
              </dd>
            </div>
          </dl>
        </section>
        {/* CHAPTERS */}
        <nav aria-label="Case study chapters" style={{ background: "#FFFFFF", borderBottom: "1px solid #E2E3F0" }}>
          <ul style={{ maxWidth: "1200px", margin: "0 auto", padding: "14px 24px", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <li>
              <a href="#defi" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", borderRadius: "999px", background: "#EEEFFF", color: "#2A2CB0", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
                The challenge
              </a>
            </li>
            <li>
              <a href="#avant-apres" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", borderRadius: "999px", background: "#EEEFFF", color: "#2A2CB0", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
                Before / after
              </a>
            </li>
            <li>
              <a href="#utilisateurs" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", borderRadius: "999px", background: "#EEEFFF", color: "#2A2CB0", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
                Users
              </a>
            </li>
            <li>
              <a href="#principes" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", borderRadius: "999px", background: "#EEEFFF", color: "#2A2CB0", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
                Principles
              </a>
            </li>
            <li>
              <a href="#ecrans" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", borderRadius: "999px", background: "#EEEFFF", color: "#2A2CB0", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
                Screens
              </a>
            </li>
            <li>
              <a href="#design-system" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", borderRadius: "999px", background: "#EEEFFF", color: "#2A2CB0", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
                Design system
              </a>
            </li>
            <li>
              <a href="#suite" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", borderRadius: "999px", background: "#EEEFFF", color: "#2A2CB0", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
                What's next
              </a>
            </li>
            <li>
              <a href="#retiens" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", borderRadius: "999px", background: "#EEEFFF", color: "#2A2CB0", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
                Takeaways
              </a>
            </li>
          </ul>
        </nav>
        {/* 01 DEFI */}
        <section id="defi" aria-labelledby="t-defi" style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
          <div style={{ flex: "999 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
            <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em", color: "#2A2CB0" }}>
              01 · THE CHALLENGE
            </p>
            <h2 id="t-defi" style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "clamp(30px, 3.8vw, 48px)", lineHeight: "1.12" }}>
              How do you find a ride and book with confidence in under a minute?
            </h2>
            <p style={{ margin: "0", fontSize: "17px", fontWeight: "500", lineHeight: "1.6", color: "#4A4B6A", maxWidth: "52ch" }}>
              Long rides between cities are often arranged by word of mouth, with no guarantee. V1 let you find a driver, but without any UX process: trust and search were left aside.
            </p>
          </div>
          <ul aria-label="Key figures" style={{ flex: "1 1 320px", listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
            <li style={{ gridColumn: "span 2", padding: "26px", borderRadius: "26px", background: "#5457FF", color: "#FFFFFF", display: "flex", alignItems: "center", gap: "18px" }}>
              <span style={{ fontStyle: "italic", fontWeight: "900", fontSize: "64px", lineHeight: "1" }}>
                12
              </span>
              <span style={{ fontWeight: "700", fontSize: "16px", lineHeight: "1.35" }}>
                issues found
                {" "}<br />
                in the V1 audit
              </span>
            </li>
            <li style={{ padding: "22px", borderRadius: "26px", background: "#1E1F5C", color: "#FFFFFF" }}>
              <span style={{ display: "block", fontStyle: "italic", fontWeight: "900", fontSize: "48px", lineHeight: "1" }}>
                6
              </span>
              <span style={{ display: "block", marginTop: "8px", fontWeight: "700", fontSize: "15px" }}>
                screens redesigned
              </span>
            </li>
            <li style={{ padding: "22px", borderRadius: "26px", background: "#EEEFFF", color: "#1E1F5C" }}>
              <span style={{ display: "block", fontStyle: "italic", fontWeight: "900", fontSize: "48px", lineHeight: "1", color: "#2A2CB0" }}>
                −1
              </span>
              <span style={{ display: "block", marginTop: "8px", fontWeight: "700", fontSize: "15px" }}>
                screen to search
              </span>
            </li>
          </ul>
        </section>
        {/* 02 AVANT / APRES */}
        <section id="avant-apres" aria-labelledby="t-aa" style={{ background: "#FFFFFF" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em", color: "#2A2CB0" }}>
                02 · AUDIT
              </p>
              <h2 id="t-aa" style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "clamp(30px, 3.8vw, 48px)", lineHeight: "1.1" }}>
                Before / after
              </h2>
              <p style={{ margin: "0", fontSize: "17px", fontWeight: "500", color: "#4A4B6A" }}>
                V1's 4 major issues and how I addressed them.
              </p>
            </div>
            <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 540px), 1fr))", gap: "20px" }}>
              <li style={{ padding: "24px", borderRadius: "28px", background: "#F7F7FB", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                  <div aria-hidden="true" style={{ flex: "1 1 180px", minHeight: "150px", padding: "14px", borderRadius: "18px", background: "#FFFFFF", border: "2px dashed #C9CAD9", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "10px" }}>
                    <span style={{ alignSelf: "flex-start", padding: "3px 8px", borderRadius: "6px", background: "#E2E3F0", fontSize: "11px", fontWeight: "800", color: "#4A4B6A" }}>
                      V1
                    </span>
                    {" "}
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#5E607E" }}>
                      Latest Trip
                    </span>
                    <div style={{ display: "flex", justifyContent: "space-around", fontSize: "10px", fontWeight: "700", color: "#5E607E" }}>
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", color: "#9A1D17" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <circle cx="11" cy="11" r="7" />
                          <path d="m20 20-3.5-3.5" />
                        </svg>
                        Home ?
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 8v8M8 12h8" />
                        </svg>
                        Ride
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="6" width="18" height="13" rx="2" />
                        </svg>
                        Trips
                      </span>
                    </div>
                  </div>
                  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5457FF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                  <div aria-hidden="true" style={{ flex: "1 1 180px", minHeight: "150px", padding: "14px", borderRadius: "18px", background: "#FFFFFF", boxShadow: "0 8px 20px rgba(30,31,92,0.1)", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ alignSelf: "flex-start", padding: "3px 8px", borderRadius: "6px", background: "#5457FF", color: "#FFFFFF", fontSize: "11px", fontWeight: "800" }}>
                      V2
                    </span>
                    {" "}
                    <span style={{ padding: "8px 10px", borderRadius: "10px", background: "#F2F2FA", fontSize: "12px", fontWeight: "700" }}>
                      City centre
                    </span>
                    {" "}
                    <span style={{ padding: "8px 10px", borderRadius: "10px", background: "#F2F2FA", fontSize: "12px", fontWeight: "700" }}>
                      Central station
                    </span>
                    {" "}
                    <span style={{ padding: "8px", borderRadius: "10px", background: "#5457FF", color: "#FFFFFF", textAlign: "center", fontSize: "12px", fontWeight: "800" }}>
                      Search
                    </span>
                  </div>
                </div>
                <div>
                  <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>
                    Search, right from the home screen
                  </h3>
                  <p style={{ margin: "4px 0 0", fontSize: "15px", fontWeight: "500", color: "#4A4B6A" }}>
                    It was hidden in the “Ride” tab.
                  </p>
                </div>
              </li>
              <li style={{ padding: "24px", borderRadius: "28px", background: "#F7F7FB", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                  <div aria-hidden="true" style={{ flex: "1 1 180px", minHeight: "150px", padding: "14px", borderRadius: "18px", background: "#FFFFFF", border: "2px dashed #C9CAD9", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                    <span style={{ alignSelf: "flex-start", padding: "3px 8px", borderRadius: "6px", background: "#E2E3F0", fontSize: "11px", fontWeight: "800", color: "#4A4B6A" }}>
                      V1
                    </span>
                    {" "}
                    <span style={{ padding: "12px 14px", borderRadius: "999px", background: "#F2F2FA", fontSize: "13px", fontWeight: "600", color: "#6A6C82" }}>
                      Leaving from
                    </span>
                    {" "}
                    <span style={{ padding: "12px 14px", borderRadius: "999px", background: "#F2F2FA", fontSize: "13px", fontWeight: "600", color: "#6A6C82" }}>
                      Going to
                    </span>
                  </div>
                  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5457FF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                  <div aria-hidden="true" style={{ flex: "1 1 180px", minHeight: "150px", padding: "14px", borderRadius: "18px", background: "#FFFFFF", boxShadow: "0 8px 20px rgba(30,31,92,0.1)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px" }}>
                    <span style={{ alignSelf: "flex-start", padding: "3px 8px", borderRadius: "6px", background: "#5457FF", color: "#FFFFFF", fontSize: "11px", fontWeight: "800" }}>
                      V2
                    </span>
                    {" "}
                    <span style={{ fontSize: "11px", fontWeight: "800", color: "#4A4B6A" }}>
                      From
                    </span>
                    {" "}
                    <span style={{ padding: "10px 12px", borderRadius: "12px", border: "2px solid #5457FF", fontSize: "13px", fontWeight: "700" }}>
                      City centre
                    </span>
                    {" "}
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#4A4B6A" }}>
                      City or bus station
                    </span>
                  </div>
                </div>
                <div>
                  <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>
                    Real labels
                  </h3>
                  <p style={{ margin: "4px 0 0", fontSize: "15px", fontWeight: "500", color: "#4A4B6A" }}>
                    Faint placeholders vanished as you typed.
                  </p>
                </div>
              </li>
              <li style={{ padding: "24px", borderRadius: "28px", background: "#F7F7FB", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                  <div aria-hidden="true" style={{ flex: "1 1 180px", minHeight: "150px", padding: "14px", borderRadius: "18px", background: "#FFFFFF", border: "2px dashed #C9CAD9", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                    <span style={{ alignSelf: "flex-start", padding: "3px 8px", borderRadius: "6px", background: "#E2E3F0", fontSize: "11px", fontWeight: "800", color: "#4A4B6A" }}>
                      V1
                    </span>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <span style={{ flex: "1", padding: "10px 4px", borderRadius: "10px", background: "#F2F2FA", border: "2px solid #E2E3F0", fontSize: "10px", fontWeight: "600", color: "#6A6C82", textAlign: "center" }}>
                        Smoking Allowed
                      </span>
                      <span style={{ flex: "1", padding: "10px 4px", borderRadius: "10px", background: "#F2F2FA", border: "2px solid #E2E3F0", fontSize: "10px", fontWeight: "600", color: "#6A6C82", textAlign: "center" }}>
                        Pet Allowed
                      </span>
                      <span style={{ flex: "1", padding: "10px 4px", borderRadius: "10px", background: "#F2F2FA", border: "2px solid #E2E3F0", fontSize: "10px", fontWeight: "600", color: "#6A6C82", textAlign: "center" }}>
                        Luggage Allowed
                      </span>
                    </div>
                  </div>
                  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5457FF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                  <div aria-hidden="true" style={{ flex: "1 1 180px", minHeight: "150px", padding: "14px", borderRadius: "18px", background: "#FFFFFF", boxShadow: "0 8px 20px rgba(30,31,92,0.1)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                    <span style={{ alignSelf: "flex-start", padding: "3px 8px", borderRadius: "6px", background: "#5457FF", color: "#FFFFFF", fontSize: "11px", fontWeight: "800" }}>
                      V2
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <span style={{ padding: "7px 11px", borderRadius: "999px", background: "#1E1F5C", color: "#FFFFFF", fontSize: "12px", fontWeight: "700" }}>
                        ✓ Luggage
                      </span>
                      <span style={{ padding: "7px 11px", borderRadius: "999px", border: "1.5px solid #9C9DB3", fontSize: "12px", fontWeight: "700" }}>
                        Pets
                      </span>
                      <span style={{ padding: "7px 11px", borderRadius: "999px", background: "#1E1F5C", color: "#FFFFFF", fontSize: "12px", fontWeight: "700" }}>
                        ✓ Non-smoking
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>
                    Filters that show their state
                  </h3>
                  <p style={{ margin: "4px 0 0", fontSize: "15px", fontWeight: "500", color: "#4A4B6A" }}>
                    Greyed-out buttons looked disabled.
                  </p>
                </div>
              </li>
              <li style={{ padding: "24px", borderRadius: "28px", background: "#F7F7FB", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                  <div aria-hidden="true" style={{ flex: "1 1 180px", minHeight: "150px", padding: "14px", borderRadius: "18px", background: "#FFFFFF", border: "2px dashed #C9CAD9", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                    <span style={{ alignSelf: "flex-start", padding: "3px 8px", borderRadius: "6px", background: "#E2E3F0", fontSize: "11px", fontWeight: "800", color: "#4A4B6A" }}>
                      V1
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#E2E3F0", color: "#55576D", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: "700" }}>
                        50 x 50
                      </span>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#5E607E" }}>
                        Ash ★★★★★
                      </span>
                    </div>
                  </div>
                  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5457FF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                  <div aria-hidden="true" style={{ flex: "1 1 180px", minHeight: "150px", padding: "14px", borderRadius: "18px", background: "#FFFFFF", boxShadow: "0 8px 20px rgba(30,31,92,0.1)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                    <span style={{ alignSelf: "flex-start", padding: "3px 8px", borderRadius: "6px", background: "#5457FF", color: "#FFFFFF", fontSize: "11px", fontWeight: "800" }}>
                      V2
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#5457FF", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800" }}>
                        A
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", fontSize: "13px", fontWeight: "800" }}>
                        Ash · ★ 4.9
                        <span style={{ fontSize: "11px", fontWeight: "600", color: "#4A4B6A" }}>
                          32 reviews · 41 rides
                        </span>
                      </span>
                    </div>
                    <span style={{ alignSelf: "flex-start", padding: "5px 9px", borderRadius: "8px", background: "#E3F4EC", color: "#0D5C42", fontSize: "11px", fontWeight: "800" }}>
                      ✓ Verified profile
                    </span>
                  </div>
                </div>
                <div>
                  <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>
                    Trust before price
                  </h3>
                  <p style={{ margin: "4px 0 0", fontSize: "15px", fontWeight: "500", color: "#4A4B6A" }}>
                    Empty photo, rating without reviews: nothing to decide on.
                  </p>
                </div>
              </li>
            </ol>
            <details style={{ borderRadius: "22px", border: "2px solid #E2E3F0", background: "#FFFFFF" }}>
              <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", minHeight: "64px", padding: "0 24px", fontWeight: "800", fontSize: "16px" }}>
                See the 12 audit issues
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <div role="region" aria-label="Horizontally scrollable area" tabIndex={0} style={{ padding: "0 24px 24px", overflowX: "auto" }}>
                <table style={{ width: "100%", minWidth: "620px", borderCollapse: "collapse", fontSize: "14px", lineHeight: "1.45" }}>
                  <caption style={{ textAlign: "left", padding: "0 0 12px", fontSize: "14px", fontWeight: "600", color: "#5E607E" }}>
                    Method: Nielsen's 10 heuristics and RGAA criteria, across V1's 10 screens
                  </caption>
                  <thead>
                    <tr style={{ background: "#F2F2FA" }}>
                      <th scope="col" style={{ textAlign: "left", padding: "10px 12px" }}>
                        Issue
                      </th>
                      <th scope="col" style={{ textAlign: "left", padding: "10px 12px" }}>
                        Screen
                      </th>
                      <th scope="col" style={{ textAlign: "left", padding: "10px 12px" }}>
                        Severity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderTop: "1px solid #E2E3F0" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "10px 12px", fontWeight: "600" }}>
                        Hidden search, magnifier icon labelled “Home”
                      </th>
                      <td style={{ padding: "10px 12px" }}>
                        Home
                      </td>
                      <td style={{ padding: "10px 12px", fontWeight: "700", color: "#9A1D17" }}>
                        ▲ Major
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #E2E3F0" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "10px 12px", fontWeight: "600" }}>
                        Placeholders used as labels
                      </th>
                      <td style={{ padding: "10px 12px" }}>
                        Search, posting
                      </td>
                      <td style={{ padding: "10px 12px", fontWeight: "700", color: "#9A1D17" }}>
                        ▲ Major
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #E2E3F0" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "10px 12px", fontWeight: "600" }}>
                        Greyed-out preferences, selected state invisible
                      </th>
                      <td style={{ padding: "10px 12px" }}>
                        Search, posting
                      </td>
                      <td style={{ padding: "10px 12px", fontWeight: "700", color: "#9A1D17" }}>
                        ▲ Major
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #E2E3F0" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "10px 12px", fontWeight: "600" }}>
                        No trust signal about the driver
                      </th>
                      <td style={{ padding: "10px 12px" }}>
                        Ride details
                      </td>
                      <td style={{ padding: "10px 12px", fontWeight: "700", color: "#9A1D17" }}>
                        ▲ Major
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #E2E3F0" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "10px 12px", fontWeight: "600" }}>
                        Date, time and main action: 3 identical buttons
                      </th>
                      <td style={{ padding: "10px 12px" }}>
                        Search, posting
                      </td>
                      <td style={{ padding: "10px 12px", fontWeight: "700", color: "#7A4500" }}>
                        ● Moderate
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #E2E3F0" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "10px 12px", fontWeight: "600" }}>
                        Full-screen map, “Go Back” too prominent
                      </th>
                      <td style={{ padding: "10px 12px" }}>
                        Ride details
                      </td>
                      <td style={{ padding: "10px 12px", fontWeight: "700", color: "#7A4500" }}>
                        ● Moderate
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #E2E3F0" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "10px 12px", fontWeight: "600" }}>
                        All statuses look the same, no direct action
                      </th>
                      <td style={{ padding: "10px 12px" }}>
                        Notifications
                      </td>
                      <td style={{ padding: "10px 12px", fontWeight: "700", color: "#7A4500" }}>
                        ● Moderate
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #E2E3F0" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "10px 12px", fontWeight: "600" }}>
                        Conversations without the related ride
                      </th>
                      <td style={{ padding: "10px 12px" }}>
                        Messaging
                      </td>
                      <td style={{ padding: "10px 12px", fontWeight: "700", color: "#7A4500" }}>
                        ● Moderate
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #E2E3F0" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "10px 12px", fontWeight: "600" }}>
                        Inconsistent labels, typo on the login screen
                      </th>
                      <td style={{ padding: "10px 12px" }}>
                        Whole app
                      </td>
                      <td style={{ padding: "10px 12px", fontWeight: "700", color: "#7A4500" }}>
                        ● Moderate
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #E2E3F0" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "10px 12px", fontWeight: "600" }}>
                        Seconds displayed, country name repeated after each city
                      </th>
                      <td style={{ padding: "10px 12px" }}>
                        Notifications, messages
                      </td>
                      <td style={{ padding: "10px 12px", fontWeight: "700", color: "#4A4B6A" }}>
                        ▼ Minor
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #E2E3F0" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "10px 12px", fontWeight: "600" }}>
                        No password rules shown
                      </th>
                      <td style={{ padding: "10px 12px" }}>
                        Sign-up
                      </td>
                      <td style={{ padding: "10px 12px", fontWeight: "700", color: "#4A4B6A" }}>
                        ▼ Minor
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #E2E3F0" }}>
                      <th scope="row" style={{ textAlign: "left", padding: "10px 12px", fontWeight: "600" }}>
                        A single ride, large empty space
                      </th>
                      <td style={{ padding: "10px 12px" }}>
                        Home
                      </td>
                      <td style={{ padding: "10px 12px", fontWeight: "700", color: "#4A4B6A" }}>
                        ▼ Minor
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </details>
          </div>
        </section>
        {/* 03 UTILISATEURS */}
        <section id="utilisateurs" aria-labelledby="t-users" style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px", display: "flex", flexDirection: "column", gap: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em", color: "#2A2CB0" }}>
              03 · USERS
            </p>
            <h2 id="t-users" style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "clamp(30px, 3.8vw, 48px)", lineHeight: "1.1" }}>
              Two profiles, one shared need: trust
            </h2>
            <p style={{ margin: "0", fontSize: "15px", fontWeight: "600", color: "#5E607E" }}>
              Proto-personas, to be validated through interviews.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "20px" }}>
            <article style={{ borderRadius: "28px", overflow: "hidden", background: "#FFFFFF", boxShadow: "0 10px 30px rgba(30,31,92,0.07)" }}>
              <div style={{ background: "#5457FF", color: "#FFFFFF", padding: "26px", display: "flex", gap: "16px", alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: "68px", height: "68px", borderRadius: "50%", background: "#FFFFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center", fontStyle: "italic", fontWeight: "900", fontSize: "28px" }}>
                  S
                </span>
                <div>
                  <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "800" }}>
                    Sara, 22
                  </h3>
                  <p style={{ margin: "4px 0 0", fontSize: "14px", fontWeight: "600" }}>
                    Passenger · student, goes home at weekends
                  </p>
                </div>
              </div>
              <div style={{ padding: "26px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <blockquote style={{ margin: "0", fontStyle: "italic", fontWeight: "800", fontSize: "19px", lineHeight: "1.4" }}>
                  “I want to know who's driving before I book.”
                </blockquote>
                <ul aria-label="Sara's needs and pain points" style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <li style={{ padding: "7px 12px", borderRadius: "999px", background: "#E3F4EC", color: "#0D5C42", fontSize: "13px", fontWeight: "700" }}>
                    ✓ A fair price
                  </li>
                  <li style={{ padding: "7px 12px", borderRadius: "999px", background: "#E3F4EC", color: "#0D5C42", fontSize: "13px", fontWeight: "700" }}>
                    ✓ A reliable driver
                  </li>
                  <li style={{ padding: "7px 12px", borderRadius: "999px", background: "#FDECEB", color: "#9A1D17", fontSize: "13px", fontWeight: "700" }}>
                    ✕ No information about the driver
                  </li>
                  <li style={{ padding: "7px 12px", borderRadius: "999px", background: "#FDECEB", color: "#9A1D17", fontSize: "13px", fontWeight: "700" }}>
                    ✕ Doesn't know if her request was seen
                  </li>
                </ul>
              </div>
            </article>
            <article style={{ borderRadius: "28px", overflow: "hidden", background: "#FFFFFF", boxShadow: "0 10px 30px rgba(30,31,92,0.07)" }}>
              <div style={{ background: "#1E1F5C", color: "#FFFFFF", padding: "26px", display: "flex", gap: "16px", alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: "68px", height: "68px", borderRadius: "50%", background: "#FFFFFF", color: "#1E1F5C", display: "flex", alignItems: "center", justifyContent: "center", fontStyle: "italic", fontWeight: "900", fontSize: "28px" }}>
                  K
                </span>
                <div>
                  <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "800" }}>
                    Karim, 38
                  </h3>
                  <p style={{ margin: "4px 0 0", fontSize: "14px", fontWeight: "600", color: "#FFFFFF" }}>
                    Driver · makes the same trip every week
                  </p>
                </div>
              </div>
              <div style={{ padding: "26px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <blockquote style={{ margin: "0", fontStyle: "italic", fontWeight: "800", fontSize: "19px", lineHeight: "1.4" }}>
                  “Sharing costs, yes, but without spending time on it.”
                </blockquote>
                <ul aria-label="Karim's needs and pain points" style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <li style={{ padding: "7px 12px", borderRadius: "999px", background: "#E3F4EC", color: "#0D5C42", fontSize: "13px", fontWeight: "700" }}>
                    ✓ Fill his seats
                  </li>
                  <li style={{ padding: "7px 12px", borderRadius: "999px", background: "#E3F4EC", color: "#0D5C42", fontSize: "13px", fontWeight: "700" }}>
                    ✓ Choose his passengers
                  </li>
                  <li style={{ padding: "7px 12px", borderRadius: "999px", background: "#FDECEB", color: "#9A1D17", fontSize: "13px", fontWeight: "700" }}>
                    ✕ What price to set?
                  </li>
                  <li style={{ padding: "7px 12px", borderRadius: "999px", background: "#FDECEB", color: "#9A1D17", fontSize: "13px", fontWeight: "700" }}>
                    ✕ Opening every notification
                  </li>
                </ul>
              </div>
            </article>
          </div>
          {/* emotion curve */}
          <figure style={{ margin: "0", padding: "28px", borderRadius: "28px", background: "#FFFFFF", boxShadow: "0 10px 30px rgba(30,31,92,0.07)", display: "flex", flexDirection: "column", gap: "16px" }}>
            <figcaption style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", alignItems: "center" }}>
              <span style={{ fontWeight: "800", fontSize: "18px" }}>
                How Sara feels, step by step
              </span>
              {" "}
              <span style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", fontWeight: "700" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span aria-hidden="true" style={{ width: "22px", height: "4px", borderRadius: "2px", background: "#C2261E" }} />
                  V1
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span aria-hidden="true" style={{ width: "22px", height: "0", borderTop: "4px dashed #5457FF" }} />
                  Target V2
                </span>
              </span>
            </figcaption>
            <div role="region" aria-label="Horizontally scrollable area" tabIndex={0} style={{ overflowX: "auto" }}>
              <svg role="img" aria-label="Emotion curve. With V1, Sara is lost when she opens the app, hesitant while searching, wary when choosing a ride, unsure while waiting for a reply and confused in messaging. With V2, the goal is a positive feeling at every step." width="100%" viewBox="0 0 900 300" style={{ minWidth: "640px", display: "block" }}>
                <line x1="40" y1="150" x2="880" y2="150" stroke="#E2E3F0" strokeWidth="2" />
                <text x="40" y="30" fontFamily="Montserrat" fontSize="13" fontWeight="700" fill="#0D5C42">
                  Calm
                </text>
                <text x="40" y="285" fontFamily="Montserrat" fontSize="13" fontWeight="700" fill="#9A1D17">
                  Frustrated
                </text>
                <path d="M120 90 L 300 80 L 480 60 L 660 70 L 840 55" stroke="#5457FF" strokeWidth="4" strokeDasharray="10 8" fill="none" strokeLinecap="round" />
                <path d="M120 230 L 300 190 L 480 250 L 660 200 L 840 185" stroke="#C2261E" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="120" cy="230" r="9" fill="#C2261E" />
                <circle cx="300" cy="190" r="9" fill="#C2261E" />
                <circle cx="480" cy="250" r="9" fill="#C2261E" />
                <circle cx="660" cy="200" r="9" fill="#C2261E" />
                <circle cx="840" cy="185" r="9" fill="#C2261E" />
                <circle cx="120" cy="90" r="8" fill="#FFFFFF" stroke="#5457FF" strokeWidth="4" />
                <circle cx="300" cy="80" r="8" fill="#FFFFFF" stroke="#5457FF" strokeWidth="4" />
                <circle cx="480" cy="60" r="8" fill="#FFFFFF" stroke="#5457FF" strokeWidth="4" />
                <circle cx="660" cy="70" r="8" fill="#FFFFFF" stroke="#5457FF" strokeWidth="4" />
                <circle cx="840" cy="55" r="8" fill="#FFFFFF" stroke="#5457FF" strokeWidth="4" />
                <text x="120" y="265" textAnchor="middle" fontFamily="Montserrat" fontSize="13" fontWeight="700" fill="#9A1D17">
                  Lost
                </text>
                <text x="300" y="225" textAnchor="middle" fontFamily="Montserrat" fontSize="13" fontWeight="700" fill="#9A1D17">
                  Hesitant
                </text>
                <text x="480" y="285" textAnchor="middle" fontFamily="Montserrat" fontSize="13" fontWeight="700" fill="#9A1D17">
                  Wary
                </text>
                <text x="660" y="235" textAnchor="middle" fontFamily="Montserrat" fontSize="13" fontWeight="700" fill="#9A1D17">
                  Unsure
                </text>
                <text x="840" y="220" textAnchor="middle" fontFamily="Montserrat" fontSize="13" fontWeight="700" fill="#9A1D17">
                  Confused
                </text>
              </svg>
            </div>
            <ol aria-label="Journey steps" style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "8px", fontSize: "13px", fontWeight: "800", textAlign: "center" }}>
              <li style={{ padding: "10px 4px", borderRadius: "12px", background: "#EEEFFF", color: "#2A2CB0" }}>
                Open
              </li>
              <li style={{ padding: "10px 4px", borderRadius: "12px", background: "#EEEFFF", color: "#2A2CB0" }}>
                Search
              </li>
              <li style={{ padding: "10px 4px", borderRadius: "12px", background: "#EEEFFF", color: "#2A2CB0" }}>
                Choose
              </li>
              <li style={{ padding: "10px 4px", borderRadius: "12px", background: "#EEEFFF", color: "#2A2CB0" }}>
                Wait
              </li>
              <li style={{ padding: "10px 4px", borderRadius: "12px", background: "#EEEFFF", color: "#2A2CB0" }}>
                Chat
              </li>
            </ol>
          </figure>
        </section>
        {/* 04 PRINCIPES */}
        <section id="principes" aria-labelledby="t-principes" style={{ background: "#5457FF", color: "#FFFFFF", position: "relative", overflow: "hidden" }}>
          <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none" style={{ position: "absolute", inset: "0" }}>
            <path d="M-40 520 C 300 420 520 560 820 470 S 1300 380 1500 460" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="3" strokeDasharray="2 14" strokeLinecap="round" />
          </svg>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "96px 24px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em" }}>
                04 · PRINCIPLES
              </p>
              <h2 id="t-principes" style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "clamp(30px, 3.8vw, 48px)", lineHeight: "1.1" }}>
                Four rules for V2
              </h2>
            </div>
            <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "16px" }}>
              <li style={{ padding: "26px", borderRadius: "26px", background: "#FFFFFF", color: "#1E1F5C", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span aria-hidden="true" style={{ width: "56px", height: "56px", borderRadius: "18px", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" />
                    <path d="m8.5 12 2.5 2.5 4.5-5" />
                  </svg>
                </span>
                <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "800" }}>
                  Trust first
                </h3>
                <p style={{ margin: "0", fontSize: "15px", fontWeight: "500", color: "#4A4B6A" }}>
                  The driver before the price.
                </p>
              </li>
              <li style={{ padding: "26px", borderRadius: "26px", background: "#FFFFFF", color: "#1E1F5C", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span aria-hidden="true" style={{ width: "56px", height: "56px", borderRadius: "18px", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                  </svg>
                </span>
                <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "800" }}>
                  One action per screen
                </h3>
                <p style={{ margin: "0", fontSize: "15px", fontWeight: "500", color: "#4A4B6A" }}>
                  A single solid button, within thumb reach.
                </p>
              </li>
              <li style={{ padding: "26px", borderRadius: "26px", background: "#FFFFFF", color: "#1E1F5C", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span aria-hidden="true" style={{ width: "56px", height: "56px", borderRadius: "18px", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z" />
                    <path d="M10 21h4" />
                  </svg>
                </span>
                <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "800" }}>
                  State always clear
                </h3>
                <p style={{ margin: "0", fontSize: "15px", fontWeight: "500", color: "#4A4B6A" }}>
                  Text, icon and colour together.
                </p>
              </li>
              <li style={{ padding: "26px", borderRadius: "26px", background: "#FFFFFF", color: "#1E1F5C", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span aria-hidden="true" style={{ width: "56px", height: "56px", borderRadius: "18px", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "800" }}>
                  Designed for the road
                </h3>
                <p style={{ margin: "0", fontSize: "15px", fontWeight: "500", color: "#4A4B6A" }}>
                  Readable one-handed, on the move.
                </p>
              </li>
            </ul>
            {/* flow */}
            <div style={{ padding: "26px", borderRadius: "26px", background: "#1E1F5C", display: "flex", flexDirection: "column", gap: "16px" }}>
              <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>
                New booking flow
              </h3>
              <ol aria-label="Steps of the new flow" style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", fontSize: "15px", fontWeight: "800" }}>
                <li style={{ padding: "12px 18px", borderRadius: "999px", background: "#FFFFFF", color: "#1E1F5C" }}>
                  Home
                </li>
                <li aria-hidden="true" style={{ color: "#C9CAFF" }}>
                  →
                </li>
                <li style={{ padding: "12px 18px", borderRadius: "16px", border: "2px solid #C9CAFF" }}>
                  Search
                </li>
                <li aria-hidden="true" style={{ color: "#C9CAFF" }}>
                  →
                </li>
                <li style={{ padding: "12px 18px", borderRadius: "16px", border: "2px solid #C9CAFF" }}>
                  Compare
                </li>
                <li aria-hidden="true" style={{ color: "#C9CAFF" }}>
                  →
                </li>
                <li style={{ padding: "12px 18px", borderRadius: "16px", border: "2px solid #C9CAFF" }}>
                  Details
                </li>
                <li aria-hidden="true" style={{ color: "#C9CAFF" }}>
                  →
                </li>
                <li style={{ padding: "12px 18px", borderRadius: "999px", background: "#5457FF", color: "#FFFFFF" }}>
                  Request sent ✓
                </li>
              </ol>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "600", color: "#C9CAFF" }}>
                No ride? An alert lets Sara know as soon as one is posted.
              </p>
            </div>
          </div>
        </section>
        {/* 05 ECRANS */}
        <section id="ecrans" aria-labelledby="t-ecrans" style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px", display: "flex", flexDirection: "column", gap: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em", color: "#2A2CB0" }}>
              05 · REDESIGN
            </p>
            <h2 id="t-ecrans" style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "clamp(30px, 3.8vw, 48px)", lineHeight: "1.1" }}>
              Six redesigned screens
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 560px), 1fr))", gap: "24px" }}>
            {/* A ACCUEIL */}
            <figure style={{ margin: "0", padding: "32px 28px", borderRadius: "32px", background: "#EEEFFF", display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "relative", flex: "0 0 300px" }}>
                <div role="img" aria-label="Redesigned home screen: search from City centre to Central station with labels, date and passengers, Search button, frequent rides" style={{ width: "300px", height: "620px", boxSizing: "border-box", borderRadius: "44px", border: "10px solid #14152E", background: "#FFFFFF", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 24px 48px rgba(30,31,92,0.2)" }}>
                  <div style={{ background: "#5457FF", color: "#FFFFFF", padding: "28px 20px 72px", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600" }}>
                      Hello Sara
                    </span>
                    <span style={{ fontSize: "23px", fontWeight: "800" }}>
                      Where are you going?
                    </span>
                  </div>
                  <div style={{ margin: "-54px 14px 0", padding: "16px", borderRadius: "22px", background: "#FFFFFF", boxShadow: "0 10px 24px rgba(30,31,92,0.16)", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                      <span style={{ fontSize: "11px", fontWeight: "700", color: "#5E607E" }}>
                        From
                      </span>
                      <span style={{ padding: "10px 12px", borderRadius: "12px", background: "#F2F2FA", fontWeight: "700", fontSize: "14px" }}>
                        City centre
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                      <span style={{ fontSize: "11px", fontWeight: "700", color: "#5E607E" }}>
                        To
                      </span>
                      <span style={{ padding: "10px 12px", borderRadius: "12px", background: "#F2F2FA", fontWeight: "700", fontSize: "14px" }}>
                        Central station
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <span style={{ flex: "1", padding: "10px 12px", borderRadius: "12px", border: "1.5px solid #E2E3F0", fontWeight: "700", fontSize: "13px" }}>
                        Tue, June 25
                      </span>
                      <span style={{ padding: "10px 12px", borderRadius: "12px", border: "1.5px solid #E2E3F0", fontWeight: "700", fontSize: "13px" }}>
                        1 passenger
                      </span>
                    </div>
                    <span style={{ padding: "12px", borderRadius: "14px", background: "#5457FF", color: "#FFFFFF", textAlign: "center", fontWeight: "800", fontSize: "14px" }}>
                      Search for a ride
                    </span>
                  </div>
                  <div style={{ padding: "16px 14px 0", display: "flex", flexDirection: "column", gap: "8px", flex: "1" }}>
                    <span style={{ fontSize: "13px", fontWeight: "800" }}>
                      Your frequent rides
                    </span>
                    <span style={{ padding: "10px 12px", borderRadius: "12px", background: "#EEEFFF", color: "#2A2CB0", fontWeight: "700", fontSize: "13px" }}>
                      City centre → Central station
                    </span>
                    <span style={{ padding: "10px 12px", borderRadius: "12px", background: "#EEEFFF", color: "#2A2CB0", fontWeight: "700", fontSize: "13px" }}>
                      Campus → Airport
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-around", padding: "10px 6px 12px", borderTop: "1px solid #E2E3F0", fontSize: "10px", fontWeight: "700", color: "#5E607E" }}>
                    <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", color: "#2A2CB0" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 11 12 4l9 7" />
                        <path d="M5 10v10h14V10" />
                      </svg>
                      Home
                    </span>
                    {" "}
                    <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="6" width="18" height="13" rx="2" />
                        <path d="M7 3h10" />
                      </svg>
                      Rides
                    </span>
                    {" "}
                    <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 8v8M8 12h8" />
                      </svg>
                      Post
                    </span>
                    {" "}
                    <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 5h16v11H8l-4 4z" />
                      </svg>
                      Messages
                    </span>
                    {" "}
                    <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
                      </svg>
                      Profile
                    </span>
                  </div>
                </div>
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "150px", width: "34px", height: "34px", borderRadius: "50%", background: "#1E1F5C", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  1
                </span>
                {" "}
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "262px", width: "34px", height: "34px", borderRadius: "50%", background: "#1E1F5C", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  2
                </span>
                {" "}
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "380px", width: "34px", height: "34px", borderRadius: "50%", background: "#1E1F5C", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  3
                </span>
              </div>
              <figcaption style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <h3 style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "26px" }}>
                  Home
                </h3>
                <ol style={{ margin: "0", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", fontWeight: "600", lineHeight: "1.45" }}>
                  <li>
                    Search as soon as you open the app
                  </li>
                  <li>
                    Date and passengers as secondary
                  </li>
                  <li>
                    Frequent rides in one tap
                  </li>
                </ol>
              </figcaption>
            </figure>
            {/* B RESULTATS */}
            <figure style={{ margin: "0", padding: "32px 28px", borderRadius: "32px", background: "#1E1F5C", color: "#FFFFFF", display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "relative", flex: "0 0 300px" }}>
                <div role="img" aria-label="Results screen: three rides from City centre to Central station, each with time, price, driver, rating, number of reviews and verification status, active filters checked" style={{ width: "300px", height: "620px", boxSizing: "border-box", borderRadius: "44px", border: "10px solid #000000", background: "#F7F7FB", overflow: "hidden", display: "flex", flexDirection: "column", color: "#1E1F5C", boxShadow: "0 24px 48px rgba(0,0,0,0.3)" }}>
                  <div style={{ background: "#FFFFFF", padding: "22px 16px 14px", display: "flex", flexDirection: "column", gap: "10px", borderBottom: "1px solid #E2E3F0" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontWeight: "800", fontSize: "15px" }}>
                        City centre → Central station
                      </span>
                      <span style={{ fontSize: "11px", fontWeight: "600", color: "#5E607E" }}>
                        Tue, June 25 · 1 passenger
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      <span style={{ padding: "6px 10px", borderRadius: "999px", background: "#1E1F5C", color: "#FFFFFF", fontSize: "11px", fontWeight: "700" }}>
                        ✓ Luggage
                      </span>
                      <span style={{ padding: "6px 10px", borderRadius: "999px", border: "1.5px solid #9C9DB3", fontSize: "11px", fontWeight: "700" }}>
                        Pets
                      </span>
                      <span style={{ padding: "6px 10px", borderRadius: "999px", border: "1.5px solid #9C9DB3", fontSize: "11px", fontWeight: "700" }}>
                        Non-smoking
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#5E607E" }}>
                      3 rides available
                    </span>
                    <div style={{ padding: "14px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "0 4px 12px rgba(30,31,92,0.06)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontWeight: "800", fontSize: "17px" }}>
                          07:30
                        </span>
                        <span style={{ fontWeight: "800", fontSize: "16px", color: "#2A2CB0" }}>
                          1,800 DA
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "12px" }}>
                          M
                        </span>
                        <span style={{ fontSize: "12px", fontWeight: "700" }}>
                          Mehdi · ★ 4.8 (54)
                        </span>
                      </div>
                      <span style={{ alignSelf: "flex-start", padding: "4px 8px", borderRadius: "8px", background: "#E3F4EC", color: "#0D5C42", fontSize: "11px", fontWeight: "700" }}>
                        ✓ Verified profile · 2 seats
                      </span>
                    </div>
                    <div style={{ padding: "14px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "0 4px 12px rgba(30,31,92,0.06)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontWeight: "800", fontSize: "17px" }}>
                          14:00
                        </span>
                        <span style={{ fontWeight: "800", fontSize: "16px", color: "#2A2CB0" }}>
                          2,000 DA
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "12px" }}>
                          N
                        </span>
                        <span style={{ fontSize: "12px", fontWeight: "700" }}>
                          Nadia · ★ 5.0 (12)
                        </span>
                      </div>
                      <span style={{ alignSelf: "flex-start", padding: "4px 8px", borderRadius: "8px", background: "#E3F4EC", color: "#0D5C42", fontSize: "11px", fontWeight: "700" }}>
                        ✓ Verified profile · 1 seat
                      </span>
                    </div>
                    <div style={{ padding: "14px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "0 4px 12px rgba(30,31,92,0.06)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontWeight: "800", fontSize: "17px" }}>
                          21:51
                        </span>
                        <span style={{ fontWeight: "800", fontSize: "16px", color: "#2A2CB0" }}>
                          2,000 DA
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "12px" }}>
                          A
                        </span>
                        <span style={{ fontSize: "12px", fontWeight: "700" }}>
                          Ash · ★ 4.9 (32)
                        </span>
                      </div>
                      <span style={{ alignSelf: "flex-start", padding: "4px 8px", borderRadius: "8px", background: "#F2F2FA", color: "#4A4B6A", fontSize: "11px", fontWeight: "700" }}>
                        Not verified · 3 seats
                      </span>
                    </div>
                  </div>
                </div>
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "78px", width: "34px", height: "34px", borderRadius: "50%", background: "#5457FF", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  1
                </span>
                {" "}
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "192px", width: "34px", height: "34px", borderRadius: "50%", background: "#5457FF", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  2
                </span>
                {" "}
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "232px", width: "34px", height: "34px", borderRadius: "50%", background: "#5457FF", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  3
                </span>
              </div>
              <figcaption style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <h3 style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "26px" }}>
                  Results
                </h3>
                <ol style={{ margin: "0", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", fontWeight: "600", lineHeight: "1.45" }}>
                  <li>
                    Filters checked when active
                  </li>
                  <li>
                    Rating and number of reviews
                  </li>
                  <li>
                    Verification spelled out
                  </li>
                </ol>
              </figcaption>
            </figure>
            {/* C DETAIL */}
            <figure style={{ margin: "0", padding: "32px 28px", borderRadius: "32px", background: "#5457FF", color: "#FFFFFF", display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "relative", flex: "0 0 300px" }}>
                <div role="img" aria-label="Ride details screen: route from City centre at 21:51 to Central station, verified driver Ash with rating and number of rides, preferences, price and a Book button fixed at the bottom" style={{ width: "300px", height: "620px", boxSizing: "border-box", borderRadius: "44px", border: "10px solid #14152E", background: "#FFFFFF", overflow: "hidden", display: "flex", flexDirection: "column", color: "#1E1F5C", boxShadow: "0 24px 48px rgba(20,21,46,0.3)" }}>
                  <div style={{ padding: "22px 16px 12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E1F5C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 5l-7 7 7 7" />
                    </svg>
                    <span style={{ fontWeight: "800", fontSize: "15px" }}>
                      Tue, June 25
                    </span>
                  </div>
                  <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "16px", flex: "1" }}>
                    <div style={{ display: "flex", gap: "12px" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "4px" }}>
                        <span style={{ width: "12px", height: "12px", borderRadius: "50%", border: "3px solid #5457FF" }} />
                        <span style={{ width: "3px", height: "40px", background: "repeating-linear-gradient(#5457FF 0 4px, transparent 4px 8px)", margin: "4px 0" }} />
                        <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#5457FF" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        <span style={{ fontWeight: "800", fontSize: "16px" }}>
                          21:51 · City centre
                        </span>
                        <div>
                          <span style={{ fontWeight: "800", fontSize: "16px" }}>
                            Central station
                          </span>
                          {" "}<br />
                          <span style={{ fontSize: "11px", fontWeight: "700", color: "#2A2CB0" }}>
                            Route in Maps
                          </span>
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: "14px", borderRadius: "18px", background: "#EEEFFF", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#5457FF", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800" }}>
                          A
                        </span>
                        <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
                          <span style={{ fontWeight: "800", fontSize: "14px" }}>
                            Ash
                          </span>
                          <span style={{ fontSize: "11px", fontWeight: "700" }}>
                            ★ 4.9 · 32 reviews · 41 rides
                          </span>
                        </div>
                        <span style={{ padding: "7px 10px", borderRadius: "10px", background: "#FFFFFF", fontSize: "11px", fontWeight: "800", color: "#2A2CB0" }}>
                          Message
                        </span>
                      </div>
                      <span style={{ fontSize: "11px", fontWeight: "700", color: "#0D5C42" }}>
                        ✓ Phone verified
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <span style={{ padding: "6px 10px", borderRadius: "999px", background: "#F2F2FA", fontSize: "11px", fontWeight: "700" }}>
                        ✓ Luggage
                      </span>
                      <span style={{ padding: "6px 10px", borderRadius: "999px", background: "#F2F2FA", fontSize: "11px", fontWeight: "700" }}>
                        ✓ Non-smoking
                      </span>
                      <span style={{ padding: "6px 10px", borderRadius: "999px", background: "#F2F2FA", fontSize: "11px", fontWeight: "700", color: "#4A4B6A" }}>
                        ✕ Pets
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: "14px 16px 16px", borderTop: "1px solid #E2E3F0", display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontWeight: "800", fontSize: "17px" }}>
                        2,000 DA
                      </span>
                      <span style={{ fontSize: "11px", fontWeight: "600", color: "#5E607E" }}>
                        per seat
                      </span>
                    </div>
                    <span style={{ flex: "1", padding: "13px", borderRadius: "14px", background: "#5457FF", color: "#FFFFFF", textAlign: "center", fontWeight: "800", fontSize: "14px" }}>
                      Book
                    </span>
                  </div>
                </div>
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "76px", width: "34px", height: "34px", borderRadius: "50%", background: "#1E1F5C", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  1
                </span>
                {" "}
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "196px", width: "34px", height: "34px", borderRadius: "50%", background: "#1E1F5C", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  2
                </span>
                {" "}
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "556px", width: "34px", height: "34px", borderRadius: "50%", background: "#1E1F5C", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  3
                </span>
              </div>
              <figcaption style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <h3 style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "26px" }}>
                  Ride details
                </h3>
                <ol style={{ margin: "0", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", fontWeight: "600", lineHeight: "1.45" }}>
                  <li>
                    Compact route, map one tap away
                  </li>
                  <li>
                    Driver and proof of reliability
                  </li>
                  <li>
                    “Book” fixed in the thumb zone
                  </li>
                </ol>
              </figcaption>
            </figure>
            {/* D PUBLIER */}
            <figure style={{ margin: "0", padding: "32px 28px", borderRadius: "32px", background: "#EEEFFF", display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "relative", flex: "0 0 300px" }}>
                <div role="img" aria-label="Posting screen, step 2 of 3: available seats with minus and plus buttons, price per seat with suggested price, preferences as toggles, Continue button" style={{ width: "300px", height: "620px", boxSizing: "border-box", borderRadius: "44px", border: "10px solid #14152E", background: "#FFFFFF", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 24px 48px rgba(30,31,92,0.2)" }}>
                  <div style={{ padding: "22px 16px 10px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "800", color: "#2A2CB0" }}>
                      STEP 2 OF 3
                    </span>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <span style={{ flex: "1", height: "5px", borderRadius: "3px", background: "#5457FF" }} />
                      <span style={{ flex: "1", height: "5px", borderRadius: "3px", background: "#5457FF" }} />
                      <span style={{ flex: "1", height: "5px", borderRadius: "3px", background: "#E2E3F0" }} />
                    </div>
                    <span style={{ fontWeight: "800", fontSize: "20px" }}>
                      Seats and price
                    </span>
                  </div>
                  <div style={{ padding: "6px 16px", display: "flex", flexDirection: "column", gap: "18px", flex: "1" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontWeight: "700", fontSize: "14px" }}>
                        Seats
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ width: "36px", height: "36px", borderRadius: "50%", border: "2px solid #1E1F5C", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800" }}>
                          −
                        </span>
                        <span style={{ fontWeight: "800", fontSize: "18px" }}>
                          3
                        </span>
                        <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#5457FF", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800" }}>
                          +
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#5E607E" }}>
                        Price per seat
                      </span>
                      <div style={{ display: "flex", alignItems: "center", padding: "11px 12px", borderRadius: "12px", border: "2px solid #5457FF" }}>
                        <span style={{ flex: "1", fontWeight: "800", fontSize: "16px" }}>
                          1,200
                        </span>
                        <span style={{ fontWeight: "800", fontSize: "13px" }}>
                          DA
                        </span>
                      </div>
                      <span style={{ padding: "6px 8px", borderRadius: "8px", background: "#EEEFFF", fontSize: "11px", fontWeight: "700", color: "#2A2CB0" }}>
                        Suggested price: 1,000 – 1,400 DA
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#5E607E" }}>
                        Preferences
                      </span>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "13px", fontWeight: "700" }}>
                          Luggage accepted
                        </span>
                        <span style={{ width: "42px", height: "24px", borderRadius: "12px", background: "#5457FF", display: "flex", justifyContent: "flex-end", padding: "3px", boxSizing: "border-box" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#FFFFFF" }} />
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "13px", fontWeight: "700" }}>
                          Pets accepted
                        </span>
                        <span style={{ width: "42px", height: "24px", borderRadius: "12px", background: "#9C9DB3", display: "flex", padding: "3px", boxSizing: "border-box" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#FFFFFF" }} />
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "13px", fontWeight: "700" }}>
                          Non-smoking
                        </span>
                        <span style={{ width: "42px", height: "24px", borderRadius: "12px", background: "#5457FF", display: "flex", justifyContent: "flex-end", padding: "3px", boxSizing: "border-box" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#FFFFFF" }} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "14px 16px 16px" }}>
                    <span style={{ display: "block", padding: "13px", borderRadius: "14px", background: "#5457FF", color: "#FFFFFF", textAlign: "center", fontWeight: "800", fontSize: "14px" }}>
                      Continue
                    </span>
                  </div>
                </div>
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "42px", width: "34px", height: "34px", borderRadius: "50%", background: "#1E1F5C", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  1
                </span>
                {" "}
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "222px", width: "34px", height: "34px", borderRadius: "50%", background: "#1E1F5C", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  2
                </span>
                {" "}
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "330px", width: "34px", height: "34px", borderRadius: "50%", background: "#1E1F5C", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  3
                </span>
              </div>
              <figcaption style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <h3 style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "26px" }}>
                  Post a ride
                </h3>
                <ol style={{ margin: "0", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", fontWeight: "600", lineHeight: "1.45" }}>
                  <li>
                    3 steps, visible progress
                  </li>
                  <li>
                    A suggested price to help decide
                  </li>
                  <li>
                    Clear toggles, phrased positively
                  </li>
                </ol>
              </figcaption>
            </figure>
            {/* E NOTIFICATIONS */}
            <figure style={{ margin: "0", padding: "32px 28px", borderRadius: "32px", background: "#5457FF", color: "#FFFFFF", display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "relative", flex: "0 0 300px" }}>
                <div role="img" aria-label="Notifications screen grouped by day: new request with Accept and Decline buttons, accepted request in green, declined request in red with a link to other rides, ride posted" style={{ width: "300px", height: "620px", boxSizing: "border-box", borderRadius: "44px", border: "10px solid #14152E", background: "#F7F7FB", overflow: "hidden", display: "flex", flexDirection: "column", color: "#1E1F5C", boxShadow: "0 24px 48px rgba(20,21,46,0.3)" }}>
                  <div style={{ padding: "22px 16px 12px", background: "#FFFFFF", borderBottom: "1px solid #E2E3F0" }}>
                    <span style={{ fontWeight: "800", fontSize: "20px" }}>
                      Notifications
                    </span>
                  </div>
                  <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "800", color: "#5E607E" }}>
                      TODAY
                    </span>
                    <div style={{ padding: "14px", borderRadius: "16px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "0 4px 12px rgba(30,31,92,0.06)" }}>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <span style={{ flex: "0 0 30px", height: "30px", borderRadius: "50%", background: "#5457FF", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "14px" }}>
                          ?
                        </span>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "13px", fontWeight: "800" }}>
                            New request
                          </span>
                          <span style={{ fontSize: "12px", fontWeight: "600", color: "#4A4B6A" }}>
                            Sara · City centre → Central station
                          </span>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <span style={{ flex: "1", padding: "9px", borderRadius: "10px", background: "#5457FF", color: "#FFFFFF", textAlign: "center", fontSize: "12px", fontWeight: "800" }}>
                          Accept
                        </span>
                        <span style={{ flex: "1", padding: "9px", borderRadius: "10px", border: "1.5px solid #1E1F5C", textAlign: "center", fontSize: "12px", fontWeight: "800" }}>
                          Decline
                        </span>
                      </div>
                    </div>
                    <div style={{ padding: "14px", borderRadius: "16px", background: "#FFFFFF", display: "flex", gap: "10px", boxShadow: "0 4px 12px rgba(30,31,92,0.06)" }}>
                      <span style={{ flex: "0 0 30px", height: "30px", borderRadius: "50%", background: "#12805C", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "14px" }}>
                        ✓
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "800" }}>
                          Request accepted
                        </span>
                        <span style={{ fontSize: "12px", fontWeight: "600", color: "#4A4B6A" }}>
                          Central station → City centre · 14:20
                        </span>
                      </div>
                    </div>
                    <span style={{ fontSize: "11px", fontWeight: "800", color: "#5E607E", marginTop: "4px" }}>
                      JUNE 8
                    </span>
                    <div style={{ padding: "14px", borderRadius: "16px", background: "#FFFFFF", display: "flex", gap: "10px", boxShadow: "0 4px 12px rgba(30,31,92,0.06)" }}>
                      <span style={{ flex: "0 0 30px", height: "30px", borderRadius: "50%", background: "#C2261E", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "14px" }}>
                        ✕
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "800" }}>
                          Request declined
                        </span>
                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#2A2CB0" }}>
                          See other rides
                        </span>
                      </div>
                    </div>
                    <div style={{ padding: "14px", borderRadius: "16px", background: "#FFFFFF", display: "flex", gap: "10px", boxShadow: "0 4px 12px rgba(30,31,92,0.06)" }}>
                      <span style={{ flex: "0 0 30px", height: "30px", borderRadius: "50%", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "14px" }}>
                        ↑
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "800" }}>
                          Ride posted
                        </span>
                        <span style={{ fontSize: "12px", fontWeight: "600", color: "#4A4B6A" }}>
                          Campus → Airport · 21:48
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "150px", width: "34px", height: "34px", borderRadius: "50%", background: "#1E1F5C", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  1
                </span>
                {" "}
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "222px", width: "34px", height: "34px", borderRadius: "50%", background: "#1E1F5C", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  2
                </span>
                {" "}
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "324px", width: "34px", height: "34px", borderRadius: "50%", background: "#1E1F5C", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  3
                </span>
              </div>
              <figcaption style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <h3 style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "26px" }}>
                  Notifications
                </h3>
                <ol style={{ margin: "0", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", fontWeight: "600", lineHeight: "1.45" }}>
                  <li>
                    Reply without opening
                  </li>
                  <li>
                    Every status has its icon
                  </li>
                  <li>
                    A decline suggests a next step
                  </li>
                </ol>
              </figcaption>
            </figure>
            {/* F MESSAGES */}
            <figure style={{ margin: "0", padding: "32px 28px", borderRadius: "32px", background: "#1E1F5C", color: "#FFFFFF", display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "relative", flex: "0 0 300px" }}>
                <div role="img" aria-label="Conversation screen: header recalling the booked ride from City centre to Central station, messages between Sara and Ash, quick replies and text field" style={{ width: "300px", height: "620px", boxSizing: "border-box", borderRadius: "44px", border: "10px solid #000000", background: "#FFFFFF", overflow: "hidden", display: "flex", flexDirection: "column", color: "#1E1F5C", boxShadow: "0 24px 48px rgba(0,0,0,0.3)" }}>
                  <div style={{ padding: "20px 14px 12px", display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid #E2E3F0" }}>
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E1F5C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 5l-7 7 7 7" />
                    </svg>
                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#5457FF", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "13px" }}>
                      A
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", fontWeight: "800", fontSize: "14px" }}>
                      Ash
                      <span style={{ fontSize: "10px", fontWeight: "700", color: "#0D5C42" }}>
                        ✓ Verified
                      </span>
                    </span>
                  </div>
                  <div style={{ margin: "10px 12px", padding: "10px 12px", borderRadius: "14px", background: "#EEEFFF", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ display: "flex", flexDirection: "column", fontSize: "12px", fontWeight: "800" }}>
                      City centre → Central station
                      <span style={{ fontSize: "11px", fontWeight: "600", color: "#4A4B6A" }}>
                        Tue, June 25 · 21:51
                      </span>
                    </span>
                    <span style={{ padding: "4px 8px", borderRadius: "8px", background: "#E3F4EC", color: "#0D5C42", fontSize: "10px", fontWeight: "800" }}>
                      ✓ Booked
                    </span>
                  </div>
                  <div style={{ padding: "6px 12px", display: "flex", flexDirection: "column", gap: "8px", flex: "1" }}>
                    <span style={{ alignSelf: "center", fontSize: "10px", fontWeight: "700", color: "#5E607E" }}>
                      Today
                    </span>
                    {" "}
                    <span style={{ alignSelf: "flex-end", maxWidth: "75%", padding: "10px 12px", borderRadius: "16px 16px 4px 16px", background: "#5457FF", color: "#FFFFFF", fontSize: "12px", fontWeight: "600" }}>
                      Hi, where is the pick-up point?
                    </span>
                    {" "}
                    <span style={{ alignSelf: "flex-start", maxWidth: "75%", padding: "10px 12px", borderRadius: "16px 16px 16px 4px", background: "#F2F2FA", fontSize: "12px", fontWeight: "600" }}>
                      In front of the bus station, at 21:45.
                    </span>
                    {" "}
                    <span style={{ alignSelf: "flex-end", maxWidth: "75%", padding: "10px 12px", borderRadius: "16px 16px 4px 16px", background: "#5457FF", color: "#FFFFFF", fontSize: "12px", fontWeight: "600" }}>
                      Perfect, thanks!
                    </span>
                  </div>
                  <div style={{ padding: "0 12px 8px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    <span style={{ padding: "7px 10px", borderRadius: "999px", border: "1.5px solid #5457FF", color: "#2A2CB0", fontSize: "11px", fontWeight: "700" }}>
                      I'm on my way
                    </span>
                    <span style={{ padding: "7px 10px", borderRadius: "999px", border: "1.5px solid #5457FF", color: "#2A2CB0", fontSize: "11px", fontWeight: "700" }}>
                      I'll be there in 5 min
                    </span>
                  </div>
                  <div style={{ padding: "10px 12px 14px", borderTop: "1px solid #E2E3F0", display: "flex", gap: "8px", alignItems: "center" }}>
                    <span style={{ flex: "1", padding: "10px 12px", borderRadius: "999px", background: "#F2F2FA", fontSize: "12px", fontWeight: "600", color: "#5E607E" }}>
                      Write a message
                    </span>
                    <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#5457FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "92px", width: "34px", height: "34px", borderRadius: "50%", background: "#5457FF", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  1
                </span>
                {" "}
                <span aria-hidden="true" style={{ position: "absolute", right: "-14px", top: "508px", width: "34px", height: "34px", borderRadius: "50%", background: "#5457FF", color: "#FFFFFF", border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "15px" }}>
                  2
                </span>
              </div>
              <figcaption style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <h3 style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "26px" }}>
                  Messaging
                </h3>
                <ol style={{ margin: "0", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", fontWeight: "600", lineHeight: "1.45" }}>
                  <li>
                    The ride recalled in the header
                  </li>
                  <li>
                    Quick replies, in one tap
                  </li>
                </ol>
              </figcaption>
            </figure>
          </div>
        </section>
        {/* 06 DESIGN SYSTEM */}
        <section id="design-system" aria-labelledby="t-ds" style={{ background: "#FFFFFF" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px", display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em", color: "#2A2CB0" }}>
                06 · DESIGN SYSTEM
              </p>
              <h2 id="t-ds" style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "clamp(30px, 3.8vw, 48px)", lineHeight: "1.1" }}>
                Keep the DNA, gain clarity
              </h2>
            </div>
            <ul aria-label="Colour palette" style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: "12px" }}>
              <li style={{ gridRow: "span 2", minHeight: "260px", padding: "20px", borderRadius: "26px", background: "#5457FF", color: "#FFFFFF", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <p style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "24px" }}>
                  Wassalni
                </p>
                <p style={{ margin: "4px 0 0", fontSize: "13px", fontWeight: "700" }}>
                  #5457FF · white text 5.0:1
                </p>
              </li>
              <li style={{ minHeight: "124px", padding: "18px", borderRadius: "22px", background: "#1E1F5C", color: "#FFFFFF", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <p style={{ margin: "0", fontWeight: "800" }}>
                  Night
                </p>
                <p style={{ margin: "2px 0 0", fontSize: "12px", fontWeight: "700" }}>
                  #1E1F5C · 15:1
                </p>
              </li>
              <li style={{ minHeight: "124px", padding: "18px", borderRadius: "22px", background: "#EEEFFF", color: "#1E1F5C", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <p style={{ margin: "0", fontWeight: "800" }}>
                  Mist
                </p>
                <p style={{ margin: "2px 0 0", fontSize: "12px", fontWeight: "700" }}>
                  #EEEFFF
                </p>
              </li>
              <li style={{ minHeight: "124px", padding: "18px", borderRadius: "22px", background: "#12805C", color: "#FFFFFF", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <p style={{ margin: "0", fontWeight: "800" }}>
                  Success
                </p>
                <p style={{ margin: "2px 0 0", fontSize: "12px", fontWeight: "700" }}>
                  #12805C · 4.9:1
                </p>
              </li>
              <li style={{ minHeight: "124px", padding: "18px", borderRadius: "22px", background: "#C2261E", color: "#FFFFFF", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <p style={{ margin: "0", fontWeight: "800" }}>
                  Error
                </p>
                <p style={{ margin: "2px 0 0", fontSize: "12px", fontWeight: "700" }}>
                  #C2261E · 5.9:1
                </p>
              </li>
              <li style={{ minHeight: "124px", padding: "18px", borderRadius: "22px", background: "#F2F2FA", color: "#1E1F5C", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <p style={{ margin: "0", fontWeight: "800" }}>
                  Background
                </p>
                <p style={{ margin: "2px 0 0", fontSize: "12px", fontWeight: "700" }}>
                  #F2F2FA
                </p>
              </li>
            </ul>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "16px" }}>
              <div style={{ padding: "28px", borderRadius: "26px", background: "#F7F7FB", display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
                <p aria-hidden="true" style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "120px", lineHeight: "0.85", color: "#5457FF" }}>
                  Aa
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontSize: "14px", fontWeight: "800", letterSpacing: "0.08em", color: "#5E607E" }}>
                    MONTSERRAT
                  </h3>
                  <p style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "24px" }}>
                    Title · 900 italic
                  </p>
                  <p style={{ margin: "0", fontWeight: "800", fontSize: "18px" }}>
                    Subtitle · 800
                  </p>
                  <p style={{ margin: "0", fontWeight: "700", fontSize: "15px" }}>
                    Label · 700
                  </p>
                  <p style={{ margin: "0", fontWeight: "500", fontSize: "14px", color: "#4A4B6A" }}>
                    Body · 500
                  </p>
                </div>
              </div>
              <div style={{ padding: "28px", borderRadius: "26px", background: "#F7F7FB", display: "flex", flexDirection: "column", gap: "16px" }}>
                <h3 style={{ margin: "0", fontSize: "14px", fontWeight: "800", letterSpacing: "0.08em", color: "#5E607E" }}>
                  COMPONENTS
                </h3>
                <div aria-hidden="true" style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
                  <span style={{ padding: "13px 20px", borderRadius: "14px", background: "#5457FF", color: "#FFFFFF", fontWeight: "800", fontSize: "14px" }}>
                    Book
                  </span>
                  {" "}
                  <span style={{ padding: "11px 18px", borderRadius: "14px", border: "2px solid #1E1F5C", fontWeight: "800", fontSize: "14px" }}>
                    Decline
                  </span>
                  {" "}
                  <span style={{ padding: "7px 12px", borderRadius: "999px", background: "#1E1F5C", color: "#FFFFFF", fontSize: "13px", fontWeight: "700" }}>
                    ✓ Luggage
                  </span>
                  {" "}
                  <span style={{ padding: "6px 10px", borderRadius: "8px", background: "#E3F4EC", color: "#0D5C42", fontSize: "12px", fontWeight: "800" }}>
                    ✓ Verified profile
                  </span>
                  {" "}
                  <span style={{ width: "46px", height: "26px", borderRadius: "13px", background: "#5457FF", display: "flex", justifyContent: "flex-end", padding: "3px", boxSizing: "border-box" }}>
                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#FFFFFF" }} />
                  </span>
                  {" "}
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", border: "2px solid #1E1F5C", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800" }}>
                      −
                    </span>
                    <span style={{ fontWeight: "800" }}>
                      2
                    </span>
                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#5457FF", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800" }}>
                      +
                    </span>
                  </span>
                </div>
                <div aria-hidden="true" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 11 12 4l9 7" />
                      <path d="M5 10v10h14V10" />
                    </svg>
                  </span>
                  {" "}
                  <span style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-3.5-3.5" />
                    </svg>
                  </span>
                  {" "}
                  <span style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  {" "}
                  <span style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M3 10h18M8 3v4M16 3v4" />
                    </svg>
                  </span>
                  {" "}
                  <span style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="7" width="12" height="13" rx="2" />
                      <path d="M9 7V4h6v3M10 11v5M14 11v5" />
                    </svg>
                  </span>
                  {" "}
                  <span style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                  </span>
                  {" "}
                  <span style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#EEEFFF", color: "#2A2CB0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" />
                      <path d="m8.5 12 2.5 2.5 4.5-5" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            {/* accessibility strip */}
            <div style={{ padding: "28px", borderRadius: "26px", background: "#1E1F5C", color: "#FFFFFF", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center" }}>
              <h3 style={{ flex: "1 1 220px", margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "26px", lineHeight: "1.15" }}>
                Accessible, even standing in a station
              </h3>
              <ul style={{ flex: "3 1 480px", listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px", fontSize: "14px", fontWeight: "700" }}>
                <li style={{ padding: "14px", borderRadius: "16px", background: "#2C2E7A" }}>
                  AA contrast checked
                </li>
                <li style={{ padding: "14px", borderRadius: "16px", background: "#2C2E7A" }}>
                  44 px targets
                </li>
                <li style={{ padding: "14px", borderRadius: "16px", background: "#2C2E7A" }}>
                  Never colour alone
                </li>
                <li style={{ padding: "14px", borderRadius: "16px", background: "#2C2E7A" }}>
                  Screen readers
                </li>
                <li style={{ padding: "14px", borderRadius: "16px", background: "#2C2E7A" }}>
                  System text size
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* 07 SUITE */}
        <section id="suite" aria-labelledby="t-suite-titre" style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px", display: "flex", flexDirection: "column", gap: "32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em", color: "#2A2CB0" }}>
              07 · WHAT'S NEXT
            </p>
            <h2 id="t-suite-titre" style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "clamp(30px, 3.8vw, 48px)", lineHeight: "1.1" }}>
              Test, then iterate
            </h2>
            <p style={{ margin: "0", fontSize: "15px", fontWeight: "600", color: "#5E607E" }}>
              Figma prototype · 5 passengers and 3 drivers · V1 vs V2
            </p>
          </div>
          <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: "14px" }}>
            <li style={{ padding: "22px", borderRadius: "22px", background: "#FFFFFF", boxShadow: "0 8px 24px rgba(30,31,92,0.06)", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ alignSelf: "flex-start", padding: "4px 10px", borderRadius: "8px", background: "#FFF3E0", color: "#7A4500", fontSize: "12px", fontWeight: "800" }}>
                To test
              </span>
              <p style={{ margin: "0", fontWeight: "800", fontSize: "16px", lineHeight: "1.4" }}>
                Find a ride in under 60 s
              </p>
            </li>
            <li style={{ padding: "22px", borderRadius: "22px", background: "#FFFFFF", boxShadow: "0 8px 24px rgba(30,31,92,0.06)", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ alignSelf: "flex-start", padding: "4px 10px", borderRadius: "8px", background: "#FFF3E0", color: "#7A4500", fontSize: "12px", fontWeight: "800" }}>
                To test
              </span>
              <p style={{ margin: "0", fontWeight: "800", fontSize: "16px", lineHeight: "1.4" }}>
                Choose the most reliable driver
              </p>
            </li>
            <li style={{ padding: "22px", borderRadius: "22px", background: "#FFFFFF", boxShadow: "0 8px 24px rgba(30,31,92,0.06)", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ alignSelf: "flex-start", padding: "4px 10px", borderRadius: "8px", background: "#FFF3E0", color: "#7A4500", fontSize: "12px", fontWeight: "800" }}>
                To test
              </span>
              <p style={{ margin: "0", fontWeight: "800", fontSize: "16px", lineHeight: "1.4" }}>
                Post a ride with luggage
              </p>
            </li>
            <li style={{ padding: "22px", borderRadius: "22px", background: "#FFFFFF", boxShadow: "0 8px 24px rgba(30,31,92,0.06)", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ alignSelf: "flex-start", padding: "4px 10px", borderRadius: "8px", background: "#FFF3E0", color: "#7A4500", fontSize: "12px", fontWeight: "800" }}>
                To test
              </span>
              <p style={{ margin: "0", fontWeight: "800", fontSize: "16px", lineHeight: "1.4" }}>
                Know whether a request was accepted
              </p>
            </li>
          </ul>
        </section>
        {/* 08 RETIENS */}
        <section id="retiens" aria-labelledby="t-retiens" style={{ background: "#1E1F5C", color: "#FFFFFF" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em", color: "#C9CAFF" }}>
                08 · TAKEAWAYS
              </p>
              <h2 id="t-retiens" style={{ margin: "0", fontStyle: "italic", fontWeight: "900", fontSize: "clamp(30px, 3.8vw, 48px)", lineHeight: "1.1" }}>
                From code that works to a product people choose
              </h2>
            </div>
            <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "16px" }}>
              <li style={{ padding: "28px", borderRadius: "26px", background: "#2C2E7A", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span aria-hidden="true" style={{ fontStyle: "italic", fontWeight: "900", fontSize: "44px", lineHeight: "1", color: "#C9CAFF" }}>
                  1
                </span>
                <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "800" }}>
                  Working isn't enough
                </h3>
                <p style={{ margin: "0", fontSize: "15px", fontWeight: "500", lineHeight: "1.55", color: "#E4E4FF" }}>
                  V1 did everything it was meant to, but nothing made you want to book.
                </p>
              </li>
              <li style={{ padding: "28px", borderRadius: "26px", background: "#2C2E7A", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span aria-hidden="true" style={{ fontStyle: "italic", fontWeight: "900", fontSize: "44px", lineHeight: "1", color: "#C9CAFF" }}>
                  2
                </span>
                <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "800" }}>
                  Trust is designed
                </h3>
                <p style={{ margin: "0", fontSize: "15px", fontWeight: "500", lineHeight: "1.55", color: "#E4E4FF" }}>
                  It isn't one more feature: it's the thread running through every screen.
                </p>
              </li>
              <li style={{ padding: "28px", borderRadius: "26px", background: "#2C2E7A", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span aria-hidden="true" style={{ fontStyle: "italic", fontWeight: "900", fontSize: "44px", lineHeight: "1", color: "#C9CAFF" }}>
                  3
                </span>
                <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "800" }}>
                  Auditing your own work
                </h3>
                <p style={{ margin: "0", fontSize: "15px", fontWeight: "500", lineHeight: "1.55", color: "#E4E4FF" }}>
                  Looking at it through a user's eyes is the first step of design.
                </p>
              </li>
            </ul>
            <blockquote style={{ margin: "0", padding: "36px", borderRadius: "30px", background: "#5457FF", fontStyle: "italic", fontWeight: "900", fontSize: "clamp(22px, 2.6vw, 32px)", lineHeight: "1.3", color: "#FFFFFF" }}>
              “I had thought of Wassalni in terms of features. The audit taught me that, in carpooling, trust is designed on every screen.”
            </blockquote>
          </div>
        </section>
        {/* NEXT */}
        <section aria-labelledby="t-next" style={{ background: "#5457FF", color: "#FFFFFF", position: "relative", overflow: "hidden" }}>
          <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 1440 300" preserveAspectRatio="xMidYMid slice" fill="none" style={{ position: "absolute", inset: "0" }}>
            <path d="M-40 240 C 300 160 600 280 900 200 S 1300 120 1500 180" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="3" strokeDasharray="2 14" strokeLinecap="round" />
          </svg>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "72px 24px", display: "flex", flexWrap: "wrap", gap: "28px", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2 id="t-next" style={{ margin: "0", fontSize: "14px", fontWeight: "800", letterSpacing: "0.1em" }}>
                NEXT CASE STUDY
              </h2>
              <a href="/projects/sanou-va-bien/" style={{ color: "#FFFFFF", fontStyle: "italic", fontWeight: "900", fontSize: "clamp(22px, 2.6vw, 32px)" }}>
                Sanou va bien, a stage open to everyone
              </a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="/#travaux" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 24px", borderRadius: "16px", border: "2px solid #FFFFFF", color: "#FFFFFF", fontWeight: "800", textDecoration: "none" }}>
                All case studies
              </a>
              {" "}
              <a href="mailto:ie.belouettar@gmail.com" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 24px", borderRadius: "16px", background: "#FFFFFF", color: "#1E1F5C", fontWeight: "800", textDecoration: "none" }}>
                Contact me
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer style={{ background: "#1E1F5C", color: "#FFFFFF" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "22px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", fontSize: "14px", fontWeight: "600" }}>
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

export default WassalniCaseStudy;
