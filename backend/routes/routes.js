const express = require("express");
const router = express.Router();
const userData = require("../models/Users");

router.get("/", (req, res) => {
  userData.find((err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

router.post("/adduser", async (req, res) => {
  const newUser = new userData({
    name: req.body.name,
    email: req.body.email,
    accountType: req.body.accountType,
    balance: req.body.balance,
  });

  await newUser
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

// Required => update balance

router.get("/transfer/:name/:amount", (req, res) => {
  userData.findOneAndUpdate(
    { name: req.params.name },
    { $inc: { balance: parseInt(req.params.amount) } },
    (err, data) => {
      if (err) console.log(err);
      else {
        res.json(data);
      }
    }
  );
});

module.exports = router;
