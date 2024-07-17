const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

app.get('/dados-externos', async (req, res) => {
  try {
    const response = await axios.get('https://api.exemplo.com/endpoint', {
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter dados' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
