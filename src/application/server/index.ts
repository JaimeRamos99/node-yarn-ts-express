import { IServer } from '../interfaces/server';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import { Server } from 'http';
import logger from '../logger/logger';

export default class implements IServer {
    private app: Express;
    private port: number;
    private server!: Server;

    constructor(port: number) {
        this.port = port;
        const app = express();
        this.app = app;
    }

    setup(): void {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    start(): void {
        this.server = this.app.listen(this.port);
        logger.info(`service running on port ${this.port}`);
    }

    stop(): void {
        this.server.close();
    }
}
