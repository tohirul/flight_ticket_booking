import 'module-alias/register';
import http from 'http';
import process from 'process';



import app from './app';
import configuration from './config';
import logger from './core/logs';
import PrismaService from './database';

const PORT: number = Number(configuration.port) || 5000;
const URI = configuration.local_uri;
// Start server on port
let server: http.Server;
// console.log(configData);
const toggleServer = async (): Promise<void> => {
  try {
    // Start server
    server = app.listen(PORT, () => {
      logger.info(`✅ Server is running on ${URI}:${PORT}`);
      
    });
    if(server.listening) {
      await PrismaService.connect();
    }
  } catch (error) {
    // Log server start failure
    logger.error('❌ Failed to start the server:', error);
    process.exit(1);
  }
};

// Graceful Shutdown Handling
const handleServerShutdown = async (eventName: string, error?: Error): Promise<void> => {
  logger.warn(`🛑 Server received ${eventName} signal. Closing server...\n`);

  // Attempt to close the server
  try {
    if (server) {
      server.close(async() => {
        await PrismaService.disconnect();
        logger.info('🛑 Server closed gracefully.\n');
        logger.info('🛑 Exiting process...\n');
        if (error) {

          logger.error('⚠️ Error during shutdown:', error, '\n');
        }
        process.exit(0); 
      });
    }
  } catch (shutdownError) {
    logger.error('❌ Error while shutting down server:', shutdownError);
    process.exit(1); 
  }
};

// Handle various process signals and errors
process.once('SIGINT', async () => handleServerShutdown('SIGINT'));
process.once('SIGTERM', async () => handleServerShutdown('SIGTERM'));
process.once('unhandledRejection', async (error: Error) => {
  logger.error('Unhandled Rejection:', error);
  handleServerShutdown('unhandledRejection', error);
});
process.once('uncaughtException', (error: Error) => {
  logger.error('Uncaught Exception:', error);
  handleServerShutdown('uncaughtException', error);
});

// Start the server
toggleServer();
