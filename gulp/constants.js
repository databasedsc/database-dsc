var gulp = require('gulp');
var ngConstant = require('gulp-ng-constant');

console.log("Environment: ", process.env.NODE_ENV);

gulp.task('constants', function () {
  var myConfig = require('./config.json');
  var envConfig = myConfig[process.env.NODE_ENV];
  return ngConstant({
    constants: envConfig,
    name: 'configuration',
    stream: true
  })
    .pipe(gulp.dest('src/app/'));


});


