const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const roteador = require('./rotas/videos');
app.use('/api/videos', roteador);

app.listen(port, () => { console.log("Ouvindo na porta 3000") });