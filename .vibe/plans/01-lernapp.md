---
# Read by the hooks, the review, the evals. Schema: @lernapps/tooling/guidance/plan-front-matter.v1.schema.json
# Keep all four keys.
# Archetype, null until chosen in Explore. Allowed values: explainer, interactive, quiz.
archetype: explainer
# Current phase. Allowed values: explore, plan, code, commit. Change the value line below, never this comment.
phase: code
# prePushFailures: written by the pre-push hook. Never change it.
prePushFailures: 0
# failedChecks: failed rules and runs, written by lernapps check and the hooks. Never change it.
failedChecks: { checks-pass: 6 }
---

# Plan: Bruchrechnung – Schritt für Schritt, first version

<!--
For you, the assistant.
1. Path: `.vibe/plans/01-<short name>.md`. Every later change gets its own plan from the increment template.
2. Read this plan before each step. One phase at a time, tasks in order.
3. Task done → tick `[x]` at once and move it to "Completed" of its phase. An unticked box counts as not done.
4. New task found → add it.
5. Each phase names its skills. Load a skill when its task comes, not before. Read it in full, from its file.
6. Checkpoint: stop, ask, wait for the creator's answer. A message sent before the question is no yes.
   Only a checkpoint waits. A phase's last box → set the next phase and go on in the same message.
7. At most 2 questions per message, one topic each. No questions inside drafts or lists.
8. Work on the branch `work`, locally: push nothing before Commit. Commit puts the app on GitHub and brings `work`
   into `main`.
9. Plan in the creator's language. Keep headings and front matter keys. Delete a comment once its part is filled.
10. Begin each reply to the creator with the phase in `phase:`, and at a checkpoint the word checkpoint:
    "**Plan · Checkpoint**", "**Code**". The creator always knows where you are.
-->

*Started 2026-11-02. Explore, Plan, Code, Commit.*

## Goal

Die Lernenden der Klasse 6 erschließen Bruchrechnung nach den hessischen Gymnasialvorgaben durch veränderbare Modelle und Übungen. Sie stellen Brüche dar, formen sie um, rechnen damit und lösen Sachaufgaben.

## Key decisions

- Archetyp: explainer mit interaktiven Übungskomponenten: Lehrplangestützter Lernweg mit Herleitungen und Übungen; Komponenten für veränderbare Bruchmodelle, die statische Blöcke nicht darstellen können.

- Die Vorlage regelt Layout und Navigation; eigene Komponenten nur für Lerninteraktionen.
- Konkretisierung für Plan (guess): 20 Seiten, je ein Verständnischeck und mindestens sechs wechselnde Aufgabenvarianten; vier wiederverwendbare Komponenten.
- Forschungsgrundlage am 2. November 2026 mit „leg los“ bestätigt; vollständiger Bauplan samt Lernmethode und Skizzen am 2. November 2026 mit „ja“ bestätigt.

## Notes

- Nutzerwunsch: interaktive Visualisierungen und Übungen mit unterschiedlichen Anteilsdarstellungen. Bestätigte Forschungsgrundlage; in Plan konkretisiert: verknüpfte Kreis-, Rechteck-, Zahlenstrahl- und Mengenmodelle; Lernmodus mit sichtbaren Werten und Aufgabenmodus ohne vorweggenommene Lösung. Gleich große Ganze, gleich große Teilstücke sowie Unterschied von Anteil, Bruchteil und Ganzem ausdrücklich zeigen.

- Orientierung: Hessisches Kultusministerium, Kerncurriculum Mathematik Sekundarstufe I – Gymnasium, Kapitel 7.3, S. 26 (Jahrgangsstufen 5/6): https://kultus.hessen.de/sites/kultus.hessen.de/files/2021-07/kerncurriculum_mathematik_gymnasium.pdf . PDF geöffnet und Inhaltsfeld Zahl und Operation gelesen.
- Ergänzende Jahrgangsorientierung: Lehrplan Mathematik, Gymnasialer Bildungsgang, Abschnitt 1.2, 6.1, S. 14–15: https://kultus.hessen.de/sites/kultus.hessen.de/files/2021-06/g9-mathematik.pdf . Kein schulinternes Curriculum vorhanden; genaue Verteilung kann schulabhängig sein.




### Umfang und Annahmen

- Inhalt: Bruchrechnung einschließlich zugehöriger Teilbarkeit und Dezimaldarstellung; keine vollständige Mathematik-App für Klasse 6. Sechs Kapitel mit 20 Lernseiten. Pro Lernseite ein Verständnischeck und eine wechselnde Übung mit mindestens sechs geprüften Aufgabenvarianten; insgesamt mindestens 140 Aufgabenstellungen, dazu die interaktiven Entdeckermodelle.
- Datenbereich (guess): nichtnegative Brüche; Modelle mit Nenner 1–12 und Wert 0–3, Mengen 1–48 mit ganzzahligem Ergebnis. Rechenaufgaben Zähler 0–36, Nenner 1–24, Ergebnisse bis 12; Division nur durch von null verschiedene Brüche. Kürzen/Erweitern Faktoren 2–6. Teilbarkeit natürliche Zahlen 1–200, Primzahlen bis 50, Regeln für 2, 3, 4, 5, 9, 10, 25 und 100. Umwandlungen zusätzlich Nenner 10, 100, 1000 sowie einfache periodische Fälle 1/3, 2/3, 1/6, 5/6, 1/9. Dezimalrechnung höchstens drei Nachkommastellen; Runden mit ausdrücklich benannter Stelle. Keine stillschweigende Begrenzung auf Stammbrüche.
- Enthalten: gemischte Zahlen, Brüche über 1, Grundrechenarten, einfache kombinierte Terme/Vorrangregeln, Rechengesetze, einfache Platzhaltergleichungen und Alltagsanwendungen mit Einheiten; Dezimalrechnung als Anschluss zur Bruchdarstellung. Einfache Prozentangaben als Hundertstel und relative Häufigkeit als Anwendung des Anteils.
- Ausgeschlossen (guess): negative Bruchrechnung, Doppelbrüche, euklidischer Algorithmus, algebraisches Rückumwandeln periodischer Dezimalzahlen; die letzten drei nennt der G9-Lehrplan fakultativ. Keine eigene Geometrie- oder Statistiklektion.
- Vorwissen (guess): Grundrechenarten mit natürlichen Zahlen und Einmaleins; Teilbarkeit wird aufgefrischt. Deutsch, übliche Fachbegriffe und Arbeitstitel sind Annahmen. Ruhige Gestaltung durch die Vorlage. Keine Videos oder fremden eingebetteten Applets. Eigene Texte und Zeichnungen, Code MIT und Inhalte CC BY 4.0 (guess).
- Modelle: Kreis, Rechteck/Streifen, Zahlenstrahl und Menge. Gleich große Teile; gleiches Bezugs-Ganzes beim Größenvergleich; Mengenmodell nur für passende Anzahlen. Entdecken und Prüfen getrennt, damit Aufgabenbilder keine Lösung verraten. Bedienung mit Tastatur und Tippen, nicht nur Ziehen. Die Vorlage regelt die Seitenanordnung; die Komponenten müssen innerhalb ihres Bereichs auch bei 360 px bedienbar sein.

