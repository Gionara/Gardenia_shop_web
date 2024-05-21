// Importar Express
const express = require('express');

// Crear una instancia de Express
const app = express();

// Configurar middleware para servir archivos estáticos
app.use(express.static('public'));

// Iniciar el servidor en un puerto específico
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
