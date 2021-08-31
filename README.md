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
  - [Week 5](#week-5)
- [Class Recordings](#class-recordings)
- [Curriculum](https://home.hackyourfuture.be/curriculum) (external)
- [HYF Home](https://home.hackyourfuture.be/) (external)

---

## Learning Objectives

<details>
<summary>expand/collapse</summary>
<br>

- 🥚 **HTTP**: You can explain these basic notions of the HTTP protocol, the main verbs, headers, ...
- 🥚 **Client/Server Architecture**: You can draw a diagram of your project explaining how the front- and back-ends connect, and can generalize this idea to any web app they use.
- 🥚 **Persistence**: You can explain what persistence is and how it is used in the backend of a web app. You can implement persistence using the backend's file system.
- 🥚 **Postman**: You can use Postman to test and inspect HTTP request/response cycles.
- 🥚 **VSCode Debugger**: You can use breakpoints to pause and step through a Node.js scripts and APIs using the VSCode debugger.
- 🥚 **Promisification**: You can convert built-in node modules from consuming callbacks being `async` functions.
- 🥚 **NPM Modules**: You can find, install, require and use an NPM module in your projects
- 🥚 **Function Roles**: You can explain and apply these 4 function roles in your backend code:
  - _controllers_: like event handlers, but for HTTP requests. (like event handlers in the frontend)
  - _middleware_: do things with a request before it is handled. (no frontend analogy)
  - _data access_: read/write from your data source and return the prepared data, in this module the data source is the file system. (like api calls in the frontend)
  - _logic_: pure functions that transform data and have unit tests. (same as for the frontend)
  - _utils_: functions with side-effects that do one helpful thing. (like procedures in the frontend)
- 🥚 **Express.js**: You can ...
  - listen a new server
  - use middleware
  - `.get`, `.post`, `.put`, `.delete`
  - route params
  - request body
  - send response
  - Express Router
  - static serving
- 🥚 **Entry Points**: You can identify the entry points for your app:
  - _Initialization_: npm scripts, first file, configuration points, server listening
  - _Request/Response Cycle_: first middleware, logging, routes, error handling
- 🥚 **API Documentation**: You can use JSDoc-style comments to document your API, and a documentation script to build API documentation
- 🐣 **File System**: You can read, write and append to .txt files. You can can parse, manipulate and re-save data stored in a .json file using the built-in `fs` and `util.promisify` functions.
- 🐣 **Data Validation**: You can validate data sent in a request to the backend before saving it to a .json file
- 🐣 **RESTful Routes**: You can implement RESTful routes in Express.js, including using the correct `app._` verbs.
- 🐣 **Authentication**: You can explain the principles of authentication and can contribute to a group project that has basic authentication
- 🐣 **Authentication vs. Authorization**: You can explain the difference and how it is implemented in your projects
- 🐣 **Environmental Variables**: You can explain what an environmental variable is, what they're used for, and how they're configured
- 🐣 **Backend Configuration**: You can use environmental variables to launch your backend in different modes
- 🐥 **Asynchronous Callbacks**: You can read, trace and complete simple scripts that use callbacks to work with the file system
- 🐥 **CI Deployment**: You can set up a deployment for your web apps and connect it to your repository using a CI action so `main`/`master` is always deployed.
- 🐔 **CLI Apps**: You can complete a simple CLI app that takes user input from the command line and accesses the file system
- 🐔 **`node-fetch`**: You make API requests from the backend, and use the data in your web apps
- 🐔 **Testing Routes**: You can explain how tests for API routes work, and can write routes that pass given tests. You can also write tests for a route that already exists.

</details>
<br>

[TOP](#web-apps)

---

## Suggested Study

References and Practice to help you master this module.

<details>
<summary>expand/collapse</summary>
<br>

> https://hackyourfuture.github.io/study/#
>
> [Class Recordings](#class-recordings)

### HTTP Statuses

- [In 60 Seconds](https://www.youtube.com/watch?v=GrNrcmD6HLA)
- [httpstatuses.com](https://httpstatuses.com/)
- [wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [http.cat](https://http.cat/)

### NPM

- [What is it? How to use it?](https://www.youtube.com/watch?v=8Rmj5UY5mJk)
- packages for fun:
  - [cowsay](https://github.com/piuccio/cowsay) - make cows say things
- packages for serious:
  - [node-fetch](https://github.com/node-fetch/node-fetch) - Make API requests from Node
  - [express](https://github.com/expressjs/express) - Minimalist web framework for node
  - [body-parser](https://github.com/expressjs/body-parser) - Parse HTTP request body into JS object
  - [cors](https://github.com/expressjs/cors) - Cross Origin Resource Sharing for Express
  - [morgan](https://github.com/expressjs/morgan) - logging for Express
  - [joi](https://github.com/hapijs/joi), [tv4](https://github.com/geraintluff/tv4) - JSON schemas & validation

### Debugging Node in VSCode

> [Postman](https://www.postman.com/) - use your APIs without a frontend

- [Getting started with Node.js debugging in VS Code](https://www.youtube.com/watch?v=2oFKNL7vYV8)
- [Burke Holland](https://www.youtube.com/watch?v=NW2HG9C_mZc)
- [VSCode Channel Intro](https://www.youtube.com/watch?v=2oFKNL7vYV8)
- [James Q Quick](https://www.youtube.com/watch?v=yFtU6_UaOtA)
- [CodeSpace, 2 Ways](https://www.youtube.com/watch?v=N8O-Yf3hc-A)

### Node.js

- **101**
  - [Mosh: Node.js in 1 hour](https://www.youtube.com/watch?v=uVwtVBpw7RQ&list=PLTjRvDozrdlydy3uUBWZlLUTNpJSGGCEm&index=1)
  - [Traversy: Node for Absolute Beginners](https://www.youtube.com/watch?v=U8XF6AFGqlc)
  - [Traversy: Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
  - [NetNinja: Node Js Crash Course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)
  - [`argsv`](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/) - Use command line arguments in Node
- **Built-In Modules**
  - [The file system](https://vimeo.com/414475261) (first 20 minutes)
  - references
    - [assert](https://nodejs.org/api/assert.html) - Test values in Node.js
    - [fs](https://nodejs.org/api/fs.html) - Read & write form the file system
    - [path](https://nodejs.org/api/path.html) - Manipulate file paths
    - [util.promisify](https://nodejs.org/api/util.html#util_util_promisify_original) - Convert functions that take callbacks into Promises
- **API Calls**
  - [node-fetch](https://www.npmjs.com/package/node-fetch): a module for using `fetch` syntax in Node.js
  - To study a full app with `node-fetch`, head over to [weather-it-promised](../integrate/weather-it-promised) & [weather-it-async-await](../integrate/weather-it-async-await)
  - [/node-fetchemon](./node-fetchemon) (exercises to practice `node-fetch`)

### About Servers

- Middleware: [tutorialspoint](https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm), [express.js guide](https://expressjs.com/en/guide/using-middleware.html), [writing middleware (video)](https://www.youtube.com/watch?v=msw1D8oSw5M)
- Static Serving: [alligator article](https://alligator.io/nodejs/serving-static-files-in-express/), [codedamn video](https://www.youtube.com/watch?v=7UErZ43jzrU)
- Error Handling Middleware:
  - [Handling Errors in Express](https://zellwk.com/blog/express-errors/)
  - [REST API Tutorial (Node, Express & Mongo) #10 - Error Handling](https://www.youtube.com/watch?v=w1V2SdzdQBs)
- CORS: [Cross Origin Resource Sharing](https://www.youtube.com/watch?v=x_Z6iYY5ibc)
- HTTP Statuses
  - [httpstatusdocs](https://httpstatusdogs.com/)
  - [HTTP Request Status Code Guide](https://www.youtube.com/watch?v=VLH3FMQ5BIQ)
  - [In 60 Seconds](https://www.youtube.com/watch?v=GrNrcmD6HLA)
  - [httpstatuses.com](https://httpstatuses.com/)
  - [wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
  - [http.cat](https://http.cat/)

### Express
- [What is Express?](https://www.besanttechnologies.com/what-is-expressjs)
- [LearnWebCode](https://www.youtube.com/watch?v=z7ikpQCWbtQ)
- [Traversy: Express.js Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE)
  [Build RESTful APIs with Node and Express](https://www.youtube.com/watch?v=pKd0Rpw7O48) by Mosh
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

### Best Practices

- `config` file: [how to](https://goenning.net/2016/05/13/how-i-manage-application-configuration-with-nodejs/)

### JSON Schemas

- [The Docs](https://json-schema.org/learn/getting-started-step-by-step.html)
- [a video](https://www.youtube.com/watch?v=tp4IzG6oDA0)
- Schema Validation
  - [jsonschemavalidator.net](https://www.jsonschemavalidator.net/) (used in the prep videos)
  - [tv4 validation library](https://github.com/geraintluff/tv4) (prep video and your projects)

### Examples and Exercises

- 🥚 **[`/commonjs-modules`](./commonjs-modules)**: Node.js doesn't use `import`/`export`, it uses `require`/`module.exports`. Explore some examples to understand how this works
- 🥚 **[`/process-argv`](./process-argv)**: learn to use process.argv to get user input from the command line. you won't need this to write an API, but it's simple enough and helps to understand how command line tools work.
- 🐣 **[`/file-system`](./file-system)**: practice using the `fs` module with callbacks, promises and `async`/`await`.
- 🐣 **[`/using-express`](./using-express)**: examples and exercises covering how to use express to build a web app.
- **[`/reverse-engineer'](./reverse-engineer)**: projects with a `demo.min.js` file to reverse-engineer
  - 🐣 `/textidor-series`
  - 🐥 `/entries-manager`, `/cowsaydex`
- 🥚🐣🐥🐔 **[`/example-apps`](./example-apps)**: a variety of projects to study, some are simple and some are advanced. Enjoy!
- 🐔 [`/node-fetchemon'](./node-fetchemon)
- 🐔 [node-practice-replace](https://github.com/hackyourfuturebelgium/node-practice-replace) (separate repo)
- 🐔 [pokedex-api](https://github.com/hackyourfuturebelgium/pokedex-api) (separate repo)
- 🐔 [diy-wiki](https://github.com/hackyourfuturebelgium/diy-wiki) (separate repo)

### Deployment

**Directly from GitHub**

- [FCC Article](https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/)
- [Heroku CI](https://www.heroku.com/continuous-integration)

**From Terminal**

- [Heroku Getting Started](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Scotch Tutorial](https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku)
- [Heroku devhints](https://devhints.io/heroku)
- [Heroku DevCenter: Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Heroku DevCenter: Advanced Automation](https://devcenter.heroku.com/articles/multiple-environments#advanced-linking-local-branches-to-remote-apps)

### From Founders and Coders

[Founders and Coders](https://founders-and-coders.gitbook.io/coursebook/) is another open-source course in web development. They have some great resources for learning Node, Express and Web Apps

- [Node.js](https://founders-and-coders.gitbook.io/coursebook/curriculum/node/schedule)
- [REST APIs](https://founders-and-coders.gitbook.io/coursebook/curriculum/rest-apis/schedule)
- [oliverjam](https://github.com/oliverjam?tab=repositories)
  - take a search through Oliver's repositories, worth it

</details>
<br>

[TOP](#web-apps)

---

## Week 1

- Developing an Express API with RESTful routes
- Persisting API data to the file system using a .json file

<details>
<summary>expand/collapse</summary>

### Before Class

- **Have Node**
  - Install [NVM (node version manager)](https://github.com/nvm-sh/nvm)
  - Make sure you have the latest Node.js installed (16._._)
  - [The Net Ninja, Introduction to Node.js](https://youtu.be/zb3Qk8SG5Ms)(video, for this week watch at least first 2 lessons or up to 5th, unfortunately lesson 6 about Express is outdated due to the new version of Express, where some methods were deprecated)
- **[Postman](https://www.postman.com/)**: install it and make an API request
   -[Postman tutorial](https://youtu.be/VywxIQ2ZXw4) (video, you need only first half 'Unit 1')
-**Express**
  - [What is Express?](https://www.besanttechnologies.com/what-is-expressjs)(article)
  - [LearnWebCode](https://www.youtube.com/watch?v=z7ikpQCWbtQ)(video)
- **Error-First Callbacks**
  - [fredkschott](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (article)
  - [David Connelly](https://www.youtube.com/watch?v=Pov477mI57A) (video)
- Read and run [./example-apps/storage-server](./example-apps/storage-server)
  - You do not need to understand everything, just enough that it's not totally new.

### Lesson Plan

#### Before Break

- What are servers? What's a server-client architecture?
- What is NodeJS?
- How can we use the Expressjs library to build servers on NodeJs?
- What's the difference between static and dynamic data?
- How can we serve simple static data? (route params, query params, static-server)
- HTTP Methods (Verbs)

#### After Break

- Walkthrough of a starter-project where one path has been fully implemented
- Class project: implement the missing path

### After Class

No project! There's enough to study without one ;)

If you want to begin preparing for the _group project in Week 3_ you can begin experimenting with the [Web Apps Starter Repo]()

</details>
<br>

[TOP](#web-apps)

---

## Week 2

- HTTP Status Codes
- POST Requests and the Body
- Using Postman
- How do we store/load data (memory vs. file system)?
- How do we separate our concerns? (multi-tier architecture)
- Using middleware
  - Logging
  - Validation
  - Error Handler

<details>
<summary>expand/collapse</summary>

### Before Class

### During Class

#### Before Break

#### After Break

### After Class

Again, no project. Just more study and prep for next week.

</details>
<br>

[TOP](#web-apps)

---

## Week 3

- CORS
- Authentication (BasicAuth, followed by Token-Based Auth, simple-password storage)
- Authorization
- Authentication vs. Authorization

<details>
<summary>expand/collapse</summary>

### Before Class

### During Class

#### Before Break

Lecture on CORS and Authentication/Authorization.

#### After Break

### After Class

Implement some form of authentification, preferably Basic Authentification in [this project](https://github.com/yoshimalaise/hyf-backend-introduction/tree/start-of-class)

</details>
<br>

[TOP](#web-apps)

---

## Week 4

- Token-based auth with hashed password storage
- JWT - JSON Web Tokens (fancy authentication)

<details>
<summary>expand/collapse</summary>

### Before Class

code review

### During Class

#### Before Break

#### After break

review common problems as a class

### After Class

#### Practice Project

continue group project

</details>
<br>

[TOP](#web-apps)

---

## Week 5

- finish group project

<details>
<summary>expand/collapse</summary>

### Before Class

### During Class

#### Before Break

code review

#### After break

review common problems as a class

### After Class

#### Practice Project

continue group project

</details>
<br>

[TOP](#web-apps)

---

## Class Recordings

- **Students**: Here you can find recordings of this module from past classes. Enjoy!
- **Coaches**: When sending your PR's with links please ...
  - Indicate which class you were teaching
  - Which week it was (if the module is more than 1 week)
  - Give your name
  - and a helpful description

<details open>
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

<details open>
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
2. Week 2
   1. [Static & Dynamic Data](https://vimeo.com/472210283)
   2. [Express: Params, Body, Queries ...](https://vimeo.com/472211229)
   3. [... Params, Body, Queries](https://vimeo.com/472211640)
   4. [Texidor](https://vimeo.com/472212077)
   5. [Texidor Recap & DIY Wiki](https://vimeo.com/472212418)
3. Week 3
   - [Middleware & Refactoring Servers](https://vimeo.com/488986376)
4. Week 4:
   - [JSON Schemas & Data Validation](https://vimeo.com/488987165)

</details>

---

<details open>
<summary><strong>Class 11-12</strong></summary>
<br>

> [Shaun](https://github.com/badgerbadgerbadgerbadger), [Andrej](https://github.com/gajduk), [Hazem](https://github.com/HazemBittar)

1. Week 1: [part 1](https://vimeo.com/515253111), [part 2](https://vimeo.com/515253217), [part 3](https://vimeo.com/515252844), [part 4](https://vimeo.com/515253024)
2. Week 2: [part 1](https://vimeo.com/518077272), [part 2](https://vimeo.com/518093815), [part 3](https://vimeo.com/518093931), [part 4](https://vimeo.com/518094041), [part 5](https://vimeo.com/518094087)
3. Week 3: [Refactoring pt. 1](https://vimeo.com/520916421), [Refactoring pt. 2](https://vimeo.com/520916669), [middleware & error handling](https://vimeo.com/520916816), [homework](https://www.youtube.com/watch?v=Xeb3xWYJUG8)
4. Week 4: [JSON Schemas](https://vimeo.com/523723387), [Schema Validation](https://vimeo.com/523722229), [`t4v` validation library](https://vimeo.com/523722129), [conclusion](https://vimeo.com/523722804)

</details>

---

<details open>
<summary><strong>Class 13-14</strong></summary>
<br>

> [Shaun](https://github.com/badgerbadgerbadgerbadger), [Yoshi](https://github.com/yoshimalaise)

1. Week 1:
   1. [Node, NPM, Packages](https://vimeo.com/589765594)
   2. [Express, `localhost`, Request/Response](https://vimeo.com/589767008)
   3. [Dynamic data, File System, Postman](https://vimeo.com/589767381)
   4. [Routing and Parameters, Persistence, Multi-Tier architecture](https://vimeo.com/589767890)
   5. [Slack clone part 1](https://vimeo.com/589768369)
   6. [Slack clone part 2](https://vimeo.com/589768677)
   7. [Monday review session](https://vimeo.com/588250826)

</details>