### Kompetenzen und Lernhandlungen

Jede Zeile nennt Kompetenz, Herleitung und typische Fehlvorstellung; Quellenkennzeichen siehe unten.

| Kapitel | Kompetenz | Lernhandlung und Rückmeldung | Quelle |
|---|---|---|---|
| 1 Anteile darstellen | Ich kann Anteile als Bruch darstellen. | Kreis/Rechteck/Menge selbst markieren; Zähler/Nenner vertauscht und ungleich große Teile besprechen. | S1 |
| 1 Anteile darstellen | Ich kann Brüche auf dem Zahlenstrahl platzieren. | Einheit unterteilen und Position wählen; Teilstriche nicht mit Zwischenräumen verwechseln. | S1, S6 |
| 1 Anteile darstellen | Ich kann unechte Brüche in gemischte Zahlen umwandeln. | Ganze aus Streifenteilen zusammensetzen; Rest nicht als Dezimalziffer deuten. | S6 |
| 2 Teilbarkeit nutzen | Ich kann Teilbarkeitsregeln anwenden. | Endziffern/Quersumme prüfen und Zahl in gleich große Gruppen zerlegen; 1 ist keine Primzahl. | S7 |
| 2 Teilbarkeit nutzen | Ich kann gemeinsame Teiler und Vielfache bestimmen. | Teiler- und Vielfachenlisten aufbauen, ggT/kgV unterscheiden; Produkt nicht automatisch kleinster gemeinsamer Nenner. | S2, S7 |
| 3 Umformen und vergleichen | Ich kann Brüche erweitern. | Teile weiter unterteilen; Wert bleibt trotz größerer Zahlen gleich. | S2 |
| 3 Umformen und vergleichen | Ich kann Brüche vollständig kürzen. | Teile zu Gruppen bündeln; beide Zahlen durch denselben Faktor teilen, nicht subtrahieren. | S2 |
| 3 Umformen und vergleichen | Ich kann Brüche der Größe nach ordnen. | Gleiche Ganze/gemeinsame Unterteilung und Zahlenstrahl nutzen; größerer Nenner bedeutet nicht größerer Bruch. | S6 |
| 4 Anteil, Bruchteil, Ganzes | Ich kann den Bruchteil einer Größe berechnen. | Menge erst in Nennergruppen teilen, dann Zählergruppen auswählen; nicht nur durch Zähler teilen. | S3 |
| 4 Anteil, Bruchteil, Ganzes | Ich kann das Ganze aus einem Bruchteil berechnen. | Von ausgewählten Gruppen auf eine und dann alle Gruppen schließen; Bruchteil nicht mit Ganzem verwechseln. | S3 |
| 4 Anteil, Bruchteil, Ganzes | Ich kann den Anteil zweier Größen berechnen. | Gleiche Einheit und Verhältnis Teil/Ganzes herstellen; vertauschtes Verhältnis erklären. | S3 |
| 5 Rechnen mit Brüchen | Ich kann Brüche addieren und subtrahieren. | Streifen gleich unterteilen und Teile zusammenfügen/wegnehmen; Nenner nicht mitaddieren. | S4 |
| 5 Rechnen mit Brüchen | Ich kann Brüche multiplizieren. | Anteil eines Anteils mit überlagerten Rechteckunterteilungen bilden; Ergebnis muss nicht größer werden. | S4 |
| 5 Rechnen mit Brüchen | Ich kann Brüche dividieren. | Anzahl passender Bruchstücke in einer Strecke ermitteln; nur zweiten Bruch umkehren. | S4 |
| 5 Rechnen mit Brüchen | Ich kann zusammengesetzte Bruchterme berechnen. | Schritte mit Klammern/Vorrangregeln wählen, Rechengesetze durch Gruppierung begründen; nicht stur von links nach rechts. | S4, Lehrplan |
| 5 Rechnen mit Brüchen | Ich kann einfache Gleichungen mit Brüchen lösen. | Fehlenden Summanden/Faktor am Streifen ermitteln und durch Einsetzen prüfen; nicht Rechenzeichen beliebig tauschen. | S4, Lehrplan |
| 6 Dezimalzahlen und Anwendungen | Ich kann Brüche in Dezimalzahlen umwandeln. | Zehntel-/Hundertstelunterteilung oder Division verfolgen; Perioden nicht als endliche Gleichheit ausgeben. | S5 |
| 6 Dezimalzahlen und Anwendungen | Ich kann mit abbrechenden Dezimalzahlen rechnen. | Stellenwerte und Größen verwenden, vor dem Rechnen schätzen; Komma nicht beliebig verschieben. | Lehrplan; Zweitquelle vor Code ergänzen |
| 6 Dezimalzahlen und Anwendungen | Ich kann Dezimalzahlen auf eine vorgegebene Stelle runden. | Nachbarwerte am Zahlenstrahl untersuchen; Runden und Abschneiden unterscheiden. | Lehrplan; Zweitquelle vor Code ergänzen |
| 6 Dezimalzahlen und Anwendungen | Ich kann Sachaufgaben zu Anteilen lösen. | Gegebenes/Gesuchtes zuordnen, passenden Term berechnen, Einheit/Plausibilität prüfen; Prozent/relative Häufigkeit als Anteil einordnen. | S3, Lehrplan |

