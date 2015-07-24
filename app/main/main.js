(function(angular) {
  angular.module('nvision.main', [
  	'nvision.lib.user.service',
  	'ui.router',
  	'nvision.main.config',
  	'nvision.main.routes',
  	'nvision.main.header',
  	'nvision.main.footer',
  	'nvision.main.login'
  ])
  .controller('MainCtrl', ['$scope', 'User', '$state', MainCtrl]);

  function MainCtrl($scope,User, $state){

  }

})(window.angular);