const express = require("express");
const app = express();
const port = 3000;
const mongoose =require("mongoose");

mongoose.connect('mongodb://localhost:27017/marcacion');

const Productos =mongoose.model("Productos",{
	producto:String,
	precio:Number,
	nombre:String,
	marca:String,
	umd:Number,
	plu:Number
});

app.get("/listar",(req,res)=>{

	Productos.find((err,doc)=>{

		console.log(doc);
		console.log(doc[0]);
		let html = "";
		let producto;
		for(var i in doc)
		{
			producto = doc[i];
			html+=` <span>${producto.precio}</span>
					<span>${producto.nombre}</span>
					<span>${producto.marca}</span>
					<span>${producto.umd}</span>
					<span>${producto.plu}</span><br>`;
		}
		res.send(html);
	});
});

app.get("/",(req,res)=>{
	console.log("se le envia a la terminal de comandos");
	res.send("<h1>Hola mundo</h1>");
	new Productos({
		producto:"chorizo económico",
		precio:900
	}).save().then(()=>console.log("Exito"));
});

app.listen(port,()=>{
	console.log("empezo el servidor");
});