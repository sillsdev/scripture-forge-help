---
title: Fragen hinzufügen
sidebar_position: 1
slug: /adding-questions
---

import ReactPlayer from "react-player";

## Fragen zum Projekt hinzufügen {#1850d745ac9e80e09444cb3564752e31}

Um Rückmeldungen zu Deiner Übersetzung zu erhalten, musst Du Fragen zur Überprüfung des Verständnisses hinzufügen. Du kannst Fragen importieren, die von anderen erstellt wurden, oder eigene Fragen erstellen.

:::note

Im Moment ist die einzige Möglichkeit, Rückmeldungen von Überprüfern aus der Zielgruppe zu erhalten, indem Überprüfungsfragen gestellt werden. Einige Projektadministratoren haben darum gebeten, dass die Überprüfer Kommentare zum Text hinzufügen können, auch wenn keine Frage vorhanden ist. Wenn dies etwas ist, von dem Dein Projekt profitieren könnte, [unterstütze den Vorschlag](https://community.scripture.software.sil.org/t/feature-request-comments-to-any-bible-verse-chosen/2506/6) bitte auf der [Scripture Forge Community Seite](https://community.scripture.software.sil.org/).

:::

<ReactPlayer controls url="https://youtu.be/J-led5En3D8" />

### Fragen individuell in Scripture Forge erstellen {#1850d745ac9e8031908ef693ff578eec}

Um Fragen zu Deinem Projekt hinzuzufügen, klicke in der Navigationsleiste unter dem Abschnitt **Überprüfung mit der Zielgruppe** auf **Übersicht**. Klicke dann auf die Schaltfläche **Frage hinzufügen**. Ein Dialogfeld wird geöffnet, in dem Du eine Frage erstellen kanst.

Eine Frage kann sich auf einen einzelnen Vers oder auf mehrere Verse beziehen. Gib einen Verweis in das Feld für die **Bibelstelle** ein, oder klicke auf den Dropdown-Pfeil, um ein Buch, ein Kapitel und einen Vers auszuwählen. Wenn sich die Frage über mehrere Verse erstrecken soll, gib in das zweite Feld einen Endverweis ein. Sobald Du einen Verweis eingegeben hast, wird der Text angezeigt, wobei die von Dir ausgewählten Verse hervorgehoben sind.

Gib Deine Frage in das Feld **Frage** ein. Wenn Du eine Audioversion der Frage hinzufügen möchtest, klicke auf die Schaltfläche **Aufnehmen**. Unter Umständen wirst Du aufgefordert, den Zugriff auf Dein Mikrofon zu gestatten. Wenn Du die Aufnahme beenden möchstest, klicke auf **Aufnahme beenden**. Du kannst dann die Aufnahme abspielen, um zu hören, wie sie klingt. Klicke auf die Schaltfläche **Erneut versuchen**, wenn Du mit dem Ergebnis nicht zufrieden bist. Du kannst anstelle einer Aufnahme auch eine Audiodatei hochladen, wenn Du das bevorzugst.

Klicke auf **Speichern** und Deine Frage wird zur Liste der Fragen für die Überprüfung mit der Zielgruppe hinzugefügt.

![](./1916935940.png)

### Fragen aus einer Tabelle importieren {#1850d745ac9e8085960dd88b648f0c7a}

Da es mühsam sein kann, eine Frage nach der anderen zu erstellen, haben wir auch die Möglichkeit geschaffen, Fragen aus einer Tabelle zu importieren. Du kannst ein Programm wie Microsoft Excel, Google Sheets oder LibreOffice Calc verwenden, um eine Liste von Fragen zu erstellen oder zu bearbeiten. Wenn Du auf der Suche nach einer Reihe vorgefertigter Fragen bist, solltest Du die [unfoldingWord®-Übersetzungsfragen](https://git.door43.org/unfoldingWord/en_tq) in Betracht ziehen. Wenn Du auf die verlinkte Seite gehst und auf eine der Dateien klickst, kannst Du sie herunterladen, als Tabellenkalkulation öffnen und die Liste der Fragen bearbeiten.

Hier siehst Du ein Beispiel dafür, wie die Zeilen in Deiner Tabelle aussehen sollten, damit Du sie in Scripture Forge importieren könnst:

| Verweis                   | Frage                                                      |
| ------------------------- | ---------------------------------------------------------- |
| HEB 1:1   | Worauf bezieht sich "unsere Väter"?                        |
| HEB 1:2   | Was bedeutet es, dass der Sohn „Erbe aller Dinge“ ist?     |
| HEB 1:2-3 | Wer ist der "Sohn", von dem in diesen Versen die Rede ist? |

Die Tabelle kann auch mehr als zwei Spalten haben, aber nur die Spalten "Referenz" und "Frage" werden verwendet. Die von unfoldingWord veröffentlichten TSV-Dateien haben ein etwas anderes Format, können aber ebenfalls in Scripture Forge importiert werden.

:::note

Der Verweis muss den Buchnamen in der gleichen Weise abkürzen, wie Paratext Buchnamen abkürzt. Zum Beispiel funktioniert **HEB 1:1**, aber **Hebräer 1,1** funktioniert nicht.

:::

Wenn Du Hilfe benötigst, um Deine Tabelle in das richtige Format für den Import in Scripture Forge zu bringen, helfen wir Dir gerne. Sende einfach eine E-Mail an [help@scriptureforge.org](mailto:help@scriptureforge.org).

1. Speichere Deine Tabelle als CSV-Datei.
2. Klicke dann in Scripture Forge auf **Übersicht** unter dem Abschnitt **Überprüfung mit der Zielgruppe** in der Navigationsleiste.
3. Klicke dann auf die Schaltfläche **Massenimport**. Es wird ein Dialog geöffnet, in dem Du wählen kannst, woher Du Fragen importieren möchtest.
4. Klicke auf **Import aus CSV-Datei** und wähle die Datei aus.
    1. Wenn Du einige Zeilen in Deiner Datei hast, die keine gültige Referenz und Frage haben, wird eine Warnung angezeigt, die Dich darauf hinweist, dass diese Zeilen übersprungen werden.
    2. Andernfalls wird Dir eine Liste von Fragen angezeigt.

### Alle Fragen importieren {#1850d745ac9e80b59ae8cabac1b67e7f}

Um alle Fragen in der CSV-Datei zu importieren, gehe wie folgt vor:

1. Klicke auf das Kontrollkästchen am Anfang der Liste. Damit werden alle Fragen ausgewählt.
2. Klicke auf **Ausgewählte Fragen importieren**.

### Ein Teil der Fragen importieren {#1850d745ac9e8045aa5bd2ab9ce99fbc}

Du kannst auch nach einem Teil der Fragen filtern:

1. Verwende die Felder **Verweis von** und **Verweis auf**, um die Verse anzugeben, mit denen die Fragen beginnen und enden sollen.
2. Wenn Du zum Beispiel nur Fragen für Markus 5 importieren möchten:
    1. Gib **MRK 5:1** in das Feld **Referenz von** ein.
    2. Gib **MRK 5:43** in das Feld **Verweis auf** ein.
3. Klicke auf das Kontrollkästchen am Anfang der Liste, um alle Fragen auszuwählen. Nur die angezeigten Fragen werden ausgewählt.
4. Klicke auf **Ausgewählte Fragen importieren**.

:::note

Du musst Dir nicht merken, dass Markus 5 43 Verse hat, um nach allen Versen des Kapitels zu filtern. Wenn Du auf den Dropdown-Pfeil im Feld **Verweis auf** klickst, wird ein Dialogfeld geöffnet, in dem Du ein Buch, ein Kapitel und einen Vers auswählen kannst. Wenn Du Markus 5 auswählst, werden die Verse in Markus 5 aufgelistet, und Du kannst den letzten Vers, nämlich Vers 43, auswählen. Alternativ kannst Du auch **MRK 5:100** in das Feld **Verweis auf** eingeben, und alle Verse in Markus 5 werden einbezogen, obwohl es in Markus 5 eigentlich keinen Vers 100 gibt.

:::

### Fragen aus Transcelerator importieren {#1850d745ac9e80e795f3d611356e74d5}

[Transcelerator](https://software.sil.org/transcelerator/) ist ein Plugin für Paratext, das eine Reihe von vorgefertigten Fragen zur Überprüfung des Textverständnisses in mehreren wichtigen Sprachen enthält. Diese Fragen können in Paratext übersetzt, in Scripture Forge exportiert und dann nach einer Synchronisierung in Scripture Forge importiert werden.

Um Fragen aus Transcelerator zu importieren:

1. Lade Transcelerator von [software.sil.org/transcelerator/download](https://software.sil.org/transcelerator/download/) herunter und installiere es.
2. Starte Transcelerator in Paratext.
3. Öffne in Transcelerator das Menü **Datei** und klicke auf **Scripture Forge-Datei erzeugen**.
4. Gib die Übersetzungen der englischen Fragen, die Du verwenden möchten, in die Spalte **Übersetzung** ein. Aktiviere für jede Frage, die bereit ist, das Kontrollkästchen **Bestätigt**.
5. Schließe Transcelerator und führe "Senden/Empfangen" in Paratext aus.
6. Klicke in Scripture Forge in der Navigationsleiste auf **Synchronisieren**. Klicke auf der sich öffnenden Seite auf **Synchronisieren**, um die Transcelerator-Fragen von Paratext zu senden und zu empfangen.
7. Klicke auf **Übersicht** unter dem Abschnitt \*\*Überprüfung mit der Zielgruppe \*\* in der Navigationsleiste. Klicke dann auf die Schaltfläche **Massenimport**.
8. Es wird ein Dialog geöffnet, in dem Du wählen kannst, woher Du Fragen importieren möchtest. Klicke auf **Import aus Transcelerator**.
9. Wähle die Fragen aus, die Du importieren möchtest. Die Schritte hierfür sind genau die gleichen wie in dem Abschnitt oben mit dem Titel **Fragen aus einer Tabelle importieren**. In diesem Abschnitt findest Du Anweisungen zum Filtern für die gewünschten Fragen.
10. Klicke auf **Importieren ausgewählter Fragen** und Deine Fragen werden dem Projekt hinzugefügt.

## Audioaufnahme des Textes anhängen {#fd31ef9b6d74417099996e7dadb5068e}

Scripture Forge kann eine Audioaufnahme von jedem Textabschnitt für Überprüfer der Zielgruppe abspielen. Dazu musst Du für jedes Kapitel eine Audiodatei und eine Zeitdatei hochladen. Zeitdateien erlauben es Scripture Forge jeden Vers hervorzuheben, während er gesprochen wird.

### Den Text aufnehmen {#1850d745ac9e805eb4b1c0f05d6da02a}

Scripture Forge unterstützt Audio in den Dateiformaten .mp3 und .wav. Zeitdateien werden von HearThis, aeneas, Audacity und Adobe Audition unterstützt.

Eine der einfachsten Optionen ist [HearThis](http://software.sil.org/hearthis) zu verwenden, um die Übersetzung aufzunehmen. [Diese Anleitung](https://software.sil.org/downloads/r/scriptureappbuilder/Scripture-App-Builder-08-Using-HearThis-for-Audio-Recording.pdf) führt Dich durch den Prozess der Aufzeichnung von Bibeltexten und dem Erstellung von Audio- und Zeitdateien. Überspringe die Schritte am Ende über die Verwendung von Scripture App Builder.

Die [Ressourcen](https://software.sil.org/scriptureappbuilder/resources/) für Scripture App Builder diskutiert fortgeschrittene Ansätze, wie etwa die Verwendung von Glyssen für eine dramatisierte Audioaufnahme.

### Zeitdateien erstellen {#1850d745ac9e80c7b583c6d50193d7c9}

Wenn Du bereits Audioaufnahmen hast, gibt es mehrere Optionen zum Erstellen von Zeitdaten.

Du kannst automatisch Zeitdateien mit Aeneas generieren, indem Du [diesen Anweisungen](https://software.sil.org/downloads/r/scriptureappbuilder/Scripture-App-Builder-07-Using-aeneas-for-Audio-Text-Synchronization.pdf) folgst.

Alternativ kannst Du mit Audacity manuell Zeitdateien erstellen, indem Du [dieser Anleitung](https://software.sil.org/downloads/r/scriptureappbuilder/Scripture-App-Builder-06-Using-Audacity-for-Audio-Text-Synchronization.pdf) folgst. Eine weitere Option ist Adobe Audition. Zeitdaten von Adobe Audition werden in dezimalen oder FPS Zeitformaten unterstützt. Wir unterstützen das „Samples“-Format nicht.

### Audio anhängen {#1850d745ac9e80668685c9ea58252d6b}

Um Audio- und Zeitdateien hochzuladen, klicke in der Seitenleiste auf **Fragen & Antworten**, navigiere zu dem Kapitel, an das du Audio anhängen möchtest und klicke dann auf das **Audio**-Symbol in der oberen rechten Ecke. Klicke auf **Dateien durchsuchen** und wähle die Audioaufzeichnung und dazugehörige Zeitdatei für dieses Kapitel aus und klicke dann auf **Speichern**.

![](./645317227.png)

