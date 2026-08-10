/* global React, ANGEBOTE, TESTIMONIALS, ImagePlaceholder, TestimonialCard, KontaktSection */

/* ========== ANGEBOTE Übersichtsseite ========== */
function AngebotePage({ navigate }) {
 return (
 <main>
 <section className="detail-hero">
 <div className="container-narrow" style={{ textAlign: 'center' }}>
 <div className="eyebrow" style={{ justifyContent: 'center' }}>Angebot</div>
 <h1>Begleitung, die <em>zu dir passt</em></h1>
 
 <p className="t-lead" style={{ margin: '0 auto', textAlign: 'center' }}>
 Sechs Begleitformen, als ruhige Massage auf Futon oder Liege, als Atemarbeit oder als Gespräch. Alle Angebote sind frei kombinierbar, je nach deinem Wunsch und Bedürfnis.
 </p>
 </div>
 </section>

 <section className="tight">
 <div className="container">
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

 <section className="bg-paper-warm">
 <div className="container-narrow" style={{ textAlign: 'center' }}>
 <div className="eyebrow" style={{ justifyContent: 'center' }}>Hinweise zur Praxis</div>
 <h2 style={{ marginBottom: '2rem' }}>Gut zu wissen</h2>
 <div className="grid grid-2" style={{ gap: 36, textAlign: 'left' }}>
 <div className="card">
 <h3 style={{ marginBottom: '0.6rem' }}>Dauer & Preis</h3>
 <p style={{ margin: 0 }}>
 <Sentences text="Pro Stunde CHF 140.–. Zeitdauer frei wählbar, gerne bin ich auch mehrere Stunden für dich da, wenn du tiefer eintauchen möchtest. Für Massagen empfehle ich mindestens 90 Minuten." />
 </p>
 </div>
 <div className="card">
 <h3 style={{ marginBottom: '0.6rem' }}>Bezahlung</h3>
 <p style={{ margin: 0 }}>
 <Sentences text="Bezahlung in Bar oder per Twint. Eine Abrechnung über die Krankenkasse ist nicht möglich. Terminstornierungen in weniger als 24 Stunden werden voll verrechnet." />
 </p>
 </div>
 <div className="card">
 <h3 style={{ marginBottom: '0.6rem' }}>Praxisraum</h3>
 <p style={{ margin: 0 }}>
 <Sentences text="Stilvoll eingerichtet, ruhig und warm. Eine Dusche ist vorhanden, alle Pflegeprodukte inkl. Haarföhn stehen dir zur Verfügung." />
 </p>
 </div>
 <div className="card">
 <h3 style={{ marginBottom: '0.6rem' }}>Behandlungsorte</h3>
 <p style={{ margin: 0 }}>
 <Sentences text="Die Körperarbeit findet entweder auf dem grossen Boden-Futon oder auf der Massageliege statt, beides beheizbar. Im Gesprächsbereich können wir uns austauschen." />
 </p>
 </div>
 </div>
 </div>
 </section>

 <KontaktSection navigate={navigate} />
 </main>
 );
}

