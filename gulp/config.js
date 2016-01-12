'use strict';

const currentYear = new Date().getFullYear();

module.exports = {

  // -------------------------------------
  //   Server Port
  // -------------------------------------

    browserPort  : 8888,
    UIPort       : 8080,
    serverPort   : 8101,


  // -------------------------------------
  //   Stylesheets
  // -------------------------------------

    // Sass with libsass
    sass: {
      src: ['src/**/*.+(sass|scss)'],
      sourcemap: true,
      autoprefixer: {
        browsers: ['last 2 versions'],
        cascade: false
      },
      dest: 'www/css'
    },

    // Less
    less: {
      src: ['src/**/*.less'],
      sourcemap: true,
      autoprefixer: {
        browsers: ['last 2 versions'],
        cascade: false
      },
      dest: 'www/css'
    },

    // Vanilla CSS
    css: {
      src: ['src/**/*.css'],
      sourcemap: true,
      autoprefixer: false,
      dest: 'www/css'
    },


  // -------------------------------------
  //   Scripts
  // -------------------------------------

    // JavaScript
    scripts: {
      src: ['src/**/*.js'],
      output: false,
      dest: 'www/js'
    },


  // -------------------------------------
  //   Templates
  // -------------------------------------

    // HTML Templates
    html: {
      src: ['src/**/*.html'],
      dest: 'www/'
    },

    // Jade Templates
    jade: {
      src: ['src/**/*.jade'],
      underscore: false,  // Render underscore file
      locals: false,  
      dest: 'www/'
    },


  // -------------------------------------
  //   Static Sources
  // -------------------------------------

    // Images
    images: {
      src: ['static/img/**/*.+(jpg|jpeg|gif|png)'],
      filter: [],
      dest: 'www/img'
    },

    // Fonts
    fonts: {
      src: ['static/fonts/**/*.+(woff|woff2|ttf|eot|svg)'],
      dest: 'www/fonts'
    },

    // Locales JSON
    locales: {
      src: [],
      dest: 'www/locales'
    },


  // -------------------------------------
  //   Tests
  // -------------------------------------

    test: {
      karma: {
        config: 'tests/karma.conf.js',
        src: './thisdoesntexist'
      }
    },


  // -------------------------------------
  //   Utitlity
  // -------------------------------------

    gzip: {
      src: 'www/**/*.+(html|xml|json|css|js|js.map|css.map)',
      options: {},
      dest: 'www/'
    },

    dist: {
      root: 'www',
      index: 'www/index.html'
    },

    // Banner
    banner: {
      header: [
                '/*******************************************',
                ' * Copyright ' + currentYear,
                ' *',
                ' * <%= pkg.name %>, v<%= pkg.version %>',
                ' * <%= pkg.description %>',
                ' *',
                ' * By <%= pkg.author %>',
                ' *',
                ' * License: <%= pkg.license %>',
                ' *',
                ' ******************************************/',
                '' 
              ].join('\n')
    }, 


  // -------------------------------------
  //   Vendors
  // -------------------------------------
 
    vendor: {
      scripts: {
        src: [],
        output: 'vendor.bundle.js',
        dest: 'www/js'
      },
      styles: {
        src: [],
        output: 'vendor.bundle.css',
        dest: 'www/css',
      }
    },


  // -------------------------------------
  //   Tasks Runner (Dev, Prod, Watch)
  // -------------------------------------

    tasks: {
      dev:   ['html', 'sass', 'scripts', 'images', 'fonts', 'vendor'],
      prod:  ['html', 'sass', 'scripts', 'images', 'fonts', 'vendor'],
      watch: ['html', 'sass', 'scripts', 'images', 'fonts']
    }

};
