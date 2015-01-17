/* 
A Gruntfile.js that can be used in a grunt configuration. Everytime the sass file scss/style.scss is saved,
the corresponding css/style.css gets created/updated, and then autoprefixer parses it in order to add the correct vendor prefixes.
*/

module.exports = function(grunt) {

  grunt.initConfig({

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expand'              // nested, expanded, compact, compressed
        },
        files: {                         // Dictionary of files
          'css/style.css': '_sass/style.scss'      // 'destination': 'source'
        }
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    },

    autoprefixer: {
      dist: {
        files: {
          'css/style.css': 'css/style.css'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};