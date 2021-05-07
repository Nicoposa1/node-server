const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(router)

router.get('/message', function(req, res){
  res.send('Lista de mensajes')
} )

router.delete('/message', function(req, res){
  console.log(req.query);
  console.log(req.body);
  res.send(`Mensaje ${req.body.text} Eliminado`)
} )

/* app.use('/', function(req, res){
  res.send('Hola')
}) */

app.listen(3000);
console.log('La aplicación está escuchando en http//:localhost:3000');