### Geprüfte Quellen und offene Prüfung

Primär: Hessisches Kultusministerium, Kerncurriculum Mathematik Sek I Gymnasium (2011), Kap. 7.3 S. 26; ergänzend Lehrplan Mathematik Gymnasium (2002), 6.1 S. 14–15. Beide PDFs geöffnet und relevante Abschnitte gelesen. Kerncurriculum bündelt 5/6; kein schulinternes Curriculum geprüft.

- S1: Serlo, „Einführung zu Brüchen“, https://de.serlo.org/mathe/19479/einfuehrung-zu-bruechen — im Web geöffnet; Darstellungen/gleich große Teile gelesen. Direkter lokaler Abruf lieferte 403, daher Webtext verwendet.
- S2: Serlo, „Brüche kürzen und erweitern“, https://de.serlo.org/mathe/1509/brueche-kuerzen-und-erweitern und „Kleinstes gemeinsames Vielfaches“, https://de.serlo.org/mathe/1497/kleinstes-gemeinsames-vielfaches — Artikel im Web geöffnet; Regeln und Beispiele gelesen.
- S3: ZUM-Unterrichten, „Bruchteil, Anteil und Ganzes bei der Bruchrechnung“, https://unterrichten.zum.de/wiki/Teil,_Anteil_und_Ganzes_bei_der_Bruchrechnung — geöffnet, Text lokal gelesen; keine Applets übernommen.
- S4: Serlo, „Rechnen mit Brüchen – Überblick“, https://de.serlo.org/mathe/50493/rechnen-mit-bruechen-ueberblick — im Web geöffnet; Rechenregeln als Überblick. Regeln für alle vier Grundrechenarten im Artikel gelesen.
- S5: TU Berlin, „1.2.2 Umwandeln von Brüchen“, https://vorkurs-mathematik.innocampus.tu-berlin.de/section/001-VBKM01/001-M01_Bruchrechnung/001-VBKM01_USBrueche — geöffnet, deutschen Text lokal gelesen; Formeln im Textabruf teilweise nicht extrahiert, diese nicht als geprüft ausgeben.
- S6: Wikipedia, „Bruchrechnung“, https://de.wikipedia.org/wiki/Bruchrechnung — Artikel und Abschnitte zu gleichwertigen Brüchen sowie Bruchdarstellungen gelesen; gemischte Zahlen zusätzlich im Serlo-Kurs S1 geprüft.
- S7: Zweitquelle für Teilbarkeitsregeln noch offen: Aufgabenfuchs konnte im Web nicht geladen werden. Amtliche Vorgaben sind gelesen; passende Zweitquelle vor Code ergänzen.
- Nur Fakten als Grundlage; keine fremden Texte, Aufgaben oder Grafiken kopieren. Serlo nennt CC BY-SA 4.0; eigene Formulierungen und eigene Beispiele erstellen. Keine Videos geprüft oder vorgesehen.
- Katalogschema vollständig über curl gelesen; Katalog-llms.txt gelesen. Eintragsentwurf enthält nur bekannte Daten, Veröffentlichung/Urheber/Commit/fitness werden erst nach Umsetzung ergänzt; er ist deshalb noch kein vollständiger gültiger Eintrag.

### Korrektur aus der frühen Vorschau

- Nutzerwunsch: einladender Einstieg „Was ist überhaupt ein Bruch?“, Beinbruch/Bruchteil und kurzes Pizza-Beispiel.
- Nutzerwunsch: In jeder Übungsaufgabe genau eine Darstellung. Die freie Entdeckung darf mehrere Ansichten vergleichen. BruchModelle zeigt pro Aufgabe Kreis, Streifen, Menge oder Zahlenstrahl, nicht alle gleichzeitig.

- Zweite Vorschaukorrektur: Lerninhalte nicht vorwegnehmen. `darstellen` nur Ganzes, gleich große Teile, Zähler und Nenner; `zahlenstrahl` nur Positionen; `gemischte-zahlen` nur Ganze/Rest. Gleichwertigkeit erst in `umformen`, Rechenarten erst in `rechnen`. Jede Aufgabe muss die eigene Seitenkompetenz üben.

- Verbindliche Übungsregel aus Browserfeedback: Vor der Prüfung weder markierte Anzahl als Ergebnisbruch anzeigen noch ein Ergebnisfeld durch Markieren, Regler oder Stückzähler ausfüllen. Modelle zeigen Gegebenes und eigene Markierungen. Zahlenstrahl-Seite ausschließlich 0 bis 1; unechte Brüche erst auf `gemischte-zahlen`.


### Didaktischer Aufbau nach Browserfeedback

- Alle 20 Seiten beginnen mit einem alltagsnahen Einstieg und dem Begriff der Seite. Reihenfolge der Abschnitts-IDs jetzt `regel`, `entdecken`, `beispiel`, `ueben`; Inhaltlich passende Einstiegstitel, anschließend „Ausprobieren“ nur bei Interaktion oder sonst „Anschaulich erklärt“, danach „Am Beispiel nachvollziehen“ und „Üben“.
- `teilbarkeit/regeln`: Faktor und Produkt anhand von Bauklotz-Reihen, dann `FaktorEntdecken` zum selbstständigen Zerlegen einer Zahl von 2 bis 48; erst danach Primzahl und Primfaktorzerlegung definieren, zum Schluss Teilbarkeitsregeln als Abkürzungen. Jede Aufteilung bewahrt das Produkt; 1 und unpassende Faktoren sind ausgeschlossen. Eigene Tests prüfen genau das und das Ende bei Primzahlen.
- Neue Kompetenz: Ich kann eine zusammengesetzte Zahl in Primfaktoren zerlegen. Übung `primfaktoren` mit sechs Fällen aus `src/data/primfaktoren.yaml`, zusätzlicher Verständnischeck `verstehen` und Gruppenübung `aufgaben`.
- Quelle ergänzt und vollständig im Web gelesen: Serlo, „Primfaktorzerlegung“, https://de.serlo.org/mathe/1779/primfaktorzerlegung (Beispiele und Vorgehensweise).
- Die offenen Zweitquellen sind ergänzt: Wikipedia „Teilbarkeit“ (Endstellen-/Quersummenregeln und Primzahlbegriff), ARD alpha „Addieren – so geht’s“, https://www.ardalpha.de/lernen/grips/faecher/grips-mathe/07-dezimalbrueche-addieren-nachlesen108.html (Stellenwerte beim Addieren/Subtrahieren), Serlo „Aufgaben zur Multiplikation und Division von Dezimalzahlen“, https://de.serlo.org/mathe/50460/aufgaben-zur-multiplikation-und-division-von-dezimalzahlen (geöffnete Lösungen einschließlich Kommaregeln), ARD alpha „Dezimalbrüche runden“ (Regeln und Beispiele). Keine fremden Sätze/Abbildungen übernommen.
- Standardübungen haben jetzt einen konkreten Lösungsweg mit den jeweiligen Zahlen und einer fachlichen Begründung; keine Sätze wie „Angaben einsetzen“ ohne Erklärung.
- Übungsmodelle schreiben niemals einen aus Markierungen berechneten Bruch in das Antwortfeld. Bei BruchModelle erscheint die symbolische Darstellung erst nach der Prüfung. Entdeckermodelle sind ausdrücklich freie Erkundung und dürfen Zusammenhänge anzeigen.

