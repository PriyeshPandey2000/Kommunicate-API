const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const chatController = require('../controllers/chatController');

const app = express();

app.use(bodyParser.json());
app.use('/api', chatController);

describe('Chat Controller API Tests', () => {
  it('should respond with completed text for a valid request', async () => {
    const response = await request(app)
      .post('/api/complete_chat')
      .send({ partial_text: 'Who won the world series in 2020?' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('completed_text');
  });

  it('should return 400 for a request with missing partial_text', async () => {
    const response = await request(app).post('/api/complete_chat').send({});

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Invalid input. Missing partial_text field.');
  });

  it('should handle internal server errors', async () => {
    // Mocking an internal error
    jest.spyOn(chatController, 'completeChat').mockImplementationOnce(() => {
      throw new Error('Internal Server Error');
    });

    const response = await request(app)
      .post('/api/complete_chat')
      .send({ partial_text: 'Who won the world series in 2020?' });

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('error', 'Internal server error.');
  });
});
