(function(angular) {
  angular.module('nvision.components.tradeMonitoring.dashboard.collapseButton', [])
.directive('nvCollapseButton', ['User', function(User){
	return {
		restrict: 'E',
		scope: {
			toggle: '=',
			showable: '='
		},
		templateUrl: 'app/components/trade-monitoring/dashboard/metrics-row/collapse-button.html'
	};
}]);
	
})(window.angular);