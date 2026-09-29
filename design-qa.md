# Qualitätsprüfung · 28. September 2026

## Geprüfter Stand

Lokale statische Website über `server.mjs`, im Codex-Browser auf Desktop (1440 px und normale Fenstergröße) sowie bei 390 und 320 px Breite geprüft.

- Hero, kompakte Projektübersicht, Über mich, neun Tool-Icons und Kontakt visuell kontrolliert.
- Alle vier mobilen Rubriken sichtbar; bei 390 und 320 px kein horizontaler Seitenüberlauf. Projektansicht bei 320 px ebenfalls ohne Überbreite.
- Mobile Navigation öffnet und schließt nach Linkauswahl; verborgene Navigation ist nicht mehr im sichtbaren Accessibility-Baum.
- Filter: Web Design 4, Grafiken & Bildwelten 20, 3D 5, Video 2 Projekte. Mehr anzeigen erweitert die Grafikrubrik von 6 auf 12 Einträge und setzt den Fokus auf die erste neue Karte.
- Chicos-Projektansicht per Tastatur geöffnet; Escape schließt und gibt Fokus an die Projektkarte zurück. Bild geladen (1400 px Originalbreite).
- Spießer-Serie: drei Motive, Wechsel mit Pfeiltaste auf das zweite Motiv und zugehörige Zählung geprüft.
- Beast-Buddy-Motiv gezielt nachgeprüft: vollständig geladen, natürliche Breite 1000 px. Der zuvor im Audit beobachtete lokale Bildfehler tritt in der laufenden Vorschau nicht auf. Öffentliche Domain noch nicht getestet.
- Projektansichten stellen das Bild vor die Erläuterung; mobil bei 320 px visuell nachgeprüft.
- Kontaktlinks enthalten die bestätigte Adresse. Kopierfunktion meldet erfolgreiches Kopieren; keine E-Mail versendet.
- Keine erfassten Browser-Konsolenfehler in der geprüften Sitzung.
- 46 lokal referenzierte Assets einschließlich zusätzlicher Serienmotive vorhanden. Bildabmessungen für alle 31 Projektkarten eingetragen, um Platz vor dem Laden zu reservieren.
- JavaScript-Syntaxprüfung und Git-Diff-Prüfung erfolgreich.

## Bildoptimierung

Responsive WebP-Varianten in 640 und 1400 px; Über-mich-Foto 640/960 px. Beispielwerte auf Dateiebene: Hero ca. 964 → 147 KB, Chicos ca. 2046 → 302 KB, Hintergrund ca. 858 → 7 KB. Die kleineren mobilen Fassungen sind zusätzlich verfügbar. Das sind Dateigrößen, keine gemessenen Ladezeiten.

## Grenzen und offene Punkte

Kein vollständiger Screenreader-, WCAG-, Cross-Browser- oder Lighthouse-Test. Reduced-Motion-Fallback im Code berücksichtigt; Betriebssystem-Umschaltung nicht interaktiv getestet. Touch-Wischen der Bildserie implementiert, aber nicht auf einem physischen Smartphone getestet. Kein Vite-Build: Projektabhängigkeiten sind lokal nicht installiert; die statische Website wurde direkt geprüft.

Vor öffentlichem Start: die bestätigte Domain www.mario-goettling.de mit Hosting verbinden sowie Social-Preview, Impressum und Datenschutz ergänzen. Videos liegen derzeit nur als Standbilder vor. Projektansichten sind Dialoge ohne eigenständige indexierbare URLs.

Lokale Nachweise: `tmp/refinement/hero-desktop.png`, `tmp/refinement/mobile-work.png`. Temporäre Prüfdateien werden nicht veröffentlicht.

## Logo und Favicon · 28.09.2026

Header auf Desktop und bei 390 px visuell geprüft; Footer zusätzlich auf schmalem Display. Logo-Dateien laden vollständig, Transparenz an Außenfläche und innerer Aussparung anhand des Alpha-Kanals geprüft. Header-Logo mobil 40 px, Footer 32 px. Browser-Icon-Links mit Größenangaben 32/256/180 vorhanden; Assets lokal ausgeliefert. Keine neue Bildgenerierung, nur Adobe-Zuschnitt und Größenanpassung des freigegebenen Logos.


## Kundeninformationen · 28.09.2026

