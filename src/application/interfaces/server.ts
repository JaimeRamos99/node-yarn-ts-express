export interface WebServer {
    setup(): void;
    start(port: number): void;
    stop(): void;
}
