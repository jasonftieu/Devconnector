// Deal with Authentication = username/email/password

// @route       GET api/users/test
// @description Tests users route
// @access      Public

const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
