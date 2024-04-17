import app from '../index';
import supertest from 'supertest';

describe('suite description', () => {
  const request = supertest(app);

  describe('suite describe run server', () => {
    it('describe spec run server', async () => {
      const response = await request.get('/api');
      expect(response.status).toBe(200);
    });
  });

  describe('suite describe run endpoint images', () => {
    it('describe spec resize image success', async () => {
      const response = await request.get(
        '/api/images?filename=encenadaport&height=200&width=200',
      );
      expect(response.status).toBe(200);
    });

    it('describe spec resize image fail', async () => {
      const response = await request.get(
        '/api/images?filename=encenadaports&height=200&width=200',
      );
      expect(response.status).toBe(404);
    });

    it('describe spec resize image fail message not found', async () => {
      const response = await request.get(
        '/api/images?filename=encenadaports&height=200&width=200',
      );
      expect(response.text).toMatch('Not found!');
    });
  });
});
