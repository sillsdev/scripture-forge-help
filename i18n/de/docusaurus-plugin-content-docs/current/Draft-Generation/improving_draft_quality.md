---
title: Qualität des Entwurfs verbessern
sidebar_position: 6
slug: /improving-draft-quality
---

## Faktoren, die die Qualität des Entwurfs beeinflussen

Nur menschliche Übersetzer können entscheiden, ob ein Entwurf den Bedürfnissen eines Teams entspricht. Es ist jedoch hilfreich, einige Faktoren zu verstehen, die die Qualität eines generierten Entwurfs beeinflussen können.

#### Umfang und Qualität der gepaarten Sprachbeispiele („Schulungsdaten“)

- Zusätzliche Beispiele tragen zu einer besseren Qualität des Entwurfs bei.
- Sorgfältig geprüfte und konsistente Beispiele verbessern die Qualität des Entwurfs.
- Beispiele, die für das zu verfassende Buch oder die zu verfassenden Bücher relevant sind, verbessern die Qualität des Entwurfs; so ist es beispielsweise oft hilfreich, Beispiele aus demselben Genre oder mit ähnlichen Inhalten einzubeziehen.

#### Beziehung zwischen Ausgangs- und Zielsprache

- Eine engere sprachliche Verwandtschaft und eine größere typologische Übereinstimmung führen oft zu einer besseren Qualität des Entwurfs.

#### Beziehung zwischen Ausgangs- und Zieltext

- Wenn die Übersetzung sich eng an den Wortlaut des Referenztextes hält, kann dies zu einer erfolgreicheren Schulung des Modells führen und die Qualität des Entwurfs verbessern.
- Da sich eine Rückübersetzung eng an den Text hält, kann die Einbeziehung einer Rückübersetzung in der Ausgangssprache als zweiter Referenztext die Qualität verbessern.
- Ein Projekt, das zahlreiche Erläuterungen enthält, die im Quelltext nicht vorkommen, weist möglicherweise eine geringere Qualität auf.

#### Darstellung der Ausgangssprache im Sprachmodell

- Die Verwendung einer ressourcenreichen Ausgangssprache (einer der großen modernen Sprachen, für die im zugrunde liegenden Sprachmodell zahlreiche Beispiele vorliegen) kann die Qualität des Entwurfs verbessern.

#### Merkmale des Zielprojekts

- Eine Schrift, die dem zugrunde liegenden Sprachmodell unbekannt ist, kann die Qualität des Entwurfs beeinträchtigen.
- Bei stark agglutinierenden Sprachen und solchen ohne Worttrennungen kann es zu einer verminderten Qualität des Entwurfs kommen.
- Bei einem Projekt, bei dem auf Absatzebene übersetzt wird oder das viele lange Versabschnitte enthält, kann die Qualität des Entwurfs beeinträchtigt sein.

## Qualität des Entwurfs verbessern {#92f8d5c800084e4eb113511f74e26927}

Hier sind einige Vorschläge zur Verbesserung der Qualität des Entwurfs. Nicht alle davon werden für alle Projekte möglich oder relevant sein.

- Verwende für die Schulung des Modells so viel übersetzten Bibeltext wie möglich.
- Erwäge, eine Datei mit weiteren Satzpaaren in der Ausgangs- und Zielsprache hochzuladen. Dies kann auf der Seite **Quellen konfigurieren** vorgenommen werden.
- Teste verschiedene Referenztexte, darunter auch solche mit umfangreicheren Ressourcen oder aus eng verwandten Ausgangssprachen.
- Füge eine Rückübersetzung in der Ausgangssprache als zweiten Referenztext hinzu.
- Korrigiere häufige Unstimmigkeiten in der Übersetzung hinsichtlich Rechtschreibung, Tastatureingabe oder Wortwahl.
- Fahre mit der manuellen Übersetzung fort und generiere erneut einen Testentwurf, sobald weitere übersetzte Bibelstellen fertiggestellt sind.
- Lies den Hinweis zur [schrittweisen Generierung von Entwürfen](/generating-a-draft#select-the-books-to-draft) und zieh diese Methode für umfangreiche Bücher oder beim Einstieg in ein neues Genre in Betracht.

## Warnung zur Qualität eines Entwurfs {#9a12a839f3634e75acd511f4b426eb86}

Scripture Forge nutzt eine automatische Bewertung, um die Qualität eines Entwurfs einzuschätzen, und zeigt den Nutzern eine Warnung an, wenn die geschätzte Qualität eines generierten Entwurfs sehr niedrig ist. Dies könnte darauf hindeuten, dass ein Fehler in der Konfiguration vorliegt, der dazu geführt hat, dass die Schulung des Modells fehlgeschlagen ist. Weitere Informationen findest Du in den FAQ. Einige Entwürfe können von minderer Qualität sein, auch wenn sie nicht durch die Warnung gekennzeichnet sind. Es ist wichtig, die Qualität jedes Entwurfs sorgfältig zu prüfen.
