# Retro: Bruchrechnung – Schritt für Schritt

Stand: 2. November 2026. Die App umfasst 21 Lernseiten für Bruchrechnung in Klasse 6, orientiert am hessischen Gymnasiallehrplan. Die lokale Anwendung wurde vom Auftraggeber als fertig angenommen. Diese Retro beschreibt die gemeinsame Entwicklung und die anschließenden Nachschärfungen.

## Zentrale Erkenntnis

Der erste Entwurf war didaktisch zu oberflächlich. Er enthielt viele fachlich richtige Aussagen und funktionierende Eingaben, erklärte aber oft nicht ausreichend, wie ein Kind mit einer Darstellung denken und handeln sollte. Dadurch musste der Auftraggeber wesentliche Qualitätskriterien in vielen Browserkommentaren nachliefern. Diese Kriterien hätte ich früher aus dem Wunsch nach einer anschaulichen, interaktiven Lern-App ableiten und selbst prüfen müssen.

Ich habe zu früh die gesamte Themenbreite umgesetzt. Die wiederverwendeten Muster vervielfachten dadurch auch die Schwächen des ersten Entwurfs. Eine gemeinsam geprüfte Musterseite hätte erheblich mehr geklärt als die frühen Skizzen allein.

## Was nachgeschärft werden musste

