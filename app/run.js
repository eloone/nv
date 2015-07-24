(function(angular) {
  /* Module that starts the nvision application */
  angular.module('runNvision', ['nvision.lib.httpErrorHandler', 'nvision.main.config'])
  .run(['AppConfig', function(AppConfig){

    // Load the app configuration needed by all app modules before app starts
    AppConfig.init().then(function(){

      // Start nvision application
      angular.element(document).ready(function() {
        angular.bootstrap(document, ['nvision'], { strictDi: true });
      });

    });
  }]);

  // Creates a fictive div to bootstrap angular but not on html element 
  // to avoid conflicts between apps
  var fictiveDiv = document.createElement('div');
  
  // Run everything that the nvision application needs before it is started
  angular.element(document).ready(function() {
    angular.bootstrap(fictiveDiv, ['runNvision'], { strictDi: true });
  });

})(window.angular);