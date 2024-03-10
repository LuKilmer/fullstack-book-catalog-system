const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const connection = require("./src/db/config")
connection();

const routes = require("./src/routes/routes");

app.use("/api",routes);

app.listen(3000,function(){
    console.log("Funcionou, tudo ok!")
})
