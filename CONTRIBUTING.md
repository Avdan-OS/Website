# AvdanOS Website Contributing Guide

## Prerequisite

If you want to make edit to this repository, make sure you're familiar with Typescript, CSS and React, with the exception of grammar fixes of course.

## Component Library

We use [Geist-UI](https://geist-ui.dev/) as our component library. You might want to read and get familier with it before starting your contribution.

## Styling

We use Prettier as formatter. All jsx naming should follow Airbnb style, and all css classes should use dash-case with the exception of BEM naming. 2 spaces as indent.

## Basics

To start your contribution follow the steps below

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

6. Commit your changes

```sh
git commit -m "concise message of the change"
```

`Tip: you can set up code signing and add -S to the commit command above to get a verified check mark`

8. Push your changes

```sh
git push
```

9. Create pull request on GitHub

## Pull Requests

 It would help the review process go faster if you list changes in the pull request, with the exception of a single small change in the title and nothing in comment. List of changes should be concise but meaningful

> [nothing]

❌ : What did you change? Reviewer need to guess what your code does

> Make browsing experience better on mobile

❌ : better is subjective, and we still don't know what you did

> Make pages respond to mobile screen

Meh : it's acceptable

> Footer: implement adaptive layout on small screen

✔️ : Now we know why a file changed and what it's suppose to do.

Bad pull request messages won't cause it to get closed, but better messages will speed up the process and make merging faster.

Since commits to the dev branch will automatically get deployed, please make sure all pull requests are complete. You can create draft pull requests, which will allow other people to see, give feedbacks, and request changes.

Even if you're in the organisation, code should be reviewed and approved by another member before merging, with exceptions of fixing a build fail or security breach. Complete redesign of an existing webpage will need approval from team lead.