/* ========== Angebots-Detailseite ========== */
function AngebotDetailPage({ id, navigate }) {
 const a = ANGEBOTE.find(x => x.id === id);
 if (!a) {
 return (
 <main>
 <section className="container" style={{ padding: '120px 28px', textAlign: 'center' }}>
 <h2>Angebot nicht gefunden</h2>
 <button className="btn btn-ghost" onClick={() => navigate('angebote')}>Zur Übersicht</button>
 </section>
 </main>
 );
 }

 // Andere Angebote für "weiter entdecken"
 const others = ANGEBOTE.filter(x => x.id !== a.id).slice(0, 3);

 return (
 <main>
 <section className="detail-hero">
 <div className="container-narrow">
 <span className="back" onClick={() => navigate('angebote')}>
 ← Zurück zu allen Angeboten
 </span>
 <div className="t-meta" style={{ marginBottom: '1rem' }}>
 ANGEBOT {a.nr} {a.available ? '· VERFÜGBAR' : '· ' + (a.availableHint || 'BALD').toUpperCase()}
 </div>
 <h1>{a.title}</h1>
 <div className="subtitle">{a.subtitle}</div>
 <div style={{ marginTop: '1rem' }}></div>
 </div>
 </section>

 <section style={{ paddingTop: 0 }}>
 <div className="container-narrow">
 <div className="detail-content">
 <h2>Worum es geht</h2>
 <Sentences as="div" className="detail-prose" text={a.body.einordnung} />

 <div className="detail-meta">
 <div className="meta-item">
 <span className="lbl">Empfohlene Dauer</span>
 <span className="val">{a.body.meta.dauer}</span>
 </div>
 <div className="meta-item">
 <span className="lbl">Preis</span>
 <span className="val">{a.body.meta.preis}</span>
 </div>
 <div className="meta-item">
 <span className="lbl">Setting</span>
 <span className="val">{a.body.meta.ort}</span>
 </div>
 </div>

 <h2>Wie eine Behandlung abläuft</h2>
 <Sentences as="div" className="detail-prose" text={a.body.ablauf} />
 
 <h2>Was du erwarten darfst</h2>
 <Sentences as="div" className="detail-prose" text={a.body.erwartung} />

 {a.body.fuerWen && (
 <>
 <h2>Für wen es geeignet ist</h2>
 <ul>
 {a.body.fuerWen.map((item, i) => <li key={i}>{item}</li>)}
 </ul>
 </>
 )}

 {a.body.effects && (
 <>
 <h2>Wobei die Methode unterstützen kann</h2>
 <p className="t-small" style={{ marginBottom: '0.6rem' }}>
 Erfahrungswerte aus der Buteyko-Praxis. Sie versteht sich als Ergänzung zu schulmedizinischen Behandlungen.
 </p>
 <div className="effects-grid">
 {a.body.effects.map((e, i) => (
 <div key={i} className="effect-item">
 <span className="dot"></span>
 <span>{e}</span>
 </div>
 ))}
 </div>
 </>
 )}

 {a.body.aspekte && (
 <>
 <h2>Aspekte der Methode</h2>
 {a.body.aspekte.map((asp, i) => (
 <div key={i} className="aspekt-block">
 <div className="aspekt-titel">{asp.t}</div>
 <Sentences as="div" className="detail-prose" text={asp.d} />
 </div>
 ))}
 </>
 )}

 {a.body.hinweis && (
 <div className="info-callout" style={{ marginTop: '3rem', background: 'var(--paper-warm)' }}>
 <span className="info-callout-label">Hinweis</span>
 <Sentences text={a.body.hinweis} />
 </div>
 )}
 </div>
 </div>
 </section>

 <section className="section-cta">
 <div className="container-narrow">
 <h2>Möchtest du diese Begleitung erleben?</h2>
 <p>Schreib mir kurz, was dich anspricht, wir finden gemeinsam einen Termin und besprechen alles in Ruhe.</p>
 <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
 <a className="btn btn-primary" href="mailto:info@gabriela-raetzo.ch">
 Termin anfragen <span className="arrow">→</span>
 </a>
 <button className="btn btn-ghost" onClick={() => navigate('angebote')}>
 Andere Angebote
 </button>
 </div>
 </div>
 </section>

 <section className="bg-paper-warm">
 <div className="container">
 <div className="section-head">
 <div className="eyebrow">Weiter entdecken</div>
 <h2>Andere Begleitformen</h2>
 </div>
 <div className="grid grid-3">
 {others.map(o => (
 <div key={o.id} className="angebot-card" onClick={() => navigate('angebot/' + o.id)} style={{ cursor: 'pointer' }}>
 <div className="num">{o.nr}</div>
 <h3>{o.title}</h3>
 <div className="subtitle">
 {o.subtitle}
 </div>
 <p className="desc">{o.short}</p>
 <span className="more">Mehr erfahren <span className="arrow">→</span></span>
 </div>
 ))}
 </div>
 </div>
 </section>
 </main>
 );
}

