"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
class Logger {
    constructor() {
        this.logDate = new Date();
        let _dateString = `${this.logDate.getFullYear()}-${this.logDate.getMonth() + 1}-${this.logDate.getDate()}`;
        let _timeString = `${this.logDate.getHours()}:${this.logDate.getMinutes()}:${this.logDate.getSeconds()}`;
        this.baseDir = path.join(__dirname, "../../.logs/");
        this.fileName = `${_dateString}.log`;
        this.linePrefix = `[${_dateString} ${_timeString}]`;
    }
    info(_info) {
        this.addLog("INFO :: " + this.linePrefix + " " + _info);
    }
    error(_info) {
        this.addLog("ERROR :: " + this.linePrefix + " " + _info);
    }
    warn(_info) {
        this.addLog("WARNING :: " + this.linePrefix + " " + _info);
    }
    // addLog(_type: string, _info: string) {
    //   _type = _type.toLocaleUpperCase();
    //   const instance = this;
    //   fs.open(
    //     `${instance.baseDir}${instance.fileName}`,
    //     "a",
    //     (_err, _fileDescriptor) => {
    //       if (!_err && _fileDescriptor) {
    //         // Append to file and close it
    //         fs.appendFile(
    //           _fileDescriptor,
    //           `${instance.linePrefix} [${_type}] ${_info}\n`,
    //           (_err) => {
    //             if (!_err) {
    //               fs.close(_fileDescriptor, (_err) => {
    //                 if (!_err) {
    //                   return true;
    //                 } else {
    //                   return console.log(
    //                     "\x1b[31m%s\x1b[0m",
    //                     "Error closing log file that was being appended"
    //                   );
    //                 }
    //               });
    //             } else {
    //               return console.log(
    //                 "\x1b[31m%s\x1b[0m",
    //                 "Error appending to the log file"
    //               );
    //             }
    //           }
    //         );
    //       } else {
    //         return console.log(
    //           "\x1b[31m%s\x1b[0m",
    //           "Error cloudn't open the log file for appending"
    //         );
    //       }
    //     }
    //   );
    // }
    addLog(_info) {
        console.log(_info);
    }
}
exports.default = new Logger();
//# sourceMappingURL=logger.js.map