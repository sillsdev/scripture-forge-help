---
title: Generar un borrador
sidebar_position: 3
slug: /generating-a-draft
---

import ReactPlayer from "react-player";

<div class="player-wrapper"><ReactPlayer controls url="https://youtu.be/binHoeAGGvU" /></div>

## Generar un borrador

Una vez activado el proyecto y configuradas las fuentes, haga clic en el botón Generar borrador para empezar:

![](./generate_draft_button.png)

### Confirmar la configuración del proyecto

En la primera pantalla, revise las fuentes y los códigos de idioma configurados y compruebe que son correctos. A continuación, vaya al paso siguiente.

:::note

Si utilizas un proyecto Paratext independiente para almacenar los borradores generados por la IA, comprueba que tu proyecto de traducción de trabajo principal aparece en la sección **Datos del idioma de destino**. Los borradores deben generarse a partir de su proyecto principal para que el modelo pueda aprender de su trabajo de traducción terminado.

:::

![](./generate_draft_confirm_sources.png)

### Seleccione los libros para redactar

En el segundo paso, seleccione los libros que desea traducir. Si el libro que desea redactar no existe en su proyecto Paratext, tendrá que crear primero el libro en Paratext. En general, le sugerimos que redacte un libro a la vez, aunque si está redactando libros más pequeños, puede que le convenga redactar varios a la vez. For long books, consider generating a new draft after completing a significant portion of the book.

![](./generate_draft_select_books_to_draft.png)

:::note

<span id="selecting-chapters-to-draft" class="anchorWithStickyNavbar_LWe7">**Incremental Draft Generation:** If you select a book that is at least 12 chapters in length and contains some text already, you will see the option to select which chapters you want to draft. If you select to draft only some chapters, you will be able to choose some or all of the remaining chapters for training the model in the following step. Separate chapters with commas and use a dash for chapter ranges, for example: 1-10,25,40-50.</span>

![](./generate_draft_select_chapters_to_draft.png)

:::

:::tip

When using draft generation early in the life of a project, we recommend starting with the gospels and Acts, and generating a new incremental draft each time 8-10 more chapters are complete. See [Guidelines for New Testament Draft Generation](https://help.scriptureforge.org/new-testament-drafting). Specific recommendations for incremental drafting of Old Testament books are not available at this time. We suggest generating a new draft after translating each 1/3 of a long book to check for possible improvement.

:::

### Seleccione los libros para entrenar el modelo de idioma

En el siguiente paso, seleccione los libros a utilizar para formar el modelo de idioma, tanto en su proyecto principal como en los proyectos de referencia. **Elija todos los libros de su proyecto que hayan sido revisados adecuadamente. Aunque no es necesario que estén revisados por consultores, deben ser traducciones precisas del libro de origen.**

![](./generate_draft_select_books_to_train.png)

:::note

<span id="selecting-chapters-to-train" class="anchorWithStickyNavbar_LWe7">If you selected to draft only some chapters of a book in the previous step, you can choose to include all or part of the remaining chapters in training. Any chapters selected to draft will not be available for training. Separate chapters with commas and use a dash for chapter ranges, for example: 1-10,25,40-50.</span>

![](./generate_draft_select_chapters_to_train.png)

:::

### Confirme sus selecciones

En el último paso, revise los libros que seleccionó para entrenar el modelo y los que seleccionó para el borrador. Si necesita realizar algún cambio, puede volver a los pasos anteriores. Una vez que esté satisfecho con sus selecciones, haga clic en el botón "Generar borrador" para iniciar el proceso.

![](./generate_draft_summary.png)
