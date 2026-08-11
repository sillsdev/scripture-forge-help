---
title: Generating a Draft
sidebar_position: 3
slug: /generating-a-draft
---

import ReactPlayer from "react-player";

<div class="player-wrapper"><ReactPlayer controls url="https://youtu.be/binHoeAGGvU" /></div>

## Generating a draft

Once your project has been activated and sources have been configured, click the "Generate draft" button to get started:

![](./generate_draft_button.png)

### Confirm the project configuration

On the first screen, review the configured sources and language codes and verify that they are correct. Then go to the next step.

:::note

If you use a separate Paratext project to store AI-generated drafts, double check that your main working translation project is listed in the **Target language data** section. Drafts must be generated from your main project so that model can learn from your completed translation work.

:::

![](./generate_draft_confirm_sources.png)

### Select the books to draft

On the second step, select the books you want translated. If the book you want to draft does not exist in your Paratext project, you will need to create the book in Paratext first. In general we suggest drafting one book at a time, though if you are drafting smaller books, you may want to draft several at a time. For long books, consider generating a new draft after completing a significant portion of the book. 

![](./generate_draft_select_books_to_draft.png)

:::note

If you select a book that is at least 12 chapters in length and has some text already, you will see the option to select which chapters you want to draft. If you select to draft only some chapters, you can choose some or all of the remaining chapters in the next step for training the model. 

[new screenshot needed: selecting which chapters in a book to draft]

:::

:::tip

When using draft generation early in the life of a project, we recommend starting with the gospels and Acts, and generating a new draft each time 10-12 new chapters are complete. When beginning work on poetic books, we recommend generating a new draft after about 30 chapters of Psalms or 15 chapters of Proverbs. Recommendations are not yet available for all books. 

:::

### Select the books to train the language model

On the next step, select the books to use to train the language model, both in your main project, and in the reference projects. **Choose all the books in your project that have been adequately reviewed. While they don't need to be consultant-checked, they should be accurate translations of the source book.**

![](./generate_draft_select_books_to_train.png)

:::note

If you selected to draft only some chapters of a book in the previous step, you can choose to include all or part of the remaining chapters in training. Any chapters selected to draft will not be available for training.

[new screenshot needed: selecting which chapters in a book to use for training]

:::

### Confirm your selections

On the final step, review the books you selected to train the model, and the books you selected to draft. If you need to make any changes, you can go to the previous steps. Once you are happy with your selections, click the "Generate draft" button to start the process.

![](./generate_draft_summary.png)