- Die interaktiven Modelle von Umformen, Grundaufgaben und Rechenarten stehen nach der Begriffsklärung unter „Ausprobieren“. Danach folgen die Herleitung am Beispiel und eigene Standardübungen unter „Üben“. Die stabilen Übungs-IDs bleiben erhalten.


### Verifikation des lokalen Stands

- `vp check --fix`, `vue-tsc --noEmit`, acht Testdateien mit zehn Tests und der Build bestanden. Generierte Aufgaben werden beim Build über feste Seeds geprüft; Komponenten zusätzlich mit alternativen richtigen Antworten.
- 20 Lernseiten bei 360 und 1280 px geöffnet und Bildschirmfotos gespeichert; keine Überbreite und richtige Reihenfolge der Hauptabschnitte. Zahlenstrahl ohne Antwortvorschau und mit erfolgreicher Prüfung getestet; konkreten Lösungsweg geprüft. Faktorzerlegung von 12 bis 3 · 2 · 2 durchgespielt; alternative Antwort 4/18 für 2/9 erfolgreich geprüft.
- `lernapps check` bleibt offen: zwei Browser-Schritte scheitern beim Start von Chromium an der macOS-Sandbox (MachPortRendezvousServer: Permission denied). Keine Prüfung abgeschaltet und keine Schutzvorkehrung umgangen. Der verfügbare Browser wurde für die oben genannten manuellen Prüfungen verwendet; das ersetzt keine vollständige axe-/End-to-end-Prüfung.
- Phase bleibt deshalb Code. Veröffentlichung und Selbsteinschätzung aus Commit stehen noch aus.

- Browserkorrektur Erweitern: Kuchenbeispiel konsequent mit `KuchenTeilen` als Kreis mit drei ursprünglichen Stücken; alle Stücke gleichmäßig unterteilen. Zähler und Nenner wachsen bei unverändertem Flächenanteil. Keine Prozent-/Balkengrafik für diese Herleitung. Die freie Entdeckung zeigt 2/3 und die umgeschriebene Form; Aufgaben haben getrennte eigene Eingaben ohne Ergebnisvorschau.

- Browserkorrektur Umformen: unverbundene Markierreihe samt Unterteilungsregler entfernt. Aufgaben nutzen gegebenes Modell und direkte Bruch-Eingabe; konkrete Rückmeldung unterscheidet Wertänderung, ungültige Eingabe, noch mögliche Kürzung und falschen Erweiterungsfaktor. Regressionstest ergänzt.

- Konkrete Aufgabenwerte statt versteckter Erzeugungsrechnungen: gemeinsame Datensätze in `src/data/grundzahlen.yaml`. Kürzungsaufgaben zeigen z. B. 6/48 statt 6/(8 · 6); Gruppenmengen und Rundungszahlen sind ebenfalls bereits ausgerechnet. Rechenterme bleiben nur dort stehen, wo gerade das Berechnen solcher Terme geübt wird.


- Browserkorrektur Plus/Minus: Die lose Markierreihe bei Plus/Minus wird durch wiederholte, gleich breite Streifen unter dem Regler ersetzt. Die gewählte Unterteilung „Teile pro Ganzem“ liegt dort als gestricheltes Raster über beiden gegebenen Anteilen; darüber stehen die ursprünglichen Streifen zum Vergleich. Ursprüngliche Grenzen und Flächenanteile bleiben sichtbar; kein gemeinsamer Nenner und kein Ergebnis werden automatisch gewählt.


- Bruch-Eingabefelder zeigen bei gültiger Schreibweise mit / eine MathML-Vorschau „So schreibst du das“. Sie übernimmt den eigenen Zähler und Nenner unverändert, ohne Kürzung, Rechnung oder Korrektheitsanzeige. Für leere, unvollständige, ungültige und reine natürliche Zahleneingaben entfällt die Vorschau. Gemeinsame Hilfe `BruchEingabe` in Umformen, Grundaufgaben und Rechenarten.


- Multiplikationsmodell: Beide Faktoren sind als Randstreifen desselben Rechtecks dargestellt – z von n Spalten oben, b von d Zeilen links, jeweils beschriftet und zusätzlich zur Farbe markiert. Die Schnittmenge markiert das Kind selbst; keine vorausgefüllte Ergebnisfläche und kein berechneter Ergebnisbruch.


- Verbindliche Methodik nach Browserfeedback und simuliertem Kinder-Audit: Jede Darstellung erklärt das Ganze, ihre Teile/Zeichen, die Bedienhandlung und die Beobachtung. Gleichbleibende Farben und zusätzliche Muster verbinden die Faktoren beim Produkt mit Breite und Höhe; Zähler nennt nur eigene Markierungen, nicht die Musterlösung. Textbeschreibungen stehen im nojs-Block und bei Aufgaben zusätzlich im exakten describe-Vertrag; freie Modelle behalten nojs als aufklappbare Beschreibung.
- Abschnittstitel folgen der tatsächlichen Handlung: „Ausprobieren“ ausschließlich mit bedienbarer Interaktion, sonst „Anschaulich erklärt“. Einstiege bekommen inhaltliche Titel; überflüssige Definitionen werden nicht erzwungen. Stabile Anker-IDs bleiben bestehen.

