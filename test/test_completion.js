var util = require("./util");

exports['test Grunt completion'] = function() {
	util.assertCompletion("grunt.registerT", {
	    "start":{"line":0,"ch":6},
	    "end":{"line":0,"ch":15},
	    "isProperty":true,
	    "isObjectKey":false,
	    "completions":[{"name":"registerTask","type":"fn(taskName: string, taskList: [string])","origin":"grunt"}]
	});
}

if (module == require.main) require("test").run(exports);