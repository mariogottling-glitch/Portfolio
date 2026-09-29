# Gachó Clothing

Quelle: `E:/Video-Schnitt/Gacho/Gacho_Vol2.mp4`, vom Nutzer zur Portfolio-Einbindung bereitgestellt. Laut Nutzer selbst gedreht, geschnitten und bearbeitet.

`gacho-clothing.mp4` ist die Webkopie: 1920 × 1080, 23,976 fps, rund 48 Sekunden, H.264 / AAC Stereo, MP4 Fast Start. Original 62.178.404 Bytes, Webkopie 23.205.468 Bytes. Keine Kürzung oder kreative Bearbeitung; Original unverändert.

Konvertiert mit FFmpeg 7.1 aus dem temporär installierten PyPI-Paket imageio-ffmpeg 0.6.0. Parameter: `-map 0:v:0 -map 0:a:0 -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p -threads 4 -c:a aac -b:a 160k -movflags +faststart -map_metadata -1`.

Die Website benötigt keine zusätzliche Player-Bibliothek. Der native Player verwendet `controls`, `playsinline` und `preload="none"`. Seine Quelle wird erst beim Öffnen gesetzt und beim Schließen freigegeben; der eigentliche Download beginnt beim Abspielen.
