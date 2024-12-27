const request = require('supertest');

const BASE_URL = 'https://reqres.in/api';

describe('Reqres API', () => {
  it('GET /users', async () => {
    const response = await request(BASE_URL).get('/users');
    expect(response.status).toBe(200);
    expect(response.body.page).toBe(1);
  });
});
