import { Server } from 'http';
import express, { Express } from 'express';
import routes from '../routes';
import { WebServer } from '../application/interfaces/server';
import { morganMiddleware } from '../middlewares/morgan';
import { Logger } from '../logger';
import { envVars } from '../common/utils/envVarsHandler';

export default class implements WebServer {
    private app: Express;
    private port: number;
    private server!: Server;

    constructor(port: number) {
        this.port = port;
        this.app = express();
    }

    setup(): void {
        this.app.use(morganMiddleware);
        this.app.use(routes);
    }

    start(): void {
        this.server = this.app.listen(this.port);
        Logger.info(`Server started on port ${envVars.PORT}`);
    }

    stop(): void {
        this.server.close();
    }

    returnApp(): Express {
        return this.app;
    }
}
