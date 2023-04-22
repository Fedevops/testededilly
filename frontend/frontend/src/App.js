import React, { useState, useEffect } from 'react';
import axios from 'axios';



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
        console.log(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Carregando dados...</p>
        )}
      </header>
    </div>
  );
}

export default App;
