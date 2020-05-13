# Web Apps

[<< Week 1](../week-1/README.md) | [Main Page](../README.md) | [Week 3 >>](../week-3/README.md)

## Week 2

- [Prep Work](#prep-work)
- [Lesson Plan](#lesson-plan)
  - [Isolate](#isolate)
  - [Integrate](#integrate)
- [Assignments](#assignments)
  - [Exercises](#exercises)
  - [Project](#project)

---

## Prep Work

### Prep Slides & Recordings

- Slides: [live](https://hackyourfuture.be/web-apps/week-2/prep.html), [source](./prep.html)
- Recordings: [Part 1](https://vimeo.com/415924788), [Part 2](https://vimeo.com/415919630), [Part 3](https://vimeo.com/416350569)

### About Servers

- HTTP Status Code: [HTTP Request Status Code Guide](https://www.youtube.com/watch?v=VLH3FMQ5BIQ)
- Middleware: [tutorialspoint](https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm), [express.js guide](https://expressjs.com/en/guide/using-middleware.html), [writing middleware (video)](https://www.youtube.com/watch?v=msw1D8oSw5M)
- Static Serving: [alligator article](https://alligator.io/nodejs/serving-static-files-in-express/), [codedamn video](https://www.youtube.com/watch?v=7UErZ43jzrU)
- Error Handling Middleware:
  - [Handling Errors in Express](https://zellwk.com/blog/express-errors/)
  - [REST API Tutorial (Node, Express & Mongo) #10 - Error Handling](https://www.youtube.com/watch?v=w1V2SdzdQBs)
- CORS: [Cross Origin Resource Sharing](https://www.youtube.com/watch?v=x_Z6iYY5ibc)
- VS Code Debugger: [Getting started with Node.js debugging in VS Code](https://www.youtube.com/watch?v=2oFKNL7vYV8)

### Best Practices

- `config` file: [how to](https://goenning.net/2016/05/13/how-i-manage-application-configuration-with-nodejs/)

---

## Lesson Plan

> [Lesson Plan Slides](https://hackyourfuture.be/web-apps/week-2)

### Isolate

- Static Serving: [example](../isolate/server-static-example), [exercise](../isolate/server-static-exercise)
- Dynamic Serving: [example](../isolate/server-dynamic-example)
- Params, Queries & Body: [example](../isolate/server-param-query-body-example), [exercise](../isolate/server-param-query-body-exercise)

### Integrate

- [textidor](https://github.com/hackyourfuturebelgium/textidor) (starter repo). A basic fullstack text editor app.

---

## Assignments

> Before getting started on the homework, take a minute to set up your [Homework Issue](https://github.com/HackYourFutureBelgium/homework-submission#homework-issues) on this module's project board.

### Exercises

#### Suggested Study

- [Express.js Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE)
- How To Build a Job Search App (Node, APIs, Vanilla JS): [video](https://www.youtube.com/watch?v=v7cprTuAnlA), [code](https://github.com/codebubb/job-search-app/)
- Debugging Node/Express with VSCode
  - [Burke Holland](https://www.youtube.com/watch?v=NW2HG9C_mZc)
  - [VSCode Channel Intro](https://www.youtube.com/watch?v=2oFKNL7vYV8)
  - [James Q Quick](https://www.youtube.com/watch?v=yFtU6_UaOtA)
  - [CodeSpace, 2 Ways](https://www.youtube.com/watch?v=N8O-Yf3hc-A)

#### Isolate

- [promisifying-fs](https://github.com/hackyourfuturebelgium/promisifying-fs)

#### Integrate

- `poke-it`
  - Write a CLI app that reads from the [PokeApi](https://pokeapi.co/) and renders to the console
  - Base your code off of these examples: [weather-it-promised](../integrate/weather-it-promised) & [weather-it-async-await](../integrate/weather-it-async-await)

### Project

#### `diy-wiki`

> [Starer Code](https://home.hackyourfuture.be/students/weekly-assignments#projects)

This week's project is to complete the code in [the `diy-wiki` repository](https://github.com/hackyourfuturebelgium/diy-wiki). Besides a working `server.js` file, your repo should have:

- A `development-strategy.md` file to explain how you built the app in small pieces (this file doesn't need to match the tutorial!)
- One branch per step in your `development-strategy.md`
- A complete README.md

#### Challenge: Deployment

Deploying you project is not required, but is suggested. This is a nice first project to try out fullstack deployment.

**Directly from GitHub**

- [FCC Article](https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/)
- [Heroku CI](https://www.heroku.com/continuous-integration)

**From Terminal**

- [Heroku Getting Started](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Scotch Tutorial](https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku)
- [Heroku devhints](https://devhints.io/heroku)
- [Heroku DevCenter: Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Heroku DevCenter: Advanced Automation](https://devcenter.heroku.com/articles/multiple-environments#advanced-linking-local-branches-to-remote-apps)
