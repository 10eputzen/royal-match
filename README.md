# Royal Match 👑

*Tinder für Adlige.* Eine Witz-App: durch gekrönte Häupter wischen,
am Ende matchen **Mitch** und **CJ** aus Baywatch.

Beim Anmelden wählt man **Mitch** oder **CJ**. Das Deck zeigt danach ausschließlich
das jeweils andere Geschlecht, die letzte Karte ist immer das Gegenüber:

- als **Mitch**: Sisi, Victoria, Auguste Viktoria, Alexandra → Match mit CJ
- als **CJ**: Ludwig II., Wilhelm II., Bismarck, Franz Joseph I., Napoleon III. → Match mit Mitch

Die Profile zeigen historische Personen; die Texte sind Satire und frei erfunden.

## Starten

```bash
cd ~/webapps/royal-match
python3 -m http.server 9999
```

Dann `http://localhost:9999` öffnen (im LAN: `http://<beelink-ip>:9999`).
Öffentlich läuft die App auf <https://10eputzen.github.io/royal-match/> (GitHub Pages, Branch `master`).
Kein Build, keine Dependencies — reines HTML/CSS/JS.

## Bedienung

- Karte mit der Maus/dem Finger nach **rechts** ziehen = standesgemäß, nach **links** = bürgerlich
- Alternativ die Buttons ✕ / ♥ oder die Pfeiltasten ← →
- ⚜ zeigt die geprüfte Ahnentafel des aktuellen Profils

Die Adelsprofile antworten grundsätzlich nicht — erst die letzte Karte führt zum Match,
inklusive Chat und Terminvereinbarung für Mittwoch, 20 Uhr. Der Chat ist je nach
Anmeldung aus Mitchs oder CJs Sicht geschrieben.

## Bilder

Alle Porträts sind gemeinfreie historische Fotografien bzw. frei lizenzierte Fotos von Wikimedia Commons,
Nachweise in [`assets/CREDITS.md`](assets/CREDITS.md).