/* ========== Über mich Seite ========== */
function UeberMichPage({ navigate }) {
 const werdegang = [
 { y: '2024 / 2026', t: 'Diplomlehrgang Thai Yoga Massage Basic', i: 'Sunshine Network · International Society of Traditional Thai Yoga Massage' },
 { y: '2020', t: 'Fachfrau Gesundheit EFZ Nachholbildung für Erwachsene', i: '' },
 { y: '2014', t: 'Diplomlehrgang Sexologische Körperarbeit ISSB', i: 'Institut für Somatische & Sexologische Bildung ISSB' },
 { y: '2009', t: 'Klientzentrierte Persönlichkeitsberaterin FSB · Kurs- und Seminarleiterin FSB', i: 'Frauenseminar Bodensee' },
 { y: '2003', t: 'Diplomlehrgang Medizinisch-Klassische Massage · 150 Std. Med. Grundlagen', i: 'Bildungszentrum Dickerhof AG' },
 { y: '1997', t: 'Medizinische Sekretärin VESKA H+', i: 'FREIS\'S Schulen' },
 { y: '1994', t: 'Diplomlehrgang Gymnastik- und Fitnessinstruktorin', i: 'Klubschule Migros' },
 { y: '1987', t: 'Handelsdiplom VSH', i: 'Neue Sprach- und Handelsschule Basel' },
 { y: '1985', t: 'Kosmetikerin EFZ', i: '' },
 ];
 const weiterbildung = [
 'Fortlaufende Weiterbildungen in Psychiatrie und Somatik',
 'Ernährung und Metabolische Psychiatrie · Seminare und Selbststudium',
 'Zertifizierte Buteyko-Expertin i.A. · NHK Institut',
 'Aggressionsmanagement Basiskurs',
 'Psychiatrische Klinik Zugersee',
 'Ohrakupunktur NADA Basic 1 und 2 · National Acupuncture Detoxification Association',
 'Esalen Massage · European Institute of Esalen Massage',
 'LomiLomi Massage und Sensual BodyFlow Massage · ISSB / Zentrum Bodyfeet',
 'Tantrische Körperarbeit · ISSB / Zinnober Schule',
 'Beckenboden Kursleiterin I · BeBo Gesundheitstraining',
 ];
 return (
 <main>
 <section className="detail-hero">
 <div className="container">
 <div className="grid grid-2-1" style={{ alignItems: 'center', gap: 80 }}>
 <div>
 <div className="eyebrow">Über mich</div>
 <h1>Gabriela Rätzo</h1>
 <p className="lead" style={{ marginTop: '1.5rem' }}>
 Ich bin seit über vier Jahrzehnten auf Körperarbeit, Begleitung und Bewegung mit Menschen spezialisiert und kann dank meiner vielseitigen Erfahrungswerte individuell und zielgerichtet Unterstützung leisten.
 </p>
 </div>
 <div style={{ position: 'relative' }}>
 <ImagePlaceholder
 bgClass="portrait-gabriela-ueber-mich"
 alt="Gabriela Rätzo"
 aspect="1200/1338"
 />
 </div>
 </div>
 </div>
 </section>

 <section style={{ paddingTop: 160 }}>
 <div className="container-narrow">
 <div className="detail-content">
 <h2>Mein beruflicher roter Faden</h2>
 <p>
 Seit einigen Jahren arbeite ich hauptberuflich in der Psychiatrie und begleitete Patientinnen und Patienten in Krisen sowie in herausfordernden Lebenssituationen. Aktuell bin ich Teil des pflegetherapeutischen Teams in einer Klinik mit den Schwerpunkten Burnout, Schlafstörungen, Depressionen und Angststörungen.
 </p>

 <h2>Mein Leben</h2>
 <p>
 Reich an Lebenserfahrung, innehaltend reflektiert, bei mir selbst angekommen und gleichzeitig immer noch jung, energievoll und nach neuen Begegnungen suchend. Das Wichtigste in meinem erfüllten Leben sind meine drei erwachsenen Söhne. Dafür bin ich tief dankbar und täglich aufs Neue berührt.
 </p>
 <p>
 Ich habe viel Glück und Freude erfahren dürfen und ich musste tiefe persönliche Krisen durchleben. Tanzend an der Sonne und tastend in der Dunkelheit.
 </p>
 <p>
 Ich lebe mit Offenheit, Freiheitsgefühl, Toleranz, Bereitschaft für Veränderung, freudiger Energie, Sinnlichkeit, Empathie und Herzenswärme. Ich zeige mich authentisch und lade meine Mitmenschen ebenso dazu ein.
 </p>

 <h2>Was mich nährt</h2>
 <p>
 In der Natur, in Stille, bei Yoga und Meditation schöpfe ich Kraft. Tägliche Bewegung und Sport halten mich physisch und psychisch gesund. Eine frische LowCarb-Ernährung, ausreichend Schlaf und genug Entspannung sind für mich eine Selbstverständlichkeit und reine Selbstfürsorge.
 </p>
 <p>
 Ich fühle mich genährt von Liebe, die ich für mich selbst empfinde, von anderen empfange und so auch weitergeben kann. Ein wundervoller Kreislauf.
 </p>
 </div>
 </div>
 </section>

 <section className="bg-paper-warm">
 <div className="container">
 <div className="section-head">
 <div className="eyebrow">Werdegang</div>
 <h2>Berufs- und Diplomausbildungen</h2>
 
 </div>
 <div className="container-narrow" style={{ padding: 0 }}>
 <div className="werdegang">
 {werdegang.map((w, i) => (
 <div key={i} className="werdegang-row">
 <div className="year">{w.y}</div>
 <div>
 <div className="title">{w.t}</div>
 {w.i && <div className="institution">{w.i}</div>}
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 <section>
 <div className="container">
 <div className="section-head">
 <div className="eyebrow">Weiterbildungen</div>
 <h2>2009 bis heute</h2>
 </div>
 <div className="container-narrow" style={{ padding: 0 }}>
 <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
 {weiterbildung.map((w, i) => (
 <li key={i} className="weiterbildung-item">
 {w}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </section>

 <KontaktSection navigate={navigate} />
 </main>
 );
}

/* ========== Frei fühlen Seite ========== */
function FreiFuehlenPage({ navigate }) {
 return (
 <main>
 <section className="detail-hero">
 <div className="container-narrow" style={{ textAlign: 'center' }}>
 <div className="eyebrow" style={{ justifyContent: 'center' }}>Haltung & Praxis</div>
 <h1>Warum „<em>frei fühlen</em>"</h1>
 
 </div>
 </section>

 <section style={{ paddingTop: 0 }}>
 <div className="container-narrow">
 <div className="detail-content">
 <h2>Eine ehrliche Einladung</h2>
 <p>
 „frei fühlen" ist kein grosses Versprechen. Es ist eine Einladung, in einen Raum, in dem du nichts darstellen musst, nichts leisten musst, nichts ausser dem Sein erwartet wird. Ich verspreche keine Heilung, keine schnellen Lösungen, keine Wunder. Was ich anbiete, ist Begleitung, Raum, Zeit, Aufmerksamkeit.
 </p>
 <p>
 In meiner Arbeit erlebe ich, dass Menschen oft erst dann zur Ruhe kommen, wenn sie spüren: hier muss ich nichts. Hier darf ich. Atmen, ankommen, loslassen.
 </p>

 <h2>Was diese Praxis sein möchte</h2>
 <p>
 Ein Ort, an dem Menschen sich selbst etwas Gutes tun dürfen. An dem Berührung und Begegnung wieder einen Wert haben. An dem es um dich geht, und um nichts anderes.
 </p>
 </div>
 </div>
 </section>

 <section className="bg-bordeaux" style={{ position: 'relative', overflow: 'hidden' }}>
 <div className="container" style={{ position: 'relative' }}>
 <div className="grid grid-3" style={{ gap: 40 }}>
 <div>
 <div style={{ marginBottom: 18, color: 'var(--gold-pale)' }}></div>
 <h3 style={{ color: 'var(--gold-pale)', marginBottom: '0.6rem' }}>Ruhe</h3>
 <p style={{ color: 'rgba(251,246,238,0.85)' }}>Der Raum ist still, warm und geschützt, eine kleine Pause vom Aussen.</p>
 </div>
 <div>
 <div style={{ marginBottom: 18, color: 'var(--gold-pale)' }}></div>
 <h3 style={{ color: 'var(--gold-pale)', marginBottom: '0.6rem' }}>Wärme</h3>
 <p style={{ color: 'rgba(251,246,238,0.85)' }}>Worte und Berührungen fliessen von Herzen. Du sollst dich gehalten fühlen.</p>
 </div>
 <div>
 <div style={{ marginBottom: 18, color: 'var(--gold-pale)' }}></div>
 <h3 style={{ color: 'var(--gold-pale)', marginBottom: '0.6rem' }}>Klarheit</h3>
 <p style={{ color: 'rgba(251,246,238,0.85)' }}>Achtsame Begleitung in einem klaren, respektvollen Rahmen, immer.</p>
 </div>
 </div>
 </div>
 </section>

 <KontaktSection navigate={navigate} />
 </main>
 );
}

/* ========== Testimonials Seite ========== */
function TestimonialsPage({ navigate }) {
 return (
 <main>
 <section className="detail-hero">
 <div className="container-narrow" style={{ textAlign: 'center' }}>
 <div className="eyebrow" style={{ justifyContent: 'center' }}>Stimmen</div>
 <h1>Erfahrungen <em>aus der Praxis</em></h1>
 
 <p className="t-lead" style={{ margin: '0 auto', textAlign: 'center' }}>
 Worte von Menschen, die meine Begleitung erlebt haben. Namen sind mit ausdrücklichem Einverständnis veröffentlicht, manche Rückmeldungen sind länger, ausklappen lohnt sich.
 </p>
 </div>
 </section>

 <section style={{ paddingTop: 24 }}>
 <div className="container-narrow">
 <div className="t-list-stack">
 {TESTIMONIALS.map((t, i) => (
 <TestimonialCard key={i} t={t} index={i} threshold={400} />
 ))}
 </div>
 </div>
 </section>

 <KontaktSection navigate={navigate} />
 </main>
 );
}

/* ========== Kontakt-Seite (eigenständig) ========== */
function KontaktPage({ navigate }) {
 return (
 <main>
 <section className="detail-hero">
 <div className="container-narrow" style={{ textAlign: 'center' }}>
 <div className="eyebrow" style={{ justifyContent: 'center' }}>Kontakt</div>
 <h1>Termin <em>anfragen</em></h1>
 
 <p className="t-lead" style={{ margin: '0 auto', textAlign: 'center' }}>
 Bei offenen Fragen oder konkreten Terminvereinbarungen, darfst du dich gerne via E-Mail oder WhatsApp an mich wenden.
 </p>
 </div>
 </section>

 <KontaktSection navigate={navigate} />
 </main>
 );
}

window.AngebotePage = AngebotePage;
window.AngebotDetailPage = AngebotDetailPage;
window.UeberMichPage = UeberMichPage;
window.FreiFuehlenPage = FreiFuehlenPage;
window.TestimonialsPage = TestimonialsPage;
window.KontaktPage = KontaktPage;
