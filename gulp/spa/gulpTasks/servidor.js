const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

function monitorarArquivos(cb){
    watch('src/**/*.html',()=>gulp.series('appHTML')())
    watch('src/assets/sass/**/*.scss',()=>gulp.series('appCSS')())
    watch('src/assets/js/**/*.js',()=>gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*',()=>gulp.series('appIMG')())
    return cb()
}

function servidor(){
    return gulp.src('build')
    .pipe(webserver({
        port:8080,
        open:true,
        livereload: true
    }))
}

module.exports = {
    monitorarArquivos,
    servidor
}