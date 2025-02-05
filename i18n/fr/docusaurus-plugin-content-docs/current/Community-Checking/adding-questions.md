---
title: Adding Questions
sidebar_position: 1
slug: /adding-questions
---

import ReactPlayer from "react-player";

## Ajouter des Questions au projet {#1850d745ac9e80e09444cb3564752e31}

Pour obtenir des commentaires sur votre traduction, vous devrez ajouter des questions de vérification de la compréhension. Vous pouvez importer des questions créées par quelqu'un d'autre ou créer vos propres questions.

:::note

Actuellement, le seul moyen d'obtenir des commentaires de la part des vérificateurs de la communauté est de poser des questions de vérification. Certains administrateurs de projets ont demandé que les vérificateurs puissent ajouter des commentaires au texte même en l'absence de question. Si c'est quelque chose qui peut être utile pour votre projet, veuillez [exprimer votre soutien à la proposition](https://community.scripture.software.sil.org/t/feature-request-comments-to-any-bible-verse-chosen/2506/6) sur le [site de la communauté Scripture Forge](https://community.scripture.software.sil.org/).

:::

<ReactPlayer controls url="https://youtu.be/J-led5En3D8" />

### Créer des questions individuellement dans Scripture Forge {#1850d745ac9e8031908ef693ff578eec}

Pour ajouter des questions à votre projet, cliquez sur **Vue d'ensemble** dans la section **Vérification par la communauté** dans la barre latérale de navigation. Clique ensuite sur le bouton **Ajouter une question**. Une boîte de dialogue s'ouvrira pour vous permettre de créer une question.

Une question peut s'appliquer à un seul verset, ou à plusieurs versets. Tapez une référence dans la boîte de dialogue**Référence biblique**, ou cliquez sur la flèche du menu déroulant pour sélectionner un livre, un chapitre et un verset. Si vous souhaitez que la question s'étende sur plusieurs versets, saisissez une référence de fin dans la deuxième case. Une fois que vous avez saisi une référence, le texte s'affiche, avec, en surbrillance, les versets que vous avez choisis.

Saisissez votre question dans la case **Question** . Si vous souhaitez ajouter une version audio de la question, cliquez sur le bouton **Enregistrer** . Il se peut que vous soyez invité à donner l'autorisation d'accéder à votre microphone. Lorsque vous avez terminé l'enregistrement, cliquez sur **Arrêter l'enregistrement**. Vous pouvez ensuite écouter l'enregistrement pour voir comment il sonne. Cliquez sur le bouton **Essayer à nouveau** si vous n'êtes pas satisfait. Vous pouvez également télétransmettre un fichier audio au lieu d'enregistrer, si vous préférez.

Cliquez sur **Sauver** et votre question sera ajoutée à la liste des questions de vérification par la communauté.

![](./1916935940.png)

### Importer des questions à partir d'une feuille de calcul {#1850d745ac9e8085960dd88b648f0c7a}

