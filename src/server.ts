import http from 'http';
import process from 'process';

import app from './app';
import config from './config';
import logger from './logs';

const PORT = config.port;
const URI = config.local_uri;
// Start server on port
let server: http.Server;

const toggleServer = async (): Promise<void> => {
  try {
    // Start server
    server = app.listen(PORT, () => {
      console.info(`Server is running on ${URI}`);
    });
  } catch (error) {
    // Log server start failure
    console.error('Failed to start the server:', error);
    process.exit(1); // Exit if server fails to start
  }
};

// Graceful Shutdown Handling
const handleServerShutdown = async (eventName: string, error?: Error): Promise<void> => {
  console.warn(`Server received ${eventName} signal. Closing server...`);

  // Attempt to close the server
  try {
    if (server) {
      server.close(() => {
        logger.info('Server closed gracefully.');
        if (error) {
          console.error('Error during shutdown:', error);
        }
        process.exit(0); // Exit after server shuts down
      });
    }
  } catch (shutdownError) {
    console.error('Error while shutting down server:', shutdownError);
    process.exit(1); // Exit with error status if server shutdown fails
  }
};

// Handle various process signals and errors
process.on('SIGINT', async () => handleServerShutdown('SIGINT'));
process.on('SIGTERM', async () => handleServerShutdown('SIGTERM'));
process.on('unhandledRejection', async (error: Error) => {
  console.error('Unhandled Rejection:', error);
  handleServerShutdown('unhandledRejection', error);
});
process.on('uncaughtException', (error: Error) => {
  console.error('Uncaught Exception:', error);
  handleServerShutdown('uncaughtException', error);
});

// Start the server
toggleServer();
