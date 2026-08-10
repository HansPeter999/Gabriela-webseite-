/* global React, ANGEBOTE, TESTIMONIALS, ImagePlaceholder */

function HomePage({ navigate }) {
 const [showMore, setShowMore] = React.useState(false);
 const Hl = ({ children }) => (
 <span>{children}</span>
 );
 const fragen = [
 {
  titel: 'Stress & Anspannung',
  zeilen: [
   <>Fühlst du dich <Hl>gestresst</Hl>, <Hl>eingeengt</Hl>?</>,
   <>Leidest du unter <Hl>innerer Anspannung</Hl>?</>,
  ],
 },
 {
  titel: 'Erschöpfung & Schlaf',
  zeilen: [
   <>Hast du das Gefühl, <Hl>immer nur leisten zu müssen</Hl>?</>,
   <>Sind dir <Hl>Loslassen und Entspannen fremd geworden</Hl>?</>,
   <>Bist du <Hl>völlig erschöpft</Hl>, <Hl>traurig</Hl>?</>,
   <>Leidest du unter <Hl>Schlafproblemen</Hl>?</>,
  ],
 },
 {
  titel: 'Lebenssituation & Wendepunkte',
  zeilen: [
   <>Bist du in einer <Hl>herausfordernden Lebenssituation</Hl>?</>,
   <>Stehst du an einem <Hl>Wendepunkt in deinem Leben</Hl>?</>,
   <>Erkennst du bei dir eine <Hl>ungesunde Lebensführung</Hl>?</>,
   <>Hast du <Hl>Schwierigkeiten, Beziehungen einzugehen</Hl>?</>,
  ],
 },
 {
  titel: 'Körpergefühl & Berührung',
  zeilen: [
   <>Hast du dein <Hl>positives Körpergefühl</Hl> und deine <Hl>natürliche Sinnlichkeit verloren</Hl>?</>,
   <>Hast du die <Hl>Beziehung zu dir und deinem Körper verloren</Hl>?</>,
   <>Ist da ein Gefühl, deinen eigenen Körper gar nicht mehr mit allen Sinnen wahrzunehmen?</>,
  ],
 },
 {
  titel: 'Atem & Nervensystem',
  zeilen: [
   <>Ist dein <Hl>Atem oberflächlich</Hl>?</>,
   <>Kannst du gar <Hl>nicht mehr richtig durchatmen</Hl>?</>,
   <>Ist dein <Hl>Nervensystem ständig in Alarmbereitschaft</Hl>?</>,
  ],
 },
 {
  titel: 'Angst & Hilflosigkeit',
  zeilen: [
   <>Hast du oft <Hl>unbegründet Angst oder Panik</Hl>?</>,
   <>Fühlst du dich <Hl>hilflos und ohnmächtig</Hl>?</>,
   <><Hl>Spielt dein Körper irgendwie verrückt</Hl>?</>,
  ],
 },
 ];

 return (
 <main>
 {/* 1 · HERO, Aufmerksamkeit & Klarheit */}
 <section className="hero">
 <div className="container">
 <div className="hero-grid">
 <div className="fade-up">
 <div className="eyebrow">Praxis · Gabriela Rätzo · Steinen</div>
 <h1 className="praxis-name">
 <span className="first">frei</span>
 <span className="second">fühlen</span>
 </h1>
 <p className="lead" style={{ marginTop: '1.5rem' }}>
 Über vier Jahrzehnte Erfahrung in Körperarbeit, Bewegung und Begleitung — für Menschen, die bei Anspannung, Erschöpfung<br/>oder innerer Unruhe achtsame Unterstützung suchen.
 </p>
 <p className="lead" style={{ marginTop: '1rem' }}>
 Du darfst bei mir dich selbst sein, durchatmen<br/>und einfach loslassen.
 </p>
 <div className="hero-cta">
              <button className="btn btn-ghost" onClick={() => document.getElementById('wobei-ich-dich-begleiten-kann')?.scrollIntoView({ behavior: 'smooth' })}>
                Bin ich hier richtig?
              </button>
              <button className="btn btn-ghost" onClick={() => navigate('angebote')}>
                Zu den Angeboten
              </button>
              <a className="btn btn-primary" href="mailto:info@gabriela-raetzo.ch">
                Kontakt aufnehmen <span className="arrow">→</span>
              </a>
            </div>
 </div>
 <div className="fade-up-d2">
 <ImagePlaceholder
 bgClass="portrait-gabriela"
 alt="Gabriela Rätzo"
 aspect="949/1385"
 />
 </div>
 </div>
 </div>
 </section>

 {/* 2 · INFO-STRIP, Basisinfos sichtbar */}
 <div className="container">
 <div className="info-strip">
 <div className="item">
 <span className="lbl">Praxis</span>
 <span className="val">6422 Steinen</span>
 </div>
 <div className="item">
 <span className="lbl">Pro Stunde</span>
 <span className="val">CHF 140.–<br/><span className="info-strip-hint">Bar oder Twint</span></span>
 </div>
 <div className="item">
 <span className="lbl">Dauer</span>
 <span className="val">Frei wählbar<br/><span className="info-strip-hint">Massagen ab 90 Min.</span></span>
 </div>
 <div className="item">
 <span className="lbl">Termin</span>
 <span className="val"><a href="mailto:info@gabriela-raetzo.ch" style={{ borderBottom: '1px solid var(--gold)' }}>persönlich anfragen</a></span>
 </div>
 </div>
 </div>

 {/* 3 · FRAGEN + ANTWORT, Wiedererkennung des Bedürfnisses, Brücke zum Vertrauen */}
 <section className="bg-paper-warm">
 <div className="container-narrow" style={{ textAlign: 'center' }}>
 <p id="wobei-ich-dich-begleiten-kann" className="t-lead intro-experience">
 Meine Begleitung richtet sich nach deiner Situation, deinem Empfinden und dem, was du im Moment wirklich brauchst.
 </p>
 <h2>Wobei ich dich begleiten kann:</h2>
 </div>
 <div className="container-narrow" style={{ marginTop: 48 }}>
 <div className="fragen-list">
 {fragen.map((group, i) => (
 <div key={i} className="frage-block" style={{
 borderBottom: i < fragen.length - 1 ? '1px solid var(--line-soft)' : 'none',
 }}>
 <div className="frage-titel">{group.titel}</div>
 <div className="frage-lines">
 {group.zeilen.map((q, j) => (
 <p key={j} className="frage-text">{q}</p>
 ))}
 </div>
 </div>
 ))}
 </div>

 {/* Antwort-Block, Brücke zum Angebot */}
 <div className="antwort-block">
 <div className="eyebrow" style={{ color: 'var(--bordeaux)' }}>Meine Antwort</div>
 <h3 className="antwort-headline">
 Wenn du dich in diesen Fragen wiedererkennst, kann dich eine gezielte, achtsame Unterstützung entlasten und stärken.
 </h3>
 <p className="t-body-lg">
 Ich bin für dich da und begleite dich gerne in einem geschützten Raum, in dem du zur Ruhe kommen und klarer spüren kannst, was du brauchst und was dir wirklich gut tut.
 </p>
 {showMore && (
 <>
 <p className="t-body-lg">
 In meiner Arbeit verbinde ich körperorientierte Begleitung, achtsame Berührung, Bewegung, Atem und Gespräch. Daraus entsteht eine individuell abgestimmte Begleitung, die sich an deiner Situation, deinem Körper, deinem Tempo und deinen Bedürfnissen orientiert.
 </p>
 <p className="t-body-lg">
 Durch meine langjährige Erfahrung in Akutpsychiatrie und meine aktuelle Tätigkeit in einer Klinik für Burnout, Schlafstörung, Depression und Angststörung begleite ich Menschen achtsam, verantwortungsvoll und individuell.
 </p>
 <p className="t-body-lg">
 Du kommst zu mir, wenn du dir eine Begleitung wünschst, die nicht nur einzelne Beschwerden betrachtet, sondern dich als ganzen Menschen wahrnimmt.
 </p>
 </>
 )}
 <button
 type="button"
 className="t-toggle-inline"
 onClick={() => setShowMore(!showMore)}
 >
 {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
 <span className="t-arrow" style={{ transform: showMore ? 'rotate(180deg)' : 'rotate(0deg)' }}>↓</span>
 </button>
 <div className="antwort-cta">
 <button className="btn btn-primary" onClick={() => navigate('angebote')}>
 Was ich anbiete <span className="arrow">→</span>
 </button>
 <button className="btn btn-ghost" onClick={() => navigate('ueber-mich')}>
 Mehr über mich
 </button>
 </div>
 </div>
 </div>
 </section>

 {/* 4 · ANGEBOTE, verständliche Erklärung */}
 <section>
 <div className="container">
 <div className="section-head">
 <div className="eyebrow">Angebot</div>
 <h2>Begleitung, die zu dir passt</h2>
 </div>
 <div className="grid grid-3">
 {ANGEBOTE.map(a => (
 <div key={a.id} className="angebot-card" onClick={() => navigate('angebot/' + a.id)} style={{ cursor: 'pointer' }}>
 <div className="num">{a.nr} · {a.available ? 'Verfügbar' : 'Bald'}</div>
 <h3>{a.title}</h3>
 <div className="subtitle">
 {a.subtitle}
 </div>
 <p className="desc">{a.short}</p>
 <span className="more">Mehr erfahren <span className="arrow">→</span></span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* 5 · EINLADUNG, Nutzen / emotionaler Anker */}
 <section className="bg-paper-warm">
 <div className="container-narrow" style={{ textAlign: 'center' }}>
 <div className="eyebrow" style={{ justifyContent: 'center' }}>Einladung</div>
 <h2 style={{ marginBottom: '1.6rem' }}>
 Du bist willkommen.<br/>
 <em>Ich gebe dir Raum und Zeit.</em>
 </h2>
 <div style={{ maxWidth: '64ch', margin: '0 auto' }}>
 <p className="t-body-lg">
 Du darfst einfach sein, durchatmen, loslassen, vertrauen, dich hingeben, dich zeigen, dich bewegen und berühren lassen, dich geborgen fühlen, dich wieder mit dir selbst verbinden.
 </p>
 <p className="t-body-lg">
 Ich begegne dir offen, wertfrei, achtsam und einfühlsam.
 </p>
 <p className="t-body-lg">
 Ich unterstütze dich auf einer Reise zu dir selbst, und dich wieder wohl zu fühlen in deinem Körper.
 </p>
 </div>
 <p className="t-lead" style={{
 color: 'var(--bordeaux)',
 marginTop: '2.4rem',
 textAlign: 'center',
 maxWidth: 'none',
 }}>
 Eine einfühlsame Einladung, dir selbst etwas Gutes zu tun.
 </p>
 </div>
 </section>

 {/* 6 · STIMMEN, Vertrauen */}
 <section>
 <div className="container">
 <div className="section-head">
 <div className="eyebrow">Stimmen</div>
 <h2>Worte aus der Praxis</h2>
 </div>
 <div className="grid grid-3">
 <div className="t-card-slim">
 <div className="t-quote-mark">„</div>
 <blockquote>
 Jetzt weiss ich, was „Meditation in Bewegung" bedeutet und wie unbeschreiblich gut sich das anfühlt. Ich schwebe irgendwie immer noch und werde mir das wieder gönnen. Eine Insel im Alltag.
 </blockquote>
 <div className="t-attribution">
 <span className="t-name">Andi</span>
 <span className="t-context">Thai-Massage</span>
 </div>
 </div>
 <div className="t-card-slim">
 <div className="t-quote-mark">„</div>
 <blockquote>
 Ich nehme meinen ganzen Körper völlig anders wahr, es fühlt sich freudig, leicht und beschwingt an. Du hast mich wirklich gesehen, erkannt und mir andere Wege aufgezeigt, mir echten Mut gemacht.
 </blockquote>
 <div className="t-attribution">
 <span className="t-name">Lara</span>
 <span className="t-context">Gespräch & Massage</span>
 </div>
 </div>
 <div className="t-card-slim">
 <div className="t-quote-mark">„</div>
 <blockquote>
 Ich spüre noch heute, wie du mit deinen warmen eingeölten Armen über und unter meinem Körper gegleitet bist und mich sprichwörtlich umhüllt und auf Händen getragen hast. Eine unglaublich tiefe Erfahrung.
 </blockquote>
 <div className="t-attribution">
 <span className="t-name">Manuel</span>
 <span className="t-context">LomiLomi-Massage</span>
 </div>
 </div>
 </div>
 <div style={{ textAlign: 'center', marginTop: 48 }}>
 <button className="btn btn-ghost" onClick={() => navigate('testimonials')}>
 Alle Stimmen lesen <span className="arrow">→</span>
 </button>
 </div>
 </div>
 </section>

 {/* 7 · PRAXISRAUM, Orientierung / Ablauf / Konditionen */}
 <section className="bg-paper-warm">
 <div className="container-narrow" style={{ textAlign: 'center' }}>
 <div className="eyebrow" style={{ justifyContent: 'center' }}>Mein Praxisraum</div>
 <h2 style={{ marginBottom: '1.6rem' }}>
 Stilvoll, ruhig,<br/>
 <em>warm eingerichtet.</em>
 </h2>
 <div style={{ maxWidth: '64ch', margin: '0 auto' }}>
 <p className="t-body-lg">
 Mein Praxisraum strahlt Ruhe und Wärme aus. Eine Dusche ist vorhanden, alle Pflegeprodukte inklusive Haarföhn stehen dir zur Verfügung.
 </p>
 <p className="t-body-lg">
 Im gemütlichen Gesprächsbereich können wir uns austauschen. Die Körperarbeit findet entweder auf dem grossen Boden-Futon oder auf der Massageliege statt, beides beheizbar.
 </p>
 </div>
 <div className="info-callout" style={{ textAlign: 'left', maxWidth: '64ch', margin: '2.5rem auto 0' }}>
 <span className="info-callout-label">Gut zu wissen</span>
 <Sentences text="Alle Angebote sind miteinander kombinierbar, je nach deinem Wunsch und Bedürfnis. Bezahlung in Bar oder per Twint. Eine Abrechnung über die Krankenkasse ist nicht möglich. Terminstornierungen unter 24 Stunden werden voll verrechnet." />
 </div>
 </div>
 </section>

      {/* 9 · KONTAKT, finale CTA */}
 <KontaktSection navigate={navigate} />
 </main>
 );
}

function KontaktSection({ navigate }) {
 return (
 <section className="bg-bordeaux" id="kontakt">
 <div className="container-narrow">
 <div className="eyebrow" style={{ color: 'var(--gold-pale)' }}>Kontakt</div>
 <h2 style={{ color: 'var(--paper)', maxWidth: 640, lineHeight: 1.25 }}>
 Bei offenen Fragen darfst du dich gerne via <em style={{ color: 'var(--gold-pale)' }}>E-Mail oder WhatsApp</em> an mich wenden.
 </h2>
 <div className="kontakt-info" style={{ marginTop: '2.5rem' }}>
 <div className="kontakt-row">
 <span className="lbl">Telefon</span>
 <span className="val"><a href="tel:+41797447468">079 744 74 68</a></span>
 </div>
 <div className="kontakt-row">
 <span className="lbl">WhatsApp</span>
 <span className="val"><a href="https://wa.me/41797447468" target="_blank" rel="noreferrer">079 744 74 68</a></span>
 </div>
 <div className="kontakt-row">
 <span className="lbl">E-Mail</span>
 <span className="val"><a href="mailto:info@gabriela-raetzo.ch">info@gabriela-raetzo.ch</a></span>
 </div>
 <div className="kontakt-row">
 <span className="lbl">Praxis</span>
 <span className="val">Die genaue Adresse teile ich Ihnen gerne nach der Kontaktaufnahme mit.<br/>Der Standort befindet sich in 6422 Steinen.</span>
 </div>
 <div className="kontakt-row" style={{ borderBottom: 'none' }}>
 <span className="lbl">Bezahlung</span>
 <span className="val">Bar oder Twint · keine Krankenkassen-Abrechnung</span>
 </div>
 </div>
 <div style={{ marginTop: '2.5rem', display: 'flex', gap: 14, flexWrap: 'wrap' }}>
 <a className="btn btn-primary" href="mailto:info@gabriela-raetzo.ch">
 E-Mail senden <span className="arrow">→</span>
 </a>
 </div>
 </div>
 </section>
 );
}

window.HomePage = HomePage;
window.KontaktSection = KontaktSection;
