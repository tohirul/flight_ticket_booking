import { IGenericErrorResponse } from '@/types/common.types';
import { IGenericErrorMessage } from '@/types/error.types';

interface IMySQLError extends Error {
  code?: string;
  sqlMessage?: string;
}

class MySQLError {
  public error: IMySQLError;
  public statusCode: number;
  public message: string;
  public errorMessages: IGenericErrorMessage[];

  constructor(error: IMySQLError) {
    this.error = error;
    this.statusCode = 500;
    this.message = 'Internal Server Error';
    this.errorMessages = [];

    this.handleError();
  }

  private handleError(): void {
    if (this.error.code) {
      switch (this.error.code) {
        case 'ER_ACCESS_DENIED_ERROR': // Invalid credentials
          this.statusCode = 403;
          this.message = 'Access denied: Invalid database credentials.';
          break;
        case 'ER_BAD_DB_ERROR': // Database does not exist
          this.statusCode = 404;
          this.message = 'Database not found.';
          break;
        case 'ER_NO_SUCH_TABLE': // Table does not exist
          this.statusCode = 404;
          this.message = 'Table not found in the database.';
          break;
        case 'ER_DUP_ENTRY': // Duplicate entry for unique field
          this.statusCode = 400;
          this.message = 'Duplicate entry for a unique field.';
          this.errorMessages.push({
            path: 'unknown',
            message: this.error.sqlMessage || 'Duplicate entry in database.',
          });
          break;
        case 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD': // Data type mismatch
          this.statusCode = 400;
          this.message = 'Invalid value for field.';
          break;
        case 'ER_DATA_TOO_LONG': // Input too long
          this.statusCode = 400;
          this.message = 'Input value too long for the column.';
          break;
        case 'ER_ROW_IS_REFERENCED_2': // Foreign key constraint
          this.statusCode = 400;
          this.message = 'Foreign key constraint failed.';
          break;
        case 'ECONNREFUSED': // Connection refused
          this.statusCode = 500;
          this.message = 'Database connection refused. Ensure MySQL is running.';
          break;
        case 'ETIMEDOUT': // Connection timeout
          this.statusCode = 500;
          this.message = 'Database connection timed out.';
          break;
        case 'ER_PARSE_ERROR': // SQL syntax error
          this.statusCode = 400;
          this.message = 'SQL syntax error. Check your query.';
          break;
        case 'ER_LOCK_WAIT_TIMEOUT': // Lock wait timeout exceeded
          this.statusCode = 408;
          this.message = 'Lock wait timeout exceeded. Try again later.';
          break;
        case 'ER_CON_COUNT_ERROR': // Too many connections
          this.statusCode = 503;
          this.message = 'Too many connections to the database.';
          break;
        case 'ER_HOST_NOT_PRIVILEGED': // Host is not allowed to connect
          this.statusCode = 403;
          this.message = 'Host is not allowed to connect to this MySQL server.';
          break;
        case 'ER_NET_READ_INTERRUPTED': // Network read issue
        case 'ER_NET_WRITE_INTERRUPTED': // Network write issue
          this.statusCode = 500;
          this.message = 'Database connection was interrupted.';
          break;
        default: // Other MySQL errors
          this.statusCode = 500;
          this.message = this.error.sqlMessage || 'Unknown MySQL error occurred.';
      }
    }
  }

  public getErrorResponse(): IGenericErrorResponse {
    return {
      statusCode: this.statusCode,
      message: this.message,
      errorMessages: this.errorMessages.length
        ? this.errorMessages
        : [{ path: 'unknown', message: this.message }],
    };
  }
}

export default MySQLError;
