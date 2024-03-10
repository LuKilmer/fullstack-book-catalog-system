const router = require("express").Router();

const autorRouter = require("./autor");

router.use("/", autorRouter);

module.exports = router;