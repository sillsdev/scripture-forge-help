---
title: "Préparation de la génération d'une ébauche "
sidebar_position: 2
slug: /preparing-for-ai-drafting
---

## Inscrivez-vous pour l'ébauche automatique. {#c01e77600a3b440ead3f1b816837d614}

Pour générer des ébauches dans la Forge des Écritures, cliquez sur le bouton « Générer une ébauche  » dans le menu principal. Cliquez ensuite sur le bouton "S'inscrire à l'ébauche", et remplissez le formulaire qui s'ouvre, pour avoir accès à votre projet. Les projets de retraduction sont activés par défaut et n'ont pas besoin de remplir le formulaire.

:::note

Si vous avez créé un projet Paratext séparé juste pour stocker les ébauches générées, assurez-vous de vous inscrire à partir de votre projet de traduction principal. Ne pas vous inscrire à partir du projet de stockage. Les ébauches peuvent être enregistrées dans un autre projet, mais elles doivent être générées à partir de votre projet principal afin que le modèle apprenne de votre travail de traduction terminé.

:::

![](./sign_up_for_drafting.png)

Après avoir rempli le formulaire, L'équipe d'intégration de l'Écriture Forge examinera votre demande et travaillera pour trouver les meilleurs paramètres pour votre projet. Vous recevrez une ou plusieurs ébauches à examiner. Si vous décidez que la génération de l'ébauche est correcte pour votre projet, l'équipe activera la rédaction de votre projet et vous guidera dans le processus de sélection des paramètres qui ont été trouvés les meilleurs.

## Configuration d'ébauche  {#26e1244e99c0459bad277d7cff4417b8}

Une fois que la rédaction de votre projet a été activée, le bouton « S'inscrire pour ébaucher » sera remplacé par le bouton « Configurer les sources ». Cliquez sur ce bouton pour sélectionner les projets qui seront utilisés comme source de votre ébauche .

![](./configure_sources_button.png)

### Choix des projets de référence

Le projet de référence est utilisé pour la formation du modèle linguistique. Généralement, c'est le projet auquel vous faites référence le plus souvent lorsque vous traduisez, mais dans certains cas, vous pouvez obtenir de meilleurs résultats en utilisant un projet différent. Certains projets peuvent sélectionner un deuxième projet de référence. Un cas d'utilisation courant est de sélectionner votre traduction de retour comme deuxième projet de référence.

Chaque projet est différent, donc suivez les instructions que vous avez reçues de l'équipe d'intégration.

![](./configure_sources_draft_reference.png)

### Adding training data

Scripture Forge uses your project's completed translation to train the language model. To add more training data, upload a spreadsheet under **Additional training data (optional)**. Put a source-language sentence in the first column and its translation into your project's language in the second column of each row.

### Choix du projet source

Under **Source**, select the project you want the draft to be translated from. Ceci peut être un projet Paratext ou une ressource de bibliothèque biblique numérique. Commencez à taper le nom du projet (ou du nom abrégé du projet), et la liste filtrera pour ne montrer que les projets qui correspondent. Click on the project you want to use as a source.

![](./configure_sources_draft_source.png)

### Confirmation des langues

Check that the language code shown for each project or resource matches the language of its text. You can change a project's language code in Paratext under **Project Settings > Project Properties > Language**.

Once the codes are correct, tick **All the language codes are correct** and click **Save & sync**. When the projects have finished syncing, click **Close** to return to the **Generate draft** page.

![](./configure_sources_confirm_languages.png)