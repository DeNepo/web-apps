# Textidor

This fun little project is a fullstack text editor. From the frontend a user can:

- Get a list of all saved files
- Create a new file
- Edit an existing file
- Delete an existing file

This is an in-class project from the _web-apps_ module, check out [the module repo](https://github.com/hackyourfuturebelgium/web-apps/tree/master/isolate) for some practice problems before diving right in.

---

## The Setup

1. Clone the repo
1. `cd` into the project
1. `npm install`

---

## Learning Objectives

- Static & Dynamic serving
- Frontend/Backend, Client/Server
- Request/Response cycle & logging
- Express Routing
- Server Configuration
- Reverse-engineering

---

## Studying the Demo

All of the code in `/public` & `/config` works, study it all! There is also file called `demo.min.js` for you to run, spend some time playing around with the app before trying to solve the exercises. Here are some tips for studying this code:

- Understand the `/public` code, especially `actions.js`.
  - What method does each function use?
  - Which route does each function trigger?
  - How is the data sent from the frontend to the backend. Query? Param? Body?
- Check the console in your browser, in VSCode, and `access.log` _every time you click a button_
  - Which message was printed first? and from which lines of code?
- Take it one step further! Study the [network tab](https://developers.google.com/web/tools/chrome-devtools/network/) in your browser's devtools
  - When does a request go out from your browser?
  - When is a request logged in VSCode?
  - When does a response return to your browser?

Reverse Engineering for teh wins!

---

## Complete the Exercise

`index.js` is full of blanks, fill them in!
