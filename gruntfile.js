module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= Gliss.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'Gcore/src/<%= pkg.name %>.js',
        dest: 'Gcore/<%= pkg.name %>.js'
      }
    },
	    express: {
      web: {
        options: {
          script: "Gcore/server/index.js",
          port: 8443,
		  debug: true,
		  logs: undefined
        }
      }
    },
	
	  watch: {
    express: {
      files:  [ 'Gcore/**' ],
      tasks:  [ 'express:dev' ],
      options: {
        spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
      }
    }
  }	 
  
  });

  // Load NPM Tasks
  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-express-server");

  // Register task(s).
  grunt.registerTask("default", ["eslint"]);
  grunt.registerTask("serve", ["default", "express", "watch"]);
  grunt.registerTask('rebuild', ['clean', 'browserify:scripts', 'stylus', 'copy:images']);
  grunt.registerTask('dev', ['rebuild', 'express', 'watch']);
};