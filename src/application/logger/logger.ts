import pino from 'pino';

const logger = pino({
    name: 'template',
    level: 'info',
});

export default logger;
