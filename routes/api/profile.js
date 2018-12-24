// Location/Bio/Experiences/Education/Social network links

// @route       GET api/profile/test
// @description Tests profile route
// @access      Public

const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
