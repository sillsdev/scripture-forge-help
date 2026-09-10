---
title: Understanding Draft Quality
sidebar_position: 1
slug: /understanding-draft-quality
---

## Elements of Draft Quality

Only human translators can decide whether a draft serves a team’s needs. However, it is helpful to understand some factors that can influence the quality of a generated draft.

- Amount and quality of training data (language examples)
  - More examples contribute to better draft quality.
  - Examples that are well-checked and consistent improve draft quality.
  - Examples that are relevant to the book or books to be drafted improve draft quality; for example, including examples in the same genre or with similar content is often helpful.
- Relationship between source and target languages
  - A closer linguistic relationship and typological match often results in better draft quality. 
- Relationship between source text and target texts
  - When the translation closely follows the words of the reference text, this can make model training more successful and improve draft quality. 
  - For this reason, including a back translation in the source language as a second reference text may improve quality. 
- Representation of source language in the language model
  - Using a high-resource source language, that is, one which is a major modern language and has plentiful examples in the underlying language model, can improve draft quality.
- Characteristics of target project
  - A script unknown to the underlying language model may decrease draft quality.
  - Agglutinative languages or those without word breaks may experience decreased draft quality.
  - A project that translates at the paragraph level, uses many long verse ranges, or includes significant explication not found in the source text may see decreased draft quality.

## Improving Draft Quality {#92f8d5c800084e4eb113511f74e26927}

Here are some ideas to improve draft quality. Not all of these will be possible or relevant for all projects.
- Use as much translated Scripture text as possible for training the model. 
- Consider adding parallel linguistic data in the source and target languages.
- Test different reference texts, including higher-resource or more closely-related source languages.
- Include a back translation in the source language as a second reference text.
- Correct any frequent spelling, keyboarding, or vocabulary inconsistencies in the translation.
- Continue with manual translation and test draft generation again when more translated Scripture is complete.
- See the note about [Incremental Draft Generation](https://help.scriptureforge.org/generating-a-draft#select-the-books-to-draft) and consider using this method for long books or when beginning a new genre. 

## Draft Quality Warning {#9a12a839f3634e75acd511f4b426eb86}

Scripture Forge uses automated scoring to estimate draft quality, and will present a warning to users if the estimated quality of a generated draft is very low. This may indicate that there is an error in the configuration that resulted in unsuccessful model training. Please see the FAQ for more information. Some drafts may be low quality even if they are not flagged by the warning. It is important to check the quality of each draft carefully.
