/* global React */
const { useState, useEffect, useRef } = React;

/* Ornamente entfernt, frühere Komponenten als No-Op gehalten,
 damit alte Aufrufe nichts kaputt machen. */
const __NoOrn = () => null;
const AkanthusBand = __NoOrn;
const AkanthusMini = __NoOrn;
const AkanthusCorner = __NoOrn;
const AkanthusVertical = __NoOrn;
const AkanthusFlourish = __NoOrn;
const HeroCartouche = __NoOrn;
const FooterOrnament = __NoOrn;
const CornerOrnament = __NoOrn;

/* Image Placeholder, zeigt entweder ein echtes Bild (wenn src oder bgClass) oder einen Platzhalter */
function ImagePlaceholder({ label, mark, aspect = '4/5', minHeight, src, alt = '', objectPosition = 'center', bgClass }) {
 if (bgClass) {
 return (
 <div
 className={`image-frame ${bgClass}`}
 role="img"
 aria-label={alt}
 style={{ aspectRatio: aspect, minHeight, width: '100%' }}
 />
 );
 }
 if (src) {
 return (
 <div className="image-frame" style={{ aspectRatio: aspect, minHeight, width: '100%' }}>
 <img
 src={src}
 alt={alt}
 style={{
 width: '100%',
 height: '100%',
 objectFit: 'cover',
 objectPosition,
 display: 'block'
 }}
 />
 </div>
 );
 }
 return (
 <div className="image-ph" style={{ aspectRatio: aspect, minHeight, width: '100%' }}>
 {mark && <span className="ph-mark">{mark}</span>}
 <span className="label">{label}</span>
 </div>
 );
}

/* Testimonial Card with show-more */
function TestimonialCard({ t, index, threshold = 360, defaultOpen = false }) {
 const [open, setOpen] = useState(defaultOpen);
 const isLong = t.text.length > threshold;
 const collapsed = isLong && !open;
 let display = t.text;
 if (collapsed) {
 const slice = t.text.slice(0, threshold);
 const lastDot = Math.max(slice.lastIndexOf('. '), slice.lastIndexOf('! '), slice.lastIndexOf('? '));
 const cut = lastDot > threshold * 0.6 ? lastDot + 1 : threshold;
 display = t.text.slice(0, cut).trim() + ' …';
 }
 return (
 <article className="t-card-rich">
 <div className="t-card-head">
 <span className="t-num">Stimme {String(index + 1).padStart(2, '0')}</span>
 {t.context && <span className="t-tag">{t.context}</span>}
 </div>
 <div className="t-quote-mark">„</div>
 <blockquote>
 {display}
 </blockquote>
 {isLong && (
 <button
 type="button"
 className="t-show-more"
 onClick={() => setOpen(!open)}
 >
 {open ? 'Weniger anzeigen' : 'Ganze Stimme lesen'}
 <span className="t-arrow" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>↓</span>
 </button>
 )}
 {t.name && (
 <div className="t-attribution">
 <span className="t-name">{t.name}</span>
 </div>
 )}
 </article>
 );
}

/* Header */
function Header({ route, navigate }) {
 const [open, setOpen] = useState(false);
 const links = [
 { id: 'home', label: 'Start' },
 { id: 'angebote', label: 'Angebote' },
 { id: 'ueber-mich', label: 'Über mich' },
 { id: 'testimonials', label: 'Stimmen' },
 { id: 'kontakt', label: 'Kontakt' },
 ];
 const isActive = (id) => {
 if (id === 'home') return route === 'home';
 if (id === 'angebote') return route === 'angebote' || route.startsWith('angebot/');
 return route === id;
 };
 return (
 <header className="site-header">
 <div className="nav">
 <div className="brand" onClick={() => { navigate('home'); setOpen(false); }}>
 <span>frei fühlen</span>
 <span className="brand-sub">Praxis · Gabriela Rätzo</span>
 </div>
 <button className="nav-toggle" onClick={() => setOpen(!open)}>
 {open ? 'Schliessen' : 'Menü'}
 </button>
 <nav className={`nav-links ${open ? 'open' : ''}`}>
 {links.map(l => (
 <a key={l.id}
 className={isActive(l.id) ? 'active' : ''}
 onClick={() => { navigate(l.id); setOpen(false); }}>
 {l.label}
 </a>
 ))}
 </nav>
 </div>
 </header>
 );
}

/* Footer */
function Footer({ navigate }) {
 return (
 <footer className="site-footer">
 <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 56 }}>
 
 </div>
 <div className="container">
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48 }}>
 <div>
 <h4>frei fühlen</h4>
 <p className="footer-tag">
 Eine kleine, persönliche Praxis für Berührung, Begegnung und Atem.
 </p>
 </div>
 <div>
 <span className="col-label">Praxis</span>
 <div className="footer-block">
 Gabriela Rätzo<br/>
  6422 Steinen
 </div>
 </div>
 <div>
 <span className="col-label">Kontakt</span>
 <div className="footer-block">
 <a href="tel:+41797447468">079 744 74 68</a><br/>
 <a href="mailto:info@gabriela-raetzo.ch">info@gabriela-raetzo.ch</a>
 </div>
 </div>
 <div>
 <span className="col-label">Navigation</span>
 <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
 <a onClick={() => navigate('angebote')} style={{ cursor: 'pointer' }}>Angebote</a>
 <a onClick={() => navigate('ueber-mich')} style={{ cursor: 'pointer' }}>Über mich</a>
 <a onClick={() => navigate('testimonials')} style={{ cursor: 'pointer' }}>Stimmen</a>
 <a onClick={() => navigate('kontakt')} style={{ cursor: 'pointer' }}>Kontakt</a>
 </div>
 </div>
 </div>
 <div className="footer-bottom">
 <span>© 2026 · frei fühlen · Gabriela Rätzo</span>
 <span>ehrlich · herzlich · empathisch</span>
 </div>
 </div>
 </footer>
 );
}

/* Sentences, splittet einen Text in einzelne Sätze. Jeder Satz erscheint auf einer
   eigenen Zeile. Nutzt CSS-Klasse .sentences (display: flex column, kleiner gap).
   Erlaubt mode="loose" für etwas mehr Luft (z. B. in Detail-Seiten). */
function Sentences({ text, className = '', as: Tag = 'div' }) {
  // Split nach Satzende-Punkten, behalte aber Endepunkte.
  // Regex matched Satzgrenzen: . ! ? gefolgt von Leerzeichen + Grossbuchstabe oder „ oder Ende.
  const parts = String(text).split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ„])/g);
  return (
    <Tag className={`sentences ${className}`.trim()}>
      {parts.map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </Tag>
  );
}

Object.assign(window, {
 AkanthusMini, AkanthusBand, AkanthusCorner, AkanthusFlourish, AkanthusVertical,
 HeroCartouche, FooterOrnament, CornerOrnament,
 ImagePlaceholder, TestimonialCard, Sentences, Header, Footer
});
