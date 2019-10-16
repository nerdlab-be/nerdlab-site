'use strict';


// ---
// Setup: load plugins and define config variables
// ---


// Plugins
const gulp = require("gulp");
const gnf = require("gulp-npm-files");
const browsersync = require("browser-sync").create();
const del = require("del");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const cheerio = require("gulp-cheerio");
const svgSymbols = require("gulp-svg-symbols");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rev = require("gulp-rev");



// Config
const config = {
  browsersync: {
    proxy: 'nerdlab.test',
    notify: true,
    ghostMode: {
      clicks: true,
      location: true,
      forms: true,
      scroll: false
    }
  },
  icons: {
    title: '%f icon',
    svgAttrs: {
      class: 'c-icon-set',
    },
    templates: ['default-svg']
  },
  cheerio: {
    run: function ($) {
      $('[fill]').removeAttr('fill');
      $('defs').remove();
    },
    parserOptions: { xmlMode: true }
  },
  jsConcat: 'scripts.js'
};

// Paths
const paths = {
  vendor: 'web/assets/_vendor/',
  scssSrc: 'web/assets/_scss/**/*.scss',
  cssDist: 'web/assets/css/',
  revDist: 'web/build/',
  jsSrc: [
    'web/assets/_vendor/jquery/dist/jquery.min.js',
    'web/assets/_vendor/svgxuse/svgxuse.js',
    'web/assets/_vendor/picturefill/dist/picturefill.js',
    'web/assets/_vendor/lazysizes/lazysizes.js',
    'web/assets/_vendor/lazysizes/plugins/unveilhooks/ls.unveilhooks.js',
    'web/assets/_vendor/jquery-match-height/jquery.matchHeight.js',
    'web/assets/js/_plugins/*.js',
    'web/assets/js/_scripts/*.js'
  ],
  jsSrcProduction: [
    'web/assets/_vendor/jquery/dist/jquery.min.js',
    'web/assets/_vendor/svgxuse/svgxuse.js',
    'web/assets/_vendor/picturefill/dist/picturefill.js',
    'web/assets/_vendor/lazysizes/lazysizes.js',
    'web/assets/_vendor/lazysizes/plugins/unveilhooks/ls.unveilhooks.js',
    'web/assets/_vendor/jquery-match-height/jquery.matchHeight.js',
    'web/assets/js/_plugins/*.js',
    'web/assets/js/_scripts/*.js'
  ],
  jsDist: 'web/assets/js/',
  iconsSrc: '_artwork/icons/*.svg',
  iconsDist: 'web/assets/images/svg/',
  cssWatch: 'web/assets/_scss/**/*.scss',
  jsWatch: 'web/assets/js/_scripts/**/*.js',
  iconsWatch: '_artwork/icons/*.svg',
  siteWatch: [
    'craft/templates/**/*.html',
    'craft/templates/**/*.twig'
  ]
}

// Install
// ---
// Copy dependencies from `node_modules` to $paths.vendor
function copyNpmDependencies() {
  return gulp.src(gnf(), {base:'./'})
    .pipe(gulp.dest(paths.vendor));
}

// Move `$paths.vendor/node_modules/**/*` to `$paths.vendor/**/*`
function copyVendorDependencies() {
  return gulp.src(paths.vendor + 'node_modules/**/*')
    .pipe(gulp.dest(paths.vendor));
}

// Delete `$paths.vendor/node_modules`
function dependencies() {
  return del([paths.vendor + 'node_modules/']);
}

// BrowserSync
// ---
function browserSync(done) {
  browsersync.init(config.browsersync);
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Icons
// ---
// Convert multiple svg's to one symbol file
// https://css-tricks.com/svg-symbol-good-choice-icons/
function icons() {
  return gulp.src(paths.iconsSrc)
    .pipe(cheerio(config.cheerio))
    .pipe(svgSymbols(config.icons))
    .pipe(gulp.dest(paths.iconsDist))
    .pipe(browsersync.stream());
}

// CSS
// ---
function css() {
  return gulp
    .src(paths.scssSrc)
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(paths.cssDist))
    .pipe(browsersync.stream());
}

// Production css > 'gulp productioncss'
function productionCss() {
  return gulp
    .src(paths.scssSrc)
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(postcss([ autoprefixer() ]))
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
}

// JS
// ---
// Transpile, concatenate and minify scripts
function scripts() {
  return gulp
    .src(paths.jsSrc)
    .pipe(concat(config.jsConcat))
    .pipe(gulp.dest(paths.jsDist))
    .pipe(browsersync.stream())
}

// Compress and concat JS > 'gulp productionjs'
function productionScripts() {
  return gulp
    .src(paths.jsSrcProduction)
    .pipe(concat(config.jsConcat))
    .pipe(rename((path) => {
      path.basename += ".min";
    }))
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
}

// Watch files
// ---
function watchFiles() {
  gulp.watch(paths.cssWatch, css);
  gulp.watch(paths.jsWatch, scripts);
  gulp.watch(paths.iconsWatch, icons);
  gulp.watch(
    paths.siteWatch,
    gulp.series(browserSyncReload)
  );
}

// Tasks
// ---
gulp.task("install", gulp.series(copyNpmDependencies, copyVendorDependencies, dependencies));
gulp.task("icons", icons);
gulp.task("css", css);
gulp.task("scripts", scripts);
gulp.task("productionCss", productionCss);
gulp.task("productionScripts", productionScripts);

// Default
gulp.task(
  "default",
  gulp.series(
    "install",
    gulp.parallel(css, scripts,icons),
  )
);

// Build
gulp.task(
  "build",
  gulp.series(
    "install",
    gulp.parallel(productionCss, productionScripts,icons)
  )
);

// Watch
gulp.task(
  "watch",
  gulp.series(
    "default",
    gulp.parallel(watchFiles, browserSync)
  )
);
