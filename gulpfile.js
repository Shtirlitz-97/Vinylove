const gulp = require('gulp');


// Таски
require('./gulp/dev.js');
require('./gulp/docs.js')

gulp.task(
    'dev', 
    gulp.series(
        'clean:dev', 
        gulp.parallel('html:dev','sass:dev','images:dev','fonts:dev','js:dev'),
        gulp.parallel('browser-sync:dev', 'watch:dev')
    )
);

gulp.task(
    'docs', 
    gulp.series(
        'clean:docs','images:docs',
        gulp.parallel('html:docs','sass:docs','fonts:docs','js:docs'),
        'clean-paths',  
        gulp.parallel('browser-sync:docs')
));