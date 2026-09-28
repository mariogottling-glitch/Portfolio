# Portfolio Homepage

Persönliches Freelancer-Portfolio von Mario Göttling. Dunkle Gestaltung mit Limettengrün, kräftiger Typografie, persönlichen Fotos und einer asymmetrischen Projektübersicht.

## Lokal ansehen

Node.js ist ausreichend. Im Projektordner starten:

```powershell
node server.mjs
```

Dann `http://127.0.0.1:4173/` öffnen.

## Inhalte pflegen

- `index.html`: Einstieg, Projektkarten, Über mich, Werkzeuge und Kontakt.
- `impressum.html`: bestätigter Name, Anschrift und E-Mail. Noch offen: weiterer direkter Kontaktweg und Klärung, ob eine USt-IdNr. oder Wirtschafts-ID vorliegt. Nicht als rechtlich vollständig geprüft behandeln. Über den Footer erreichbar; `vite.config.js` nimmt beide HTML-Seiten in den Build auf.
- `project-details.js`: kurze Projektbeschreibungen, Leistungsabgrenzung, Live-Links und Bildserien. Weitere Karten erhalten automatisch eine einfache Bildansicht.
- `styles.css` und `script.js`: Gestaltung, Filter, Projektansichten, Navigation und Bewegung.
- `assets/optimized/`: responsive WebP-Fassungen der Fotos und Website-Screenshots. Originale bleiben erhalten.
- `PROJECTS.md`: bestätigte Leistungen und Inhalte; `DESIGN.md`: aktuelle Gestaltung; `design-qa.md`: Prüfstand.

Vier Rubriken: Web Design, Grafiken & Bildwelten, 3D und Video. In größeren Rubriken erscheinen zunächst sechs Projekte. Zusammengehörige Motive sind in einer Projektansicht gebündelt. Videoeinträge zeigen bislang Standbilder.

Kundenanfragen: mariogottling@googlemail.com. Hauptadresse: https://www.mario-goettling.de/. Vor der öffentlichen Veröffentlichung Domain und Hosting verbinden sowie Social-Preview, Impressum und Datenschutz vervollständigen (siehe `SEO.md`).

## GitHub-Synchronisierung

Repository: https://github.com/mariogottling-glitch/Portfolio

Abgeschlossene und geprüfte Änderungen werden auf `main` committed und gepusht. Vor weiteren Änderungen den Remote-Stand mit `git pull --ff-only` abrufen. Bei Konflikten die Änderungen zusammenführen; keinen Force-Push verwenden.

Temporäre Dateien, lokale PDF-Vorschauen, Zugangsdaten, Build-Ausgaben und installierte Pakete bleiben durch `.gitignore` lokal. Die Synchronisierung erfolgt bei der Bearbeitung des Projekts; es läuft kein Hintergrunddienst.
