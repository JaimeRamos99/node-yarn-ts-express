export interface IServer {
    setup(): void;
    start(port: number): void;
    stop(): void;
}