| Bereich | Schwäche des ersten Stands | Nachschärfung |
|---|---|---|
| Einstieg | Direkte Fachfragen und Regeltexte setzten Verständnis voraus. | Alltagsnahe Einstiege, etwa Bruchteil statt Beinbruch oder Bauklötze in Reihen. Neue Begriffe werden dort erklärt, wo sie gebraucht werden. |
| Seitenstruktur | Derselbe Ablauf und dieselben Überschriften wurden überall erzwungen. | Inhaltliche Einstiegstitel; „Ausprobieren“ ausschließlich bei bedienbarer Interaktion, sonst „Anschaulich erklärt“. Überflüssige Definitionen entfernt. |
| Lernfolge | Spätere Inhalte erschienen zu früh, etwa 5/4 beim Zahlenstrahl vor „Mehr als ein Ganzes“. | Aufgaben und Modelle auf die jeweilige Seitenkompetenz zugeschnitten. Früher Zahlenstrahl nur von 0 bis 1; spätere Verfahren erst im passenden Abschnitt. |
| Aufgabenbilder | Mehrere Darstellungsarten pro Übung überlasteten; Ergebniszähler verrieten die Lösung. | Eine Darstellungsart pro Aufgabe. Eigene Markierungen und Eingaben bleiben von der Korrektheitsprüfung getrennt. Keine automatische Ergebnis-Eingabe. |
| Erklärungen | Allgemeine Sätze wie „Angaben in die Regel einsetzen“ hatten keinen Lernwert. | Konkrete Rechenschritte mit den jeweiligen Zahlen und einer Begründung. Aufgaben zeigen ausgerechnete Ausgangswerte, etwa 6/48 statt 6/(8 · 6). |
| Übungsbezug | Einleitung und wechselnde Aufgabe verwendeten ohne Überleitung andere Zahlen. | Feste Erkundungsbeispiele und eigene Aufgaben ausdrücklich unterscheiden. Texte nennen nur tatsächlich vorhandene Ansichten und Werkzeuge. |
| Teilbarkeit | Regeln und Primzahlen kamen vor einer verständlichen Herleitung. | Faktoren aus Reihen von Bauklötzen entwickeln, Faktoren weiter zerlegen und erst dann Primzahlen als nicht weiter zerlegbare Faktoren größer als 1 erklären. |
| ggT und kgV | Listen erklärten die spätere Rastermethodik nicht. | Zwei Erkundungen: Plättchen zu größeren Gruppen bündeln und gleich große Ganze feiner unterteilen. Plus/Minus nimmt die gemeinsame Unterteilung ausdrücklich wieder auf. |
| Erweitern und Kürzen | Kuchenbeschreibung und Balkengrafik passten nicht zusammen; unverbundene Regler und Markierknöpfe blieben rätselhaft. | Beim Erweitern tatsächliche Kuchenstücke gleichmäßig unterteilen; Anteil bleibt gleich. Zwecklose Bedienelemente entfernt, Eingabe und Rückmeldung präzisiert. |
| Bruchteil | Die Aufgabe verlangte eine Rechnung, bevor die Gruppenbildung verständlich war. | Zwölf Plättchen zunächst in vier Gruppen teilen, dann drei Gruppen auswählen. Danach selbstständige Aufgaben mit anderen Anzahlen. |
| Multiplikation | Im Rechteck war zunächst nur ein Faktor dargestellt. Erklärung und Visualisierung wechselten zudem zwischen zwei Vorstellungen. | Beide Dimensionen korrekt zuordnen. Kuchenanteil weiter teilen und Rechteck aus Seitenlängen als zwei gleichberechtigte Ideen auf derselben Seite erklären. Die Ergebnisse beziehen sich auf denselben ganzen Kuchen beziehungsweise das Einheitsquadrat. |
| Startzustände | Die Kuchen-Erkundung startete bereits mit verkleinertem Anteil. | Zunächst alle neu geteilten Stückchen behalten. Erst die zweite Handlung verkleinert den Anteil. Nach Änderung der Unterteilung stimmen Maximalwert, Beschriftung und Reglerposition überein. |
| Division | Die Stückzahl war bedienbar, ihre geometrische Bedeutung aber schwer erkennbar. | Sichtbare Passgrenze im Probierstreifen und Erklärung, wie Stücke die vorhandene Menge ausfüllen. |
| Visuelle Sprache | Haken und Punkte in Bruchstreifen wirkten wie weitere mathematische Zeichen. Vertikale Muster konkurrierten mit Teilgrenzen. | Gefüllte Flächen ohne Zellzeichen; Rauten- und Punktmuster unterscheiden Anteile. Farben, Muster, Legenden und Textbeschreibungen passen zusammen. |
| Eingaben | Labels klebten an Eingabefeldern; „Deine Eingabe“ wiederholte nur den Text. | Abstand zwischen Beschriftung und Feld. Bestehende semantische Label-Zuordnung geprüft. Gültige Bruch-Eingaben erhalten eine MathML-Vorschau „So schreibst du das“, ohne Kürzung oder Bewertung. |
| Theme | Eigene Komponenten verwendeten nicht vorhandene Theme-Variablen mit weißen Ersatzwerten. | Explainer-Variablen für Oberflächen, Text, Rahmen, Fokus und Bedienelemente. Hell- und Dunkelmodus systematisch geprüft. |
| Abstände | Neustart- und Auswahlknöpfe standen ohne sinnvolle Trennung zusammen. | Aktionsgruppen mit konsistentem Abstand, Neustart auf eigener Zeile. Layout innerhalb einer eigenen Komponente muss ausdrücklich gestaltet werden. |
| Dezimalrechnung | Vier Rechenarten und mehrere Beispiele standen in einem Absatz. | Zwei Lernseiten für Strich- und Punktrechnung. Jede Rechenart hat eine eigene Herleitung, einen Beispielkasten und sechs Aufgabenvarianten. |
| Zugängliche Erklärungen | Einige Textalternativen beschrieben fremde Ansichten oder nur die Rechnung. | No-JavaScript-Texte erklären Ganzes, Teilung, Zeichen, Handlung und Zusammenhang. Aufgabenbeschreibungen nennen die konkreten Werte. Freie Modelle behalten aufklappbare Textbeschreibungen. |

## Was die technische Prüfung allein nicht beantwortet hat

Rechentests, ein erfolgreicher Build und ein funktionierender Prüfknopf belegen noch keine verständliche Lernhandlung. Für jede Darstellung muss zusätzlich geprüft werden:

1. Was stellt das Ganze dar?
2. Was bedeuten Teile, Farben und Muster?
3. Was verändert das Kind und was bleibt unverändert?
4. Wie führt diese Handlung zur mathematischen Aussage?
5. Ist eindeutig, was anschließend eingegeben oder geprüft wird?

Ein Agent hat alle sechs Kapitelübersichten und die damaligen 20 Lernseiten per playwright-cli aus simulierter Sicht eines zwölfjährigen Kindes geprüft und alle unterschiedlichen Bedienformen ausprobiert. Der Bericht machte besonders widersprüchliche Arbeitsaufträge, unerklärte Bildbeziehungen und unangeleitete Tabellen sichtbar. Diese Prüfung hätte früher stattfinden sollen. Sie ersetzt weder eine Erprobung mit echten Kindern noch einen Screenreader-Test.

