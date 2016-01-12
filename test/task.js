var util = require("./util");

exports['test task'] = function() {
  util.assertTask("module.exports = function(grunt) {grunt.registerTask('default', ['jshint']);}", "default", {
    "file":"Gruntfile.js","start":53,"end":62
  });
}

exports['test tasks with no Grunt file'] = function() {
  util.assertTask("module.exports = function(grunt) {grunt.registerTask('default', ['jshint']);}", "default", {    
  }, "test.js");
}

if (module == require.main) require("test").run(exports);