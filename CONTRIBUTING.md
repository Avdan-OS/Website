# AvdanOS Website Contributing Guide

If you are a translators, please see [translating guideline](https://github.com/Avdan-OS/Website/blob/dev/TRANSLATING.md) for more information.

## Prerequisite

If you want to make edit to this repository, make sure you're familiar with Typescript, CSS and React, with the exception of grammar fixes of course.

## Component Library

We use [Geist-UI](https://geist-ui.dev/) as our component library. You might want to read and get familier with it before starting your contribution.

## Styling

We use Prettier as formatter. All jsx naming should follow Airbnb style, and all css classes should use dash-case with the exception of BEM naming. 2 spaces as indent.

## Basics

To start your contribution, please follow the steps below

1. Create a fork of this repo

2. Git clone your fork to your machine

```sh
git clone url://to.your/github/fork.git
```

3. Go into the src directory

```sh
cd src
```

4. Install dependencies

```shell
npm install
```

5. Preview the webpage

```sh
npm run dev
```

You can now go to https://localhost:3000 in your browser and it will update in real time.

6. Make changes as you want

`Tip: test pages on smaller width and both themes to make sure they have good compatibility. In the lib folder, there's dynamic-width.ts, which is an easy to use hook we made with full jsdoc documentation`

7. Commit your changes

```sh
git commit -m "concise message of the change"
```

`Tip: you can set up code signing and add -S to the commit command above to get a verified check mark`

8. Push your changes

```sh
git push
```

9. Create pull request on GitHub

## Using translation

You need to add this code to the beginning of your file

```js
import { TranslatableText } from "../locale/TranslatableText";
```

Then wrap your text in TranslatableText tag, like this:

```jsx
<TranslatableText>I will be translated</TranslatableText>
```

Then just wait for translators to add the translation

If the text has complicated structure and not just a string, you can try to read how to use [translation key](https://github.com/Avdan-OS/Website/blob/dev/src/components/translation/translationKey.md) or leave it to ppl who know how to use it (yes, injection is quite advanced)

## Pull Requests

To make the review process faster, it's recommended to have list of changes in comment section and include screenshots if there are changes in the design. List of changes should be concise.

> [nothing]

❌ : What did you change? Reviewer need to guess what your code does

> Make browsing experience better on mobile

❌ : Better is subjective, and we still don't know what you did

> Make pages respond to mobile screen

Meh: It's acceptable

> Footer: implement adaptive layout on small screen

✅ : Now we know why a file changed and what it's suppose to do.

Since commits to the dev branch will automatically get deployed, please make sure all pull requests are complete. Run `npm run build` in the src directory to double check there is no error. You can create draft pull requests, which will allow other people to see changes, give feedbacks, and request changes.

Even if you're in the organisation, pull requests should be reviewed and approved by another member before merging, with exceptions of fixing a build fail or security breach. Complete redesign of an existing webpage will need approval from a team lead.

PLEASE SUBMIT A PR, NO DIRECT COMMITS!!!

> # _PLEASE SUBMIT A PR, NO DIRECT COMMITS_

![image](https://user-images.githubusercontent.com/51555391/176925763-cdfd57ba-ae1e-4bf3-85e9-b3ebd30b1d59.png)
