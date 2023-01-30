var express = require("express");

var router = express.Router();
/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/test", function (req, res) {
  var io = req.app.get("socketio");
});
module.exports = router;
