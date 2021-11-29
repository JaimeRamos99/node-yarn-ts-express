import { Server } from 'http';
import express, { Express } from 'express';
import routes from '../routes';
import { WebServer } from '../application/interfaces/server';

export default class implements WebServer {
    private app: Express;
    private port: number;
    private server!: Server;

    constructor(port: number) {
        this.port = port;
        this.app = express();
    }

    setup(): void {
        this.app.use(routes);
    }

    start(): void {
        this.server = this.app.listen(this.port);
    }

    stop(): void {
        this.server.close();
    }

    returnApp(): Express {
        return this.app;
    }
}
