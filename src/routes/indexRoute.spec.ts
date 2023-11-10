import supertest = require('supertest');
import app from '../server';
const request = supertest(app);

describe('Test for index router', () => {
  // Test if the /api route is responding with a 200 status code
  it('should respond with a 200 status code', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
  // Test if the /students route responds with a 200 ok status code
  it('the /students route should respond with a 200 ok status code', async () => {
    const response = await request.get('/api/students');
    expect(response.status).toBe(200);
  })
});