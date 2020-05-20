# Web Apps

[<< Week 2](../week-2/README.md) | [Main Page](../README.md) | [Week 4 >>](../week-4/README.md)

## Week 3

- [Learning Objectives](#learning-objectives)
- [Prep Work](#prep-work)
- [Lesson Plan](#lesson-plan)
  - [Isolate](#isolate)
  - [Integrate](#integrate)
- [Assignments](#assignments)
  - [Suggested Study](#suggested-study)
  - [Exercises](#exercises)
  - [Project](#project)

---

## Learning Objectives

- HTTP status codes
- Error handling middleware
- Separating concerns in Node/Express servers
- Using Express Routers to write modular servers

---

## Prep Work

### Prep slides & recordings

- [slides](https://hackyourfuture.be/web-apps/week-3/prep.html)
- Recordings: [Part 1](https://vimeo.com/417960548), [Part 2](https://vimeo.com/418360319), [Part 3](https://vimeo.com/418359614)

### HTTP Statuses

- [In 60 Seconds](https://www.youtube.com/watch?v=GrNrcmD6HLA)
- [httpstatuses.com](https://httpstatuses.com/)
- [wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [http.cat](https://http.cat/)

### Express Router

- [Scotch.io](https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4)
- [Hungry Turtle](https://www.youtube.com/watch?v=paNikhYqdz0)
- [Rithm School](https://www.youtube.com/watch?v=Lxp7147emnM)
- [The Docs](https://expressjs.com/en/guide/routing.html)

### Express Error Handling

- [The Net Ninja](https://www.youtube.com/watch?v=w1V2SdzdQBs)
- [Andrew Mead](https://www.youtube.com/watch?v=R4uiu3fR38I)
- [Devnami](https://www.youtube.com/watch?v=pYj48mDXHBU)

---

## Lesson Plan

> [Lesson Plan Slides](https://hackyourfuture.be/web-apps/week-3)

Practice refactoring small Express apps from single-file servers into multiple files using `express.Router()`.

### Isolate

These exercises have a server running from a single file (`index.js`), your task is to refactor them to match the file structure in the examples. Bonust points: convert all callback and promise code that you see into async/await.

- Exercises
  - [param/query/body](../isolate/refactored-exercise-param-query-body)
  - [`fs`: error middleware](../isolate/refactored-exercise-fs-error-middleware)
  - [`fs`: param/query/body](../isolate/refactored-exercise-fs-param-query-body)
- Examples
  - [dynamic server](../isolate/refactored-example-dynamic)
  - [params/query/body](../isolate/refactored-example-param-query-body)

### Integrate

Revisit the text editor app you studied last week, this time refactoring the server from a single file to the same folder structure as the exercises. The code in this repo works!  Your job is to make sure it _still_ works after you've refactored it :)

- [textidor-refactor](https://github.com/hackyourfuturebelgium/textidor-refactor) (starter repo)

---

## Assignments

### Suggested Study

- [Traversy Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE)

### Exercises

- [node-practice-replace](https://github.com/HackYourFutureBelgium/node-practice-replace)

### Project

#### `courses-web-app`

- [the `courses-web-app` template repo](https://github.com/HackYourFutureBelgium/courses-web-app)

Again with the refactors?! This week's project is refactor the API from [Build RESTful APIs with Node and Express](https://www.youtube.com/watch?v=pKd0Rpw7O48) into a full web app. To help you get started, you can use [the `courses-web-app` template repo](https://github.com/HackYourFutureBelgium/courses-web-app).

Besides refactoring the backend into multiple files, you are also expected to develope a frontend for your API in the `/client` directory.  You can design the frontend however you like, and organize the code in a way that makes sense to you.  The main objective this week is to understand how the frontend & backend are related.

Your repo must include:

- A `development-strategy.md` file to explain how you built the app in small pieces (this file doesn't need to match the tutorial!)
- One branch per step in your `development-strategy.md`
- A complete README.md
- A working frontend in the `/client` directory

#### Challenge: Deployment

Deploying you project is not required, but is suggested.  This is a nice first project to try out fullstack deployment.

__Directly from GitHub__

- [FCC Article](https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/)
- [Heroku CI](https://www.heroku.com/continuous-integration)

__From Terminal__

- [Heroku Getting Started](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Scotch Tutorial](https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku)
- [Heroku devhints](https://devhints.io/heroku)
- [Heroku DevCenter: Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Heroku DevCenter: Advanced Automation](https://devcenter.heroku.com/articles/multiple-environments#advanced-linking-local-branches-to-remote-apps)