- Simulierter Kinder-Audit mit playwright-cli am unveränderten Commit 791940f: 6 Kapitelübersichten, 20 Lernseiten und alle Bedienungsformen tatsächlich besucht. Befunde in outputs/kinderperspektive-pruefung.md (außerhalb des App-Checkout). Danach fehlende/falsche Bedienelement-Texte korrigiert, Methoden eingeführt und statische Darstellungen passend benannt. Browserkontrolle aller 20 Seiten mit/ohne JavaScript, bei 360 px, sowie Flächenzähler bestanden; 13 interaktive und 7 anschauliche Abschnitte. Keine echte Kinderstudie oder Screenreader-Prüfung.

## Explore

<!--
- Find out what the app teaches, for whom, how much and how it looks. All content questions belong here; Plan only
  maps the answers onto the archetype.
- Ask. Write no code, run no `create`.
- An answer counts only in the creator's words under "Answers". Never tick a topic you assumed.
- Skills: `lernapps-app`, `lernapps-exercise-patterns`, `lernapps-<archetype>-design`, `lernapps-content-research`.
-->

### Tasks

### Answers

<!-- The interview: per topic the creator's answer, in their words. Keep the topics. -->

- Goal: „Bruchrechnung“, „entsprechend des Gymnasium-Lehrplans“.
- Learners: „6. Klasse Hessen“, „Gymnasium. Sollte aber egal sein“. Fach Mathematik; schulformübergreifend zugänglich halten. Vorwissen: Grundrechenarten mit natürlichen Zahlen und Einmaleins (guess).
- Model and focus: „Ich hätte gerne interaktive Visualisierungen und Übungen. Anteile lassen sich ja auf unterschiedliche Art visualisieren“. Kurze Erklärungen mit Übungen zuvor mit „das passt so“ angenommen. Kein Katalogvorbild benannt.
- Hurdles: „Nichts spezielles“. Typische Fehler der Bruchrechnung berücksichtigen.
- Content: Auf die Frage nach vollständiger Erstellung durch den Assistenten aus geprüften Quellen: „passt“. Kein eigenes Unterrichtsmaterial vorgegeben.
- Amount: Alle sechs vorgeschlagenen Themenbereiche, jeweils mit kurzen Erklärungen, vorgerechneten Beispielen und mehreren wechselnden Übungsaufgaben; bestätigt mit „passt“.
- Languages: Deutsch (guess); als Annahme im Rechercheentwurf gezeigt und am Forschungscheckpoint mit „leg los“ akzeptiert.
- Look and feel: Ruhiger Lernweg mit automatischem Dunkelmodus gemäß vorgestellter explainer-Vorlage; auf den Vorschlag „das passt so“.
- Terms: Übliche Fachbegriffe Zähler, Nenner, Anteil, Bruchteil, Ganzes (guess); keine besonderen Begriffe vorgegeben; am Forschungscheckpoint als Annahme gezeigt und mit „leg los“ akzeptiert. Titel „Bruchrechnung – Schritt für Schritt“ (guess).

### Entry draft

<!-- YAML valid against the entry schema, with its property names. Only known values, never invented. -->

```yaml
title: Bruchrechnung – Schritt für Schritt
subject: Mathematik
grades: [6]
summary: >-
  Lernende erkunden Brüche mit interaktiven Kreis-, Streifen-, Mengen- und Zahlenstrahlmodellen.
  Sie üben das Umformen und Rechnen mit Brüchen und lösen Sachaufgaben mit erklärenden Rückmeldungen.
keywords: [Bruchrechnung, Brüche, Kürzen, Erweitern, Bruchstreifen, Zahlenstrahl, Anteile, Dezimalzahlen]
```

### Completed

- [x] Forschungscheckpoint am 2. November 2026: Nutzer antwortete „leg los“ auf die vorgestellte Grundlage und Suchbegriffe. Offene Zweitquellen transparent benannt; vor dem Schreiben des betreffenden Inhalts ergänzen.

- [x] Interview: ask the other topics of "Answers" in order. Skip a topic only when an earlier answer covers it; note
      which. No answer → ask once more; still none → write your assumption with "(guess)". Done when every topic
      has an answer or a guess.
- [x] Load skill `lernapps-content-research`. Research as it says. Under "Notes": curriculum orientation,
      competencies by chapter as "Ich kann …", verified sources. No competencies → not done.
- [x] Fetch https://lernapps.net/apps/schemas/entry.v1.schema.json and read each property's description. Ask what
      helps teachers and parents find the app. Fill "Entry draft". Search words: one or two words each, as people
      type them.
- [x] **Checkpoint:** research. Show in plain words: curriculum orientation, competencies by chapter, didactic
      approach, scope, every "(guess)", sources and how you checked them, what is unchecked, archetype and reason.
      Stop and wait. Changes → change, ask again.
- [x] Set `phase: plan`: change the value line (`grep '^phase:'` prints `phase: plan`).

- [x] Under "Notes", one line per competency: how learners get there (derive, not only read off; e.g. a tree diagram
      shows how a probability comes about), which misconception the feedback catches.
- [x] Under "Notes", the scope: what is in, what is out and why, the data range (e.g. "all main-group elements",
      never a silent "1–20"), the languages.

- [x] Interview: ask the topics "Goal" and "Learners" of "Answers".
- [x] Load skill `lernapps-exercise-patterns` and read the patterns of the subject: how will learners practise what
      the goal names? The kind of practice points to the archetype, as the skill says.
- [x] Choose the archetype as skill `lernapps-app` says, from the kind of practice: read the README of each
      archetype in question, tell the creator what the chosen one can and cannot do. Write it and its reason under
      "Key decisions". Set `archetype`.
- [x] Install the archetype's skills: `npx --no -- lernapps skills --archetype <archetype>`. Load skill
      `lernapps-<archetype>-design`.

- [x] Die Skills wurden mit `init lernapp` in `.agents/skills/` installiert.
- [x] Skill `lernapps-app` vollständig gelesen; App-Prinzip und Veröffentlichung erklärt.

## Plan

