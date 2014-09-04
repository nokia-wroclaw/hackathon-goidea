module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: grunt.file.readJSON('jshint.json'),
    lint: {
      frontend: ['static/js/**/*.js']
    },
    watch: {
      files: [ '<%= lint.frontend %>'],
      tasks: 'default'
    },
    complexity: {
      frontend: {
        src: '<%= lint.frontend %>',
        options: {
          cyclomatic: 5,
          halstead: 20,
          maintainability: 80
        }
      }
    },
    clean: ['static/css/**/*.css'],
    jsbeautifier: {
      files: '<%= watch.files %>',
      options: {
        js: {
          "indent_size": 2,
          "indent_char": " ",
          "indent_level": 0,
          "indent_with_tabs": false,
          "preserve_newlines": true,
          "max_preserve_newlines": 3,
          "jslint_happy": false,
          "brace_style": "collapse",
          "keep_array_indentation": false,
          "keep_function_indentation": false,
          "space_before_conditional": true,
          "eval_code": false,
          "indent_case": false,
          "unescape_strings": false
        }
      }
    },
    go : {
      goidea : {
        output: "goidea",
        run_files: ["main.go"]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-complexity');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-go');

  // Default task(s).
  grunt.registerTask('default', ['jsbeautifier', 'jshint:*', 'complexity', 'clean']);
};