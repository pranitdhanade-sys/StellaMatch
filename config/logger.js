const path = require('node:path');
const winston = require('winston');
require('winston-daily-rotate-file');

const dailyRotate = new winston.transports.DailyRotateFile({
  filename: path.join('logs', 'app-%DATE%.log'),
  datePattern: 'YYYY-MM-DD',
  maxFiles: '30d',
  level: 'info'
});

const errorRotate = new winston.transports.DailyRotateFile({
  filename: path.join('logs', 'error-%DATE%.log'),
  datePattern: 'YYYY-MM-DD',
  maxFiles: '30d',
  level: 'error'
});

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [new winston.transports.Console(), dailyRotate, errorRotate]
});

module.exports = { logger };
