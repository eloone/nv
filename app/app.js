(function(angular) {
  /* Module that contains all the nvision application logic */
  angular.module('nvision', [
  	'nvision.lib',
  	'nvision.main',
  	'nvision.components'
  	])
	.config(['$locationProvider', function($locationProvider){
		$locationProvider.html5Mode(true);
	}]);
	
})(window.angular);