'use strict';


// ---
// Setup: load plugins and define config variables
// ---


// Plugins
import gulp from 'gulp';
import cp from 'child_process';
import shell from 'gulp-shell';
import sequence from 'run-sequence';
import rename from 'gulp-rename';
import svgSymbols from 'gulp-svg-symbols';
import cheerio from 'gulp-cheerio';
import svgmin from 'gulp-svgmin';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import critical from 'critical';
import gnf from 'gulp-npm-files';
import del from 'del';
import ftp from 'vinyl-ftp';
import gutil from 'gulp-util';
import rev from 'gulp-rev';
import gulpconfig from './gulpconfig.js';




// Config
const reload = browserSync.reload;
const config = {
  browsersync: {
    proxy: gulpconfig.config.proxy,
    notify: true,
    ghostMode: {
      clicks: true,
      location: true,
      forms: true,
      scroll: false
    }
  },
  symbols: {
    title: '%f symbol',
    svgClassname: 'c-symbol-set',
    templates: ['default-svg']
  },
  cheerio: {
    run: function ($) {
      $('[fill]').removeAttr('fill');
    },
    parserOptions: { xmlMode: true }
  },
  sass: {
    outputStyle: 'compressed'
  },
  autoprefixer: {
    browsers: [
      'last 2 version',
      '> 2%',
      'ie >= 9',
      'ios >= 8',
      'android >= 4'
    ]
  },
  cleancss: {
    mediaMerging: false,
    keepSpecialComments: 0
  },
  jsConcat: 'scripts.js',
  minifyjsConcat: 'scripts.min.js'
};


const paths = {
  vendor: 'web/assets/vendor/',
  scssSrc: 'web/assets/_scss/**/*.scss',
  cssDist: 'web/assets/css/',
  revDist: 'web/build/',
  jsSrc: [
    'web/assets/vendor/jquery/dist/jquery.min.js',
    'web/assets/vendor/svgxuse/svgxuse.js',
    'web/assets/vendor/picturefill/dist/picturefill.js',
    'web/assets/vendor/lazysizes/lazysizes.js',
    'web/assets/vendor/lazysizes/plugins/unveilhooks/ls.unveilhooks.js',
    'web/assets/vendor/jquery-match-height/jquery.matchHeight.js',
    'web/assets/js/_plugins/*.js',
    'web/assets/js/_scripts/*.js'
  ],
  jsDist: 'web/assets/js/',
  symbolsSrc: '_artwork/symbols/*.svg',
  symbolsDist: 'web/assets/images/svg/',
  cssWatch: 'web/assets/_scss/**/*.scss',
  jsWatch: 'web/assets/js/_scripts/**/*.js',
  symbolsWatch: '_artwork/symbols/*.svg',
  siteWatch: [
    'templates/**/*.html',
  ]
}





// ---
// Install
// ---


// Copy dependencies from `node_modules` to $paths.vendor
gulp.task('copy-npm-dependencies', () => {
  return gulp.src(gnf(), {base:'./'})
    .pipe(gulp.dest(paths.vendor));
});


// Move `$paths.vendor/node_modules/**/*` to `$paths.vendor/**/*`
gulp.task('copy-vendor-dependencies', ['copy-npm-dependencies'], () =>  {
  return gulp.src(paths.vendor + 'node_modules/**/*')
    .pipe(gulp.dest(paths.vendor));
});


// Delete `$paths.vendor/node_modules`
gulp.task('dependencies', ['copy-vendor-dependencies'], () =>  {
  return del([paths.vendor + 'node_modules/']);
});





// ---
// Symbols
// ---


// Convert multiple svg's to one symbol file
// https://css-tricks.com/svg-symbol-good-choice-icons/
gulp.task('symbols', () => {
  return gulp.src(paths.symbolsSrc)
    .pipe(cheerio(config.cheerio))
    .pipe(svgmin())
    .pipe(svgSymbols(config.symbols))
    .pipe(gulp.dest(paths.symbolsDist));
});





