(function(angular) {
  angular.module('nvision.components.act40.routes', ['nvision.main.routes'])
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider){
		 $stateProvider
		    .state('root.act40.intradayPosition', {
		      url: '/intraday-position',
		      templateUrl: 'app/components/act-40/intraday-position/intraday-position.html'
		    })
		    .state('root.act40.breaks', {
		      url: '/breaks',
		      templateUrl: 'app/components/act-40/breaks/breaks.html'
		    })
		    .state('root.act40.spotDate', {
		      url: '/spot-date',
		      templateUrl: 'app/components/act-40/spot-date/spot-date.html'
		    })
		    .state('root.act40.eodPosition', {
		      url: '/eod-position',
		      templateUrl: 'app/components/act-40/eod-position/eod-position.html'
		    });
	}]);
	
})(window.angular);