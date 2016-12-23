var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .on('error', onError)
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('buildCSS',['sass'], function() {
    return gulp.src(['src/css/**/*.css','src/css/style.min.css'])
        .pipe(concat('style.min.css'))
        .on('error', onError)
        .pipe(gulp.dest('src/dist'))
        .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('watch', ['buildCSS','browserSync'], function () {
    gulp.watch('src/scss/**/*.scss', ['buildCSS']);
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('jekyllWatch', ['browser-sync'], function () {
    gulp.watch("*.scss").on('change', browserSync.reload);
});

gulp.task('browserSync', function () {
    browserSync.init({
        injectChanges: true,
       server: {
           baseDir: './'
       }
    });
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});


gulp.task('default',['watch']);

gulp.task('build', ['jekyllWatch']);

function onError(err) {
    console.log(err);
    this.emit('end');
}