// ---
// CSS
// ---


// Generate css > 'gulp css'
gulp.task('css', () => {
  return gulp.src(paths.scssSrc)
    .pipe(sourcemaps.init())
    .pipe(sass.sync(config.sass).on('error', sass.logError))
    .pipe(postcss([ autoprefixer(config.autoprefixer) ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.cssDist))
    .pipe(browserSync.stream())
});

// Production css > 'gulp productioncss'
gulp.task('productioncss', () => {
  return gulp.src(paths.scssSrc)
    .pipe(sass.sync(config.sass).on('error', sass.logError))
    .pipe(postcss([ autoprefixer(config.autoprefixer) ]))
    .pipe(cleanCSS(config.cleancss))
    .pipe(rename((path) => {
      path.basename += ".min";
    }))
    .pipe(gulp.dest(paths.cssDist))
    .pipe(rev())
    .pipe(gulp.dest(paths.revDist))
    .pipe(rev.manifest({
      base: paths.revDist,
      path: 'web/build/manifest.json',
      merge: true
    }))
    .pipe(gulp.dest(paths.revDist));
});





// ---
// Javascript
// ---


// Concat JS > 'gulp js'
gulp.task('js', () => {
  return gulp.src(paths.jsSrc)
    .pipe(concat(config.jsConcat))
    .pipe(gulp.dest(paths.jsDist))
    .pipe(browserSync.stream());
});


// Compress and concat JS > 'gulp productionjs'
gulp.task('productionjs', () => {
  return gulp.src(paths.jsSrc)
    .pipe(concat(config.minifyjsConcat))
    .pipe(uglify())
    .pipe(gulp.dest(paths.jsDist))
    .pipe(rev())
    .pipe(gulp.dest(paths.revDist))
    .pipe(rev.manifest({
      base: paths.revDist,
      path: 'web/build/manifest.json',
      merge: true
    }))
    .pipe(gulp.dest(paths.revDist));
});





// ---
// Browsersync
// ---


// Browsersync > 'gulp browsersync'
gulp.task('browsersync', () =>  {
  browserSync.init(config.browsersync);
});




// ---
// FTP
// ---


gulp.task( 'staging', function () {
  var conn = ftp.create( {
    host: gulpconfig.config.host,
    user: gulpconfig.config.user,
    password: gulpconfig.config.pass,
    parallel: 10,
    log: gutil.log
  });

  var globs = [
    'config/**',
    'modules/**',
    'storage/rebrand/**',
    'templates/**',
    'web/**',
    '!web/cpresources/**',
    'composer.json',
    'composer.lock'
  ];

  return gulp.src( globs, { base: '.', buffer: false } )
    .pipe( conn.newer( gulpconfig.config.destination ) ) // only upload newer files
    .pipe( conn.dest( gulpconfig.config.destination ) );
});





// ---
// Main tasks
// ---


// Default task > 'gulp'
gulp.task('default', function(callback) {
  sequence(
    'assets',
  callback);
});


// Build task > 'gulp build'
gulp.task('build', function(callback) {
  sequence(
    'dependencies',
    [
      'productioncss',
      'productionjs',
      'symbols'
    ],
  callback);
});


// Assets task > 'gulp assets'
gulp.task('assets', function(callback) {
  sequence(
    'dependencies',
    ['css', 'js', 'symbols'],
  callback);
});


// Deploy staging task > 'gulp deployStaging'
gulp.task('deployStaging', function(callback) {
  sequence(
    'build',
    [
      'staging'
    ],
  callback);
});


// Watch task > 'gulp watch'
gulp.task('watch', ['default','browsersync'],() => {
  gulp.watch(paths.jsWatch, ['js']);
  gulp.watch(paths.cssWatch, ['css']);
  gulp.watch(paths.symbolsWatch, ['symbols']);
  gulp.watch(paths.siteWatch).on("change", reload);
});
