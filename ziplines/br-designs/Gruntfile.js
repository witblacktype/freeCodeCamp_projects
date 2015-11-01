// This shows a full config file!
module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		watch : {
			content : {
				files : '*.html'
			}, //this live reloads html also

			images : {
				files : ['img/content/src/*.{png,jpg,gif}', 'img/layout/src/*{png,jpg,gif}'],
				tasks : ['newer:imagemin']
			}, // watch images added to src

			deleting : {
				files : ['images/src/*.{png,jpg,gif}'],
				tasks : ['delete_sync']
			}, // end of delete sync

			scripts : {
				files : ['js/src/libs/*.js', 'js/src/custom/*.js'],
				tasks : ['uncss', 'concat', 'uglify'],
				options : {
					spawn : false,
				},
			}, //end of watch scripts

			css : {
				files : ['css/libs/*.css', 'css/custom/*.css'],
				tasks : ['uncss', 'concat', 'uglify'],
				options : {
					spawn : false,
				}
			}, //end of sass watch

		}, //end of watch

		/* ====================================================================================================================================================
		 * ====================================================================================================================================================

		 Tasks

		 ====================================================================================================================================================
		 ====================================================================================================================================================
		 */

		delete_sync : {
			dist : {
				cwd : 'img/dist',
				src : ['**'],
				syncWith : 'img/src'
			}
		}, // end of delete sync

		imagemin : {
			static: {                          // Target
	      files: {                         // Dictionary of files
	        'dist/img.png': 'src/img.png', // 'destination': 'source'
	        'dist/img.jpg': 'src/img.jpg',
	        'dist/img.gif': 'src/img.gif'
	      }
	    },
			dynamic : {
				files : [{
					expand : true, // Enable dynamic expansion
					cwd : 'img/content/src', // source images (not compressed)
					src : ['*.{png,jpg,gif}'], // Actual patterns to match
					dest : 'img/content/dist/' // Destination of compressed files
				}]
			}
		}, //end imagemin

		concat : {
			js: {
				src : ['js/src/libs/jquery.min.js', 'js/src/libs/bootstrap.min.js', 'js/src/custom/app.js'],
				dest : 'js/dist/production.js'
			},
			css: {
				src : ['css/src/libs/bootstrap.css', 'css/src/libs/fontello.css', 'css/src/custom/style.css'],
		    dest : 'css/dist/main.css'
			}
		}, //end concat

		uglify : {
			js : {
				src : 'js/dist/production.js',
				dest : 'js/dist/production.min.js'
			}
		}, //end uglify
		uncss: {
			dist: {
				files:{
					'main.css' : ['index.html']
				}
			}
		},
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'css/dist',
		      src: ['main.css'],
		      dest: 'css/dist',
		      ext: '.min.css'
		    }]
		  }
		},
		//end uglify

		autoprefixer : {

			options : {

				browsers : ['> 5%', 'last 2 version', 'ie 8', 'ie 9']
			},

			dist : {
				files : {
					'css/main.css' : 'css/main.css'
				}

			}
		} //end of autoprefixer
	});

	// load npm tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-delete-sync');

	// define default task
	grunt.registerTask('default', ["watch"]);
};
