const express = require('express');
const app = express();

// Datos de ejemplo: lista de tareas
const tasks = [
  {
    id: "123456",
    isCompleted: false,
    description: "Walk the dog",
  },
];

// Ruta para obtener la lista de tareas en formato JSON
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Puerto en el que escuchará el servidor
const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});
