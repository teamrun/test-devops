var gulp = require('gulp');

var rename = require('gulp-rename');

gulp.task('rename', function(){
    gulp.src('app.js')
        .pipe(rename( Date.now() + '.js' ))
        .pipe(gulp.dest('./'));
});


gulp.task('default', ['rename']);