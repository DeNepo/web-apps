This folder contains four files

- `generateList.js`: a function exported for use in other files (logic)
- `test.js`: a file containing tests for the function in `generateList.js`
- `index.js`: a simple Command Line Interface for using the function in `listify.js` (handler)
- `demo.js`: a file you can run to see the expected behavior of `generateList.js` and `index.js`

---

you will need to write `index.js` and `generateList.js`.  To see how these should behave you can interact with the `demo.js`.  to test `generateList` you can run `test.js`

Look out for the `--numbered` flag. if you pass in `--numbered` as any of the CLI arguments it will tell the program to log a numbered list.  `--numbered` should never be a list item! here are some arguments to try out:

- `node demo.js a b c`
- `node demo.js --numbered a b c`
- `node demo.js a --numbered b c`
- `node demo.js a b --numbered c`
- `node demo.js a b c --numbered`

---

_challenge: what would you pass in the terminal to log 6 empty lines?_
