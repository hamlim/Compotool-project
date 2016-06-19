module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'assets/src/*.js',
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
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'sass']);

};
