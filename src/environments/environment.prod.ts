import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.ERROR,
  serverBasePath: (typeof process !== 'undefined' && process.env && process.env['serverBasePath'])
    ? process.env['serverBasePath']
    : 'https://gateway.thankfulflower-0d736896.brazilsouth.azurecontainerapps.io'
};