<!--
- Map the confirmed content onto the archetype: structure, screens or pages, exercise patterns, data files,
  components.
- No new content questions. A content gap → back to Explore; say so.
- Confirmable in one read. After the yes, work on your own: at most 3 creator turns until the listing.
- Skills: `lernapps-<archetype>-design` and `lernapps-exercise-patterns`, both loaded in Explore.
-->

### Tasks

- [x] **Checkpoint:** Vollständigen Plan, Lernmethode und gezeigte Skizzen mit „ja“ bestätigt (2. November 2026).
- [x] `phase: code` gesetzt.

### Content method


### Seitenstruktur und Zuordnung

Die Vorlage erzeugt Start, Kapitelübersichten, Navigation, Glossar und Tutor-Seiten. Jede Lernseite folgt **passender Einstieg → Ausprobieren oder Anschaulich erklärt → Am Beispiel nachvollziehen → Üben**, mit festen Abschnitts-IDs `entdecken`, `regel`, `beispiel`, `ueben`. Kapitel und Seiten werden in YAML unter `src/` angelegt; die konkrete Dateibenennung folgt nach `create` dem installierten Schema. Kein eigenes Seitenlayout.

| Kapitel / Pfad | Lernseiten | Skizze |
|---|---|---|
| `anteile` | `darstellen`, `zahlenstrahl`, `gemischte-zahlen` | kapitel-1.svg, interaktionen.svg |
| `teilbarkeit` | `regeln`, `teiler-vielfache` | kapitel-2.svg |
| `umformen` | `erweitern`, `kuerzen`, `vergleichen` | kapitel-3.svg, interaktionen.svg |
| `grundaufgaben` | `bruchteil`, `ganzes`, `anteil` | kapitel-4.svg |
| `rechnen` | `plus-minus`, `multiplizieren`, `dividieren`, `terme`, `gleichungen` | kapitel-5.svg, interaktionen.svg |
| `anwendungen` | `dezimaldarstellung`, `dezimalrechnen`, `runden`, `sachaufgaben` | kapitel-6.svg |

Alle Skizzen liegen in `.vibe/sketches/`. `ablauf-1.svg` zeigt die Startnavigation, `ablauf-2.svg` den gemeinsamen Seiten- und Übungsablauf. Zustände: unberührt → eigene Eingabe → Prüfung → Erfolg mit Begründung oder Fehler mit Hinweis → erneuter Versuch/neue Aufgabe. Ein neuer Versuch behält die Aufgabe, eine neue Aufgabe löscht Antwort und Feedback. Keine Zeitschranke, keine Bestenliste. Kleine Kapitel-Selbsteinschätzungen werden zum Schluss aus vorhandenen Übungen zusammengestellt, ohne ein zweites Aufgabensystem.

### Muster und Daten

Jede Kompetenz der Tabelle unter Notes entspricht genau der gleichnamigen Seite bzw. im Fall Addieren/Subtrahieren einer gemeinsamen Seite. Dieselben Zahlen und Aufgabenvorgaben werden in Darstellung und Prüfung verwendet, keine doppelt gepflegten Musterlösungen. Gemeinsame Quellen und Zahlenbereiche stehen in `src/data/quellen.yaml` und `src/data/aufgabenbereiche.yaml`; Sachkontexte in `src/data/sachkontexte.yaml`. Dateien werden nur verwendet, wo das installierte Schema Datenreferenzen erlaubt; andernfalls hält ein gemeinsames Logikmodul die Aufgabenvorgaben zentral, ohne Änderung der Vorlage.

| Kompetenzen / Seite | Muster, Beispiel und Variation | Prüfung und typische Fehler |
|---|---|---|
| Anteile darstellen | Modell markieren; z. B. 3/4 in Kreis, Streifen, Menge. Zähler/Nenner und Bezugsmenge variieren. | Jede passende Markierung gilt; 9 von 12 ebenso 3/4. Vertauschen, ungleich große Teile erklären. |
| Zahlenstrahl | Position wählen; z. B. 5/4 zwischen 1 und 2. Nenner und Anzahl Ganzer variieren. | Exakte rationale Position; Tickzahl nicht Intervallzahl. Ohne Ziehen per Tasten/Eingabefeld möglich. |
| Gemischte Zahlen | Ganze bündeln; z. B. 7/3 → 2 1/3. | Ganze plus Rest prüfen; äquivalente Brüche akzeptieren, wenn keine bestimmte Schreibweise verlangt. |
| Teilbarkeit, ggT/kgV | Zahlentscheidung und berechnete Zahl; z. B. ggT(12,18). Listen/Gruppe als Herleitung. | ggT=6, kgV=36; 1 keine Primzahl, Teiler und Vielfache unterscheiden. |
| Erweitern/Kürzen | Teile verfeinern/bündeln; z. B. 2/3 → 4/6. Faktor bzw. fehlender Wert wechselt. | Wertgleichheit mit ganzzahligem Kreuzprodukt; explizit verlangten Nenner/Faktor beachten. 4/6 bei „gleichwertig“ richtig, bei „vollständig gekürzt“ weitere Hilfe. |
| Vergleichen | Brüche ordnen bzw. Relation wählen, z. B. 2/3 < 3/4. Gleich große Ganze/gemeinsame Teilung zeigen. | Gleichwertige Brüche nicht in eine willkürliche Reihenfolge zwingen. Falsche Nennerstrategie mit Modell erklären. |
| Drei Grundaufgaben | Gegebenes/Gesuchtes zuordnen, dann Zahl/Bruch eingeben, z. B. 3/4 von 12. | Bruchteil=9, Ganzes=12, Anteil=3/4 je nach Aufgabe; Teil/Ganzes nicht vertauschen. Personen/Gegenstände nur ganzzahlig. |
| Plus/Minus | Streifen gleich unterteilen, zusammenfügen/wegnehmen; z. B. 1/2 + 1/3. | 5/6; 2/5 als Nenneraddition diagnostizieren. Bei Subtraktion kein negatives Ergebnis im bestätigten Bereich. |
| Multiplikation | Anteil eines Anteils im Rechteck; z. B. 2/3 von 3/4. | 1/2 und 6/12 gelten bei freier Ergebnisangabe. Addieren statt Multiplizieren und „wird immer größer“ erklären. |
| Division | Bruchstücke in eine Strecke legen; z. B. 3/4 : 1/8. | 6 Stücke; erster statt zweiter Kehrbruch oder bloße Multiplikation erklären. Divisor nie null. |
| Terme und Gleichungen | Rechenschritt wählen / fehlende Zahl berechnen, z. B. x + 1/4 = 3/4. | x=1/2; Einsetzen prüft. Vorrangregeln und Rechengesetze nicht mit symbolischer Algebra überfrachten. |
| Dezimaldarstellung | Stellenwertdarstellung zuordnen/umwandeln, z. B. 3/4 = 0,75; 1/3 periodisch. | Dezimalkomma; periodische Antwort nicht mit endlichem Näherungswert gleichsetzen. |
| Dezimalrechnung/Runden | Berechnete Zahl; z. B. 0,75 + 0,5; 0,746 auf Hundertstel. | 1,25 bzw. 0,75; Dezimalkomma und Abschneiden diagnostizieren. Keine implizite Rundung. |
| Sachaufgaben | Gesuchte Größe bestimmen, Rechnung und Ergebnis mit benannter Einheit; z. B. 3/4 Liter auf zwei gleiche Gefäße. | 3/8 Liter pro Gefäß; Einheiten/Plausibilität, einfache Prozentangaben und relative Häufigkeit als Anteil. |

