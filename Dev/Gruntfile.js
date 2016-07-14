module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js', 'assets/js/prod/*.js'],
                dest: 'assets/js/prod/main.min.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded' //expanded for dev
                },
                files: {
                    'assets/css/prod/main.css': 'assets/css/src/main.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true, // inline sourcemaps
                processors: [
                    // require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({browsers: 'ie >= 8, last 3 versions,> 2%'}) // add vendor prefixes
                    // require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'assets/css/prod/*.css',
                dist: 'assets/css/prod/*.css'
            }
        },
        watch: {
            src: {
                files: ['assets/js/src/*.js', 'assets/css/src/*.scss'],
                tasks: ['default'],
            }
        },
        es6transpiler: {
            dist: {
                files: {
                    'assets/js/prod/main.js': 'assets/js/src/main.js'
                }
            }
        },
        jshint: {
            all: 'assets/js/main.js'
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-es6-transpiler');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('default', ['es6transpiler', 'sass', 'postcss']);
    grunt.registerTask('es6', 'es6transpiler');
    grunt.registerTask('jshint', 'jshint');

};
