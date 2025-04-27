import './module-alias';
import 'reflect-metadata';

import http from 'http';
import process from 'process';

import configuration from '@/config';
import logger from '@/core/logs';
import PrismaService from '@/database';
import { registerRepositories } from '@core/repositories/container';

const PORT: number = Number(configuration.port) || 5000;
const URI = configuration.local_uri;

let server: http.Server;

const toggleServer = async (): Promise<void> => {
  try {
    await registerRepositories();

    const { default: app } = await import('@/app');

    server = app.listen(PORT, async () => {
      logger.info(`✅ Server running on ${URI}:${PORT}`);
      await PrismaService.connect();
    });
  } catch (error) {
    logger.error('❌ Server failed to start:', error);
    process.exit(1);
  }
};

const handleServerShutdown = async (eventName: string, error?: Error): Promise<void> => {
  logger.warn(`🛑 Shutdown signal received: ${eventName}`);

  try {
    if (server) {
      server.close(async () => {
        await PrismaService.disconnect();
        logger.info('🛑 Server closed.');
        if (error) {
          logger.error('⚠️ Shutdown error:', error);
        }
        process.exit(0);
      });
    }
  } catch (shutdownError) {
    logger.error('❌ Error during shutdown:', shutdownError);
    process.exit(1);
  }
};

process.once('SIGINT', () => handleServerShutdown('SIGINT'));
process.once('SIGTERM', () => handleServerShutdown('SIGTERM'));
process.once('unhandledRejection', (error: unknown) => {
  logger.error('Unhandled Rejection:', error);
  handleServerShutdown('unhandledRejection', error instanceof Error ? error : undefined);
});
process.once('uncaughtException', (error: Error) => {
  logger.error('Uncaught Exception:', error);
  handleServerShutdown('uncaughtException', error);
});

toggleServer();
