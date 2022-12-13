import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import squoosh from 'gulp-libsquoosh';
import { deleteAsync } from 'del';
import browser from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import svgo from 'gulp-svgmin';

export const styles = () =>
  gulp
    .src('src/scss/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), csso()]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist/public/src/css', { sourcemaps: '.' }))
    .pipe(browser.stream());

const html = () =>
  gulp
    .src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/public'));

const scripts = () =>
  gulp
    .src('src/js/index.js')
    .pipe(gulp.dest('dist/public/src/js'))
    .pipe(browser.stream());

const optimizeAvatars = () =>
  gulp
    .src('src/img/avatars/*.{png,jpg}')
    .pipe(squoosh())
    .pipe(gulp.dest('dist/public/src/img/avatars'));

const optimizeBackground = () =>
  gulp
    .src('src/img/backgound-village/*.{png,jpg}')
    .pipe(squoosh())
    .pipe(gulp.dest('dist/public/src/img/backgound-village'));

const optimizeChooseTour = () =>
  gulp
    .src('src/img/choose-tour-images/*.{png,jpg}')
    .pipe(squoosh())
    .pipe(gulp.dest('dist/public/src/img/choose-tour-images'));

const optimizeHistories = () =>
  gulp
    .src('src/img/histories/*.{png,jpg}')
    .pipe(squoosh())
    .pipe(gulp.dest('dist/public/src/img/histories'));

const optimizePhotos = () =>
  gulp
    .src('src/img/photos/*.{png,jpg}')
    .pipe(squoosh())
    .pipe(gulp.dest('dist/public/src/img/photos'));

const optimizeSvg = () =>
  gulp
    .src(['src/img/svg-icons/*.svg'])
    .pipe(svgo())
    .pipe(gulp.dest('dist/public/src/img/svg-icons'));

const optimizeAllImages = gulp.parallel(
  optimizeAvatars,
  optimizeBackground,
  optimizeChooseTour,
  optimizeHistories,
  optimizePhotos,
  optimizeSvg
);

const createWebpAvatars = () =>
  gulp
    .src(['src/img/avatars/*.{png,jpg}'])
    .pipe(
      squoosh({
        webp: {},
      })
    )
    .pipe(gulp.dest('dist/public/src/img/avatars'));

const createWebpHistories = () =>
  gulp
    .src('src/img/histories/icon-village*.{png,jpg}')
    .pipe(
      squoosh({
        webp: {},
      })
    )
    .pipe(gulp.dest('dist/public/src/img/histories'));

const createWebpPhotos = () =>
  gulp
    .src('src/img/photos/*.{png,jpg}')
    .pipe(
      squoosh({
        webp: {},
      })
    )
    .pipe(gulp.dest('dist/public/src/img/photos'));

const createWebp = gulp.parallel(
  createWebpAvatars,
  createWebpHistories,
  createWebpPhotos
);

const copyAvatars = () =>
  gulp
    .src('src/img/avatars/*.{png,jpg}')
    .pipe(gulp.dest('dist/public/src/img/avatars'));

const copyBackground = () =>
  gulp
    .src('src/img/backgound-village/*.{png,jpg}')
    .pipe(gulp.dest('dist/public/src/img/backgound-village'));

const copyChooseTour = () =>
  gulp
    .src('src/img/choose-tour-images/*.{png,jpg}')
    .pipe(gulp.dest('dist/public/src/img/choose-tour-images'));

const copyHistories = () =>
  gulp
    .src('src/img/histories/*.{png,jpg}')
    .pipe(gulp.dest('dist/public/src/img/histories'));

const copyPhotos = () =>
  gulp
    .src('src/img/photos/*.{png,jpg}')
    .pipe(gulp.dest('dist/public/src/img/photos'));

const copySvg = () =>
  gulp
    .src('src/img/svg-icons/*.svg')
    .pipe(gulp.dest('dist/public/src/img/svg-icons'));

const copyFonts = (done) => {
  gulp.src('src/fonts/*.{woff2,woff,ttf}').pipe(gulp.dest('dist/public/fonts'));
  done();
};

const copyIcoWebmanifest = (done) => {
  gulp
    .src("src/*.{ico,webmanifest}")
    .pipe(gulp.dest("dist/public"));
    done();
};

const copyFavicons = (done) => {
  gulp
    .src("src/img/favicons/*.{png,svg}")
    .pipe(gulp.dest("dist/public/src/img/favicons"));
  done();
};

const copy = gulp.parallel(
  copyAvatars,
  copyBackground,
  copyChooseTour,
  copyHistories,
  copyPhotos,
  copySvg,
  copyFonts,
  copyIcoWebmanifest,
  copyFavicons
);

const clean = () => {
  return deleteAsync('dist/public');
};

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'dist/public',
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

const reload = (done) => {
  browser.reload();
  done();
};

const watcher = () => {
  gulp.watch('src/scss/**/*.scss', gulp.series(styles));
  gulp.watch('src/*.html').on('change', browser.reload);
  gulp.watch('src/*.html', gulp.series(html, reload));
};

export const build = gulp.series(
  clean,
  copyFonts,
  copyIcoWebmanifest,
  copyFavicons,
  optimizeAllImages,
  gulp.parallel(styles, html, scripts, createWebp)
);

export default gulp.series(
  clean,
  copy,
  gulp.parallel(styles, html, scripts, createWebp),
  gulp.series(server, watcher)
);
