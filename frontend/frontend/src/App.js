import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';




function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = 'http://localhost:3001/api/forecast';
      const latitude = '52.52';
      const longitude = '13.41';

      try {
        const response = await axios.get(`${apiUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        setData(response.data);
        console.log("Resposta da API", response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Previsão do tempo
        </Typography>
  
        <Grid container spacing={4}>
          {data && (
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Latitude: {data.latitude} <br></br> Longitude: {data.longitude}
                  </Typography>
                  <Typography variant="body1">
                    Temperatura: {data.current_weather.temperature}°C
                  </Typography>
                  <Typography variant="body1">
                    Velocidade do vento: {data.current_weather.windspeed} km/h
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
  
          }
export default App;
