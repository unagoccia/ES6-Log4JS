/**
 * Log4JS
 *
 * @copyright © 2016 unagoccia
 * @since Log4JS v 0.1.0 (October 22, 2016)
 */

const LOG_LEVEL = {
    OFF  : 0,
    FATAL: 1,
    ERROR: 2,
    WARN : 3,
    INFO : 4,
    DEBUG: 5,
    TRACE: 6
};

class Log4JS {

    constructor(level) {
        this.level = level;
        this.trace = this.logging(6);
        this.debug = this.logging(5);
        this.info  = this.logging(4);
        this.warn  = this.logging(3);
        this.error = this.logging(2);
        this.fatal = this.logging(1);
    }

    logging(level) {
        if (this.level === 0) {
            return () => {};
        }
        if (level === 6 && level <= this.level) {
            return console.log.bind(console, "[TRACE]");
        }
        if (level === 5 && level <= this.level) {
            return console.log.bind(console, "[DEBUG]");
        }
        if (level === 4 && level <= this.level) {
            return console.info.bind(console, "[INFO]");
        }
        if (level === 3 && level <= this.level) {
            return console.warn.bind(console, "[WARN]");
        }
        if (level === 2 && level <= this.level) {
            return console.error.bind(console, "[ERROR]");
        }
        if (level === 1 && level <= this.level) {
            return console.error.bind(console, "[FATAL]");
        }
        return () => {};
    }
}

export {Log4JS, LOG_LEVEL};