### Interaktive Komponenten

1. **BruchModelle**: synchronisierte Kreis-, Streifen-, Zahlenstrahl- und Mengenansicht; Modi Entdecken, Markieren, Platzieren, Ganze bündeln. Ändert den Modellzustand statt nur ein fertiges Bild zu zeigen. Prüft gewählten Anteil/Position, nicht die Lage einzelner gleichwertiger Teilstücke. Grenzen der Notes gelten; kein freies Geometrie-Zeichnen.
2. **BruchUmformen**: verändert Unterteilungen beim Kürzen/Erweitern; gemeinsame Unterteilung für Vergleiche. Prüft Faktor, Wertgleichheit und ausdrücklich geforderte Normalform. Beliebige Additionen zu Zähler/Nenner sind keine Umformung. Kein freier Formeleditor.
3. **AnteilGanzes**: Gruppen bilden und fehlende Größe bestimmen; Beschriftungen für Anteil, Bruchteil, Ganzes. Nur Gegebenes und eigener Bearbeitungsstand sichtbar, gesuchte Größe nicht vorbefüllt. Prüft Zahlenverhältnis und ggf. geforderte Einheit; keine automatische Interpretation freier Sachtexte.
4. **BruchRechnen**: vier Modi für Plus/Minus (Streifen), Mal (Rechteck) und Geteilt (Streckenstücke), mit schrittweise freizugebender Herleitung. Modellprüfungen über exakte Brucharithmetik, nicht über Pixel. Kein allgemeines Computeralgebrasystem.

Warum eigene Komponenten: Die eingebauten statischen Figuren und Standardfragen erlauben keine veränderbare Unterteilung, verknüpfte Ansichten, Auswahl von Flächenteilen oder das Legen von Bruchstücken. Statische Erklärungen, Tabellen, Zahleneingaben, Auswahl- und Zuordnungsfragen bleiben Standardblöcke. Jede eigene Komponente bekommt ein Logikmodul, sinnvolle Tests mit alternativen richtigen Antworten und typischen Fehlern, Tutor-Deklaration und eine statische Alternative mit beschriftetem Bild und Lösungsweg. Zusätzlich hat jede Lernseite einen Standard- oder generierten Übungsblock, da Komponenten allein die Pflichtübung nicht ersetzen.

### Einheitliche Rückmeldung und Erweiterung

- Vor „Prüfen“ keine Lösung oder Vorschau aus dem Zielwert. Explizit gegebene Modelle dürfen Ausgangswerte zeigen; Erfolgsdarstellungen erst danach.
- Richtige Antwort: kurze Begründung. Falsche Antwort: konkreter Denkfehler und nächster Schritt; Lösung erst auf eigenen Wunsch. Unvollständige/ungültige Eingabe: erklären, was fehlt, keine mathematische Fehlbewertung.
- Jede berechnete Übung: mindestens zwei typische Fehler und ein Hinweis. Korrektheitsprüfung als rationale Zahlen; keine Fließkomma-Gleichheit. Nur bei expliziten Rundungsaufgaben vereinbarte Dezimalstelle prüfen.
- Eigene SVG-Modelle mit Textalternativen, gleicher Bezugsgröße, deutlichen Grenzen und Markierungen zusätzlich zur Farbe. Mengenmodell nur mit teilbarer Bezugsmenge; Über-eins-Fälle mit mehreren Ganzen.
- Spätere Kapitel verwenden dieselbe Seitenstruktur und dokumentierte Aufgabenvorgaben; neue Kompetenz samt Quelle, Modellmuster, Zahlenbereich, akzeptierten Antworten und Fehlern zuerst im Content-Guide ergänzen.
- Tutor: zunächst Tipp und Herleitung, dann nächsten Schritt erfragen; vollständige Lösung erst auf Wunsch. Keine zusätzlichen externen Dienste oder Speicherung außerhalb der Vorlage.


### Completed

- [x] `grep '^phase:'` prints `phase: plan`; else set it.
- [x] Map the content as skill `lernapps-<archetype>-design` says; reread it if it is no longer in view.
- [x] Choose a pattern per competency as skill `lernapps-exercise-patterns` says (loaded in Explore; reread it if it
      is no longer in view). Write "Content method".
- [x] Write the Code tasks under "Code": pages or screens, their content, what each shows. Each ends in a commit.
      After the first task that shows real content: the task "Show the creator a first look (`early-preview`)".
- [x] Each screen, component or interactive exercise: a sketch (static SVG or image, or the steps with what
      learners see after each). Words alone are not enough. Keep sketch files in `.vibe/sketches/`, which `create` leaves alone.
- [x] Show the creator, short: goal, competencies by chapter, entry draft, tasks, sketches; the content method in
      plain words (what learners see and do, what it cannot do). At most 2 questions.

## Code

<!--
- Build the app from the archetype and the confirmed plan, locally on `work`. Work on your own.
- Commit after each task; the hooks check. A check fails → skill `lernapps-cli`. Fix from the message; never
  bypass a hook.