Zwei technische Fehler sind ebenfalls lehrreich:

- Eine Runtime-Klasse für Prüfsteuerungen wurde als allgemeine Abstands-Hilfe verwendet. Der vollständige Test zeigte die Kollision. Visuell passende Klassen sind keine verlässlich frei verwendbaren Layout-Bausteine. Die Komponente verwendet jetzt eigene Layout-Selektoren mit denselben Abständen.
- Eine eigene Hilfsroutine zum Lesen der Inhaltsdateien entfernte ein Komma innerhalb einer Formel. Die Bildkontrolle zeigte fehlende Dezimalkommas. Künftig sind strukturtreue Parser und eine Kontrolle des tatsächlich gerenderten mathematischen Ausdrucks erforderlich.

## Wie ich schneller zum passenden Entwurf gekommen wäre

### Erst eine echte Musterseite abstimmen

Vor der breiten Umsetzung eine vollständige Seite mit Einstieg, Darstellung, Bedienung, Beispiel und eigener Übung zeigen. Als Prüfauftrag eignet sich: „Kann ein zwölfjähriges Kind hier ohne zusätzliche Erklärung beginnen?“ Die Freigabe dieser Seite wäre der Maßstab für weitere Seiten gewesen.

### Die Lernhandlung vor dem Bauteil beschreiben

Für jedes Modell zuerst in zwei bis vier Sätzen festhalten, was das Kind tut und warum das mathematisch sinnvoll ist. Daraus ergibt sich, ob Regler, Auswahlflächen, eine Tabelle oder ein statisches Bild benötigt werden. Ein Bedienelement braucht einen erkennbaren Zweck.

### Pro Seite einen klaren Lernschritt planen

Vorwissen, neues Lernziel und spätere Inhalte markieren. Verständnisfrage, Standardübung und Modell anschließend gegen dieses Ziel prüfen. Unterschiedliche Rechenarten bekommen eigene Herleitungen und getrennte Beispiele; wiederkehrende Methoden werden früher eingeführt und später bewusst wiederaufgenommen.

### Zahlen und Bildbeziehungen gemeinsam entwickeln

Aufgabentext, Zeichnung und Erklärung müssen dieselben Werte und dasselbe Bezugs-Ganze verwenden. Ein Wechsel zum nächsten Beispiel wird angekündigt. Bei mehreren Metaphern werden ihre Gemeinsamkeit und ihre unterschiedlichen Handlungen ausdrücklich erklärt.

### Das Qualitätsraster früh anwenden

Schon die Musterseite in Hell/Dunkel, bei 360 px, mit Tastatur und ohne JavaScript prüfen. Dazu einen richtigen Versuch, einen typischen Fehler und eine unvollständige Eingabe durchspielen. Auch der Anfangszustand gehört zur Didaktik: Zunächst soll sichtbar sein, was gleich bleibt, bevor eine zweite Handlung etwas verändert.

### Die Kinderperspektive früh hinzunehmen

Nach der Musterseite und vor der Vervielfältigung der Komponenten eine kurze, unabhängige Prüfung durchführen lassen. Nach einem gemeinsamen Komponentenfehler alle Verwendungsstellen kontrollieren. So muss der Auftraggeber dieselbe Schwäche nicht auf mehreren Seiten erneut finden.

## Was beibehalten werden sollte

Die Browserkommentare an konkreten Elementen waren eine sehr wirksame Form der Zusammenarbeit. Gemeinsame Komponenten ermöglichten anschließend Korrekturen über viele Seiten hinweg. Exakte Rechenprüfungen, Aufgabenvarianten, No-JavaScript-Inhalte und automatisierte Browserprüfungen bleiben sinnvoll. Ihr Nutzen steigt, wenn die didaktische Musterseite vorher verständlich ist.

Die wichtigste Änderung für meinen nächsten Durchlauf ist deshalb: **früher eine vollständige Lernhandlung prüfen, anschließend deren geprüfte Qualität auf die Themenbreite übertragen.**
