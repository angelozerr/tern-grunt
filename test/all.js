exports['test Grunt Tern completion'] = require('./completion');
exports['test Grunt tasks'] = require('./tasks');
exports['test Grunt task'] = require('./task');

if (require.main === module) require("test").run(exports);