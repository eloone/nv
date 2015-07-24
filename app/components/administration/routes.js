(function(angular) {
  angular.module('nvision.components.administration.routes', ['nvision.main.routes'])
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider){
		 $stateProvider
		    .state('root.administration.usersRights', {
		      abstract: true,
		      url: '/users-rights',
		      template: '<ui-view/>'
		    })
		    .state('root.administration.usersRights.environments', {
		      url: '/environments',
		      templateUrl: 'app/components/administration/users-rights/environments/environments.html'
		    })
		    .state('root.administration.usersRights.environmentsRules', {
		      url: '/environments-rules',
		      templateUrl: 'app/components/administration/users-rights/environments-rules/environments-rules.html'
		    })
		    .state('root.administration.cache', {
		      url: '/cache',
		      templateUrl: 'app/components/administration/cache/cache.html'
		    });
	}]);
	
})(window.angular);