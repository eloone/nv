(function(angular) {
  angular.module('nvision.main.header.menu', ['nvision.main.header.menuService'])
	.directive('nvHeaderMenu', ['HeaderMenuService', function(HeaderMenuService){
		return {
			restrict: 'E',
			templateUrl: 'app/main/header/menu/menu.html',
			link: function($scope){
				HeaderMenuService.get().then(function(menu){
					$scope.headerMenu = menu;
				});
			}
		};
	}]);
	
})(window.angular);