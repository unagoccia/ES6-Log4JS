ES6-Log4JS
============

## Development
npm install  
npm run dev  

## Example
http://localhost:8081/index.html

## Usage
```javascript
import { Log4JS, LOG_LEVEL } from "./Log4JS";

const Logger = new Log4JS(LOG_LEVEL.WARN);

Logger.trace("AA0001-01", "trace");
Logger.debug("AA0001-01", "debug");
Logger.info ("AA0001-01", "info");
Logger.warn ("AA0001-01", "warn");
Logger.error("AA0001-01", "error");
Logger.fatal("AA0001-01", "fatal");

// [WARN] AA0001-01 warn
// [ERROR] AA0001-01 error
// [FATAL] AA0001-01 fatal
```

## API
* trace(...args)  
* debug(...args)  
* info(...args)  
* warn(...args)  
* error(...args)  
* fatal(...args)  

## Log Levels
Log more than the specified log level of is output.  

* 0: OFF  
* 1: FATAL  
* 2: ERROR  
* 3: WARN  
* 4: INFO  
* 5: DEBUG  
* 6: TRACE  
