import Server from './application/server';

const server = new Server(3000);

const main = async () => {
    await server.setup();
    server.start();
};

process.on('uncaughtException', () => server.stop());
process.on('SIGINT', () => server.stop());
process.on('SIGTERM', () => server.stop());

main();
