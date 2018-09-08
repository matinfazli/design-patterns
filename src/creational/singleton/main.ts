import {Logger} from "./Logger";

export class Main {

    constructor() {
        this.logHelloEveryHalfSecond();
        this.disableLoggerEveryTwoSecond();
        this.enableLoggerEveryThreeSecond();
    }

    logHelloEveryHalfSecond(): void {
        const logger: Logger = Logger.getLogger();

        setInterval(() => {
            logger.log('Hello there!');
        }, 500)
    }

    disableLoggerEveryTwoSecond(): void {
        const logger: Logger = Logger.getLogger();

        setInterval(() => {
            logger.disable()
        }, 2000);
    }

    enableLoggerEveryThreeSecond(): void {
        const logger: Logger = Logger.getLogger();

        setInterval(() => {
            logger.enable();
        }, 3000)
    }

}

new Main();
