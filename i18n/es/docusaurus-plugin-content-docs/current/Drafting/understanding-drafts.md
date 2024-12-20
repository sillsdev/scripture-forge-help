---
title: Comprender la redacción
sidebar_position: 0
slug: /understanding-drafts
---

## Introducción {#ad165caedac347798432de75e4305252}

El equipo de Procesamiento del Lenguaje Natural de SIL Global ha desarrollado una herramienta que puede ayudar en la traducción de la Biblia creando un primer borrador que los traductores pueden editar y perfeccionar. Desde el 1 de enero de 2024, esta herramienta está disponible para su uso dentro de [Scripture Forge](https://scriptureforge.org/), una plataforma de edición de escrituras que está estrechamente integrada con [Paratext](https://paratext.org/).

Todos los borradores que se crean contienen errores que el equipo de traducción debe corregir. Para algunos proyectos, la calidad será demasiado baja para ser útil. Sin embargo, las numerosas pruebas realizadas sobre el terreno han demostrado que un número significativo de equipos consideran que los borradores son muy útiles para su trabajo y de calidad suficiente para utilizarlos como punto de partida para que el equipo los edite.

En última instancia, la medida del éxito de los borradores es su utilidad como herramienta para ayudar al equipo de traducción en su trabajo, no su capacidad para constituir por sí solos un producto acabado.

## Cómo funciona {#bd8a69c7ed904125897b4ee26dcae489}

Para utilizar la herramienta con eficacia, es importante entender cómo funciona. Los borradores se crean mediante un proceso en dos fases:

1. Aprende el idioma.
2. Traduce el texto.

El paso más importante es el primero, el aprendizaje de la lengua. La calidad del borrador que se crea depende casi por completo de lo bien que vaya este paso.

El sistema aprende viendo la misma frase escrita en varias lenguas, una en una lengua que ya entiende y otra en la lengua a la que estás traduciendo.

El punto más importante para recordar es que estas frases tienen que decir lo mismo en ambas lenguas. Es el mismo principio que permitió a los eruditos aprender jeroglíficos a partir de la Piedra de Rosetta: el mismo texto estaba escrito en tres lenguas distintas, lo que permitía comparar una lengua que ya se entendía con otra que no.

Los textos disponibles tanto en la lengua de la que se traduce como en la lengua a la que se traduce se denominan "textos paralelos". En general, cuantos más textos paralelos tenga, mejor aprenderá la lengua el sistema. En la mayoría de los proyectos, este texto paralelo será su texto de referencia y el trabajo de traducción que ya haya realizado. En este momento, le recomendamos que tenga al menos el Nuevo Testamento traducido.

## Ejemplos de casos de uso {#937c1db4b24d4e85bfc2acc489bf456b}

### Un ejemplo básico {#9165ff8c10564a7fa67c3375f62de85e}

Supongamos que un equipo de traducción está traduciendo la Biblia a una lengua local, utilizando la NVI en español como texto de referencia. El equipo ha completado todo el Nuevo Testamento y está empezando a trabajar en Génesis.
El sistema generaría un borrador de la siguiente manera:

1. Compare el Nuevo Testamento NVI en español con el Nuevo Testamento en el idioma local, para aprender el idioma.
2. Una vez aprendido el idioma, traduzca el Génesis de la NVI a la lengua local.

Tras generar el libro del Génesis, el equipo editaba el borrador para corregir posibles errores. Después, podrían generar un borrador del siguiente libro en el que piensan trabajar, y el sistema utilizaría la traducción de Génesis para mejorar la calidad del siguiente borrador.

### Un ejemplo más complejo {#e6ec52fc004a41c195617bbcc3bb7f84}

En el primer ejemplo, el equipo utilizaba la NVI en español como texto de referencia, y el sistema aprendía el idioma comparando la NVI con el Nuevo Testamento en la lengua local. Sin embargo, en muchos casos se puede generar un borrador de mejor calidad utilizando un texto distinto del que el equipo está traduciendo.

Por ejemplo, a menudo es posible mejorar la calidad del borrador utilizando una retrotraducción de la lengua local a la lengua de origen. Si el equipo ha preparado una retrotraducción del proyecto en español, podría utilizarse como texto de referencia en lugar de la NVI en español. Una retrotraducción suele ser mucho más literal que una traducción normal y, por tanto, facilita al sistema la comprensión de la correspondencia entre la lengua local y el español. En este ejemplo, el sistema generaría un borrador del siguiente modo:

1. Compara la retrotraducción en español con el Nuevo Testamento en la lengua local, para aprender el idioma.
2. Una vez aprendido el idioma, traduzca el Génesis de la NVI a la lengua local.

Determinar la configuración ideal para un proyecto es un proceso complejo, y no es algo que necesites aprender. El equipo de Procesamiento del Lenguaje Natural del SIL está desarrollando herramientas para determinar la configuración ideal, y puede ayudar a los equipos durante el proceso de incorporación.

### Generación de retrotraducciones {#8a64fbb8c7e741938cf5007358570d3d}

Además de crear borradores en la lengua vernácula, el sistema también puede generar retrotraducciones a las lenguas de origen admitidas. Para generar un borrador de retrotraducción, el equipo debe haber retrotraducido ya al menos unos cuantos libros de la lengua vernácula a la lengua de partida.

En este ejemplo, supongamos que un equipo ha traducido los cuatro evangelios a la lengua vernácula y ha preparado las retrotraducciones de Mateo, Marcos y Lucas al español. Para generar un borrador de la retrotraducción de Juan, el sistema haría lo siguiente:

1. Compare las retrotraducciones al español de Mateo, Marcos y Lucas con las versiones en lengua vernácula de Mateo, Marcos y Lucas, para aprender el idioma.
2. Una vez aprendida la lengua, traduce a John de la lengua vernácula al español.

Los borradores de la retrotraducción también contendrán errores y habrá que corregirlos, pero la calidad suele ser sustancialmente superior a la de los borradores vernáculos.

## Cómo empezar {#1ba56b4f36584ecb91b9f2208efec047}

La generación de borradores de retrotraducción está actualmente abierta y disponible para todos los usuarios de Paratext. La generación de borradores en lengua vernácula, debido a la complejidad que entraña su configuración, requiere la incorporación de un equipo al equipo de Procesamiento del Lenguaje Natural del SIL. Rellene el [formulario de inscripción para la redacción de traducciones](https://app.smartsheet.com/b/form/305798a45a664d8585ac74e72241d8cc), y un miembro del equipo evaluará si su proyecto es un buen candidato para generar borradores.

Independientemente de si estás generando borradores de retrotraducción o borradores vernáculos, puedes empezar conectando tu proyecto Paratext a Scripture Forge siguiendo estos pasos:

1. Inicie sesión en [Scripture Forge](https://scriptureforge.org/), utilizando sus credenciales de Paratext.
2. Conecta tu proyecto Paratext siguiendo la [Guía para conectar un proyecto Paratext](https://help.scriptureforge.org/connect-paratext-project). Cuando conectes el proyecto, selecciona tu texto de referencia como fuente. Para una traducción inversa, el texto de partida debe ser la lengua vernácula.
3. Después de conectar su proyecto, haga clic en "Generar borrador" en la barra lateral.
4. Si está generando un borrador en lengua vernácula, esto es lo máximo que puede hacer por su cuenta, y tendrá que rellenar el formulario de inscripción para la redacción de traducciones haciendo clic en "Inscribirse para la redacción". Si su proyecto ya ha sido incorporado, o si está trabajando con una traducción anterior, haga clic en "Generar borrador" para iniciar el proceso.
5. Seleccione los libros que desea traducir y, a continuación, seleccione los libros que desea utilizar como datos de entrenamiento.
6. Haga clic en "Generar borrador" para iniciar el proceso.

El proceso de generación de borradores puede durar desde varias horas hasta varios días.

Una vez generado el borrador, puede previsualizarlo e importar capítulos individuales a su proyecto.

## Idiomas soportados para la redacción de la retrotraducción {#70c8aaa17b6f4b5783ff0f464f59700e}

Los borradores de retrotraducción pueden generarse a partir de cualquier idioma, pero deben retrotraducirse a una de las siguientes lenguas.

| Nombre del idioma         | ISO 639-1 | ISO 639-2 | ISO 639-3 |
| ------------------------- | --------- | --------- | --------- |
| Acehnés                   |           | ace       |           |
| Árabe mesopotámico        |           | acm       |           |
| Ta'izzi-Adeni Árabe       |           | acq       |           |
| Árabe tunecino            |           | aeb       |           |
| Afrikaans                 | af        | afr       | afr       |
| Árabe levantino del sur   |           | ajp       |           |
| Akan                      | ak        | aka       |           |
| Amárico                   | am        | amh       | amh       |
| Árabe levantino del norte |           | apc       |           |
| Árabe estándar            | ar        | arb       | ara       |
| Árabe najdi               |           | ars       |           |
| Árabe marroquí            |           | ary       |           |
| Árabe egipcio             |           | arz       |           |
| Asamés                    | as        | asm       | asm       |
| Asturiano                 |           | ast       |           |
| Awadhi                    |           | awa       |           |
| Aymara                    |           | ayr       |           |
| Azerbaiyán del sur        |           | azb       |           |
| Azerbaiyán del norte      |           | azj       |           |
| Bashkir                   | ba        | bak       | bak       |
| Bambara                   | bm        | bam       | bam       |
| Balinés                   |           | ban       |           |
| Bielorruso                | be        | bel       | bel       |
| Bemba                     |           | bem       |           |
| Bengalí                   | bn        | ben       | ben       |
| Bhojpuri                  |           | bho       |           |
| Banjar                    |           | bjn       |           |
| Tibetano                  | bo        | bod       | tib       |
| Bosnio                    | bs        | bos       | bos       |
| Buginés                   |           | bug       |           |
| Búlgaro                   | bg        | bul       | bul       |
| Catalán                   | ca        | cat       | cat       |
| Cebuano                   |           | ceb       |           |
| Checa                     | cs        | ces       | cze       |
| Chokwe                    |           | cjk       |           |
| Kurdo central             |           | ckb       |           |
| Turco de Crimea           |           | crh       |           |
| Galés                     | cy        | cym       | wel       |
| Danés                     | da        | dan       | dan       |
| Alemán                    | de        | deu       | ger       |
| Dinka                     |           | dik       |           |
| Dyula                     |           | dyu       |           |
| Dzongkha                  | dz        | dzo       | dzo       |
| Griego                    | el        | ell       | gre       |
| Inglés                    | en        | eng       | eng       |
| Esperanto                 | eo        | epo       | epo       |
| Estoniano                 | et        | est       | est       |
| Vasco                     | eu        | eus       | baq       |
| Ewe                       | ee        | ewe       | ewe       |
| Feroés                    | fo        | fao       | fao       |
| Fiyiano                   | fj        | fij       | fij       |
| Finlandés                 | fi        | fin       | fin       |
| Fon                       |           | fon       |           |
| Francés                   | fr        | fra       | fre       |
| Friulano                  |           | fur       |           |
| Fulfulde nigeriano        |           | fuv       |           |
| Gaélico escocés           | gd        | gla       | gla       |
| Irlandés                  | ga        | gle       | gle       |
| Gallego                   | gl        | glg       | glg       |
| Guaraní                   | gn        | grn       | grn       |
| Gujarati                  | gu        | guj       | guj       |
| Criollo haitiano          |           | hat       |           |
| Hausa                     | ha        | hau       | hau       |
| Hebreo                    | he        | heb       | heb       |
| Hindi                     | hi        | hin       | hin       |
| Chhattisgarhi             |           | hne       |           |
| Croata                    | hr        | hrv       | hrv       |
| Húngaro                   | hu        | hun       | hun       |
| Armenio                   | hy        | hye       | arm       |
| Igbo                      | ig        | ibo       | ibo       |
| Iloko                     |           | ilo       |           |
| Indonesio                 | id        | ind       | ind       |
| Islandés                  | is        | isl       | ice       |
| Italiano                  | it        | ita       | ita       |
| Javanés                   | jv        | jav       | jav       |
| Japonés                   | ja        | jpn       | jpn       |
| Cabila                    |           | kab       |           |
| Kachin                    |           | kac       |           |
| Kamba                     |           | kam       |           |
| Kannada                   | kn        | kan       | kan       |
| Cachemira                 | ks        | kas       | kas       |
| Georgiano                 | ka        | kat       | geo       |
| Kanuri central            |           | knc       |           |
| Kazakh                    | kk        | kaz       | kaz       |
| Kabiye                    |           | kbp       |           |
| Kabuverdianu              |           | kea       |           |
| Khmer                     | km        | khm       | khm       |
| Kikuyu                    | ki        | kik       | kik       |
| Kiñaruanda                | rw        | kin       | kin       |
| Kirguís                   | ky        | kir       | kir       |
| Kimbundu                  |           | kmb       |           |
| Curdo norteño             |           | kmr       |           |
| Kongo                     | kg        | kon       | kon       |
| Coreano                   | ko        | kor       | kor       |
| Lao                       | lo        | lao       | lao       |
| Ligur                     |           | lij       |           |
| Limburgués                | li        | lim       | lim       |
| Lingala                   | ln        | lin       | lin       |
| Lituano                   | lt        | lit       | lit       |
| Lombardo                  |           | lmo       |           |
| Latgaliano                |           | ltg       |           |
| Luxemburgués              | lb        | ltz       | ltz       |
| Luba-Lulua                |           | lua       |           |
| Luganda                   | lg        | lg        | lug       |
| Luo                       |           | luo       | luo       |
| Lushai                    |           | lus       | lus       |
| Letón                     | lv        | lvs       | lav       |
| Magahi                    |           | mag       | mag       |
| Maithili                  |           | mai       | mai       |
| Malayalam                 | ml        | mal       | mal       |
| Marathi                   | mr        | mar       | mar       |
| Minangkabau               |           | min       | min       |
| Macedonio                 | mk        | mkd       | mac       |
| Meseta Malgache           |           | plt       | plt       |
| Maltés                    | mt        | mlt       | mlt       |
| Manipuri                  |           | mni       | mni       |
| Halh Mongolian            |           | khk       | khk       |
| Mossi                     |           | mos       | mos       |
| Maori                     | mi        | mri       | mao       |
| Birmano                   | my        | mya       | bur       |
| Holandés                  | nl        | nld       | dut       |
| Nynorsk noruego           | nn        | nno       | nno       |
| Noruego Bokmål            | nb        | nob       | nob       |
| Nepalí                    |           | npi       | npi       |
| Sotho norteño             |           | npi       | nso       |
| Nuer                      |           | nus       | nus       |
| Chichewa                  | ny        | nya       | nya       |
| Occitano                  | oc        | oci       | oci       |
| Oromo central occidental  |           | gaz       | gaz       |
| Odia                      |           | ory       | ory       |
| Pangasinan                |           | pag       | pag       |
| Punjabi                   | pa        | pan       | pan       |
| Papiamento                |           | pap       | pap       |
| Farsi                     | fa        | pes       | per       |
| Polaco                    | pl        | pol       | pol       |
| Portugués                 | pt        | por       | por       |
| Dari                      |           | prs       | prs       |
| Pashto del sur            |           | pbt       | pbt       |
| Quechua                   |           | quy       | quy       |
| Rumano                    | ro        | ron       | rum       |
| Rundi                     | rn        | run       | run       |
| Ruso                      | ru        | rus       | rus       |
| Sango                     | sg        | sag       | sag       |
| Sánscrito                 | sa        | san       | san       |
| Santali                   |           | sat       | sat       |
| Siciliano                 |           | scn       | scn       |
| Shan                      |           | shn       | shn       |
| Sinhala                   | si        | sin       | sin       |
| Eslovaco                  | sk        | slk       | slo       |
| Eslovenio                 | sl        | slv       | slv       |
| Samoano                   | sm        | sm        | smo       |
| Shona                     | sn        | sna       | sna       |
| Sindhi                    | sd        | snd       | snd       |
| Somalí                    | so        | som       | som       |
| Sotho del sur             | st        | sot       | sot       |
| Español                   | es        | spa       | spa       |
| Tosk Albanés              | sq        | als       | als       |
| Cerdeña                   | sc        | srd       | srd       |
| Serbio                    | sr        | srp       | srp       |
| Swazi                     | ss        | ssw       | ssw       |
| Sundanés                  | su        | sun       | sun       |
| Sueco                     | sv        | swe       | swe       |
| Suajili                   | sw        | swh       | swh       |
| Silesio                   | szl       | szl       | szl       |
| Tamil                     | ta        | tam       | tam       |
| Tártaro                   | tt        | tat       | tat       |
| Télugu                    | te        | tel       | tel       |
| Tayiko                    | tg        | tgk       | tgk       |
| Tagalo                    | tl        | tgl       | tgl       |
| Tailandés                 | th        | tha       | tha       |
| Tigriña                   | ti        | tir       | tir       |
| Tamashek                  | tmh       | taq       | taq       |
| Tok Pisin                 | tpi       | tpi       | tpi       |
| Tswana                    | tn        | tsn       | tsn       |
| Tsonga                    | ts        | tso       | tso       |
| Turcomano                 | tk        | tuk       | tuk       |
| Tumbuka                   | tum       | tum       | tum       |
| Turco                     | tr        | tur       | tur       |
| Twi                       | tw        | twi       | twi       |
| Tamazight                 | tzm       | tzm       | tzm       |
| Uighur                    | ug        | uig       | uig       |
| Ucraniano                 | uk        | ukr       | ukr       |
| Umbundu                   | umb       | umb       | umb       |
| Urdu                      | ur        | urd       | urd       |
| Uzbeko                    | uz        | uzn       | uzn       |
| Venecia                   | vec       | vec       | vec       |
| Vietnamita                | vi        | vie       | vie       |
| Waray                     | war       | war       | war       |
| Wolof                     | wo        | wol       | wol       |
| Xhosa                     | xh        | xho       | xho       |
| Yiddish                   | yi        | ydd       | yid       |
| Yoruba                    | yo        | yor       | yor       |
| Cantonés                  | zh        | yue       | yue       |
| Chino                     | zh        | zho       | chi       |
| Malayo                    | ms        | zsm       | zsm       |
| Zulú                      | zu        | zul       | zul       |
