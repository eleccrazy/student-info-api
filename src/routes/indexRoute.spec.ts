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

  // Test if the /students route returns an array with length 10.
  it('the /students route should return an array with length 10', async () => {
    const response = await request.get('/api/students');
    expect(response.body.length).toBe(10);
  })

   // Test if the /departments route responds with a 200 ok status code
   it('the /departments route should respond with a 200 ok status code', async () => {
    const response = await request.get('/api/departments');
    expect(response.status).toBe(200);
  })

  // Test if the /departments route returns an array with length 10.
  it('the /departments route should return an array with length 10', async () => {
    const response = await request.get('/api/departments');
    expect(response.body.length).toBe(10);
  })
});