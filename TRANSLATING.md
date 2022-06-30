# Translating Guideline

Hello fellow translators. This file contains information for how to translate the website, as well as some rules. This project might or might not move to Crowdin for localisation management, but GitHub pull request is how we are doing it for now.

## Finding Locale Folder

Navigate to the [locale folder](https://github.com/Avdan-OS/Website/tree/dev/src/components/translation/locale) (src/components/translation/locale). In in that folder, you should see some files that ends in .ts extension.

## Opening Locale File

Find and open the locale file that you want to contribute to. You might want to refer to [this page](https://www.science.co.il/language/Locale-codes.php) to find your locale. You should see a lot of `translation.set(...)`, and this is how translation is stored. If you cannot fine your locale, please go to [this issue](https://github.com/Avdan-OS/Website/issues/91) and request a new locale.

## Editing Translation

In `translation.set`'s parenthesis, there should be two quotes, separated by a comma. The quote at the left is the original text, in all lowercase. The quote at the left side of the command is the translated text. Type your translation in the quotation marks at the right side of the comma. DO NOT EDIT THE LEFT SIDE, IT WILL BREAK THE WEBSITE. If you see a line ended in `// don't translate this yet (technical issue)`, that means this quote is likely to change in the future due to change in how injection works. You can translate it, but it will not appear on the website and might get deleted in the future. If you see something like `[%s]`, `[%/s]`, or anything that's in bracket and contains a percent, maybe a slash, and a letter, it is an indicator for developers to do tricks like adding link or applying bold font. Please do not delete any indicator, and place them where appropriate in the translated string.

## Adding Your Translation

Find the right section, and add a line of `translation.set("original text","translated text")`. Original text should be exact match of the text, not half a sentence. If half of the link is link or has a different styling, translation will most likely not work. Please just submit a new bug report including a screenshot of where the translated text should be, what the original text is, which page it is on, and tag it with translation. Developers will take care of the rest, and you will just need to wait for a response. IMPORTANT: SEARCH CLOSED ISSUES BEFORE ADDING A NEW ONE.

## Adding Your Contribution

Now all you need to do is create a pull request, name it `Updated [your locale] translation`, add optional comment, and tag it with translation. We will review your changes and most likely merge it.

## FAQ

**Can I submit incomplete translation?**

Yes, just leave the translated string empty, and do NOT delete the quotation mark or change the original string.
