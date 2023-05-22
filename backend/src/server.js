require('dotenv').config();

const app = require('./app');

const port = process.env.API_PORT;

app.listen(port, () => console.log(`Listeaning on port: ${port} at ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`));
