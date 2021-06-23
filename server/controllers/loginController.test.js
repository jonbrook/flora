import request from 'supertest';
import app from '../server';
import sequelize from '../models/postgres';

const user = {
  email: 'a@test.com',
  password: '1234',
};
const loginCredentials = [{ email: 'a@test.com' }, { password: '1234' }, {}];

jest.mock('../models/postgres', () => ({
  models: {
    User: {
      findOne: jest.fn(),
    },
  },
}));

describe('Login Controller', () => {
  describe('Working db', () => {
    beforeEach(() => {
      sequelize.models.User.findOne.mockResolvedValue((credentials) => {
        const { email, password } = credentials.where;
        if (email && email !== '' && password && password !== '') {
          return true;
        }
        return false;
      });
    });

    it('should respond with a 200 status code on suceesful login', async () => {
      await request(app).post('/login').send(user).expect(200);
    });

    it('should specify json in the content type header', async () => {
      const response = await request(app).post('/login').send(user);
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json'),
      );
    });

    it('should respond with a 400 status code', async () => {
      for (const login of loginCredentials) {
        const response = await request(app).post('/login').send(login);
        expect(response.statusCode).toBe(400);
      }
    });
  });

  describe('Faulty db', () => {
    beforeEach(() => {
      sequelize.models.User.findOne.mockRejectedValue('Database error');
    });
    it('should respond with a 500 when an error is thrown', async () => {
      const response = await request(app).post('/login').send(user);
      expect(response.statusCode).toBe(500);
    });
  });
});

export {};
