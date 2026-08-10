/* global React */
const { useState: useStateP, useEffect: useEffectP } = React;

/* ========== Angebote data (aus Word-Dokumenten) ========== */
const ANGEBOTE = [
 {
 id: 'thai',
 nr: '01',
 title: 'Thai-Massage',
 subtitle: 'Meditation in Bewegung',
 short: 'Eine ganzheitliche, bekleidete Behandlung auf dem Futon, mit Meridianarbeit, sanften Dehnungen und Atem.',
 available: true,
 body: {
 einordnung: 'Die Thai-Massage ist eine ganzheitliche und wundervoll entspannende Behandlung, die Meridianarbeit, Akupressur, Gelenkmobilisationen, passive Muskeldehnungen, Kompressionen, schwingende Bewegungen, ruhige Haltepositionen und Atemarbeit verbindet. Sie wird auch „Meditation in Bewegung" genannt.',
 ablauf: 'Du bist während der Thai-Massage bequem bekleidet und liegst auf dem Futon. Je nachdem, was du gerade brauchst und mir dein Körper erzählt, wirst du in Rückenlage, Bauchlage, Seitenlage und sitzend von Kopf bis Fuss behandelt. Dabei bin ich sehr achtsam und schwinge mich auf dich ein.',
 erwartung: 'Du darfst vollständig loslassen, dein Atem wird tiefer, dein Nervensystem kann sich beruhigen, dein Energiesystem wird harmonisiert. Verspannungen und Schmerzen können gelindert werden, deine Selbstheilungskraft wird angeregt, ein entspanntes Wohlgefühl entsteht und deine Stimmung kann sich nachhaltig verbessern.',
 fuerWen: [
 'Menschen, die in einem geschützten Rahmen wirklich loslassen möchten',
 'Bei innerer Unruhe, Stress oder Verspannungen',
 'Wenn du Berührung schätzt, dabei aber bekleidet bleiben möchtest',
 'Als ruhige, achtsame Auszeit von einem dichten Alltag'
 ],
 meta: { dauer: 'ab 90 Min.', preis: 'CHF 140.– / Std.', ort: 'Boden-Futon, beheizbar' }
 }
 },
 {
 id: 'lomilomi',
 nr: '02',
 title: 'LomiLomi-Massage',
 subtitle: 'Hawaiianisches Ritual mit warmem Öl',
 short: 'Eine Ganzkörper-Massage mit langen, fliessenden Streichbewegungen, eingebettet in ein wunderschönes Ritual.',
 available: true,
 body: {
 einordnung: 'Die hawaiianische LomiLomi ist eine Ganzkörper-Massage, welche auf uraltem Wissen und den Lebensweisheiten Hawaiis beruht. Eingebettet in ein wunderschönes Ritual, erlebst du sanfte Berührung, tiefe Entspannung und liebevolle Zuwendung.',
 ablauf: 'Du wirst auf der Liege massiert. Mit duftendem warmem Öl gleiten meine Hände und Unterarme mit sanft-tiefem Druck über und gleichzeitig unter deinen Körper. Durch lange Streichbewegungen entsteht eine ruhige Harmonie, der Körper schwingt energetisch mit. Deine Intimzone wird mit einem leichten Tuch bedeckt und nicht berührt.',
 erwartung: 'Diese wundervoll entspannende Massage kann dich in dein natürliches Gleichgewicht bringen und zu mehr Ausgeglichenheit in Körper und Seele führen. Du erlebst eine umhüllende Geborgenheit und Sinnlichkeit. Bei der LomiLomi darfst du dich fallen lassen, in eine Schwerelosigkeit des eigenen Seins, der inneren Ruhe und der Freiheit.',
 fuerWen: [
 'Menschen, die ein nährendes Ritual und tiefe Entspannung suchen',
 'Bei Erschöpfung, innerer Anspannung oder dem Bedürfnis nach Geborgenheit',
 'Wenn du dich von liebevoller, achtsamer Berührung tragen lassen möchtest',
 'Als bewusster Moment für dich selbst'
 ],
 meta: { dauer: 'ab 90 Min.', preis: 'CHF 140.– / Std.', ort: 'Massageliege, beheizbar' }
 }
 },
 {
 id: 'sensualflow',
 nr: '03',
 title: 'SensualFlow-Massage',
 subtitle: 'Eine Kunst der fliessenden Berührung',
 short: 'Eine ganzheitliche Massage in einem geschützten, achtsamen Rahmen, für ein bewusstes Wiederfinden des eigenen Körpers.',
 available: true,
 body: {
 einordnung: 'Die SensualFlow-Massage ist eine Kunst der fliessenden, sinnlichen Berührungen, bei denen auch absichtslose intime Berührungen auf eine sehr natürliche Weise miteinbezogen werden. Eingebettet in ein wunderschönes Ritual, erlebst du sanfte Berührung, tiefe Entspannung und liebevolle Zuwendung. Diese ganzheitliche und energetisierende Massage kann dich in dein natürliches Gleichgewicht bringen.',
 ablauf: 'Du wirst auf der warmen Liege massiert und darfst im Verlauf der Massage völlig unbedeckt sein. Ich bin behutsam, achtsam und respektiere zu jeder Zeit deine persönlichen Grenzen. Mit duftendem warmem Öl gleiten meine Hände und Unterarme mit sanftem, tiefem Druck über und gleichzeitig unter deinen Körper. Durch lange Streichbewegungen entsteht eine ruhige Harmonie.',
 erwartung: 'Du darfst dich fallen lassen, in eine Schwerelosigkeit des eigenen Seins, der inneren Ruhe, und deinen Körper ganz fühlen und feiern. Diese Massage kann dir helfen, deinen Körper, deine Sinnlichkeit und deine Körperweisheit neu zu entdecken.',
 hinweis: 'Wir besprechen Wünsche und Grenzen vorab in Ruhe. Deine Würde und Sicherheit haben jederzeit Vorrang.',
 fuerWen: [
 'Menschen, die ihren Körper bewusst und ganzheitlich spüren möchten',
 'Wenn du Sinnlichkeit als natürlichen Teil von dir erleben möchtest',
 'Beim Wiederentdecken eigener Körperweisheit',
 'In einem achtsam geführten, geschützten Rahmen'
 ],
 meta: { dauer: 'ab 90 Min.', preis: 'CHF 140.– / Std.', ort: 'Massageliege, beheizbar' }
 }
 },
 {
 id: 'freifuehlen',
 nr: '04',
 title: 'freifühlen-Massage',
 subtitle: 'Für dich individuell gestaltet',
 short: 'Eine Massage, die wir gemeinsam aus den Elementen aller Methoden für dich zusammenstellen.',
 available: true,
 body: {
 einordnung: 'Die freifühlen-Massage ist keine festgelegte Methode, sondern entsteht aus dem, was du gerade brauchst. Wir besprechen deine Wünsche und ich gestalte die Behandlung individuell, mit Elementen aus Thai, LomiLomi, klassischer Massage, Esalen und sanfter Körperarbeit.',
 ablauf: 'Wir nehmen uns Zeit für ein ruhiges Vorgespräch. Je nach deinem Wunsch findet die Behandlung bekleidet auf dem Boden-Futon oder mit warmem Öl auf der Massageliege statt. Während der Behandlung schwinge ich mich auf dich ein und passe Tempo, Druck und Rhythmus deinem Körper an.',
 erwartung: 'Eine Behandlung, die genau zu diesem Tag, diesem Körper und diesem Moment passt. Du darfst einfach sein, durchatmen, loslassen, und vertrauen, dass alles in einem achtsamen, klaren Rahmen geschieht.',
 fuerWen: [
 'Wenn du dir nicht sicher bist, welche Methode dir entspricht',
 'Für regelmässige Begleitung, die mit dir mitwachsen darf',
 'Wenn du Elemente verschiedener Methoden kombinieren möchtest',
 'Für längere Sitzungen mit Raum für Tiefe und Stille'
 ],
 meta: { dauer: 'ab 90 Min.', preis: 'CHF 140.– / Std.', ort: 'Futon oder Liege' }
 }
 },
 {
 id: 'buteyko',
 nr: '05',
 title: 'Buteyko-Atmung',
 subtitle: 'Komplementärer Ansatz zur Atemregulation',
 short: 'Eine Atemmethode, die als Ergänzung zu schulmedizinischen Behandlungen verstanden wird.',
 available: false,
 availableHint: 'verfügbar ab Dezember 2026',
 body: {
 einordnung: 'Die Buteyko-Methode versteht sich als komplementärer Ansatz zu schulmedizinischen Behandlungen. Mit ihr kannst du lernen, deinen Atem gezielt zu regulieren und dir einfache Verhaltensweisen anzueignen, um deine Atmung wieder in ein gesundes, angepasstes Gleichgewicht zu bringen.',
 ablauf: 'In ruhigen Sitzungen lernst du gezielte Atemübungen kennen, die du anschliessend zuhause selbständig weiterüben kannst. Bereits wenige Sitzungen und regelmässiges Üben können einen spürbaren Unterschied machen.',
 erwartung: 'Eine ruhigere, bewusstere Atmung im Alltag und ein verbessertes Körpergefühl. Die Methode ersetzt keine ärztliche Behandlung, sondern ergänzt sie.',
 effects: [
 'Stress', 'Schlafprobleme', 'Ängste & Panikattacken', 'Long Covid',
  'Erschöpfung / Fatigue', 'Bluthochdruck', 'Kopfschmerzen',
  'Asthma', 'Schnarchen & Schlafapnoe', 'Chronische Hyperventilation'
 ],
 aspekte: [
 { t: 'Regulierung der Atmung', d: 'Durch gezielte Atemübungen wird die Atmung verlangsamt und vertieft. Die Zellen werden gut mit Sauerstoff versorgt.' },
 { t: 'Lösung von Muskelspannung', d: 'Mit verbesserter Sauerstoffversorgung kann sich die Muskulatur lockern. Das Herz schlägt ruhiger, die Atmung wird leichter.' },
 { t: 'Biochemisches Gleichgewicht', d: 'Die Atemmethode reguliert das Verhältnis von Sauerstoff und Kohlendioxid im Blut. Nerven- und Immunsystem können sich beruhigen.' },
 { t: 'Öffnung der Blutgefässe', d: 'Die Buteyko-Atmung wirkt gefässerweiternd. Durchblutung und Sauerstoffversorgung verbessern sich, der Blutdruck kann sinken.' }
 ],
 hinweis: 'Die Buteyko-Methode ersetzt keine medizinische Behandlung und versteht sich ausdrücklich als Ergänzung. Bei gesundheitlichen Beschwerden bitte ärztlich abklären.',
 meta: { dauer: 'ab Dezember 2026', preis: 'CHF 140.– / Std.', ort: 'Praxis Steinen' }
 }
 },
 {
 id: 'gespraeche',
 nr: '06',
 title: 'Gesprächs-Begleitung',
 subtitle: 'Reflektieren, Klären, Weitergehen',
 short: 'Eine ruhige Begleitung in herausfordernden Situationen, für mehr Klarheit, Achtsamkeit und Selbstwirksamkeit.',
 available: true,
 body: {
 einordnung: 'Bist du in einer herausfordernden Lebenssituation, stehst du vor einer wichtigen Entscheidung, möchtest du dich mit einem Gegenüber reflektieren, dich verändern oder weiterentwickeln? Hast du Fragen zu einer bewussteren und gesünderen Lebensführung, in Bezug auf Bewegung, Ernährung, Schlaf, Entspannung, Sexualität oder Beziehungen?',
 ablauf: 'Wir treffen uns in meinem gemütlichen Gesprächsbereich. In Ruhe schauen wir gemeinsam auf das, was dich gerade bewegt. Ich höre zu, frage nach, spiegle und wir suchen gemeinsam nach Wegen, die zu dir passen.',
 erwartung: 'Es ist mir ein Anliegen, deine Achtsamkeit, deine Selbstliebe, deine Selbstwirksamkeit und deine Selbstheilung zu fördern. Ich begleite und unterstütze dich gerne, wertfrei, einfühlsam und mit dem nötigen Abstand, der eine gute Reflexion möglich macht.',
 fuerWen: [
 'In Lebensübergängen und bei wichtigen Entscheidungen',
 'Wenn du dich im Gespräch klarer sehen möchtest',
 'Bei Fragen rund um Lebensführung, Beziehung, Sexualität oder Selbstfürsorge',
 'Als ruhiger Raum zum Sortieren und Weitergehen'
 ],
 hinweis: 'Die Gesprächs-Begleitung ist keine Psychotherapie und ersetzt keine medizinische oder psychotherapeutische Behandlung.',
 meta: { dauer: '60 oder 90 Min.', preis: 'CHF 140.– / Std.', ort: 'Gesprächsbereich' }
 }
 }
];

