module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        jshint: {
            src: ['public/javascripts/*.js', 'node/*.js', 'routes/*.js', '!public/javascripts/angular*.js'],
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                expr: true,
                newcap: true,
                globals: {
                    angular: true,
                    module: true,
                    require: true,
                    console: true
                }
            }
        }

    });
    grunt.registerTask('default', ['jshint']);

};