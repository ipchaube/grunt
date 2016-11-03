/**
 * Created by ichaube on 10/20/2016.
 */

module.exports=function(grunt){
    "use strict";
    grunt.initConfig({
        concat:{
            js:{
                src: ['js/*.js'],
                dest:'build/script.js',
            },
            css:{
                src: ['css/*.css'],
                dest:'build/style.css',
            }
        },
        cssmin: {
            css:{
                src: 'build/style.css',
                dest: 'css/release/main.min.css'
            }
        },
        watch: {
            scripts: {
                files: ['js/*.js', 'css/*.css', 'build/*.css'],
                tasks: ['concat', 'cssmin'],
                options: {
                    spawn: false,
                },
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);


/*
    grunt.registerTask('speak', function(){
        console.log("I am speaking.");
    });

    grunt.registerTask('bark', function(){
        console.log("I am barking.");
    });


    grunt.registerTask('both', ['speak','bark']);
    grunt.registerTask('default', ['speak','bark']);
    */
}
