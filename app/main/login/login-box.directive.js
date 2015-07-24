(function(angular) {
  angular.module('nvision.main.loginBox', ['nvision.main.login.controller'])
.directive('nvisionLoginBox', [function(){
	return {
		restrict: 'E',
		templateUrl: 'app/main/login/login-box.html',
		controller: 'LoginCtrl'
	};
}]);
	
})(window.angular);