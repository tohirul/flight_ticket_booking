import { generateAirline, generateAirlines } from '../../helpers/factories/airlineFactory';
import AirlineService from '../../../modules/airline/airlineService';

// Mock find all airlines
export const mockFindAll = () => {
  const airlines = generateAirlines(3);
  (AirlineService.prototype.getAll as jest.Mock).mockResolvedValue(airlines);
  return airlines;
};

// Mock find one airline
export const mockFindOne = () => {
  const airline = generateAirline();
  (AirlineService.prototype.getSingle as jest.Mock).mockResolvedValue(airline);
  return airline;
};

// Mock create airline
export const mockCreate = () => {
  const airline = generateAirline();
  (AirlineService.prototype.create as jest.Mock).mockResolvedValue(airline);
  return airline;
};

// Mock update airline
export const mockUpdate = () => {
  const airline = generateAirline({ name: 'Updated Airline Name' });
  (AirlineService.prototype.update as jest.Mock).mockResolvedValue(airline);
  return airline;
};

// Mock destroy airline
export const mockDestroy = () => {
  const airline = generateAirline();
  (AirlineService.prototype.destroy as jest.Mock).mockResolvedValue(airline);
  return airline;
};
