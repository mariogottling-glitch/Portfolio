# Veröffentlichung auf STRATO

Stand: 28.09.2026. Der eigene STRATO-Server ist als Hostingziel bestätigt. Noch keine Bereitstellung oder Server-Konfiguration vorgenommen.

## Erledigt

- Kurze Leistungsbeschreibungen, Ablauf in vier Schritten und zwei aufklappbare Kundenfragen.
- E-Mail-Anfrage mit Vorlage; keine unbestätigten Preise oder Antwortzeiten.
- DM Sans lokal samt OFL-Lizenz. Archivo Black bleibt lokal, Felt Tip Roman bleibt über das lizenzierte Adobe-Kit eingebunden.
- Aktuelles Social-Bild in `assets/brand/social-preview.jpg` (1200 × 630); reproduzierbare Gestaltung in `design/social-preview.html`.
- Verlinkte Datenschutzseite als ausdrücklich gekennzeichneter Entwurf, vorerst `noindex` und nicht in der Sitemap.
- Build übernimmt alle drei Seiten, dynamische Projektbilder, Bild-Fallbacklinks, Social-Vorschau, Schriftlizenzen, robots.txt und Sitemap.

## Vor dem öffentlichen Start abschließen

1. Website separat von OpenClaw als statische Dateien bereitstellen. Nur den Inhalt von `dist` ausliefern, nicht Repository, Entwicklungsserver oder Administrationsoberflächen. Domain und HTTPS einrichten; ohne-www-Adresse auf die kanonische www-Adresse umleiten.
2. Tatsächlichen Webserver, Zugriffs-/Fehlerprotokolle, Datenfelder und Löschfristen feststellen bzw. konfigurieren. Die Datenschutzseite entsprechend vervollständigen. STRATO-Auftragsverarbeitungsvertrag prüfen/abschließen; derzeit kein abgeschlossener Vertrag behauptet.
3. Rechtsgrundlage/Interessenabwägung und Drittlandübermittlung für Adobe Fonts prüfen. Gegebenenfalls rechtlich passende Einbindung oder lokal lizenzierte Alternative wählen. Keine lokale Kopie von Adobe-Kit-Dateien ohne entsprechende Lizenz. Gmail-Nutzung für geschäftliche Kommunikation samt Vertrags-/Datenschutzgrundlage ebenfalls prüfen.
4. Mario sucht eine gegebenenfalls vorhandene USt-IdNr./Wirtschafts-ID heraus. Bis dahin keine erfundenen Nummern und keine persönliche Steuernummer eintragen.
5. Nach Klärung Datenschutz-Entwurf und `noindex` entfernen, Datenschutz-URL zur Sitemap hinzufügen; abschließend rechtlich prüfen lassen.
6. Live HTTPS, Umleitungen, alle Rubriken und Projektbilder, Mail-Link sowie Social-Bild prüfen. Keine echte Anfrage für einen automatischen Test versenden. Search Console erst mit Domainzugang einrichten.

## Grundlagen des Datenschutz-Entwurfs

- LDI NRW, Muster für einfache Websites: https://www.ldi.nrw.de/datenschutz/medien-und-technik/websites-muster-fuer-datenschutzhinweise
- STRATO: https://www.strato.de/datenschutz/
- Adobe Fonts: https://www.adobe.com/privacy/policies/adobe-fonts.html
- Adobe Datenschutz: https://www.adobe.com/de/privacy/policy.html
- Google/Gmail: https://policies.google.com/privacy?hl=de

Der Entwurf beschreibt den bekannten Stand. Er ist keine Bestätigung der noch ungeprüften Server- und Vertragsbedingungen.

## Build

`pnpm install --frozen-lockfile`, dann `pnpm build`. Der eingecheckte Lockfile hält die Abhängigkeiten reproduzierbar. `server.mjs` ist ausschließlich die lokale Vorschau.
