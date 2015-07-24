(function(angular) {
  angular.module('nvision.components.tradeMonitoring.routes', ['nvision.main.routes'])
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider){
		var templateUrl = 'app/components/trade-monitoring/dashboard/dashboard.html';
		
		 $stateProvider
		    .state('root.tradeMonitoring.etdActivity', {
		      url: '/etd-activity',
		      templateUrl: templateUrl
		    })
		    .state('root.tradeMonitoring.equitiesActivity', {
		      url: '/equities-activity',
		      templateUrl: templateUrl
		    })
		    .state('root.tradeMonitoring.forexActivity', {
		      url: '/forex-activity',
		      templateUrl: templateUrl
		    })
		    .state('root.tradeMonitoring.otcActivity', {
		      url: '/otc-activity',
		      templateUrl: templateUrl
		    })
		    .state('root.tradeMonitoring.customerActivities', {
		      url: '/customer-activities',
		      templateUrl: templateUrl
		    });
	}]);
	
})(window.angular);