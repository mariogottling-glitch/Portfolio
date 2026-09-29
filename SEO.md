# SEO · deutschlandweite Ausrichtung

Stand: 29. September 2026. Zielgruppe: Selbstständige und kleine Unternehmen in Deutschland. Keine lokalen Landingpages oder Stadt-Keyword-Listen.

## Umgesetzt

- Startseite: eindeutiger Leistungstitel, passende Meta-/Social-Beschreibungen und ein kurzer sichtbarer Einstieg mit deutschlandweiter Ausrichtung.
- Webdesign-Seite: Suchintention „Website erstellen lassen“, Zielgruppe und deutschlandweite Zusammenarbeit klar benannt.
- Fünf eigenständige Projektseiten unter `/projekte/`: vorhandene, bestätigte Projektbeschreibungen als direkt erreichbares HTML. Die kompakte Startseiten-Vorschau und die Dialoge bleiben erhalten; im Dialog führt ein zusätzlicher Link zur Projektseite. Die Projektlinks im HTML zeigen direkt auf diese Seiten.
- Eigene Titel, Beschreibungen, Canonical-Adressen, Vorschaubilder und interne Querverweise pro Projektseite.
- Strukturierte Daten für Person, Website, Seiten, Webdesign-Leistung und Projekte. Roboterly bleibt ausdrücklich auf die Hero-Gestaltung begrenzt. Keine erfundenen Bewertungen, Preise, Referenzen oder Erfolgszahlen.
- Sitemap um alle fünf Projektseiten ergänzt. `robots.txt` erlaubt das Crawling. Der vorhandene Datenschutz-Entwurf bleibt `noindex` und außerhalb der Sitemap.

## Geprüft

- Die öffentliche Homepage war unter HTTPS erreichbar (HTTP 200), die Adresse ohne www leitete auf www um; öffentliche robots.txt erlaubt das Crawling. Das ist keine Bestätigung einer Google-Indexierung oder guter Platzierungen.
- Lokaler Produktionsbuild: acht Sitemap-Adressen erreichbar, eindeutige Titel und Canonical-Adressen, jeweils eine H1, vorhandene Beschreibungen und parsebare JSON-LD-Daten.
- Projekttexte ohne JavaScript vollständig lesbar, alle internen Projektlinks und lokalen Social-Bilder vorhanden.
- Ansichten bei 1440, 390 und 320 px ohne seitlichen Überlauf; bestehender Projektdialog und neuer Projektseiten-Link funktionieren.
- Keine Search-Console-Leistungsdaten, Live-Rankingmessung oder Google-Validierung der strukturierten Daten durchgeführt. Die lokale Prüfung bestätigt Struktur und Erreichbarkeit, keine Berechtigung für spezielle Suchergebnis-Darstellungen.

## Für die öffentliche Wirkung noch erforderlich

1. Die Änderungen auf GitHub und anschließend den vollständigen Inhalt von `dist/` auf dem produktiven Hosting veröffentlichen. Bisher sind diese Änderungen nur lokal vorbereitet.
2. Auf dem echten Server die fünf Projektadressen, Canonical-Adressen, Bilder und Sitemap prüfen; unbekannte Adressen müssen HTTP 404 liefern. Die Vorschau ist kein Nachweis der Serverkonfiguration.
3. Die Domain in der Google Search Console bestätigen bzw. eine bestehende Property nutzen. Dafür werden der passende Google-Account und gegebenenfalls DNS-Zugriff benötigt. Hier wurden keine Zugangsdaten oder Verifikationseinträge eingerichtet.
4. `https://www.mario-goettling.de/sitemap.xml` einreichen und die veröffentlichten Seiten per URL-Prüfung kontrollieren. Nicht die localhost-Vorschau einreichen.
5. Danach die tatsächlichen Suchanfragen, Impressionen, Klicks und Indexierung beobachten. Weitere Inhalte anhand dieser Daten ausbauen, nicht anhand erfundener Suchvolumen. Gute Platzierungen für allgemeine Begriffe wie „Webdesign“ sind nicht garantiert.

## Inhalte pflegen

Projekttexte stammen aus `project-details.js`, Projektbilder aus den Karten in `index.html`. `node scripts/generate-project-pages.mjs` erzeugt die fünf HTML-Seiten neu; der reguläre Build führt diesen Schritt automatisch aus. Änderungen an generierten Seiten im Generator bzw. in den Quelldaten vornehmen. Neue Projektseiten zusätzlich in Generator, Vite-Einstiegen, internen Links und Sitemap ergänzen.

## Grundlagen

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google: Inhalte nicht ausschließlich von Nutzerinteraktionen abhängig machen](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading)

## Vorhandene SEA-Planung bleibt separat

Es wurden keine Anzeigen, Tracking-Pixel oder Analytics eingebaut und keine Kampagnen aktiviert. Die bisherige Planung für mögliche Anzeigengruppen (Webdesign Freelancer, Website Relaunch, KI-Bildwelten für Websites) bleibt eine spätere Option. Vorher sind Angebot, Kontaktziel, Monatsbudget, gewünschte Anfragekosten und eine passende Analytics-/Consent-Lösung festzulegen. Als späteres UTM-Schema war `?utm_source=google&utm_medium=cpc&utm_campaign=webdesign&utm_content=anzeige-1` vorgesehen; die Website speichert diese Parameter derzeit nicht dauerhaft.
