const router = require("express").Router();

const editoraController = require("../controllers/editoraController");

router
.route("/editoras")
.post((req,res)=>editoraController.inserir(req,res));

router
.route("/editoras")
.get((req, res)=> editoraController.listarTodos(req,res));

router
.route("/editoras/:id")
.get((req, res)=> editoraController.listar(req,res));

router
.route("/editoras/:id")
.delete((req, res)=> editoraController.deletar(req,res));

router
.route("/editoras/:id")
.put((req, res)=> editoraController.atualizar(req,res));
module.exports = router;