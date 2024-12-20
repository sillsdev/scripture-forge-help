---
title: Erstellung eines Entwurf verstehen
sidebar_position: 0
slug: /understanding-drafts
---

## Einführung {#ad165caedac347798432de75e4305252}

Das Natural Language Processing Team von SIL International hat ein Werkzeug entwickelt, das bei der Bibelübersetzung helfen kann, indem es einen groben ersten Entwurf erstellt, den die Übersetzer dann bearbeiten und verfeinern können. Ab dem 1. Januar 2024 ist dieses Werkzeug nun für die Verwendung in [Scripture Forge](https://scriptureforge.org/), einer Plattform zur Bearbeitung von Bibeltexten, die in [Paratext] (https://paratext.org/) integriert ist, verfügbar.

Alle Entwürfe, die erstellt werden, enthalten Fehler, die vom Übersetzungsteam korrigiert werden müssen. Bei einigen Projekten wird die Qualität zu gering sein, um nützlich zu sein. Ausführliche Praxistests haben jedoch gezeigt, dass eine beträchtliche Anzahl von Teams die Entwürfe als sehr hilfreich für ihre Arbeit empfindet und dass sie von ausreichender Qualität sind, um sie als Ausgangspunkt für die Bearbeitung durch das Team zu verwenden.

Letztendlich wird der Erfolg der Entwürfe daran gemessen, ob sie als Hilfsmittel für die Arbeit des Übersetzungsteams nützlich sind, und nicht daran, ob sie als fertiges Produkt für sich allein stehen können.

## Wie es funktioniert {#bd8a69c7ed904125897b4ee26dcae489}

Um das Werkzeug effektiv nutzen zu können, ist es wichtig zu verstehen, wie es funktioniert. Die Entwürfe werden in einem zweistufigen Verfahren erstellt:

1. Sprache erlernen.
2. Den Text übersetzen.

Der wichtigste Schritt ist der erste, das Erlernen der Sprache. Die Qualität des entstehenden Entwurfs hängt fast ausschließlich davon ab, wie gut dieser Schritt verläuft.

Das System lernt, indem es denselben Satz in mehreren Sprachen sieht, eine in einer Sprache, die es bereits versteht, und eine in der Sprache, in die Du übersetzt.

Der wichtigste Punkt ist, dass diese Sätze in beiden Sprachen das Gleiche aussagen müssen. Dies ist dasselbe Prinzip, das es den Gelehrten ermöglichte, die Hieroglyphen vom Stein von Rosette zu lernen: derselbe Text wurde in drei verschiedenen Sprachen geschrieben, was einen Vergleich zwischen einer bereits verstandenen und einer nicht verstandenen Sprache ermöglichte.

Ein Text, der sowohl in der Sprache, aus der Du übersetzest, als auch in der Sprache, in die Du übersetzt, verfügbar ist, wird als "Paralleltext" bezeichnet. Im Allgemeinen gilt: Je mehr Paralleltexte Du hast, umso besser lernt das System die Sprache. Bei den meisten Projekten wird dieser Paralleltext Dein Referenztext sein und die Übersetzungsarbeit, die Du bereits abgeschlossen hast. Zum jetzigen Zeitpunkt empfehlen wir Dir, zumindest das Neue Testament übersetzt zu haben.

## Anwendungsbeispiele {#937c1db4b24d4e85bfc2acc489bf456b}

### Ein einfaches Beispiel {#9165ff8c10564a7fa67c3375f62de85e}

Angenommen, ein Übersetzungsteam übersetzt die Bibel in eine lokale Sprache und verwendet die englische NIV als Referenztext. Das Team hat das gesamte Neue Testament fertiggestellt und beginnt mit der Arbeit am 1. Buch Mose.
Das System würde einen Entwurf wie folgt erstellen:

1. Das englische Neue Testament der NIV mit dem Neuen Testament der Landessprache vergleichen, um die Sprache zu lernen.
2. Nach dem Erlernen der Sprache das 1. Buch Mose aus der englischen NIV in die Lokalsprache übersetzen.

Nachdem das 1. Buch Mose erstellt wurde, würde das Team den Entwurf überarbeiten, um alle Fehler zu korrigieren. Anschließend könnten sie einen Entwurf für das nächste Buch erstellen, an dem sie arbeiten wollen, und das System würde die Übersetzung von 1. Mose nutzen, um die Qualität des nächsten Entwurfs zu verbessern.

### Ein komplexeres Beispiel {#e6ec52fc004a41c195617bbcc3bb7f84}

Im ersten Beispiel verwendete das Team die englische NIV als Referenztext, und das System lernte die Sprache durch den Vergleich der englischen NIV mit dem Neuen Testament in der Lokalsprache. In vielen Fällen kann jedoch ein besserer Entwurf mit einem anderen Text, als dem des Teams, generiert werden.

Es ist zum Beispiel oft möglich, die Qualität des Entwurfs zu verbessern, indem eine Rückübersetzung von Lokalsprache in die Ausgangssprache verwendet wird. Wenn das Team das Projekt ins Englische oder Deutsche rückübersetzt hat, könnte es als Referenztext anstelle der englischen NIV oder einer deutschen Bibelübersetzung verwendet werden. Eine Rückübersetzung ist in der Regel wesentlich wortgetreuer als eine normale Übersetzung und macht es dem System daher leichter zu verstehen, wie die lokale Sprache dem Englischen oder Deutschen entspricht. In diesem Beispiel würde das System einen Entwurf wie folgt erstellen:

1. Die englische oder deutsche Rückübersetzung mit dem Neuen Testament der Lokalsprache vergleichen, um die Sprache zu lernen.
2. Nach dem Erlernen der Sprache das 1. Buch Mose aus der englischen NIV oder der deutschen Bibelübersetzung in die Lokalsprache übersetzen.

Das ideale Setup für ein Projekt zu bestimmen, ist ein komplexer Prozess und nicht etwas, das Du lernen musst. Das SIL Natural Language Processing Team entwickelt Werkzeuge, um die ideale Konfiguration zu bestimmen und kann Teams während des Onboarding-Prozesses unterstützen.

### Rückübersetzungen generieren {#8a64fbb8c7e741938cf5007358570d3d}

Neben der Erstellung von Entwürfen in der Lokalsprache kann das System auch Rückübersetzungen in unterstützte Ausgangssprachen erstellen. Um einen Entwurf einer Rückübersetzung zu generieren, muss das Team bereits mindestens einige Bücher aus der Lokalsprache in die Ausgangssprache rückübersetzt haben.

In diesem Beispiel nehmen wir an, ein Team hat die vier Evangelien in die Lokalsprache übersetzt und hat Matthäus, Markus und Lukas wieder ins Englische oder Deutsche übersetzt. Um einen Rückübersetzungsentwurf von Johannes zu generieren, würde das System Folgendes tun:

1. Die englischen oder deutschen Rückübersetzungen von Matthäus, Markus und Lukas mit den Versionen von Matthäus, Markus und Lukas in der Lokalsprache vergleichen, um die Sprache zu lernen.
2. Nachdem Erlernen der Sprache, Johannes aus der Lokalsprache ins Englische oder Deutsche übersetzen.

Rückübersetzungsentwürfe enthalten ebenfalls Fehler und müssen bearbeitet werden, aber die Qualität ist in der Regel wesentlich höher als bei den Entwürfen in die Lokalsprache.

## Erste Schritte {#1ba56b4f36584ecb91b9f2208efec047}

Das Generieren von Rückübersetzungsentwürfen ist derzeit offen und steht allen Paratext-Benutzer zu Verfügung. Das Generieren von Entwürfen in die Lokalsprache, erfordert aufgrund der Komplexität beim Einrichten, dass ein Übersetzungsteam vom SIL Natural Language Processing Team unterstützt wird. Bitte fülle das [Registrierungsformular für das Erstellen von Übersetzungsentwürfen] (https://app.smartsheet.com/b/form/305798a45a664d8585ac74e72241d8cc) aus, und ein Mitglied des SIL Natural Language Processing Teams wird prüfen, ob Dein Projekt für das Generieren von Entwürfen in Frage kommt.

Unabhängig davon, ob Du Rückübersetzungsentwürfe oder Entwürfe in der Lokalsprache generierst, kannst Du beginnen, indem Du Dein Paratext-Projekt mit Scripture Forge verbindest, indem Du die folgenden Schritte ausführst:

1. Mit Deinen Paratext-Anmeldedaten bei [Scripture Forge] (https://scriptureforge.org/) einloggen.
2. Dein Paratext-Projekt mit Hilfe der [Anleitung zum Verbinden eines Paratext-Projekts] (https://help.scriptureforge.org/connect-paratext-project) verbinden. Beim Verbinden des Projekts, Deinen Referenztext als Quelle auswählen. Für eine Rückübersetzung sollte der Ausgangstext in die Lokaslsprache übersetzt werden.
3. Nach dem Verbinden Deines Projekts, in der Seitenleiste auf "Entwurf generieren" klicken.
4. Falls Du einen Entwurf in der Lokalsprache generierst, ist dies die einzige Möglichkeit, die Du hast, und Du müsst das Anmeldeformular für die Erstellung von Übersetzungen ausfüllen, indem Du auf "Für die Erstellung von Entwürfen anmelden" klickst. Falls Dein Projekt bereits freigeschaltet wurde oder Du mit einer Rückübersetzung arbeitest, klicke auf "Entwurf generieren", um den Prozess zu starten.
5. Wähle die Bücher aus, die Du übersetzen möchtest, und wähle dann die Bücher, die Du als Trainingsdaten verwenden möchtest.
6. Auf "Entwurf generieren" klicken, um den Vorgang zu starten.

Das Generieren des Entwurfs kann von mehreren Stunden bis zu mehreren Tage dauern.

Sobald Du einen Entwurf generiert hast, kannst Du eine Vorschau des Entwurfs ansehen und einzelne Kapitel in Dein Projekt importieren.

## Unterstützte Sprachen für das Erstellen von Rückübersetzungsentwürfen {#70c8aaa17b6f4b5783ff0f464f59700e}

Rückübersetzungsentwürfe können aus jeder Sprache generiert werden, müssen aber in eine der folgenden Sprachen rückübersetzt werden.

| Name der Sprache                        | ISO 639-1 | ISO 639-2 | ISO 639-3 |
| --------------------------------------- | --------- | --------- | --------- |
| Achinesisch                             |           | ace       |           |
| Mesopotamisches Arabisch                |           | acm       |           |
| Ta'izzi-Adeni Arabisch                  |           | acq       |           |
| Tunesisch-Arabisch                      |           | aeb       |           |
| Afrikaans                               | af        | afr       | afr       |
| Südlevantinisches Arabisch              |           | ajp       |           |
| Akan                                    | ak        | aka       |           |
| Amharisch                               | am        | amh       | amh       |
| Nordlevantinisches Arabisch             |           | apc       |           |
| Standard-Arabisch                       | ar        | arb       | ara       |
| Najdi-Arabisch                          |           | ars       |           |
| Marokkanisches Arabisch                 |           | ary       |           |
| Ägyptisches Arabisch                    |           | arz       |           |
| Assamesisch                             | as        | asm       | asm       |
| Asturisch                               |           | ast       |           |
| Awadhi                                  |           | awa       |           |
| Aymara                                  |           | ayr       |           |
| Südaserbaidschanisch                    |           | azb       |           |
| Nordaserbaidschanisch                   |           | azj       |           |
| Baschkirisch                            | ba        | bak       | bak       |
| Bambara                                 | bm        | bam       | bam       |
| Balinesisch                             |           | ban       |           |
| Belarussisch                            | be        | bel       | bel       |
| Bemba                                   |           | bem       |           |
| Bengali                                 | bn        | ben       | ben       |
| Bhojpuri                                |           | bho       |           |
| Banjaresisch                            |           | bjn       |           |
| Tibetisch                               | bo        | bod       | tib       |
| Bosnisch                                | bs        | bos       | bos       |
| Buginesisch                             |           | bug       |           |
| Bulgarisch                              | bg        | bul       | bul       |
| Katalanisch                             | ca        | cat       | cat       |
| Cebuano                                 |           | ceb       |           |
| Tschechisch                             | cs        | ces       | cze       |
| Chokwe                                  |           | cjk       |           |
| Zentralkurdisch                         |           | ckb       |           |
| Krimtatarisch                           |           | crh       |           |
| Walisisch                               | cy        | cym       | wel       |
| Dänisch                                 | da        | dan       | dan       |
| Deutsch                                 | de        | deu       | ger       |
| Dinka                                   |           | dik       |           |
| Dioula                                  |           | dyu       |           |
| Dzongkha                                | dz        | dzo       | dzo       |
| Griechisch                              | el        | ell       | gre       |
| Englisch                                | en        | eng       | eng       |
| Esperanto                               | eo        | epo       | epo       |
| Estnisch                                | et        | est       | est       |
| Baskisch                                | eu        | eus       | baq       |
| Ewe                                     | ee        | ewe       | ewe       |
| Färöisch                                | fo        | fao       | fao       |
| Fidschi                                 | fj        | fij       | fij       |
| Finnisch                                | fi        | fin       | fin       |
| Fon                                     |           | fon       |           |
| Französisch                             | fr        | fra       | fre       |
| Friaulisch                              |           | fur       |           |
| Nigerianisches Fulfulde                 |           | fuv       |           |
| Schottisch-Gälisch                      | gd        | gla       | gla       |
| Irisch                                  | ga        | gle       | gle       |
| Galizisch                               | gl        | glg       | glg       |
| Guarani                                 | gn        | grn       | grn       |
| Gujarati                                | gu        | guj       | guj       |
| Haitianisches Kreolisch                 |           | hat       |           |
| Hausa                                   | ha        | hau       | hau       |
| Hebräisch                               | he        | heb       | heb       |
| Hindi                                   | hi        | hin       | hin       |
| Chhattisgarhi                           |           | hne       |           |
| Kroatisch                               | hr        | hrv       | hrv       |
| Ungarisch                               | hu        | hun       | hun       |
| Armenisch                               | hy        | hye       | arm       |
| Igbo                                    | ig        | ibo       | ibo       |
| Iloko                                   |           | ilo       |           |
| Indonesisch                             | id        | ind       | ind       |
| Isländisch                              | is        | isl       | ice       |
| Italienisch                             | it        | ita       | ita       |
| Javanisch                               | jv        | jav       | jav       |
| Japanisch                               | ja        | jpn       | jpn       |
| Kabylisch                               |           | kab       |           |
| Kachin                                  |           | kac       |           |
| Kamba                                   |           | kam       |           |
| Kannada                                 | kn        | kan       | kan       |
| Kaschmirisch                            | ks        | kas       | kas       |
| Georgisch                               | ka        | kat       | geo       |
| Zentralkanuri                           |           | knc       |           |
| Kasachisch                              | kk        | kaz       | kaz       |
| Kabiyé                                  |           | kbp       |           |
| Kabuverdianu                            |           | kea       |           |
| Khmer                                   | km        | khm       | khm       |
| Kikuyu                                  | ki        | kik       | kik       |
| Kinyarwanda                             | rw        | kin       | kin       |
| Kirgisisch                              | ky        | kir       | kir       |
| Kimbundu                                |           | kmb       |           |
| Nordkurdisch                            |           | kmr       |           |
| Kikongo                                 | kg        | kon       | kon       |
| Koreanisch                              | ko        | kor       | kor       |
| Laotisch                                | lo        | lao       | lao       |
| Ligurisch                               |           | lij       |           |
| Limburgisch                             | li        | lim       | lim       |
| Lingala                                 | ln        | lin       | lin       |
| Litauisch                               | lt        | lit       | lit       |
| Lombardisch                             |           | lmo       |           |
| Lettgallisch                            |           | ltg       |           |
| Luxemburgisch                           | lb        | ltz       | ltz       |
| Tschiluba                               |           | lua       |           |
| Luganda                                 | lg        | lug       | lug       |
| Luo                                     |           | luo       | luo       |
| Lushai                                  |           | lus       | lus       |
| Lettisch                                | lv        | lvs       | lav       |
| Magahi                                  |           | mag       | mag       |
| Maithili                                |           | mai       | mai       |
| Malayalam                               | ml        | mal       | mal       |
| Marathi                                 | mr        | mar       | mar       |
| Minangkabauisch                         |           | min       | min       |
| Mazedonisch                             | mk        | mkd       | mac       |
| Plateau-Malagasy                        |           | plt       | plt       |
| Maltesisch                              | mt        | mlt       | mlt       |
| Meitei                                  |           | mni       | mni       |
| Chalcha-Mongolisch                      |           | khk       | khk       |
| Mossi                                   |           | mos       | mos       |
| Maori                                   | mi        | mri       | mao       |
| Burmesisch                              | my        | mya       | bur       |
| Niederländisch                          | nl        | nld       | dut       |
| Norwegisch (Nynorsk) | nn        | nno       | nno       |
| Norwegisch (Bokmål)  | nb        | nob       | nob       |
| Nepali                                  |           | npi       | npi       |
| Nord-Sotho                              |           | nso       | nso       |
| Nuer                                    |           | nus       | nus       |
| Chichewa                                | ny        | nya       | nya       |
| Okzitanisch                             | oc        | oci       | oci       |
| West-Zentral-Oromo                      |           | gaz       | gaz       |
| Odia                                    |           | ory       | ory       |
| Pangasinensisch                         |           | pag       | pag       |
| Panjabi                                 | pa        | pan       | pan       |
| Papiamentu                              |           | pap       | pap       |
| Persisch                                | fa        | pes       | per       |
| Polnisch                                | pl        | pol       | pol       |
| Portugiesisch                           | pt        | por       | por       |
| Dari                                    |           | prs       | prs       |
| Südpaschto                              |           | pbt       | pbt       |
| Quechua                                 |           | quy       | quy       |
| Rumänisch                               | ro        | ron       | rum       |
| Rundi                                   | rn        | run       | run       |
| Russisch                                | ru        | rus       | rus       |
| Sango                                   | sg        | sag       | sag       |
| Sanskrit                                | sa        | san       | san       |
| Santali                                 |           | sat       | sat       |
| Sizilianisch                            |           | scn       | scn       |
| Shan                                    |           | shn       | shn       |
| Singhalesisch                           | si        | sin       | sin       |
| Slovakisch                              | sk        | slk       | slo       |
| Slowenisch                              | sl        | slv       | slv       |
| Samoanisch                              | sm        | smo       | smo       |
| Shona                                   | sn        | sna       | sna       |
| Sindhi                                  | sd        | snd       | snd       |
| Somalisch                               | so        | som       | som       |
| Süd-Sotho                               | st        | sot       | sot       |
| Spanisch                                | es        | spa       | spa       |
| Toskisch                                | sq        | als       | als       |
| Sardisch                                | sc        | srd       | srd       |
| Serbisch                                | sr        | srp       | srp       |
| Siswati                                 | ss        | ssw       | ssw       |
| Sundanesisch                            | su        | sun       | sun       |
| Schwedisch                              | sv        | swe       | swe       |
| Swahili                                 | sw        | swh       | swh       |
| Schlesisch                              | szl       | szl       | szl       |
| Tamilisch                               | ta        | tam       | tam       |
| Tatarisch                               | tt        | tat       | tat       |
| Telugu                                  | te        | tel       | tel       |
| Tadschikisch                            | tg        | tgk       | tgk       |
| Tagalog                                 | tl        | tgl       | tgl       |
| Thai                                    | th        | tha       | tha       |
| Tigrinja                                | ti        | tir       | tir       |
| Tamaseq                                 | tmh       | taq       | taq       |
| Tok Pisin                               | tpi       | tpi       | tpi       |
| Setswana                                | tn        | tsn       | tsn       |
| Tsonga                                  | ts        | tso       | tso       |
| Turkmenisch                             | tk        | tuk       | tuk       |
| Tumbuka                                 | tum       | tum       | tum       |
| Türkisch                                | tr        | tur       | tur       |
| Twi                                     | tw        | twi       | twi       |
| Zentralatlas-Tamazight                  | tzm       | tzm       | tzm       |
| Uigurisch                               | ug        | uig       | uig       |
| Ukrainisch                              | uk        | ukr       | ukr       |
| Umbundu                                 | umb       | umb       | umb       |
| Urdu                                    | ur        | urd       | urd       |
| Usbekisch                               | uz        | uzn       | uzn       |
| Venetisch                               | vec       | vec       | vec       |
| Vietnamesisch                           | vi        | vie       | vie       |
| Waray                                   | war       | war       | war       |
| Wolof                                   | wo        | wol       | wol       |
| Xhosa                                   | xh        | xho       | xho       |
| Jiddisch                                | yi        | ydd       | yid       |
| Yoruba                                  | yo        | yor       | yor       |
| Kantonesisch                            | zh        | yue       | yue       |
| Chinesisch                              | zh        | zho       | chi       |
| Malaiisch                               | ms        | zsm       | zsm       |
| Zulu                                    | zu        | zul       | zul       |
