(function(angular){
	angular.module('nvision.components.selectProfile.directive', ['ui.bootstrap'])
	.directive('selectProfile', ['$modal', function($modal){
		return {
			restrict: 'E',
			replace: true,
			scope: {
				profiles: '='
			},
			link: function($scope, elt){
				$modal.open({
					templateUrl: 'app/components/select-profile/select-profile.modal.html',
					backdrop: false,
					scope: $scope
				});
			}
		}
	}]);

})(window.angular);