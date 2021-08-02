const handlers = {
  sayHello: (req, res) => {

    const name = req.query.name;
    const reply = `Hello ${name}! Your tree is ${req.query.tree}`;

    res.status(200)
      .send(reply);
  },
  sayBye: (req, res) => {

    const name = req.query.name;
    const reply = `Bye ${name}!`;

    res.status(200)
      .send(reply);
  },
  doSomething: (req, res) => {

    console.log(req.body);
    res.sendStatus(200);
  },
};

module.exports = handlers;
