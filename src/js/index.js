import { Log4JS, LOG_LEVEL } from "./Log4JS";

const Logger = new Log4JS(LOG_LEVEL.WARN);

Logger.trace("AA0001-01", "trace");
Logger.debug("AA0001-01", "debug");
Logger.info ("AA0001-01", "info");
Logger.warn ("AA0001-01", "warn");
Logger.error("AA0001-01", "error");
Logger.fatal("AA0001-01", "fatal");
