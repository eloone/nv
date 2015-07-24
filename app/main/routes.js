(function(angular) {
  angular.module('nvision.main.routes', [
  	'ui.router',
  	'nvision.components.tradeMonitoring.routes',
  	'nvision.components.administration.routes',
  	'nvision.components.act40.routes',
  	'nvision.components.analysisAndReport.routes'
  	])
	.config(['$stateProvider', '$urlRouterProvider', 'AppConfigProvider', function($stateProvider,$urlRouterProvider, AppConfigProvider){
	 var AppConfig = AppConfigProvider.$get();
	 var rootState = AppConfig.get('rootState');

	 $urlRouterProvider.otherwise('/');
	 $stateProvider
	    .state(rootState, {
	      abstract: true,
	      templateUrl: 'app/main/main.html'
	   	})
	   	.state(rootState + '.welcome', {
	      url: '/',
	      templateUrl: 'app/components/welcome.html'
	   	})
	   	.state(rootState + '.selectProfile', {
	      url: '/select-profile',
	      controller: 'SelectProfileCtrl'
	   	})
	    .state(rootState + '.administration', {
	      url: '/administration',
	      controller: 'AdministrationCtrl',
	      templateUrl: 'app/components/administration/administration.html'
	    })
	    .state(rootState + '.act40', {
	      abstract: true,
	      url: '/act-40',
	      template: '<ui-view/>'
	    })
	    .state(rootState + '.analysisAndReport', {
	      abstract: true,
	      url: '/analysis-and-report',
	      template: '<ui-view/>'
	    })
	    .state(rootState + '.clientAllocation', {
	      url: '/client-allocation',
	      templateUrl: 'app/components/client-allocation/client-allocation.html'
	    })
	    .state(rootState + '.tradeMonitoring', {
	      abstract: true,
	      url: '/trade-monitoring',
	      template: '<ui-view/>'
	    });
	}]);
	
})(window.angular);