module.exports = function(grunt) {
   grunt.initConfig({
      // ---
      // Variables
      // ---

      pkg: grunt.file.readJSON('package.json'),

      dirs: {
         src: 'src',
         dist: '../../engine/web/common/static/bootstrapvalidator',
         test: 'test'
      },

      banner: [
         '/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Tento soubor neupravujte !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
         '/*Změny jsou potřeba udělat ve zdrojových souborech v contrib/bootstrapvalidator a pak vygenerovat přes ./node_modules/grunt/bin/grunt',
         '/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
         '/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Tento soubor neupravujte !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
         ' * BootstrapValidator (<%= pkg.homepage %>)',
         ' * <%= pkg.description %>',
         ' *',
         ' * @version     v<%= pkg.version %>, built on <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %>',
         ' * @author      <%= pkg.author.url %>',
         ' * @copyright   (c) 2013 - <%= grunt.template.today("yyyy") %> Nguyen Huu Phuoc',
         ' * @license     Commercial: <%= pkg.homepage %>/license/',
         ' *              Non-commercial: http://creativecommons.org/licenses/by-nc-nd/3.0/',
         ' */\n'
      ].join('\n'),

      // ---
      // Tasks
      // ---

      copy: {
         main: {
            files: [
               {
                  cwd: '<%= dirs.src %>/css',
                  src: '**',
                  dest: '<%= dirs.dist %>/css',
                  expand: true,
                  flatten: true,
                  filter: 'isFile'
               },
               {
                  cwd: '<%= dirs.src %>/js/language',
                  src: '**',
                  dest: '<%= dirs.dist %>/js/language',
                  expand: true,
                  flatten: true,
                  filter: 'isFile'
               }
            ]
         }
      },

      cssmin: {
         minify: {
            expand: true,
            cwd: '<%= dirs.src %>/css/',
            src: ['*.css'],
            dest: '<%= dirs.dist %>/css/',
            ext: '.min.css'
         }
      },

      concat: {
         source: {
            options: {
               separator: ';',
               stripBanners: true,
               banner: '<%= banner %>'
            },
            src: [
               '<%= dirs.src %>/js/bootstrapValidator.js',
               '<%= dirs.src %>/js/validator/emailAddress.js',
               '<%= dirs.src %>/js/validator/identical.js',
               '<%= dirs.src %>/js/validator/integer.js',
               '<%= dirs.src %>/js/validator/notEmpty.js',
               '<%= dirs.src %>/js/validator/phone.js',
               '<%= dirs.src %>/js/validator/regexp.js',
               '<%= dirs.src %>/js/validator/stringLength.js',
               '<%= dirs.src %>/js/validator/vat.js',
               '<%= dirs.src %>/js/validator/vatSimple.js',
               '<%= dirs.src %>/js/validator/zipCode.js',
               '<%= dirs.src %>/js/validator/charset.js',
               '<%= dirs.src %>/js/validator/iban.js',
               '<%= dirs.src %>/js/validator/greaterThan.js',
               '<%= dirs.src %>/js/validator/bankAccount.js'
            ],

            dest: '<%= dirs.dist %>/js/bootstrapValidator.js'
         },
         test: {
            src: ['<%= dirs.test %>/spec/*.js', '<%= dirs.test %>/spec/validator/*.js'],
            dest: '<%= dirs.test %>/spec.js'
         }
      },

      uglify: {
         build: {
            src: ['<%= dirs.dist %>/js/bootstrapValidator.js'],
            dest: '<%= dirs.dist %>/js/bootstrapValidator.min.js'
         }
      },

      jshint: {
         all: ['<%= dirs.src %>/js/**/*.js'],
         options: {
            browser: true,
            camelcase: true,
            curly: true,
            eqeqeq: true,
            eqnull: true,
            es3: true,
            expr: true,
            laxbreak: true, // Allow line breaking before && or ||
            loopfunc: true,
            newcap: true,
            noarg: true,
            onevar: true,
            sub: true,
            undef: true,
            white: true
         }
      },

      watch: {
         source: {
            files: ['<%= dirs.src %>/css/**', '<%= dirs.src %>/js/**'],
            tasks: ['build'],
            options: {
               spawn: false
            }
         },
         test: {
            files: ['<%= dirs.test %>/spec/**'],
            tasks: ['concat:test']
         }
      }
   });

   grunt.registerTask('default', 'build');
   grunt.registerTask('build', ['copy', 'cssmin', 'concat', 'uglify']);

   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');
};
