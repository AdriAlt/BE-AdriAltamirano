const express = require('express')
const chalk = require("chalk")
const Contenedor = require('./products')


// crear el servidor
const app = express()

//conexion a la "DB"
const DB = new Contenedor('productos')

//rutas
app.get('/productos', async (req, res) => {
  const getAll = await DB.getAll()
  res.send(getAll)
})
app.get('/productoRandom', async (req, res) => {
  const getAllProducts = await DB.randomProducts()
  res.send(getAllProducts)
})

// puerto de la app
const PORT = 8080;

//arrancar al app
const server = app.listen(PORT, () => {
  console.log(chalk.blueBright(`Servidor corriendo en: http://localhost:${server.address().port}`))
})
//manejador del error(
server.on('error', (error) => console.log(`Error en el server: ${error}`))
