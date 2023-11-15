var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create(); //browser-sync 호출

var htmlSrc = ['./src/*.html', './src/**/*.html', '!./src/inc/*.html'];
var statusPath = './asset/status/';
var cssPath = './asset/css/';
var jsPath = './asset/js/';
var imagePath = './asset/images/';

// html파일 인클루드
gulp.task('fileinclude', function () {
	return gulp.src(htmlSrc)
	.pipe(fileinclude({
		prefix: '@@',
		basepath: '@file'

	}))
	.pipe(gulp.dest('./html/'))
});

gulp.task('browserSync', function () {
	return browserSync.init({
		port: 3005,
		server: {
			baseDir: './',
			index: "status/status.html"
		}
	});
});

gulp.task('watch', function() {
	gulp.watch(htmlSrc, gulp.series('fileinclude'));
	gulp.watch([statusPath, cssPath, jsPath, imagePath]).on('change', browserSync.reload);
	gulp.watch(htmlSrc).on('change', browserSync.reload);
});

gulp.task('default',
	gulp.parallel('browserSync', 'watch')
);