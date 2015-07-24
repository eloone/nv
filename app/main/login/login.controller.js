(function(angular) {
  angular.module('nvision.main.login.controller', [
  	'ui.router',
  	'nvision.main.login.service'
  ])
  .controller('LoginCtrl', ['$scope', 'LoginService', '$state', '$rootScope', LoginCtrl]);

  function LoginCtrl($scope, LoginService, $state, $rootScope) {
  	$rootScope.user = {
  		logged: false
  	};

  	$scope.login = function() {
  		LoginService.authenticate($scope.credentials.email, $scope.credentials.password).then(function(result){
  			console.log('result authenticate', result);
  			$rootScope.user.logged = result.data.authenticated;

  			if($rootScope.user.logged) {
  				$state.go('root.selectProfile');
  			}
  		});
  	};
  }

})(window.angular);