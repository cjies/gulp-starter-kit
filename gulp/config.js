// *************************************
//
//   Config for gulp tasks
//
// *************************************

import path from 'path';
import fs from 'fs';

export default {

    // -------------------------------------
    //   Server Port
    // -------------------------------------

    browserPort: 8888,
    UIPort: 8080,
    testPort: 8101,

    // -------------------------------------
    //   Stylesheets
    // -------------------------------------

    // Sass with libsass
    sass: {
        src: ['src/**/*.+(sass|scss)'],
        sourcemap: true,
        opt: {
            outputStyle: 'compact',
            includePaths: [
                path.join(__dirname, 'node_modules')
            ]
        },
        autoprefixer: {
            browsers: ['last 2 versions'],
            cascade: false
        },
        cssnano: {
            reduceIdents: false
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
        cssnano: {
            reduceIdents: false
        },
        dest: 'www/css'
    },

    // Vanilla CSS
    css: {
        src: ['src/**/*.css'],
        sourcemap: true,
        autoprefixer: false,
        cssnano: {
            reduceIdents: false
        },
        dest: 'www/css'
    },

    // -------------------------------------
    //   Scripts
    // -------------------------------------

    scripts: {
        src: ['src/**/*.js'],
        output: false,
        dest: 'www/js'
    },

    // -------------------------------------
    //   HTML
    // -------------------------------------

    // HTML Templates
    html: {
        src: ['src/**/*.html'],
        dest: 'www/',
        htmlmin: {
            removeComments: true,
            collapseWhitespace: true
        }
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
        imagemin: {},
        dest: 'www/img'
    },

    // Fonts
    fonts: {
        src: ['static/fonts/**/*.+(woff|woff2|ttf|eot|svg)'],
        dest: 'www/fonts'
    },

    // JSON
    json: {
        src: [],
        dest: 'www/json'
    },


    // -------------------------------------
    //   Test
    // -------------------------------------

    test: {
        karma: 'tests/karma.config.js'
    },

    // -------------------------------------
    //   Vendor
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
            cssnano: {
                reduceIdents: false
            },
            dest: 'www/css'
        }
    },

    // -------------------------------------
    //   Utils
    // -------------------------------------

    srcDir: './src/',
    buildDir: 'www',

    assetExtensions: [
        'js',
        'css',
        'png',
        'jpe?g',
        'gif',
        'svg',
        'eot',
        'otf',
        'ttc',
        'ttf',
        'woff2?'
    ],

    gzip: {
        src: 'www/**/*.+(html|xml|json|css|js|js.map|css.map)',
        options: {},
        dest: 'www/'
    },

    // Banner
    banner: {
        header: fs.readFileSync('copyright.txt', 'utf8')
    },

    // -------------------------------------
    //   Tasks Runner (Dev, Prod, Watch)
    // -------------------------------------

    tasks: {
        dev: ['html', 'sass', 'scripts', 'images', 'vendor'],
        prod: ['html', 'sass', 'scripts', 'images', 'vendor'],
        watch: ['html', 'sass', 'scripts', 'images']
    }

};
