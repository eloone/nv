(function(angular) {
  angular.module('nvision.components.login.service', [])
.factory('LoginService', ['$http', LoginProvider]);
	
	function LoginProvider($http) {

		function LoginService(){
			this.authenticate = authenticate;
		}

		function authenticate(email, password){
			return $http.post('api/login', {
				email: email,
				password: password
			}).success(function (response) {
                return response;
            }).error(function (response){
            	console.log('ERROR LOGIN');
            	return response;
            });
		}

		return new LoginService();
	}

})(window.angular);