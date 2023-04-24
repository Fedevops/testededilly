const request = require('supertest');
const app = require('/Users/mac/projects/testededilly/testededilly/backend/index.js');

describe('Teste das rotas da API', () => {
    test('GET /api/data/exemplo - Deve retornar o status 200', async () => {
        const response = await request(app).get('https://api.open-meteo.com/v1/forecast');
        expect(response.statusCode).toBe(200);
      });
})