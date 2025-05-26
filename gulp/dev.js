const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const sourceMaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create()
const webpack = require('webpack-stream');



gulp.task('clean:dev',function(done){
    if(fs.existsSync('./build/')){
        return gulp.src('./build/', {read: false})
            .pipe(clean( { force: true } ));
    }
    done();
})

const fileIncludeSetting = {
    prefix: '@@',
    basepath: '@file',
}


const plumberNotify = (title) => {
    return {
        errorHandler: notify.onError({
            title: title,
            message: 'Error <%= error.message %>',
            sound: false,
        })
    };
}



gulp.task('html:dev', function(){
    return gulp
        .src(['./src/html/**/*.html', '!./src/html/blocks/*.html'])
        .pipe(changed('./build/', { hasChanged: changed.compareContents}))
        .pipe(plumber(plumberNotify('HTML')))
        .pipe(fileInclude(fileIncludeSetting))
        .pipe(gulp.dest('./build/'))
        .pipe(browsersync.stream());
});

gulp.task('sass:dev', function(){
    return gulp
        .src('./src/scss/*.scss')
        .pipe(plumber(plumberNotify('SCSS')))
        .pipe(sourceMaps.init())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('./build/css/'))
        .pipe(browsersync.stream());
});

gulp.task('images:dev', function(){
    return gulp
        .src('./src/img/**/*', { encoding: false })
        .pipe(changed('./build/img/'))
        // .pipe(imagemin({ verbose: true }))
        .pipe(gulp.dest('./build/img/'))
})

gulp.task('fonts:dev', function(){
    return gulp.src('./src/fonts/**/*', { encoding: false })
        .pipe(gulp.dest('./build/fonts/'))
})

gulp.task('js:dev', function(){
    return gulp
        .src('./src/js/*.js')
        .pipe(plumber(plumberNotify('JS')))
        // .pipe(babel())
        .pipe(webpack(require('./../webpack.config.js')))
        .pipe(gulp.dest('./build/js'))
        .pipe(browsersync.stream());
})


// const serverOptions = {
//     livereload: true,
//     open: true
// }

// gulp.task('server', function(){
//     return gulp.src('./build/')
//         .pipe(server(serverOptions))
// })

gulp.task('browser-sync:dev', function() {
    browsersync.init({
        server: {
            baseDir: "./build/"
        }
    });
});

gulp.task('watch:dev', function(){
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass:dev'));
    gulp.watch('./src/**/*.html', gulp.series('html:dev')).on('change', browsersync.reload);
    gulp.watch('./src/img/**/*', gulp.series('images:dev')).on('change', browsersync.reload);
    gulp.watch('./src/fonts/**/*', gulp.series('fonts:dev')).on('change', browsersync.reload);
    gulp.watch('./src/js/**/*.js', gulp.series('js:dev')).on('change', browsersync.reload);
});

