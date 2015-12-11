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
    },

    svgstore: {
      options: {
        prefix : 'icon-', // This will prefix each ID
        svg: {
          viewBox: '0 0 32 32',
          version: '1.1',
          xmlns: 'http://www.w3.org/2000/svg',
          'xmlns:xlink': 'http://www.w3.org/1999/xlink'
        },
      },
      default: {
        files : {
          'assets/svg/nice-things.svg': ['assets/svg/svgo_live/*.svg'],
        },
      },
    }    

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-svgstore');

  grunt.registerTask('default', ['watch']);

};