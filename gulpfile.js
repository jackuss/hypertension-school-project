var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var rimraf = require('gulp-rimraf');
var bowerFiles = require('main-bower-files');
var inject = require('gulp-inject');

// Load all gulp plugins into the plugins object.
var plugins = require('gulp-load-plugins')();



var src = {
	html: 'src/**/*.html',
	libs: 'src/libs/**',
	scripts: {
		all: 'src/**/*.js',
		app: 'src/app.js'
	}
};

var build = 'build/';
var out = {
	libs: build + 'libs/',
	scripts: {
		file: 'app.min.js',
		folder: build + '/'
	}
}

gulp.task('html', function() {
	return gulp.src(src.html)
		.pipe(gulp.dest(build))
		.pipe(plugins.connect.reload());
});

gulp.task('copy-bower', function() {
	gulp.src('./bower_components/**/*.*')
	.pipe(gulp.dest('./build/bower_components'))
});

/* The jshint task runs jshint with ES6 support. */
gulp.task('jshint', function() {
	return gulp.src(src.scripts.all)
		.pipe(plugins.jshint({
			esnext: true // Enable ES6 support
		}))
		.pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('libs', function() {
	/* In a real project you of course would use npm or bower to manage libraries. */
	return gulp.src(src.libs)
		.pipe(gulp.dest(out.libs))
		.pipe(plugins.connect.reload());
});

gulp.task('sass', function () {
	gulp.src('./src/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concatCss("style.css"))
		.pipe(gulp.dest('./build'));
});

gulp.task('inject-bower', function() {
	var target = gulp.src('./src/index.html');
	var sources = gulp.src(bowerFiles(), { base: './build/bower_components' });

	return target.pipe(inject(sources, {name: 'bower'}))
	.pipe(gulp.dest('./build'));
});

/* Compile all script files into one output minified JS file. */
gulp.task('scripts', ['jshint'], function() {

	var sources = browserify({
		entries: src.scripts.app,
		debug: true // Build source maps
	})
	.transform(babelify.configure({
		// You can configure babel here!
		// https://babeljs.io/docs/usage/options/
	}));

	return sources.bundle()
		.pipe(vinylSourceStream(out.scripts.file))
		.pipe(vinylBuffer())
		.pipe(plugins.sourcemaps.init({
			loadMaps: true // Load the sourcemaps browserify already generated
		}))
		.pipe(plugins.ngAnnotate())
		.pipe(plugins.uglify())
		.pipe(plugins.sourcemaps.write('./', {
			includeContent: true
		}))
		.pipe(gulp.dest(out.scripts.folder))
		.pipe(plugins.connect.reload());

});

gulp.task('serve', ['build', 'watch'], function() {
	plugins.connect.server({
		root: build,
		port: 4242,
		livereload: true,
		fallback: build + 'index.html'
	});
});

gulp.task('watch', function() {
	gulp.watch(src.libs, ['build']);
	gulp.watch(src.html, ['build']);
	gulp.watch(src.scripts.all, ['build']);
	gulp.watch('./src/**/*.scss', ['build']);
});

gulp.task('build', ['scripts', 'html', 'libs', 'sass', 'copy-bower', 'inject-bower']);
gulp.task('default', ['serve']);
