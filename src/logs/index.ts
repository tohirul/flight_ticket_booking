import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, printf } = format;

// Define custom log levels
const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    success: 3, // Custom "success" level
    debug: 4,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'blue',
    success: 'green',
    debug: 'magenta',
  },
};

// Custom log format
const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

// Create the logger
const logger = createLogger({
  levels: customLevels.levels,
  format: combine(label({ label: 'app' }), timestamp(), customFormat),
  transports: [
    new transports.Console(),

    // Separate log files
    new transports.File({ filename: 'logs/info.log', level: 'info' }),
    new transports.File({ filename: 'logs/success.log', level: 'success' }),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
  ],
});

// Export logger
export default logger;
