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
