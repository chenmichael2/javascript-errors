let evalError = require('./errors/evalError');
let rangeError = require('./errors/rangeError');
let referenceError = require('./errors/referenceError');
let syntaxError = require('./errors/syntaxError');
let typeError = require('./errors/typeError')
let uriError = require('./errors/uriError');
let aggregateError = require('./errors/aggregateError');
let internalError = require('./errors/internalError');

aggregateError.aggregateError();
evalError.evalError();
internalError.loop();
rangeError.check();
referenceError.referenceError();
syntaxError.syntaxError();
typeError.typeError();
uriError.uriError();