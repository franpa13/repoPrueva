const express = require('express');
const router = express.Router();
const cors = require('cors'); // Importa el módulo cors
const apiController = require('../controllers/api');

// Usa el middleware cors en el enrutador
router.use(cors());

// Definición de tus rutas
router.get('/api/aspirantes', apiController.api);
router.get('/api/profesiones', apiController.profe);
module.exports = router;
