module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'js/<%= pkg.name %>.min.js'
      }
    },
	less: {
	  development: {
		options: {
		  paths: ['assets/css']
		},
		files: {
		  'css/<%= pkg.name %>.css': 'src/<%= pkg.name %>.less'
		}
	  }
	},
	cssmin: {
		options: {
			compatibility: 'ie8',
			keepSpecialComments: '*',
			advanced: false
		},
		theme: {
			src: 'css/<%= pkg.name %>.css',
			dest: 'css/<%= pkg.name %>.min.css'
		}
	}
});

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
 
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'less', 'cssmin']);


};