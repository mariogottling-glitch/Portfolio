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