- Neue Leistungen und vier Schritte in der Desktop-Vorschau geprüft; bei 390 × 844 px ohne horizontalen Überlauf. Datenschutzseite bei gleicher Breite ebenfalls ohne Überlauf.
- Beide nativen FAQ-Elemente geöffnet; zweites explizit per Enter, offener Zustand im DOM bestätigt.
- Mailto-Vorlage und sichtbare E-Mail geprüft, keine Nachricht verschickt.
- DM Sans lokal geladen; keine Google-Fonts-Links mehr. Adobe-Handschrift bewusst erhalten. Rechtsseiten ohne externe Schrift-Anfragen.
- Social-Vorschau als JPEG, 1200 × 630, mit aktuellem Logo und persönlichem Porträt visuell geprüft.
- Vite-Build erfolgreich. 219 lokale Verweise in Quell-/Buildseiten und Projektserien geprüft: keine fehlenden Dateien oder Anker, keine doppelten IDs. robots.txt, Sitemap und Social-Bild vorhanden. `git diff --check` erfolgreich.
- Fix beim Build: Bildpfade aus Projektdaten, Fallbacklinks und absolute Social-Metadaten explizit übernehmen.
- Datenschutz bleibt klar markierter Entwurf; STRATO bestätigt, Protokollfristen, Adobe-/Gmail-Grundlagen und eventuelle Steuer-IDs noch offen. Keine Bereitstellung auf dem Server und keine rechtliche Vollständigkeitsprüfung.
- Screenshots lokal: `tmp/refinement/customer-improvements-final.png`, `tmp/refinement/customer-improvements-mobile.png`.


## Hero nach ausgewählter Referenz · 28.09.2026

Source visual truth: `C:/Users/mario/AppData/Local/Temp/codex-clipboard-3fabe9a0-bc1a-48ea-a955-e7f836d2186d.png`.
Implementation screenshots: `tmp/refinement/hero-editorial-desktop.jpg`, `tmp/refinement/hero-editorial-mobile.jpg`, `tmp/refinement/hero-editorial-tablet.jpg`.
State: Startseite, #top, Menü geschlossen, Heading-Animation abgeschlossen. Desktop-CSS-Viewport 1440 × 1000, Tablet 1024 × 900, Mobil 390 × 844; zusätzlich 320 × 800 geprüft.

Die Referenz ist ein 577 × 455 px großer Ausschnitt eines Desktop-Motivs, keine vollständige Seite oder mobile Vorgabe. Vergleich auf Ebene der sichtbaren Hero-Komposition; kein pixelgenauer Vollseiten-Abgleich behauptet. Referenz und Desktop-Capture gemeinsam in einem Vergleichs-Toolergebnis geöffnet. Kein generiertes Porträt übernommen: eigenes Foto, grüne Kontur, Hintergrund und Handschrift sind bewusst beibehalten. Die vollständige Referenzansicht mit einer unverändert identischen Person wäre hier kein Ziel.

### Befunde und Korrekturen

- [P2, behoben] Im ersten Desktop-Entwurf verdeckte das Porträt zu viel der zweiten Zeile. Schriftgröße und Porträtbreite reduziert; im finalen Bild ist der rechte Abschluss von BILD bewusst überlagert, wie vom Nutzer gewünscht. Vergleich `hero-editorial-desktop-v1.jpg` → `hero-editorial-desktop.jpg`.
- [P2, behoben] Auf Tablet lag die Handschrift zunächst am oberen bzw. rechten Rand und wurde angeschnitten. Bildbreite, Randabstand und Position der Beschriftung korrigiert. Neuer Screenshot `hero-editorial-tablet.jpg` bestätigt vollständige Beschriftung und Gesicht.
- [P2, behoben] Auf Mobil standen Headline und Bild zunächst ohne Überlagerung. Bild etwas vergrößert und höher gesetzt; finaler Screenshot zeigt die gewünschte Überlagerung und einen klar lesbaren Textkasten darunter.

### Fünf Oberflächen

- Typografie: Archivo Black, sehr große zweizeilige H1, reduzierte graugrüne Farbe; kräftige gemischte Schreibweise im Kasten. DM Sans für kurze Beschreibung. Felt Tip Roman beibehalten.
- Layout: Headline hinter, Porträt davor; dunkle Einleitungsfläche mit eigenem Abstand links. Mobile als gestapelte Komposition. Keine horizontalen Überläufe bei den geprüften Breiten; Button 48 px hoch.
- Farben: vorhandene Papier-/Anthrazit-/Limettentokens, dunkler Kasten #111310, Headline #777971. Keine neuen Effekte oder Bildgenerierung.
- Bild: vorhandenes scharfes freigestelltes Porträt, natürliches Seitenverhältnis und grüne Kontur. Kein neues Foto und keine nachgezeichneten Bildassets. Header/Navigation bleiben erhalten.
- Inhalt: „Gute Ideen. Klar gestaltet.“ aus der Referenz, knappe tatsächliche Leistungsbeschreibung, ein eindeutiger Arbeiten-Button. Keine zusätzliche Marketingbehauptung.

