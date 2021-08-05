# Cowsaydex

A Node.js script that allows users to generate cowsays and save them to their file system. Indispensible for anyone interested in swarm computing, genetic algorithms, or neuraltechnics.

---

## Getting Started

1. Clone the repo
1. `cd` into the project
1. `npm install`

---

## Learning Objectives

- Processing and using CLI arguments with `process.argv`
- Writing to the file system
- Structuring and using CLI apps
- Reverse-engineering
- Using NPM packages (piuccio/cowsay: [NPM](https://www.npmjs.com/package/cowsay), [GitHub](https://github.com/piuccio/cowsay))
  - Reading documentation
  - Building projects around modules

---

## Running the Demo

This repo comes with a fully-functioning (but unreadable!) demo. Play with this demo for a while to make sure you understand how your `cowsaydex` should behave.

- `node demo.min.js -h`

---

## Complete the Exercise

`index.js` contains starter code that _almost_ entirely works. There are three tasks for you to complete:

1. **Process User Input**: Create an array containing all of (and only!) the command line arguments passed by the user
1. **Generate the `userConfig` object**: Convert the array of user arguments (all strings) into a config object describing the new cowsay
1. **Write the cowsay to a file**: Using the constant `COWSAID_DIRNAME` and the config option `.file`, write the generated cowsay to the user's file system
