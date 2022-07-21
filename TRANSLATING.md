# Translating Guideline

Hello fellow translators. This file contains information for how to translate the website, as well as some rules. As of now, all contributions are handled through GitHub pull requests.

## How to Contribute

We use YAML to store our translation files. It's easy for both developers and translators to work with this kind of file.

Navigate to the [lang folder](https://github.com/Avdan-OS/Website/tree/dev/src/public/assets/lang) (src/public/assets/lang). In in that folder, you should see some files that ends in .yaml extension.

## Editing Existing Localisation

1. Find and open the locale file that you want to contribute to. You might want to refer to [this page](https://docs.oracle.com/cd/E23824_01/html/E26033/glset.html) to find your locale. Click on the file, and it should show the file

2. Click on the address bar, and edit the url from `github.com` to `github.dev`. This will open the file in an online text editor. If the editor ask you to install recommended extension, they are super useful, so yes you should install them. If you didn't sign in to GitHub yet, you should. If you don't want to sign in to GitHub, see FAQ below.

3. Actually editing the translation.

- You will see a lot of lines with `: `, a colon and a space
- Left side of the colon is the original text in all lowercase (it's easier for devs to work with)
- Right side of the colon (+space) is the translated text. You should edit/add things here.
- [%a] and [%b] is a flag for developers to add styling, so they should also be present in the translated string.
- If your text editor shows an error with your translation, wrap your translation with `"` quotes. If you have further problem, ask for help on [our Discord server](https://discord.gg/avdanos).

4. After you finish making changes, you need to submit your changes. At the left, click on the three dots connected by two lines (it's called Source Control). Click on the check mark, and follow the instructions to create fork if you haven't got one.

5. Click on a plus and arrow into a line with two circles. Set the title to `Update xxx localisation`, and leave the rest as it is. Click on create. This will create a pull request, which means your changes is sent to us for review. We might need to make edits, so give us a bit of time.

## Adding New Localisation

If you're locale is not on the list yet, please leave a comment on [this GitHub issue](https://github.com/Avdan-OS/Website/issues/91). We will prepare the localisation file for you. After you get notified that it is ready, please go to step one of the section `Editing Existing Localisation` above.

## TL;DR for Devs

Yes, you can edit it your way. The guide above is for beginners who don't know how to use GitHub. Keys for YAML should be in lowercase, but translated value should have proper capitalisation. [%s] is for injection, so leave them where they should be. Punctuation matters. [This page](https://docs.oracle.com/cd/E23824_01/html/E26033/glset.html) should be used for locale code.

> # _PLEASE SUBMIT A PR, NO DIRECT COMMITS_

![image](https://user-images.githubusercontent.com/51555391/176925763-cdfd57ba-ae1e-4bf3-85e9-b3ebd30b1d59.png)

## FAQ

**Can I submit incomplete translation?**

Yes, just leave the translated string empty, and do NOT change the original string. You can also leave a string empty if no translation is available.

**Can I use third party translation tool?** (Google Translate?)

Yes, use whatever tool you want. You should be at least somewhat fluent at the language. You just need to review the translations carefully.

**Can I not use GitHub?**

Create a document in your text editor of choice, copy and paste the current translation file there, and start editing. When you're done, send us the file through our [our Discord server](https://discord.gg/avdanos) server and ping @froxcey, and we will handle it for you.
