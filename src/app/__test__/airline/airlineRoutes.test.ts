import request from 'supertest';
import express from 'express';
import airlineRouter from '../../modules/airline/airlineRoutes';
import PrismaService from '../../../database';

const app = express();
app.use(express.json());
app.use('/api/airlines', airlineRouter);

describe('Airline Routes', () => {
  beforeAll(async () => {
    await PrismaService.client.$connect();
  });

  afterAll(async () => {
    await PrismaService.client.$disconnect();
  });

  it('GET /api/airlines should return list of airlines', async () => {
    const response = await request(app).get('/api/airlines');
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('POST /api/airlines should create a new airline', async () => {
    const newAirline = {
      name: 'Cloud One',
      logo: 'https://example.com/logos/cloudfly.png',
      countryId: '27bf855f-8236-4d88-b0a9-85299e12085e',
    };

    const response = await request(app).post('/api/airlines').send(newAirline);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data.name).toBe(newAirline.name);
    expect(response.body.data.logo).toBe(newAirline.logo);
    expect(response.body.data.countryId).toBe(newAirline.countryId);
    expect(response.body.data.createdAt).toBeDefined();
    expect(response.body.data.updatedAt).toBeDefined();
  });

  it('GET /api/airlines/:airlineId should return a single airline', async () => {
    const airlineId = '10d635d6-2ca9-4d5b-ab64-2322fc50e5e8';
    const response = await request(app).get(`/api/airlines/${airlineId}`);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveProperty('id', airlineId);
    expect(response.body.data).toHaveProperty('name');
    expect(response.body.data).toHaveProperty('logo');
    expect(response.body.data).toHaveProperty('countryId');
    expect(response.body.data).toHaveProperty('createdAt');
    expect(response.body.data).toHaveProperty('updatedAt');
  });
  
});
