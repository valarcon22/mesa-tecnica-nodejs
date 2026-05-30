const express = require('express');

const app = express();

// Español
app.get('/es', (req, res) => {
  res.send('Hola Mundo');
});

// Inglés
app.get('/en', (req, res) => {
  res.send('Hello World');
});

// Francés
app.get('/fr', (req, res) => {
  res.send('Bonjour le monde');
});

// Italiano
app.get('/it', (req, res) => {
  res.send('Ciao mondo');
});

// Portugués
app.get('/pt', (req, res) => {
  res.send('Olá Mundo');
});

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido. Usa /es, /en, /fr, /it o /pt');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
}); 