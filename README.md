# Royal Match 👑

*Tinder für Adlige.* Eine Witz-App: durch sieben gekrönte Häupter wischen,
am Ende matcht **Mitch** mit **CJ** aus Baywatch.

Die Profile zeigen historische Personen (Ludwig II., Sisi, Wilhelm II., Bismarck,
Franz Joseph I., Victoria, Napoleon III.); die Texte sind Satire und frei erfunden.

## Starten

```bash
cd ~/webapps/royal-match
python3 -m http.server 9999
```

Dann `http://localhost:9999` öffnen (im LAN: `http://<beelink-ip>:9999`).
Kein Build, keine Dependencies — reines HTML/CSS/JS.

## Bedienung

- Karte mit der Maus/dem Finger nach **rechts** ziehen = standesgemäß, nach **links** = bürgerlich
- Alternativ die Buttons ✕ / ♥ oder die Pfeiltasten ← →
- ⚜ zeigt die geprüfte Ahnentafel des aktuellen Profils

Die Adelsprofile antworten grundsätzlich nicht — erst die letzte Karte (CJ) führt zum Match,
inklusive Chat und Terminvereinbarung für Mittwoch, 20 Uhr.

## Bilder

Alle Porträts sind gemeinfreie historische Fotografien bzw. frei lizenzierte Fotos von Wikimedia Commons,
Nachweise in [`assets/CREDITS.md`](assets/CREDITS.md).
