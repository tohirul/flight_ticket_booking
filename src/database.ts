import { PrismaClient } from '@prisma/client';
import logger from './core/logs';

class PrismaService {
  private static instance: PrismaClient;

  private constructor() {}

  static get client(): PrismaClient {
    if (!PrismaService.instance) {
      PrismaService.instance = new PrismaClient();
    }
    return PrismaService.instance;
  }

  static async connect(): Promise<void> {
    try {
      await PrismaService.client.$connect();
      logger.info('✅ Prisma connected to the database.');
    } catch (error) {
      logger.error('❌ Prisma failed to connect:', error);
      process.exit(1);
    }
  }

  static async disconnect(): Promise<void> {
    try {
      await PrismaService.client.$disconnect();
      logger.info('🛑 Prisma disconnected from the database.');
    } catch (error) {
      logger.error('⚠️ Error during Prisma disconnect:', error);
    }
  }
}

export default PrismaService;
