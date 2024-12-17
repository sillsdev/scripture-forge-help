---
title: Comprendre l'ébauche
sidebar_position: 2
slug: /generating-drafts
---

## Introduction {#ad165caedac347798432de75e4305252}

L'équipe de SIL International spécialisée dans le traitement du langage naturel a mis au point un outil qui peut aider à la traduction de la Bible en créant une première ébauche que les traducteurs peuvent éditer et affiner. Depuis le 1er janvier 2024, cet outil peut être utilisé dans [Scripture Forge] (https://scriptureforge.org/), une plateforme d'édition des Écritures étroitement intégrée à [Paratext] (https://paratext.org/).

Toutes les ébauches qui ont été créés contiennent des erreurs qui doivent être corrigées par l'équipe de traduction. Pour certains projets, la qualité sera trop faible pour être utile. Cependant, des tests de terrain approfondis ont montré qu'un nombre significatif d'équipes trouvent que les ébauches sont très utiles dans leur travail, et de qualité suffisante pour servir de point de départ pour que l'équipe puisse le modifier.

En fin de compte, la mesure du succès des projets est dans leur utilité en tant qu'outil pour aider l'équipe de traduction dans leur travail, pas leur capacité à être autonome en tant que produit fini.

## Comment ça marche {#bd8a69c7ed904125897b4ee26dcae489}

Pour utiliser l’outil efficacement, il est important de comprendre comment il fonctionne. Les ébauches sont créées en utilisant un processus en deux étapes:

1. Apprenez la langue.
2. Traduire le texte.

L'étape la plus importante est la première, l'apprentissage de la langue. La qualité du projet qui est créé dépend presque entièrement du degré de réussite de cette étape.

Le système apprend en voyant la même phrase écrite en plusieurs langues, une dans une langue qu'elle comprend déjà, et une dans la langue dans laquelle vous traduisez.

Le point le plus important à retenir est que ces phrases doivent dire la même chose dans les deux langues. C'est le même principe qui a permis aux érudits d'apprendre l'hiéroglyphe à partir de la pierre Rosetta : le même texte a été écrit en trois langues différentes, permettant la comparaison entre un langage qui était déjà compris et un langage qui ne l'était pas.

Le texte qui est disponible dans la langue à partir de laquelle vous traduisez et dans laquelle vous traduisez est connu sous le nom de « texte parallèle ». En général, plus vous avez de texte parallèle, plus le système apprendra la langue. Pour la plupart des projets, ce texte parallèle sera votre texte de référence et le travail de traduction que vous avez déjà terminé. Pour l'instant, nous vous recommandons d'avoir au moins le Nouveau Testament traduit.

## Exemple de cas d'utilisation {#937c1db4b24d4e85bfc2acc489bf456b}

### Un exemple basique {#9165ff8c10564a7fa67c3375f62de85e}

Supposons qu'une équipe de traduction de la Bible soit en train de traduire la Bible dans une langue locale, en utilisant le NIV anglais comme texte de référence. L'équipe a achevé l'ensemble du Nouveau Testament et commence à travailler sur la Genèse.
Le système générerait un projet comme suit:

1. Comparez le Nouveau Testament anglais avec la langue locale du Nouveau Testament, afin d'apprendre la langue.
2. Ayant appris la langue, traduire la Genèse de l'anglais NIV dans la langue locale.

Après avoir généré le livre de Genèse, l'équipe éditait l'ébauche pour corriger les erreurs. Ensuite, ils seraient en mesure de générer une ébauche du prochain livre sur lequel ils prévoient travailler, et le système utiliserait la traduction de la Genèse pour améliorer la qualité de la prochaine ébauche.

### Un exemple plus complexe {#e6ec52fc004a41c195617bbcc3bb7f84}

Dans le premier exemple, l'équipe utilisait le NIV anglais comme texte de référence, et le système a appris la langue en comparant l'anglais NIV avec la langue locale Nouveau Testament. Cependant, dans de nombreux cas, une ébauche de meilleure qualité peut être généré en utilisant un texte différent de celui dont l'équipe est en train de traduire.

Par exemple, il est souvent possible d'améliorer la qualité du projet en utilisant une rétro-traduction de la langue locale dans la langue source.  Une rétro-traduction est généralement beaucoup plus littérale qu'une traduction normale, et permet donc au système de comprendre plus facilement comment la langue locale carte à l'anglais. Dans cet exemple, le système génère une ébauche comme suit :

1. Comparez la rétro-traduction en anglais avec la langue locale New Testament, afin d'apprendre la langue.
2. Ayant appris la langue, traduire la Genèse de l'anglais NIV dans la langue locale.

Déterminer la configuration idéale pour un projet est un processus complexe, et ce n’est pas quelque chose que vous devrez apprendre. L’équipe de traitement du langage naturel de SIL développe des outils pour déterminer la configuration idéale et peut assister les équipes pendant le processus d’intégration.

### Générer des rétro-traductions {#8a64fbb8c7e741938cf5007358570d3d}

En plus de créer des ébauches dans la langue vernaculaire, le système peut également générer des rétro-traductions dans les langues source supportées. Afin de générer une ébauche de rétro-traducteur, l'équipe doit déjà avoir retraduit au moins quelques livres de la langue vernaculaire dans la langue source.

Dans cet exemple, supposons qu'une équipe a traduit les quatre évangiles dans la langue vernaculaire et a de retour traduit Matthew, Mark et Luc en anglais. Pour générer une ébauche de rétro-traduction de John, le système ferait ce qui suit :

1. Comparer les rétro-traductions en anglais de Matthew, Mark, et Luc avec les versions en langue vernaculaire de Matthew, Mark, et Luc pour apprendre la langue.
2. Ayant appris la langue, traduire John de la langue vernaculaire en anglais.

Les ébauches de rétro-traduction contiennent également des erreurs et doivent être modifiés, mais la qualité est généralement nettement plus élevée que pour les ébauches vernaculaires.

## Démarrage {#1ba56b4f36584ecb91b9f2208efec047}

La génération de l'ébauche du rétro-traduction est actuellement ouverte et disponible pour tous les utilisateurs de Paratext. La génération de l'ébauche dans le vernaculaire, en raison de la complexité de l'installation, nécessite qu'une équipe soit embarquée par l'équipe de traitement du langage naturel de la SIL. Veuillez remplir le [formulaire d'inscription de rédaction de traduction](https://app.smartsheet. om/b/form/305798a45a664d8585ac74e72241d8cc), et un membre de l'équipe évaluera si votre projet est un bon candidat pour la génération des ébauches.

Peu importe si vous générez des ébauches de rétro-traduction ou des ébauches vernaculaires, vous pouvez commencer par connecter votre projet Paratext à Scripture Forge en suivant ces étapes :

1. Connectez-vous à [Scripture Forge] (https://scriptureforge.org/), en utilisant vos identifiants Paratext.
2. Connectez votre projet Paratext en suivant le [Guide du projet Paratext](https://help.scriptureforge.org/connect-paratext-project). Lorsque vous connectez le projet, sélectionnez votre texte de référence comme source. Pour une rétro-traduction, le texte source doit être la langue vernaculaire.
3. Après avoir connecté votre projet, cliquez sur "Générer un e ébauche" dans la barre latérale.
4. Si vous produisez un projet en langue vernaculaire, vous ne pourrez pas aller plus loin par vous-même et vous devrez remplir le formulaire d'inscription à la rédaction de traduction en cliquant sur "S'inscrire à la rédaction". Si votre projet a déjà été intégré, ou si vous travaillez avec une rétro-traduction, cliquez sur "Générer une ébauche" pour lancer le processus.
5. Sélectionnez les livres que vous souhaitez traduire, puis les livres que vous souhaitez utiliser comme données d'entraînement.
6. Cliquez sur « Générer une ébauche » pour démarrer le processus.

Le processus de génération des ébauches peut prendre de plusieurs heures à plusieurs jours.

Une fois que vous avez une ébauche générée, vous pouvez prévisualiser l'ébauche et importer des chapitres individuels dans votre projet.

## Langues supportées pour la rédaction du rétro-traduction {#70c8aaa17b6f4b5783ff0f464f59700e}

Les ébauches de rétro-traduction peuvent être générés à partir de n'importe quelle langue, mais doivent être de retour traduits dans l'une des langues suivantes.

| Nom de la langue                        | ISO 639-1 | ISO 639-2 | ISO 639-3 |
| --------------------------------------- | --------- | --------- | --------- |
| Chinois                                 |           | ace       |           |
| Arabe mésopotamien                      |           | acm       |           |
| Ta'izzi-Adeni Arabic                    |           | acq       |           |
| Tunisian Arabic                         |           | aeb       |           |
| Africain (Afrikaans) | af        | afr       | afr       |
| Arabe Levantin du Sud                   |           | ajp       |           |
| Akan                                    | ak        | aka       |           |
| Amharic                                 | am        | amh       | amh       |
| Arabe du Nord Levantin                  |           | apc       |           |
| Standard Arabic                         | ar        | arb       | ara       |
| Arabe najdi                             |           | ars       |           |
| Arabe marocain                          |           | ary       |           |
| Arabe égyptien                          |           | arz       |           |
| Assamese                                | as        | asm       | asm       |
| Asturian                                |           | ast       |           |
| Awadhi                                  |           | awa       |           |
| Aymara                                  |           | ayr       |           |
| South Azerbaijani                       |           | azb       |           |
| North Azerbaijani                       |           | azj       |           |
| Bashkir                                 | ba        | bak       | bak       |
| Bambara                                 | bm        | bam       | bam       |
| Balinese                                |           | ban       |           |
| Belarusian                              | be        | bel       | bel       |
| Bemba                                   |           | bem       |           |
| Bengali                                 | bn        | ben       | ben       |
| Bhojpuri                                |           | bho       |           |
| Banjar                                  |           | bjn       |           |
| Tibetan                                 | bo        | bod       | tib       |
| Bosnian                                 | bs        | bos       | bos       |
| Buginese                                |           | bug       |           |
| Bulgarian                               | bg        | bul       | bul       |
| Catalan                                 | ca        | cat       | cat       |
| Cebuano                                 |           | ceb       |           |
| Czech                                   | cs        | ces       | cze       |
| Chokwe                                  |           | cjk       |           |
| Central Kurdish                         |           | ckb       |           |
| Crimean Turkish                         |           | crh       |           |
| Welsh                                   | cy        | cym       | wel       |
| Danish                                  | da        | dan       | dan       |
| German                                  | de        | deu       | ger       |
| Dinka                                   |           | dik       |           |
| Dyula                                   |           | dyu       |           |
| Dzongkha                                | dz        | dzo       | dzo       |
| Greek                                   | el        | ell       | gre       |
| English                                 | en        | eng       | eng       |
| Esperanto                               | eo        | epo       | epo       |
| Estonian                                | et        | est       | est       |
| Basque                                  | eu        | eus       | baq       |
| Ewe                                     | ee        | ewe       | ewe       |
| Faroese                                 | fo        | fao       | fao       |
| Fijian                                  | fj        | fij       | fij       |
| Finnish                                 | fi        | fin       | fin       |
| Fon                                     |           | fon       |           |
| French                                  | fr        | fra       | fre       |
| Friulian                                |           | fur       |           |
| Nigerian Fulfulde                       |           | fuv       |           |
| Scottish Gaelic                         | gd        | gla       | gla       |
| Irish                                   | ga        | gle       | gle       |
| Galicien                                | gl        | glg       | glg       |
| Guarani                                 | gn        | grn       | grn       |
| Gujarati                                | gu        | guj       | guj       |
| Créole haïtien                          |           | hat       |           |
| Hausa                                   | ha        | hau       | hau       |
| Hébreu                                  | he        | heb       | heb       |
| Hindi                                   | hi        | hin       | hin       |
| Chhattisgarhi                           |           | hne       |           |
| Croate                                  | hr        | hrv       | hrv       |
| Hungarian                               | hu        | hun       | hun       |
| Armenian                                | hy        | hye       | arm       |
| Igbo                                    | ig        | ibo       | ibo       |
| Iloko                                   |           | ilo       |           |
| Indonésien                              | id        | ind       | ind       |
| Icelandic                               | is        | isl       | ice       |
| Les Italiens                            | it        | ita       | ita       |
| Javanese                                | jv        | jav       | jav       |
| Japanese                                | ja        | jpn       | jpn       |
| Kabyle                                  |           | kab       |           |
| Kachin                                  |           | kac       |           |
| Kamba                                   |           | kam       |           |
| Kannada                                 | kn        | kan       | kan       |
| Kashmiri                                | ks        | kas       | kas       |
| Georgian                                | ka        | kat       | geo       |
| Central Kanuri                          |           | knc       |           |
| Kazakh                                  | kk        | kaz       | kaz       |
| Kabiye                                  |           | kbp       |           |
| Kabuverdianu                            |           | kea       |           |
| Khmer                                   | km        | khm       | khm       |
| Kikuyu                                  | ki        | kik       | kik       |
| Kinyarwanda                             | rw        | kin       | kin       |
| Kyrgyz                                  | ky        | kir       | kir       |
| Kimbundu                                |           | kmb       |           |
| Northern Kurdish                        |           | kmr       |           |
| Kongo                                   | kg        | kon       | kon       |
| Korean                                  | ko        | kor       | kor       |
| Lao                                     | lo        | lao       | lao       |
| Ligurian                                |           | lij       |           |
| Limburgish                              | li        | lim       | lim       |
| Lingala                                 | ln        | lin       | lin       |
| Lithuanian                              | lt        | lit       | lit       |
| Lombard                                 |           | lmo       |           |
| Latgalian                               |           | ltg       |           |
| Luxembourgish                           | lb        | ltz       | ltz       |
| Luba-Lulua                              |           | lua       |           |
| Luganda                                 | lg        | lug       | lug       |
| Luo                                     |           | luo       | luo       |
| Lushai                                  |           | lus       | lus       |
| Latvian                                 | lv        | lvs       | lav       |
| Magahi                                  |           | mag       | mag       |
| Maithili                                |           | mai       | mai       |
| Malayalam                               | ml        | mal       | mal       |
| Marathi                                 | mr        | mar       | mar       |
| Minangkabau                             |           | min       | min       |
| Macedonian                              | mk        | mkd       | mac       |
| Plateau Malagasy                        |           | plt       | plt       |
| Maltese                                 | mt        | mlt       | mlt       |
| Manipuri                                |           | mni       | mni       |
| Halh Mongolian                          |           | khk       | khk       |
| Mossi                                   |           | mos       | mos       |
| Maori                                   | mi        | mri       | mao       |
| Burmese                                 | mon       | mya       | bur       |
| Dutch                                   | nl        | nld       | dut       |
| Norwegian Nynorsk                       | nn        | nno       | nno       |
| Norwegian Bokmål                        | nb        | nob       | nob       |
| Nepali                                  |           | npi       | npi       |
| Northern Sotho                          |           | nso       | nso       |
| Nuer                                    |           | nus       | nus       |
| Chichewa                                | ny        | nya       | nya       |
| Occitan                                 | oc        | oci       | oci       |
| West Central Oromo                      |           | gaz       | gaz       |
| Odia                                    |           | ory       | ory       |
| Pangasinan                              |           | pag       | pag       |
| Punjabi                                 | pa        | pan       | pan       |
| Papiamento                              |           | pap       | pap       |
| Persian                                 | fa        | pes       | per       |
| Polish                                  | pl        | pol       | pol       |
| Portuguese                              | pt        | por       | por       |
| Dari                                    |           | prs       | prs       |
| Southern Pashto                         |           | pbt       | pbt       |
| Quechua                                 |           | quy       | quy       |
| Romanian                                | ro        | ron       | rum       |
| Rundi                                   | rn        | run       | run       |
| Russian                                 | ru        | rus       | rus       |
| Sango                                   | sg        | sag       | sag       |
| Sanskrit                                | sa        | san       | san       |
| Santali                                 |           | sat       | sat       |
| Sicilian                                |           | scn       | scn       |
| Shan                                    |           | shn       | shn       |
| Sinhala                                 | si        | sin       | sin       |
| Slovak                                  | sk        | slk       | slo       |
| Slovenian                               | sl        | slv       | slv       |
| Samoan                                  | sm        | smo       | smo       |
| Shona                                   | sn        | sna       | sna       |
| Sindhi                                  | sd        | snd       | snd       |
| Somali                                  | so        | som       | som       |
| Sotho, Southern                         | st        | sot       | sot       |
| Spanish                                 | es        | spa       | spa       |
| Tosk Albanian                           | sq        | als       | als       |
| Sardinian                               | sc        | srd       | srd       |
| Serbian                                 | sr        | srp       | srp       |
| Swazi                                   | ss        | ssw       | ssw       |
| Sundanese                               | su        | sun       | sun       |
| Swedish                                 | sv        | swe       | swe       |
| Swahili                                 | sw        | swh       | swh       |
| Silesian                                | szl       | szl       | szl       |
| Tamil                                   | ta        | tam       | tam       |
| Tatar                                   | tt        | tat       | tat       |
| Telugu                                  | te        | tel       | tel       |
| Tajik                                   | tg        | tgk       | tgk       |
| Tagalog                                 | tl        | tgl       | tgl       |
| Thai                                    | th        | tha       | tha       |
| Tigrinya                                | ti        | tir       | tir       |
| Tamashek                                | tmh       | taq       | taq       |
| Tok Pisin                               | tpi       | tpi       | tpi       |
| Tswana                                  | tn        | tsn       | tsn       |
| Tsonga                                  | ts        | tso       | tso       |
| Turkmen                                 | tk        | tuk       | tuk       |
| Tumbuka                                 | tum       | tum       | tum       |
| Turkish                                 | tr        | tur       | tur       |
| Twi                                     | tw        | twi       | twi       |
| Tamazight                               | tzm       | tzm       | tzm       |
| Uighur                                  | ug        | uig       | uig       |
| Ukrainian                               | uk        | ukr       | ukr       |
| Umbundu                                 | umb       | umb       | umb       |
| Urdu                                    | ur        | urd       | urd       |
| Uzbek                                   | uz        | uzn       | uzn       |
| Venetian                                | vec       | vec       | vec       |
| Vietnamienne                            | vi        | vie       | vie       |
| Waray                                   | war       | war       | war       |
| Wolof                                   | wo        | wol       | wol       |
| Xhosa                                   | xh        | xho       | xho       |
| Yiddish                                 | yi        | ydd       | yid       |
| Yoruba                                  | yo        | yor       | yor       |
| Cantonais                               | zh        | yue       | yue       |
| Chinois                                 | zh        | zho       | chi       |
| Malay                                   | ms        | zsm       | zsm       |
| Zulu                                    | zu        | zul       | zul       |
