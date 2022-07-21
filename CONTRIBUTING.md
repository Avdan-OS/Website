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

1. Fork this repo

2. Clone your fork

```sh
git clone url://to.your/github/fork.git
```

> VSC Tip: You can clone your fork in VSC by clicking on `clone git repository` in the start menu, clicking on clone from GitHub, and selecting your repository.

3. Install dependencies

```sh
cd src && npm install
```

> VSC Tip: If you have code-runner installed, you can click ctrl/cmd + shift + P, search for Run Custom Command, and hit enter. This will install all dependencies for you automatically.

4. Run server

```sh
npm run dev
```

You can now go to https://localhost:3000 in your browser and it will update in real time.

> VSC Tip: If you have code-runner installed, you can click on run button anywhere in VSC and the server will just run (+ open the page in browser).

5. Make changes as you want

> Tip: To make the webpage compatible with mobile screen, try the `dynamic-width.ts` library in lib folder (JSDoc is available).

6. Commit & push your changes

```sh
git commit -m "concise commit message"
git push
```

> VSC Tip: you can do all of this work with GUI in the built in Source Control extension tab

7. Create pull request on GitHub

## Using translation

You need to import the translation library by add this code to the beginning of your code

```js
import { TranslatableText } from "../locale/TranslatableText";
```

Then wrap your text in TranslatableText tag, like this:

```jsx
<TranslatableText>I will be translated</TranslatableText>
```

Then just wait for translators to add the translation.

Currently, TranslatableText only support text, hence why it is name TranslatableText and not Translate or TranslatableComponent. Link injection is possible by wrapping the hyperlinked text in [%a] and manipulating the link property in TranslatableText (can be both relative or absolute url), and the styling for hyperlinked text can be manipulated through linkStyle property. Wrapping text in [%b] will make it bold.

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
