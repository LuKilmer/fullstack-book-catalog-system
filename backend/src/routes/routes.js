const router = require("express").Router();

const autorRouter = require("./autor");
const editoraRouter = require("./editora");


router
.route("/")
.get((req, res)=> {
    res.status(200).json({msg: "Conexão com a API bem sucedida!"});
});

router.use("/", autorRouter);

router.use("/", editoraRouter);

module.exports = router;