import HomeNav from '../components/HomeNav';
import { usePageMeta } from '../hooks/usePageMeta';
import '../styles/redesign.css';

// Généré à partir de la maquette « Main.dc.html » du canevas de design, puis relu.
// Les styles restent en ligne pour garantir un rendu identique à la maquette.
const HomePage = () => {
  usePageMeta({
    title: "Imed Belouettar – Product Designer UX/UI",
    description: "Portfolio d'Imed Belouettar, Product Designer UX/UI spécialisé en accessibilité numérique : études de cas Wassalni, Sanou va bien et FDS Institut.",
    background: "#F4F3EF",
  });

  return (
    <div className="rd rd-home" style={{ fontFamily: "'Instrument Sans', system-ui, sans-serif", color: "#141414", background: "#F4F3EF", minHeight: "100vh" }}>
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      {/* BANDEAU DISPONIBILITÉ */}
      <aside className="promo" aria-label="Disponibilité" style={{ background: "#1F3BB8", color: "#FFFFFF" }}>
        <p style={{ maxWidth: "1240px", margin: "0 auto", padding: "10px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "6px 14px", fontSize: "14px", fontWeight: "600", lineHeight: "1.4", textAlign: "center" }}>
          <span>
            Stage de fin d’études de 6 mois · dès mars 2027
          </span>
        </p>
      </aside>
      <HomeNav />
      <main id="main-content" tabIndex={-1}>
        {/* HERO */}
        <section id="accueil" aria-labelledby="titre-hero" style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 24px 56px", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
            <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px" }}>
              <h1 id="titre-hero" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(46px, 7vw, 104px)", lineHeight: "0.98", letterSpacing: "-0.035em" }}>
                Des produits clairs,
                {" "}<br />
                <span style={{ color: "#1F3BB8" }}>
                  pour tout le monde.
                </span>
              </h1>
              <p style={{ margin: "0", fontSize: "21px", lineHeight: "1.55", maxWidth: "34ch", color: "#3A3A3A" }}>
                Product Designer UX/UI, spécialisé en accessibilité. Je conçois, je teste… et je sais coder ce que je dessine.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a href="#travaux" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "56px", padding: "0 28px", borderRadius: "999px", background: "#1F3BB8", color: "#FFFFFF", fontWeight: "600", fontSize: "17px", textDecoration: "none" }}>
                  Voir mes projets
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </a>
                {" "}
                <a href="https://storage.googleapis.com/publicasse/my_portfolio/CV%20OCTOBRE%20STAGE.pdf" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", minHeight: "56px", padding: "0 28px", borderRadius: "999px", border: "2px solid #141414", color: "#141414", fontWeight: "600", fontSize: "17px", textDecoration: "none" }}>
                  CV (PDF)
                  <span className="sr-only"> (nouvelle fenêtre)</span>
                </a>
              </div>
            </div>
            {/* fanned project cards */}
            <div aria-hidden="true" style={{ flex: "1 1 440px", minWidth: "0", display: "flex", justifyContent: "center" }}>
              <div className="fan" style={{ position: "relative", width: "500px", maxWidth: "100%", height: "470px" }}>
                <div style={{ position: "absolute", left: "0", top: "50px", width: "250px", height: "340px", borderRadius: "26px", background: "#050505", color: "#FFFFFF", padding: "22px", boxSizing: "border-box", transform: "rotate(-9deg)", boxShadow: "0 30px 60px rgba(20,20,20,0.25)", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundImage: "radial-gradient(ellipse 70% 50% at 70% 0%, rgba(192,132,252,0.35), transparent 70%)" }}>
                  <span style={{ fontFamily: "'Fondamento', serif", fontSize: "15px", fontStyle: "italic" }}>
                    Sanou va bien
                  </span>
                  {" "}
                  <span style={{ fontFamily: "'Fondamento', serif", fontSize: "30px", lineHeight: "1.05" }}>
                    Petite scène, grandes histoires.
                  </span>
                  {" "}
                  <span style={{ alignSelf: "flex-start", padding: "6px 10px", border: "1px solid #FFFFFF", fontSize: "11px", fontWeight: "600", boxShadow: "4px 4px 0 -1px #050505, 4px 4px 0 0 #FFFFFF" }}>
                    Faire un don
                  </span>
                </div>
                <div style={{ position: "absolute", right: "0", top: "40px", width: "250px", height: "340px", borderRadius: "26px", background: "#FFFCF5", color: "#001829", padding: "18px", boxSizing: "border-box", transform: "rotate(8deg)", boxShadow: "0 30px 60px rgba(20,20,20,0.2)", display: "flex", flexDirection: "column", gap: "10px", fontFamily: "'Montserrat', sans-serif" }}>
                  <span style={{ fontWeight: "800", fontSize: "15px", letterSpacing: "-0.02em" }}>
                    myFDS
                  </span>
                  <span style={{ padding: "12px", borderRadius: "14px", background: "#FF7700", fontSize: "10px", fontWeight: "600" }}>
                    Prochain cours
                    {" "}<br />
                    <b style={{ fontSize: "13px", fontWeight: "800" }}>
                      Mardi soir · salle Goethe
                    </b>
                  </span>
                  <span style={{ padding: "8px 10px", borderRadius: "10px", background: "#FFFFFF", border: "1px solid #EDE5D6", display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: "700" }}>
                    Présences
                    <span style={{ padding: "2px 6px", borderRadius: "999px", background: "#E3F4E7", color: "#1E6B33" }}>
                      À jour
                    </span>
                  </span>
                  {" "}
                  <span style={{ padding: "8px 10px", borderRadius: "10px", background: "#FFFFFF", border: "1px solid #EDE5D6", display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: "700" }}>
                    Certificat A2
                    <span style={{ color: "#B34700" }}>
                      Prêt
                    </span>
                  </span>
                  {" "}
                  <span style={{ marginTop: "auto", padding: "9px", borderRadius: "999px", background: "#001829", color: "#FFFCF5", textAlign: "center", fontSize: "11px", fontWeight: "700" }}>
                    Écrire au secrétariat
                  </span>
                </div>
                <div style={{ position: "absolute", left: "125px", top: "0", width: "250px", height: "380px", borderRadius: "30px", background: "#5457FF", color: "#FFFFFF", padding: "20px", boxSizing: "border-box", boxShadow: "0 40px 70px rgba(20,20,60,0.35)", display: "flex", flexDirection: "column", gap: "12px", fontFamily: "'Montserrat', sans-serif" }}>
                  <span style={{ fontStyle: "italic", fontWeight: "900", fontSize: "22px" }}>
                    WASSALNI
                  </span>
                  <div style={{ padding: "12px", borderRadius: "16px", background: "#FFFFFF", color: "#1E1F5C", display: "flex", flexDirection: "column", gap: "7px", fontFamily: "'Instrument Sans', sans-serif" }}>
                    <span style={{ fontSize: "9px", fontWeight: "700", color: "#5E607E" }}>
                      Départ
                    </span>
                    <span style={{ padding: "7px 9px", borderRadius: "8px", background: "#F2F2FA", fontSize: "12px", fontWeight: "700" }}>
                      Centre-ville
                    </span>
                    {" "}
                    <span style={{ fontSize: "9px", fontWeight: "700", color: "#5E607E" }}>
                      Arrivée
                    </span>
                    <span style={{ padding: "7px 9px", borderRadius: "8px", background: "#F2F2FA", fontSize: "12px", fontWeight: "700" }}>
                      Gare centrale
                    </span>
                    {" "}
                    <span style={{ padding: "9px", borderRadius: "10px", background: "#5457FF", color: "#FFFFFF", textAlign: "center", fontSize: "12px", fontWeight: "700" }}>
                      Rechercher un trajet
                    </span>
                  </div>
                  <div style={{ marginTop: "auto", padding: "10px 12px", borderRadius: "14px", background: "#1E1F5C", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Instrument Sans', sans-serif", fontSize: "12px", fontWeight: "700" }}>
                    <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#12805C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      ✓
                    </span>
                    Demande acceptée
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* key facts */}
          <dl style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px 72px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px" }}>
            <div style={{ padding: "22px 24px", background: "#FFFFFF", borderRadius: "18px 0 0 18px" }}>
              <dt style={{ fontSize: "13px", fontWeight: "600", color: "#5A5A5A" }}>
                Spécialité
              </dt>
              <dd style={{ margin: "6px 0 0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "19px" }}>
                Conception accessible
              </dd>
            </div>
            <div style={{ padding: "22px 24px", background: "#FFFFFF" }}>
              <dt style={{ fontSize: "13px", fontWeight: "600", color: "#5A5A5A" }}>
                Formation
              </dt>
              <dd style={{ margin: "6px 0 0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "19px" }}>
                {"M2 Technologie & Handicap"}
              </dd>
            </div>
            <div style={{ padding: "22px 24px", background: "#FFFFFF" }}>
              <dt style={{ fontSize: "13px", fontWeight: "600", color: "#5A5A5A" }}>
                Outils
              </dt>
              <dd style={{ margin: "6px 0 0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "19px" }}>
                Figma, FigJam, React
              </dd>
            </div>
            <div style={{ padding: "22px 24px", background: "#FFFFFF", borderRadius: "0 18px 18px 0" }}>
              <dt style={{ fontSize: "13px", fontWeight: "600", color: "#5A5A5A" }}>
                Langues
              </dt>
              <dd style={{ margin: "6px 0 0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "19px" }}>
                Français, anglais, LSF
              </dd>
            </div>
          </dl>
        </section>
        {/* CAPABILITIES */}
        <section aria-labelledby="titre-apport" style={{ background: "#141414", color: "#F4F3EF" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 24px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px" }}>
              <h2 id="titre-apport" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.4vw, 56px)", lineHeight: "1.04", letterSpacing: "-0.02em", maxWidth: "16ch" }}>
                Quatre casquettes, une seule démarche
              </h2>
              <p style={{ margin: "0", maxWidth: "38ch", fontSize: "17px", lineHeight: "1.55", color: "#D6D4CC" }}>
                De la première question posée à l'utilisateur jusqu'au composant en production.
              </p>
            </div>
            <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: "16px" }}>
              <li style={{ padding: "24px", borderRadius: "22px", background: "#1F1F1F", border: "1px solid #333333", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div aria-hidden="true" style={{ height: "110px", borderRadius: "14px", background: "#2A2A2A", position: "relative", overflow: "hidden" }}>
                  <span style={{ position: "absolute", left: "14px", top: "16px", width: "70px", height: "56px", background: "#FFE58A", transform: "rotate(-4deg)", borderRadius: "3px" }} />
                  <span style={{ position: "absolute", left: "76px", top: "30px", width: "70px", height: "56px", background: "#9FD3FF", transform: "rotate(3deg)", borderRadius: "3px" }} />
                  <span style={{ position: "absolute", left: "140px", top: "14px", width: "70px", height: "56px", background: "#FFB3C7", transform: "rotate(-2deg)", borderRadius: "3px" }} />
                </div>
                <h3 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px" }}>
                  Comprendre
                </h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#D6D4CC" }}>
                  Entretiens, benchmark, audit, parcours utilisateur
                </p>
              </li>
              <li style={{ padding: "24px", borderRadius: "22px", background: "#1F1F1F", border: "1px solid #333333", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div aria-hidden="true" style={{ height: "110px", borderRadius: "14px", background: "#2A2A2A", padding: "14px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ width: "60%", height: "10px", borderRadius: "5px", background: "#F4F3EF" }} />
                  <span style={{ display: "flex", gap: "6px" }}>
                    <span style={{ width: "66px", height: "24px", borderRadius: "999px", background: "#1F3BB8" }} />
                    <span style={{ width: "66px", height: "24px", borderRadius: "999px", border: "2px solid #F4F3EF", boxSizing: "border-box" }} />
                  </span>
                  <span style={{ display: "flex", gap: "6px" }}>
                    <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#FFE58A" }} />
                    <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#9FD3FF" }} />
                    <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#FFB3C7" }} />
                  </span>
                </div>
                <h3 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px" }}>
                  Concevoir
                </h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#D6D4CC" }}>
                  User flows, wireframes, maquettes, design system
                </p>
              </li>
              <li style={{ padding: "24px", borderRadius: "22px", background: "#1F1F1F", border: "1px solid #333333", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div aria-hidden="true" style={{ height: "110px", borderRadius: "14px", background: "#2A2A2A", padding: "14px", boxSizing: "border-box", display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ width: "70px", height: "70px", borderRadius: "14px", background: "#1F3BB8", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "30px" }}>
                    Aa
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12px", fontWeight: "700" }}>
                    <span style={{ color: "#9FE3BF" }}>
                      ✓ AA 7,5:1
                    </span>
                    <span style={{ color: "#9FE3BF" }}>
                      ✓ AAA
                    </span>
                    <span style={{ color: "#D6D4CC" }}>
                      RGAA 3.2
                    </span>
                  </span>
                </div>
                <h3 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px" }}>
                  Rendre accessible
                </h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#D6D4CC" }}>
                  RGAA, WCAG, tests au lecteur d'écran, FALC
                </p>
              </li>
              <li style={{ padding: "24px", borderRadius: "22px", background: "#1F1F1F", border: "1px solid #333333", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div aria-hidden="true" style={{ height: "110px", borderRadius: "14px", background: "#2A2A2A", padding: "14px", boxSizing: "border-box", fontFamily: "ui-monospace, monospace", fontSize: "12px", lineHeight: "1.6", color: "#D6D4CC" }}>
                  <span style={{ color: "#FFB3C7" }}>
                    {"<Button"}
                  </span>
                  {" variant="}
                  <span style={{ color: "#9FE3BF" }}>
                    "primary"
                  </span>
                  <span style={{ color: "#FFB3C7" }}>
                    {">"}
                  </span>
                  {" "}<br />
                  {" Réserver"}
                  {" "}<br />
                  <span style={{ color: "#FFB3C7" }}>
                    {"</Button>"}
                  </span>
                </div>
                <h3 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "22px" }}>
                  Développer
                </h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#D6D4CC" }}>
                  React, TypeScript, Tailwind : du design au code
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* WORK */}
        <section id="travaux" aria-labelledby="titre-travaux" style={{ maxWidth: "1240px", margin: "0 auto", padding: "104px 24px 88px", display: "flex", flexDirection: "column", gap: "32px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", marginBottom: "8px" }}>
            <h2 id="titre-travaux" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(40px, 5.6vw, 76px)", lineHeight: "1", letterSpacing: "-0.03em" }}>
              Projets choisis
            </h2>
            <p style={{ margin: "0", maxWidth: "40ch", fontSize: "17px", lineHeight: "1.55", color: "#3A3A3A" }}>
              Trois études de cas, trois façons de travailler : refondre, concevoir pour tous, numériser un métier.
            </p>
          </div>
          {/* 01 Wassalni */}
          <article aria-labelledby="p-wassalni" style={{ borderRadius: "32px", background: "#5457FF", color: "#FFFFFF", overflow: "hidden", display: "flex", flexWrap: "wrap", alignItems: "stretch" }}>
            <div style={{ flex: "1 1 420px", minWidth: "0", padding: "44px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "700", letterSpacing: "0.08em" }}>
                01 · APPLICATION MOBILE
              </p>
              <h3 id="p-wassalni" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 3.8vw, 52px)", lineHeight: "1.02", letterSpacing: "-0.02em" }}>
                Wassalni
              </h3>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.5", maxWidth: "34ch" }}>
                J'ai piloté cette app de covoiturage en tant que PO, puis je l'ai auditée et repensée en designer.
              </p>
              <ul aria-label="Chiffres clés" style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "28px" }}>
                <li>
                  <span style={{ display: "block", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "40px", lineHeight: "1" }}>
                    12
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    problèmes repérés
                  </span>
                </li>
                <li>
                  <span style={{ display: "block", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "40px", lineHeight: "1" }}>
                    6
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    écrans repensés
                  </span>
                </li>
              </ul>
              <ul aria-label="Méthodes" style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "8px", fontSize: "14px", fontWeight: "600" }}>
                <li style={{ padding: "6px 12px", borderRadius: "999px", background: "#4446CE" }}>
                  Audit heuristique
                </li>
                <li style={{ padding: "6px 12px", borderRadius: "999px", background: "#4446CE" }}>
                  Redesign
                </li>
                <li style={{ padding: "6px 12px", borderRadius: "999px", background: "#4446CE" }}>
                  Design system
                </li>
              </ul>
              <a href="/projects/wassalni/" style={{ marginTop: "auto", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 24px", borderRadius: "999px", background: "#FFFFFF", color: "#1E1F5C", fontWeight: "700", textDecoration: "none" }}>
                Lire l'étude de cas Wassalni
                <span aria-hidden="true">
                  →
                </span>
              </a>
            </div>
            <div aria-hidden="true" style={{ flex: "1 1 420px", minWidth: "0", minHeight: "420px", position: "relative", background: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.18), transparent 60%)" }}>
              <div style={{ position: "absolute", left: "50%", bottom: "-70px", transform: "translateX(-50%)", width: "270px", height: "470px", boxSizing: "border-box", borderRadius: "40px", border: "9px solid #14152E", background: "#FFFFFF", overflow: "hidden", color: "#1E1F5C", display: "flex", flexDirection: "column", fontFamily: "'Instrument Sans', sans-serif" }}>
                <div style={{ padding: "14px 12px 8px", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <b style={{ fontSize: "14px" }}>
                    Centre-ville → Gare centrale
                  </b>
                  <span style={{ fontSize: "10px", color: "#5E607E" }}>
                    Mar. 25 juin · 1 passager
                  </span>
                </div>
                <div style={{ padding: "0 12px 8px", display: "flex", gap: "5px" }}>
                  <span style={{ padding: "4px 8px", borderRadius: "999px", background: "#1E1F5C", color: "#FFFFFF", fontSize: "10px", fontWeight: "700" }}>
                    ✓ Bagages
                  </span>
                  <span style={{ padding: "4px 8px", borderRadius: "999px", border: "1px solid #9C9DB3", fontSize: "10px", fontWeight: "700" }}>
                    Non-fumeur
                  </span>
                </div>
                <div style={{ flex: "1", padding: "8px 10px", background: "#F7F7FB", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ padding: "12px", borderRadius: "14px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", fontWeight: "800", fontSize: "14px" }}>
                      07:30
                      <span style={{ color: "#2A2CB0" }}>
                        1 800 DA
                      </span>
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "700" }}>
                      Mehdi · ★ 4,8 (54)
                    </span>
                    <span style={{ alignSelf: "flex-start", padding: "2px 6px", borderRadius: "6px", background: "#E3F4EC", color: "#0D5C42", fontSize: "10px", fontWeight: "700" }}>
                      ✓ Profil vérifié
                    </span>
                  </div>
                  <div style={{ padding: "12px", borderRadius: "14px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ display: "flex", justifyContent: "space-between", fontWeight: "800", fontSize: "14px" }}>
                      14:00
                      <span style={{ color: "#2A2CB0" }}>
                        2 000 DA
                      </span>
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "700" }}>
                      Nadia · ★ 5,0 (12)
                    </span>
                    <span style={{ alignSelf: "flex-start", padding: "2px 6px", borderRadius: "6px", background: "#E3F4EC", color: "#0D5C42", fontSize: "10px", fontWeight: "700" }}>
                      ✓ Profil vérifié
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", right: "8%", top: "60px", padding: "10px 14px", borderRadius: "16px", background: "#1E1F5C", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "700", transform: "rotate(4deg)" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#12805C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  ✓
                </span>
                Demande acceptée
              </div>
            </div>
          </article>
          {/* 02 Sanou */}
          <article aria-labelledby="p-sanou" style={{ borderRadius: "32px", background: "#050505", color: "#FFFFFF", overflow: "hidden", display: "flex", flexWrap: "wrap-reverse", alignItems: "stretch" }}>
            <div aria-hidden="true" style={{ flex: "1 1 420px", minWidth: "0", minHeight: "420px", position: "relative", background: "radial-gradient(ellipse 50% 70% at 40% 0%, rgba(192,132,252,0.32), transparent 70%)" }}>
              <svg width="100%" height="100%" viewBox="0 0 500 420" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: "0" }}>
                <defs>
                  <linearGradient id="cone2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.16" />
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon points="180,0 230,0 380,420 40,420" fill="url(#cone2)" />
              </svg>
              <p style={{ position: "absolute", left: "40px", top: "60px", margin: "0", fontFamily: "'Fondamento', serif", fontSize: "44px", lineHeight: "1.02", maxWidth: "8ch" }}>
                Petite scène, grandes histoires.
              </p>
              <div style={{ position: "absolute", right: "36px", bottom: "36px", width: "230px", background: "#FFFFFF", color: "#050505", border: "2px solid #050505", boxShadow: "8px 8px 0 0 #C084FC", padding: "14px", display: "flex", flexDirection: "column", gap: "10px", fontFamily: "'Instrument Sans', sans-serif" }}>
                <b style={{ fontSize: "13px" }}>
                  Paramètres d'accessibilité
                </b>
                {" "}
                <span style={{ display: "flex", gap: "5px", fontSize: "11px", fontWeight: "700" }}>
                  <span style={{ padding: "4px 7px", border: "1.5px solid #050505" }}>
                    Clair
                  </span>
                  <span style={{ padding: "4px 7px", border: "1.5px solid #050505" }}>
                    Sombre
                  </span>
                  <span style={{ padding: "4px 7px", background: "#050505", color: "#FFFFFF" }}>
                    ✓ Élevé
                  </span>
                </span>
                {" "}
                <span style={{ fontSize: "11px", fontWeight: "700" }}>
                  Taille du texte · 125 %
                </span>
                {" "}
                <span style={{ position: "relative", height: "4px", background: "#D1D5DB" }}>
                  <span style={{ position: "absolute", left: "0", width: "50%", height: "4px", background: "#050505" }} />
                  <span style={{ position: "absolute", left: "46%", top: "-6px", width: "16px", height: "16px", borderRadius: "50%", background: "#050505" }} />
                </span>
              </div>
            </div>
            <div style={{ flex: "1 1 420px", minWidth: "0", padding: "44px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "700", letterSpacing: "0.08em", color: "#C084FC" }}>
                02 · SITE WEB · ASSOCIATION CULTURELLE
              </p>
              <h3 id="p-sanou" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 3.8vw, 52px)", lineHeight: "1.02", letterSpacing: "-0.02em" }}>
                Sanou va bien
              </h3>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.5", maxWidth: "34ch", color: "#E5E5EA" }}>
                Un site où chaque visiteur règle l'affichage à sa vue, et un tableau de bord pour que l'association soit autonome.
              </p>
              <ul aria-label="Points forts" style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "28px" }}>
                <li>
                  <span style={{ display: "block", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "40px", lineHeight: "1" }}>
                    6
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "#E5E5EA" }}>
                    réglages d'accessibilité
                  </span>
                </li>
                <li>
                  <span style={{ display: "block", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "40px", lineHeight: "1" }}>
                    5
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "#E5E5EA" }}>
                    pages clés
                  </span>
                </li>
              </ul>
              <ul aria-label="Méthodes" style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "8px", fontSize: "14px", fontWeight: "600" }}>
                <li style={{ padding: "6px 12px", border: "1px solid #FFFFFF" }}>
                  Recueil des besoins
                </li>
                <li style={{ padding: "6px 12px", border: "1px solid #FFFFFF" }}>
                  Accessibilité
                </li>
                <li style={{ padding: "6px 12px", background: "#C084FC", color: "#050505", border: "1px solid #C084FC" }}>
                  Bientôt en ligne
                </li>
              </ul>
              <a href="/projects/sanou-va-bien/" style={{ marginTop: "auto", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 24px", background: "#FFFFFF", color: "#050505", fontWeight: "700", textDecoration: "none", boxShadow: "6px 6px 0 0 #C084FC" }}>
                Lire l'étude de cas Sanou va bien
                <span aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </article>
          {/* 03 FDS Institut */}
          <article aria-labelledby="p-fds" style={{ borderRadius: "32px", background: "#FFFCF5", color: "#001829", border: "1px solid #EDE5D6", overflow: "hidden", display: "flex", flexWrap: "wrap", alignItems: "stretch", fontFamily: "'Montserrat', sans-serif" }}>
            <div style={{ flex: "1 1 420px", minWidth: "0", padding: "44px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ margin: "0", fontSize: "14px", fontWeight: "700", letterSpacing: "0.08em", color: "#B34700" }}>
                {"03 · PLATEFORME ÉDUCATION · DESIGN & CODE"}
              </p>
              <h3 id="p-fds" style={{ margin: "0", fontWeight: "800", fontSize: "clamp(34px, 3.8vw, 52px)", lineHeight: "1.02", letterSpacing: "-0.04em" }}>
                FDS Institut
              </h3>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.5", maxWidth: "34ch", color: "#2A3B4A" }}>
                Un institut de langues qui tournait au papier : site public, espace apprenant et back-office, conçus et développés seul.
              </p>
              <ul aria-label="Chiffres clés" style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "28px" }}>
                <li>
                  <span style={{ display: "block", fontWeight: "800", fontSize: "40px", lineHeight: "1" }}>
                    3
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    espaces, une seule base
                  </span>
                </li>
                <li>
                  <span style={{ display: "block", fontWeight: "800", fontSize: "40px", lineHeight: "1" }}>
                    7
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    étapes du parcours apprenant
                  </span>
                </li>
              </ul>
              <ul aria-label="Méthodes" style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "8px", fontSize: "14px", fontWeight: "600" }}>
                <li style={{ padding: "6px 12px", borderRadius: "999px", background: "#FFE3C7" }}>
                  Entretiens
                </li>
                <li style={{ padding: "6px 12px", borderRadius: "999px", background: "#FFE3C7" }}>
                  Audit des processus
                </li>
                <li style={{ padding: "6px 12px", borderRadius: "999px", background: "#FFE3C7" }}>
                  Développement
                </li>
              </ul>
              <a href="/projects/fds-institut/" style={{ marginTop: "auto", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 24px", borderRadius: "999px", background: "#001829", color: "#FFFCF5", fontWeight: "700", textDecoration: "none" }}>
                Lire l'étude de cas FDS Institut
                <span aria-hidden="true">
                  →
                </span>
              </a>
            </div>
            <div aria-hidden="true" style={{ flex: "1 1 420px", minWidth: "0", minHeight: "420px", position: "relative", background: "radial-gradient(120% 90% at 85% 25%, #FFE8D1 0%, #FFFCF5 60%)" }}>
              <span style={{ position: "absolute", left: "8%", bottom: "40px", width: "86px", height: "86px", borderRadius: "50%", background: "radial-gradient(circle at 32% 30%, #FFB066, #FF7700 55%, #C24F00)" }} />
              <span style={{ position: "absolute", right: "10%", top: "36px", width: "0", height: "0", borderLeft: "34px solid transparent", borderRight: "34px solid transparent", borderBottom: "58px solid #F4C04E" }} />
              <div style={{ position: "absolute", left: "12%", top: "90px", width: "72%", padding: "10px 10px 14px", borderRadius: "16px 16px 4px 4px", background: "linear-gradient(#24323F, #0C141B)", transform: "rotate(-3deg)", boxShadow: "0 40px 60px -30px rgba(0,24,41,.7)" }}>
                <img src="/projects/fds/accueil-ordinateur.webp" alt="" width="800" height="499" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto", borderRadius: "4px" }} />
              </div>
              <div style={{ position: "absolute", right: "8%", top: "250px", width: "150px", padding: "12px 14px 34px", borderRadius: "4px", background: "#FBF6EA", transform: "rotate(7deg)", boxShadow: "0 22px 34px -20px rgba(0,24,41,.45)" }}>
                <span style={{ display: "block", fontFamily: "'Caveat', cursive", fontSize: "20px", color: "#1F3B8A" }}>
                  Reçu
                </span>
                <span style={{ display: "block", fontFamily: "'Caveat', cursive", fontSize: "16px", color: "#1F3B8A" }}>
                  Yasmine B. — B1
                </span>
                <span style={{ position: "absolute", right: "8px", bottom: "8px", padding: "1px 7px", border: "2px solid #C8372D", color: "#C8372D", fontWeight: "800", fontSize: "12px", letterSpacing: ".08em", transform: "rotate(-14deg)" }}>
                  PAYÉ
                </span>
              </div>
            </div>
          </article>
        </section>
        {/* METHOD */}
        <section id="methode" aria-labelledby="titre-methode" style={{ background: "#FFFFFF", borderTop: "1px solid #D9D7D0", borderBottom: "1px solid #D9D7D0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 24px", display: "flex", flexDirection: "column", gap: "44px" }}>
            <h2 id="titre-methode" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.4vw, 56px)", lineHeight: "1.04", letterSpacing: "-0.02em", maxWidth: "18ch" }}>
              Ma façon de travailler
            </h2>
            <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))", gap: "0", borderTop: "2px solid #141414" }}>
              <li style={{ padding: "28px 24px 0 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span aria-hidden="true" style={{ marginTop: "-42px", width: "28px", height: "28px", borderRadius: "50%", background: "#1F3BB8", border: "6px solid #FFFFFF" }} />
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "54px", lineHeight: "1", color: "#1F3BB8" }}>
                  01
                </span>
                <h3 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "24px" }}>
                  Comprendre
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3A3A3A" }}>
                  Qui utilise le produit, et où ça coince.
                </p>
              </li>
              <li style={{ padding: "28px 24px 0 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span aria-hidden="true" style={{ marginTop: "-42px", width: "28px", height: "28px", borderRadius: "50%", background: "#1F3BB8", border: "6px solid #FFFFFF" }} />
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "54px", lineHeight: "1", color: "#1F3BB8" }}>
                  02
                </span>
                <h3 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "24px" }}>
                  Concevoir
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3A3A3A" }}>
                  Parcours, wireframes, puis maquettes.
                </p>
              </li>
              <li style={{ padding: "28px 24px 0 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span aria-hidden="true" style={{ marginTop: "-42px", width: "28px", height: "28px", borderRadius: "50%", background: "#1F3BB8", border: "6px solid #FFFFFF" }} />
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "54px", lineHeight: "1", color: "#1F3BB8" }}>
                  03
                </span>
                <h3 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "24px" }}>
                  Tester
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3A3A3A" }}>
                  Avec des utilisateurs, et des lecteurs d'écran.
                </p>
              </li>
              <li style={{ padding: "28px 24px 0 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span aria-hidden="true" style={{ marginTop: "-42px", width: "28px", height: "28px", borderRadius: "50%", background: "#1F3BB8", border: "6px solid #FFFFFF" }} />
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "54px", lineHeight: "1", color: "#1F3BB8" }}>
                  04
                </span>
                <h3 style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "24px" }}>
                  Livrer
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3A3A3A" }}>
                  Documenter, accompagner le code, mesurer.
                </p>
              </li>
            </ol>
          </div>
        </section>
        {/* ACCESSIBILITY BAND */}
        <section aria-labelledby="titre-a11y" style={{ background: "#1F3BB8", color: "#FFFFFF", position: "relative", overflow: "hidden" }}>
          <p aria-hidden="true" style={{ position: "absolute", right: "-20px", bottom: "-70px", margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "320px", lineHeight: "1", color: "rgba(255,255,255,0.08)" }}>
            A11Y
          </p>
          <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "96px 24px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
            <div style={{ flex: "999 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2 id="titre-a11y" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.4vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.02em" }}>
                L'accessibilité n'est pas une option. C'est mon point de départ.
              </h2>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", maxWidth: "46ch" }}>
                Chaque projet intègre les critères RGAA dès la maquette. Ce portfolio aussi.
              </p>
              <a href="/accessibility/" style={{ alignSelf: "flex-start", color: "#FFFFFF", fontWeight: "700", fontSize: "17px" }}>
                Lire la déclaration d’accessibilité
              </a>
            </div>
            <ul style={{ flex: "1 1 360px", listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <li style={{ padding: "20px 22px", borderRadius: "18px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                <span style={{ fontWeight: "700", fontSize: "17px" }}>
                  Référentiels
                </span>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "20px" }}>
                  RGAA 4.1 · WCAG 2.2
                </span>
              </li>
              <li style={{ padding: "20px 22px", borderRadius: "18px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                <span style={{ fontWeight: "700", fontSize: "17px" }}>
                  Tests
                </span>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "20px" }}>
                  NVDA · VoiceOver
                </span>
              </li>
              <li style={{ padding: "20px 22px", borderRadius: "18px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                <span style={{ fontWeight: "700", fontSize: "17px" }}>
                  Langues
                </span>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "20px" }}>
                  LSF, FALC
                </span>
              </li>
            </ul>
          </div>
        </section>
        {/* PARCOURS */}
        <section id="parcours" aria-labelledby="titre-parcours" style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 24px", display: "flex", flexDirection: "column", gap: "44px" }}>
          <h2 id="titre-parcours" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.4vw, 56px)", lineHeight: "1.04", letterSpacing: "-0.02em" }}>
            Parcours
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <h3 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "#5A5A5A" }}>
                EXPÉRIENCES
              </h3>
              <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column" }}>
                <li style={{ padding: "20px 0", borderTop: "1px solid #D9D7D0", display: "grid", gridTemplateColumns: "185px minmax(0, 1fr)", gap: "16px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#5A5A5A" }}>
                    02 – 05 / 2026
                  </span>
                  <span>
                    <b style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "20px" }}>
                      {"Product Designer & référent accessibilité"}
                    </b>
                    {" "}<br />
                    <span style={{ fontSize: "16px", color: "#3A3A3A" }}>
                      Association Sanou va bien
                    </span>
                  </span>
                </li>
                <li style={{ padding: "20px 0", borderTop: "1px solid #D9D7D0", display: "grid", gridTemplateColumns: "185px minmax(0, 1fr)", gap: "16px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#5A5A5A" }}>
                    11 / 2025 – 01 / 2026
                  </span>
                  <span>
                    <b style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "20px" }}>
                      {"Analyse UX & audit RGAA"}
                    </b>
                    {" "}<br />
                    <span style={{ fontSize: "16px", color: "#3A3A3A" }}>
                      Site du département MIASHS, Université Paris 8
                    </span>
                  </span>
                </li>
                <li style={{ padding: "20px 0", borderTop: "1px solid #D9D7D0", display: "grid", gridTemplateColumns: "185px minmax(0, 1fr)", gap: "16px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#5A5A5A" }}>
                    06 – 09 / 2025
                  </span>
                  <span>
                    <b style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "20px" }}>
                      {"Product Designer & développeur front-end"}
                    </b>
                    {" "}<br />
                    <span style={{ fontSize: "16px", color: "#3A3A3A" }}>
                      PROGIX, Montréal
                    </span>
                  </span>
                </li>
                <li style={{ padding: "20px 0", borderTop: "1px solid #D9D7D0", borderBottom: "1px solid #D9D7D0", display: "grid", gridTemplateColumns: "185px minmax(0, 1fr)", gap: "16px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#5A5A5A" }}>
                    01 / 2024 – 06 / 2025
                  </span>
                  <span>
                    <b style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "20px" }}>
                      {"Chef de projet & Product Designer"}
                    </b>
                    {" "}<br />
                    <span style={{ fontSize: "16px", color: "#3A3A3A" }}>
                      Aurafolio, freelance
                    </span>
                  </span>
                </li>
              </ol>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <h3 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "#5A5A5A" }}>
                FORMATION
              </h3>
              <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column" }}>
                <li style={{ padding: "20px 0", borderTop: "1px solid #D9D7D0", display: "grid", gridTemplateColumns: "185px minmax(0, 1fr)", gap: "16px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#5A5A5A" }}>
                    2025 – 2027
                  </span>
                  <span>
                    <b style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "20px" }}>
                      {"Master MIASHS · Technologie & Handicap"}
                    </b>
                    {" "}<br />
                    <span style={{ fontSize: "16px", color: "#3A3A3A" }}>
                      Université Paris 8
                    </span>
                  </span>
                </li>
                <li style={{ padding: "20px 0", borderTop: "1px solid #D9D7D0", display: "grid", gridTemplateColumns: "185px minmax(0, 1fr)", gap: "16px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#5A5A5A" }}>
                    2024 – 2025
                  </span>
                  <span>
                    <b style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "20px" }}>
                      Master Gestion et analyse des données massives
                    </b>
                    {" "}<br />
                    <span style={{ fontSize: "16px", color: "#3A3A3A" }}>
                      Analyse de données d'usage
                    </span>
                  </span>
                </li>
                <li style={{ padding: "20px 0", borderTop: "1px solid #D9D7D0", borderBottom: "1px solid #D9D7D0", display: "grid", gridTemplateColumns: "185px minmax(0, 1fr)", gap: "16px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#5A5A5A" }}>
                    2021 – 2024
                  </span>
                  <span>
                    <b style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "20px" }}>
                      Licence Systèmes informatiques
                    </b>
                    {" "}<br />
                    <span style={{ fontSize: "16px", color: "#3A3A3A" }}>
                      Développement, bases de données
                    </span>
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </section>
        {/* FRONT-END + ABOUT */}
        <section id="apropos" aria-labelledby="titre-apropos" style={{ background: "#FFFFFF", borderTop: "1px solid #D9D7D0" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 24px", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
            <div style={{ flex: "0 1 340px", aspectRatio: "4 / 5", borderRadius: "28px", background: "#E9E8E2", display: "flex", alignItems: "center", justifyContent: "center", color: "#5A5A5A", fontWeight: "600", position: "relative" }}>
              <img src="https://storage.googleapis.com/publicasse/my_portfolio/Belouettar%20Imed%20Eddine.webp" alt="Portrait d’Imed Belouettar" width="340" height="425" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "28px" }} />
              <span aria-hidden="true" style={{ position: "absolute", right: "-18px", bottom: "28px", padding: "10px 16px", borderRadius: "999px", background: "#1F3BB8", color: "#FFFFFF", fontSize: "14px", fontWeight: "700", transform: "rotate(-4deg)" }}>
                Designer qui code
              </span>
            </div>
            <div style={{ flex: "999 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2 id="titre-apropos" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.4vw, 56px)", lineHeight: "1.04", letterSpacing: "-0.02em" }}>
                À propos
              </h2>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#3A3A3A" }}>
                {"J'ai commencé par le code, puis j'ai voulu comprendre pour qui je le faisais. Aujourd'hui, je me forme à la conception centrée utilisateur et à l'accessibilité dans le Master Technologie & Handicap de Paris 8."}
              </p>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#3A3A3A" }}>
                Ce double profil me permet de parler le langage des utilisateurs, des designers et des développeurs. Je pratique la langue des signes française.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
                <h3 style={{ margin: "0", fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "#5A5A5A" }}>
                  AUSSI EN FRONT-END
                </h3>
                <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  <li>
                    <a href="https://divanhane.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "999px", border: "1px solid #D9D7D0", color: "#141414", fontWeight: "600", textDecoration: "none" }}>
                      Divan Hane · restaurant
                      <span className="sr-only">
                        (nouvelle fenêtre)
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://picci-five.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "999px", border: "1px solid #D9D7D0", color: "#141414", fontWeight: "600", textDecoration: "none" }}>
                      Picci · station de services
                      <span className="sr-only">
                        (nouvelle fenêtre)
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://cabinetcm.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "0 16px", borderRadius: "999px", border: "1px solid #D9D7D0", color: "#141414", fontWeight: "600", textDecoration: "none" }}>
                      CabinetCM · conseil
                      <span className="sr-only">
                        (nouvelle fenêtre)
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT */}
        <section id="contact" aria-labelledby="titre-contact" style={{ background: "#141414", color: "#F4F3EF" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "112px 24px 96px", display: "flex", flexDirection: "column", gap: "32px" }}>
            <p style={{ margin: "0", display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: "600", color: "#D6D4CC" }}>
              <span aria-hidden="true" style={{ flex: "none", width: "10px", height: "10px", borderRadius: "50%", background: "#3DDC84" }} />
              Disponible dès mars 2027 · stage de 6 mois en design, accessibilité ou développement
            </p>
            <h2 id="titre-contact" style={{ margin: "0", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "800", fontSize: "clamp(44px, 7vw, 104px)", lineHeight: "0.98", letterSpacing: "-0.035em" }}>
              Parlons de votre
              {" "}<br />
              prochain produit.
            </h2>
            <a href="mailto:ie.belouettar@gmail.com" style={{ alignSelf: "flex-start", color: "#F4F3EF", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: "700", fontSize: "clamp(22px, 3vw, 36px)", textUnderlineOffset: "8px" }}>
              ie.belouettar@gmail.com
            </a>
            <ul style={{ listStyle: "none", margin: "8px 0 0", padding: "0", display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <li>
                <a href="https://www.linkedin.com/in/ie-belouettar/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 24px", borderRadius: "999px", background: "#F4F3EF", color: "#141414", fontWeight: "700", textDecoration: "none" }}>
                  LinkedIn
                  <span className="sr-only">
                    (nouvelle fenêtre)
                  </span>
                </a>
              </li>
              <li>
                <a href="https://storage.googleapis.com/publicasse/my_portfolio/CV%20OCTOBRE%20STAGE.pdf" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 24px", borderRadius: "999px", border: "2px solid #F4F3EF", color: "#F4F3EF", fontWeight: "700", textDecoration: "none" }}>
                  CV (PDF)
                  <span className="sr-only"> (nouvelle fenêtre)</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/itsimed" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 24px", borderRadius: "999px", border: "2px solid #F4F3EF", color: "#F4F3EF", fontWeight: "700", textDecoration: "none" }}>
                  GitHub
                  <span className="sr-only">
                    (nouvelle fenêtre)
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div style={{ borderTop: "1px solid #333333" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", fontSize: "15px", color: "#D6D4CC" }}>
              <p style={{ margin: "0" }}>
                © 2026 Imed Belouettar · Paris
              </p>
              <p style={{ margin: "0" }}>
                <a href="/accessibility/" style={{ color: "#F4F3EF" }}>
                  Accessibilité : conformité visée RGAA 4.1
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
