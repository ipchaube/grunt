/**
 * Created by ichaube on 10/20/2016.
 */

module.exports=function(grunt){
    "use strict";
    grunt.initConfig({
        concat:{
            dist:{
                src: ['js/*.js'],
                dest:'build/script.js',
            },
        },
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                },
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
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
