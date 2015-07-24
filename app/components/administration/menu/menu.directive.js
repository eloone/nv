(function(angular){
	angular.module('nvision.components.administration.menu', [])
	.directive('nvAdmMenu', ['RecursionHelper', function(RecursionHelper){
		return {
			restrict: 'E',
			templateUrl: 'app/components/administration/menu/menu.html',
			replace: true,
			scope: {
				'menu': '='
			},
			compile: function(elt) {
				return RecursionHelper.compile(elt);
			}
		};
	}]);
})(window.angular);