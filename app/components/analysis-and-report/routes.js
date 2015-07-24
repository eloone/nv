(function(angular) {
  angular.module('nvision.components.analysisAndReport.routes', ['nvision.main.routes'])
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider){
		 $stateProvider
		    .state('root.analysisAndReport.tradesVolumes', {
		      url: '/trades-volumes',
		      templateUrl: 'app/components/analysis-and-report/trades-volumes/trades-volumes.html'
		    })
		    .state('root.analysisAndReport.globalVolumes', {
		      url: '/global-volumes',
		      templateUrl: 'app/components/analysis-and-report/global-volumes/global-volumes.html'
		    });
	}]);
	
})(window.angular);