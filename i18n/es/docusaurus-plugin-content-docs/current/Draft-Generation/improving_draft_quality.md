---
title: Mejorar la calidad de los borradores
sidebar_position: 6
slug: /improving-draft-quality
---

## Factores que afectuan la calidad de los borradores

Sólo los traductores humanos pueden decidir si un borrador satisface las necesidades de un equipo. Sin embargo, es útil entender algunos factores que pueden influir en la calidad de un borrador generado.

#### Cantidad y calidad de los ejemplos lingüísticos emparejados («datos de entrenamiento»)

- Cuantos más ejemplos haya, mejor será la calidad del borrador.
- Ejemplos que son bien comprobados y consistentes mejoran la calidad de los borradores.
- Ejemplos que son relevantes para el libro o los libros que se redactarán mejoran la calidad del borrador; por ejemplo, incluir ejemplos en el mismo género o con un contenido similar suele ser útil.

#### Relación entre la lengua de origen y la lengua de destino

- Una relación lingüística más estrecha y una concordancia tipológica a menudo dan lugar a una mejor calidad del borrador.

#### Relación entre el texto de origen y los textos de destino

- Cuando la traducción sigue fielmente el texto de referencia, esto puede contribuir a que el entrenamiento del modelo sea más satisfactorio y a mejorar la calidad del borrador.
- Dado que una retrotraducción sigue fielmente el texto, incluirla en la lengua original como segundo texto de referencia puede mejorar la calidad.
- Un proyecto que incluye muchas explicaciones no encontradas en el texto original puede haber disminuido la calidad.

#### Representación de la lengua de origen en el modelo lingüístico

- El uso de una lengua de origen con abundantes recursos (una lengua moderna importante con numerosos ejemplos en el modelo de lenguaje subyacente) puede mejorar la calidad del borrador.

#### Características del proyecto en cuestión

- Caracteres desconocidos para el modelo de lenguaje subyacente puede reducir la calidad del borrador.
- Las lenguas altamente aglutinantes y aquellas en las que no se separan las palabras pueden presentar una menor calidad en el borrador.
- Un proyecto en el que la traducción se realice a nivel de párrafo o que utilice muchos fragmentos largos de verso puede presentar una menor calidad en el borrador.

## Mejorar la calidad del borrador {#92f8d5c800084e4eb113511f74e26927}

Aquí tienes algunas ideas para mejorar la calidad del borrador. No todas estas opciones serán viables o pertinentes para todos los proyectos.

- Utiliza la mayor cantidad posible de texto bíblico traducido para entrenar el modelo.
- Considera la posibilidad de subir un archivo con frases emparejadas adicionales en los idiomas de origen y de destino. Esto se puede hacer desde la página **Configurar las fuentes**.
- Pruebe los diferentes textos de referencia, incluyendo los idiomas más altos o más estrechamente relacionados con las fuentes.
- Incluye una retrotraducción al idioma de origen como segundo texto de referencia.
- Corrige cualquier inconsistencia frecuente en la ortografía, la mecanografía o el vocabulario de la traducción.
- Continúa con la traducción manual y vuelve a generar un borrador de prueba cuando se haya completado la traducción de más pasajes de las Escrituras.
- Consulta la nota sobre la [generación incremental de borradores](/generating-a-draft#select-the-books-to-draft) y plantéate utilizar este método para libros largos o al iniciarte en un nuevo género.

## Aviso sobre la calidad del borrador {#9a12a839f3634e75acd511f4b426eb86}

Scripture Forge utiliza un sistema de clasificación automatizado para evaluar la calidad de los borradores y mostrará una advertencia a los usuarios si la calidad estimada de un borrador generado es muy baja. Esto podría indicar que hay un error en la configuración que impidió que el entrenamiento del modelo se realizara correctamente. Consulte las Preguntas Frecuentes para más información. Algunos borradores pueden ser de baja calidad aunque no aparezcan señalados por la advertencia. Es importante revisar con atención la calidad de cada borrador.
