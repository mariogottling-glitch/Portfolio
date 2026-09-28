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
