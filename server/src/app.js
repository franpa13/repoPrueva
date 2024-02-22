const express = require('express');
const app = express();
require("dotenv").config({path:"./.env"})


const puerto = process.env.PORT ||3000 ;

const api = require('./routes/api');

app.use(api);

app.listen(puerto, console.log(`Servidor iniciado en el puerto ${puerto}`));