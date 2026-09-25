# Portfolio Homepage

Lokaler Entwurf für das persönliche Freelancer-Portfolio.

Die aktuelle Richtung kombiniert einen großen persönlichen Hero mit einer arbeitsorientierten Projektübersicht. Die Projektkacheln verlinken bereits auf die vier Live-Websites; ihre Musterbilder werden nach der Screenshot-Erfassung ersetzt.

## Lokal ansehen

Node.js ist ausreichend. Im Projektordner starten:

```powershell
node server.mjs
```

Dann `http://127.0.0.1:4173/` öffnen.

## Inhalte ergänzen

Die redaktionellen Angaben stehen in [PROJECTS.md](PROJECTS.md). Die visuelle Richtung und responsive Regeln stehen in [DESIGN.md](DESIGN.md).

## GitHub-Synchronisierung

Repository: https://github.com/mariogottling-glitch/Portfolio

Abgeschlossene und geprüfte Änderungen werden auf `main` committed und gepusht. Vor weiteren Änderungen den Remote-Stand mit `git pull --ff-only` abrufen. Bei Konflikten die Änderungen zusammenführen; keinen Force-Push verwenden.

Temporäre Dateien, die lokale Lebenslauf-Vorschau, Zugangsdaten, Build-Ausgaben und installierte Pakete bleiben durch `.gitignore` lokal. Die Synchronisierung erfolgt bei der Bearbeitung des Projekts; es läuft kein Hintergrunddienst.