- Undecidable → choose, mark "(guess)" under "Key decisions", go on.
- Creator asks for a change → first say your reading in one sentence ("Ich nehme alle 44 Hauptgruppenelemente
  auf."); never narrow it silently. Content change → update "Notes" too.
- Skills: `lernapps-cli`, `lernapps-<archetype>`, `lernapps-content-questions`, and the app's content guide
  `app-content`.
-->

### Tasks

- [x] `phase: code` ist gesetzt.
- [ ] Show the creator a first look (`early-preview`): erste echte Lernseite mit interaktiven Modellen auf Desktop und bei 360 px zeigen; anschließend weiterarbeiten.
- [ ] `npx --no -- lernapps check` passes.
- [ ] Look at a screenshot of every screen and state (start, each mode, pause, end), desktop and 360 px. Compare
      each with the confirmed sketches; each figure in its own image (`npx --no -- lernapps screenshots --desktop`).
- [ ] Every box of Explore, Plan and Code ticked.
- [ ] Set `phase: commit`: change the value line (`grep '^phase:'` prints `phase: commit`).
      No checkpoint here: set it before you ask or report anything, then start Commit in the same message.

### Completed

- [x] Alle 20 Seiten: je ein Verständnischeck und ein variierter Übungsblock mit mindestens sechs Varianten; gemeinsame Begriffe, Quellen und Tutorhinweise konsistent. Mindestens 140 Aufgabenstellungen insgesamt prüfen; Guide aktualisieren. Commit.
- [x] The content guide matches what was built (`app-content-matches`).

- [x] Kapitel 6: vier Seiten zu Umwandlungen, Dezimalrechnung, Runden und Sachaufgaben; Prozent/relative Häufigkeit als Anteilsanwendungen. Commit.

- [x] Kapitel 5: fünf Seiten und BruchRechnen in vier Rechenmodi; Terme, Gesetze und einfache Gleichungen; Fehlerrückmeldungen und Komponentenprüfungen. Commit.

- [x] Kapitel 4: drei Seiten und AnteilGanzes mit den drei Suchrichtungen, Mengenmodellen und Sachaufgaben. Commit.

- [x] Kapitel 3: drei Seiten und BruchUmformen mit Unterteilen/Bündeln, Vergleich und passender Antwortprüfung. Commit.

- [x] Offene Zweitquellen für Teilbarkeitsregeln, Dezimalrechnung und Runden vollständig öffnen und lesen; Notes/Content-Guide vor dem jeweiligen Inhalt ergänzen. Commit.
- [x] Kapitel 2: zwei Seiten zu Teilbarkeit und ggT/kgV mit Gruppen-/Listenherleitung, Verständnischecks und wechselnden Zahlaufgaben. Commit.

- [x] Load skill `lernapps-cli`. Create the app in this plan's folder as it says. `create` keeps this plan. Never
      write the app by hand.
- [x] Fill the content guide `.agents/skills/app-content/SKILL.md` from "Notes" and "Content method"
      (`app-content-guide`). `grep -c "FILL IN" .agents/skills/app-content/SKILL.md` prints 0. Commit it before
      any content.
- [x] Load skill `lernapps-<archetype>` and the content guide. Questions with options and feedback: also skill
      `lernapps-content-questions`.
- [x] Kapitel 1: drei Seiten und BruchModelle mit Kreis, Streifen, Menge, Zahlenstrahl; Brüche über 1, Textalternativen und Übungen. Komponentenlogik und Prüfungen. Commit.

## Commit

<!--
- Put the app on GitHub, publish it with the creator's yes, then list it. A push to `main` publishes.
- Open the pull requests (to `main`, to the catalog) without asking: they publish nothing; their preview and result
  are what the creator decides on.
- Skills: `lernapps-explainer-self-assessment` (an explainer), `lernapps-github`, `lernapps-commit`,
  `lernapps-listing`.
-->

### Tasks

- [ ] `grep '^phase:'` prints `phase: commit`; else set it.
- [ ] An explainer: load skill `lernapps-explainer-self-assessment` (missing → `npx --no -- lernapps skills --archetype
      explainer`). Add the self-assessment as it says, or
      write under "Key decisions" why the app has none. Commit; the hooks check.
- [ ] Load skill `lernapps-github`. Repo and Pages as it says: ask the repo name and every click only the creator can
      make in one message.
- [ ] Push `work`, open the preview pull request, see its checks to green as the skill says.
- [ ] **Checkpoint:** publish. Show what the app does and the preview link from the comment "Vorschau der App"; ask
      whether it may go online; put any open click into the same question. Wait for the yes.
- [ ] Load skill `lernapps-commit`. Publish as skill `lernapps-github` says: `work` into `main` as one squash commit
      with the message from this plan, the run of `Pages` watched to the end.
- [ ] Open the address the job `deploy` printed; confirm the app shows. Use that address, never a derived one.
- [ ] Load skill `lernapps-listing`. Complete the entry draft (e.g. the address).
- [ ] Fill the retrospective.
- [ ] Commit this plan on `main` and push it: the listing check and the review read it there.
- [ ] **Checkpoint:** list. Open the listing pull request as the skill says, without asking first: the pull request
      is the review. See it to "bestanden", then show the creator the pull request and its result; change nothing in
      it without their word.
- [ ] Plan changed since its last push → commit it on `main`, push again.

### Completed

## Retrospective

<!-- At the end of Commit, before the listing pull request. Facts, short, no names. Read by review and evals. -->

### Phases reached

<!-- Last phase completed, checkpoints passed. E.g. "commit; confirmed, published". -->

### Creator turns after the plan

<!-- Number of creator messages after the confirmation, topic of each. Target: at most 3. -->

### Where I had to guess

<!-- Each gap in plan, skills, messages or answers, and your choice. "None" if none. -->

- Bruchteil-Einstieg aus Browserfeedback neu hergeleitet: `BruchteilEntdecken` führt 12 Plättchen erst in vier Gruppen, dann wählt das Kind drei Gruppen. Erst danach folgen Beispielrechnung und eigenständige Aufgaben mit anderer Menge. Der beliebige Gruppengrößenregler aus `AnteilGanzes` ist entfernt.
