# Translating Guideline

> Hello fellow translators. This file contains information for how to translate the website, as well as some rules. As of now, all contributions are handled through GitHub pull requests. I understand this can be hard for some people, so you can contact me if you have any problem: `@froxcey_` on [Twitter](https://twitter.com/Froxcey_), `@froxcey` on Telegram, or `@froxcey:matrix.org` on Matrix/IRC. - Frox

## How to Contribute

We use YAML to store our translation files. It's easy for both developers and translators to work with this file type.

Navigate to the [lang folder](https://github.com/Avdan-OS/Website/tree/dev/src/public/assets/lang) (src/public/assets/lang). In in that folder, you should see some files that ends with .yaml extension.

## Editing Existing Localisation

1. Find and open the locale file that you want to contribute to. You might want to refer to [this page](https://docs.oracle.com/cd/E23824_01/html/E26033/glset.html) to find your locale. Click on the file, and it should show the file

2. Click on the address bar, and change the url from `github.com` to `github.dev`. This will open the file in an online text editor. If the editor ask you to install recommended extension, they are super useful, so yes you should install them. If you didn't sign in to GitHub yet, you should. If you don't want to sign in to GitHub, see FAQ below.

3. Actually editing the translation.

- You will see a lot of lines with `: `, a colon and a space
- Left side of the colon is the original text.
- Right side of the colon (+space) is the translated text. You should edit/add things here.
- There are flags like <%0| and |%0> (and maybe other numbers) are tags for developers. Move them around as necessary to wrap the corresponding text but don't change the flag itself.
- If your text editor shows an error with your translation, wrap your translation with `"` quotes.

4. After you finished making changes, you need to submit your changes. At the left, click on the three dots connected by two lines (it's called Source Control). Click on the check mark, and follow the instructions to create fork if you haven't got one.

5. Click on a plus and arrow into a line with two circles. Set the title to `Update xxx localisation`, and leave the rest as it is. Click on create. This will create a pull request, which means your changes is sent to us for review. We might need to make edits, so give us a bit of time.

## Adding New Localisation

If you're locale is not on the list yet, make a copy of the en-GB.yaml file and start translating. Instructions for making translations is available in the [edit translation](#editing-existing-localisation) section.

## How to dev

Wrap your content in `<Chiislate logTString={true}>` and `</Chiislate>`, and it will spit out the translation key in the JavaScript console. Paste that key to the yaml files, remove ` logTString={true}`, then ~~force~~ wait for translators to add the translation.

## FAQ

**Can I submit a incomplete translation file?**

Yes, just leave the translated string empty, and do NOT change the original string. You can also leave a string empty if no translation is available.

**Can I use third party translation tool?** (Google Translate? AI?)

Yes, use whatever tool you want. You are still required to be fluent in the language you chose and review the translation carefully before submitting.

**Can I not use GitHub?**

See above for ways to contact Froxcey, and he will help you.
