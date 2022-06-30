# Translation Key

This file teaches you how to use translation key. The logic is that injection can be done by splitting components from strong.

1. Name a translation key. It should be `yourFile.tsx/concise-identifiable-unique-key`

2. In each locale file, add `translation.set("original text without component and use [%s] to show this is a link or a component to be injected [%/s] to close it", "")` in the corresponding category. [%/s] is only needed when you need opening and closing tag to be both injected.

3. At the bottom of each translation file, there should be `This below is for identifier (for developers), please don't touch`. Below there, add a new `translation.set("your/translation-key", TranslationRebuilder("your/translation-key",translation.get("Original [%s] translation [%/s] phrase."))` This will properly set you up for rebuild injection logic later

4. In TranslationRebuilder.tsx, add your key to the switch statement. In the switch statement, add return ()

5. Cut whatever you want to replace with translation and paste it in the return statement. update import statement and add additional code when necessary

6. Replace all texts with messages manipulated with`translatedSource` (use `translatedSource.split('[%s]')[0].trim()`, `translatedSource.split('[#s]')[1].split('[%/s]')[0].trim()`, and `translatedSource.split('[%/s]')[1].trim()`)

7. Back from where you cutted your component for translation, replace it with `<TranslatableText>your/translation-key</TranslatableText>`

8. You should be good to go, just wait for translators to do the work.

> I hope this doesn't leave some cipher and black magic behind for ppl to scratch their head - Froxcey

![vibe](https://user-images.githubusercontent.com/51555391/176177206-ec3f9dce-8780-4fe8-b6ac-5eeeac2038d4.gif)
