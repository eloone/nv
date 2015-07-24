var gulp = require('gulp');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var war = require('gulp-war');
var zip = require('gulp-zip');
var server = require('./server/server.js');
var PORT = process.env.PORT || 8080;

gulp.task('sass', function () {
  gulp.src('assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('livereload', function () {
  livereload.reload('app/index.html');
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['assets/css/*.css', 'app/**/*.html'], ['livereload']);
  gulp.watch(['assets/sass/*.scss', 'assets/sass/**/*.scss', 'assets/sass/**/**/*.scss'], ['sass']);
});

// Create war file for tomcat
gulp.task('war', function () {
  gulp.src([
   'index.html',
   'mocks/**/*',
   'app/**/*',
   'assets/**/*',
   'bower_components/**/*'
   ], {base: '.'})
  .pipe(war({
      welcome: 'index.html',
      displayName: 'nvision-front',
  }))
  .pipe(zip('nvision-front.war'))
  .pipe(gulp.dest("./tmp"));   
});

gulp.task('default', function () {
   // Create and expose server.
   var s = server.app.listen(PORT);

   // Log when server is started.
   s.on('listening', function () {
     console.log('Server started http://localhost:%d/', s.address().port);
   });
});