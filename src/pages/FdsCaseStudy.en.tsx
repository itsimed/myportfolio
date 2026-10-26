import type { CSSProperties } from 'react';
import LanguageSwitch from '../components/LanguageSwitch';
import Signature from '../components/Signature';
import { usePageMeta } from '../hooks/usePageMeta';
import '../styles/redesign.css';

// Généré à partir de la maquette « Story-fds.dc.html » (FDS Institut), puis relu.
// Les styles restent en ligne pour garantir un rendu identique à la maquette.
const FdsCaseStudy = () => {
  usePageMeta({
    title: "FDS Institut – Case study – Imed Belouettar",
    description: "From paper to platform: the website, learner space and back office of a language institute, designed and built on my own.",
    background: "#FFFCF5",
  });

  return (
    <div className="rd rd-fds" style={{ fontFamily: "'Montserrat', sans-serif", color: "#001829", background: "#FFFCF5", width: "100%", overflow: "hidden" }}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header style={{ borderBottom: "1px solid #EDE5D6", background: "#FFFCF5" }}>
        <nav aria-label="Main navigation" className="cs-nav" style={{ maxWidth: "1240px", margin: "0 auto", padding: "16px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", color: "#001829", textDecoration: "none" }}>
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 5l-7 7 7 7" />
            </svg>
            {" "}
            <span className="sr-only">
              Imed Belouettar's portfolio
            </span>
            <Signature height={32} /></a>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px" }}>
            <LanguageSwitch color="#001829" /><a href="mailto:ie.belouettar@gmail.com" className="cs-nav__cta" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", borderRadius: "999px", background: "#001829", color: "#FFFCF5", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
              Contact me
            </a>
          </div>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1}>
        <section style={{ position: "relative", padding: "80px 24px 110px", background: "radial-gradient(120% 90% at 85% 30%, #FFE8D1 0%, #FFFCF5 55%)" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px" }}>
            <div style={{ flex: "1 1 420px", minWidth: "0", position: "relative", zIndex: "2" }}>
              <nav aria-label="Breadcrumb">
                <ol style={{ listStyle: "none", margin: "0 0 22px", padding: "0", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#2A3B4A" }}>
                  <li>
                    <a href="/">
                      Home
                    </a>
                  </li>
                  <li aria-hidden="true">
                    /
                  </li>
                  <li>
                    <a href="/#travaux">
                      Case studies
                    </a>
                  </li>
                  <li aria-hidden="true">
                    /
                  </li>
                  <li aria-current="page">
                    FDS Institut
                  </li>
                </ol>
              </nav>
              <p className="mono" style={{ margin: "0 0 22px", fontSize: "13px", color: "#6B6157" }}>
                a story in seven chapters
              </p>
              <h1 style={{ margin: "0", fontSize: "clamp(56px, 8vw, 118px)", lineHeight: "0.9", fontWeight: "800", letterSpacing: "-0.05em" }}>
                FDS
                {" "}<br />
                Institut
              </h1>
              <p style={{ margin: "14px 0 0", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(28px, 3.4vw, 44px)", color: "#C24F00" }}>
                from paper to platform
              </p>
              <p style={{ margin: "28px 0 0", maxWidth: "470px", fontSize: "18px", lineHeight: "1.6", color: "#2A3B4A" }}>
                The story of a language institute that ran on handwritten receipts — and the platform I designed and built, on my own, to replace them.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "28px" }}>
                <span style={{ padding: "8px 14px", borderRadius: "999px", background: "#001829", color: "#FFFCF5", fontSize: "13px", fontWeight: "600" }}>
                  Education
                </span>
                {" "}
                <span style={{ padding: "8px 14px", borderRadius: "999px", border: "1.5px solid #001829", fontSize: "13px", fontWeight: "600" }}>
                  Apr – Sep 2026
                </span>
                {" "}
                <span style={{ padding: "8px 14px", borderRadius: "999px", border: "1.5px solid #001829", fontSize: "13px", fontWeight: "600" }}>
                  Six months
                </span>
                {" "}
                <span style={{ padding: "8px 14px", borderRadius: "999px", border: "1.5px solid #001829", fontSize: "13px", fontWeight: "600" }}>
                  {"Sole designer & developer"}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FFE3C7", fontSize: "12px" }}>
                  Stakeholder interviews
                </span>
                {" "}
                <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FFE3C7", fontSize: "12px" }}>
                  Process audit
                </span>
                {" "}
                <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FFE3C7", fontSize: "12px" }}>
                  User flow
                </span>
                {" "}
                <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FFE3C7", fontSize: "12px" }}>
                  Wireframe
                </span>
                {" "}
                <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FFE3C7", fontSize: "12px" }}>
                  Design system
                </span>
                {" "}
                <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FFE3C7", fontSize: "12px" }}>
                  Next.js · Supabase
                </span>
              </div>
            </div>
            <div aria-hidden="true" style={{ flex: "1 1 560px", minWidth: "0", position: "relative", height: "560px", perspective: "1600px" }}>
              <div className="floaty" style={{ "--r": "0deg", position: "absolute", top: "10px", right: "40px", width: "130px", height: "130px", borderRadius: "50%", background: "radial-gradient(circle at 32% 30%, #FFB066, #FF7700 55%, #C24F00)", boxShadow: "0 30px 40px -18px rgba(194,79,0,.6)" } as CSSProperties} />
              <div className="floaty2" style={{ "--r": "18deg", position: "absolute", bottom: "30px", left: "10px", width: "92px", height: "92px", borderRadius: "10px", background: "linear-gradient(145deg, #0B3A5C, #001829)", boxShadow: "0 26px 36px -16px rgba(0,24,41,.6)" } as CSSProperties} />
              <div className="floaty" style={{ "--r": "-10deg", position: "absolute", top: "40px", left: "30px", width: "0", height: "0", borderLeft: "50px solid transparent", borderRight: "50px solid transparent", borderBottom: "86px solid #F4C04E", filter: "drop-shadow(0 20px 18px rgba(160,110,0,.35))" } as CSSProperties} />
              <div style={{ position: "absolute", left: "50%", top: "52%", width: "470px", maxWidth: "86%", transform: "translate(-50%, -50%) rotateX(16deg) rotateY(-20deg) rotateZ(3deg)", transformStyle: "preserve-3d" }}>
                <div style={{ padding: "12px 12px 16px", borderRadius: "18px 18px 4px 4px", background: "linear-gradient(#24323F, #0C141B)", boxShadow: "0 50px 70px -30px rgba(0,24,41,.7)" }}>
                  <img src="/projects/fds/accueil-ordinateur.webp" alt="" width="800" height="499" style={{ display: "block", width: "100%", aspectRatio: "800 / 499", objectFit: "cover", borderRadius: "4px" }} />
                </div>
                <div style={{ height: "16px", margin: "0 -34px", borderRadius: "2px 2px 20px 20px", background: "linear-gradient(#E7E1D6, #B9B1A3)", boxShadow: "0 24px 30px -12px rgba(0,24,41,.5)" }} />
              </div>
              <div className="paper floaty" style={{ "--r": "-12deg", position: "absolute", top: "70px", left: "18%", width: "150px", padding: "12px 14px", borderRadius: "4px" } as CSSProperties}>
                <p className="hand" style={{ margin: "0", fontSize: "18px", color: "#1F3B8A", lineHeight: "1.1" }}>
                  Reçu
                </p>
                <p className="hand" style={{ margin: "4px 0 0", fontSize: "16px", color: "#1F3B8A", lineHeight: "1.15" }}>
                  Yasmine B. — B1
                  {" "}<br />
                  cours du soir
                </p>
                <span style={{ display: "block", marginTop: "8px", height: "1px", background: "#D9CFBD" }} />
              </div>
              <div className="paper floaty2" style={{ "--r": "9deg", position: "absolute", top: "18px", left: "52%", width: "130px", padding: "12px 14px", borderRadius: "4px" } as CSSProperties}>
                <p className="hand" style={{ margin: "0", fontSize: "17px", color: "#1F3B8A" }}>
                  Reçu
                </p>
                <p className="hand" style={{ margin: "2px 0 0", fontSize: "15px", color: "#1F3B8A" }}>
                  Karim L. — A2
                </p>
                <span className="stamp" style={{ position: "absolute", right: "8px", bottom: "6px", padding: "2px 8px", border: "2px solid #C8372D", color: "#C8372D", fontWeight: "800", fontSize: "13px", letterSpacing: ".08em" }}>
                  PAYÉ
                </span>
              </div>
              <div className="paper floaty" style={{ "--r": "6deg", position: "absolute", bottom: "70px", right: "6%", width: "140px", padding: "12px 14px", borderRadius: "4px" } as CSSProperties}>
                <p className="mono" style={{ margin: "0", fontSize: "10px", color: "#6B6157" }}>
                  Prüfung · Teil A
                </p>
                <p className="hand" style={{ margin: "6px 0 0", fontSize: "16px", color: "#1F3B8A" }}>
                  1. der / die / das
                </p>
                <p className="hand" style={{ margin: "0", fontSize: "16px", color: "#C8372D" }}>
                  ✓ ✓ ✗
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "#F3EBDD", padding: "110px 24px", position: "relative" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
            <div style={{ flex: "1 1 380px", minWidth: "0" }}>
              <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#B34700" }}>
                chapter 01 — before
              </p>
              <h2 style={{ margin: "0", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", fontWeight: "800", letterSpacing: "-0.04em" }}>
                Every receipt was written by hand.
              </h2>
              <p style={{ margin: "24px 0 0", fontSize: "18px", lineHeight: "1.65", color: "#2A3B4A" }}>
                The institute ran on Excel files and paper. A learner enrolled at the desk, paid at the desk, asked about a schedule at the desk. Certificates took ages to produce. Printed tests piled up waiting to be graded.
              </p>
              <p style={{ margin: "16px 0 0", fontSize: "18px", lineHeight: "1.65", color: "#2A3B4A" }}>
                And every exam session meant one thing: closing the doors.
              </p>
            </div>
            <div aria-hidden="true" style={{ flex: "1 1 560px", minWidth: "0", position: "relative", height: "520px" }}>
              <div style={{ position: "absolute", inset: "40px 0 0 0", borderRadius: "28px", background: "linear-gradient(160deg, #C9A57A, #A57F55)", boxShadow: "inset 0 2px 0 rgba(255,255,255,.25), 0 40px 60px -30px rgba(70,40,10,.55)" }} />
              <div className="paper" style={{ position: "absolute", top: "70px", left: "6%", width: "270px", padding: "10px", borderRadius: "4px", transform: "rotate(-5deg)", background: "#FFFFFF" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "#C9D7C9" }}>
                  <span style={{ height: "16px", background: "#217346" }} />
                  <span style={{ height: "16px", background: "#217346" }} />
                  <span style={{ height: "16px", background: "#217346" }} />
                  <span style={{ height: "16px", background: "#217346" }} />
                  {" "}
                  <span style={{ height: "14px", background: "#fff" }} />
                  <span style={{ height: "14px", background: "#fff" }} />
                  <span style={{ height: "14px", background: "#fff" }} />
                  <span style={{ height: "14px", background: "#fff" }} />
                  {" "}
                  <span style={{ height: "14px", background: "#fff" }} />
                  <span style={{ height: "14px", background: "#fff" }} />
                  <span style={{ height: "14px", background: "#fff" }} />
                  <span style={{ height: "14px", background: "#fff" }} />
                  {" "}
                  <span style={{ height: "14px", background: "#fff" }} />
                  <span style={{ height: "14px", background: "#fff" }} />
                  <span style={{ height: "14px", background: "#fff" }} />
                  <span style={{ height: "14px", background: "#fff" }} />
                  {" "}
                  <span style={{ height: "14px", background: "#fff" }} />
                  <span style={{ height: "14px", background: "#fff" }} />
                  <span style={{ height: "14px", background: "#fff" }} />
                  <span style={{ height: "14px", background: "#fff" }} />
                  {" "}
                  <span style={{ height: "14px", background: "#fff" }} />
                  <span style={{ height: "14px", background: "#fff" }} />
                  <span style={{ height: "14px", background: "#fff" }} />
                  <span style={{ height: "14px", background: "#fff" }} />
                </div>
                <span style={{ position: "absolute", left: "-10px", right: "-10px", top: "50%", height: "10px", background: "rgba(255,119,0,.85)", borderRadius: "6px", transform: "rotate(-8deg)" }} />
                {" "}
                <span style={{ position: "absolute", left: "-10px", right: "-10px", top: "50%", height: "10px", background: "rgba(255,119,0,.85)", borderRadius: "6px", transform: "rotate(8deg)" }} />
              </div>
              <div className="paper" style={{ position: "absolute", top: "230px", left: "12%", width: "180px", height: "110px", borderRadius: "4px", transform: "rotate(10deg)" }} />
              <div className="paper" style={{ position: "absolute", top: "222px", left: "14%", width: "180px", height: "110px", borderRadius: "4px", transform: "rotate(-3deg)" }} />
              <div className="paper" style={{ position: "absolute", top: "214px", left: "13%", width: "180px", padding: "14px 16px", borderRadius: "4px", transform: "rotate(4deg)", boxSizing: "border-box" }}>
                <p className="hand" style={{ margin: "0", fontSize: "20px", color: "#1F3B8A" }}>
                  Reçu de paiement
                </p>
                <p className="hand" style={{ margin: "4px 0 0", fontSize: "17px", color: "#1F3B8A" }}>
                  Lina M. — B2 intensif
                </p>
                <span className="stamp" style={{ position: "absolute", right: "12px", bottom: "10px", padding: "3px 10px", border: "2.5px solid #C8372D", color: "#C8372D", fontWeight: "800", fontSize: "15px", letterSpacing: ".1em" }}>
                  PAYÉ
                </span>
              </div>
              <div className="paper" style={{ position: "absolute", top: "120px", right: "6%", width: "210px", padding: "16px 18px", borderRadius: "4px", transform: "rotate(6deg)", boxSizing: "border-box" }}>
                <p className="mono" style={{ margin: "0", fontSize: "10px", color: "#6B6157" }}>
                  Prüfung · Lesen
                </p>
                <span style={{ display: "block", height: "4px", width: "90%", marginTop: "10px", background: "#D9CFBD" }} />
                {" "}
                <span style={{ display: "block", height: "4px", width: "75%", marginTop: "8px", background: "#D9CFBD" }} />
                {" "}
                <span style={{ display: "block", height: "4px", width: "85%", marginTop: "8px", background: "#D9CFBD" }} />
                <p className="hand" style={{ margin: "12px 0 0", fontSize: "22px", color: "#C8372D" }}>
                  à corriger…
                </p>
                <span style={{ position: "absolute", right: "-12px", top: "40px", width: "90px", height: "8px", borderRadius: "4px", background: "linear-gradient(90deg, #C8372D, #8E1E15)", transform: "rotate(-35deg)", boxShadow: "0 6px 8px -4px rgba(0,0,0,.4)" }} />
              </div>
              <div style={{ position: "absolute", bottom: "30px", right: "14%", width: "200px", height: "120px" }}>
                <span style={{ position: "absolute", left: "50%", top: "0", width: "2px", height: "30px", background: "#5C4630" }} />
                <div className="swing" style={{ position: "absolute", top: "28px", left: "0", right: "0", padding: "14px", borderRadius: "10px", background: "#001829", color: "#FFFCF5", textAlign: "center", boxShadow: "0 20px 30px -14px rgba(0,0,0,.6)" }}>
                  <p style={{ margin: "0", fontWeight: "800", fontSize: "20px", letterSpacing: ".12em" }}>
                    FERMÉ
                  </p>
                  <p style={{ margin: "4px 0 0", fontSize: "12px", opacity: ".8" }}>
                    session d'examen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "#FFFCF5", padding: "110px 24px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#B34700" }}>
              chapter 02 — listening
            </p>
            <h2 style={{ margin: "0", maxWidth: "820px", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", fontWeight: "800", letterSpacing: "-0.04em" }}>
              Three people, three piles of paper.
            </h2>
            <p style={{ margin: "22px 0 0", maxWidth: "640px", fontSize: "18px", lineHeight: "1.6", color: "#2A3B4A" }}>
              I spent time at the desk, in the classrooms and with learners before drawing anything. Each one was losing time to the same problem, in a different way.
            </p>
            <div style={{ marginTop: "56px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "30px" }}>
              <figure style={{ margin: "0", position: "relative", padding: "34px 28px 28px", background: "#FFE07A", transform: "rotate(-2deg)", boxShadow: "0 26px 36px -22px rgba(0,24,41,.5)" }}>
                <span aria-hidden="true" style={{ position: "absolute", top: "-10px", left: "50%", width: "22px", height: "22px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FF9A3D, #C24F00)", boxShadow: "0 4px 6px rgba(0,0,0,.35)" }} />
                <p className="mono" style={{ margin: "0", fontSize: "11px", opacity: ".7" }}>
                  office staff
                </p>
                <blockquote className="hand" style={{ margin: "12px 0 0", fontSize: "28px", lineHeight: "1.15" }}>
                  “I type the same learner three times — in the register, the receipt book and Excel.”
                </blockquote>
              </figure>
              <figure style={{ margin: "0", position: "relative", padding: "34px 28px 28px", background: "#FFC9A3", transform: "rotate(1.5deg)", boxShadow: "0 26px 36px -22px rgba(0,24,41,.5)" }}>
                <span aria-hidden="true" style={{ position: "absolute", top: "-10px", left: "50%", width: "22px", height: "22px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #4E7AA6, #001829)", boxShadow: "0 4px 6px rgba(0,0,0,.35)" }} />
                <p className="mono" style={{ margin: "0", fontSize: "11px", opacity: ".7" }}>
                  teacher
                </p>
                <blockquote className="hand" style={{ margin: "12px 0 0", fontSize: "28px", lineHeight: "1.15" }}>
                  “Attendance sheets get lost, and grading printed tests eats my weekends.”
                </blockquote>
              </figure>
              <figure style={{ margin: "0", position: "relative", padding: "34px 28px 28px", background: "#CFE3F5", transform: "rotate(-1deg)", boxShadow: "0 26px 36px -22px rgba(0,24,41,.5)" }}>
                <span aria-hidden="true" style={{ position: "absolute", top: "-10px", left: "50%", width: "22px", height: "22px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFE07A, #C99A00)", boxShadow: "0 4px 6px rgba(0,0,0,.35)" }} />
                <p className="mono" style={{ margin: "0", fontSize: "11px", opacity: ".7" }}>
                  learner
                </p>
                <blockquote className="hand" style={{ margin: "12px 0 0", fontSize: "28px", lineHeight: "1.15" }}>
                  “To know my schedule or get a document, I have to come in.”
                </blockquote>
              </figure>
            </div>
            <div style={{ marginTop: "64px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px", padding: "34px 38px", borderRadius: "28px", background: "#001829", color: "#FFFCF5" }}>
              <span className="mono" style={{ fontSize: "12px", color: "#FF9A3D" }}>
                how might we
              </span>
              <p style={{ margin: "0", flex: "1 1 520px", fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: "1.3", fontWeight: "600" }}>
                give the office, the teachers and the learners one shared system — without anyone seeing data that isn't theirs?
              </p>
            </div>
          </div>
        </section>
        <section style={{ background: "linear-gradient(#FFFCF5, #F3EBDD)", padding: "110px 24px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#B34700" }}>
              chapter 03 — structure
            </p>
            <h2 style={{ margin: "0", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", fontWeight: "800", letterSpacing: "-0.04em" }}>
              The learner's passport.
            </h2>
            <p style={{ margin: "22px 0 0", maxWidth: "640px", fontSize: "18px", lineHeight: "1.6", color: "#2A3B4A" }}>
              I mapped the whole journey as a passport: each step leaves a stamp, from the first enrolment request to the certificate. Every stamp became a screen.
            </p>
            <div style={{ marginTop: "56px", display: "flex", justifyContent: "center", perspective: "1800px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", width: "100%", maxWidth: "1060px", transform: "rotateX(10deg)", transformStyle: "preserve-3d", filter: "drop-shadow(0 40px 40px rgba(0,24,41,.35))" }}>
                <div style={{ flex: "1 1 380px", minHeight: "420px", padding: "36px", borderRadius: "18px 0 0 18px", background: "linear-gradient(135deg, #0A2B45, #001829)", color: "#E9C46A", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "18px", boxSizing: "border-box" }}>
                  <svg width="110" height="110" viewBox="0 0 110 110" aria-hidden="true">
                    <circle cx="55" cy="55" r="50" fill="none" stroke="#E9C46A" strokeWidth="3" />
                    <circle cx="55" cy="55" r="38" fill="none" stroke="#E9C46A" strokeWidth="1.5" strokeDasharray="3 5" />
                    <path d="M38 70V40h34M38 55h24" fill="none" stroke="#E9C46A" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                  <p lang="de" style={{ margin: "0", fontWeight: "800", fontSize: "28px", letterSpacing: ".3em" }}>
                    LERNPASS
                  </p>
                  <p lang="de" style={{ margin: "0", fontSize: "13px", letterSpacing: ".2em", opacity: ".8" }}>
                    FREUNDESKREIS DEUTSCH SPRACHINSTITUT
                  </p>
                </div>
                <ol aria-label="The seven steps of the learner's journey" style={{ listStyle: "none", margin: "0", flex: "2 1 560px", minHeight: "420px", padding: "34px", borderRadius: "0 18px 18px 0", background: "repeating-linear-gradient(0deg, #FBF6EA 0 31px, #EFE6D3 31px 32px)", boxSizing: "border-box", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "22px", alignContent: "center" }}>
                  <li style={{ aspectRatio: "1", borderRadius: "50%", border: "3px solid #1F3B8A", color: "#1F3B8A", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", transform: "rotate(-8deg)", padding: "10px", boxSizing: "border-box" }}>
                    <span className="mono" style={{ fontSize: "10px" }}>
                      step · I
                    </span>
                    <span style={{ fontWeight: "800", fontSize: "15px", marginTop: "4px" }}>
                      Enrolment request
                    </span>
                  </li>
                  <li style={{ aspectRatio: "1", borderRadius: "12px", border: "3px solid #C8372D", color: "#C8372D", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", transform: "rotate(6deg)", padding: "10px", boxSizing: "border-box" }}>
                    <span className="mono" style={{ fontSize: "10px" }}>
                      step · II
                    </span>
                    <span style={{ fontWeight: "800", fontSize: "15px", marginTop: "4px" }}>
                      Placement test
                    </span>
                  </li>
                  <li style={{ aspectRatio: "1", borderRadius: "50%", border: "3px dashed #0B7A3E", color: "#0B7A3E", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", transform: "rotate(-4deg)", padding: "10px", boxSizing: "border-box" }}>
                    <span className="mono" style={{ fontSize: "10px" }}>
                      step · III
                    </span>
                    <span style={{ fontWeight: "800", fontSize: "15px", marginTop: "4px" }}>
                      Group assigned
                    </span>
                  </li>
                  <li style={{ aspectRatio: "1", borderRadius: "50%", border: "3px solid #FF7700", color: "#C24F00", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", transform: "rotate(10deg)", padding: "10px", boxSizing: "border-box" }}>
                    <span className="mono" style={{ fontSize: "10px" }}>
                      step · IV
                    </span>
                    <span style={{ fontWeight: "800", fontSize: "15px", marginTop: "4px" }}>
                      {"Payment & receipt"}
                    </span>
                  </li>
                  <li style={{ aspectRatio: "1", borderRadius: "12px", border: "3px solid #1F3B8A", color: "#1F3B8A", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", transform: "rotate(-6deg)", padding: "10px", boxSizing: "border-box" }}>
                    <span className="mono" style={{ fontSize: "10px" }}>
                      step · V
                    </span>
                    <span style={{ fontWeight: "800", fontSize: "15px", marginTop: "4px" }}>
                      {"Classes & attendance"}
                    </span>
                  </li>
                  <li style={{ aspectRatio: "1", borderRadius: "50%", border: "3px solid #7A3CA8", color: "#7A3CA8", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", transform: "rotate(4deg)", padding: "10px", boxSizing: "border-box" }}>
                    <span className="mono" style={{ fontSize: "10px" }}>
                      step · VI
                    </span>
                    <span style={{ fontWeight: "800", fontSize: "15px", marginTop: "4px" }}>
                      Online exam
                    </span>
                  </li>
                  <li className="pulse" style={{ aspectRatio: "1", borderRadius: "50%", background: "#FF7700", color: "#001829", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", transform: "rotate(-3deg)", padding: "10px", boxSizing: "border-box", boxShadow: "0 0 0 6px rgba(255,119,0,.25)" }}>
                    <span className="mono" style={{ fontSize: "10px" }}>
                      step · VII
                    </span>
                    <span style={{ fontWeight: "800", fontSize: "16px", marginTop: "4px" }}>
                      Certificate
                    </span>
                  </li>
                </ol>
              </div>
            </div>
            <h3 style={{ margin: "90px 0 8px", fontSize: "32px", fontWeight: "800", letterSpacing: "-0.03em" }}>
              Three doors, one database.
            </h3>
            <p style={{ margin: "0 0 30px", maxWidth: "620px", fontSize: "17px", lineHeight: "1.6", color: "#2A3B4A" }}>
              The public site, the learner's space and the staff back office read the same data. PostgreSQL Row Level Security decides who sees what.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "18px" }}>
              <div style={{ borderRadius: "26px", padding: "28px", background: "#FFFFFF", border: "2px solid #001829", position: "relative", overflow: "hidden" }}>
                <span aria-hidden="true" style={{ position: "absolute", right: "-30px", top: "-30px", width: "110px", height: "110px", borderRadius: "50%", background: "#FF7700" }} />
                <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#6B6157" }}>
                  door · public
                </p>
                <p style={{ margin: "6px 0 18px", fontSize: "24px", fontWeight: "800" }}>
                  Public site
                </p>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.9" }}>
                  Programmes
                  {" "}<br />
                  Levels A1 → C1
                  {" "}<br />
                  Exams
                  {" "}<br />
                  Enrolment
                  {" "}<br />
                  Contact
                </p>
              </div>
              <div style={{ borderRadius: "26px", padding: "28px", background: "#001829", color: "#FFFCF5", position: "relative", overflow: "hidden" }}>
                <span aria-hidden="true" style={{ position: "absolute", right: "-20px", top: "-20px", width: "0", height: "0", borderLeft: "60px solid transparent", borderRight: "60px solid transparent", borderBottom: "100px solid #F4C04E", transform: "rotate(20deg)" }} />
                <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#FF9A3D" }}>
                  door · learner
                </p>
                <p style={{ margin: "6px 0 18px", fontSize: "24px", fontWeight: "800" }}>
                  myFDS
                </p>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.9" }}>
                  {"Courses & schedule"}
                  {" "}<br />
                  Attendance
                  {" "}<br />
                  {"Payments & receipts"}
                  {" "}<br />
                  Certificates
                  {" "}<br />
                  {"Profile & requests"}
                </p>
              </div>
              <div style={{ borderRadius: "26px", padding: "28px", background: "#FF7700", color: "#001829", position: "relative", overflow: "hidden" }}>
                <span aria-hidden="true" style={{ position: "absolute", right: "-24px", top: "-24px", width: "100px", height: "100px", borderRadius: "14px", background: "#001829", transform: "rotate(18deg)" }} />
                <p className="mono" style={{ margin: "0", fontSize: "11px" }}>
                  door · staff
                </p>
                <p style={{ margin: "6px 0 18px", fontSize: "24px", fontWeight: "800" }}>
                  Admin
                </p>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.9" }}>
                  {"Learners & groups"}
                  {" "}<br />
                  Billing
                  {" "}<br />
                  Schedule
                  {" "}<br />
                  {"Exams & grading"}
                  {" "}<br />
                  {"Roles & permissions"}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "#FFFCF5", padding: "110px 24px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#B34700" }}>
              chapter 04 — sketches
            </p>
            <h2 style={{ margin: "0", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", fontWeight: "800", letterSpacing: "-0.04em" }}>
              From the notebook to the screen.
            </h2>
            <div style={{ marginTop: "50px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px", alignItems: "start" }}>
              <figure style={{ margin: "0" }}>
                <div aria-hidden="true" style={{ position: "relative", padding: "26px 22px 22px 40px", minHeight: "380px", borderRadius: "6px", backgroundColor: "#FDFBF5", backgroundImage: "linear-gradient(#E4ECF5 1px, transparent 1px), linear-gradient(90deg, #E4ECF5 1px, transparent 1px)", backgroundSize: "18px 18px", boxShadow: "0 24px 40px -26px rgba(0,24,41,.5)", transform: "rotate(-1.5deg)", boxSizing: "border-box" }}>
                  <span aria-hidden="true" style={{ position: "absolute", left: "12px", top: "20px", bottom: "20px", width: "10px", background: "repeating-linear-gradient(#C9C2B4 0 8px, transparent 8px 20px)", borderRadius: "4px" }} />
                  <p className="hand" style={{ margin: "0 0 10px", fontSize: "26px", color: "#1F3B8A" }}>
                    admin — learners
                  </p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <div style={{ width: "70px", minHeight: "250px", border: "2px dashed #1F3B8A", borderRadius: "6px", padding: "6px", boxSizing: "border-box" }}>
                      <p className="hand" style={{ margin: "0", fontSize: "16px", color: "#1F3B8A" }}>
                        menu
                      </p>
                    </div>
                    <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ height: "40px", border: "2px dashed #1F3B8A", borderRadius: "6px" }} />
                      <div style={{ display: "flex", gap: "8px" }}>
                        <span style={{ flex: "1", height: "54px", border: "2px dashed #1F3B8A", borderRadius: "6px" }} />
                        <span style={{ flex: "1", height: "54px", border: "2px dashed #1F3B8A", borderRadius: "6px" }} />
                        <span style={{ flex: "1", height: "54px", border: "2px dashed #1F3B8A", borderRadius: "6px" }} />
                      </div>
                      <div style={{ height: "130px", border: "2px dashed #1F3B8A", borderRadius: "6px", padding: "6px", boxSizing: "border-box" }}>
                        <p className="hand" style={{ margin: "0", fontSize: "16px", color: "#1F3B8A" }}>
                          table: name · level · group · paid?
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="hand" style={{ position: "absolute", right: "20px", bottom: "14px", margin: "0", fontSize: "20px", color: "#C8372D", transform: "rotate(-6deg)" }}>
                    status in colour!
                  </p>
                </div>
                <figcaption style={{ marginTop: "16px", fontWeight: "700" }}>
                  Notebook sketch
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <div aria-hidden="true" style={{ padding: "18px", minHeight: "380px", borderRadius: "14px", background: "#EFEAE0", display: "flex", gap: "12px", boxSizing: "border-box", boxShadow: "0 24px 40px -26px rgba(0,24,41,.4)" }}>
                  <div style={{ width: "70px", borderRadius: "8px", background: "#D6CFC2", display: "flex", flexDirection: "column", gap: "8px", padding: "10px 8px", boxSizing: "border-box" }}>
                    <span style={{ height: "8px", background: "#BFB6A6", borderRadius: "4px" }} />
                    <span style={{ height: "8px", background: "#BFB6A6", borderRadius: "4px" }} />
                    <span style={{ height: "8px", background: "#BFB6A6", borderRadius: "4px" }} />
                    <span style={{ height: "8px", background: "#BFB6A6", borderRadius: "4px" }} />
                  </div>
                  <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ height: "36px", borderRadius: "8px", background: "#D6CFC2" }} />
                    <div style={{ display: "flex", gap: "8px" }}>
                      <span style={{ flex: "1", height: "60px", borderRadius: "8px", background: "#E0D9CC" }} />
                      <span style={{ flex: "1", height: "60px", borderRadius: "8px", background: "#E0D9CC" }} />
                      <span style={{ flex: "1", height: "60px", borderRadius: "8px", background: "#E0D9CC" }} />
                    </div>
                    <div style={{ flex: "1", borderRadius: "8px", background: "#E0D9CC", padding: "10px", display: "flex", flexDirection: "column", gap: "9px" }}>
                      <span style={{ height: "10px", background: "#CFC7B8", borderRadius: "4px" }} />
                      <span style={{ height: "10px", background: "#D6CFC2", borderRadius: "4px" }} />
                      <span style={{ height: "10px", background: "#D6CFC2", borderRadius: "4px" }} />
                      <span style={{ height: "10px", background: "#D6CFC2", borderRadius: "4px" }} />
                      <span style={{ height: "10px", background: "#D6CFC2", borderRadius: "4px" }} />
                    </div>
                  </div>
                </div>
                <figcaption style={{ marginTop: "16px", fontWeight: "700" }}>
                  Grey wireframe
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <div aria-hidden="true" style={{ minHeight: "380px", borderRadius: "14px", overflow: "hidden", display: "flex", boxShadow: "0 30px 50px -26px rgba(0,24,41,.55)" }}>
                  <div style={{ width: "86px", background: "#001829", padding: "14px 10px", display: "flex", flexDirection: "column", gap: "8px", boxSizing: "border-box" }}>
                    <span style={{ height: "10px", width: "70%", background: "#FF7700", borderRadius: "4px", marginBottom: "10px" }} />
                    <span style={{ height: "22px", borderRadius: "6px", background: "rgba(255,255,255,.1)" }} />
                    <span style={{ height: "22px", borderRadius: "6px", background: "#FF7700" }} />
                    <span style={{ height: "22px", borderRadius: "6px", background: "rgba(255,255,255,.1)" }} />
                    <span style={{ height: "22px", borderRadius: "6px", background: "rgba(255,255,255,.1)" }} />
                  </div>
                  <div style={{ flex: "1", background: "#FFFCF5", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontWeight: "800", fontSize: "15px" }}>
                        Learners
                      </span>
                      <span style={{ padding: "6px 10px", borderRadius: "6px", background: "#FF7700", fontSize: "10px", fontWeight: "700" }}>
                        New enrolment
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <span style={{ flex: "1", height: "54px", borderRadius: "10px", background: "#FFFFFF", border: "1px solid #EDE5D6" }} />
                      <span style={{ flex: "1", height: "54px", borderRadius: "10px", background: "#FFFFFF", border: "1px solid #EDE5D6" }} />
                      <span style={{ flex: "1", height: "54px", borderRadius: "10px", background: "#FFE3C7" }} />
                    </div>
                    <div style={{ flex: "1", borderRadius: "10px", background: "#FFFFFF", border: "1px solid #EDE5D6", padding: "10px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "11px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <b>
                          Yasmine B.
                        </b>
                        <span style={{ padding: "2px 8px", borderRadius: "999px", background: "#E3F4E7", color: "#1E6B33" }}>
                          Paid
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <b>
                          Karim L.
                        </b>
                        <span style={{ padding: "2px 8px", borderRadius: "999px", background: "#FDF0D5", color: "#7A4B00" }}>
                          Pending
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <b>
                          Samir D.
                        </b>
                        <span style={{ padding: "2px 8px", borderRadius: "999px", background: "#FBE3E1", color: "#8A1C12" }}>
                          Overdue
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <b>
                          Nour H.
                        </b>
                        <span style={{ padding: "2px 8px", borderRadius: "999px", background: "#E3F4E7", color: "#1E6B33" }}>
                          Paid
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <figcaption style={{ marginTop: "16px", fontWeight: "700" }}>
                  High fidelity
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section style={{ background: "#001829", color: "#FFFCF5", padding: "120px 24px", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" className="orbit" style={{ position: "absolute", right: "-180px", top: "-180px", width: "520px", height: "520px", borderRadius: "50%", border: "2px dashed rgba(255,119,0,.35)" }} />
          <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative" }}>
            <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#FF9A3D" }}>
              chapter 05 — visual language
            </p>
            <h2 style={{ margin: "0", maxWidth: "760px", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", fontWeight: "800", letterSpacing: "-0.04em" }}>
              German rigour, human warmth.
            </h2>
            <p style={{ margin: "22px 0 0", maxWidth: "620px", fontSize: "18px", lineHeight: "1.6", color: "#C9D3DC" }}>
              Navy and cream for the seriousness of an exam centre. One orange, only for action. Geometric shapes as a nod to the Bauhaus — the German school that taught design itself.
            </p>
            <div style={{ marginTop: "56px", display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "stretch" }}>
              <div aria-hidden="true" style={{ flex: "1 1 360px", minHeight: "420px", borderRadius: "28px", background: "#FFFCF5", position: "relative", overflow: "hidden" }}>
                <span style={{ position: "absolute", left: "10%", top: "10%", width: "52%", aspectRatio: "1", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFB066, #FF7700 60%, #C24F00)" }} />
                {" "}
                <span style={{ position: "absolute", right: "8%", top: "22%", width: "36%", aspectRatio: "1", background: "linear-gradient(145deg, #0B3A5C, #001829)", transform: "rotate(12deg)" }} />
                {" "}
                <span style={{ position: "absolute", left: "22%", bottom: "8%", width: "0", height: "0", borderLeft: "90px solid transparent", borderRight: "90px solid transparent", borderBottom: "150px solid #F4C04E" }} />
                {" "}
                <span style={{ position: "absolute", right: "8%", bottom: "10%", fontWeight: "800", fontSize: "46px", color: "#001829", letterSpacing: "-0.04em" }}>
                  FDS
                </span>
              </div>
              <div style={{ flex: "2 1 520px", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "14px" }}>
                  <div style={{ borderRadius: "20px", overflow: "hidden", background: "#0A2B45" }}>
                    <div style={{ height: "100px", background: "#001829", borderBottom: "1px solid #23435E" }} />
                    <p style={{ margin: "0", padding: "12px 14px 0", fontWeight: "700" }}>
                      Navy
                    </p>
                    <p className="mono" style={{ margin: "2px 0 0", padding: "0 14px 14px", fontSize: "11px", color: "#9FB0BF" }}>
                      #001829 · text
                    </p>
                  </div>
                  <div style={{ borderRadius: "20px", overflow: "hidden", background: "#0A2B45" }}>
                    <div style={{ height: "100px", background: "#FF7700" }} />
                    <p style={{ margin: "0", padding: "12px 14px 0", fontWeight: "700" }}>
                      Orange
                    </p>
                    <p className="mono" style={{ margin: "2px 0 0", padding: "0 14px 14px", fontSize: "11px", color: "#9FB0BF" }}>
                      #FF7700 · action
                    </p>
                  </div>
                  <div style={{ borderRadius: "20px", overflow: "hidden", background: "#0A2B45" }}>
                    <div style={{ height: "100px", background: "#FFFCF5" }} />
                    <p style={{ margin: "0", padding: "12px 14px 0", fontWeight: "700" }}>
                      Cream
                    </p>
                    <p className="mono" style={{ margin: "2px 0 0", padding: "0 14px 14px", fontSize: "11px", color: "#9FB0BF" }}>
                      #FFFCF5 · ground
                    </p>
                  </div>
                  <div style={{ borderRadius: "20px", overflow: "hidden", background: "#0A2B45" }}>
                    <div style={{ height: "100px", background: "#F4C04E" }} />
                    <p style={{ margin: "0", padding: "12px 14px 0", fontWeight: "700" }}>
                      Bauhaus yellow
                    </p>
                    <p className="mono" style={{ margin: "2px 0 0", padding: "0 14px 14px", fontSize: "11px", color: "#9FB0BF" }}>
                      #F4C04E · accents
                    </p>
                  </div>
                </div>
                <div style={{ flex: "1", display: "flex", flexWrap: "wrap", gap: "14px" }}>
                  <div style={{ flex: "1 1 260px", borderRadius: "20px", padding: "24px", background: "#0A2B45" }}>
                    <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#9FB0BF" }}>
                      display · Halcom (shown with Montserrat)
                    </p>
                    <p style={{ margin: "8px 0 0", fontSize: "46px", lineHeight: "1", fontWeight: "800", letterSpacing: "-0.04em" }} lang="fr">
                      Maîtrisez l'allemand.
                    </p>
                  </div>
                  <div style={{ flex: "1 1 220px", borderRadius: "20px", padding: "24px", background: "#0A2B45", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#9FB0BF" }}>
                      components
                    </p>
                    <span style={{ alignSelf: "flex-start", padding: "12px 20px", borderRadius: "8px", background: "#FF7700", color: "#001829", fontWeight: "700" }} lang="fr">
                      S'inscrire maintenant
                    </span>
                    <span style={{ alignSelf: "flex-start", padding: "11px 19px", borderRadius: "8px", border: "1.5px solid #FFFCF5", fontWeight: "700" }} lang="fr">
                      Passer un test de niveau
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "radial-gradient(90% 70% at 20% 10%, #FFE8D1, #FFFCF5 60%)", padding: "120px 24px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#B34700" }}>
              chapter 06 — the platform
            </p>
            <h2 style={{ margin: "0", maxWidth: "820px", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", fontWeight: "800", letterSpacing: "-0.04em" }}>
              Paper in, certificates out.
            </h2>
            <div style={{ marginTop: "60px", display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "40px" }}>
              <figure style={{ flex: "3 1 620px", minWidth: "0", margin: "0", perspective: "2000px" }}>
                <div style={{ transform: "rotateX(8deg)", transformStyle: "preserve-3d" }}>
                  <div style={{ padding: "14px 14px 18px", borderRadius: "20px 20px 4px 4px", background: "linear-gradient(#24323F, #0C141B)", boxShadow: "0 50px 80px -40px rgba(0,24,41,.7)" }}>
                    <div role="img" aria-label="FDS Admin back office: a list of learners with their level, group and payment status (paid, pending or overdue), and a New enrolment button." style={{ display: "flex", minHeight: "380px", borderRadius: "6px", overflow: "hidden", fontSize: "12px" }}>
                      <div style={{ flex: "0 0 150px", background: "#001829", color: "#FFFCF5", padding: "16px 10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span style={{ fontWeight: "800", margin: "0 8px 14px" }}>
                          FDS Admin
                        </span>
                        {" "}
                        <span style={{ padding: "8px", borderRadius: "6px", opacity: ".75" }}>
                          Dashboard
                        </span>
                        {" "}
                        <span style={{ padding: "8px", borderRadius: "6px", background: "#FF7700", color: "#001829", fontWeight: "700" }}>
                          Learners
                        </span>
                        {" "}
                        <span style={{ padding: "8px", borderRadius: "6px", opacity: ".75" }}>
                          Groups
                        </span>
                        {" "}
                        <span style={{ padding: "8px", borderRadius: "6px", opacity: ".75" }}>
                          Schedule
                        </span>
                        {" "}
                        <span style={{ padding: "8px", borderRadius: "6px", opacity: ".75" }}>
                          Billing
                        </span>
                        {" "}
                        <span style={{ padding: "8px", borderRadius: "6px", opacity: ".75" }}>
                          Exams
                        </span>
                        {" "}
                        <span style={{ padding: "8px", borderRadius: "6px", opacity: ".75" }}>
                          Certificates
                        </span>
                      </div>
                      <div style={{ flex: "1", minWidth: "0", background: "#FFFCF5", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                          <span style={{ fontWeight: "800", fontSize: "18px" }}>
                            Learners
                          </span>
                          <span style={{ padding: "7px 12px", borderRadius: "7px", background: "#FF7700", fontWeight: "700", fontSize: "11px" }}>
                            New enrolment
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                          <span style={{ padding: "5px 10px", borderRadius: "999px", background: "#001829", color: "#fff", fontSize: "10px" }}>
                            All levels
                          </span>
                          <span style={{ padding: "5px 10px", borderRadius: "999px", border: "1px solid #D9CFBD", fontSize: "10px" }}>
                            A1
                          </span>
                          <span style={{ padding: "5px 10px", borderRadius: "999px", border: "1px solid #D9CFBD", fontSize: "10px" }}>
                            B1
                          </span>
                          <span style={{ padding: "5px 10px", borderRadius: "999px", border: "1px solid #D9CFBD", fontSize: "10px" }}>
                            C1
                          </span>
                        </div>
                        <div style={{ borderRadius: "10px", background: "#FFFFFF", border: "1px solid #EDE5D6", overflow: "hidden" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", padding: "9px 12px", background: "#F6EFE2", fontSize: "10px", color: "#6B6157" }} className="mono">
                            <span>
                              learner
                            </span>
                            <span>
                              level
                            </span>
                            <span>
                              group
                            </span>
                            <span>
                              payment
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", padding: "10px 12px", borderTop: "1px solid #F3EDE1", alignItems: "center" }}>
                            <b>
                              Yasmine B.
                            </b>
                            <span>
                              B1
                            </span>
                            <span>
                              Evening
                            </span>
                            <span>
                              <span style={{ padding: "3px 8px", borderRadius: "999px", background: "#E3F4E7", color: "#1E6B33", fontSize: "10px" }}>
                                Paid
                              </span>
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", padding: "10px 12px", borderTop: "1px solid #F3EDE1", alignItems: "center" }}>
                            <b>
                              Karim L.
                            </b>
                            <span>
                              A2
                            </span>
                            <span>
                              Morning
                            </span>
                            <span>
                              <span style={{ padding: "3px 8px", borderRadius: "999px", background: "#FDF0D5", color: "#7A4B00", fontSize: "10px" }}>
                                Pending
                              </span>
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", padding: "10px 12px", borderTop: "1px solid #F3EDE1", alignItems: "center" }}>
                            <b>
                              Lina M.
                            </b>
                            <span>
                              B2
                            </span>
                            <span>
                              Intensive
                            </span>
                            <span>
                              <span style={{ padding: "3px 8px", borderRadius: "999px", background: "#E3F4E7", color: "#1E6B33", fontSize: "10px" }}>
                                Paid
                              </span>
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", padding: "10px 12px", borderTop: "1px solid #F3EDE1", alignItems: "center" }}>
                            <b>
                              Samir D.
                            </b>
                            <span>
                              A1
                            </span>
                            <span>
                              Weekend
                            </span>
                            <span>
                              <span style={{ padding: "3px 8px", borderRadius: "999px", background: "#FBE3E1", color: "#8A1C12", fontSize: "10px" }}>
                                Overdue
                              </span>
                            </span>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", padding: "10px 12px", borderTop: "1px solid #F3EDE1", alignItems: "center" }}>
                            <b>
                              Nour H.
                            </b>
                            <span>
                              C1
                            </span>
                            <span>
                              Evening
                            </span>
                            <span>
                              <span style={{ padding: "3px 8px", borderRadius: "999px", background: "#E3F4E7", color: "#1E6B33", fontSize: "10px" }}>
                                Paid
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "18px", margin: "0 -46px", borderRadius: "2px 2px 24px 24px", background: "linear-gradient(#E7E1D6, #B9B1A3)" }} />
                </div>
                <figcaption style={{ marginTop: "22px", fontWeight: "700" }}>
                  {"Staff back office — learners, groups, billing "}
                  <span className="mono" style={{ fontWeight: "400", fontSize: "12px", color: "#6B6157" }}>
                    · illustrative data
                  </span>
                </figcaption>
              </figure>
              <figure aria-hidden="true" style={{ flex: "1 1 300px", margin: "0", position: "relative", height: "420px" }}>
                <div style={{ position: "absolute", left: "50%", top: "110px", width: "230px", transform: "translateX(-50%)", overflow: "hidden", height: "300px" }}>
                  <div className="print" style={{ width: "200px", margin: "0 auto", padding: "22px 18px", background: "#FFFFFF", border: "1px solid #E9DFC9", boxShadow: "0 10px 20px -10px rgba(0,0,0,.25)", textAlign: "center", boxSizing: "border-box", backgroundImage: "linear-gradient(#FFFFFF, #FFFCF5)" }}>
                    <div style={{ border: "2px solid #C9A85A", padding: "14px 8px", position: "relative" }}>
                      <p className="mono" style={{ margin: "0", fontSize: "8px", letterSpacing: ".2em", color: "#8A6D2E" }}>
                        FREUNDESKREIS DEUTSCH
                      </p>
                      <p style={{ margin: "8px 0 0", fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#001829" }}>
                        Zertifikat
                      </p>
                      <p style={{ margin: "8px 0 0", fontSize: "9px", color: "#6B6157" }}>
                        is awarded to
                      </p>
                      <p style={{ margin: "2px 0 0", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "16px" }}>
                        Yasmine B.
                      </p>
                      <p style={{ margin: "8px 0 0", fontWeight: "800", fontSize: "13px", color: "#FF7700" }}>
                        Niveau B1
                      </p>
                      <span style={{ display: "block", margin: "12px auto 0", width: "38px", height: "38px", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFB066, #C24F00)", boxShadow: "0 0 0 3px #FFE3C7" }} />
                    </div>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "50%", top: "60px", width: "270px", height: "70px", transform: "translateX(-50%)", borderRadius: "18px", background: "linear-gradient(#2C3D4D, #0C141B)", boxShadow: "0 30px 40px -20px rgba(0,24,41,.6)" }}>
                  <span className="blink" style={{ position: "absolute", right: "22px", top: "22px", width: "10px", height: "10px", borderRadius: "50%", background: "#5DDB7E" }} />
                  {" "}
                  <span style={{ position: "absolute", left: "30px", right: "30px", bottom: "10px", height: "8px", borderRadius: "4px", background: "#000" }} />
                </div>
                <figcaption style={{ position: "absolute", bottom: "-6px", left: "0", right: "0", textAlign: "center", fontWeight: "700" }}>
                  Certificates, generated
                </figcaption>
              </figure>
            </div>
            <div style={{ marginTop: "90px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-end", gap: "34px" }}>
              <figure style={{ margin: "0", textAlign: "center" }}>
                <div style={{ width: "240px", padding: "8px", borderRadius: "38px", background: "#0C141B", boxShadow: "0 40px 60px -30px rgba(0,24,41,.6)", transform: "rotate(-5deg)" }}>
                  <img src="/projects/fds/site-mobile.webp" alt="FDS Institut public site on a phone: the home page" width="389" height="842" loading="lazy" decoding="async" style={{ display: "block", width: "100%", aspectRatio: "389 / 842", objectFit: "cover", objectPosition: "top", borderRadius: "30px" }} />
                </div>
                <figcaption style={{ marginTop: "18px", fontWeight: "700" }}>
                  Public site
                </figcaption>
              </figure>
              <figure style={{ margin: "0", textAlign: "center" }}>
                <div style={{ width: "260px", padding: "8px", borderRadius: "40px", background: "#0C141B", boxShadow: "0 50px 70px -30px rgba(0,24,41,.65)" }}>
                  <div role="img" aria-label="myFDS on a phone: a greeting in German, the next class, attendance up to date, the latest receipt to download, the A2 certificate ready and a button to ask the office." style={{ height: "540px", borderRadius: "32px", overflow: "hidden", background: "#FFFCF5", display: "flex", flexDirection: "column", textAlign: "left" }}>
                    <div style={{ padding: "26px 18px 18px", background: "#001829", color: "#FFFCF5" }}>
                      <span style={{ display: "block", width: "70px", height: "6px", margin: "-12px auto 16px", borderRadius: "3px", background: "#23435E" }} />
                      <p className="mono" style={{ margin: "0", fontSize: "10px", color: "#FF9A3D" }}>
                        myFDS
                      </p>
                      <p style={{ margin: "6px 0 0", fontWeight: "800", fontSize: "20px" }}>
                        Guten Tag, Yasmine
                      </p>
                      <p style={{ margin: "4px 0 0", fontSize: "11px", opacity: ".75" }}>
                        German B1 · evening group
                      </p>
                    </div>
                    <div style={{ flex: "1", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ padding: "14px", borderRadius: "16px", background: "#FF7700", color: "#001829" }}>
                        <p style={{ margin: "0", fontSize: "11px", fontWeight: "600" }}>
                          Next class
                        </p>
                        <p style={{ margin: "4px 0 0", fontSize: "15px", fontWeight: "800" }}>
                          Tuesday evening · room Goethe
                        </p>
                      </div>
                      <div style={{ padding: "12px 14px", borderRadius: "14px", background: "#FFFFFF", border: "1px solid #EDE5D6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "13px", fontWeight: "700" }}>
                          Attendance
                        </span>
                        <span style={{ padding: "3px 8px", borderRadius: "999px", background: "#E3F4E7", color: "#1E6B33", fontSize: "10px" }}>
                          Up to date
                        </span>
                      </div>
                      <div style={{ padding: "12px 14px", borderRadius: "14px", background: "#FFFFFF", border: "1px solid #EDE5D6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "13px", fontWeight: "700" }}>
                          Latest receipt
                        </span>
                        <span style={{ fontSize: "11px", color: "#B34700", fontWeight: "700" }}>
                          Download
                        </span>
                      </div>
                      <div style={{ padding: "12px 14px", borderRadius: "14px", background: "#FFFFFF", border: "1px solid #EDE5D6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "13px", fontWeight: "700" }}>
                          Certificate A2
                        </span>
                        <span style={{ fontSize: "11px", color: "#B34700", fontWeight: "700" }}>
                          Ready
                        </span>
                      </div>
                      <div style={{ padding: "12px 14px", borderRadius: "14px", background: "#FFFFFF", border: "1px solid #EDE5D6" }}>
                        <span style={{ fontSize: "13px", fontWeight: "700" }}>
                          Ask the office
                        </span>
                        <p style={{ margin: "3px 0 0", fontSize: "11px", color: "#6B6157" }}>
                          Change of group, documents…
                        </p>
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around", padding: "10px 6px 16px", borderTop: "1px solid #EDE5D6", fontSize: "10px" }}>
                      <span style={{ color: "#B34700", fontWeight: "700" }}>
                        Home
                      </span>
                      <span>
                        Courses
                      </span>
                      <span>
                        Payments
                      </span>
                      <span>
                        Docs
                      </span>
                    </div>
                  </div>
                </div>
                <figcaption style={{ marginTop: "18px", fontWeight: "700" }}>
                  myFDS — the learner's space
                </figcaption>
              </figure>
              <figure style={{ margin: "0", textAlign: "center" }}>
                <div style={{ width: "240px", padding: "8px", borderRadius: "38px", background: "#0C141B", boxShadow: "0 40px 60px -30px rgba(0,24,41,.6)", transform: "rotate(5deg)" }}>
                  <div role="img" aria-label="Online exam on a phone: a German reading question with three answers, the second one selected, and a Next button." style={{ height: "500px", borderRadius: "30px", overflow: "hidden", background: "#FFFCF5", padding: "22px 16px", boxSizing: "border-box", textAlign: "left", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <p className="mono" style={{ margin: "8px 0 0", fontSize: "10px", color: "#6B6157" }}>
                      online exam · Lesen
                    </p>
                    <p style={{ margin: "0", fontWeight: "800", fontSize: "18px" }}>
                      Wähle die richtige Antwort.
                    </p>
                    <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.5", color: "#2A3B4A" }}>
                      Ich gehe heute ___ Kino.
                    </p>
                    <span style={{ padding: "12px", borderRadius: "12px", border: "1.5px solid #EDE5D6", fontSize: "13px" }}>
                      in die
                    </span>
                    {" "}
                    <span style={{ padding: "12px", borderRadius: "12px", border: "2px solid #FF7700", background: "#FFF1E2", fontSize: "13px", fontWeight: "700" }}>
                      ins
                    </span>
                    {" "}
                    <span style={{ padding: "12px", borderRadius: "12px", border: "1.5px solid #EDE5D6", fontSize: "13px" }}>
                      im
                    </span>
                    {" "}
                    <span style={{ marginTop: "auto", padding: "14px", borderRadius: "12px", background: "#001829", color: "#FFFCF5", textAlign: "center", fontWeight: "700", fontSize: "13px" }}>
                      Weiter
                    </span>
                  </div>
                </div>
                <figcaption style={{ marginTop: "18px", fontWeight: "700" }}>
                  Online exam
                </figcaption>
              </figure>
            </div>
            <div style={{ marginTop: "90px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "22px" }}>
              <img src="/projects/fds/parcours-apprentissage.webp" alt="FDS Institut website: the learning path section, from A1 to C1" width="800" height="499" loading="lazy" decoding="async" style={{ display: "block", width: "100%", aspectRatio: "800 / 499", objectFit: "cover", borderRadius: "16px", boxShadow: "0 30px 50px -30px rgba(0,24,41,.5)" }} />
              {" "}
              <img src="/projects/fds/approche-pedagogique.webp" alt="FDS Institut website: the teaching approach section" width="800" height="499" loading="lazy" decoding="async" style={{ display: "block", width: "100%", aspectRatio: "800 / 499", objectFit: "cover", borderRadius: "16px", boxShadow: "0 30px 50px -30px rgba(0,24,41,.5)" }} />
            </div>
          </div>
        </section>
        <section style={{ background: "#001829", color: "#FFFCF5", padding: "120px 24px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#FF9A3D" }}>
              chapter 07 — after
            </p>
            <h2 style={{ margin: "0", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", fontWeight: "800", letterSpacing: "-0.04em" }}>
              The desk got quieter.
            </h2>
            <ul style={{ listStyle: "none", padding: "0", margin: "50px 0 0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <li style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "18px", padding: "24px 28px", borderRadius: "22px", background: "#0A2B45" }}>
                <span className="hand" style={{ flex: "1 1 240px", fontSize: "26px", color: "#C9D3DC", textDecoration: "line-through", textDecorationColor: "#FF7700" }}>
                  <span className="sr-only">
                    Before:
                  </span>
                  Handwritten receipts
                </span>
                {" "}
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="#FF7700" strokeWidth="2.5" aria-hidden="true">
                  <path d="M1 10h36M29 2l8 8-8 8" />
                </svg>
                {" "}
                <span style={{ flex: "1 1 280px", fontSize: "22px", fontWeight: "700" }}>
                  <span className="sr-only">
                    After:
                  </span>
                  Receipts generated and downloadable
                </span>
              </li>
              <li style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "18px", padding: "24px 28px", borderRadius: "22px", background: "#0A2B45" }}>
                <span className="hand" style={{ flex: "1 1 240px", fontSize: "26px", color: "#C9D3DC", textDecoration: "line-through", textDecorationColor: "#FF7700" }}>
                  <span className="sr-only">
                    Before:
                  </span>
                  Doors closed for exams
                </span>
                {" "}
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="#FF7700" strokeWidth="2.5" aria-hidden="true">
                  <path d="M1 10h36M29 2l8 8-8 8" />
                </svg>
                {" "}
                <span style={{ flex: "1 1 280px", fontSize: "22px", fontWeight: "700" }}>
                  <span className="sr-only">
                    After:
                  </span>
                  Exams taken and graded online
                </span>
              </li>
              <li style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "18px", padding: "24px 28px", borderRadius: "22px", background: "#0A2B45" }}>
                <span className="hand" style={{ flex: "1 1 240px", fontSize: "26px", color: "#C9D3DC", textDecoration: "line-through", textDecorationColor: "#FF7700" }}>
                  <span className="sr-only">
                    Before:
                  </span>
                  Every question at the desk
                </span>
                {" "}
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="#FF7700" strokeWidth="2.5" aria-hidden="true">
                  <path d="M1 10h36M29 2l8 8-8 8" />
                </svg>
                {" "}
                <span style={{ flex: "1 1 280px", fontSize: "22px", fontWeight: "700" }}>
                  <span className="sr-only">
                    After:
                  </span>
                  Schedule, payments and documents in myFDS
                </span>
              </li>
            </ul>
            <div style={{ marginTop: "50px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
              <span style={{ padding: "9px 16px", borderRadius: "999px", border: "1px solid #23435E", fontSize: "14px" }}>
                Next.js
              </span>
              {" "}
              <span style={{ padding: "9px 16px", borderRadius: "999px", border: "1px solid #23435E", fontSize: "14px" }}>
                TypeScript
              </span>
              {" "}
              <span style={{ padding: "9px 16px", borderRadius: "999px", border: "1px solid #23435E", fontSize: "14px" }}>
                Supabase
              </span>
              {" "}
              <span style={{ padding: "9px 16px", borderRadius: "999px", border: "1px solid #23435E", fontSize: "14px" }}>
                PostgreSQL · Row Level Security
              </span>
              {" "}
              <a href="https://fdsinstitut.com/fr" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 26px", borderRadius: "999px", background: "#FF7700", color: "#001829", fontWeight: "700", textDecoration: "none" }}>
                Visit fdsinstitut.com
                <span className="sr-only">
                  (opens in a new window)
                </span>
                {" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <a href="/projects/wassalni/" style={{ display: "block", textDecoration: "none", color: "#001829", background: "#FFFCF5", padding: "90px 24px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px" }}>
            <div>
              <p className="mono" style={{ margin: "0 0 12px", fontSize: "13px", color: "#6B6157" }}>
                next story
              </p>
              <span style={{ display: "block", fontSize: "clamp(48px, 7vw, 104px)", lineHeight: ".95", fontWeight: "800", letterSpacing: "-0.05em" }}>
                Wassalni
              </span>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "84px", height: "84px", borderRadius: "50%", background: "#001829", color: "#FFFCF5" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </a>
      </main>
      <footer style={{ background: "#001829", color: "#FFFCF5" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "22px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", fontSize: "14px" }}>
          <p style={{ margin: "0" }}>
            © 2026 Imed Belouettar
          </p>
          <p style={{ margin: "0" }}>
            <a href="/accessibility/" style={{ color: "#FFFCF5" }}>
              Accessibility: targeting RGAA 4.1 compliance
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FdsCaseStudy;
