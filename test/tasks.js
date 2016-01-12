var util = require("./util");

exports['test tasks'] = function() {
  util.assertTasks("module.exports = function(grunt) {" +    
    "grunt.initConfig({" +
      "jshint: {" +
        "files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']," +
        "options: {" +
          "globals: {" +
            "jQuery: true" +
          "}" +
        "}" +
      "}," +
      "watch: {" +
        "files: ['<%= jshint.files %>']," +
        "tasks: ['jshint']" +
      "}" +
    "});" +
    
    "grunt.registerTask('default', ['jshint']);", {
    "completions":[{"name":"jshint", "targets":[{"name":"files"}]},
                   {"name":"watch","targets":[{"name":"files"},{"name":"tasks"}]},
                   {"name":"default","targets":[]}
                  ]
  });
}

exports['test tasks with no Gruntfile file'] = function() {
  util.assertTasks("module.exports = function(grunt) {grunt.registerTask('default', ['jshint']);}", {
    "completions":[]
  }, "test.js");
}

if (module == require.main) require("test").run(exports);