### Funktion und Grenzen

Arbeiten-Button führt zu #arbeiten. Mobile ohne horizontalen Überlauf, Fehlerkonsole ohne neue Fehler. Vite-Build erfolgreich. Fokus-/Reduced-Motion-Regeln bestehen weiter; kein vollständiger Screenreader-Audit. Referenz-Ausschnitt und eigener Fotozuschnitt erlauben keine Aussage zu pixelgenauer Identität. Die große Schrift und Kastenabstände sind im Vollbild ausreichend klar lesbar, daher kein zusätzlicher Detailcrop nötig.

Implementation checklist: Referenz umgesetzt, Desktop/Tablet/Mobil kontrolliert, Tablet-Beschriftung korrigiert, CTA geprüft, Build geprüft. Keine offenen P0/P1/P2-Befunde.

final result: passed
`nCapture-Maße: Desktop 1425 × 990 px, Tablet 1009 × 887 px, Mobil 375 × 812 px. Browser-Captures weichen durch Scrollbar/Provider-Skalierung vom angefragten CSS-Viewport ab. Originaldateien unverändert verglichen; keine künstliche Verzerrung auf die Maße des Referenz-Ausschnitts.

## About-Porträt · 28. September 2026

Adobe-Erweiterung und Freistellung visuell geprüft. Kopf und Schultern vollständig, Gesicht aus dem Original erhalten. Desktop und mobile Ansicht geprüft: transparente Silhouette, gleiche grüne Kontur wie im Hero, kein horizontaler Überlauf, Bild erfolgreich geladen (960 × 1040 px). Mobile Reihenfolge: Überschrift, Porträt, Text. Screenshots: tmp/refinement/about-cutout-desktop.jpg und about-cutout-mobile.jpg. Originalfoto unverändert erhalten.

Vite-Produktionsbuild erfolgreich; das neue transparente Porträt ist im Build enthalten.

## Visueller Feinschliff · 29. September 2026

- Chicos und Fortis auf Desktop (1440 px angefragt), Tablet (1024 px) und Mobil (390 px) betrachtet. Originalgrafiken geladen, keine horizontalen Überläufe in den gemessenen Tablet-/Mobilansichten.
- Projektfilter Grafiken & Bildwelten zeigt sechs von zwanzig Arbeiten; Rückkehr zu Web Design zeigt vier Projekte. Neue Webkompositionen beeinflussen die übrigen Rubriken nicht.
- Chicos-Dialog: drei Motive, Logo und Completo über Bildnavigation aufgerufen; Tastatur- und Mausbedienung geprüft. Fortis-Dialog: zwei Motive, Logo erfolgreich geladen. Mobile Dialogbreite ohne Überlauf.
- Porträt in Schwarzweiß mit grüner Kontur sichtbar; neun identische Icon-Flächen bestätigt. Originaldateien unverändert.
- Vite-Produktionsbuild erfolgreich, neue Detailbilder werden auch unter den stabilen URLs für die Projektansichten kopiert. Diff ohne Whitespacefehler.
- Screenshots unter tmp/polish-2026-09-29/: projects-desktop.jpg, fortis-desktop.jpg, projects-mobile.jpg, projects-tablet.jpg, hero-mobile.jpg, about-desktop.jpg. Der Anbieter kann Screenshotmaße durch Scrollbar/Skalierung leicht vom angefragten Viewport abweichend zurückgeben.
- Grenzen: keine vollständige Barrierefreiheitszertifizierung und kein STRATO-Deployment. Bestehende Reduced-Motion-Regeln bleiben aktiv; neue Vergrößerung ausschließlich bei Desktop-Zeiger und ohne reduzierte Bewegung.

## Offene Showcases · 29. September 2026

Desktop und 390-px-Mobilansicht visuell geprüft. Beide Projektkompositionen haben transparenten Hintergrund, keine umfassenden Flächen oder Schatten. Mobil 335 px Inhaltsbreite ohne horizontalen Überlauf; Logos, Motiv und Farbpalette sind vollständig sichtbar. Screenshots: tmp/open-showcases/fortis-desktop.jpg, chicos-desktop.jpg und mobile.jpg. Reine CSS-Änderung; vorhandene Dialoge und Filter unverändert.

## Leistungsseite Webdesign · 29. September 2026

- `/webdesign` und `/webdesign/` im lokalen Server und in der Vite-Build-Vorschau geprüft. Vite leitet die Adresse ohne Schrägstrich vor dem Startseiten-Fallback auf das Seitenverzeichnis weiter; statische Hosts verwenden ihren üblichen Verzeichnisindex.
- 464 Wörter im Hauptinhalt einschließlich der drei FAQ-Antworten; alle sechs geforderten Abschnitte enthalten. Bestehende E-Mail-Adresse für beide Anfragebuttons. Hosting-Richtwert anhand der Anbieterübersicht https://all-inkl.com/webhosting/ geprüft (regulär 7,95 / 9,95 Euro für Privat+ / Premium zum Prüfzeitpunkt); auf der Seite als ungefähres Budget ohne Tarifzusage formuliert.
- Darstellung bei 1440, 1024, 800, 768, 390, 375 und 320 px geprüft: kein seitlicher Überlauf. Desktop- und Mobil-Screenshots visuell kontrolliert. Bestehende Farben, Schriften, Logo und Kontaktfläche übernommen.
- Interne Links und Abschnittsziele, Rückkehr zum Portfolio, mobile Navigation, Escape mit Fokusrückgabe und FAQ-Bedienung per Tastatur erfolgreich geprüft. Inhalte, Kontaktlinks und native FAQ funktionieren ohne JavaScript.
- Nach Auslagerung der gemeinsamen Navigation auch Filter und Projektansicht auf der Startseite geprüft. Keine JavaScript-Fehler oder fehlgeschlagenen lokalen Ressourcen.
- Vite-Produktionsbuild erfolgreich. Funktionsprüfungen auch gegen die Build-Ausgabe bestanden. Lokale Screenshots und Prüfbericht: `tmp/webdesign-qa/`. Kein Hosting-Deployment vorgenommen.

## Webdesign mit Firefly-Illustration · 29. September 2026

- Auf Wunsch weniger Text: 263 Wörter direkt sichtbar, 354 mit allen aufgeklappten Antworten. Wesentliche Leistungs- und Kostenvereinbarungen erhalten; längere Hostingdetails in nativer Aufklappsektion.
- Neue Adobe-Firefly-Monitorillustration visuell geprüft und als 38,652-Byte-WebP eingebunden. Vier eigene SVG-Icons für die nummerierten Projektschritte; dekorativ und ohne zusätzliche Screenreader-Wiederholungen.
- Breiten 1440, 1024, 800, 768, 390, 375 und 320 px ohne seitlichen Überlauf geprüft. Desktop- und 390-px-Gesamtansicht visuell kontrolliert. Grafik und alle vier SVG-Symbole erfolgreich geladen.
- Navigation, Kontaktlinks, native Details per Tastatur, Escape-Fokus und Startseiten-Projektansicht weiterhin geprüft. Screenshots und Bericht: `tmp/webdesign-visual-qa/`.

## Webdesign-CTA auf der Startseite · 29. September 2026

Zwei grüne Buttons eingebunden, im Leistungsbereich sowie vor den Webdesign-Projekten. Build erfolgreich; beide Links zur Unterseite, Umschalten der Rubriken und Darstellung bei 1440, 1024, 801, 390 und 320 px geprüft. Beide Buttons bleiben innerhalb der Bildschirmbreite. Keine JavaScript-Fehler. Screenshots: `tmp/webdesign-cta-qa/`.

## Startseiten-Ablauf mit Icons · 29. September 2026

Vier SVG-Symbole statt sichtbarer Zahlen; Desktop 1440 px und Mobil 390/320 px geprüft. Symbole laden aus dem Build, kein Überlauf der Icons. Visuelle Prüfung von Desktop und schmaler Mobilansicht. Build erfolgreich; statisches Kopieren berücksichtigt nun SVG-Fragmentkennungen korrekt. Screenshots: `tmp/process-icons-qa/`.

## Technisches Webdesign-Herodesign · 29. September 2026

Build erfolgreich; Vorschau bei 1440, 1024, 800, 390 und 320 px geprüft. Kein horizontales Scrollen, Monitor geladen und Anfragebutton innerhalb der Bildschirmbreite. Desktop- und Smartphone-Screenshots visuell kontrolliert; Texte gut lesbar, Dekorationen hinter dem Inhalt. Screenshots: `tmp/webdesign-header-qa/`.

## Design-Geschichte · 29. September 2026

- Produktionsbuild erfolgreich; Vorschau unter /#von-der-idee.
- Browserprüfung bei 1440, 1024, 800, 390 und 320 px: kein horizontaler Überlauf, alle vier Szenen auswählbar.
- Desktop-Scroll aktiviert alle vier Schritte; bewusste Auswahl bleibt bei automatischem Fokus-Scrolling erhalten.
- Enter/Leertaste, Touch, reduzierte Bewegung und Fallback ohne JavaScript geprüft.
- Kontakt-CTA führt zu #kontakt; keine JavaScript-Seitenfehler.
- Desktop-, Mobil- und Gestaltungsansicht anhand von Screenshots geprüft. Lokale Prüfroutine: tmp/check-design-story.mjs; Bilder: tmp/story-qa/.

## Werkzeugvorschau · 29. September 2026

Produktionsbuild erfolgreich. Neun Auswahlzustände bei 1440, 1024, 800, 390 und 320 px geprüft: korrekte Texte und Auswahlmarkierung, kein horizontaler Überlauf. Maus-Hover, Tastaturwechsel, simulierte Touch-Bedienung und reduzierte Bewegung geprüft. Ohne JavaScript bleiben neun Werkzeuge mit ursprünglichem Attributionslink sichtbar. Keine JavaScript-Seitenfehler. Screenshots der Desktop- und Mobilansicht visuell geprüft: tmp/tools-1440.png und tmp/tools-390.png. Kein Test auf physischem Mobilgerät.

## Kompakte Projektbühne · 29. September 2026

Produktionsbuild erfolgreich. Alle Projekte in Web Design, Grafiken & Bildwelten, 3D und Video bei 1440, 1024, 800, 390 und 320 px ausgewählt. Jeweils genau ein großes Projekt, korrekte Kategorie und eine aktive Vorschau; keine Höhenänderung innerhalb einer Rubrik und kein horizontaler Seitenüberlauf. Zusätzlich Hover, Tastatur, simuliertes Touch, Dialogöffnung, Escape, Fokusrückgabe und gespeicherte Auswahl geprüft. Texte auf 320 px bleiben innerhalb ihrer Metadatenfläche. Desktop- und Mobil-Screenshots geprüft. Prüfroutine: tmp/check-portfolio-stage.mjs; Vorschau: tmp/portfolio-stage-final.png. Keine JavaScript-Seitenfehler.

## Offene Portfolioansicht · 29. September 2026

Website-Screenshots füllen ihre Bildfläche jetzt mit object-fit: cover und oberer Ausrichtung. Dadurch entfallen seitliche Leerflächen; bei abweichendem Seitenverhältnis wird der untere Bildbereich angeschnitten. Außenrahmen, Panelhintergrund und Trennlinie zwischen Bild und Text sind entfernt. Die Vorschauen stehen ohne Kachelrahmen; eine feine grüne Unterlinie kennzeichnet Auswahl und Hover. Desktop und mobile Ansichten bei 390/320 px visuell geprüft, alle vier Website-Bilder auf randfüllende Darstellung und Seitenüberlauf kontrolliert. Build erfolgreich.

## Projektlogos · 29. September 2026

Fünf Website-Logos oberhalb der Titel ergänzt, ohne Rahmen. Lokal optimierte Originaldateien, Herkunft unter assets/projects/details/SOURCES.md. Roboterly mit heller Wortmarke für den dunklen Hintergrund. Desktop und Mobilansicht (1440, 1024, 800, 390, 320 px) geprüft: alle Logos geladen, keine Überläufe oder Höhensprünge. Screenshots aller fünf Projekte visuell geprüft. Produktionsbuild erfolgreich; Prüfroutine tmp/check-project-logos.mjs.

## Deutschlandweite SEO-Grundlagen · 29. September 2026

Startseite und Webdesign-Leistungsseite erhalten präzisere Suchtexte und strukturierte Daten. Fünf generierte Projektseiten mit vorhandenen Projektfakten sind unabhängig von JavaScript erreichbar; interne Links, Social-Bilder, Canonicals und Sitemap sind eingebunden. Acht Sitemap-URLs und alle fünf Projektseiten ohne JavaScript geprüft, plus mobile Breiten 390/320 px und Dialog-zu-Projektseite-Link. JSON-LD lokal geparst, nicht als Google-Rich-Result-Validierung ausgegeben. Produktionsbuild erfolgreich. Öffentliche Domain und robots.txt erreichbar; Veröffentlichung dieses Änderungsstands sowie Search-Console-Einrichtung nicht vorgenommen. Details in SEO.md.
