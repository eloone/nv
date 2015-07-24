(function(angular) {
  angular.module('nvision.components.loginBox', ['nvision.components.login.controller'])
.directive('nvisionLoginBox', [function(){
	return {
		restrict: 'E',
		templateUrl: '/app/components/login/login-box.html',
		controller: 'LoginCtrl'
	};
}]);
	
})(window.angular);