(function(angular){
	angular.module('nvision.components.administration.menuService', [
		'ngResource',
		'nvision.components.administration.menuFormatter'
	])
	.factory('AdmMenuService', ['AdmMenuFormatter', 'MenuFormatter', '$resource', '$q', 'AppConfig', AdmMenuServiceProvider]);

	function AdmMenuServiceProvider(AdmMenuFormatter, MenuFormatter, $resource, $q, AppConfig) {

		var apiRoutes = AppConfig.get('apiRoutes.admMenu');

		function AdmMenuService() {
			this.getTree = $resource(apiRoutes.getAdmMenu).get;

			this.get = function() {
				var deferred = $q.defer();
		
				$resource(apiRoutes.getAdmMenu).get(function(res){

					var menu = _.chain(res.data)
				        .map(MenuFormatter.setMenuValue)
				        .map(AdmMenuFormatter.setUniqueIds)
				        .map(AdmMenuFormatter.setItemLevel)
				        .map(AdmMenuFormatter.formMenuState)
				        .first()
				        .get('items')
				        .value();

				    deferred.resolve(menu);
				}, function(err){
					deferred.reject(err);
				});

				return deferred.promise;
			};
		}

		return new AdmMenuService();
	}

})(window.angular);