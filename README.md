# Gulp Starter Kit

Basic starter kit for gulp development. Included Sass, Less, Jade, HTML, Eslint, and browserSync.

Based on [angularjs-gulp-browserify-boilerplate](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate/) by jakemmarsh.


---

## About

The main Gulp tasks that included in ```gulp/tasks``` :

- **browserSync** - [BrowserSync](https://www.browsersync.io/)
- **deploy** - Deploy Allthings
- **development** - Build Dev Code with Dev Server
- **production** - Build Production Code
- **watch** - Gulp Watch
- **server** - Run a Express-dev-server
- **css** - Compile CSS with autoprefixer & minify
- **sass** - [libSass](http://sass-lang.com/libsass) Compiler, support [autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) & [Compass Mixins](https://github.com/Igosuki/compass-mixins)
- **less** - [Less](lesscss.org) Compiler, also support [autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) & [Compass Mixins](https://github.com/Igosuki/compass-mixins)
- **scripts** - JS, support concat & uglify.
- **lint** - Linter with [Eslint](http://eslint.org/), config in ```.eslintrc```
- **vendor** - Vendor for JS & CSS (will be bundled into each single file)
- **html** - HTML Watcher, support minify
- **jade** - [Jade](http://jade-lang.com/) Template Compiler, support ignore underscore file 
- **images** - Images [minify](https://github.com/sindresorhus/gulp-imagemin)
- **fonts** - move fonts from static to build folder
- **locales** - minify JSON 
- **gzip** - Gzip for ```html|xml|json|css|js|js.map|css.map```
- **test** - Unit Test with Karma


## Configuration

All Gulp config are written in ```gulp/tasks/config.js``` 

Dev, Prod & Watch's tasks can be configured in the end of config.js.

## Install

```
npm install
```


## Usage

Running Dev server

```
npm start
```

Building Production Code

```
npm run build
```


## License
MIT © [CJies](http://www.cjies.com)
