const router = require("express").Router();

const autorController = require("../controllers/autorController");

router
.route("/autores")
.post((req,res)=>autorController.inserir(req,res));

router
.route("/autores")
.get((req, res)=> autorController.listarAll(req,res));


router
.route("/autores/:id")
.get((req, res)=> autorController.listar(req,res));

router
.route("/autores/:id")
.delete((req, res)=> autorController.deletar(req,res));
module.exports = router;