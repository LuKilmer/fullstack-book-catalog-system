import Controller from "./controller/controller.js";

var controller = new Controller();

function loadAllData(){
    controller.getEditoras();
    controller.getAutores();
    controller.getLivros();
}

loadAllData();