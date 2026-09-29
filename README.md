# Portfolio Homepage

Persönliches Freelancer-Portfolio von Mario Göttling. Dunkle Gestaltung mit Limettengrün, kräftiger Typografie, persönlichen Fotos und einer asymmetrischen Projektübersicht.

## Lokal ansehen

Node.js ist ausreichend. Im Projektordner starten:

```powershell
node server.mjs
```

Dann `http://127.0.0.1:4173/` öffnen.

## Inhalte pflegen

- `SEO.md`: deutschlandweite Suchausrichtung, umgesetzte Grundlagen und Schritte für die Veröffentlichung/Search Console. Projektseiten unter `projekte/` werden beim Build aus `project-details.js` und den Projektkarten generiert; Generator: `scripts/generate-project-pages.mjs`.

- `index.html`: Einstieg, Projektkarten, Über mich, Werkzeuge und Kontakt.
- `webdesign/index.html`: Leistungsseite „Website erstellen lassen“, erreichbar unter `/webdesign` und `/webdesign/`; verlinkt im Leistungsbereich „Web Design“. `webdesign/webdesign.css` ergänzt das bestehende Design. Beim Hochladen den Ordner `webdesign` mit seiner `index.html` beibehalten.
- `impressum.html`: bestätigter Name, Anschrift, Telefonnummer und E-Mail. Noch offen: Klärung, ob eine USt-IdNr. oder Wirtschafts-ID vorliegt. Nicht als rechtlich vollständig geprüft behandeln. Über den Footer erreichbar; `vite.config.js` nimmt alle vier HTML-Seiten in den Build auf.
- `datenschutz.html`: verlinkter Entwurf mit STRATO, E-Mail und Adobe Fonts. Vor Veröffentlichung vervollständigen; offene Punkte stehen in `LAUNCH.md`.
- `project-details.js`: kurze Projektbeschreibungen, Leistungsabgrenzung, Live-Links und Bildserien. Weitere Karten erhalten automatisch eine einfache Bildansicht.
- `styles.css` und `script.js`: Gestaltung, Filter, Projektansichten, Navigation und Bewegung.
- `navigation.js`: gemeinsame mobile Navigation und Header-Verhalten der Startseite und Webdesign-Unterseite.
- `assets/optimized/`: responsive WebP-Fassungen der Fotos und Website-Screenshots. Originale bleiben erhalten.
- `PROJECTS.md`: bestätigte Leistungen und Inhalte; `DESIGN.md`: aktuelle Gestaltung; `design-qa.md`: Prüfstand.

Vier Rubriken: Web Design, Grafiken & Bildwelten, 3D und Video. In größeren Rubriken erscheinen zunächst sechs Projekte. Zusammengehörige Motive sind in einer Projektansicht gebündelt. Videoeinträge zeigen bislang Standbilder.

Kundenanfragen: mariogottling@googlemail.com. Hauptadresse: https://www.mario-goettling.de/. Vor der öffentlichen Veröffentlichung Domain und Hosting verbinden sowie Impressum und Datenschutz abschließen (siehe `LAUNCH.md`). Das aktuelle Social-Bild ist bereits eingebunden.

## GitHub-Synchronisierung

Repository: https://github.com/mariogottling-glitch/Portfolio

Abgeschlossene und geprüfte Änderungen werden auf `main` committed und gepusht. Vor weiteren Änderungen den Remote-Stand mit `git pull --ff-only` abrufen. Bei Konflikten die Änderungen zusammenführen; keinen Force-Push verwenden.

Temporäre Dateien, lokale PDF-Vorschauen, Zugangsdaten, Build-Ausgaben und installierte Pakete bleiben durch `.gitignore` lokal. Die Synchronisierung erfolgt bei der Bearbeitung des Projekts; es läuft kein Hintergrunddienst.