window.ANGEBOTE = ANGEBOTE;

/* ========== Testimonials ========== */
const TESTIMONIALS = [
 {
 name: 'Sandra',
 context: 'SensualFlow-Massage',
 text: 'Letzte Woche durfte ich eine SensualFlow-Massage bei dir empfangen. Ich war zu Beginn noch ein wenig unsicher, weil ich sowas noch nie hatte. Die tollen Atem- und Visualisierungs-Übungen, deine angenehme warme Stimme und überhaupt das ganze Ambiente in deinem schönen Raum haben mir geholfen beim Entspannen und Einlassen. Ich konnte mich dann unter deinen Händen völlig fallenlassen, kam in einen Zustand von totaler Geborgenheit und Sinnlichkeit und es fühlte sich völlig natürlich und wunderschön an. Deine magischen Berührungen kommen wirklich von Herzen und du hast eine unbeschreibliche Intuition. Ja, du hast mich wirklich zutiefst berührt, an Körper und Seele, und deine super Gesichtsmassage zu Beginn war ebenfalls einzigartig, ich bin sogar kurz weggedöst! Ich bin danach geschwebt, konnte nicht aufhören zu lächeln, und dieses erfüllte Gefühl begleitet mich immer noch. Jetzt weiss ich, was du meintest mit nährenden Berührungen, ich danke dir von Herzen dafür!'
 },
 {
 name: 'Dave',
 context: 'Langjähriger Gast',
 text: 'Als langjähriger Gast schätze ich es sehr, mich regelmässig in deine Obhut zu begeben. In vertrauter, warmer Atmosphäre darf ich mich entspannt fallen lassen und einfach sein, wie ich bin, und mich völlig hingeben. Deine Ausstrahlung und Herzlichkeit sind einzigartig! Du hast die Gabe, mich immer wieder mit neuen Massagevarianten zu überraschen, bist so intuitiv und erfahren in deiner Arbeit, was mich sehr tief berührt und mir ab und zu eine Freudenträne in die Augen bringt. Ich fühle mich während einer Session bei dir immer wohl, geborgen und kompetent begleitet, auch wenn mal tiefere Emotionen hochkommen. Deine Berührungen empfinde ich als sehr achtsam und liebevoll, was sich dann auch in meinem Herzen mit einer sanften Wärme bemerkbar macht. Auch noch lange danach verspüre ich eine innere Glückseligkeit und Zufriedenheit.'
 },
 {
 name: 'Manuel',
 context: 'LomiLomi-Massage',
 text: 'Liebe Gabriela, ich durfte gestern bei dir eine wundersame LomiLomi-Massage empfangen. Danke vielmals! Es war eine unglaubliche Erfahrung, wie ich dies in einer Massage noch nie erlebt habe. Es war tatsächlich ein ganzes Ritual mit Atemanleitung, Meditation, toller Musik und tropischen Düften. Ich spüre noch heute, wie du mit deinen warmen eingeölten Armen über und unter meinem Körper gegleitet bist und mich sprichwörtlich umhüllt und auf Händen getragen hast. Das hat sich so toll angefühlt, auch das Schaukeln und Gelenke lockern war sehr befreiend. Es war eine unglaublich tiefe Erfahrung, die ich bei dir machen durfte, und die ich mir gerne bald wieder gönnen werde.'
 },
 {
 name: 'Ralph',
 context: 'Gesprächs-Begleitung',
 text: 'Liebe Gabriela, ich habe dich während meines Klinikaufenthaltes kennen und schätzen gelernt, als ich mit Burnout an meinem Tiefpunkt angelangt war. Du hast mich als Hauptbezugsperson durch den Aufenthalt begleitet, und zusammen mit einigen Körpertherapeuten warst du mein Gamechanger. Für all die tiefgründigen, unterstützenden und wirklich lebensverändernden Gespräche „auf der Reise zu mir selbst" bin ich zutiefst dankbar. Deine positive Ausstrahlung und deine Herzlichkeit sind einzigartig. Ich schätze die grosse Fachkompetenz mit einer Warmherzigkeit und Empathie, die nicht oft zu finden ist. Du fühlst intuitiv, was ein Mensch gerade braucht, um sich wohl und sicher zu fühlen. Einige Zeit nach dem Aufenthalt und wieder zurück im Berufsleben habe ich den Kontakt zu dir gesucht. Nun war ich bereits zu einigen unterschiedlichen Sitzungen bei dir und bin immer noch begeistert, entwickle mich stetig weiter, staune über all die Möglichkeiten, die das Leben offen hat für mich, mit einem veränderten Mindset und neuem Embodiment. Und ich habe wieder mit Sport begonnen, meine Ernährung umgestellt, was auch meiner Seele unbeschreiblich gut tut.'
 },
 {
 name: 'Andi',
 context: 'Thai-Massage',
 text: 'Liebe Gabriela, danke nochmals für die super Thai-Massage von gestern! Jetzt weiss ich, was „Meditation in Bewegung" bedeutet und wie unbeschreiblich gut sich das anfühlt. Ich schwebe irgendwie immer noch und werde mir das wieder gönnen. Eine Insel im Alltag. Bleib wie du bist, es ist ein Geschenk, dass es solche Menschen wie dich gibt.'
 },
 {
 name: 'Lara',
 context: 'Gespräch & Massage',
 text: 'Hallo liebe Gabriela, es sind nun einige Tage vergangen seit dem Gespräch und der Massage bei dir. Ich bin im positiven Sinne aufgewühlt und nehme meinen ganzen Körper völlig anders wahr, es fühlt sich freudig, leicht und beschwingt an, ich könnte ständig tanzen! Deine Berührungen sind aussergewöhnlich, so natürlich, gehen tief und wirken nach. Dein Zuhören und deine Worte tun gut, du hast mich wirklich gesehen, erkannt und mir andere Wege aufgezeigt, mir echten Mut gemacht. Ich bin am Lächeln und habe seit langem wieder das Gefühl: „Es kommt gut!"'
 },
 {
 name: 'Peter',
 context: 'SensualFlow-Massage',
 text: 'Liebe Gabriela, wieder zu Hause möchte ich dir nochmals recht herzlich danken für die wundervolle, herzlich-sinnliche Session, die ich heute bei dir empfangen durfte. Auf dem Nachhauseweg im Zug hatte ich den Eindruck, dass alle Menschen, denen ich begegnet bin, mir meine Zufriedenheit ansehen würden. Es hat sich absolut gelohnt, diesen langen Weg mit ÖV zu machen! Ich habe mich bei dir und in deinem wunderschönen Raum während der ganzen Massage super aufgehoben und wohl gefühlt und mich total entspannen können. Alles war stimmig und du strahlst eine so tolle Wärme und Energie aus. Es war ein einmaliges Erlebnis, das ich so noch nie erfahren habe, ich freue mich darauf, dein Angebot wieder einmal in Anspruch zu nehmen, wenn ich „Berührungshunger" habe.'
 },
 {
 name: '',
 context: 'Kombinierte Massage & Gespräch',
 text: 'Liebe Gabriela, ich möchte dir nochmals ganz herzlich danken für diese wahnsinnig angenehme und nachklingende Massage, die du gestern für mich persönlich kombiniert hast aus deinen vielen Massageformen. Dieses Mal hast du glaub auch mehr aus der Thaimassage, deine neue Passion, eingebaut, das fühlte sich super an. Ich wünsche dir viel Erfolg damit! Ich habe einmal mehr erleben dürfen, wie gross dein Repertoire und deine Erfahrung sind und wie spontan-intuitiv du sein kannst in deiner „Arbeit". Du lebst deine Berufung, das ist so spürbar und so viel Wert in der heutigen Zeit. Auch das anschliessende Gespräch hat mir wirklich gut getan und es haben sich grad einige Knoten gelöst in mir drin quasi von selbst. Ich werde dich sehr gerne und mit Überzeugung weiterempfehlen!'
 },
 {
 name: 'Selina',
 context: 'Massage-Begleitung',
 text: 'Hallo liebe Gabriela, ich weiss nicht genau, was du da vorhin gezaubert hast mit deinen Händen und Armen und Worten … es fühlte sich so schön und geborgen an und es geht mir grad richtig gut! Danke, danke, danke! Ich komme bald wieder zum Verwöhnen zu dir, ich gönne mir das und ja: ich bin mir das selbst wert.'
 },
];

window.TESTIMONIALS = TESTIMONIALS;
