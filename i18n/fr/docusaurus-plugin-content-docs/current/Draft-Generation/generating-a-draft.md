---
title: Générer une ébauche
sidebar_position: 3
slug: /generating-a-draft
---

import ReactPlayer from "react-player";

<div class="player-wrapper"><ReactPlayer controls url="https://youtu.be/binHoeAGGvU" /></div>

## Générer une ébauche

Une fois que votre projet a été activé et que les sources ont été configurées, cliquez sur le bouton Générer l'ébauche pour démarrer :

![](./generate_draft_button.png)

### Confirmer la configuration du projet

Sur le premier écran, vérifiez les sources et les codes de langue configurés et vérifiez qu'ils sont corrects. Passons ensuite à l'étape suivante.

:::note

Si vous utilisez un projet Paratext séparé pour stocker les ébauches générées par l'IA, vérifiez que votre projet de traduction principal figure dans la section **Données de la langue cible**. Les ébauches doivent être générées à partir de votre projet principal afin que le modèle puisse tirer des enseignements de votre travail de traduction achevée.

:::

![](./generate_draft_confirm_sources.png)

### Sélectionnez les livres à ébaucher

Dans la deuxième étape, sélectionnez les livres que vous voulez traduire. Si le livre que vous voulez ébaucher n'existe pas dans votre projet Paratext, vous devrez d'abord créer le livre dans Paratext. En général, nous suggérons de rédiger un livre à la fois, mais si vous rédigez des livres plus petits, vous voudrez peut-être en rédiger plusieurs à la fois. For long books, consider generating a new draft after completing a significant portion of the book.

![](./generate_draft_select_books_to_draft.png)

:::note

<span id="selecting-chapters-to-draft" class="anchorWithStickyNavbar_LWe7">**Incremental Draft Generation:** If you select a book that is at least 12 chapters in length and contains some text already, you will see the option to select which chapters you want to draft. If you select to draft only some chapters, you will be able to choose some or all of the remaining chapters for training the model in the following step. Separate chapters with commas and use a dash for chapter ranges, for example: 1-10,25,40-50.</span>

![](./generate_draft_select_chapters_to_draft.png)

:::

:::tip

When using draft generation early in the life of a project, we recommend starting with the gospels and Acts, and generating a new incremental draft each time 8-10 more chapters are complete. See [Guidelines for New Testament Draft Generation](https://help.scriptureforge.org/new-testament-drafting). Specific recommendations for incremental drafting of Old Testament books are not available at this time. We suggest generating a new draft after translating each 1/3 of a long book to check for possible improvement.

:::

### Sélectionnez les livres pour former le modèle de langue

À l'étape suivante, sélectionnez les livres à utiliser pour former le modèle de langue, tant dans votre projet principal que dans les projets de référence. **Choisissez tous les livres de votre projet qui ont été correctement revus. Bien qu'ils n'aient pas besoin d'être vérifiés par un consultant, ils devraient être des traductions exactes du livre source.**

![](./generate_draft_select_books_to_train.png)

:::note

<span id="selecting-chapters-to-train" class="anchorWithStickyNavbar_LWe7">If you selected to draft only some chapters of a book in the previous step, you can choose to include all or part of the remaining chapters in training. Any chapters selected to draft will not be available for training. Separate chapters with commas and use a dash for chapter ranges, for example: 1-10,25,40-50.</span>

![](./generate_draft_select_chapters_to_train.png)

:::

### Confirme ta sélection

Lors de la dernière étape, consultez les livres que vous avez sélectionnés pour former le modèle, et les livres que vous avez sélectionnés pour ébaucher. Si vous devez apporter des modifications, vous pouvez passer aux étapes précédentes. Une fois que vous êtes satisfait de vos sélections, cliquez sur le bouton "Générer un brouillon" pour démarrer le processus.

![](./generate_draft_summary.png)
