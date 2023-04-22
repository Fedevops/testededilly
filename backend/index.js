const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Configurar CORS para permitir solicitações do domínio do seu aplicativo React
const corsOptions = {
  origin: ['http://localhost:3000', 'http://172.16.0.140:3000'],
};
app.use(cors(corsOptions));

app.get('/api/forecast', async (req, res) => {
  const apiUrl = 'https://api.open-meteo.com/v1/forecast';
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;
  const current_weather = req.query.current_weather;

  try {
    const response = await axios.get(`${apiUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=${current_weather}`);
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    res.status(500).json({ message: 'Erro ao buscar dados da API' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
