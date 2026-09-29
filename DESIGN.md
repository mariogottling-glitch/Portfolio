# Design · Mario Göttling Portfolio

Aktueller Stand: 28. September 2026. Diese Spezifikation ersetzt die früheren Zwischenstände. Frühere Entwürfe stehen im Git-Verlauf und im Ordner `design/`.

## Richtung

Persönliches Designer-Portfolio mit Anthrazit (#242423), gebrochenem Weiß (#f1f0e9) und Limettengrün (#b1ef72). Archivo Black für große Überschriften, DM Sans für lesbare Texte. Keine glamourösen Glows. Referenzprinzipien: prägnante Typografie, persönliche Collage, Arbeiten im Vordergrund und kurze Projektgeschichten.

## Aufbau

1. Persönlicher Hero mit Grafik. Web. Bild., einem konkreten Angebot, Arbeiten-Button und Kontaktlink. Freigestelltes Schwarzweißfoto mit vollständiger Schulterkontur, grüner Kontur und kleiner Notiz. Technisches Raster, Kreislinien und diagonale Achse bleiben dezent.
2. Kurzer Übergang zur Projektübersicht: Arbeiten mit Handschrift. Keine zusätzliche Dekografik zwischen Hero und Projekten.
3. Vier Rubriken: Web Design als Startansicht; Grafiken & Bildwelten, 3D, Video. Keine Auswahl-Rubrik. Desktop: asymmetrische Spalten und bewusste Versätze. Mobil: eine Spalte, vier Rubriken in einem vollständig sichtbaren Zweizeilenraster.
4. Zunächst höchstens sechs Projekte pro Rubrik, weitere in Sechserschritten. Spießer 2.0 und Character Study bündeln mehrere Motive ohne Inhalte zu entfernen.
5. Projektansichten mit großem Bild vor der Erläuterung. Kundenprojekte erhalten kurze Angaben zu Aufgabe, eigener Leistung und Gestaltung. Serien mit Miniaturen und Vor/Zurück. Optionaler Live-Link und konkrete Projektanfrage. Escape schließt und gibt den Fokus zurück.
6. Persönlicher Über-mich-Abschnitt vor einer kompakten Reihe aus neun Programm-Icons. Echte Fotos, knappe Beschreibung der Zusammenarbeit, keine erfundenen Kompetenzstufen oder Kundenstimmen.
7. Grüne Kontaktfläche mit Projektanfrage, lesbarer E-Mail-Adresse und Kopierfunktion. Footer mit Rücksprung zum Anfang.

## Bilder und Inhalte

Echte, bereitgestellte Screenshots und Portfolioarbeiten verwenden. Websites füllen ein 16:10-Format, oben ausgerichtet und ohne Balken. Grafikarbeiten behalten ihr eigenes Format; in der Projektansicht wird das ganze Bild gezeigt. Roboterly zeigt ausschließlich Marios KI-Bildgestaltung und Nachbearbeitung, nicht sein Webdesign.

Hero: durch Adobe erweitertes und freigestelltes Mützenportrait. Über mich: zweites Originalfoto. Responsives WebP für Portraits und Websites, stark verkleinerte Hintergrundtextur. Originaldateien bleiben erhalten. Neue generative Grafiken ausschließlich über Adobe gemäß Nutzerwunsch. Diese Überarbeitung verwendet vorhandene Bilder und erstellt keine neuen KI-Motive.

## Bewegung und Bedienung

Waagerechte Abschnittstrenner sind 2 px stark: unter dem Header und Hero, über „Über mich“ und den Werkzeugen sowie unter den Portfolio-Rubriken. Der dezente Grauton bleibt erhalten; kleinere Linien an Projektkarten und Bedienelementen bleiben 1 px.

Desktop-Hover ausschließlich auf Portfolio-Bildern: sanfter Zoom auf 1,035. Zurückhaltende Hintergrund-Parallaxe (8 % Desktop, 3,5 % mobil) und einmaliges Einblenden der Hauptüberschriften. Reduced Motion deaktiviert Bewegung. Ohne JavaScript bleibt der Inhalt sichtbar; direkte Bild- und Website-Links bleiben als Fallback erhalten.

Mindestens 44 px große wesentliche Bedienelemente, sichtbarer Tastaturfokus, semantische Überschriften, native modale Projektansicht, Statusmeldung für Filter und Kopierfunktion. Mobile Navigation ist im geschlossenen Zustand wirklich verborgen. Kein seitliches Wischen erforderlich, um Rubriken zu finden.

## Noch offen vor öffentlichem Start

Hauptadresse https://www.mario-goettling.de/ mit dem Hosting verbinden und Social-Preview festlegen; Impressum und Datenschutz mit tatsächlichen Angaben ergänzen. Echte Filmdateien können später die klar gekennzeichneten Video-Standbilder ersetzen. Zusätzliche Projektanwendungen nur mit vorhandenem oder freigegebenem Material ergänzen.

## Logo-Integration · 28.09.2026

Marios eigenes, verfeinertes Logo mit matter grüner Textur ersetzt die reine Textmarke im Header. Logo plus zweizeiliger Name; mobil verkleinert. Im Footer erscheint dieselbe Kombination dezenter. Logo-Links führen zum Seitenanfang und haben eine ausgeschriebene zugängliche Bezeichnung. Transparente lokale PNG-Dateien, Browser-Icons in 32 und 256 px sowie Apple-Touch-Icon in 180 px. Quelle: `assets/brand/SOURCES.md`.

## Handschriftliche Akzente · 28.09.2026

In „Hi, ich bin Mario.“ steht der Name als persönliche Signatur: Felt Tip Roman, Limettengrün, 1,75-fache Schriftgröße und um 11 Grad gedreht. Eine kurze geschwungene Unterstreichung betont die Signatur; „Hi, ich bin“ bleibt in Archivo Black. Größen und Abstände passen sich mobil an.

Felt Tip Roman Regular über Adobe Fonts (Webprojekt `zxa0mqk`, CSS-Familie `felt-tip-roman`) für die persönliche Notiz „Der Kopf dahinter“ und den kurzen Hinweis neben der Arbeiten-Überschrift. Echte Handschrift, normaler Schnitt, Limettengrün, leichte Neigung; keine künstliche Kursivstellung. Im Hero 30 px, mobil 24 px, dazu ein gebogener SVG-Pfeil, der mobil zum Porträt zeigt. Die zweite Notiz bleibt mobil wie bisher ausgeblendet. Überschriften bleiben Archivo Black, Lesetexte und Bedienung DM Sans. Adobe-Einbindung gilt für beide Domainvarianten sowie localhost und 127.0.0.1; benötigt das aktive Adobe-Fonts-Webprojekt. Schriftquelle: https://fonts.adobe.com/fonts/felt-tip.


## Kundeninformationen · 28. September 2026

Nach den Werkzeugen folgt ein kompakter Abschnitt „Deine Idee. Unser Projekt.“ mit drei Leistungen, vier nummerierten Schritten und zwei nativen aufklappbaren Antworten. Desktop: drei Leistungsspalten und vier Prozessspalten; mobil: Leistungen untereinander, Ablauf zweispaltig (unter 361 px einspaltig). Die grüne Handschrift bleibt als persönlicher Akzent. Keine erfundenen Preise, Termine oder Kundenstimmen. DM Sans wird lokal geladen; die Adobe-Handschrift bleibt extern. Das Social-Bild nutzt Marios vorhandenes Logo und Porträt.


## Hero-Komposition · 28. September 2026

Die freigegebene Referenz bestimmt die neue Hierarchie: sehr große, graugrüne Hintergrund-Headline in zwei Zeilen (GRAFIK. / WEB. BILD.), darüber Marios echtes freigestelltes Porträt mit grüner Kontur. Der rechte Teil von BILD überlappt bewusst mit dem Porträt. Die Einleitung „Gute Ideen. Klar gestaltet.“ steht links in einer eigenen dunklen Fläche mit kurzer Beschreibung und einem grünen Arbeiten-Button. Mobile: Headline und Porträt über dem vollbreiten Textkasten, leichte Überlagerung; Tablet mit eigenem Schrift-/Bildmaß. Bestehende Handschrift bleibt. Kein neues Bild erzeugt.

## Freigestelltes About-Porträt · 28. September 2026

Das Originalfoto mit langen Haaren wurde mit Adobe generativ um Kopf und Schultern erweitert und anschließend freigestellt. Die transparente Webfassung (960 × 1040 px) ersetzt den gedrehten Bilderrahmen. Dieselbe limettengrüne CSS-Kontur wie im Hero verbindet beide Porträts gestalterisch. Original und vollständige KI-Erweiterung bleiben erhalten.

## Visueller Feinschliff · 29. September 2026

Chicos und Fortis erhalten vollbreite Projektkompositionen aus Website und Original-Markenmaterial. Chicos: warme Fläche mit Website links, Logo und Completo-Motiv rechts. Fortis: gespiegelter Aufbau, Baumlogo auf Grün und eine zurückhaltende Farbpalette. Auf Mobil bleibt der Screenshot oben, darunter folgen die Markenbausteine in zwei Spalten. Beide Projektansichten enthalten nun zusätzliche Motive zum Durchblättern. Materialherkunft: assets/projects/details/SOURCES.md.

Das About-Porträt wird per CSS neutral schwarzweiß mit abgestimmten Tonwerten angezeigt; grüne Kontur und Originaldatei bleiben erhalten. Hintergrundstruktur insgesamt dezenter, Arbeitsproben auf ruhigerer Fläche. Hero-Schrift leicht heller; mobiler Ausschnitt nach rechts und unten versetzt, sodass WEB. BILD. lesbar bleibt. Neun Programm-Icons stehen in identischen 76-px-Flächen (mobil 68 px), optische Logo-Größen angeglichen. Bestehende reduzierte Bewegung und Tastaturfokus bleiben erhalten.

## Offene Projektpräsentationen · 29. September 2026

Die flächigen Farbkästen der beiden Leitprojekte sind entfernt. Website, transparentes Logo und Chicos-Motiv stehen als einzelne Elemente direkt auf dem Seitenhintergrund. Desktop: großzügiger Abstand zwischen Website und Markendetails, Fortis weiterhin gespiegelt. Mobil: Website oben, zwei frei stehende Detailgruppen darunter. Die Fortis-Palette besteht aus vier kleinen Farbpunkten. Projektüberschriften etwas zurückgenommen; Detailansichten und Hover-Verhalten bleiben erhalten.

## Leistungsseite Webdesign · 29. September 2026

Unter `/webdesign` ergänzt „Website erstellen lassen“ das Portfolio. Dieselben Schriften, Farben, Hintergrundstruktur, Logo und Kontaktfläche verbinden beide Seiten. Ein typografischer Einstieg mit kurzer handschriftlicher Notiz führt zu einer offenen Leistungsliste, vier nummerierten Schritten, getrennten Informationen zu Erstellung und Hosting sowie drei nativen aufklappbaren Fragen. Keine zusätzlichen Projektbilder oder Karten. Mobil stehen Leistungen und Kosten untereinander; der Ablauf nutzt zwei Spalten, unter 381 px eine. Der Link steht im vorhandenen Leistungsbereich „Web Design“. Beide Anfragebuttons verwenden die bestätigte E-Mail-Adresse. Die gemeinsame Navigation liegt in `navigation.js`; die Seitenergänzungen sind in `webdesign/webdesign.css` gekapselt.

## Visuell gestraffte Webdesign-Seite · 29. September 2026

Auf Nutzerwunsch ersetzt ein zweispaltiger Einstieg die große reine Textfläche: links kurze Headline und Einleitung, rechts eine eigens mit Adobe Firefly erzeugte Monitor-Illustration mit Website-Entwurf. Die Farben bleiben Anthrazit, gebrochenes Weiß und Grün. Sechs kompakte Leistungspunkte stehen in einem offenen Zweispaltenraster. Vier eigene SVG-Linienicons illustrieren Kennenlernen, Entwurf, Vorschau und Veröffentlichung. Nummern und echte Überschriften bleiben erhalten. Erstellung und Hosting sind als zwei klare Kostenblöcke erfassbar; längere Vertrags- und Betreuungsdetails liegen in einem nativen aufklappbaren Abschnitt. Die drei FAQ bleiben erhalten. Rund 260 Wörter sind sofort sichtbar, rund 350 einschließlich aller aufgeklappten Antworten. Mobil stehen Bild und Texte untereinander; sehr schmale Ansichten erhalten einspaltige Leistungen und Schritte. Bildherkunft und Prompt: `assets/webdesign/SOURCES.md`.

## Sichtbare Webdesign-Aufrufe · 29. September 2026

Der bisherige Textlink im Leistungsbereich ist jetzt ein limettengrüner Button mit Abstand zum Beschreibungstext. Ein zweiter gleich gestalteter Button steht oberhalb der Projekte direkt unter den Portfolio-Rubriken. Er erscheint bei Web Design; andere Rubriken zeigen weiterhin den bisherigen Hinweis. Mobil steht der obere Button vollbreit unter der Projektanzahl. Beide Links führen zu `/webdesign`.

## Ablauf-Icons auf der Startseite · 29. September 2026

Die sichtbaren Zahlen unter „So arbeiten wir zusammen“ sind durch grüne Linien-Icons ersetzt: Gespräch, Angebotsdokument mit Haken, Entwurf mit Stift und Rakete für Umsetzung. Die bestehende SVG-Symbolsammlung wird gemeinsam verwendet und um das Angebotsicon ergänzt. Überschriften und Texte bleiben bestehen. Desktop 52 px, auf sehr kleinen Displays 40 px neben dem Text.

## Technisches Raster im Webdesign-Einstieg · 29. September 2026

Der Einstieg greift die Konstruktionsgrafik der Startseite auf: 40-px-Raster, feine konzentrische Kreislinien, diagonale Achse und kleine Passmarken. Die vorhandene Monitorillustration erhält weich ausgeblendete Bildränder und zwei dezente Eckmarkierungen. Alle Dekorationen sind nicht interaktiv und vor Hilfstechnologien verborgen. Mobil: zurückgenommenes 28-px-Raster und an die Bildposition angepasster Kreis. Die Gestaltung bleibt statisch und benötigt keine zusätzliche Bilddatei oder Animation.

## Interaktive Design-Geschichte · 29. September 2026

Unter den drei Leistungen ersetzt eine interaktive Geschichte die bisherige Viererspalte. Vier eigens gezeichnete SVG-Szenen zeigen Gespräch, Plan, Gestaltung und fertigen Auftritt. Raster, Konstruktionskreise, Linienicons und handschriftliche Bildunterschriften greifen das vorhandene Erscheinungsbild auf. Eine gemeinsame Zeichenfläche verändert sich zwischen Angebotsdokument, Layout und Monitor. Umsetzung mit lokalem SVG/CSS/JavaScript, ohne Rive-Datei oder zusätzliche externe Laufzeit.

Desktop: links eine haftende Illustration, rechts vier kurze Schritte; normales Scrollen aktiviert den nächstliegenden Schritt. Anklicken wählt eine Szene bis zur nächsten bewussten Scrollbewegung. Mobil stehen eine kompakte Grafik und vier antippbare Schritte untereinander. Bei reduzierter Bewegung bleiben die Zustandswechsel statisch und manuell. Ohne JavaScript bleiben die erste Illustration, alle Ablauftexte und der Kontaktlink verfügbar. Der abschließende grüne CTA führt zum bestehenden Kontaktbereich.

## Interaktiver Werkzeugentwurf · 29. September 2026

Die bestehenden neun Tool-Icons werden mit JavaScript zu auswählbaren Buttons. Hover mit Maus, Tastaturfokus und Antippen wechseln eine gemeinsame SVG-Vorschau. Vier Szenen (Layout, Film, Bildidee, räumliche Form) erhalten je Werkzeug eigene Akzente und kurze Nutzenbeschreibungen. Bewegungen enden nach dem Zustandswechsel; keine Dauerschleife oder externe Laufzeit. Desktop: Text neben Grafik; mobil: Grafik vor Text unter dem dreispaltigen Iconraster. Reduced Motion deaktiviert Übergänge. Ohne JavaScript bleibt die ursprüngliche Werkzeugliste erhalten. Die ZBrush-Icon-Attribution ist unter die Vorschau verschoben. Der Entwurf liegt getrennt in tool-preview.js und tool-preview.css und kann durch Entfernen des Imports wieder ausgeblendet werden.

## Kompakte Projektbühne · 29. September 2026

Alle Portfolio-Rubriken zeigen ein hervorgehobenes Projekt mit Bild und Titel sowie eine horizontale Vorschauleiste darunter. Die Auswahl reagiert auf kurzes Maus-Hover, Klick, Tastaturfokus und Antippen. Das große Projekt öffnet weiterhin die bestehende Detailansicht. Alle Projekte sind unmittelbar in der horizontalen Leiste erreichbar; der bisherige Mehr-laden-Button entfällt in der erweiterten Ansicht. Eine Auswahl bleibt pro Rubrik gespeichert. Bei Überlauf erscheinen Navigationstasten; mobil ist die Leiste auch wischbar. Feste Bild- und mobile Metadatenhöhen verhindern Layoutsprünge. Die speziellen Webdesign-Zusatzmotive sind auf der Bühne ausgeblendet; Projekt-Detailinhalte bleiben vorhanden. Ohne JavaScript bleibt die ursprüngliche Projektliste erhalten.

## Timberline · 29. September 2026

Alle handschriftlichen Akzente auf Startseite und Webdesign-Seite verwenden Timberline Regular von Resistenza über die gemeinsame Variable --handwriting. Das Adobe-Webprojekt „Mario Goettling Portfolio – Timberline“ (jwl3omk) wurde im verbundenen Adobe-Konto erstellt und veröffentlicht. Es ersetzt in beiden Seiten das bisherige Felt-Tip-Roman-Webprojekt. Einbindung per Adobe-CSS; keine lokal kopierten Fontdateien.

## Alpine Script · 29. September 2026

Auf Nutzerwunsch ersetzt Alpine Script Regular die zuvor getestete Timberline für sämtliche handschriftlichen Texte. Adobe-Webprojekt: „Mario Goettling Portfolio – Alpine Script“, Kit rsz1gvi, CSS-Familie alpine-script. Startseite und Webdesign-Seite nutzen das neue Kit über die gemeinsame Variable --handwriting.

## Interaktive ZBrush-Skulpturen · 29. September 2026

In der Rubrik 3D öffnet „3D-Modelle erkunden“ ein separates, schlichtes Dialogfenster mit Zombonaut, Mother Maggot und Big Boi. Dunkler Hintergrund, neutrales Tonmaterial, zurückhaltendes grünes Kantenlicht. Maus-/Touch-Drehen, Pinch-/Mausrad-Zoom, Tastatursteuerung und Reset. Viewer und ausgewähltes Modell werden erst nach dem Öffnen geladen. Keine automatische Rotation; ereignisgesteuertes Zeichnen und vollständige WebGL-Freigabe beim Schließen. Webkopien in assets/models, Originaldateien bleiben unverändert.

## Salted · 29. September 2026

Salted Regular ersetzt Alpine Script auf Nutzerwunsch für alle Handschrift-Akzente einschließlich Signatur und Webdesign-Unterseite. Adobe-Webprojekt miv0rzs im verbundenen Konto veröffentlicht, CSS-Familie salted. Große Schriftgrößen bleiben erhalten; Hero-Position und mobile Umbrüche sind an die breitere Schrift angepasst. Die Bildunterschrift der Webdesign-Seite wächst auf 30–42 px.

## Photoshop-Fotomontage · 29. September 2026

Neues Projekt „WoW-Fotomontage“ am Anfang von Grafiken & Bildwelten. Final3 dient als Vorschau und initiale Detailansicht. Drei direkt wählbare Arbeitsstände (Ausgangsmotiv, Aufbau, Finale Montage) stehen über dem Bild. Bestehende Pfeiltasten-/Wischbedienung bleibt nutzbar. Texte nennen Kundenauftrag zum Geburtstag, einzeln eingefügte Charaktere, von Hand gemaltes Licht und Schatten und Photoshop ohne KI. WebP-Kopien in assets/artworks/wow-fotomontage, Originale unverändert. Zwischenstände laden erst bei Auswahl, keine neue Bibliothek.

## Gachó-Videoplayer · 29. September 2026

Das bisherige Standbild dient weiterhin als leichte Portfolio-Vorschau; ein grünes Play-Zeichen und „Video ansehen“ führen zum nativen MP4-Player. Projekttext und Bildunterschrift nennen Mario als Urheber von Dreh, Schnitt und Bearbeitung. Optimierte Full-HD-Webkopie unter assets/videos/gacho-clothing.mp4. Keine automatische Wiedergabe, preload none, Inline-Wiedergabe auf Mobilgeräten. Beim Schließen pausieren und Quelle freigeben; bei Ladefehler Link zur Datei. Keine neue Website-Abhängigkeit.

## Beast Buddy als Video · 29. September 2026

Beast Buddy unter Video öffnet jetzt einen YouTube-Player für UzMMJU6ljt4. Projekttext nennt die Diplomabschlussarbeit, selbst gebaute 3D-Assets sowie Szenenaufbau und Rendering in Unreal Engine. Lokales Vorschaubild; kein YouTube-Request vor dem ausdrücklichen Laden. Iframe wird beim Schließen entfernt, sodass die Wiedergabe stoppt. Direkter YouTube-Link bleibt verfügbar. Datenschutzseite beschreibt die Einbindung. Standard-YouTube-Host verwendet, da die nocookie-Variante in der normalen Vorschau „nicht verfügbar“ meldete.
