import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.ERROR,
  serverBasePath: 'https://gateway.thankfulflower-0d736896.brazilsouth.azurecontainerapps.io'
};
