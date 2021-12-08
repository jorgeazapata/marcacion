const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/marcacion");

const Usuario = mongoose.model("Usuarios",{
	nombre:String,
	correo:String
});

app.get("/", (req,res)=>{
	console.log("Se le envia a la terminal de comandos");
	res.send("<h1>hola mundo</h1>");
	new Usuarios({
		Usuario:"Neiry",
		correo:-"neiry@gmail.com"
	}).save().then(()=>console.log("Exito"));
});

app.listen(port,()=>{
	console.log("Empezo el servidor");
});