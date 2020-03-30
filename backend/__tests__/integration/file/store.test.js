import request from 'supertest';

import app from '../../../src/app';
import factory from '../../factories';
import truncate from '../../util/truncate';

describe('File store', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to created file', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .post('/files')
      .set('Authorization', `Bearer ${user.generateToken()}`)
      .type('application/x-www-form-urlencoded')
      .field('originalname', 'my awesome avatar')
      .field('filename', 'avatar')
      .attach('file', '__tests__/fixtures/profile.png');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be create file, but without token', async () => {
    const response = await request(app).post('/files');

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      error: { message: 'Token not found' },
    });
  });

  it('should not be create file with token invalid', async () => {
    const response = await request(app)
      .post('/files')
      .set('Authorization', 'Bearer 1234');

    expect(response.status).toBe(401);
    expect(response.body).toMatchObject({
      error: { message: 'Token invalid' },
    });
  });
});
