(function(angular) {
  angular.module('nvision.components.administration', [
  		'nvision.components.administration.menu',
  		'nvision.lib.user.service',
      'nvision.components.administration.menuService'
  	])
  .controller('AdministrationCtrl', ['User', '$scope', 'AdmMenuService', AdministrationCtrl]);

  function AdministrationCtrl(User, $scope, AdmMenuService){
  	User.get({userId: 6}, function(user){
  		$scope.user = user;
  	});

    AdmMenuService.get().then(function(admMenu){
      $scope.admMenu = admMenu;
    });
  }
	
})(window.angular);