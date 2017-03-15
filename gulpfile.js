var gulp = require('gulp'),
    gp_clean = require('gulp-clean'),
    gp_typescript = require('gulp-typescript');

/// Define paths
var srcPaths = {
    app: ['app']
};

var destPaths = {
    app: 'app/'
};
    
// Delete wwwroot/app contents
gulp.task('clean', function () {
    return gulp.src(srcPaths.app + "*", {
            read: false
        })
        .pipe(gp_clean({
            force: true
        }));
});

// gulp.task('default', ['app', 'js', 'watch']);