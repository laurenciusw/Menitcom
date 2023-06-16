const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello!!");
});

router.use("/users", require("./userRoutes"));
router.use("/posts", require("./postRoutes"));
router.use("/categories", require("./categoryRoutes"));

module.exports = router;
