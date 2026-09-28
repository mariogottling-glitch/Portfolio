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
- `project-details.js`: kurze Projektbeschreibungen, Leistungsabgrenzung, Live-Links und Bildserien. Weitere Karten erhalten automatisch eine einfache Bildansicht.
- `styles.css` und `script.js`: Gestaltung, Filter, Projektansichten, Navigation und Bewegung.
- `assets/optimized/`: responsive WebP-Fassungen der Fotos und Website-Screenshots. Originale bleiben erhalten.
- `PROJECTS.md`: bestätigte Leistungen und Inhalte; `DESIGN.md`: aktuelle Gestaltung; `design-qa.md`: Prüfstand.

Vier Rubriken: Web Design, Grafiken & Bildwelten, 3D und Video. In größeren Rubriken erscheinen zunächst sechs Projekte. Zusammengehörige Motive sind in einer Projektansicht gebündelt. Videoeinträge zeigen bislang Standbilder.

Kundenanfragen: mariogottling@googlemail.com. Vor der öffentlichen Veröffentlichung finale Domain, Social-Preview, Impressum und Datenschutz vervollständigen (siehe `SEO.md`).

## GitHub-Synchronisierung

Repository: https://github.com/mariogottling-glitch/Portfolio

Abgeschlossene und geprüfte Änderungen werden auf `main` committed und gepusht. Vor weiteren Änderungen den Remote-Stand mit `git pull --ff-only` abrufen. Bei Konflikten die Änderungen zusammenführen; keinen Force-Push verwenden.

Temporäre Dateien, lokale PDF-Vorschauen, Zugangsdaten, Build-Ausgaben und installierte Pakete bleiben durch `.gitignore` lokal. Die Synchronisierung erfolgt bei der Bearbeitung des Projekts; es läuft kein Hintergrunddienst.
