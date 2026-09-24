---
title: Preguntas frecuentes
sidebar_position: 6
slug: /faq
---

## Preguntas sobre Scripture Forge {#1b30d745ac9e80a38ebef8610e57c100}

1. ¿Cómo encaja Scripture Forge en mis pasos de traducción?

   _Scripture Forge es una herramienta diseñada para ayudarle a navegar por la fase de redacción con mayor eficacia y rapidez, manteniendo al mismo tiempo la calidad de su trabajo. No sustituye a las etapas de traducción. En lugar de eso, considéralo un recurso que te ayudará a ser más productivo durante la redacción y el control comunitario._

2. ¿Guarda Scripture Forge una copia de seguridad de los datos de mi proyecto? ¿Quién es responsable de la seguridad de los datos?

   _Scripture Forge mantiene una versión del proyecto en servidores controlados por SIL, y es responsable de mantener dicho proyecto seguro. El proyecto también se sincroniza con su proyecto Paratext, que se almacena en los servidores de Paratext. Tenga en cuenta que los datos viajan a través de Internet cuando se conecta a la interfaz de Scripture Forge en línea._

3. ¿Cómo puedo obtener apoyo o ayuda del equipo de SF?

   _Puede utilizar los siguientes enlaces para ponerse en contacto con nosotros o buscar asistencia:_

   - **Aprendizaje y documentación:** [https://software.sil.org/ScriptureForge](https://software.sil.org/ScriptureForge) Y [https://help.scriptureforge.org](https://help.scriptureforge.org/)
   - **Informar de un problema:** [https://scriptureforge.freshdesk.com/support/tickets/new](https://scriptureforge.freshdesk.com/support/tickets/new) correo electrónico: help@scriptureforge.org
   - **Preguntas y soporte:** correo electrónico: help@scriptureforge.org

## Preguntas sobre las fuentes y el entrenamiento del modelo {#1b30d745ac9e80e791d9f0c3ee971c5c}

1. ¿Cómo puedo mejorar la calidad de mis borradores?

   _Hay dos formas principales de mejorar los borradores._

   - _El primero es añadir más datos al modelo de traducción. Puede hacerlo eligiendo más libros en el Paso 2 - "Seleccionar libros para entrenar". Cuantos más datos estén disponibles para la formación, mejores serán los resultados de los borradores._
   - _La segunda forma es mejorar la calidad de los datos en el Modelo de traducción. Puede hacerlo asegurándose de que los libros que ha elegido estén bien comprobados por la consistencia en áreas como la ortografía, la puntuación y el contenido. Cuanto mejor sea la calidad de los datos, mejor aprenderá el sistema a generar buenos borradores._
   - _Muchos equipos también se benefician del uso de una retrotraducción actualizada como fuente de formación adicional._

2. ¿Por qué quieres que configure una fuente de formación independiente que no sea mi fuente principal?

   _Si hay un texto que está más alineado con su traducción, puede que al modelo le resulte más fácil aprender las relaciones entre las dos lenguas. No siempre es necesaria una fuente de formación independiente, pero es una opción que ofrecemos_

3. ¿Cómo cambio la fuente o utilizo una versión diferente para entrenar el modelo de traducción?

   _Puede cambiar la fuente de su proyecto accediendo a Configuración y seleccionando la que desee como recurso en "Traducir"._

4. ¿Por qué el libro que quiero no aparece en mi lista de libros?

   _El libro debe existir tanto en el proyecto de origen como en el de destino en Paratext. Por favor, asegúrese de esto y luego ejecute un envío/recepción en Paratext y una sincronización en Scripture Forge para que Scripture Forge tenga la información más reciente de Paratext_

5. ¿Por qué aparece un signo de exclamación rojo cuando selecciono una nueva traducción de origen primario en la página de Configuración?

   _Significa que la configuración de la fuente no ha tenido éxito. Puede actualizar la página e intentarlo de nuevo_

## Preguntas sobre redacción {#1b30d745ac9e8095b256da102cecb88a}

1. ¿Cuánto tarda en generarse mi borrador?

   _Actualmente, la generación de los borradores tarda aproximadamente una hora y media, aunque a veces puede llevar mucho más tiempo, dependiendo de la disponibilidad del servidor y del número de libros solicitados. Si la generación del borrador tarda más de lo habitual, póngase en contacto con nosotros para comunicarnos el problema._

2. ¿Cómo sabré cuándo está hecho mi borrador?

   _Puedes activar la opción de recibir notificaciones por correo electrónico cuando finalice la generación de tu borrador, para que te avisen de inmediato. También puedes consultar la página «Generar borrador» para ver el estado. Cuando haya terminado, verás un mensaje similar a este:_

   ![](./267304602.png)

3. ¿Por qué mi libro sólo tiene el capítulo 1 en el proyecto?

   - _Añadir un borrador al proyecto ocurre sobre una base de capítulo por capítulo desde la pestaña "Borrador Generado" en la página Editar y revisar. Así, si sólo se añade un capítulo, será el único disponible en el proyecto. Otros capítulos tendrán que añadirse individualmente._
   - _Puede añadir el libro completo navegando a "Generar borrador" y encontrando el borrador que se ha generado. Haz clic en "Añadir a un proyecto" y elige el proyecto al que quieres agregarlo._

4. ¿Por qué mi botón dice "volver a añadir al proyecto"?

   _Si edita un capítulo después de "añadir al proyecto" y desea volver al borrador de SF sin editar, puede volver a importar el borrador original haciendo clic en el botón "Volver a añadir al proyecto"._

5. ¿Qué muestra la pestaña Historial?

   _Cuando realizas cambios en tu borrador, Scripture Forge guarda una versión de esos cambios a la que puedes acceder a través de la pestaña de historial. Puedes revertir tu proyecto a una versión anterior desde aquí haciendo clic en el botón "Restaurar esta versión"._

6. ¿Por qué se ha acortado la introducción de mi libro?

   _Scripture Forge utiliza el modelo NLLB para generar borradores. El NLLB es un modelo de frases, y su precisión es mayor con segmentos cortos de texto. Para garantizar la máxima precisión, hay un límite de 200 tokens (partes de palabra) por segmento traducido, y cualquier texto que supere ese límite se omite. Los versículos de las Escrituras se traducen uno por uno y rara vez superan este límite. Las introducciones de los libros que superen la extensión permitida se recortarán y solo se traducirá la primera parte._

## Preguntas sobre advertencias de calidad de borrador {#f47ac10b58cc4372a5670e02b2c3d479}

1. ¿Por qué veo una advertencia de que mi borrador puede tener una calidad inferior a la normal? ¿Qué debo hacer si veo esta advertencia?

   _Scripture Forge utiliza métricas automatizadas para determinar si el entrenamiento del modelo ha sido lo suficientemente satisfactorio como para elaborar un borrador de los libros solicitados. A veces, estos indicadores sugieren que la calidad del borrador puede ser deficiente._

   _La causa más habitual de esta advertencia es que no hay suficiente texto de ejemplo del tipo necesario para entrenar el modelo. Por lo general, esta situación se debe a un error al configurar la solicitud del borrador. Utiliza la siguiente lista de comprobación como guía para revisar la configuración de la generación de borradores._

   - _Proyecto: ¿Estás generando el borrador a partir de un proyecto que incluye todos los libros finalizados del proyecto?_
     - _Es importante no solicitar borradores de un proyecto utilizado para almacenar borradores de IA._
     - _Si algunos libros traducidos, como el Nuevo Testamento, están almacenados en un proyecto independiente de Paratext, es posible que tengas que crear un nuevo proyecto e importar todos los libros traducidos a ese proyecto. Puedes utilizar ese proyecto para generar borradores._
   - _Código de idioma: ¿El código de idioma para cada proyecto de referencia y proyecto fuente coincide con el texto de ese proyecto?_
     - _Puedes actualizar los códigos de idioma en Paratext, en la sección «Propiedades del proyecto»._
   - _Libros para redactar: ¿Son los libros para redactar seleccionados en el paso 2, «Seleccionar libros para redactar»?_
   - _Libros de entrenamiento: ¿Se han seleccionado todos los libros completados y revisados del proyecto en el paso 3, «Seleccionar libros para el entrenamiento»?_
     - _Asegúrate de que el equipo haya revisado todos los libros que se utilizan para el entrenamiento. En general, deben mantener una coherencia en la ortografía, el uso de caracteres (al escribir con teclado), el dialecto y el vocabulario._
     - _Asegúrate de que el texto de referencia incluya todos los libros utilizados para el entrenamiento y de que estén seleccionados en la parte inferior del paso 3._
   - _Retro traducciones: ¿Estás utilizando una retro traducción como proyecto de referencia? Si es así, comprueba lo siguiente:_
     - _Asegúrate de que el código de idioma de la retro traducción corresponda al idioma de la retro traducción y no al del proyecto de traducción principal._
     - _Si alguno de los libros del proyecto de retro traducción está en un idioma distinto al del resto de la retro traducción, desmarca esos libros en el área de retro traducción situada en la parte inferior del paso 3._
   - _Datos adicionales: ¿Están bien formateados?_
     - _Si has subido datos adicionales para el entrenamiento del modelo en la página «Configurar fuentes», asegúrate de que cada fila de ese archivo contenga frases con el mismo significado, con el idioma de origen a la izquierda y el idioma de destino a la derecha._

2. ¿Por qué sigo viendo una advertencia de baja calidad del borrador después de haber completado todas las comprobaciones?

   _Recuerda que la advertencia se basa en una estimación de la calidad del borrador y puede que no refleje el criterio humano. Por favor, revisa el borrador con atención para determinar si te resulta útil para tu trabajo de traducción. El texto de ayuda sobre [Cómo mejorar la calidad de los borradores](/improving-draft-quality) puede resultarte útil._

   _Si la calidad del borrador sigue siendo baja tras realizar las comprobaciones recomendadas, es posible que tengas que traducir más texto antes de generar un borrador. En las primeras fases de un proyecto de traducción, es importante decidir qué libro se va a traducir a continuación. Por ejemplo, un modelo entrenado con el Evangelio de Lucas está mejor preparado para redactar el Evangelio de Marcos que para redactar la Carta a los Romanos. Si estás trabajando en el Nuevo Testamento, revisa las [Guidelines for New Testament Draft Generation](/new-testament-drafting) para conocer cómo el orden de los libros puede afectar a la calidad de los borradores._

   _Si tienes alguna duda o necesitas ayuda para mejorar la calidad de tu borrador, ponte en contacto con nuestro equipo en [help@scriptureforge.org](mailto:help@scriptureforge.org)._

3. ¿Qué debo hacer si solo algunos de los libros que he generado muestran una advertencia de baja calidad del borrador?

   _Una advertencia en cualquier borrador es una buena razón para considerar la lista de verificación anterior. Sin embargo, también puede ser que tus datos de entrenamiento se adaptaran mejor a la redacción de algunos libros que a otros. Es importante revisar con detenimiento cada borrador de libro, sobre todo aquellos que incluyan una advertencia de baja calidad, antes de decidir si se va a utilizar en el proceso de traducción._
