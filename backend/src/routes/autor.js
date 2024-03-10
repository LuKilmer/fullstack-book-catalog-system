const router = require("express").Router();

const autorController = require("../controllers/autorController");

router
.route("/autores")
.post((req,res)=>autorController.inserir(req,res));

router
.route("/autores")
.get((req, res)=> autorController.listar(req,res));


module.exports = router;