const router = require("express").Router();

const autorRouter = require("./autor");


router
.route("/")
.get((req, res)=> {
    res.status(200).json({msg: "Conexão com a API bem sucedida!"});
});

router.use("/", autorRouter);

module.exports = router;