# Week 1

## Module Name

* [Prep Work](#prep-work)
* [Lesson Plan](#lesson-plan)
  * [Isolate](#isolate)
  * [Integrate](#integrate)
* [Assignments](#assignments)
  * [Exercises](#exercises)
  * [Project](#project)

---

## Prep Work

### Error-First Callbacks

* [fredkschott](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (article)
* [Sid Harder](https://duckduckgo.com/?q=sid+harder+javascript+error+first&atb=v214-1&iax=videos&ia=videos&iai=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0h8r2K7ZHZU) (video)
* [David Connelly](https://www.youtube.com/watch?v=Pov477mI57A) (video)

### Node.js 101

Both of these are long videos, you don't need to finish them before class. But they are great videos! Finish studying them over the next week for gud learns.

* [Mosh: Node.js in 1 hour](https://www.youtube.com/watch?v=uVwtVBpw7RQ&list=PLTjRvDozrdlydy3uUBWZlLUTNpJSGGCEm&index=1)
* [Traversy: Node for Absolute Beginners](https://www.youtube.com/watch?v=U8XF6AFGqlc)
* [Traversy: Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)

---

## Lesson Plan

> [Lesson Plan Slides](https://hackyourfuture.be/web-apps/week-1)

* Command line arguments: `process.argv`
* Native Node.js modules: `fs`, `assert`

### Isolate

* `process.argv`: [examples](../isolate/process-argv)
* `assert`: [examples](../isolate/assert)
* `fs`: [examples](../isolate/fs-examples)
* [week 1 exercises](../isolate/week-1-exercises)

### Integrate

* [entries-manager-cli](https://github.com/hackyourfuturebelgium/entries-manager-cli) (starter repo)

---

## Assignments

> Before getting started on the homework, take a minute to set up your [Homework Issue](https://github.com/HackYourFutureBelgium/homework-submission#homework-issues) on this module's project board.

### Exercises

#### Isolating JavaScript

* [node-fetchemon](https://github.com/hackyourfuturebelgium/node-fetchemon)
  * Practice making API calls from Node.js using the [node-fetch](https://www.npmjs.com/package/node-fetch) module
  * To study a full app with `node-fetch`, head over to [weather-it-promised](../integrate/weather-it-promised) & [weather-it-async-await](../integrate/weather-it-async-await)

#### Integrating JavaScript

* [cowsaydex](https://github.com/hackyourfuturebelgium/cowsaydex)
  * Practice integrating NPM Packages into your projects, starting with [cowsay](https://github.com/piuccio/cowsay)

### Project

#### `restful-courses`

> [Code-Along](https://github.com/HackYourFutureBelgium/homework-submission/#projects)

This week's project is to follow the  [Build RESTful APIs with Node and Express](https://www.youtube.com/watch?v=pKd0Rpw7O48) by Mosh.  Besides just Express and writing RESTful routes you will learn how to use _JSON schemas_, test your API's with _Postman_, use _environmental variables-, and practice continuous development using _nodemon_.

Don't worry if you don't understand everything in this project.  The tutorial covers a lot of material very quickly, we'll spend the next weeks going deeper into the topics Mosh covers here.  Think of this week's project as a sneak preview of the coming 3 weeks.

Just copying his code is not all! After finishing with the tutorial you will need to refactor the code so that It reads and writes from a file called `courses.json` instead of using a local variable. ie:

1. ```js
    app.post('/api/courses', (req, res)=>{
        const { error } = validateCourse(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        const course = {
            id: courses.length + 1,
            name: req.body.name
        };
        courses.push(course);
        res.send(course);
    });
    ```
1. ```js
    // there are some mistakes in this, we can't give it all away ;)
    app.post('/api/courses', (req, res) => {
      const { error } = validateCourse(req.body);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
      fs.writeFileSync(COURSES_PATH, (err, content) => {
        if (err) {
          res.status(500).send(err.message);
          return;
        }
        const parsedCourses = JSON.stringify(content);
        const course = {
          id: courses.length + 1,
          name: req.body.name
        };
        parsedCourses.push(course);
        const stringifiedCourses = JSON.parse(parsedCourses, null, '  ');
        fs.readFileSync(COURSES_PATH, parsedCourses, (err) => {
          if (err) {
            res.status(500).send(err.message);
            return;
          }
          res.send(course);
        });
      });
    });
    ```

You will be expected to turn in your code from his tutorial on a new repository called `restful-courses`. you will be assessed not only on your live demo, but also on the quality of your code, the correctness of your branches, the organization of your code, and the completeness of your README.  Your repo must include:

* A `development-strategy.md` file to explain how you built the app in small pieces (this file doesn't need to match the tutorial!)
* One branch per step in your `development-strategy.md`
* A complete README.md

#### Challenge: Deployment

Deploying you project is not required, but is suggested.  This is a nice first project to try out fullstack deployment.

__Directly from GitHub__

* [FCC Article](https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/)
* [Heroku CI](https://www.heroku.com/continuous-integration)

__From Terminal__

* [Heroku Getting Started](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
* [Scotch Tutorial](https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku)
* [Heroku devhints](https://devhints.io/heroku)
* [Heroku DevCenter: Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
* [Heroku DevCenter: Advanced Automation](https://devcenter.heroku.com/articles/multiple-environments#advanced-linking-local-branches-to-remote-apps)
