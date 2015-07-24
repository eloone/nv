(function(angular, $) {
  angular.module('nvision.components.tradeMonitoring.dashboard', [
  	'ui.router',
  	'nvision.lib.user.service',  	
  	'nvision.lib.utils',
  	'nvision.components.tradeMonitoring.tradeActivityService',
  	'nvision.components.tradeMonitoring.dashboard.metricsRow',
  	'nvision.components.tradeMonitoring.dashboard.scrollableTable',
  	'nvision.components.tradeMonitoring.dashboard.collapseButton'
  	])
	.controller('TradeMonitoringDashboardCtrl', ['$state', '$scope', 'User','TradeActivity', '$_', TradeMonitoringDashboardCtrl]);

function TradeMonitoringDashboardCtrl($state, $scope, User, TradeActivity, $_) {
	var tradeData = {};

	User.get({userId: 6}, function(user) {
		var tradeMonitoringMenu = _.where(user.headerMenu, {label: 'Trade Monitoring'});
		
		if(tradeMonitoringMenu[0]){
			_.forEach(tradeMonitoringMenu[0].submenu, function(menuItem){
				var state = 'root.' + tradeMonitoringMenu[0].value + '.' + menuItem.value;
				tradeData[state] = {
					label: menuItem.label
				};
			});

			$scope.trade = tradeData[$state.current.name];
		}
	});
	
	$scope.metrics = TradeActivity.get();

}
	
})(window.angular, window.jQuery);