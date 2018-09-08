export class Logger {

    private isDisabled: boolean;
    private static logger: Logger;

    private constructor() {
        this.isDisabled = false;
    }

    static getLogger(): Logger {

        if (!this.logger) {
            this.logger = new Logger();
        }

        return this.logger;
    }

    disable(): void {
        this.isDisabled = true;
    }

    enable(): void {
        this.isDisabled = false;
    }

    log(...args: any[]): void {
        if (this.isDisabled) {
            console.warn('[Logger] logger is disabled!');
        } else {
            console.log('[Logger]', ...args);
        }
    }

}
