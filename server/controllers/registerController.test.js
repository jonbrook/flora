const request = require('supertest');
const app = require('../server');
const db = require('../models/postgres');

jest.mock('../models/postgres', () => {
  return {
    User: {
      create: jest.fn((creds) => {
        if (creds.email && creds.password && creds.username) {
          return { creds };
        } else {
          throw new Error('Missing required info');
        }
      }),
      findOne: jest.fn((creds) => {
        return creds.email === users.existing.email ? false : true;
      }),
    },
  };
});

const users = {
  new: {
    email: 'bugsbunny@example.com',
    username: 'bugs',
    password: 'bunny',
  },
  existing: {
    email: 'donaldduck@example.com',
    username: 'donald',
    password: 'duck',
  },
  error: {
    email: 'error@example.com',
    username: 'idontknowwhatimdoing',
    password: '',
  },
};

describe('Register Controller', () => {
  it('should respond with a 400 when user already exists', async () => {
    await request(app).post('/register').send(users.existing).expect(400);
  });

  it('should respond with a 200 when provided with correct body', async () => {
    await request(app).post('/register').send(users.new).expect(201);
  });

  it('should respond with a 500 when an error is thrown', async () => {
    await request(app).post('/register').send(users.error).expect(500);
  });
});
