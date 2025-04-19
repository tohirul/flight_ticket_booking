import airlineRouter from '@/app/modules/airline/airlineRoutes';
import request from 'supertest';
import express from 'express';
import globalError from '@/app/middlewares/global.error';
const app = express();
app.use(express.json());
app.use('/api/airlines', airlineRouter);
app.use(globalError);
/**
 * Utility functions for making HTTP requests to airline-related API endpoints during testing.
 * These functions simplify API interaction in test scenarios by providing concise request methods.
 */
export const getAirlines = () => request(app).get('/api/airlines');
export const postAirline = (data: any) => request(app).post('/api/airlines').send(data);
export const getAirlineById = (id: string) => request(app).get(`/api/airlines/${id}`);
export const putAirlineById = (id: string, data: any) =>
  request(app).put(`/api/airlines/${id}`).send(data);
export const deleteAirlineById = (id: string) => request(app).delete(`/api/airlines/${id}`);
