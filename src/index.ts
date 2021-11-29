import WebServer from './server';

const server = new WebServer(3000);

const main = async () => {
    server.setup();
    server.start();
};

process.on('uncaughtException', () => server.stop());
process.on('SIGINT', () => server.stop());
process.on('SIGTERM', () => server.stop());
process.on('SIGHUP', () => server.stop());

main();

export default server.returnApp();
