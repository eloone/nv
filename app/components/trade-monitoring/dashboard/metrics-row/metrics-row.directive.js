(function(angular) {
 angular.module('nvision.components.tradeMonitoring.dashboard.metricsRow', [
 	'nvision.components.tradeMonitoring.dashboard.collapseButton'
 ])
.directive('nvMetricsRow', ['User', function(User){
	return {
		restrict: 'E',
		scope: {
			metrics: '=',
			show: '='
		},
		templateUrl: 'app/components/trade-monitoring/dashboard/metrics-row/metrics-row.html'
	};
}]);
	
})(window.angular);