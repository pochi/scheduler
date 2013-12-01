
module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: true,
    singleRun: true,
    colors: true,

    files : [
      'app/lib/angular/angular.js',

      //App-specific Code
      'app/scripts/config/router.js',
      'app/scripts/config/config.js',
      'app/scripts/services/**/*.js',
      'app/scripts/directives/**/*.js',
      'app/scripts/controllers/**/*.js',
      'app/scripts/app.js',

      // Testing library and codes
      'test/lib/angular-mocks/angular-mocks.js',
      './test/unit/*js',
      './test/unit/**/*js'
    ]
  });
};