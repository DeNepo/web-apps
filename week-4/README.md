# Web Apps

[<< Week 3](../week-3/README.md) | [Main Page](../README.md)

## Week 4

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

- JSON Schemas
- Schema Validation
- Adding a `schema.json` file to your projects

---

## Prep Work

### Prep slides & recordings

- [slides](https://hackyourfuture.be/web-apps/week-4/prep.html)
- videos: [Part 1](https://vimeo.com/420678014), [Part 2](https://vimeo.com/422487341)
- [input validation example](https://github.com/HackYourFutureBelgium/web-apps/tree/master/isolate/input-validation-example-from-video)

### JSON Schemas?

- [The Docs](https://json-schema.org/learn/getting-started-step-by-step.html)
- [a video](https://www.youtube.com/watch?v=tp4IzG6oDA0)

### JSON Schema Validation

- [jsonschemavalidator.net](https://www.jsonschemavalidator.net/) (used in the prep videos)
- [tv4 validation library](https://github.com/geraintluff/tv4) (prep video and your projects)

---

## Lesson Plan

> [Lesson Plan Slides](https://hackyourfuture.be/web-apps/week-4)

Practice using JSON Schemas & `tv4` to protect data saved in a .json file.

### Isolate

- Exercises
  - [Write the Data](../isolate/input-validation-exercise-data)
  - [Write the Schema](../isolate/input-validation-exercise-schema)
  - [Write the Handlers](../isolate/input-validation-exercise-handlers)
- Examples
  - [example from the prep videos](../isolate/input-valiation-example-from-video)
  - [completed example](../isolate/input-valiation-example-complete)

### Integrate

Build a simple _virtual file system_ using a .json data file and schema.  This API is very similar to the one you studied the last two weeks, but instead of reading and writing actual files it stores file names and text contents as entries in a single .json file.

- [textidor-validated](https://github.com/hackyourfuturebelgium/textidor-validated) (starter repo)

---

## Assignments

### Exercises

- [pokedex-api](https://github.com/hackyourfuturebelgium/pokedex-api)

### Project

#### impress yourself!

This week's project is open-ended.  Starting with the [tv4-validation-fs-template](https://github.com/HackYourFutureBelgium/tv4-validation-fs-template), build a project to impress yourself.  You've been at HYF for a few months now and every week your projects have been given to you. You've hopefully learned about planning the steps of your projects, organizing your code, and writing clean code.  It's time to put yourself to the test.

Here are some tips to help you find your way:

1. _start with your user_ Begin by identifying the type of person who will want ot use your app, and why they would want to use it. Who is this project for? What does the app do for them? Why is this helpful?
1. _define your data_ Before you start coding, understand the data your application will be using. This includes writing the schema and creating some starter data by hand.
1. _write your backend first_ After defining your data, write an API that allows users to create, read, update, and delete entries in your data file.

Your finished repository should include:

- A `development-strategy.md` file to explain how you built the app in small pieces
- One branch per step in your `development-strategy.md`
- A complete README.md
- A working frontend in the `/client` directory
- A working API in the `/api` directory
- A schema and valid data in the `/data` directory
- A deployed demo using Heroku

#### Required: Deployment

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
