import { AirplaneEngineType, AirplaneEngineConfiguration, AirplaneFuelType } from '@enums/index';

export interface Country {
  name: string;
  countryCode: string;
  airlines: Airline[];
  airports: Airport[];
  cities: City[];
}

export interface City {
  name: string;
  state?: string | null;
  province?: string | null;
  countryId: string;
  country: Country;
  airports: Airport[];
}

export interface Airline {
  name: string;
  countryId: string;
  country: Country;
  logo: string;
  createdAt: Date;
  updatedAt: Date;
  planes: Airplane[];
  flights: Flight[];
}

export interface Airplane {
  model: string;
  year: number;
  seats: number;
  capacity: number;
  manufacturer: string;
  engines: number;
  engineType: AirplaneEngineType;
  engineConfiguration: AirplaneEngineConfiguration;
  speed: number;
  fuelType: AirplaneFuelType;
  createdAt: Date;
  updatedAt: Date;
  airlineId: string;
  airline: Airline;
  flights: Flight[];
}

export interface Airport {
  name: string;
  code: string;
  cityId: string;
  city: City;
  lat: number;
  lng: number;
  timezone: string;
  createdAt: Date;
  updatedAt: Date;
  countryId?: string | null;
  country?: Country | null;
}

export interface Flight {
  airlineId?: string | null;
  airline?: Airline | null;
  airplaneId?: string | null;
  airplane?: Airplane | null;
}

export interface Passenger {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender?: string | null;
  nationality?: string | null;
  passportNumber?: string | null;
  address?: string | null;
  emergencyContact?: string | null;
  emergencyPhone?: string | null;
  frequentFlyer: boolean;
  mealPreference?: string | null;
  specialRequirements?: string | null;
  bookingDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
