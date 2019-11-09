var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	$ = require('gulp-load-plugins')({lazy: true});

var devDirectory = 'public_html/dev/';
var distDirectory = 'public_html/dist/';

var stylesDevDirectory = devDirectory + 'scss/';
var jsDevDirectory = devDirectory + 'js/';
var templatesDirectory = 'templates/**/*.html';

var babel = require('gulp-babel');

gulp.task('styles', function () {
	return gulp.src( stylesDevDirectory + 'style.scss')
		.pipe($.sass().on('error', $.sass.logError))
		.pipe($.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe($.cleanCss())
		.pipe(gulp.dest(distDirectory + 'css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function () {
	return gulp.src([ jsDevDirectory + 'app.js' ])
		.pipe($.plumber())
		.pipe(babel({presets: ['es2015']}))
		.pipe($.concat('app.js'))
		.pipe($.uglify())
		.pipe(gulp.dest(distDirectory + 'js'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('twig', function() {
  return gulp.src(templatesDirectory)
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', function () {
	browserSync({
		proxy: 'http://localhost/architekt_abj/public_html/'
	});
});

gulp.task('dev', ['default','browser-sync'], function () {
	gulp.watch( templatesDirectory, ['twig']);
	gulp.watch( stylesDevDirectory + '**/*.scss', ['styles']);
	gulp.watch( jsDevDirectory + '**/*.js', ['scripts']);
});

gulp.task('default', function () {
	gulp.start('styles', 'scripts');
});