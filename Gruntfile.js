'use strict';

var path = require('path');

module.exports = function(grunt) {

	grunt.initConfig({

		tag_chrome : '--tags @chrome_live', // '--tags @debug_m2',  // '--tags @debug_chrome', 
		tag_firefox : '--tags @common,@firefox',
		tag_bs_pc1 : '--tags @debug_pc1', //'--tags @bs_pc1', // '--tags @debug1', 
		tag_bs_m1 : '--tags @bs_m1', // '--tags @debug_m1', 
	
		env : {
			chrome : {
				PLATFORM : 'CHROME'
			},
			firefox : {
				PLATFORM : 'FIREFOX'
			},
			bs_pc1 : {
				PLATFORM : 'BROWSERSTACK_PC1'
			},
			bs_m1 : {
				PLATFORM : 'BROWSERSTACK_M1'
			}
		},
	
		jshint : {
			all : [ 'Gruntfile.js', 'features/step_definitions/*.js', 'features/support/*.js' ],
			options : {
				node : true,
				strict : true,
				globalstrict : true
			}
		},
	
		exec : {
			run_chrome : {
				command : 'node ' + path.join('node_modules', 'cucumber', 'bin', 'cucumber.js -f pretty <%= tag_chrome %>')
			},
			run_firefox : {
				command : 'node ' + path.join('node_modules', 'cucumber', 'bin', 'cucumber.js -f pretty <%= tag_firefox %>')
			},
			run_bs_pc1 : {
				command : 'node ' + path.join('node_modules', 'cucumber', 'bin', 'cucumber.js -f pretty <%= tag_bs_pc1 %>')
			},
			run_bs_m1 : {
				command : 'node ' + path.join('node_modules', 'cucumber', 'bin', 'cucumber.js -f pretty <%= tag_bs_m1 %>')
			},
			run_help : {
				command : 'node ' + path.join('node_modules', 'cucumber', 'bin', 'cucumber.js --help')
			},
		}
	
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-env');

	grunt.registerTask('default', [ 'jshint', 'exec:run_help' ]);
	grunt.registerTask('chrome', [ 'env:chrome', 'jshint', 'exec:run_chrome' ]);
	grunt.registerTask('firefox', [ 'env:firefox', 'jshint', 'exec:run_firefox' ]);
	grunt.registerTask('bs_pc1', [ 'env:bs_pc1', 'jshint', 'exec:run_bs_pc1' ]);
	grunt.registerTask('bs_m1', [ 'env:bs_m1', 'jshint', 'exec:run_bs_m1' ]);
	
};
