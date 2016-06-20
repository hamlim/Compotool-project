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
                dest: 'assets/prod/main.min.js'
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
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-es6-transpiler');

    // Default task(s).
    grunt.registerTask('default', ['es6transpiler', 'sass', 'uglify']);
    grunt.registerTask('es6', 'es6transpiler');

};
