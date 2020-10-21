# Web Apps

![client/server diagram](./diagrams/client-server-model.svg)

- [wikipedia](https://en.wikipedia.org/wiki/Client%E2%80%93server_model#/media/File:Client-server-model.svg)

---

## Contents

- [Learning Objectives](#learning-objectives)
- [Suggested Study](#suggested-study)
  - [Isolate](./isolate/index.html)
  - [Integrate](./integrate/README.md)
- Sundays & Projects
  - [Week 1](#week-1)
  - [Week 2](#week-2)
  - [Week 3](#week-3)
  - [Week 4](#week-4)
- [Class Recordings](#class-recordings)
- [Curriculum](https://home.hackyourfuture.be/curriculum) (external)
- [HYF Home](https://home.hackyourfuture.be/) (external)

---

## Learning Objectives

<details>
<summary>expand/collapse</summary>

### Programming Skills

- Comfortably work with the file system
- Explain "persistence"
- Build basic fullstack projects (SPA/API) that save to the file system
- Write RESTful APIs for simple data relationships
- Using NPM Packages in your projects
- Using Postman to develop APIs without a frontend
- Running and writing tests for API routes
- Documenting your code with JSDoc

### Native Node.js

- Node.js CLI scripts
  - [argsv](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/) - Use command line arguments in Node
- Native Node.js modules
  - [assert](https://nodejs.org/api/assert.html) - Test values in Node.js
  - [fs](https://nodejs.org/api/fs.html) - Read & write form the file system
  - [path](https://nodejs.org/api/path.html) - Manipulate file paths
  - [util.promisify](https://nodejs.org/api/util.html#util_util_promisify_original) - Convert functions that take callbacks into Promises

### NPM Packages

- for fun:
  - [cowsay](https://github.com/piuccio/cowsay) - make cows say things
- for serious:
  - [node-fetch](https://github.com/node-fetch/node-fetch) - Make API requests from Node
  - [express](https://github.com/expressjs/express) - Minimalist web framework for node
  - [body-parser](https://github.com/expressjs/body-parser) - Parse HTTP request body into JS object
  - [cors](https://github.com/expressjs/cors) - Cross Origin Resource Sharing for Express
  - [morgan](https://github.com/expressjs/morgan) - logging for Express
  - [joi](https://github.com/hapijs/joi) - JSON schemas & validation

### Development Tools

- [JSDoc](https://github.com/jsdoc/jsdoc) - Generate documentation for your projects
- [Postman](https://www.postman.com/) - Test your APIs without a frontend

</details>
<br>

[TOP](#asynchronous-programming)

---

## About the Projects

Projects in this module will build on what you learned in the last module by adding in _network calls_ to APIS and scheduled tasks on the event loop.

[TOP](#asynchronous-programming)

---

## Suggested Study

References and Practice to help you master this module.

<details>
<summary>expand/collapse</summary>
<br>

> https://study.hackyourfuture.be/node-js

### Debugging Node in VSCode

- [Getting started with Node.js debugging in VS Code](https://www.youtube.com/watch?v=2oFKNL7vYV8)
- [Burke Holland](https://www.youtube.com/watch?v=NW2HG9C_mZc)
- [VSCode Channel Intro](https://www.youtube.com/watch?v=2oFKNL7vYV8)
- [James Q Quick](https://www.youtube.com/watch?v=yFtU6_UaOtA)
- [CodeSpace, 2 Ways](https://www.youtube.com/watch?v=N8O-Yf3hc-A)

### NPM

- [What is it? How to use it?](https://www.youtube.com/watch?v=8Rmj5UY5mJk)

### Node.js

- **101**
  - [Mosh: Node.js in 1 hour](https://www.youtube.com/watch?v=uVwtVBpw7RQ&list=PLTjRvDozrdlydy3uUBWZlLUTNpJSGGCEm&index=1)
  - [Traversy: Node for Absolute Beginners](https://www.youtube.com/watch?v=U8XF6AFGqlc)
  - [Traversy: Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
- **Built-In Modules**
  - [About _/examples-and-exercises:_ `fs`](https://vimeo.com/414475261) (first 20 minutes)
  - [promisifying-fs](https://github.com/hackyourfuturebelgium/promisifying-fs)
- **CLIs**
  - [cowsaydex](https://github.com/hackyourfuturebelgium/cowsaydex)
    - Practice using NPM Packages into your projects, starting with [cowsay](https://github.com/piuccio/cowsay)
  - [node-practice-replace](https://github.com/HackYourFutureBelgium/node-practice-replace)
- **API Calls**
  - [node-fetch](https://www.npmjs.com/package/node-fetch): a module for using `fetch` syntax in Node.js
  - To study a full app with `node-fetch`, head over to [weather-it-promised](../integrate/weather-it-promised) & [weather-it-async-await](../integrate/weather-it-async-await)
  - [node-fetchemon](https://github.com/hackyourfuturebelgium/node-fetchemon) (exercises to practice `node-fetch`)

### About Servers

- HTTP Status Code: [HTTP Request Status Code Guide](https://www.youtube.com/watch?v=VLH3FMQ5BIQ)
- Middleware: [tutorialspoint](https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm), [express.js guide](https://expressjs.com/en/guide/using-middleware.html), [writing middleware (video)](https://www.youtube.com/watch?v=msw1D8oSw5M)
- Static Serving: [alligator article](https://alligator.io/nodejs/serving-static-files-in-express/), [codedamn video](https://www.youtube.com/watch?v=7UErZ43jzrU)
- Error Handling Middleware:
  - [Handling Errors in Express](https://zellwk.com/blog/express-errors/)
  - [REST API Tutorial (Node, Express & Mongo) #10 - Error Handling](https://www.youtube.com/watch?v=w1V2SdzdQBs)
- CORS: [Cross Origin Resource Sharing](https://www.youtube.com/watch?v=x_Z6iYY5ibc)
- HTTP Statuses
  - [In 60 Seconds](https://www.youtube.com/watch?v=GrNrcmD6HLA)
  - [httpstatuses.com](https://httpstatuses.com/)
  - [wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
  - [http.cat](https://http.cat/)

### Express

- [Traversy: Express.js Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE)
- How To Build a Job Search App (Node, APIs, Vanilla JS): [video](https://www.youtube.com/watch?v=v7cprTuAnlA), [code](https://github.com/codebubb/job-search-app/)
- Error Handling
  - [The Net Ninja](https://www.youtube.com/watch?v=w1V2SdzdQBs)
  - [Andrew Mead](https://www.youtube.com/watch?v=R4uiu3fR38I)
  - [Devnami](https://www.youtube.com/watch?v=pYj48mDXHBU)
- `Router`
  - [Scotch.io](https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4)
  - [Hungry Turtle](https://www.youtube.com/watch?v=paNikhYqdz0)
  - [Rithm School](https://www.youtube.com/watch?v=Lxp7147emnM)
  - [The Docs](https://expressjs.com/en/guide/routing.html)
- [pokedex-api](https://github.com/hackyourfuturebelgium/pokedex-api)

### Best Practices

- `config` file: [how to](https://goenning.net/2016/05/13/how-i-manage-application-configuration-with-nodejs/)

### JSON Schemas

- [The Docs](https://json-schema.org/learn/getting-started-step-by-step.html)
- [a video](https://www.youtube.com/watch?v=tp4IzG6oDA0)
- Schema Validation
  - [jsonschemavalidator.net](https://www.jsonschemavalidator.net/) (used in the prep videos)
  - [tv4 validation library](https://github.com/geraintluff/tv4) (prep video and your projects)

### Deployment

__Directly from GitHub__

- [FCC Article](https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/)
- [Heroku CI](https://www.heroku.com/continuous-integration)

__From Terminal__

- [Heroku Getting Started](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Scotch Tutorial](https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku)
- [Heroku devhints](https://devhints.io/heroku)
- [Heroku DevCenter: Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Heroku DevCenter: Advanced Automation](https://devcenter.heroku.com/articles/multiple-environments#advanced-linking-local-branches-to-remote-apps)

### From Founders and Coders

[Founders and Coders](https://founders-and-coders.gitbook.io/coursebook/) is another open-source course in web development.  They have some great resources for learning Node, Express and Web Apps

- [Node.js](https://founders-and-coders.gitbook.io/coursebook/curriculum/node/schedule)
- [REST APIs](https://founders-and-coders.gitbook.io/coursebook/curriculum/rest-apis/schedule)
- [oliverjam](https://github.com/oliverjam?tab=repositories)
  - take a search through Oliver's repositories, worth it

</details>
<br>

[TOP](#asynchronous-programming)

---

## Week 1

**In Class:** File system I/O & basic Node.js CLI programs

**At Home:** Express APIs that access the file system

<details>
<summary>expand/collapse</summary>

### Prep Work

> before class

- [Week 1 Prep Video](https://vimeo.com/467644885)
  - Running .js files in Node
  - `process.argv`
  - `assert`
  - `fs`
- **Have Node**
  - Install [NVM (node version manager)](https://github.com/nvm-sh/nvm)
  - Make sure you have the latest Node.js installed (14.*.*)
- **VS Code Debugger**
  - [Getting started with Node.js debugging in VS Code](https://www.youtube.com/watch?v=2oFKNL7vYV8)
- **Error-First Callbacks**
  - [fredkschott](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (article)
  - [Sid Harder](https://duckduckgo.com/?q=sid+harder+javascript+error+first&atb=v214-1&iax=videos&ia=videos&iai=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0h8r2K7ZHZU) (video)
  - [David Connelly](https://www.youtube.com/watch?v=Pov477mI57A) (video)
- **`/examples-and-exercises`**
  - 2. Modules (examples)
  - 3. `process.argv` (example.js)
  - 4. `fs` Sync (examples)

### Lesson Plan

> during class

[Class Slides](./slides/1-class.html)

#### Before Break

- [`process.argv`](./examples-and-exercises/03-process-argv)
- `fs`: [examples](./isolate/fs/examples)

#### After break

- [entries-manager-cli](./practice-projects/1-entries-manager)

### Project

> after class


#### `restful-courses`

> Group Project, [Code-Along](https://github.com/HackYourFutureBelgium/homework-submission/#projects)

This week's project is to follow the [Build RESTful APIs with Node and Express](https://www.youtube.com/watch?v=pKd0Rpw7O48) by Mosh.  Besides just Express and writing RESTful routes you will learn how to use _JSON schemas_, test your API's with _Postman_, use _environmental variables-, and practice continuous development using _nodemon_.

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
      fs.writeFile(COURSES_PATH, (err, content) => {
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
        fs.readFile(COURSES_PATH, parsedCourses, (err) => {
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

#### Checklist

```md
- [ ] [repo](https://github.com/_/_) (with a complete README)
- [ ] [live demo](https://_.github.io/_)
- Project Planning
  - [ ] [Backlog](https://github.com/_/_/tree/master/project-planning/backlog.md)
  - [ ] [Development Strategy](https://github.com/_/_/tree/master/project-planning/development-strategy.md)
  - [ ] [Project board](https://github.com/_/_/projects/_)
- Implementation
  - [ ] API data is saved in `courses.json`
  - [ ] Deployed - [deployment url]()
```

</details>
<br>

[TOP](#asynchronous-programming)

---

## Week 2

APIs & Client/Server web apps

<details>
<summary>expand/collapse</summary>

### Prep Work

> before class

- Slides: [live](./slides/2-prep.html)
- Recordings: [Part 1](https://vimeo.com/415924788), [Part 2](https://vimeo.com/415919630), [Part 3](https://vimeo.com/416350569)
- [About Servers](#about-servers)
- `config` file: [how to](https://goenning.net/2016/05/13/how-i-manage-application-configuration-with-nodejs/)


### Lesson Plan

> during class

[Class Slides](./slides/2-class.html)

#### Before Break

- [Express Static Serving](./examples-and-exercises/07-express-static-serving)
- [Express Dynamic Serving](./examples-and-exercises/08-express-dynamice-serving)
- [Params, Queries, Body](./examples-and-exercises/09-params-queries-body)

#### After break

- [textidor](./practice-projects/2-textidor)

### Project

> after class

**DIY Wiki**: [Starer Code](https://home.hackyourfuture.be/students/weekly-assignments#projects) (Group Project)

This week's project is to complete the code in [the `diy-wiki` repository](https://github.com/hackyourfuturebelgium/diy-wiki).

#### Checklist

```md
- [ ] [repo](https://github.com/_/_) (with a complete README)
- [ ] [live demo](https://_.github.io/_)
- Project Planning
  - [ ] [Backlog](https://github.com/_/_/tree/master/project-planning/backlog.md)
  - [ ] [Development Strategy](https://github.com/_/_/tree/master/project-planning/development-strategy.md)
  - [ ] [Project board](https://github.com/_/_/projects/_)
- Implementation
  - [ ] Deployed - [deployment url]()
```

</details>
<br>

[TOP](#asynchronous-programming)

---

## Week 3

- HTTP status codes
- Error handling middleware
- Separating concerns in Node/Express servers
- Using Express Routers to write modular servers

<details>
<summary>expand/collapse</summary>

### Prep Work

> before class

- [slides](./slides/3-prep.html)
- videos: [Part 1](https://vimeo.com/417960548), [Part 2](https://vimeo.com/418360319), [Part 3](https://vimeo.com/418359614)

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

### Lesson Plan

> during class

[Class Slides](./slides/3-class.html)

#### Before Break

Practice refactoring small Express apps from single-file servers into multiple files using `express.Router()`.

- [10-refactoring-apis](./examples-and-exercises/10-refactoring-apis)
- [11-middleware-and-error-handling](./examples-and-exercises/11-middleware-and-error-handling)

#### After break

Revisit the text editor app you studied last week, this time refactoring the server from a single file to the same folder structure as the exercises. The code in this repo works!  Your job is to make sure it _still_ works after you've refactored it :)

- [textidor-refactor](./practice-projects/3-textidor-refactor)

### Project

> after class

- [the `courses-web-app` template repo](https://github.com/HackYourFutureBelgium/courses-web-app) (Group Project)

Again with the refactors?! This week's project is refactor the API from [Build RESTful APIs with Node and Express](https://www.youtube.com/watch?v=pKd0Rpw7O48) into a full web app. To help you get started, you can use [the `courses-web-app` template repo](https://github.com/HackYourFutureBelgium/courses-web-app).

Besides refactoring the backend into multiple files, you are also expected to develope a frontend for your API in the `/client` directory.  You can design the frontend however you like, and organize the code in a way that makes sense to you.  The main objective this week is to understand how the frontend & backend are related.

#### Checklist

```md
- [ ] [repo](https://github.com/_/_) (with a complete README)
- [ ] [live demo](https://_.github.io/_)
- Project Planning
  - [ ] [Backlog](https://github.com/_/_/tree/master/project-planning/backlog.md)
  - [ ] [Development Strategy](https://github.com/_/_/tree/master/project-planning/development-strategy.md)
  - [ ] [Project board](https://github.com/_/_/projects/_)
- Implementation
  - [ ] Config
  - [ ] Deployed - [deployment url]()
  - [ ] data in a .json file
```

</details>
<br>

[TOP](#asynchronous-programming)

---

## Week 4

- JSON Schemas
- Schema Validation
- Adding a `schema.json` file to your projects

<details>
<summary>expand/collapse</summary>

### Prep Work

> before class

- [slides](./slides/4-prep.html)
- videos: [Part 1](https://vimeo.com/420678014), [Part 2](https://vimeo.com/422487341)
- [input validation example](./isolate/input-validation-example-from-video)

### JSON Schemas?

- [The Docs](https://json-schema.org/learn/getting-started-step-by-step.html)
- [a video](https://www.youtube.com/watch?v=tp4IzG6oDA0)

### JSON Schema Validation

- [jsonschemavalidator.net](https://www.jsonschemavalidator.net/) (used in the prep videos)
- [tv4 validation library](https://github.com/geraintluff/tv4) (prep video and your projects)


### Lesson Plan

> during class

[Class Slides](./slides/4-class.html)

#### Before Break

Practice using JSON Schemas & `tv4` to protect data saved in a .json file.

- [12-data-validation](./examples-and-exercises/12-data-validation) []

#### After break

Build a simple _virtual file system_ using a .json data file and schema.  This API is very similar to the one you studied the last two weeks, but instead of reading and writing actual files it stores file names and text contents as entries in a single .json file.

- [textidor-validated](./practice-projects/4-textidor-validated)

### Project

> after class

**impress yourselves!** (Group Project)

This week's project is open-ended.  Starting with the [tv4-validation-fs-template](https://github.com/HackYourFutureBelgium/tv4-validation-fs-template), build a project to impress yourself.  You've been at HYF for a few months now and every week your projects have been given to you. You've hopefully learned about planning the steps of your projects, organizing your code, and writing clean code.  It's time to put yourself to the test.

Here are some tips to help you find your way:

1. _start with your user_ Begin by identifying the type of person who will want ot use your app, and why they would want to use it. Who is this project for? What does the app do for them? Why is this helpful?
2. _define your data_ Before you start coding, understand the data your application will be using. This includes writing the schema and creating some starter data by hand.
3. _write your backend first_ After defining your data, write an API that allows users to create, read, update, and delete entries in your data file(s).

#### Checklist

```md
- [ ] [repo](https://github.com/_/_) (with a complete README)
- [ ] [live demo](https://_.github.io/_)
- Project Planning
  - [ ] [Backlog](https://github.com/_/_/tree/master/project-planning/backlog.md)
  - [ ] [Development Strategy](https://github.com/_/_/tree/master/project-planning/development-strategy.md)
  - [ ] [Project board](https://github.com/_/_/projects/_)
- Implementation
  - [ ] Deployed - [deployment link]()
  - [ ] A working frontend in the `/client` directory
  - [ ] A working API in the `/api` directory
  - [ ] A schema and valid data in the `/data` directory
```

</details>
<br>

[TOP](#asynchronous-programming)

---

## Class Recordings

- **Students**: Here you can find recordings of this module from past classes.  Enjoy!
- **Coaches**: When sending your PR's with links please ...
  - Indicate which class you were teaching
  - Which week it was (if the module is more than 1 week)
  - Give your name
  - and a helpful description

<details>
<summary><strong>Class 7-8</strong></summary>
<br>

> [Shaun](https://github.com/badgerbadgerbadgerbadger), [Evan](https://github.com/colevanderswands/)

1. week 1:
   - Part 1: [Node, Web Apps, CLI's, `fs`, `process.argv`, `assert`](https://vimeo.com/414454713)
   - Part 2: [Exercise recap, Project intro](https://vimeo.com/414475261)
   - Wrap-up: [Homework explanation](https://vimeo.com/414475261)
2. week 2:
   - [Part 1](https://vimeo.com/416866173)
   - [Part 2](https://vimeo.com/416889277)
   - [Wrap-up](https://vimeo.com/416906829)
3. week 3:
   - Part 1: [A](https://vimeo.com/417960548), [B](https://vimeo.com/419545487)
   - [Part 2](https://vimeo.com/418360319)
   - [Part 3](https://vimeo.com/418359614)
4. week 4
   - [Part 1](https://vimeo.com/422120045)
   - [Part 2](https://vimeo.com/422148011)
   - [Part 3](https://vimeo.com/422149853)

</details>

---


<details>
<summary><strong>Class 9-10</strong></summary>
<br>

> [Shaun](https://github.com/badgerbadgerbadgerbadger)

1. Week 1
   1. [Node.js 101 & Client/Server](https://vimeo.com/469893530)
   2. [CLI Input with `process.argv`](https://vimeo.com/469895085)
   3. [`assert` & `fs` part 1](https://vimeo.com/469895326)
   4. [`fs` part 2](https://vimeo.com/469895748)
   5. [Entries Manager part 1](https://vimeo.com/469896412)
   6. [Entries Manager part 2 & Project Intro](https://vimeo.com/469897191)