Créer des questions une par une peut s'avérer fastidieux, c'est pourquoi nous avons également prévu la possibilité d'importer des questions à partir d'une feuille de calcul. Vous pouvez utiliser un programme tel que Microsoft Excel, Google Sheets ou LibreOffice Calc pour créer ou modifier une liste de questions. Si vous recherchez un ensemble de questions préétablies, vous pouvez consulter le site [unfoldingWord® Translation Questions](https://git.door43.org/unfoldingWord/en_tq). Si vous allez sur la page liée et que vous cliquez sur l'un des fichiers, vous pouvez le télécharger, l'ouvrir en tant que feuille de calcul et modifier la liste des questions.

Voici un exemple de ce à quoi doivent ressembler les lignes de votre feuille de calcul pour pouvoir l'importer dans Scripture Forge :

| Référence                 | Question                                                                  |
| ------------------------- | ------------------------------------------------------------------------- |
| HEB 1:1   | À quoi fait référence l'expression "nos pères" ?                          |
| HEB 1:2   | Qu'est-ce que cela signifie que le Fils est "héritier de toutes choses" ? |
| HEB 1:2-3 | Qui est le "Fils" dont il est question dans ces versets ?                 |

La feuille de calcul peut comporter davantage de colonnes, mais aucune ne sera utilisée, à l'exception des colonnes "référence" et "question". Les fichiers TSV publiés par unfoldingWord sont dans un format légèrement différent, mais peuvent également être importés dans Scripture Forge.

:::note

La référence doit comporter le nom du livre abrégé de la même manière que Paratext abrège les noms de livres. Par exemple, **HEB 1:1** fonctionnera, mais **Hébreux 1:1** ne fonctionnera pas.

:::

Si vous avez besoin d'aide pour formater votre feuille de calcul correctement afin de pouvoir l'importer dans Scripture Forge, nous serons heureux de vous aider. Envoyez simplement un e-mail à [help@scriptureforge.org](mailto:help@scriptureforge.org).

1. Enregistrez votre feuille de calcul en tant que fichier CSV.
2. Ensuite, dans Scripture Forge, cliquez sur **Vue d'ensemble** sous la section **Vérification par la communauté** dans la barre latérale de navigation.
3. Cliquez ensuite sur le bouton **Importation en lots** . Une boîte de dialogue s'ouvrira vous demandant de choisir depuis où vous souhaitez importer les questions.
4. Cliquez sur **Importer à partir du fichier CSV** et sélectionnez le fichier.
   1. Si certaines lignes de votre fichier n'ont pas de référence et de question valides, un avertissement s'affichera pour vous indiquer que ces lignes seront ignorées.
   2. Dans le cas contraire, une liste de questions s'affichera.

### Importer toutes les questions {#3f10139da5904f1883acafad811b422c}

Pour importer toutes les questions du fichier CSV, procédez comme suit :

1. Cliquez sur la case à cocher en haut de la liste. Ceci sélectionnera toutes les questions.
2. Cliquez sur **Importer les questions sélectionnées**.

### Importer un sous-ensemble de questions {#f8f6b299154e4caca7aa04661a820efd}

Vous pouvez également filtrer pour avoir un sous-ensemble de questions :

1. Utilisez les cases **Référence de début** et **Référence de fin** pour spécifier les versets sur lesquels vous souhaitez que les questions commencent et se terminent.
2. Par exemple, si vous voulez seulement importer des questions pour Marc 5 :
   1. Indiquez **MRK 5:1** dans la case **Référence de début** .
   2. Indiquez **MRK 5:43** dans la case **Référence de fin** .
3. Cliquez sur la case à cocher en haut de la liste pour sélectionner toutes les questions. Seules les questions affichées seront sélectionnées.
4. Cliquez sur **Importer les questions sélectionnées**.

:::note

Il n'est pas nécessaire de se rappeler qu'il y a 43 versets dans Marc 5 pour filtrer tous les versets du chapitre. Si vous cliquez sur la flèche déroulante dans la boîte **Référence de fin**, une boîte de dialogue s'ouvrira pour vous permettre de sélectionner un livre, chapitre et verset. Une fois que vous sélectionnez Marc 5, la liste des versets de Marc 5 s'affiche, et vous pouvez sélectionner le dernier verset, qui est le verset 43. Vous pouvez également saisir **MRK 5:100** dans la case **Référence de fin** , et tous les versets de Marc 5 seront inclus, même s'il n'y a pas de verset 100 dans Marc 5.

:::

### Importation des questions depuis Transcelerator {#1ed2e353d94847a3861ad3a69d531aac}

[Transcelerator](https://software.sil.org/transcelerator/) est un plugin pour Paratext qui contient une banque de questions prêtes à l'emploi pour vérifier la compréhension dans plusieurs langues majeures. Ces questions peuvent être traduites dans Paratext, exportées vers Scripture Forge, puis importées dans Scripture Forge après synchronisation.

Pour importer des questions depuis Transcelerator:

1. Téléchargez et installez Transcelerator à partir de [software.sil.org/transcelerator/download](https://software.sil.org/transcelerator/download/).
2. Depuis Paratext, lancez Transcelerator.
3. Dans Transcelerator, ouvrez le menu **Fichier** et cliquez sur **Produire des fichiers Scripture Forge**.
4. Saisissez dans la colonne **Traduction** les traductions des questions en anglais que vous voulez utiliser. Pour chaque question qui est prête, cochez la case **Confirmée** pour ces questions.
5. Fermez Transcelerator et effectuez un envoyer recevoir avec Paratext.
6. Dans Scripture Forge, dans la barre latérale de navigation, cliquez sur **Synchroniser**. Sur la page qui s'ouvre, cliquez sur **Synchroniser** pour envoyer et recevoir les questions Transcelerator depuis Paratext.
7. Cliquez sur **Vue d'ensemble** sous la section **Vérification par la communauté** dans la barre de navigation latérale. Cliquez ensuite sur le bouton **Importation en lots** .
8. Une boîte de dialogue s'ouvrira vous demandant de choisir depuis où vous souhaitez importer les questions. Cliquez sur **Importer depuis Transcelerator**.
9. Sélectionnez les questions que vous souhaitez importer. Les étapes à suivre pour faire cela sont exactement les mêmes que dans la section ci-dessus intitulée **Importer des questions à partir d'une feuille de calcul**. Reportez-vous à cette section pour savoir comment filtrer les questions que vous souhaitez.
10. Cliquez sur **Importer les questions sélectionnées** et vos questions seront ajoutées au projet.

## Attacher un enregistrement audio du texte {#fd31ef9b6d74417099996e7dadb5068e}

Scripture Forge peut jouer un enregistrement audio de chaque passage pour les vérificateurs de la communauté. Pour ce faire, vous devrez téléverser un fichier audio et un fichier de synchronisation pour chaque chapitre. Les fichiers de synchronisation permettent à Scripture Forge de mettre en surbrillance chaque verset au fur et à mesure qu'il est prononcé.

### Enregistrement du texte {#1926abf6118c46bba16353d2ef85169f}

Scripture Forge prend en charge les fichiers audio aux formats .mp3 et .wav. Les fichiers de synchronisation sont pris en charge par HearThis, aeneas, Audacity et Adobe Audition.

L'une des options les plus simples est d'utiliser [HearThis](http://software.sil.org/hearthis) pour enregistrer la traduction. [Ce guide ](https://software.sil.org/downloads/r/scriptureappbuilder/Scripture-App-Builder-08-Using-HearThis-for-Audio-Recording.pdf) vous expliquera le processus d'enregistrement des écritures et de production des fichiers audio et de synchronisation. Ignorez les étapes à la fin concernant l'utilisation de Scripture App Builder.

Les [ressources](https://software.sil.org/scriptureappbuilder/resources/) de Scripture App Builder abordent des approches plus avancées, telles que l'utilisation de Glyssen pour un enregistrement audio dramatisé.

### Création de fichiers de synchronisation {#1850d745ac9e80c7b583c6d50193d7c9}

Si vous avez déjà enregistré des données audio, plusieurs options s'offrent à vous pour créer des données de synchronisation.

Vous pouvez générer automatiquement des fichiers de synchronisation à l'aide d'aeneas en suivant [ces instructions](https://software.sil.org/downloads/r/scriptureappbuilder/Scripture-App-Builder-07-Using-aeneas-for-Audio-Text-Synchronization.pdf).

Alternativement, vous pouvez créer manuellement des fichiers de minutage en utilisant Audacity en suivant [this guide](https://software.sil.org/downloads/r/scriptureappbuilder/Scripture-App-Builder-06-Using-Audacity-for-Audio-Text-Synchronization.pdf). Une autre option est Adobe Audition. Les données de synchronisation provenant d'Adobe Audition sont prises en charge dans les formats de temps décimal ou FPS. Nous ne prenons pas en charge le format « échantillons ».

### Joindre un fichier audio {#1850d745ac9e80668685c9ea58252d6b}

Pour télécharger des fichiers audio et synchronisation, cliquez sur **Questions & réponses**, accédez au chapitre auquel vous voulez attacher de l'audio, puis cliquez sur l'icône **Gérer l'audio** dans le coin supérieur droit. Cliquez sur **Parcourir les fichiers** et sélectionnez l'enregistrement audio et le fichier de synchronisation associé pour ce chapitre, puis cliquez sur **Enregistrer**.

![](./645317227.png)
