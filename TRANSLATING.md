# Translating Guideline

Hello fellow translators. This file contains information for how to translate the website, as well as some rules. This project might or might not move to Crowdin for localisation management, but GitHub pull request is how we are doing it for now.

## Finding Locale Folder

Navigate to the [locale folder](https://github.com/Avdan-OS/Website/tree/dev/src/components/locale) (src/components/locale). In in that folder, you should see `TranslatableText.tsx`, `TranslationList.tsx`, and some files that ends in .ts extension. `TranslatableText.tsx` is responsible for injecting translation to the whole website, so there's no need to change that file unless you're a developer. `TranslationList.tsx` contains a list of locales available and library needed to render the options on the website. This file is also for developer, so please don't touch it. `locale-TEMPLATE.ts` is a template for creating new translation file, so please also not touch it unless you absolutely know what you're doing.

## Opening Locale File

Find and open the locale file that you want to contribute to. You might want to refer to [this page](https://www.science.co.il/language/Locale-codes.php) to find your locale. You should see a lot of `translation.set(...)`, and this is how translation is stored. If you cannot fine your locale, please go to [this issue](https://github.com/Avdan-OS/Website/issues/91) and request a new locale.

## Editing Translation

In `translation.set`'s parenthesis, there should be two quotes, separated by a comma. The quote at the left is the original text, in all lowercase. The quote at the left side of the command is the translated text. Type your translation in the quotation marks at the right side of the comma. DO NOT EDIT THE LEFT SIDE, IT WILL BREAK THE WEBSITE. If you see a line ended in `// don't translate this yet (technical issue)`, that means this quote is likely to change in the future due to change in how injection works. You can translate it, but it will not appear on the website and might get deleted in the future.

## Adding Your Contribution

Now all you need to do is create a pull request, name it `Update [your locale] translation`, add optional comment, and tag it with translation. We will review your changes and most likely merge it.

## FAQ

**Can I submit incomplete translation?**

Yes, just leave the translated string empty, and do NOT delete the quotation mark or change the original string.
