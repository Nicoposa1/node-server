const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response')

const router = express.Router();

var app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(router)

router.get('/message', function(req, res){
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado"
  })
  // res.send('Lista de mensajes')
  response.success(req, res, 'Lista de mensajes')
} )

router.post('/message', function(req, res){
  console.log(req.query);
  if(req.query.error == 'okey'){
    response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación de los errores')
  } else {
    response.success(req, res, 'Creado correctamente', 201)
  }
  // res.status(201).send({error: '', body: 'Creado correctamente'})
} )

/* app.use('/', function(req, res){
  res.send('Hola')
}) */

app.use('/app', express.static('public'))

app.listen(3000);
console.log('La aplicación está escuchando en http//:localhost:3000');
