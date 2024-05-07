import app from '../index';
import supertest from 'supertest';
import resizeImage from '../utilities';
import path from 'path';

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

    it('describe spec function resize', async () => {
      const filename = 'fjord';
      const width = 200;
      const height = 200;

      const imagePath = path.resolve(`assets/images/${filename}.jpg`);
      const imagePathResize = path.resolve(
        `assets/thumb/${filename}_thumb_${width}_${height}.jpg`,
      );
      const response = await resizeImage({
        imagePath,
        width,
        height,
        imagePathResize,
      });
      expect(response.text).toMatch('Not found!');
    });
  });
});
