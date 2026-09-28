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

Vor öffentlichem Start: finale Domain, Social-Preview, Impressum und Datenschutz ergänzen. Videos liegen derzeit nur als Standbilder vor. Projektansichten sind Dialoge ohne eigenständige indexierbare URLs.

Lokale Nachweise: `tmp/refinement/hero-desktop.png`, `tmp/refinement/mobile-work.png`. Temporäre Prüfdateien werden nicht veröffentlicht.
