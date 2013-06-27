"use strict";

module.exports = function(grunt){
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'dest/*.js',
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        copy:{
            default:{
                files:{
                    'dest/index.js':['src/index.js']
                }
            }
        },
        uglify:{
            default:{
                files:{
                    'dest/index-min.js':['dest/index.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy','uglify']);
};