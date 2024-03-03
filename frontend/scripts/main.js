import Controller from "./controller/controller.js";

const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");

var controller = new Controller();

controller.getEditoras();
